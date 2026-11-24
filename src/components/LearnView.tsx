import { useState, useMemo, useEffect, useCallback } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CalendarCheck,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import type {
  ForeignLanguage,
  Language,
  LearnTopicModule,
  StudentState,
  SubjectDiagnosticSummary,
  SubjectId,
  TopicQuizSummary,
  Track,
} from '../types';
import type { TranslationDictionary } from '../translations';
import { getSubjectPoints, getSubjectsForTrack } from '../utils/subjects';
import { generateSevenDayStudyPlan } from '../utils/grading';
import { getTopicScoreKey, getTopicsForSubject } from '../data/learnTopics';

interface LearnViewProps {
  dict: TranslationDictionary;
  lang: Language;
  student: StudentState;
  navResetTick: number;
  onUpdateStudent: (updater: (prev: StudentState) => StudentState) => void;
  onJumpToPreparePaper: (paperId: string) => void;
}

export function LearnView({
  dict,
  lang,
  student,
  navResetTick,
  onUpdateStudent,
  onJumpToPreparePaper,
}: LearnViewProps) {
  const trackSubjects = useMemo(
    () => getSubjectsForTrack(student.track, student.foreignLanguage),
    [student.track, student.foreignLanguage]
  );

  // Ensure selected subject is valid for current track
  const activeSubjectId: SubjectId = useMemo(() => {
    const exists = trackSubjects.some((s) => s.id === student.selectedSubject);
    return exists ? student.selectedSubject : trackSubjects[0].id;
  }, [trackSubjects, student.selectedSubject]);

  const subjectTopics = useMemo(
    () => getTopicsForSubject(student.track, activeSubjectId),
    [student.track, activeSubjectId]
  );

  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const activeTopic: LearnTopicModule | null = useMemo(() => {
    if (!activeTopicId) return null;
    return subjectTopics.find((t) => t.id === activeTopicId) ?? null;
  }, [activeTopicId, subjectTopics]);

  // Reset to Step 2 topic list whenever track, profile, or navbar Learn tab click changes
  useEffect(() => {
    setActiveTopicId(null);
    setSelectedAnswers({});
  }, [student.track, student.profile, navResetTick]);

  // Clear local answers whenever opening a different topic
  useEffect(() => {
    setSelectedAnswers({});
  }, [activeTopicId, activeSubjectId]);

  const activeSubjectPoints = getSubjectPoints(student.track, activeSubjectId);
  const isLanguageSubject =
    activeSubjectId === 'khmer' || activeSubjectId === 'english' || activeSubjectId === 'french';

  const handleTrackChange = (nextTrack: Track) => {
    setActiveTopicId(null);
    setSelectedAnswers({});
    onUpdateStudent((prev) => {
      const nextForeign: ForeignLanguage = nextTrack === 'social' ? 'english' : prev.foreignLanguage;
      const validList = getSubjectsForTrack(nextTrack, nextForeign);
      const keepSubject = validList.some((s) => s.id === prev.selectedSubject)
        ? prev.selectedSubject
        : validList[0].id;
      return {
        ...prev,
        track: nextTrack,
        foreignLanguage: nextForeign,
        selectedSubject: keepSubject,
      };
    });
  };

  const handleForeignLanguageChange = (nextFl: ForeignLanguage) => {
    setActiveTopicId(null);
    setSelectedAnswers({});
    onUpdateStudent((prev) => {
      const wasFl = prev.selectedSubject === 'english' || prev.selectedSubject === 'french';
      return {
        ...prev,
        foreignLanguage: nextFl,
        selectedSubject: wasFl ? nextFl : prev.selectedSubject,
      };
    });
  };

  const handleSelectSubject = (subj: SubjectId) => {
    setActiveTopicId(null);
    setSelectedAnswers({});
    onUpdateStudent((prev) => ({ ...prev, selectedSubject: subj }));
  };

  const handleOpenTopic = (topicId: string) => {
    setSelectedAnswers({});
    setActiveTopicId(topicId);
  };

  const syncCompletedTopicToStudent = useCallback(
    (topic: LearnTopicModule, answersMap: Record<string, number>) => {
      const correctCount = topic.questions.reduce(
        (acc, q) => (answersMap[q.id] === q.correctIndex ? acc + 1 : acc),
        0
      );
      const totalCount = topic.questions.length;
      const nowIso = new Date().toISOString();
      const topicSummary: TopicQuizSummary = {
        topicId: topic.id,
        subjectId: activeSubjectId,
        track: student.track,
        score: correctCount,
        total: totalCount,
        percentage: Math.round((correctCount / Math.max(1, totalCount)) * 100),
        completedAt: nowIso,
      };

      onUpdateStudent((prev) => {
        const key = getTopicScoreKey(prev.track, activeSubjectId, topic.id);
        const nextTopicScores: Partial<Record<string, TopicQuizSummary>> = {
          ...(prev.topicScores ?? {}),
          [key]: topicSummary,
        };

        // Recompute subject diagnostic summary across all attempted topics in this subject & track
        const topicsInSubject = getTopicsForSubject(prev.track, activeSubjectId);
        let subjCorrect = 0;
        let subjTotal = 0;
        const weakTopics: SubjectDiagnosticSummary['weakTopics'] = [];

        for (const t of topicsInSubject) {
          const tKey = getTopicScoreKey(prev.track, activeSubjectId, t.id);
          const recorded = nextTopicScores[tKey];
          if (recorded) {
            subjCorrect += recorded.score;
            subjTotal += recorded.total;
            if (recorded.score < recorded.total) {
              const missedCount = recorded.total - recorded.score;
              weakTopics.push({
                topicKey: t.id,
                topicLabel: t.title[lang],
                relatedPaperId: t.relatedPaperId,
                missedReason:
                  lang === 'km'
                    ? `ឆ្លើយខុស ${missedCount}/${recorded.total} សំណួរក្នុងមេរៀន "${t.title.km}" — គួរហាត់វិញ្ញាសាបន្ថែម។`
                    : `Missed ${missedCount}/${recorded.total} questions in "${t.title.en}" — review explanations & practice past paper.`,
              });
            }
          }
        }

        const nextSubjectSummary: SubjectDiagnosticSummary = {
          subjectId: activeSubjectId,
          track: prev.track,
          score: subjCorrect,
          total: subjTotal,
          percentage: Math.round((subjCorrect / Math.max(1, subjTotal)) * 100),
          weakTopics,
          completedAt: nowIso,
        };

        const nextSubjectScores: Partial<Record<SubjectId, SubjectDiagnosticSummary>> = {
          ...prev.subjectScores,
          [activeSubjectId]: nextSubjectSummary,
        };

        // Regenerate 7-Day Study Plan automatically, keeping completed checkmarks for matching days
        const prevCompletedByDay = new Map(prev.studyPlan.map((d) => [d.day, d.completed]));
        const freshPlan = generateSevenDayStudyPlan(prev.track, nextSubjectScores, dict, lang).map(
          (dayItem) => ({
            ...dayItem,
            completed: prevCompletedByDay.get(dayItem.day) ?? false,
          })
        );

        return {
          ...prev,
          topicScores: nextTopicScores,
          subjectScores: nextSubjectScores,
          studyPlan: freshPlan,
        };
      });
    },
    [activeSubjectId, dict, lang, onUpdateStudent, student.track]
  );

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (!activeTopic) return;
    // Lock answer once chosen so instant feedback & score stay clear until Retake Quiz
    if (selectedAnswers[questionId] !== undefined) return;

    const nextAnswers = { ...selectedAnswers, [questionId]: optionIndex };
    setSelectedAnswers(nextAnswers);

    const allAnswered = activeTopic.questions.every((q) => nextAnswers[q.id] !== undefined);
    if (allAnswered) {
      syncCompletedTopicToStudent(activeTopic, nextAnswers);
    }
  };

  const handleRetakeTopicQuiz = () => {
    setSelectedAnswers({});
  };

  const handleRefreshStudyPlan = () => {
    onUpdateStudent((prev) => ({
      ...prev,
      studyPlan: generateSevenDayStudyPlan(prev.track, prev.subjectScores, dict, lang),
    }));
  };

  const handleTogglePlanDay = (dayId: string) => {
    onUpdateStudent((prev) => ({
      ...prev,
      studyPlan: prev.studyPlan.map((d) =>
        d.id === dayId ? { ...d, completed: !d.completed } : d
      ),
    }));
  };

  // Priority Weakness Ranking weighted by BacII points
  const prioritizedWeaknesses = useMemo(() => {
    const items: {
      subjectId: SubjectId;
      subjectName: string;
      points: number;
      topicLabel: string;
      missedReason: string;
      relatedPaperId: string;
    }[] = [];

    for (const spec of trackSubjects) {
      const summary = student.subjectScores[spec.id];
      if (!summary) continue;
      for (const wt of summary.weakTopics) {
        items.push({
          subjectId: spec.id,
          subjectName: dict.subjects[spec.id].name,
          points: spec.points,
          topicLabel: wt.topicLabel,
          missedReason: wt.missedReason,
          relatedPaperId: wt.relatedPaperId,
        });
      }
    }

    return items.sort((a, b) => b.points - a.points);
  }, [trackSubjects, student.subjectScores, dict]);

  const answeredCount = activeTopic
    ? activeTopic.questions.filter((q) => selectedAnswers[q.id] !== undefined).length
    : 0;
  const isTopicCompleted =
    Boolean(activeTopic) && answeredCount === (activeTopic?.questions.length ?? 0);
  const topicCorrectCount = activeTopic
    ? activeTopic.questions.reduce(
        (acc, q) => (selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc),
        0
      )
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-[#12366B]">{dict.learn.pageTitle}</h1>
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          {dict.learn.pageSubtitle}
        </p>
      </div>

      {/* Track, Foreign Language & Step 1 Subject Selector Card */}
      <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Track Switcher */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#12366B]">
              {dict.learn.trackLabel}
            </label>
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F5F7FB] rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => handleTrackChange('science')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  student.track === 'science'
                    ? 'bg-[#12366B] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#12366B]'
                }`}
              >
                {dict.tracks.science.label}
              </button>
              <button
                type="button"
                onClick={() => handleTrackChange('social')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  student.track === 'social'
                    ? 'bg-[#12366B] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#12366B]'
                }`}
              >
                {dict.tracks.social.label}
              </button>
            </div>
            <p className="text-xs text-[#64748B]">{dict.tracks[student.track].subtitle}</p>
          </div>

          {/* Foreign Language (French option shown ONLY when Science Track is selected) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#12366B]">
              {dict.learn.languageChoiceLabel} (50 {dict.prepare.pointsUnit})
            </label>
            {student.track === 'science' ? (
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F5F7FB] rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => handleForeignLanguageChange('english')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    student.foreignLanguage === 'english'
                      ? 'bg-[#12366B] text-white shadow-sm'
                      : 'text-[#64748B] hover:text-[#12366B]'
                  }`}
                >
                  {dict.subjects.english.name}
                </button>
                <button
                  type="button"
                  onClick={() => handleForeignLanguageChange('french')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    student.foreignLanguage === 'french'
                      ? 'bg-[#12366B] text-white shadow-sm'
                      : 'text-[#64748B] hover:text-[#12366B]'
                  }`}
                >
                  {dict.subjects.french.name}
                </button>
              </div>
            ) : (
              <div className="py-2.5 px-3.5 rounded-xl bg-[#EEF3FA] text-xs font-bold text-[#12366B]">
                {dict.subjects.english.name} (50 {dict.prepare.pointsUnit})
              </div>
            )}
          </div>
        </div>

        {/* Step 1: Subject Cards Grid */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold text-[#12366B]">{dict.learn.subjectLabel}</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {trackSubjects.map((spec) => {
              const isSelected = activeSubjectId === spec.id;
              const existing = student.subjectScores[spec.id];
              return (
                <button
                  key={spec.id}
                  type="button"
                  onClick={() => handleSelectSubject(spec.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-[#12366B] border-[#12366B] text-white shadow-sm'
                      : 'bg-[#F5F7FB] border-slate-200 text-[#1E293B] hover:border-[#12366B]/50'
                  }`}
                >
                  <div className="text-xs font-bold leading-snug">
                    {dict.subjects[spec.id].name}
                  </div>
                  <div
                    className={`text-[11px] font-semibold tabular-nums flex items-center justify-between ${
                      isSelected ? 'text-[#FFF3E8]' : 'text-[#64748B]'
                    }`}
                  >
                    <span>
                      {spec.points} {dict.prepare.pointsUnit}
                    </span>
                    {existing && (
                      <span className={isSelected ? 'text-[#F47700]' : 'text-[#12366B]'}>
                        {existing.percentage}%
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main 2-Column Workspace: Left Step 2/3 Topic & Quiz (7 cols) + Right Priority & 7-Day Plan (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Step 2 (Topic Cards) or Step 3 (4-Question Diagnostic Quiz) */}
        <section className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          {!activeTopic ? (
            /* STEP 2: Core Exam Topics / Skill Modules Grid */
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-extrabold text-[#12366B]">
                      {dict.subjects[activeSubjectId].name}
                    </h2>
                    <span className="text-xs font-bold text-[#F47700] bg-[#FFF3E8] px-2.5 py-0.5 rounded-full tabular-nums">
                      {activeSubjectPoints} {dict.prepare.pointsUnit}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    {dict.subjects[activeSubjectId].shortDesc}
                  </p>
                </div>

                {student.subjectScores[activeSubjectId] && (
                  <div className="text-xs font-bold text-[#12366B] bg-[#EEF3FA] px-3 py-1.5 rounded-xl tabular-nums shrink-0 self-start sm:self-center">
                    {dict.learn.scoreLabel}:{' '}
                    <span className="text-[#F47700]">
                      {student.subjectScores[activeSubjectId]?.percentage}%
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#12366B]">
                  <BookOpen className="w-4 h-4 text-[#F47700] shrink-0" />
                  <span>
                    {isLanguageSubject ? dict.learn.skillsHeading : dict.learn.topicsHeading}
                  </span>
                </div>
                <p className="text-xs text-[#64748B]">{dict.learn.topicsSubheading}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjectTopics.map((topic, idx) => {
                  const scoreKey = getTopicScoreKey(student.track, activeSubjectId, topic.id);
                  const savedScore = student.topicScores?.[scoreKey];
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleOpenTopic(topic.id)}
                      className="group text-left rounded-2xl border border-slate-200 bg-[#F5F7FB]/70 hover:bg-white hover:border-[#12366B] hover:shadow-md p-5 transition-all cursor-pointer flex flex-col justify-between gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold text-[#F47700] uppercase tracking-wide">
                            0{idx + 1} · {dict.learn.topicQuestionsCountLabel}
                          </span>
                          {savedScore && (
                            <span
                              className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full tabular-nums ${
                                savedScore.percentage >= 75
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-[#FFF3E8] text-[#F47700]'
                              }`}
                            >
                              {savedScore.score}/{savedScore.total} ({savedScore.percentage}%)
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm sm:text-base font-extrabold text-[#12366B] group-hover:text-[#0d2a54] leading-snug">
                          {topic.title[lang]}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {topic.subtitle[lang]}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-xs font-bold text-[#12366B] group-hover:text-[#F47700] transition-colors">
                        <span>
                          {savedScore ? dict.learn.retakeTopicBtn : dict.learn.startTopicBtn}
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            /* STEP 3: Active 4-Question Multiple-Choice Diagnostic Quiz */
            <>
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <button
                  type="button"
                  onClick={() => setActiveTopicId(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EEF3FA] hover:bg-[#dfe8f6] text-[#12366B] text-xs font-bold transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{dict.learn.backToTopicsBtn}</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#64748B] tabular-nums">
                    {dict.learn.questionProgressLabel}: {answeredCount}/{activeTopic.questions.length}
                  </span>
                  {answeredCount > 0 && (
                    <button
                      type="button"
                      onClick={handleRetakeTopicQuiz}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#12366B] hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{dict.learn.retakeTopicBtn}</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold text-[#F47700]">
                  {dict.subjects[activeSubjectId].name} · {activeSubjectPoints} {dict.prepare.pointsUnit}
                </div>
                <h2 className="text-xl font-extrabold text-[#12366B]">
                  {activeTopic.title[lang]}
                </h2>
                <p className="text-xs text-[#64748B]">{activeTopic.subtitle[lang]}</p>
              </div>

              <div className="space-y-5">
                {activeTopic.questions.map((q, qIdx) => {
                  const chosenIdx = selectedAnswers[q.id];
                  const isAnswered = chosenIdx !== undefined;
                  const isCorrect = isAnswered && chosenIdx === q.correctIndex;
                  const optionLetters = ['A', 'B', 'C', 'D'];

                  return (
                    <div
                      key={q.id}
                      className="rounded-xl border border-slate-200 bg-[#F5F7FB]/70 p-5 space-y-4"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-[#12366B]">
                          {dict.learn.questionLabel} {qIdx + 1} / {activeTopic.questions.length}
                        </span>
                        {isAnswered && (
                          <span
                            className={`inline-flex items-center gap-1 font-extrabold ${
                              isCorrect ? 'text-emerald-700' : 'text-rose-700'
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>{dict.learn.instantCorrect}</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5" />
                                <span>{dict.learn.instantWrong}</span>
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-[#1E293B] leading-relaxed">
                        {q.prompt[lang]}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options[lang].map((optText, optIdx) => {
                          const isChosenOption = chosenIdx === optIdx;
                          const isCorrectOption = q.correctIndex === optIdx;

                          let btnStyle =
                            'bg-white border-slate-200 text-[#1E293B] hover:border-[#12366B]/70';
                          if (isAnswered) {
                            if (isCorrectOption) {
                              btnStyle =
                                'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                            } else if (isChosenOption) {
                              btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                            } else {
                              btnStyle = 'bg-white/60 border-slate-200 text-[#64748B] opacity-80';
                            }
                          }

                          return (
                            <button
                              key={`${q.id}-opt-${optIdx}`}
                              type="button"
                              disabled={isAnswered}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`px-4 py-3 rounded-xl border text-left text-sm transition-all flex items-start gap-2.5 ${
                                isAnswered ? 'cursor-default' : 'cursor-pointer'
                              } ${btnStyle}`}
                            >
                              <span
                                className={`shrink-0 w-5 h-5 rounded-md text-xs font-extrabold flex items-center justify-center mt-0.5 ${
                                  isAnswered && isCorrectOption
                                    ? 'bg-emerald-600 text-white'
                                    : isAnswered && isChosenOption
                                    ? 'bg-rose-600 text-white'
                                    : 'bg-[#EEF3FA] text-[#12366B]'
                                }`}
                              >
                                {optionLetters[optIdx]}
                              </span>
                              <span className="leading-snug">{optText}</span>
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <div
                          className={`rounded-xl p-3.5 border text-xs space-y-1.5 ${
                            isCorrect
                              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                              : 'bg-rose-50/80 border-rose-200 text-rose-950'
                          }`}
                        >
                          <div className="font-extrabold">
                            {dict.learn.explanationLabel}:
                          </div>
                          <p className="leading-relaxed">{q.explanation[lang]}</p>
                          {!isCorrect && (
                            <div className="pt-1">
                              <button
                                type="button"
                                onClick={() => onJumpToPreparePaper(activeTopic.relatedPaperId)}
                                className="text-xs font-bold text-[#12366B] hover:text-[#F47700] transition-colors cursor-pointer"
                              >
                                {dict.learn.practiceWeakTopicBtn}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {isTopicCompleted && (
                <div className="rounded-2xl bg-[#EEF3FA] border border-[#12366B]/20 p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold text-[#F47700]">
                        {dict.learn.quizCompleteTitle}
                      </div>
                      <div className="text-lg font-extrabold text-[#12366B] tabular-nums">
                        {dict.learn.scoreLabel}: {topicCorrectCount} / {activeTopic.questions.length}{' '}
                        ({Math.round((topicCorrectCount / activeTopic.questions.length) * 100)}%)
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{dict.learn.autoSyncedBadge}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleRetakeTopicQuiz}
                      className="px-4 py-2 rounded-xl bg-[#F47700] hover:bg-[#dc6b00] text-white text-xs font-bold transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{dict.learn.retakeTopicBtn}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTopicId(null)}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#12366B] text-[#12366B] text-xs font-bold transition-colors cursor-pointer"
                    >
                      {dict.learn.backToTopicsBtn}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        {/* Right: Priority Weakness Ranking + 7-Day Study Checklist */}
        <aside className="lg:col-span-5 space-y-6">
          {/* Priority Weakness Ranking */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
            <div>
              <h2 className="text-lg font-extrabold text-[#12366B]">
                {dict.learn.weaknessRankingTitle}
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                {dict.learn.weaknessRankingSubtitle}
              </p>
            </div>

            {prioritizedWeaknesses.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {prioritizedWeaknesses.map((w, idx) => (
                  <div key={`${w.subjectId}-${idx}`} className="py-3.5 first:pt-1 last:pb-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-[#12366B]">
                        {idx + 1}. {w.subjectName} — {w.topicLabel}
                      </span>
                      <span className="font-bold text-[#F47700] tabular-nums shrink-0">
                        {w.points} {dict.learn.pointsWeightUnit}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">{w.missedReason}</p>
                    <button
                      type="button"
                      onClick={() => onJumpToPreparePaper(w.relatedPaperId)}
                      className="text-xs font-bold text-[#12366B] hover:text-[#F47700] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{dict.learn.practiceWeakTopicBtn}</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-[#EEF3FA] p-4 text-xs text-[#12366B] leading-relaxed">
                {Object.keys(student.subjectScores).length > 0
                  ? dict.learn.noWeaknessNote
                  : dict.learn.planEmptyNote}
              </div>
            )}

            <button
              type="button"
              onClick={handleRefreshStudyPlan}
              className="w-full py-2.5 px-4 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#F47700]" />
              <span>{dict.learn.generatePlanBtn}</span>
            </button>
          </div>

          {/* 7-Day Study Checklist */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-extrabold text-[#12366B] flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-[#F47700]" />
                  <span>{dict.learn.studyPlanTitle}</span>
                </h2>
                <p className="text-xs text-[#64748B] mt-1">{dict.learn.studyPlanSubtitle}</p>
              </div>
              {student.studyPlan.length > 0 && (
                <span className="text-xs font-bold text-[#12366B] tabular-nums shrink-0">
                  {student.studyPlan.filter((d) => d.completed).length}/{student.studyPlan.length}
                </span>
              )}
            </div>

            {student.studyPlan.length > 0 ? (
              <div className="space-y-2.5">
                {student.studyPlan.map((dayItem) => (
                  <div
                    key={dayItem.id}
                    className={`rounded-xl border p-3.5 transition-colors ${
                      dayItem.completed
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : 'bg-[#F5F7FB] border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={dayItem.completed}
                        onChange={() => handleTogglePlanDay(dayItem.id)}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#12366B] cursor-pointer"
                        aria-label={`${dict.learn.dayPrefix} ${dayItem.day}`}
                      />
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-bold text-[#F47700] tabular-nums">
                            {dict.learn.dayPrefix} {dayItem.day} · {dayItem.durationLabel}
                          </span>
                          <button
                            type="button"
                            onClick={() => onJumpToPreparePaper(dayItem.relatedPaperId)}
                            className="text-[11px] font-semibold text-[#12366B] hover:text-[#F47700] inline-flex items-center gap-0.5 cursor-pointer shrink-0"
                          >
                            <span>{dict.nav.prepare}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                        <div
                          className={`text-xs font-bold ${
                            dayItem.completed ? 'line-through text-[#64748B]' : 'text-[#12366B]'
                          }`}
                        >
                          {dayItem.focusTitle}
                        </div>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {dayItem.actionDetail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-[#F5F7FB] border border-slate-200 p-4 text-xs text-[#64748B] leading-relaxed">
                {dict.learn.planEmptyNote}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
