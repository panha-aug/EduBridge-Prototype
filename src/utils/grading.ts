import type {
  DiagnosticQuestion,
  DiagnosticWrittenQuestion,
  GradedQuestionResult,
  Language,
  StudyPlanDay,
  SubjectDiagnosticSummary,
  SubjectId,
  Track,
} from '../types';
import type { TranslationDictionary } from '../translations';
import { getSubjectPoints, getSubjectsForTrack } from './subjects';

function normalizeExpression(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[−–—]/g, '-')
    .replace(/[×·]/g, '*')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/ω/g, 'w')
    .replace(/π/g, 'pi')
    .replace(/Ω/g, 'ohm')
    .replace(/\.$/, '');
}

function normalizeTextTokens(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[−–—]/g, '-')
    .replace(/\s+/g, '');
}

export function getDiagnosticQuestionsForSubject(
  dict: TranslationDictionary,
  track: Track,
  subjectId: SubjectId
): DiagnosticQuestion[] {
  if (track === 'social' && subjectId === 'math') {
    return dict.socialMathDiagnostics;
  }
  return dict.diagnostics[subjectId] ?? dict.diagnostics.math ?? [];
}

export interface QuizUserAnswers {
  mcq: Record<string, number | null>;
  writtenFormula: Record<string, string>;
  writtenAnswer: Record<string, string>;
}

function gradeWrittenQuestion(
  q: DiagnosticWrittenQuestion,
  formulaRaw: string,
  answerRaw: string
): GradedQuestionResult {
  const normFormula = normalizeExpression(formulaRaw);
  const normAnswer = normalizeExpression(answerRaw);
  const textFormula = normalizeTextTokens(formulaRaw);
  const textAnswer = normalizeTextTokens(answerRaw);

  const formulaCorrect =
    normFormula.length >= 2 &&
    q.acceptedFormulaPatterns.some((pattern) => {
      const p = normalizeExpression(pattern);
      return normFormula.includes(p) || textFormula.includes(p);
    });

  const answerCorrect =
    normAnswer.length >= 1 &&
    q.acceptedAnswerPatterns.some((pattern) => {
      const p = normalizeExpression(pattern);
      return normAnswer === p || normAnswer.includes(p) || textAnswer === p;
    });

  const isCorrect = formulaCorrect && answerCorrect;

  let missedDetail = '';
  if (!isCorrect) {
    // Check specific mistake diagnostics first
    for (const diag of q.specificMistakeDiagnostics) {
      const targetVal =
        diag.target === 'formula'
          ? normFormula
          : diag.target === 'answer'
          ? normAnswer
          : `${normFormula}|${normAnswer}`;

      if (diag.pattern === '+c' && normAnswer.length > 0 && !normAnswer.includes('+c')) {
        missedDetail = diag.message;
        break;
      }
      if (diag.pattern === 'm/s' && normAnswer.length > 0 && !normAnswer.includes('m/s')) {
        missedDetail = diag.message;
        break;
      }
      if (diag.pattern !== '+c' && diag.pattern !== 'm/s' && targetVal.includes(normalizeExpression(diag.pattern))) {
        missedDetail = diag.message;
        break;
      }
    }

    if (!missedDetail) {
      if (!formulaCorrect && !answerCorrect) {
        missedDetail = `${q.formulaErrorHint} ${q.answerErrorHint}`;
      } else if (!formulaCorrect) {
        missedDetail = q.formulaErrorHint;
      } else {
        missedDetail = q.answerErrorHint;
      }
    }
  }

  return {
    questionId: q.id,
    topicKey: q.topicKey,
    topicLabel: q.topicLabel,
    isCorrect,
    formulaCorrect,
    answerCorrect,
    userFormula: formulaRaw.trim() || '—',
    userAnswer: answerRaw.trim() || '—',
    missedDetail,
    expectedFormula: q.expectedFormulaDisplay,
    expectedAnswer: q.expectedAnswerDisplay,
    stepByStepSolution: q.stepByStepSolution,
    relatedPaperId: q.relatedPaperId,
  };
}

export function gradeDiagnosticQuiz(
  questions: DiagnosticQuestion[],
  answers: QuizUserAnswers
): GradedQuestionResult[] {
  return questions.map((q) => {
    if (q.type === 'mcq') {
      const chosen = answers.mcq[q.id];
      const isCorrect = chosen === q.correctIndex;
      let missedDetail = '';
      if (!isCorrect) {
        if (chosen === q.commonMistakeIndex) {
          missedDetail = q.commonMistakeReason;
        } else if (chosen === null || chosen === undefined) {
          missedDetail = q.requiredRule;
        } else {
          missedDetail = q.requiredRule;
        }
      }
      return {
        questionId: q.id,
        topicKey: q.topicKey,
        topicLabel: q.topicLabel,
        isCorrect,
        formulaCorrect: isCorrect,
        answerCorrect: isCorrect,
        userAnswer: chosen !== null && chosen !== undefined ? q.options[chosen] : '—',
        expectedAnswer: q.options[q.correctIndex],
        expectedFormula: q.requiredRule,
        missedDetail,
        stepByStepSolution: q.stepByStepSolution,
        relatedPaperId: q.relatedPaperId,
      };
    }

    return gradeWrittenQuestion(
      q,
      answers.writtenFormula[q.id] ?? '',
      answers.writtenAnswer[q.id] ?? ''
    );
  });
}

export function generateSevenDayStudyPlan(
  track: Track,
  subjectScores: Partial<Record<SubjectId, SubjectDiagnosticSummary>>,
  dict: TranslationDictionary,
  lang: Language
): StudyPlanDay[] {
  const subjects = getSubjectsForTrack(track, 'english');

  // Collect weak topics weighted by BacII points
  const weakQueue: {
    subjectId: SubjectId;
    points: number;
    topicLabel: string;
    relatedPaperId: string;
  }[] = [];

  for (const spec of subjects) {
    const summary = subjectScores[spec.id];
    if (summary && summary.weakTopics.length > 0) {
      for (const wt of summary.weakTopics) {
        weakQueue.push({
          subjectId: spec.id,
          points: spec.points,
          topicLabel: wt.topicLabel,
          relatedPaperId: wt.relatedPaperId,
        });
      }
    }
  }

  weakQueue.sort((a, b) => b.points - a.points);

  // Fill remaining days up to 7 with high-weight BacII core subjects
  const defaultCorePaper = (subjectId: SubjectId): string => {
    const match = dict.examPapers.find(
      (p) => p.subjectId === subjectId && (p.track === track || p.track === 'both')
    );
    return match?.id ?? dict.examPapers[0]?.id ?? 'maths-science-2025';
  };

  const days: StudyPlanDay[] = [];
  for (let day = 1; day <= 7; day++) {
    const weak = weakQueue[day - 1];
    if (weak) {
      const subjName = dict.subjects[weak.subjectId].name;
      days.push({
        day,
        id: `plan-day-${day}`,
        subjectId: weak.subjectId,
        focusTitle:
          lang === 'km'
            ? `${subjName} (${weak.points}ពិន្ទុ) — ${weak.topicLabel}`
            : `${subjName} (${weak.points} pts) — ${weak.topicLabel}`,
        actionDetail:
          lang === 'km'
            ? `ហាត់សរសេររូបមន្តពេញលេញ និងដោះស្រាយវិញ្ញាសាចាស់ក្នុង Prepare ដោយមិនរំលងជំហាន។`
            : `Drill step-by-step written derivations and solve matching MoEYS past paper exercises in Prepare.`,
        durationLabel: lang === 'km' ? '៤៥ នាទី' : '45 min',
        relatedPaperId: weak.relatedPaperId,
        completed: false,
      });
    } else {
      const fallbackSpec = subjects[(day - 1) % subjects.length];
      const subjName = dict.subjects[fallbackSpec.id].name;
      const pts = getSubjectPoints(track, fallbackSpec.id);
      days.push({
        day,
        id: `plan-day-${day}`,
        subjectId: fallbackSpec.id,
        focusTitle:
          day === 7
            ? lang === 'km'
              ? `សាកល្បងប្រឡងពេញម៉ោង (${subjName})`
              : `Timed Full-Paper Simulation (${subjName})`
            : lang === 'km'
            ? `ពង្រឹង ${subjName} (${pts} ពិន្ទុ)`
            : `Core Consolidation: ${subjName} (${pts} pts)`,
        actionDetail:
          day === 7
            ? lang === 'km'
              ? `បើករបៀបលាក់ចម្លើយក្នុង Prepare ហើយផ្ទៀងផ្ទាត់រាល់ជំហានរូបមន្តជាមួយ AI Tutor។`
              : `Run Practice Mode with answers hidden in Prepare, then verify every formula step with the AI Tutor.`
            : lang === 'km'
            ? `រំលឹករូបមន្តសំខាន់ៗ និងធ្វើលំហាត់វិញ្ញាសាបាក់ឌុប ២០២៣–២០២៤។`
            : `Review core formulas and complete 2 verified MoEYS 2023–2024 past paper exercises.`,
        durationLabel: day === 7 ? (lang === 'km' ? '៩០ នាទី' : '90 min') : lang === 'km' ? '៤៥ នាទី' : '45 min',
        relatedPaperId: defaultCorePaper(fallbackSpec.id),
        completed: false,
      });
    }
  }

  return days;
}
