import type { CustomAccountInfo, Language, ProfilePreset, StudentState } from '../types';

const STORAGE_KEY = 'edubridge_student_state_v3';
const LANG_STORAGE_KEY = 'edubridge_language_v1';
const CUSTOM_ACCOUNT_KEY = 'edubridge_custom_account_v1';

export function buildGuestPreset(): StudentState {
  return {
    profile: 'guest',
    track: 'science',
    foreignLanguage: 'english',
    selectedSubject: 'math',
    topicScores: {},
    subjectScores: {},
    studyPlan: [],
    savedScholarshipIds: [],
  };
}

export function buildVathanakPreset(lang: Language): StudentState {
  const isKm = lang === 'km';
  return {
    profile: 'vathanak',
    track: 'science',
    foreignLanguage: 'english',
    selectedSubject: 'math',
    topicScores: {
      'science:math:sci-math-limits': {
        topicId: 'sci-math-limits',
        subjectId: 'math',
        track: 'science',
        score: 3,
        total: 4,
        percentage: 75,
        completedAt: '2026-11-18T08:30:00Z',
      },
      'science:math:sci-math-integral-de': {
        topicId: 'sci-math-integral-de',
        subjectId: 'math',
        track: 'science',
        score: 1,
        total: 4,
        percentage: 25,
        completedAt: '2026-11-18T09:00:00Z',
      },
      'science:physics:phy-ac-nuclear': {
        topicId: 'phy-ac-nuclear',
        subjectId: 'physics',
        track: 'science',
        score: 3,
        total: 4,
        percentage: 75,
        completedAt: '2026-11-19T14:20:00Z',
      },
      'science:biology:bio-dna-gene': {
        topicId: 'bio-dna-gene',
        subjectId: 'biology',
        track: 'science',
        score: 3,
        total: 4,
        percentage: 75,
        completedAt: '2026-11-19T16:40:00Z',
      },
    },
    subjectScores: {
      math: {
        subjectId: 'math',
        track: 'science',
        score: 2,
        total: 4,
        percentage: 50,
        weakTopics: [
          {
            topicKey: 'integration_substitution',
            topicLabel: isKm ? 'អាំងតេក្រាលមិនកំណត់ និងថេរ + C' : 'Indefinite Integral & + C Constant',
            relatedPaperId: 'maths-science-2025',
            missedReason: isKm
              ? 'ខ្វះថេរអាំងតេក្រាល + C និងជំហានប្តូរអថេរ u = x²។'
              : 'Missed mandatory + C constant and u = x² substitution coefficient (6/2 = 3).',
          },
          {
            topicKey: 'differential_equations',
            topicLabel: isKm ? 'សមីការឌីផេរ៉ង់ស្យែលលំដាប់ទី ១' : 'First-Order Differential Equations',
            relatedPaperId: 'maths-science-2021',
            missedReason: isKm
              ? 'ខុសសញ្ញាស្វ័យគុណក្នុង y′ − 2y = 0 (ត្រូវជា +2x)។'
              : 'Sign error in exponent: y′ − 2y = 0 gives +2x, not −2x.',
          },
        ],
        completedAt: '2026-11-18T09:00:00Z',
      },
      physics: {
        subjectId: 'physics',
        track: 'science',
        score: 3,
        total: 4,
        percentage: 75,
        weakTopics: [
          {
            topicKey: 'shm_velocity',
            topicLabel: isKm ? 'លំយោលអាម៉ូនិចសាមញ្ញ (SHM)' : 'Simple Harmonic Motion (SHM)',
            relatedPaperId: 'phy-science-2023',
            missedReason: isKm
              ? 'ភ្លេចសរសេរខ្នាត SI "m/s" នៅចម្លើយចុងក្រោយ។'
              : 'Forgot SI unit "m/s" next to v_max = 0.5.',
          },
        ],
        completedAt: '2026-11-19T14:20:00Z',
      },
      biology: {
        subjectId: 'biology',
        track: 'science',
        score: 3,
        total: 4,
        percentage: 75,
        weakTopics: [
          {
            topicKey: 'chargaff_rule',
            topicLabel: isKm ? 'ច្បាប់សាកហ្គាហ្វ (ស្នូលប្រឡង UHS)' : 'Chargaff’s Base Pairing Rule (UHS Core)',
            relatedPaperId: 'bio-science-2024',
            missedReason: isKm
              ? 'មិនបានចែកចំណែក 60% ស្មើគ្នារវាង G និង C។'
              : 'Forgot to split remaining 60% equally between G and C (30% each).',
          },
        ],
        completedAt: '2026-11-19T16:40:00Z',
      },
    },
    studyPlan: [
      {
        day: 1,
        id: 'vathanak-day-1',
        subjectId: 'math',
        focusTitle: isKm
          ? 'គណិតវិទ្យា (១២៥ពិន្ទុ) — អាំងតេក្រាល និងថេរ + C'
          : 'Mathematics (125 pts) — Indefinite Integral & + C',
        actionDetail: isKm
          ? 'ហាត់ប្តូរអថេរ u = x² និងផ្ទៀងផ្ទាត់សញ្ញា + C ក្នុងវិញ្ញាសាបាក់ឌុប ២០២៥។'
          : 'Drill u-substitution steps and + C verification on MoEYS 2025 Mathematics paper.',
        durationLabel: isKm ? '៤៥ នាទី' : '45 min',
        relatedPaperId: 'maths-science-2025',
        completed: true,
      },
      {
        day: 2,
        id: 'vathanak-day-2',
        subjectId: 'math',
        focusTitle: isKm
          ? 'គណិតវិទ្យា (១២៥ពិន្ទុ) — សមីការឌីផេរ៉ង់ស្យែល y′ − ay = 0'
          : 'Mathematics (125 pts) — Differential Equations y′ − ay = 0',
        actionDetail: isKm
          ? 'ដោះស្រាយលំហាត់រកចម្លើយពិសេស និងអាំងតេក្រាលពីវិញ្ញាសា ២០២១។'
          : 'Solve particular-solution and integration exercises from MoEYS 2021.',
        durationLabel: isKm ? '៤៥ នាទី' : '45 min',
        relatedPaperId: 'maths-science-2021',
        completed: true,
      },
      {
        day: 3,
        id: 'vathanak-day-3',
        subjectId: 'physics',
        focusTitle: isKm
          ? 'រូបវិទ្យា (៧៥ពិន្ទុ) — ល្បឿនលំយោល SHM និងខ្នាត SI'
          : 'Physics (75 pts) — SHM Velocity & SI Units',
        actionDetail: isKm
          ? 'ហាត់គណនា v_max = ωA និងពិនិត្យសញ្ញាកម្មន្តទែម៉ូឌីណាមិចក្នុងវិញ្ញាសា ២០២៣។'
          : 'Practice v_max = ωA derivations and thermodynamics signs on MoEYS 2023.',
        durationLabel: isKm ? '៤៥ នាទី' : '45 min',
        relatedPaperId: 'phy-science-2023',
        completed: false,
      },
      {
        day: 4,
        id: 'vathanak-day-4',
        subjectId: 'biology',
        focusTitle: isKm
          ? 'ជីវវិទ្យា (៧៥ពិន្ទុ) — ច្បាប់សាកហ្គាហ្វ និងកូដុង (UHS)'
          : 'Biology (75 pts) — Chargaff Rule & mRNA Codons (UHS)',
        actionDetail: isKm
          ? 'សរសេរជំហានគណនា %A, T, G, C តាមស្តង់ដារប្រឡងពេទ្យ UHS ពីវិញ្ញាសា ២០២៤។'
          : 'Write full Chargaff base-pairing proofs for Medical/UHS accuracy on MoEYS 2024.',
        durationLabel: isKm ? '៤០ នាទី' : '40 min',
        relatedPaperId: 'bio-science-2024',
        completed: false,
      },
      {
        day: 5,
        id: 'vathanak-day-5',
        subjectId: 'chemistry',
        focusTitle: isKm
          ? 'គីមីវិទ្យា (៧៥ពិន្ទុ) — ការគណនា pH និងស្តូស្យូម៉ែត្រី'
          : 'Chemistry (75 pts) — Acid-Base pH & Stoichiometry',
        actionDetail: isKm
          ? 'ហាត់វិញ្ញាសាគីមី ២០២២ និងពិនិត្យមេគុណតុល្យការសមីការ។'
          : 'Complete MoEYS 2022 Chemistry paper balancing coefficients before mole ratios.',
        durationLabel: isKm ? '៤៥ នាទី' : '45 min',
        relatedPaperId: 'chem-science-2022',
        completed: false,
      },
      {
        day: 6,
        id: 'vathanak-day-6',
        subjectId: 'khmer',
        focusTitle: isKm
          ? 'អក្សរសាស្ត្រខ្មែរ (៧៥ពិន្ទុ) — បទកាព្យ និងតែងសេចក្តី'
          : 'Khmer Literature (75 pts) — Poetic Meter & Essay Structure',
        actionDetail: isKm
          ? 'ពិនិត្យរចនាសម្ព័ន្ធផ្តើម តួ និងបញ្ចប់សេចក្តីនៃវិញ្ញាសា ២០២១។'
          : 'Review 3-part essay structure and literary analysis from MoEYS 2021 paper.',
        durationLabel: isKm ? '៤០ នាទី' : '40 min',
        relatedPaperId: 'khmer-science-2021',
        completed: false,
      },
      {
        day: 7,
        id: 'vathanak-day-7',
        subjectId: 'math',
        focusTitle: isKm
          ? 'សាកល្បងប្រឡងពេញម៉ោង (គណិតវិទ្យា ១២៥ពិន្ទុ)'
          : 'Timed Full-Paper Practice (Mathematics 125 pts)',
        actionDetail: isKm
          ? 'បើកវិញ្ញាសា PDF ២០២៥ ក្នុង Prepare ហើយផ្ទៀងផ្ទាត់ជាមួយកំណែផ្លូវការ។'
          : 'Open the 2025 combined PDF in Prepare and self-grade strictly against the answer key.',
        durationLabel: isKm ? '៩០ នាទី' : '90 min',
        relatedPaperId: 'maths-science-2025',
        completed: false,
      },
    ],
    savedScholarshipIds: ['amt', 'mptc-techo'],
  };
}

export function buildFreshPreset(): StudentState {
  return {
    profile: 'fresh',
    track: 'science',
    foreignLanguage: 'english',
    selectedSubject: 'math',
    topicScores: {},
    subjectScores: {},
    studyPlan: [],
    savedScholarshipIds: [],
  };
}

export function buildCustomStudentPreset(account: CustomAccountInfo): StudentState {
  return {
    profile: 'custom',
    customAccount: account,
    track: account.track,
    foreignLanguage: 'english',
    selectedSubject: account.track === 'social' ? 'khmer' : 'math',
    topicScores: {},
    subjectScores: {},
    studyPlan: [],
    savedScholarshipIds: [],
  };
}

export function loadSavedLanguage(): Language {
  try {
    const val = localStorage.getItem(LANG_STORAGE_KEY);
    return val === 'km' ? 'km' : 'en';
  } catch {
    return 'en';
  }
}

export function saveLanguage(lang: Language): void {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // ignore storage errors
  }
}

export function loadSavedCustomAccount(): CustomAccountInfo | null {
  try {
    const raw = localStorage.getItem(CUSTOM_ACCOUNT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CustomAccountInfo;
    return parsed?.email ? parsed : null;
  } catch {
    return null;
  }
}

export function saveCustomAccount(account: CustomAccountInfo): void {
  try {
    localStorage.setItem(CUSTOM_ACCOUNT_KEY, JSON.stringify(account));
  } catch {
    // ignore storage errors
  }
}

export function loadStudentState(_lang: Language): StudentState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return buildGuestPreset();
    }
    const parsed = JSON.parse(raw) as StudentState;
    if (
      !parsed ||
      (parsed.profile !== 'guest' &&
        parsed.profile !== 'vathanak' &&
        parsed.profile !== 'fresh' &&
        parsed.profile !== 'custom')
    ) {
      return buildGuestPreset();
    }
    return parsed;
  } catch {
    return buildGuestPreset();
  }
}

export function saveStudentState(state: StudentState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

export function switchProfilePreset(profile: ProfilePreset, lang: Language): StudentState {
  if (profile === 'vathanak') {
    const next = buildVathanakPreset(lang);
    saveStudentState(next);
    return next;
  }
  if (profile === 'custom') {
    const saved = loadSavedCustomAccount();
    if (saved) {
      const next = buildCustomStudentPreset(saved);
      saveStudentState(next);
      return next;
    }
  }
  if (profile === 'guest') {
    const next = buildGuestPreset();
    saveStudentState(next);
    return next;
  }
  const next = buildFreshPreset();
  saveStudentState(next);
  return next;
}
