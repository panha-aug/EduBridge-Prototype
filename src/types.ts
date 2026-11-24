export type Language = 'en' | 'km';
export type Track = 'science' | 'social';
export type ForeignLanguage = 'english' | 'french';
export type NavPage = 'home' | 'learn' | 'prepare' | 'discover' | 'about';
export type ProfilePreset = 'guest' | 'vathanak' | 'fresh' | 'custom';

export type SubjectId =
  | 'math'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'khmer'
  | 'history'
  | 'geography'
  | 'morality'
  | 'earth'
  | 'english'
  | 'french';

export interface CustomAccountInfo {
  fullName: string;
  highSchool: string;
  email: string;
  track: Track;
}

export interface SubjectSpec {
  id: SubjectId;
  points: number;
  tracks: Track[];
  isForeignLanguage?: boolean;
}

export interface DiagnosticMcqQuestion {
  id: string;
  type: 'mcq';
  topicKey: string;
  topicLabel: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  commonMistakeIndex: number;
  commonMistakeReason: string;
  requiredRule: string;
  stepByStepSolution: string[];
  relatedPaperId: string;
}

export interface DiagnosticWrittenQuestion {
  id: string;
  type: 'written';
  topicKey: string;
  topicLabel: string;
  prompt: string;
  formulaPlaceholder: string;
  answerPlaceholder: string;
  acceptedFormulaPatterns: string[];
  acceptedAnswerPatterns: string[];
  expectedFormulaDisplay: string;
  expectedAnswerDisplay: string;
  strongDemoFormula: string;
  strongDemoAnswer: string;
  mistakeDemoFormula: string;
  mistakeDemoAnswer: string;
  formulaErrorHint: string;
  answerErrorHint: string;
  specificMistakeDiagnostics: {
    pattern: string;
    target: 'formula' | 'answer' | 'both';
    message: string;
  }[];
  stepByStepSolution: string[];
  relatedPaperId: string;
}

export type DiagnosticQuestion = DiagnosticMcqQuestion | DiagnosticWrittenQuestion;

export interface TopicQuizQuestion {
  id: string;
  prompt: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export interface LearnTopicModule {
  id: string;
  subjectId: SubjectId;
  tracks: Track[];
  isSkillModule?: boolean;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  relatedPaperId: string;
  questions: TopicQuizQuestion[];
}

export interface TopicQuizSummary {
  topicId: string;
  subjectId: SubjectId;
  track: Track;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
}

export interface GradedQuestionResult {
  questionId: string;
  topicKey: string;
  topicLabel: string;
  isCorrect: boolean;
  formulaCorrect: boolean;
  answerCorrect: boolean;
  userFormula?: string;
  userAnswer?: string;
  missedDetail: string;
  expectedFormula?: string;
  expectedAnswer?: string;
  stepByStepSolution: string[];
  relatedPaperId: string;
}

export interface SubjectDiagnosticSummary {
  subjectId: SubjectId;
  track: Track;
  score: number;
  total: number;
  percentage: number;
  weakTopics: {
    topicKey: string;
    topicLabel: string;
    relatedPaperId: string;
    missedReason: string;
  }[];
  completedAt: string;
}

export interface StudyPlanDay {
  day: number;
  id: string;
  subjectId: SubjectId;
  focusTitle: string;
  actionDetail: string;
  durationLabel: string;
  relatedPaperId: string;
  completed: boolean;
}

export interface ExamExercise {
  number: string;
  points: number;
  topic: string;
  statement: string;
  subParts: string[];
  solutionSteps: string[];
  finalAnswer: string;
  gradingNote: string;
}

export interface ExamPaper {
  id: string;
  subjectId: SubjectId;
  track: Track | 'both';
  year: number;
  points: number;
  durationMinutes: number;
  title: string;
  topics: string[];
  pdfPath?: string;
  exercises: ExamExercise[];
}

export type ScholarshipStatus = 'OPEN' | 'CLOSING_SOON';

export interface ScholarshipItem {
  id: string;
  category: 'domestic' | 'international';
  name: string;
  organization: string;
  status: ScholarshipStatus;
  minBaciiGrade: string;
  examFormatTag: string;
  examFormatType: 'written_strict' | 'grade_interview' | 'mixed';
  tracks: (Track | 'both')[];
  deadline: string;
  coverage: string;
  keySubjects: string;
  summary: string;
  checklistTip: string;
  portalUrl: string;
}

export interface StudentState {
  profile: ProfilePreset;
  customAccount?: CustomAccountInfo;
  track: Track;
  foreignLanguage: ForeignLanguage;
  selectedSubject: SubjectId;
  topicScores?: Partial<Record<string, TopicQuizSummary>>;
  subjectScores: Partial<Record<SubjectId, SubjectDiagnosticSummary>>;
  studyPlan: StudyPlanDay[];
  savedScholarshipIds: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  contextLabel?: string;
  error?: boolean;
}
