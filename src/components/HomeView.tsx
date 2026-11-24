import { ArrowRight, BookOpen, FileText, GraduationCap, Database, CheckCircle2, AlertCircle } from 'lucide-react';
import type { NavPage, StudentState } from '../types';
import type { TranslationDictionary } from '../translations';

interface HomeViewProps {
  dict: TranslationDictionary;
  student: StudentState;
  onNavigate: (page: NavPage) => void;
}

export function HomeView({ dict, student, onNavigate }: HomeViewProps) {
  const scoredList = Object.values(student.subjectScores);
  const completedCount = scoredList.length;
  const totalQuestionsAnswered = scoredList.reduce((acc, s) => acc + (s?.total ?? 0), 0);
  const totalQuestionsCorrect = scoredList.reduce((acc, s) => acc + (s?.score ?? 0), 0);
  const readinessPct =
    totalQuestionsAnswered > 0
      ? Math.round((totalQuestionsCorrect / totalQuestionsAnswered) * 100)
      : 0;

  const planDone = student.studyPlan.filter((d) => d.completed).length;
  const planTotal = student.studyPlan.length;

  const weakTopics = scoredList.flatMap((s) =>
    (s?.weakTopics ?? []).map((wt) => ({
      subjectName: s ? dict.subjects[s.subjectId].name : '',
      topicLabel: wt.topicLabel,
    }))
  );

  const trackInfo = dict.tracks[student.track];

  const handleScrollToFeatures = () => {
    const el = document.getElementById('pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('learn');
    }
  };

  return (
    <div className="space-y-16 pb-8">
      {/* Hero Section (2-column desktop layout) */}
      <section className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="text-sm font-semibold text-[#F47700]">
                {dict.home.heroEyebrow}
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12366B] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                {dict.home.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
                {dict.home.heroSubtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('learn')}
                  className="px-6 py-3 rounded-xl bg-[#F47700] hover:bg-[#dc6b00] text-white text-sm font-bold transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>{dict.home.primaryCta}</span>
                </button>
                <button
                  type="button"
                  onClick={handleScrollToFeatures}
                  className="px-6 py-3 rounded-xl bg-[#EEF3FA] hover:bg-[#e1eaf7] text-[#12366B] text-sm font-bold transition-colors whitespace-nowrap cursor-pointer"
                >
                  {dict.home.secondaryCta}
                </button>
              </div>

              <div className="pt-2 text-xs font-medium text-[#64748B]">
                {dict.home.trustLine}
              </div>
            </div>

            {/* Right Column: BacII Exam Readiness Snapshot Card */}
            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-2xl bg-[#F5F7FB] border border-slate-200 p-6 flex flex-col justify-between space-y-5 shadow-sm">
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-base font-bold text-[#12366B]">
                      {dict.home.snapshotTitle}
                    </h2>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {dict.home.snapshotSubtitle}
                    </p>
                  </div>
                  <span className="text-2xl font-extrabold text-[#F47700] tabular-nums">
                    {readinessPct}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#1E293B]">
                    <span>{dict.home.snapshotReadinessLabel}</span>
                    <span className="tabular-nums text-[#64748B]">
                      {completedCount} / 7 {dict.nav.learn}
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-white rounded-full overflow-hidden border border-slate-200">
                    <div
                      className="h-full bg-[#12366B] transition-all duration-300"
                      style={{ width: `${readinessPct}%` }}
                    />
                  </div>
                </div>

                {/* Clean 2x2 metric summary without ODC/Province */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-2 border-y border-slate-200/80">
                  <div>
                    <div className="text-xs text-[#64748B]">{dict.home.snapshotTrackLabel}</div>
                    <div className="text-sm font-bold text-[#12366B] mt-0.5">{trackInfo.label}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">{dict.home.snapshotSubjectsLabel}</div>
                    <div className="text-sm font-bold text-[#12366B] mt-0.5 tabular-nums">
                      {completedCount} / 7
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">{dict.home.snapshotChecklistLabel}</div>
                    <div className="text-sm font-bold text-[#1E293B] mt-0.5 tabular-nums">
                      {planTotal > 0 ? `${planDone} / ${planTotal}` : '0 / 7'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">{dict.home.snapshotSavedLabel}</div>
                    <div className="text-sm font-bold text-[#F47700] mt-0.5 tabular-nums">
                      {student.savedScholarshipIds.length}
                    </div>
                  </div>
                </div>

                {/* Weak topics list */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#12366B]">
                    {dict.home.snapshotWeakLabel}
                  </div>
                  {weakTopics.length > 0 ? (
                    <ul className="space-y-1.5">
                      {weakTopics.slice(0, 3).map((wt, idx) => (
                        <li
                          key={`${wt.subjectName}-${idx}`}
                          className="flex items-start gap-2 text-xs text-[#1E293B]"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-[#F47700] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-[#12366B]">{wt.subjectName}:</strong>{' '}
                            {wt.topicLabel}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-[#64748B] py-1">
                      <CheckCircle2 className="w-4 h-4 text-[#12366B] shrink-0" />
                      <span>{dict.learn.planEmptyNote}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('learn')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {completedCount > 0 ? dict.home.snapshotResumeCta : dict.home.snapshotEmptyCta}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Pillars Grid */}
      <section id="pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#12366B]">
            {dict.home.pillarsHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2">
            {dict.home.pillarsSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEARN */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-7 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#EEF3FA] flex items-center justify-center text-[#12366B]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-[#12366B]">
                {dict.home.pillars.learn.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {dict.home.pillars.learn.desc}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('learn')}
              className="text-sm font-bold text-[#F47700] hover:text-[#dc6b00] transition-colors text-left cursor-pointer"
            >
              {dict.home.pillars.learn.cta}
            </button>
          </div>

          {/* PREPARE */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-7 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#FFF3E8] flex items-center justify-center text-[#F47700]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-[#12366B]">
                {dict.home.pillars.prepare.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {dict.home.pillars.prepare.desc}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('prepare')}
              className="text-sm font-bold text-[#F47700] hover:text-[#dc6b00] transition-colors text-left cursor-pointer"
            >
              {dict.home.pillars.prepare.cta}
            </button>
          </div>

          {/* DISCOVER */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-7 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#EEF3FA] flex items-center justify-center text-[#12366B]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-[#12366B]">
                {dict.home.pillars.discover.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {dict.home.pillars.discover.desc}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('discover')}
              className="text-sm font-bold text-[#F47700] hover:text-[#dc6b00] transition-colors text-left cursor-pointer"
            >
              {dict.home.pillars.discover.cta}
            </button>
          </div>
        </div>
      </section>

      {/* How It Works & Open Data Trust Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-[#12366B] mb-8">{dict.home.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.home.howSteps.map((step) => (
              <div key={step.step} className="space-y-2.5">
                <div className="text-sm font-extrabold text-[#F47700] tabular-nums">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#12366B]">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What is EduBridge? Card */}
        <div className="rounded-2xl bg-[#EEF3FA]/70 border border-slate-200/90 p-8 lg:p-10 space-y-5">
          <h2 className="text-2xl font-extrabold text-[#12366B]">
            {dict.about.overviewTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed max-w-4xl">
            {dict.about.overviewBody}
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onNavigate('learn')}
              className="px-6 py-3 rounded-full bg-[#F47700] hover:bg-[#dc6b00] text-white text-sm font-bold transition-colors whitespace-nowrap cursor-pointer shadow-sm inline-flex items-center gap-2"
            >
              <span>{dict.nav.startAssessment}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-medium text-[#64748B]">
              <Database className="w-3.5 h-3.5 text-[#F47700] shrink-0" />
              <span>{dict.home.openDataSources.slice(0, 2).join(' · ')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
