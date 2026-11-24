import type { LearnTopicModule } from '../types';

export const STEM_LEARN_TOPICS: LearnTopicModule[] = [
  // ============================================================================
  // 1. MATHEMATICS — SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'sci-math-limits',
    subjectId: 'math',
    tracks: ['science'],
    title: {
      km: 'លីមីត និងភាពជាប់នៃអនុគមន៍',
      en: 'Limits & Continuity of Functions',
    },
    subtitle: {
      km: 'រាងមិនកំណត់ ០/០, ∞/∞ និងភាពជាប់ត្រង់ចំណុច x₀',
      en: 'Indeterminate forms 0/0, ∞/∞, and continuity at x₀',
    },
    relatedPaperId: 'maths-science-2025',
    questions: [
      {
        id: 'sm-lim-1',
        prompt: {
          km: 'គណនាលីមីត៖ lim (x → 0) [ (e^(3x) − 1) / x ] ។',
          en: 'Evaluate the limit: lim (x → 0) [ (e^(3x) − 1) / x ].',
        },
        options: {
          km: ['0', '1', '3', 'e³'],
          en: ['0', '1', '3', 'e³'],
        },
        correctIndex: 2,
        explanation: {
          km: 'សរសេរជា 3 · [ (e^(3x) − 1) / (3x) ]។ ដោយ lim (u → 0) (e^u − 1)/u = 1 នោះលីមីតស្មើ 3 × 1 = 3។',
          en: 'Rewrite as 3 · [ (e^(3x) − 1) / (3x) ]. Since lim (u → 0) (e^u − 1)/u = 1, the limit equals 3 × 1 = 3.',
        },
      },
      {
        id: 'sm-lim-2',
        prompt: {
          km: 'គណនាលីមីត៖ lim (x → 0) [ sin(5x) / (2x) ] ។',
          en: 'Evaluate the limit: lim (x → 0) [ sin(5x) / (2x) ].',
        },
        options: {
          km: ['5/2', '2/5', '5', '0'],
          en: ['5/2', '2/5', '5', '0'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ប្រើរូបមន្ត lim (x → 0) sin(ax)/(bx) = a/b ⇒ sin(5x)/(2x) → 5/2។',
          en: 'Use lim (x → 0) sin(ax)/(bx) = a/b ⇒ sin(5x)/(2x) approaches 5/2.',
        },
      },
      {
        id: 'sm-lim-3',
        prompt: {
          km: 'គណនាលីមីត៖ lim (x → +∞) [ (3x² − 4x + 1) / (6x² + 5) ] ។',
          en: 'Evaluate the limit: lim (x → +∞) [ (3x² − 4x + 1) / (6x² + 5) ].',
        },
        options: {
          km: ['0', '1/2', '3', '+∞'],
          en: ['0', '1/2', '3', '+∞'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ពេល x → +∞ យកផលធៀបតួដឺក្រេខ្ពស់បំផុត៖ 3x² / (6x²) = 3/6 = 1/2។',
          en: 'As x → +∞, compare highest-degree terms: 3x² / (6x²) = 3/6 = 1/2.',
        },
      },
      {
        id: 'sm-lim-4',
        prompt: {
          km: 'អនុគមន៍ f(x) = (x² − 9)/(x − 3) ចំពោះ x ≠ 3 និង f(3) = k។ រកតម្លៃ k ដើម្បីឱ្យ f ជាប់ត្រង់ x = 3។',
          en: 'Given f(x) = (x² − 9)/(x − 3) for x ≠ 3 and f(3) = k, find k so f is continuous at x = 3.',
        },
        options: {
          km: ['k = 0', 'k = 3', 'k = 6', 'k = 9'],
          en: ['k = 0', 'k = 3', 'k = 6', 'k = 9'],
        },
        correctIndex: 2,
        explanation: {
          km: 'f(x) = (x − 3)(x + 3)/(x − 3) = x + 3 (x ≠ 3) ⇒ lim (x → 3) f(x) = 3 + 3 = 6 ⇒ k = 6។',
          en: 'Factor x² − 9 = (x − 3)(x + 3). Thus lim (x → 3) f(x) = 3 + 3 = 6, so k = 6.',
        },
      },
    ],
  },
  {
    id: 'sci-math-derivatives',
    subjectId: 'math',
    tracks: ['science'],
    title: {
      km: 'ដេរីវេ និងអនុវត្តន៍នៃដេរីវេ',
      en: 'Derivatives & Applications',
    },
    subtitle: {
      km: 'រូបមន្តដេរីវេ បន្ទាត់ប៉ះ និងអតិបរមា-អប្បបរមា',
      en: 'Derivative rules, tangent lines, and local extrema',
    },
    relatedPaperId: 'maths-science-2025',
    questions: [
      {
        id: 'sm-der-1',
        prompt: {
          km: 'រកដេរីវេ f′(x) នៃអនុគមន៍ f(x) = (x + 1) · e^(−x) ។',
          en: 'Find the derivative f′(x) of f(x) = (x + 1) · e^(−x).',
        },
        options: {
          km: ['e^(−x)', '−x · e^(−x)', '(x + 2) · e^(−x)', '−(x + 1) · e^(−x)'],
          en: ['e^(−x)', '−x · e^(−x)', '(x + 2) · e^(−x)', '−(x + 1) · e^(−x)'],
        },
        correctIndex: 1,
        explanation: {
          km: 'តាមរូបមន្ត (uv)′ = u′v + uv′៖ f′(x) = 1·e^(−x) + (x + 1)(−e^(−x)) = −x · e^(−x)។',
          en: 'By the product rule: f′(x) = e^(−x) − (x + 1)e^(−x) = −x · e^(−x).',
        },
      },
      {
        id: 'sm-der-2',
        prompt: {
          km: 'រកមេគុណប្រាប់ទិសនៃបន្ទាត់ប៉ះខ្សែកោង y = x³ − 3x + 2 ត្រង់ចំណុច x = 2។',
          en: 'Find the slope of the tangent line to y = x³ − 3x + 2 at x = 2.',
        },
        options: {
          km: ['6', '9', '12', '4'],
          en: ['6', '9', '12', '4'],
        },
        correctIndex: 1,
        explanation: {
          km: 'y′ = 3x² − 3 ⇒ ត្រង់ x = 2 មេគុណប្រាប់ទិសគឺ y′(2) = 3(4) − 3 = 9។',
          en: 'Differentiate: y′ = 3x² − 3. At x = 2, slope = 3(2²) − 3 = 9.',
        },
      },
      {
        id: 'sm-der-3',
        prompt: {
          km: 'អនុគមន៍ f(x) = x³ − 3x² + 5 មានតម្លៃអប្បបរមាធៀបត្រង់ x ស្មើប៉ុន្មាន?',
          en: 'At which value of x does f(x) = x³ − 3x² + 5 attain a local minimum?',
        },
        options: {
          km: ['x = 0', 'x = 1', 'x = 2', 'x = 3'],
          en: ['x = 0', 'x = 1', 'x = 2', 'x = 3'],
        },
        correctIndex: 2,
        explanation: {
          km: 'f′(x) = 3x² − 6x = 3x(x − 2) = 0 ⇒ x = 0, x = 2។ f″(2) = 6(2) − 6 = +6 > 0 ⇒ អប្បបរមាត្រង់ x = 2។',
          en: 'f′(x) = 3x(x − 2) = 0 gives x = 0 and x = 2. Since f″(2) = 6 > 0, x = 2 is a local minimum.',
        },
      },
      {
        id: 'sm-der-4',
        prompt: {
          km: 'គណនាដេរីវេនៃអនុគមន៍ f(x) = ln(x² + 1) ។',
          en: 'Compute the derivative of f(x) = ln(x² + 1).',
        },
        options: {
          km: ['1 / (x² + 1)', '2x / (x² + 1)', '2 / (x² + 1)', 'x / (x² + 1)'],
          en: ['1 / (x² + 1)', '2x / (x² + 1)', '2 / (x² + 1)', 'x / (x² + 1)'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ប្រើរូបមន្ត [ln(u)]′ = u′ / u ដោយ u = x² + 1 ⇒ u′ = 2x ⇒ f′(x) = 2x / (x² + 1)។',
          en: 'Using [ln(u)]′ = u′ / u with u = x² + 1, we get f′(x) = 2x / (x² + 1).',
        },
      },
    ],
  },
  {
    id: 'sci-math-exp-log',
    subjectId: 'math',
    tracks: ['science'],
    title: {
      km: 'អនុគមន៍អិចស្ប៉ូណង់ស្យែល និងលោការីត',
      en: 'Exponential & Logarithmic Functions',
    },
    subtitle: {
      km: 'សមីការ វិសមីការ និងលក្ខណៈ ln / eˣ',
      en: 'Equations, inequalities, and properties of ln & eˣ',
    },
    relatedPaperId: 'maths-science-2021',
    questions: [
      {
        id: 'sm-exp-1',
        prompt: {
          km: 'ដោះស្រាយសមីការក្នុង ℝ៖ ln(2x − 1) = 0 ។',
          en: 'Solve in ℝ: ln(2x − 1) = 0.',
        },
        options: {
          km: ['x = 0', 'x = 1/2', 'x = 1', 'x = e/2'],
          en: ['x = 0', 'x = 1/2', 'x = 1', 'x = e/2'],
        },
        correctIndex: 2,
        explanation: {
          km: 'លក្ខខណ្ឌ 2x − 1 > 0។ ln(2x − 1) = 0 ⇔ 2x − 1 = e⁰ = 1 ⇒ 2x = 2 ⇒ x = 1។',
          en: 'Domain: 2x − 1 > 0. ln(2x − 1) = 0 means 2x − 1 = 1 ⇒ x = 1.',
        },
      },
      {
        id: 'sm-exp-2',
        prompt: {
          km: 'ដោះស្រាយសមីការ៖ e^(2x) − 5eˣ + 6 = 0 ។',
          en: 'Solve the equation: e^(2x) − 5eˣ + 6 = 0.',
        },
        options: {
          km: ['x = 2 ឬ x = 3', 'x = ln 2 ឬ x = ln 3', 'x = e² ឬ x = e³', 'x = 1 ឬ x = 6'],
          en: ['x = 2 or x = 3', 'x = ln 2 or x = ln 3', 'x = e² or x = e³', 'x = 1 or x = 6'],
        },
        correctIndex: 1,
        explanation: {
          km: 'តាង t = eˣ > 0 ⇒ t² − 5t + 6 = 0 ⇒ t = 2 ឬ t = 3 ⇒ x = ln 2 ឬ x = ln 3។',
          en: 'Let t = eˣ > 0: (t − 2)(t − 3) = 0 ⇒ eˣ = 2 or 3 ⇒ x = ln 2 or x = ln 3.',
        },
      },
      {
        id: 'sm-exp-3',
        prompt: {
          km: 'រកដែនកំណត់នៃអនុគមន៍ f(x) = ln(4 − x²) ។',
          en: 'Find the domain of f(x) = ln(4 − x²).',
        },
        options: {
          km: ['(−2, 2)', '[−2, 2]', '(−∞, −2) ∪ (2, +∞)', '(2, +∞)'],
          en: ['(−2, 2)', '[−2, 2]', '(−∞, −2) ∪ (2, +∞)', '(2, +∞)'],
        },
        correctIndex: 0,
        explanation: {
          km: 'អនុគមន៍ ln(u) កំណត់លុះត្រា u > 0 ⇒ 4 − x² > 0 ⇒ x² < 4 ⇒ x ∈ (−2, 2)។',
          en: 'ln(4 − x²) requires 4 − x² > 0 ⇒ x² < 4 ⇒ x ∈ (−2, 2).',
        },
      },
      {
        id: 'sm-exp-4',
        prompt: {
          km: 'គណនាលីមីត៖ lim (x → +∞) [ ln(x) / x ] ។',
          en: 'Evaluate the limit: lim (x → +∞) [ ln(x) / x ].',
        },
        options: {
          km: ['+∞', '1', '0', 'e'],
          en: ['+∞', '1', '0', 'e'],
        },
        correctIndex: 2,
        explanation: {
          km: 'អនុគមន៍ x កើនលឿនជាង ln(x) ដូច្នេះ lim (x → +∞) ln(x)/x = 0។',
          en: 'By standard growth comparison, x grows faster than ln(x), so lim (x → +∞) ln(x)/x = 0.',
        },
      },
    ],
  },
  {
    id: 'sci-math-integral-de',
    subjectId: 'math',
    tracks: ['science'],
    title: {
      km: 'អាំងតេក្រាលកំណត់ និងសមីការឌីផេរ៉ង់ស្យែល',
      en: 'Definite Integrals & Differential Equations',
    },
    subtitle: {
      km: 'ប្តូរអថេរ អាំងតេក្រាលដោយផ្នែក និង y′ + ay = b',
      en: 'Substitution, integration by parts, and y′ + ay = b',
    },
    relatedPaperId: 'maths-science-2021',
    questions: [
      {
        id: 'sm-int-1',
        prompt: {
          km: 'គណនាអាំងតេក្រាលកំណត់៖ I = ∫₀¹ 2x · e^(x²) dx ។',
          en: 'Evaluate the definite integral: I = ∫₀¹ 2x · e^(x²) dx.',
        },
        options: {
          km: ['e', 'e − 1', '2(e − 1)', 'e² − 1'],
          en: ['e', 'e − 1', '2(e − 1)', 'e² − 1'],
        },
        correctIndex: 1,
        explanation: {
          km: 'តាង u = x² ⇒ du = 2x dx ⇒ I = [e^(x²)]₀¹ = e¹ − e⁰ = e − 1។',
          en: 'Substitute u = x² (du = 2x dx): I = [e^(x²)]₀¹ = e − 1.',
        },
      },
      {
        id: 'sm-int-2',
        prompt: {
          km: 'គណនា៖ J = ∫₁ᵉ (1 / x) dx ។',
          en: 'Compute: J = ∫₁ᵉ (1 / x) dx.',
        },
        options: {
          km: ['0', '1', 'e', 'ln(e + 1)'],
          en: ['0', '1', 'e', 'ln(e + 1)'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ព្រីមីទីវនៃ 1/x គឺ ln|x| ⇒ J = ln(e) − ln(1) = 1 − 0 = 1។',
          en: 'An antiderivative of 1/x is ln|x|, so J = ln(e) − ln(1) = 1 − 0 = 1.',
        },
      },
      {
        id: 'sm-int-3',
        prompt: {
          km: 'រកចម្លើយពិសេសនៃសមីការឌីផេរ៉ង់ស្យែល y′ − 2y = 0 ដោយដឹងថា y(0) = 3។',
          en: 'Find the particular solution of y′ − 2y = 0 satisfying y(0) = 3.',
        },
        options: {
          km: ['y = 3e^(−2x)', 'y = 3e^(2x)', 'y = 2e^(3x)', 'y = 3x + 2'],
          en: ['y = 3e^(−2x)', 'y = 3e^(2x)', 'y = 2e^(3x)', 'y = 3x + 2'],
        },
        correctIndex: 1,
        explanation: {
          km: 'y′ = 2y មានចម្លើយទូទៅ y = C·e^(2x)។ ជំនួស y(0) = 3 ⇒ C = 3 ⇒ y = 3e^(2x)។',
          en: 'General solution of y′ = 2y is y = C·e^(2x). With y(0) = 3, C = 3 so y = 3e^(2x).',
        },
      },
      {
        id: 'sm-int-4',
        prompt: {
          km: 'រកចម្លើយទូទៅនៃសមីការឌីផេរ៉ង់ស្យែលលំដាប់ទី២៖ y″ + 4y = 0 ។',
          en: 'Find the general solution of the second-order equation y″ + 4y = 0.',
        },
        options: {
          km: [
            'y = A·e^(2x) + B·e^(−2x)',
            'y = A·cos(2x) + B·sin(2x)',
            'y = A·cos(4x) + B·sin(4x)',
            'y = (Ax + B)·e^(2x)',
          ],
          en: [
            'y = A·e^(2x) + B·e^(−2x)',
            'y = A·cos(2x) + B·sin(2x)',
            'y = A·cos(4x) + B·sin(4x)',
            'y = (Ax + B)·e^(2x)',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'សមីការសម្គាល់ r² + 4 = 0 ⇒ r = ±2i (ω = 2) ⇒ ចម្លើយទូទៅ y = A·cos(2x) + B·sin(2x)។',
          en: 'Characteristic equation r² + 4 = 0 gives r = ±2i, so y = A·cos(2x) + B·sin(2x).',
        },
      },
    ],
  },

  // ============================================================================
  // 2. MATHEMATICS — SOCIAL SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'soc-math-limits',
    subjectId: 'math',
    tracks: ['social'],
    title: {
      km: 'លីមីត និងភាពជាប់នៃអនុគមន៍',
      en: 'Limits & Continuity of Functions',
    },
    subtitle: {
      km: 'លីមីតពហុធា សនិទាន និងភាពជាប់លើចន្លោះ',
      en: 'Polynomial & rational limits and continuity',
    },
    relatedPaperId: 'maths-social-2025',
    questions: [
      {
        id: 'socm-lim-1',
        prompt: {
          km: 'គណនាលីមីត៖ lim (x → 2) [ (x² − 4) / (x − 2) ] ។',
          en: 'Evaluate the limit: lim (x → 2) [ (x² − 4) / (x − 2) ].',
        },
        options: {
          km: ['0', '2', '4', 'មិនកំណត់'],
          en: ['0', '2', '4', 'Undefined'],
        },
        correctIndex: 2,
        explanation: {
          km: '(x² − 4)/(x − 2) = (x − 2)(x + 2)/(x − 2) = x + 2 (x ≠ 2) ⇒ ពេល x → 2 លីមីតស្មើ 4។',
          en: 'Factor x² − 4 = (x − 2)(x + 2). Simplifying gives x + 2 → 4 as x → 2.',
        },
      },
      {
        id: 'socm-lim-2',
        prompt: {
          km: 'គណនាលីមីត៖ lim (x → +∞) [ (4x + 7) / (2x − 1) ] ។',
          en: 'Evaluate: lim (x → +∞) [ (4x + 7) / (2x − 1) ].',
        },
        options: {
          km: ['2', '4', '−7', '0'],
          en: ['2', '4', '−7', '0'],
        },
        correctIndex: 0,
        explanation: {
          km: 'យកតួដឺក្រេខ្ពស់បំផុត៖ 4x / (2x) = 2។',
          en: 'Compare leading terms as x → +∞: 4x / (2x) = 2.',
        },
      },
      {
        id: 'socm-lim-3',
        prompt: {
          km: 'រកអាស៊ីមតូតឈរនៃខ្សែកោង f(x) = (2x + 1) / (x − 3) ។',
          en: 'Find the vertical asymptote of f(x) = (2x + 1) / (x − 3).',
        },
        options: {
          km: ['x = 2', 'x = 3', 'y = 2', 'x = −1/2'],
          en: ['x = 2', 'x = 3', 'y = 2', 'x = −1/2'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ភាគបែង x − 3 = 0 ត្រង់ x = 3 (ភាគយក 2(3) + 1 = 7 ≠ 0) ⇒ អាស៊ីមតូតឈរ x = 3។',
          en: 'Denominator x − 3 = 0 at x = 3 while numerator ≠ 0, giving vertical asymptote x = 3.',
        },
      },
      {
        id: 'socm-lim-4',
        prompt: {
          km: 'រកតម្លៃ m ដើម្បីឱ្យ f(x) = { x + m ចំពោះ x < 1; 2x² + 3 ចំពោះ x ≥ 1 } ជាប់ត្រង់ x = 1។',
          en: 'Find m so f(x) = { x + m for x < 1; 2x² + 3 for x ≥ 1 } is continuous at x = 1.',
        },
        options: {
          km: ['m = 2', 'm = 4', 'm = 5', 'm = 1'],
          en: ['m = 2', 'm = 4', 'm = 5', 'm = 1'],
        },
        correctIndex: 1,
        explanation: {
          km: 'lim (x → 1⁻) (x + m) = 1 + m ត្រូវស្មើ f(1) = 2(1)² + 3 = 5 ⇒ m = 4។',
          en: 'Left limit 1 + m must equal f(1) = 2(1)² + 3 = 5, so m = 4.',
        },
      },
    ],
  },
  {
    id: 'soc-math-derivatives',
    subjectId: 'math',
    tracks: ['social'],
    title: {
      km: 'ដេរីវេ និងអនុវត្តន៍នៃដេរីវេ',
      en: 'Derivatives & Applications',
    },
    subtitle: {
      km: 'ដេរីវេពហុធា សិក្សាអថិរភាព និងបន្ទាត់ប៉ះ',
      en: 'Polynomial derivatives, monotonicity & tangents',
    },
    relatedPaperId: 'maths-social-2025',
    questions: [
      {
        id: 'socm-der-1',
        prompt: {
          km: 'គេមាន f(x) = x³ − 4x + 5 ។ គណនា f′(2) ។',
          en: 'Given f(x) = x³ − 4x + 5, compute f′(2).',
        },
        options: {
          km: ['4', '8', '12', '5'],
          en: ['4', '8', '12', '5'],
        },
        correctIndex: 1,
        explanation: {
          km: 'f′(x) = 3x² − 4 ⇒ f′(2) = 3(4) − 4 = 8។',
          en: 'f′(x) = 3x² − 4, so f′(2) = 3(4) − 4 = 8.',
        },
      },
      {
        id: 'socm-der-2',
        prompt: {
          km: 'រកកូអរដោនេកំពូលនៃប៉ារ៉ាបូល f(x) = x² − 6x + 5 ។',
          en: 'Find the vertex of the parabola f(x) = x² − 6x + 5.',
        },
        options: {
          km: ['(3, −4)', '(−3, 32)', '(3, 4)', '(6, 5)'],
          en: ['(3, −4)', '(−3, 32)', '(3, 4)', '(6, 5)'],
        },
        correctIndex: 0,
        explanation: {
          km: 'f′(x) = 2x − 6 = 0 ⇒ x = 3។ f(3) = 9 − 18 + 5 = −4 ⇒ កំពូល (3, −4)។',
          en: 'f′(x) = 2x − 6 = 0 gives x = 3, and f(3) = 9 − 18 + 5 = −4. Vertex: (3, −4).',
        },
      },
      {
        id: 'socm-der-3',
        prompt: {
          km: 'គណនាដេរីវេនៃ f(x) = (2x + 1) / (x − 1) ។',
          en: 'Differentiate f(x) = (2x + 1) / (x − 1).',
        },
        options: {
          km: ['−3 / (x − 1)²', '3 / (x − 1)²', '−1 / (x − 1)²', '2 / (x − 1)²'],
          en: ['−3 / (x − 1)²', '3 / (x − 1)²', '−1 / (x − 1)²', '2 / (x − 1)²'],
        },
        correctIndex: 0,
        explanation: {
          km: 'តាមរូបមន្ត (u/v)′ = [2(x − 1) − (2x + 1)(1)] / (x − 1)² = −3 / (x − 1)²។',
          en: 'Quotient rule: [2(x − 1) − (2x + 1)] / (x − 1)² = −3 / (x − 1)².',
        },
      },
      {
        id: 'socm-der-4',
        prompt: {
          km: 'អនុគមន៍ f(x) = −x² + 4x + 1 កើនលើចន្លោះណា?',
          en: 'On which interval is f(x) = −x² + 4x + 1 increasing?',
        },
        options: {
          km: ['(−∞, 2)', '(2, +∞)', '(−∞, −2)', '(0, 4)'],
          en: ['(−∞, 2)', '(2, +∞)', '(−∞, −2)', '(0, 4)'],
        },
        correctIndex: 0,
        explanation: {
          km: 'f′(x) = −2x + 4 > 0 ⇔ x < 2 ⇒ f កើនលើ (−∞, 2)។',
          en: 'f′(x) = −2x + 4 > 0 when x < 2, so f increases on (−∞, 2).',
        },
      },
    ],
  },
  {
    id: 'soc-math-rat-exp-log',
    subjectId: 'math',
    tracks: ['social'],
    title: {
      km: 'អនុគមន៍សនិទាន អិចស្ប៉ូណង់ស្យែល និងលោការីត',
      en: 'Rational, Exponential & Logarithmic Functions',
    },
    subtitle: {
      km: 'អាស៊ីមតូត លក្ខណៈ eˣ និងដោះស្រាយសមីការ ln',
      en: 'Asymptotes, eˣ behavior & logarithmic equations',
    },
    relatedPaperId: 'maths-social-2025',
    questions: [
      {
        id: 'socm-rel-1',
        prompt: {
          km: 'រកអាស៊ីមតូតដេកនៃអនុគមន៍សនិទាន y = (3x − 2) / (x + 4) ។',
          en: 'Find the horizontal asymptote of y = (3x − 2) / (x + 4).',
        },
        options: {
          km: ['y = 3', 'y = −4', 'y = −1/2', 'x = 3'],
          en: ['y = 3', 'y = −4', 'y = −1/2', 'x = 3'],
        },
        correctIndex: 0,
        explanation: {
          km: 'lim (x → ±∞) (3x − 2)/(x + 4) = 3/1 = 3 ⇒ អាស៊ីមតូតដេក y = 3។',
          en: 'As x → ±∞, y approaches 3/1 = 3, giving horizontal asymptote y = 3.',
        },
      },
      {
        id: 'socm-rel-2',
        prompt: {
          km: 'ដោះស្រាយសមីការ៖ 2 · eˣ − 6 = 0 ។',
          en: 'Solve the equation: 2 · eˣ − 6 = 0.',
        },
        options: {
          km: ['x = 3', 'x = ln 3', 'x = e³', 'x = ln 6'],
          en: ['x = 3', 'x = ln 3', 'x = e³', 'x = ln 6'],
        },
        correctIndex: 1,
        explanation: {
          km: '2·eˣ = 6 ⇔ eˣ = 3 ⇔ x = ln 3។',
          en: '2·eˣ = 6 ⇒ eˣ = 3 ⇒ x = ln 3.',
        },
      },
      {
        id: 'socm-rel-3',
        prompt: {
          km: 'សម្រួលកន្សោម៖ ln(e²) + ln(1) − ln(e) ។',
          en: 'Simplify: ln(e²) + ln(1) − ln(e).',
        },
        options: {
          km: ['0', '1', '2', 'e'],
          en: ['0', '1', '2', 'e'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ln(e²) = 2, ln(1) = 0, ln(e) = 1 ⇒ 2 + 0 − 1 = 1។',
          en: 'ln(e²) = 2, ln(1) = 0, and ln(e) = 1, so 2 + 0 − 1 = 1.',
        },
      },
      {
        id: 'socm-rel-4',
        prompt: {
          km: 'រកដេរីវេនៃអនុគមន៍ f(x) = e^(3x) + ln(x) ចំពោះ x > 0។',
          en: 'Find f′(x) for f(x) = e^(3x) + ln(x), x > 0.',
        },
        options: {
          km: ['e^(3x) + 1/x', '3e^(3x) + 1/x', '3e^(3x) + ln(x)', 'e^(3x)/3 + 1/x'],
          en: ['e^(3x) + 1/x', '3e^(3x) + 1/x', '3e^(3x) + ln(x)', 'e^(3x)/3 + 1/x'],
        },
        correctIndex: 1,
        explanation: {
          km: '(e^(3x))′ = 3e^(3x) និង (ln x)′ = 1/x ⇒ f′(x) = 3e^(3x) + 1/x។',
          en: 'Derivative of e^(3x) is 3e^(3x) and derivative of ln(x) is 1/x.',
        },
      },
    ],
  },
  {
    id: 'soc-math-int-conics',
    subjectId: 'math',
    tracks: ['social'],
    title: {
      km: 'អាំងតេក្រាលកំណត់ និងកោនិក (ប៉ារ៉ាបូល អេលីប អ៊ីពែបូល)',
      en: 'Definite Integrals & Conics (Parabola, Ellipse, Hyperbola)',
    },
    subtitle: {
      km: 'គណនាផ្ទៃក្រឡា កំពូល កំណុំ និងអេចសង់ទ្រីស៊ីតេ',
      en: 'Definite integrals, vertices, foci & eccentricity',
    },
    relatedPaperId: 'maths-social-2025',
    questions: [
      {
        id: 'socm-ic-1',
        prompt: {
          km: 'គណនា៖ ∫₁² (3x² + 2) dx ។',
          en: 'Compute: ∫₁² (3x² + 2) dx.',
        },
        options: {
          km: ['7', '9', '10', '12'],
          en: ['7', '9', '10', '12'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ព្រីមីទីវគឺ x³ + 2x ⇒ (8 + 4) − (1 + 2) = 12 − 3 = 9។',
          en: 'Antiderivative is x³ + 2x: (2³ + 4) − (1³ + 2) = 12 − 3 = 9.',
        },
      },
      {
        id: 'socm-ic-2',
        prompt: {
          km: 'រកកូអរដោនេកំណុំរបស់ប៉ារ៉ាបូល y² = 12x ។',
          en: 'Find the focus of the parabola y² = 12x.',
        },
        options: {
          km: ['F(3, 0)', 'F(0, 3)', 'F(6, 0)', 'F(12, 0)'],
          en: ['F(3, 0)', 'F(0, 3)', 'F(6, 0)', 'F(12, 0)'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ប្រៀបធៀប y² = 4px ជាមួយ y² = 12x ⇒ 4p = 12 ⇒ p = 3 ⇒ កំណុំ F(3, 0)។',
          en: 'Comparing y² = 4px with y² = 12x gives 4p = 12 ⇒ p = 3, so focus is F(3, 0).',
        },
      },
      {
        id: 'socm-ic-3',
        prompt: {
          km: 'រកកំណុំរបស់អេលីប (x² / 25) + (y² / 9) = 1 ។',
          en: 'Find the foci of the ellipse (x² / 25) + (y² / 9) = 1.',
        },
        options: {
          km: ['(±4, 0)', '(0, ±4)', '(±5, 0)', '(±√34, 0)'],
          en: ['(±4, 0)', '(0, ±4)', '(±5, 0)', '(±√34, 0)'],
        },
        correctIndex: 0,
        explanation: {
          km: 'a² = 25, b² = 9 ⇒ c² = a² − b² = 25 − 9 = 16 ⇒ c = 4 ⇒ កំណុំ (±4, 0)។',
          en: 'With a² = 25 and b² = 9, c² = a² − b² = 16 ⇒ c = 4, so foci are (±4, 0).',
        },
      },
      {
        id: 'socm-ic-4',
        prompt: {
          km: 'រកសមីការអាស៊ីមតូតនៃអ៊ីពែបូល (x² / 9) − (y² / 16) = 1 ។',
          en: 'Find the asymptotes of the hyperbola (x² / 9) − (y² / 16) = 1.',
        },
        options: {
          km: ['y = ±(4/3)x', 'y = ±(3/4)x', 'y = ±(16/9)x', 'y = ±4x'],
          en: ['y = ±(4/3)x', 'y = ±(3/4)x', 'y = ±(16/9)x', 'y = ±4x'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ចំពោះ x²/a² − y²/b² = 1 ដោយ a = 3, b = 4 អាស៊ីមតូតគឺ y = ±(b/a)x = ±(4/3)x។',
          en: 'For x²/a² − y²/b² = 1 with a = 3 and b = 4, asymptotes are y = ±(b/a)x = ±(4/3)x.',
        },
      },
    ],
  },

  // ============================================================================
  // 3. PHYSICS — SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'phy-thermo',
    subjectId: 'physics',
    tracks: ['science'],
    title: {
      km: 'ទ្រឹស្តីស៊ីនេទិចនៃឧស្ម័ន និងច្បាប់ទី១ ទែម៉ូឌីណាមិច',
      en: 'Kinetic Theory of Gases & First Law of Thermodynamics',
    },
    subtitle: {
      km: 'PV = nRT, ថាមពលក្នុង ΔU = Q + W និងលំនាំឧស្ម័ន',
      en: 'Ideal gas law PV = nRT, internal energy ΔU = Q + W',
    },
    relatedPaperId: 'phy-science-2023',
    questions: [
      {
        id: 'phy-th-1',
        prompt: {
          km: 'ឧស្ម័នមួយស្រូបកម្តៅ Q = 400 J និងធ្វើកម្មន្តរីកមាឌ 150 J។ គណនាបម្រែបម្រួលថាមពលក្នុង ΔU។',
          en: 'A gas absorbs 400 J of heat and does 150 J of expansion work. Calculate ΔU.',
        },
        options: {
          km: ['+550 J', '+250 J', '−250 J', '+150 J'],
          en: ['+550 J', '+250 J', '−250 J', '+150 J'],
        },
        correctIndex: 1,
        explanation: {
          km: 'តាមច្បាប់ទី១ ΔU = Q + W។ ដោយឧស្ម័នធ្វើកម្មន្ត W = −150 J ⇒ ΔU = 400 − 150 = +250 J។',
          en: 'By ΔU = Q + W with Q = +400 J and work done by gas W = −150 J, ΔU = +250 J.',
        },
      },
      {
        id: 'phy-th-2',
        prompt: {
          km: 'ក្នុងលំនាំសីតុណ្ហភាពថេរ (Isothermal) នៃឧស្ម័នបរិសុទ្ធ តើ ΔU ស្មើប៉ុន្មាន?',
          en: 'For an isothermal process of an ideal gas, what is ΔU?',
        },
        options: {
          km: ['ΔU > 0', 'ΔU < 0', 'ΔU = 0', 'ΔU = Q'],
          en: ['ΔU > 0', 'ΔU < 0', 'ΔU = 0', 'ΔU = Q'],
        },
        correctIndex: 2,
        explanation: {
          km: 'ថាមពលក្នុងនៃឧស្ម័នបរិសុទ្ធអាស្រ័យតែលើសីតុណ្ហភាព (T ថេរ ⇒ ΔT = 0 ⇒ ΔU = 0)។',
          en: 'Internal energy of an ideal gas depends only on temperature, so ΔT = 0 implies ΔU = 0.',
        },
      },
      {
        id: 'phy-th-3',
        prompt: {
          km: 'បើសីតុណ្ហភាពដាច់ខាត T នៃឧស្ម័នកើនឡើង ៤ ដង តើល្បឿនឫសការេមធ្យម v_rms កើនប៉ុន្មានដង?',
          en: 'If the absolute temperature T of an ideal gas quadruples (×4), how does v_rms change?',
        },
        options: {
          km: ['កើន ២ ដង', 'កើន ៤ ដង', 'កើន ១៦ ដង', 'ថយចុះពាក់កណ្តាល'],
          en: ['Doubles (×2)', 'Quadruples (×4)', 'Increases 16×', 'Halves'],
        },
        correctIndex: 0,
        explanation: {
          km: 'v_rms = √(3RT / M) សមាមាត្រនឹង √T ⇒ √4 = 2 ដង។',
          en: 'Since v_rms = √(3RT / M) is proportional to √T, multiplying T by 4 doubles v_rms.',
        },
      },
      {
        id: 'phy-th-4',
        prompt: {
          km: 'ក្នុងលំនាំមាឌថេរ (Isochoric) តើកម្មន្តមេកានិច W ស្មើប៉ុន្មាន?',
          en: 'In an isochoric (constant-volume) process, what is the mechanical work W?',
        },
        options: {
          km: ['W = P·ΔV', 'W = 0', 'W = nRT', 'W = −Q'],
          en: ['W = P·ΔV', 'W = 0', 'W = nRT', 'W = −Q'],
        },
        correctIndex: 1,
        explanation: {
          km: 'មាឌថេរមានន័យថា ΔV = 0 ដូច្នេះ W = −P·ΔV = 0 និង ΔU = Q។',
          en: 'Constant volume means ΔV = 0, so mechanical work W = 0 and ΔU = Q.',
        },
      },
    ],
  },
  {
    id: 'phy-waves',
    subjectId: 'physics',
    tracks: ['science'],
    title: {
      km: 'អាំងទែផេរ៉ង់ និងឌីប្រាក់ស្យុងនៃរលក',
      en: 'Wave Interference & Diffraction',
    },
    subtitle: {
      km: 'អាំងទែផេរ៉ង់ Young ចន្លោះប្រហោង និងគន្លាតអាំងទែផ្រង់ i',
      en: 'Double-slit interference, fringe spacing i & diffraction',
    },
    relatedPaperId: 'phy-science-2023',
    questions: [
      {
        id: 'phy-wv-1',
        prompt: {
          km: 'ក្នុងពិសោធន៍ប្រហោងពីររបស់ Young រូបមន្តគន្លាតអាំងទែផ្រង់ i គឺមួយណា?',
          en: 'In Young’s double-slit experiment, what is the fringe spacing formula i?',
        },
        options: {
          km: ['i = λ·a / D', 'i = λ·D / a', 'i = a·D / λ', 'i = λ / (a·D)'],
          en: ['i = λ·a / D', 'i = λ·D / a', 'i = a·D / λ', 'i = λ / (a·D)'],
        },
        correctIndex: 1,
        explanation: {
          km: 'គន្លាតអាំងទែផ្រង់ i = λ·D / a ដែល D ជាចម្ងាយដល់អេក្រង់ និង a ជាចម្ងាយរវាងប្រហោងទាំងពីរ។',
          en: 'Fringe spacing is i = λ·D / a, where D is screen distance and a is slit separation.',
        },
      },
      {
        id: 'phy-wv-2',
        prompt: {
          km: 'គេមាន λ = 0.6 μm, D = 2 m, a = 1 mm។ គណនាគន្លាតអាំងទែផ្រង់ i។',
          en: 'Given λ = 0.6 μm, D = 2 m, and a = 1 mm, calculate fringe spacing i.',
        },
        options: {
          km: ['0.3 mm', '1.2 mm', '2.4 mm', '0.6 mm'],
          en: ['0.3 mm', '1.2 mm', '2.4 mm', '0.6 mm'],
        },
        correctIndex: 1,
        explanation: {
          km: 'i = (0.6 × 10⁻⁶ × 2) / (10⁻³) = 1.2 × 10⁻³ m = 1.2 mm។',
          en: 'i = (0.6 × 10⁻⁶ × 2) / (10⁻³) = 1.2 × 10⁻³ m = 1.2 mm.',
        },
      },
      {
        id: 'phy-wv-3',
        prompt: {
          km: 'លក្ខខណ្ឌដើម្បីឱ្យមានអាំងទែផ្រង់ភ្លឺលំដាប់ k (កូអរដោនេ x) គឺអ្វី?',
          en: 'What is the position x of the k-th bright fringe in double-slit interference?',
        },
        options: {
          km: ['x = k · i', 'x = (k + 1/2) · i', 'x = k · i / 2', 'x = (2k + 1) · i'],
          en: ['x = k · i', 'x = (k + 1/2) · i', 'x = k · i / 2', 'x = (2k + 1) · i'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ប្រភពស៊ីគ្នាបង្កើតអាំងទែផ្រង់ភ្លឺត្រង់ x = k·i (k ∈ ℤ) និងអាំងទែផ្រង់ងងឹតត្រង់ x = (k + 1/2)i។',
          en: 'Bright fringes occur at x = k·i (k ∈ ℤ), while dark fringes occur at x = (k + 1/2)i.',
        },
      },
      {
        id: 'phy-wv-4',
        prompt: {
          km: 'បាតុភូតឌីប្រាក់ស្យុង (Diffraction) កើតឡើងច្បាស់លាស់ពេលទំហំប្រហោង a ធៀបនឹងជំហានរលក λ យ៉ាងណា?',
          en: 'When is wave diffraction most pronounced relative to slit width a and wavelength λ?',
        },
        options: {
          km: ['a ធំជាង λ រាប់លានដង', 'a ប្រហាក់ប្រហែល ឬតូចជាង λ', 'λ = 0', 'ពន្លឺមានល្បឿនសូន្យ'],
          en: ['a is millions of times larger than λ', 'a is comparable to or smaller than λ', 'λ = 0', 'Wave speed is zero'],
        },
        correctIndex: 1,
        explanation: {
          km: 'រលកបត់ជុំវិញគែមច្បាស់លាស់បំផុតនៅពេលទទឹងប្រហោង a ប្រហាក់ប្រហែលនឹងជំហានរលក λ។',
          en: 'Diffraction spreading is strongest when slit aperture a is comparable to wavelength λ.',
        },
      },
    ],
  },
  {
    id: 'phy-magnetic',
    subjectId: 'physics',
    tracks: ['science'],
    title: {
      km: 'ដែនម៉ាញេទិច និងអាំងឌុចស្យុងអេឡិចត្រូម៉ាញេទិច',
      en: 'Magnetic Fields & Electromagnetic Induction',
    },
    subtitle: {
      km: 'កម្លាំង Lorentz, Laplace, ភ្លុចម៉ាញេទិច Φ និងច្បាប់ Faraday/Lenz',
      en: 'Lorentz & Laplace forces, magnetic flux Φ & Faraday’s Law',
    },
    relatedPaperId: 'phy-science-2023',
    questions: [
      {
        id: 'phy-mag-1',
        prompt: {
          km: 'បន្ទុក q ផ្លាស់ទីដោយល្បឿន v កែងនឹងដែនម៉ាញេទិច B។ រកតម្លៃកម្លាំងម៉ាញេទិច Lorentz។',
          en: 'A charge q moves with velocity v perpendicular to magnetic field B. What is the Lorentz force magnitude?',
        },
        options: {
          km: ['F = q·v / B', 'F = |q|·v·B', 'F = I·L / B', 'F = q·B²'],
          en: ['F = q·v / B', 'F = |q|·v·B', 'F = I·L / B', 'F = q·B²'],
        },
        correctIndex: 1,
        explanation: {
          km: 'F = |q|·v·B·sin(α)។ ដោយ α = 90° (sin 90° = 1) នោះ F = |q|·v·B។',
          en: 'F = |q|·v·B·sin(α). When perpendicular (sin 90° = 1), F = |q|·v·B.',
        },
      },
      {
        id: 'phy-mag-2',
        prompt: {
          km: 'បូប៊ីនមាន N ស្ពៀ ផ្ទៃមុខកាត់ S ស្ថិតក្នុងដែន B កែងនឹងផ្ទៃស្ពៀ (θ = 0°)។ រកភ្លុចម៉ាញេទិច Φ។',
          en: 'A coil with N turns and area S lies perpendicular to B (θ = 0°). What is the magnetic flux Φ?',
        },
        options: {
          km: ['Φ = B·S / N', 'Φ = N·B·S', 'Φ = N·B / S', 'Φ = 0'],
          en: ['Φ = B·S / N', 'Φ = N·B·S', 'Φ = N·B / S', 'Φ = 0'],
        },
        correctIndex: 1,
        explanation: {
          km: 'Φ = N·B·S·cos(θ)។ ពេលដែន B កែងនឹងផ្ទៃស្ពៀ (ស្របនឹងន័រម៉ាល់ n) θ = 0° ⇒ Φ = N·B·S។',
          en: 'Φ = N·B·S·cos(0°) = N·B·S (measured in Webers, Wb).',
        },
      },
      {
        id: 'phy-mag-3',
        prompt: {
          km: 'តាមច្បាប់ Lenz ចរន្តអាំងឌ្វីមានទិសដៅដូចម្តេច?',
          en: 'According to Lenz’s Law, what is the direction of the induced current?',
        },
        options: {
          km: [
            'បង្កើនបម្រែបម្រួលភ្លុចជានិច្ច',
            'ប្រឆាំងនឹងបុព្វហេតុដែលបង្កើតវា (បម្រែបម្រួលភ្លុច ΔΦ)',
            'ស្របនឹងវ៉ិចទ័រល្បឿនអេឡិចត្រុង',
            'គ្មានទិសដៅកំណត់ទេ',
          ],
          en: [
            'Always reinforces flux change',
            'Opposes the change in magnetic flux ΔΦ that produces it',
            'Always parallel to electron velocity',
            'Has no fixed direction',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'ច្បាប់ Lenz៖ e = −dΦ/dt។ សញ្ញាដកបង្ហាញថាចរន្តអាំងឌ្វីប្រឆាំងនឹងការកើន ឬថយនៃភ្លុចម៉ាញេទិច។',
          en: 'Faraday-Lenz Law e = −dΦ/dt states that induced current opposes the flux change causing it.',
        },
      },
      {
        id: 'phy-mag-4',
        prompt: {
          km: 'ខ្សែចម្លងត្រង់វែងឆ្លងកាត់ដោយចរន្ត I ស្ថិតក្នុងខ្យល់។ ដែនម៉ាញេទិច B នៅចម្ងាយ r គណនាតាមរូបមន្តណា?',
          en: 'What is the magnetic field B at distance r from a long straight wire carrying current I?',
        },
        options: {
          km: ['B = (2 × 10⁻⁷) · I / r', 'B = (2 × 10⁻⁷) · I · r', 'B = 4π × 10⁻⁷ · I / r', 'B = I / r²'],
          en: ['B = (2 × 10⁻⁷) · I / r', 'B = (2 × 10⁻⁷) · I · r', 'B = 4π × 10⁻⁷ · I / r', 'B = I / r²'],
        },
        correctIndex: 0,
        explanation: {
          km: 'B = μ₀·I / (2πr) = 2 × 10⁻⁷ · I / r (គិតជា Tesla, T)។',
          en: 'Using μ₀ = 4π × 10⁻⁷ T·m/A, B = μ₀·I / (2πr) = (2 × 10⁻⁷) · I / r.',
        },
      },
    ],
  },
  {
    id: 'phy-ac-nuclear',
    subjectId: 'physics',
    tracks: ['science'],
    title: {
      km: 'សៀគ្វីចរន្តឆ្លាស់ និងរូបវិទ្យានុយក្លេអ៊ែ',
      en: 'AC Circuits & Nuclear Physics',
    },
    subtitle: {
      km: 'រ៉េសូណង់ RLC, កត្តាអានុភាព cos(φ) និងការបំបែកវិទ្យុសកម្ម',
      en: 'RLC resonance, power factor cos(φ) & radioactive decay',
    },
    relatedPaperId: 'phy-science-2023',
    questions: [
      {
        id: 'phy-ac-1',
        prompt: {
          km: 'ក្នុងសៀគ្វី RLC តជាស៊េរី នៅពេលមានរ៉េសូណង់អគ្គិសនី (X_L = X_C) តើកត្តាអានុភាព cos(φ) ស្មើប៉ុន្មាន?',
          en: 'In a series RLC circuit at resonance (X_L = X_C), what is the power factor cos(φ)?',
        },
        options: {
          km: ['0', '0.5', '1', '√2 / 2'],
          en: ['0', '0.5', '1', '√2 / 2'],
        },
        correctIndex: 2,
        explanation: {
          km: 'នៅរ៉េសូណង់ X_L = X_C ⇒ អាំប៉េដង់ Z = R និង φ = 0 ⇒ cos(φ) = R/Z = 1។',
          en: 'At resonance X_L = X_C, impedance Z = R and phase angle φ = 0, so cos(φ) = 1.',
        },
      },
      {
        id: 'phy-ac-2',
        prompt: {
          km: 'គណនារ៉េអាក់តង់អាំងឌុចទិច X_L នៃបូប៊ីន L = 0.2/π H នៅប្រេកង់ f = 50 Hz។',
          en: 'Calculate inductive reactance X_L for L = 0.2/π H at frequency f = 50 Hz.',
        },
        options: {
          km: ['10 Ω', '20 Ω', '50 Ω', '100 Ω'],
          en: ['10 Ω', '20 Ω', '50 Ω', '100 Ω'],
        },
        correctIndex: 1,
        explanation: {
          km: 'X_L = 2πfL = 2π × 50 × (0.2/π) = 100 × 0.2 = 20 Ω។',
          en: 'X_L = 2πfL = 2π(50)(0.2/π) = 20 Ω.',
        },
      },
      {
        id: 'phy-ac-3',
        prompt: {
          km: 'អង្គធាតុវិទ្យុសកម្មមួយមានរយៈពេលពាក់កណ្តាលជីវិត T = 4 ថ្ងៃ។ ក្រោយ 8 ថ្ងៃ តើនៅសល់ស្នូលប៉ុន្មានភាគ?',
          en: 'A radioactive sample has half-life T = 4 days. What fraction remains after 8 days?',
        },
        options: {
          km: ['1/2', '1/4', '1/8', '3/4'],
          en: ['1/2', '1/4', '1/8', '3/4'],
        },
        correctIndex: 1,
        explanation: {
          km: 'n = t / T = 8 / 4 = 2 ⇒ N = N₀ · (1/2)² = N₀ / 4 (នៅសល់ 1/4)។',
          en: 'Two half-lives pass (8/4 = 2), leaving (1/2)² = 1/4 of initial nuclei.',
        },
      },
      {
        id: 'phy-ac-4',
        prompt: {
          km: 'រូបមន្តថាមពលសមមូលម៉ាសរបស់លោក Einstein (Mass-Energy Equivalence) គឺមួយណា?',
          en: 'Which formula represents Einstein’s mass-energy equivalence for nuclear binding energy?',
        },
        options: {
          km: ['ΔE = Δm · c', 'ΔE = Δm · c²', 'ΔE = (1/2) Δm · c²', 'ΔE = h · c'],
          en: ['ΔE = Δm · c', 'ΔE = Δm · c²', 'ΔE = (1/2) Δm · c²', 'ΔE = h · c'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ថាមពលចំណងនុយក្លេអ៊ែ ΔE = Δm · c² ដែល Δm ជាខាតម៉ាស និង c = 3 × 10⁸ m/s។',
          en: 'Nuclear binding energy equals mass defect times speed of light squared: ΔE = Δm · c².',
        },
      },
    ],
  },

  // ============================================================================
  // 4. CHEMISTRY — SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'chem-kinetics',
    subjectId: 'chemistry',
    tracks: ['science'],
    title: {
      km: 'ល្បឿនប្រតិកម្ម និងកត្តាជះឥទ្ធិពល (ស៊ីនេទិចគីមី)',
      en: 'Reaction Rates & Influencing Factors (Chemical Kinetics)',
    },
    subtitle: {
      km: 'ល្បឿនមធ្យម ល្បឿនខណៈ និងកត្តាសីតុណ្ហភាព កំហាប់ កាតាលីករ',
      en: 'Reaction rate laws, concentration, temperature & catalysts',
    },
    relatedPaperId: 'chem-science-2022',
    questions: [
      {
        id: 'ch-kin-1',
        prompt: {
          km: 'ប្រតិកម្មមួយមានល្បឿន v = k[A]²។ បើបង្កើនកំហាប់ [A] ឡើង ២ ដង តើល្បឿន v កើនប៉ុន្មានដង?',
          en: 'For rate law v = k[A]², if [A] is doubled, by what factor does reaction rate increase?',
        },
        options: {
          km: ['២ ដង', '៤ ដង', '៨ ដង', 'មិនប្រែប្រួល'],
          en: ['2 times', '4 times', '8 times', 'Unchanged'],
        },
        correctIndex: 1,
        explanation: {
          km: 'លំដាប់ប្រតិកម្មស្មើ ២ ⇒ v′ = k(2[A])² = 4k[A]² = 4v (កើន ៤ ដង)។',
          en: 'Since the reaction is second-order in A, doubling [A] multiplies rate by 2² = 4.',
        },
      },
      {
        id: 'ch-kin-2',
        prompt: {
          km: 'តើកាតាលីករ (Catalyst) បង្កើនល្បឿនប្រតិកម្មដោយរបៀបណា?',
          en: 'How does a catalyst accelerate a chemical reaction?',
        },
        options: {
          km: [
            'បង្កើនថាមពលសកម្ម E_a',
            'បន្ថយថាមពលសកម្ម E_a ដោយមិនបាត់បង់ក្នុងប្រតិកម្ម',
            'ប្តូរតម្លៃ ΔH នៃប្រតិកម្ម',
            'បង្កើនថេរលំនឹង K_c',
          ],
          en: [
            'Increases activation energy E_a',
            'Lowers activation energy E_a without being consumed',
            'Changes reaction enthalpy ΔH',
            'Increases equilibrium constant K_c',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'កាតាលីករបង្កើតផ្លូវប្រតិកម្មថ្មីដែលមានថាមពលសកម្ម E_a ទាបជាងមុន។',
          en: 'A catalyst provides an alternative pathway with lower activation energy E_a.',
        },
      },
      {
        id: 'ch-kin-3',
        prompt: {
          km: 'ក្នុងប្រតិកម្ម 2N₂O₅ → 4NO₂ + O₂ បើល្បឿនបំបែក N₂O₅ ស្មើ 0.04 mol/L·s តើល្បឿនកកើត O₂ ស្មើប៉ុន្មាន?',
          en: 'In 2N₂O₅ → 4NO₂ + O₂, if N₂O₅ decomposes at 0.04 mol/L·s, what is the formation rate of O₂?',
        },
        options: {
          km: ['0.02 mol/L·s', '0.04 mol/L·s', '0.08 mol/L·s', '0.01 mol/L·s'],
          en: ['0.02 mol/L·s', '0.04 mol/L·s', '0.08 mol/L·s', '0.01 mol/L·s'],
        },
        correctIndex: 0,
        explanation: {
          km: 'v(O₂) = (1/2) v(N₂O₅) = (1/2) × 0.04 = 0.02 mol/L·s។',
          en: 'By stoichiometry, rate(O₂) = (1/2) rate(N₂O₅) = 0.02 mol/L·s.',
        },
      },
      {
        id: 'ch-kin-4',
        prompt: {
          km: 'ហេតុអ្វីបានជាការដុតកំដៅបង្កើនល្បឿនប្រតិកម្មគីមី?',
          en: 'Why does raising temperature increase reaction rate?',
        },
        options: {
          km: [
            'បង្កើនថាមពលស៊ីនេទិច និងភាពញឹកញាប់នៃការប៉ះទង្គិចមានប្រសិទ្ធភាព',
            'បន្ថយចលនាម៉ូលេគុល',
            'បន្ថយកំហាប់អង្គធាតុប្រតិករ',
            'លុបបំបាត់ថាមពលសកម្ម',
          ],
          en: [
            'Increases kinetic energy and frequency of effective collisions',
            'Slows molecular motion',
            'Decreases reactant concentration',
            'Eliminates activation energy',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'សីតុណ្ហភាពខ្ពស់ធ្វើឱ្យភាគល្អិតមានថាមពលខ្ពស់ជាង E_a កាន់តែច្រើន និងប៉ះទង្គិចគ្នាកាន់តែញឹកញាប់។',
          en: 'Higher temperature gives more molecules energy ≥ E_a and increases effective collision frequency.',
        },
      },
    ],
  },
  {
    id: 'chem-ph-titration',
    subjectId: 'chemistry',
    tracks: ['science'],
    title: {
      km: 'សូលុយស្យុងទឹក pH និងអត្រាកម្មអាស៊ីត-បាស',
      en: 'Aqueous Solutions, pH & Acid-Base Titration',
    },
    subtitle: {
      km: 'គណនា pH, K_w = 10⁻¹⁴ និងចំណុចសមមូលអត្រាកម្ម',
      en: 'pH calculations, K_w = 10⁻¹⁴ & titration equivalence',
    },
    relatedPaperId: 'chem-science-2022',
    questions: [
      {
        id: 'ch-ph-1',
        prompt: {
          km: 'គណនា pH នៃសូលុយស្យុងអាស៊ីតខ្លាំង HCl កំហាប់ 0.01 M នៅ 25°C។',
          en: 'Calculate the pH of a 0.01 M strong acid HCl solution at 25°C.',
        },
        options: {
          km: ['pH = 1', 'pH = 2', 'pH = 12', 'pH = −2'],
          en: ['pH = 1', 'pH = 2', 'pH = 12', 'pH = −2'],
        },
        correctIndex: 1,
        explanation: {
          km: '[H₃O⁺] = 0.01 M = 10⁻² M ⇒ pH = −log(10⁻²) = 2។',
          en: 'Since HCl dissociates completely, [H₃O⁺] = 10⁻² M ⇒ pH = −log(10⁻²) = 2.',
        },
      },
      {
        id: 'ch-ph-2',
        prompt: {
          km: 'គណនា pH នៃសូលុយស្យុងបាសខ្លាំង NaOH កំហាប់ 10⁻³ M នៅ 25°C (K_w = 10⁻¹⁴)។',
          en: 'Calculate the pH of a 10⁻³ M NaOH solution at 25°C (K_w = 10⁻¹⁴).',
        },
        options: {
          km: ['3', '7', '11', '14'],
          en: ['3', '7', '11', '14'],
        },
        correctIndex: 2,
        explanation: {
          km: '[OH⁻] = 10⁻³ M ⇒ pOH = 3 ⇒ pH = 14 − 3 = 11។',
          en: '[OH⁻] = 10⁻³ M gives pOH = 3, so pH = 14 − 3 = 11.',
        },
      },
      {
        id: 'ch-ph-3',
        prompt: {
          km: 'ធ្វើអត្រាកម្ម 20 mL នៃ HCl ជាមួយ 0.1 M NaOH ដោយប្រើ 40 mL ទើបដល់ចំណុចសមមូល។ រកកំហាប់ HCl។',
          en: '20 mL of HCl is titrated to equivalence using 40 mL of 0.1 M NaOH. Find [HCl].',
        },
        options: {
          km: ['0.05 M', '0.10 M', '0.20 M', '0.40 M'],
          en: ['0.05 M', '0.10 M', '0.20 M', '0.40 M'],
        },
        correctIndex: 2,
        explanation: {
          km: 'នៅចំណុចសមមូល C_a·V_a = C_b·V_b ⇒ C_a = (0.1 × 40) / 20 = 0.20 M។',
          en: 'At equivalence, C_a·V_a = C_b·V_b ⇒ C_a = (0.1 × 40)/20 = 0.20 M.',
        },
      },
      {
        id: 'ch-ph-4',
        prompt: {
          km: 'នៅចំណុចសមមូលនៃអត្រាកម្មអាស៊ីតខ្សោយ (CH₃COOH) ដោយបាសខ្លាំង (NaOH) តើ pH យ៉ាងណា?',
          en: 'At the equivalence point of titrating weak acid CH₃COOH with strong base NaOH, what is the pH?',
        },
        options: {
          km: ['pH = 7', 'pH > 7 (មជ្ឈដ្ឋានបាស)', 'pH < 7 (មជ្ឈដ្ឋានអាស៊ីត)', 'pH = 0'],
          en: ['pH = 7', 'pH > 7 (basic)', 'pH < 7 (acidic)', 'pH = 0'],
        },
        correctIndex: 1,
        explanation: {
          km: 'អ៊ីយ៉ុង CH₃COO⁻ ធ្វើអ៊ីដ្រូលីសជាមួយទឹកបង្កើត OH⁻ ដូច្នេះនៅចំណុចសមមូល pH > 7។',
          en: 'Conjugate base CH₃COO⁻ hydrolyzes water to produce OH⁻, making equivalence pH > 7.',
        },
      },
    ],
  },
  {
    id: 'chem-equilibrium',
    subjectId: 'chemistry',
    tracks: ['science'],
    title: {
      km: 'ធម្មជាតិ និងការរំកិលលំនឹងគីមី',
      en: 'Nature & Shifting of Chemical Equilibrium',
    },
    subtitle: {
      km: 'ថេរលំនឹង K_c និងគោលការណ៍ Le Chatelier',
      en: 'Equilibrium constant K_c & Le Chatelier’s Principle',
    },
    relatedPaperId: 'chem-science-2022',
    questions: [
      {
        id: 'ch-eq-1',
        prompt: {
          km: 'ក្នុងប្រព័ន្ធលំនឹង N₂(g) + 3H₂(g) ⇌ 2NH₃(g) បើបង្កើនសម្ពាធ តើលំនឹងរំកិលទៅទិសណា?',
          en: 'In N₂(g) + 3H₂(g) ⇌ 2NH₃(g), which way does equilibrium shift when pressure increases?',
        },
        options: {
          km: [
            'រំកិលទៅស្តាំ (កកើត NH₃ ច្រើនជាងមុន)',
            'រំកិលទៅឆ្វេង',
            'គ្មានការរំកិលទេ',
            'តម្លៃ K_c ថយចុះ',
          ],
          en: [
            'Shifts right (more NH₃)',
            'Shifts left',
            'No shift',
            'K_c decreases',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'តាម Le Chatelier ការបង្កើនសម្ពាធរំកិលលំនឹងទៅផ្នែកមានម៉ូលឧស្ម័នតិច (4 ម៉ូល → 2 ម៉ូល នៅខាងស្តាំ)។',
          en: 'Higher pressure favors fewer gas moles: 4 moles on left vs 2 moles on right ⇒ shifts right.',
        },
      },
      {
        id: 'ch-eq-2',
        prompt: {
          km: 'កត្តាណាមួយតែមួយគត់ដែលអាចផ្លាស់ប្តូរតម្លៃថេរលំនឹង K_c នៃប្រតិកម្មមួយ?',
          en: 'Which single factor changes the numerical value of equilibrium constant K_c?',
        },
        options: {
          km: ['កំហាប់', 'សម្ពាធ', 'កាតាលីករ', 'សីតុណ្ហភាព'],
          en: ['Concentration', 'Pressure', 'Catalyst', 'Temperature'],
        },
        correctIndex: 3,
        explanation: {
          km: 'ថេរលំនឹង K_c អាស្រ័យតែលើសីតុណ្ហភាពប៉ុណ្ណោះ។',
          en: 'Equilibrium constant K_c depends exclusively on temperature.',
        },
      },
      {
        id: 'ch-eq-3',
        prompt: {
          km: 'ចំពោះប្រតិកម្មស្រូបកម្តៅ (ΔH > 0) បើបង្កើនសីតុណ្ហភាព តើលំនឹងរំកិលទៅណា?',
          en: 'For an endothermic reaction (ΔH > 0), what happens when temperature is raised?',
        },
        options: {
          km: ['រំកិលទៅស្តាំ និង K_c កើនឡើង', 'រំកិលទៅឆ្វេង និង K_c ថយចុះ', 'មិនប្រែប្រួល', 'ប្រតិកម្មឈប់ដំណើរការ'],
          en: ['Shifts right and K_c increases', 'Shifts left and K_c decreases', 'No change', 'Reaction stops'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ការដុតកំដៅលើប្រតិកម្មស្រូបកម្តៅជំរុញលំនឹងទៅទិសស្រូបកម្តៅ (ខាងស្តាំ) និងបង្កើន K_c។',
          en: 'Heating an endothermic reaction drives equilibrium toward products (right) and increases K_c.',
        },
      },
      {
        id: 'ch-eq-4',
        prompt: {
          km: 'កន្សោមថេរលំនឹង K_c សម្រាប់ប្រតិកម្ម CaCO₃(s) ⇌ CaO(s) + CO₂(g) គឺមួយណា?',
          en: 'What is the K_c expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?',
        },
        options: {
          km: ['K_c = [CaO][CO₂] / [CaCO₃]', 'K_c = [CO₂]', 'K_c = 1 / [CO₂]', 'K_c = [CaO] + [CO₂]'],
          en: ['K_c = [CaO][CO₂] / [CaCO₃]', 'K_c = [CO₂]', 'K_c = 1 / [CO₂]', 'K_c = [CaO] + [CO₂]'],
        },
        correctIndex: 1,
        explanation: {
          km: 'អង្គធាតុរឹងសុទ្ធ (s) មិនបញ្ចូលក្នុងកន្សោម K_c ទេ ដូច្នេះ K_c = [CO₂]។',
          en: 'Pure solids are omitted from heterogeneous equilibrium expressions, leaving K_c = [CO₂].',
        },
      },
    ],
  },
  {
    id: 'chem-esters',
    subjectId: 'chemistry',
    tracks: ['science'],
    title: {
      km: 'អេស្ទែ ខ្លាញ់ និងប្រេង (គីមីសរីរាង្គ)',
      en: 'Esters, Fats & Oils (Organic Chemistry)',
    },
    subtitle: {
      km: 'អេស្ទែកម្ម អ៊ីដ្រូលីស សាប៊ូកម្ម និងទ្រីគ្លីសេរីត',
      en: 'Esterification, hydrolysis, saponification & triglycerides',
    },
    relatedPaperId: 'chem-science-2022',
    questions: [
      {
        id: 'ch-est-1',
        prompt: {
          km: 'ប្រតិកម្មរវាងអាស៊ីតកាបុកស៊ីលិច (CH₃COOH) និងអាល់កុល (C₂H₅OH) បង្កើតបានអេស្ទែឈ្មោះអ្វី?',
          en: 'Reaction of acetic acid (CH₃COOH) with ethanol (C₂H₅OH) forms which ester?',
        },
        options: {
          km: ['មេទីលអាសេតាត', 'អេទីលអាសេតាត (CH₃COOC₂H₅)', 'ប្រូពីលហ្វ័រម៉ាត', 'អេទីលប្រូប៉ាណូអាត'],
          en: ['Methyl acetate', 'Ethyl acetate (CH₃COOC₂H₅)', 'Propyl formate', 'Ethyl propanoate'],
        },
        correctIndex: 1,
        explanation: {
          km: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (អេទីលអាសេតាត / អេទីលអេតាណូអាត) + H₂O។',
          en: 'Ethanol contributes the ethyl group and acetic acid the acetate group: ethyl acetate.',
        },
      },
      {
        id: 'ch-est-2',
        prompt: {
          km: 'ប្រតិកម្មអេស្ទែកម្មរវាងអាស៊ីត និងអាល់កុលមានលក្ខណៈដូចម្តេច?',
          en: 'What are the key characteristics of direct esterification?',
        },
        options: {
          km: ['លឿន និងចប់សព្វគ្រប់', 'យឺត ទៅមក (មិនចប់) និងមិនប្រែប្រួលកំដៅខ្លាំង', 'បញ្ចេញឧស្ម័ន H₂', 'កើតតែក្នុងបាសខ្លាំង'],
          en: ['Fast and complete', 'Slow, reversible, and nearly athermal', 'Releases H₂ gas', 'Occurs only in strong base'],
        },
        correctIndex: 1,
        explanation: {
          km: 'អេស្ទែកម្មជាប្រតិកម្មយឺត និងទៅមក (Reversible) ដែលកាតាលីសដោយអាស៊ីត H₂SO₄ ខាប់។',
          en: 'Direct esterification is slow and reversible, catalyzed by concentrated H₂SO₄.',
        },
      },
      {
        id: 'ch-est-3',
        prompt: {
          km: 'ប្រតិកម្មសាប៊ូកម្ម (Saponification) នៃខ្លាញ់ ឬប្រេងជាមួយ NaOH បង្កើតផលិតផលអ្វីខ្លះ?',
          en: 'Saponification of a fat/oil (triglyceride) with NaOH produces which products?',
        },
        options: {
          km: [
            'អំបិលសូដ្យូមនៃអាស៊ីតខ្លាញ់ (សាប៊ូ) និងគ្លីសេរ៉ុល',
            'អាល់កុល និងទឹក',
            'អាស៊ីតសរីរាង្គ និងឧស្ម័ន CO₂',
            'អេស្ទែ និងអ៊ីដ្រូសែន',
          ],
          en: [
            'Sodium salts of fatty acids (soap) and glycerol',
            'Ethanol and water',
            'Carboxylic acid and CO₂',
            'Ester and hydrogen',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ទ្រីគ្លីសេរីត + 3NaOH → 3R-COONa (សាប៊ូ) + C₃H₅(OH)₃ (គ្លីសេរ៉ុល)។',
          en: 'Triglyceride + 3NaOH → 3 fatty acid salts (soap) + glycerol.',
        },
      },
      {
        id: 'ch-est-4',
        prompt: {
          km: 'អេទីលអាសេតាត 8.8 g (M = 88 g/mol) ប្រតិកម្មពេញលេញជាមួយ NaOH។ គណនាម៉ាសសូដ្យូមអាសេតាត (M = 82)។',
          en: '8.8 g of ethyl acetate (M = 88) reacts completely with NaOH. Find mass of CH₃COONa (M = 82).',
        },
        options: {
          km: ['4.1 g', '8.2 g', '16.4 g', '8.8 g'],
          en: ['4.1 g', '8.2 g', '16.4 g', '8.8 g'],
        },
        correctIndex: 1,
        explanation: {
          km: 'n(អេស្ទែ) = 8.8 / 88 = 0.1 mol ⇒ n(CH₃COONa) = 0.1 mol ⇒ m = 0.1 × 82 = 8.2 g។',
          en: 'n(ester) = 8.8/88 = 0.1 mol → 0.1 mol CH₃COONa → 0.1 × 82 = 8.2 g.',
        },
      },
    ],
  },

  // ============================================================================
  // 5. BIOLOGY — SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'bio-nervous-endocrine',
    subjectId: 'biology',
    tracks: ['science'],
    title: {
      km: 'តម្រូវប្រសាទ និងប្រព័ន្ធអង់ដូគ្រីន',
      en: 'Nervous Coordination & Endocrine System',
    },
    subtitle: {
      km: 'ណឺរ៉ូន ស៊ីណាប់ អ័រម៉ូនអាំងស៊ុយលីន និងគ្លុយកាកុង',
      en: 'Neurons, synapses, insulin & glucagon regulation',
    },
    relatedPaperId: 'bio-science-2024',
    questions: [
      {
        id: 'bio-ne-1',
        prompt: {
          km: 'នៅពេលសក្តានុពលសកម្មភាពមកដល់ចុងអាក់សូន តើអ៊ីយ៉ុងណាហូរចូលដើម្បីជំរុញការបញ្ចេញសារធាតុបញ្ជូនសារប្រសាទ?',
          en: 'When an action potential reaches an axon terminal, which ion enters to trigger neurotransmitter release?',
        },
        options: {
          km: ['K⁺', 'Ca²⁺', 'Cl⁻', 'Fe²⁺'],
          en: ['K⁺', 'Ca²⁺', 'Cl⁻', 'Fe²⁺'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ការហូរចូលនៃ Ca²⁺ ជំរុញថង់ស៊ីណាប់ឱ្យបញ្ចេញសារធាតុបញ្ជូនសារប្រសាទចូលប្រហោងស៊ីណាប់។',
          en: 'Voltage-gated Ca²⁺ influx triggers synaptic vesicles to fuse and release neurotransmitters.',
        },
      },
      {
        id: 'bio-ne-2',
        prompt: {
          km: 'អ័រម៉ូនអាំងស៊ុយលីន (Insulin) ដែលបញ្ចេញដោយកោសិកា β នៃលំពែងមានតួនាទីអ្វី?',
          en: 'What is the role of insulin secreted by pancreatic beta cells?',
        },
        options: {
          km: [
            'បង្កើនជាតិស្ករក្នុងឈាម',
            'បញ្ចុះជាតិស្ករក្នុងឈាមដោយជំរុញការស្តុកគ្លីកូសែន',
            'បំបែកប្រូតេអ៊ីនក្នុងក្រពះ',
            'បង្កើនសម្ពាធឈាមភ្លាមៗ',
          ],
          en: [
            'Raises blood glucose',
            'Lowers blood glucose by promoting cellular uptake and glycogen storage',
            'Digests stomach proteins',
            'Directly elevates blood pressure',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'អាំងស៊ុយលីនបញ្ចុះកម្រិតគ្លុយកូសក្នុងឈាម ផ្ទុយពីគ្លុយកាកុងដែលបង្កើនគ្លុយកូសក្នុងឈាម។',
          en: 'Insulin lowers blood glucose by promoting glycogen synthesis, opposing glucagon.',
        },
      },
      {
        id: 'bio-ne-3',
        prompt: {
          km: 'រចនាសម្ព័ន្ធណាមួយនៃណឺរ៉ូនដែលទទួលព័ត៌មានចូលពីកោសិកាផ្សេង?',
          en: 'Which part of a neuron primarily receives incoming signals from other neurons?',
        },
        options: {
          km: ['ដង់ឌ្រីត (Dendrites)', 'ស្រោមមីយ៉េលីន', 'ថ្នាំងរ៉ង់វីយ៉េ', 'ចុងអាក់សូន'],
          en: ['Dendrites', 'Myelin sheath', 'Nodes of Ranvier', 'Axon terminal'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ដង់ឌ្រីតទទួលសារចូលទៅតួកោសិកា ចំណែកអាក់សូនបញ្ជូនសារចេញទៅកោសិកាបន្ទាប់។',
          en: 'Dendrites receive incoming signals toward the cell body, while the axon conducts impulses away.',
        },
      },
      {
        id: 'bio-ne-4',
        prompt: {
          km: 'ក្រពេញណាមួយត្រូវបានគេចាត់ទុកថាជា "មេក្រពេញ" គ្រប់គ្រងក្រពេញអង់ដូគ្រីនដទៃទៀត?',
          en: 'Which gland is known as the "master gland" regulating other endocrine glands?',
        },
        options: {
          km: ['ក្រពេញទីរ៉ូអ៊ីត', 'ក្រពេញអ៊ីប៉ូភីស (Pituitary)', 'ក្រពេញលើតម្រងនោម', 'ក្រពេញទឹកមាត់'],
          en: ['Thyroid gland', 'Pituitary gland (Hypophysis)', 'Adrenal gland', 'Salivary gland'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ក្រពេញអ៊ីប៉ូភីស (Pituitary) ក្រោមការត្រួតពិនិត្យរបស់អ៊ីប៉ូតាឡាមុសបញ្ចេញអ័រម៉ូនភ្ញោចក្រពេញផ្សេងៗ។',
          en: 'The pituitary gland (regulated by the hypothalamus) secretes tropic hormones controlling other glands.',
        },
      },
    ],
  },
  {
    id: 'bio-proteins-enzymes',
    subjectId: 'biology',
    tracks: ['science'],
    title: {
      km: 'អាស៊ីតអាមីនេ ប្រូតេអ៊ីន និងអង់ស៊ីម',
      en: 'Amino Acids, Proteins & Enzymes',
    },
    subtitle: {
      km: 'សម្ព័ន្ធប៉ិបទីត ទម្រង់ប្រូតេអ៊ីន និងសកម្មភាពអង់ស៊ីម',
      en: 'Peptide bonds, protein structure & enzyme catalysis',
    },
    relatedPaperId: 'bio-science-2024',
    questions: [
      {
        id: 'bio-pe-1',
        prompt: {
          km: 'តើសម្ព័ន្ធគីមីប្រភេទណាដែលភ្ជាប់អាស៊ីតអាមីនេពីរជាប់គ្នាក្នុងម៉ូលេគុលប្រូតេអ៊ីន?',
          en: 'What type of bond links two amino acids together in a polypeptide chain?',
        },
        options: {
          km: ['សម្ព័ន្ធគ្លីកូស៊ីត', 'សម្ព័ន្ធប៉ិបទីត (Peptide bond)', 'សម្ព័ន្ធអេស្ទែ', 'សម្ព័ន្ធផូស្វ័រ'],
          en: ['Glycosidic bond', 'Peptide bond', 'Ester bond', 'Phosphodiester bond'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ក្រុមកាបុកស៊ីល (-COOH) និងក្រុមអាមីន (-NH₂) ភ្ជាប់គ្នាបង្កើតសម្ព័ន្ធប៉ិបទីត (-CO-NH-) និងបញ្ចេញទឹក 1 ម៉ូលេគុល។',
          en: 'Condensation between -COOH and -NH₂ forms a covalent peptide bond (-CO-NH-) plus H₂O.',
        },
      },
      {
        id: 'bio-pe-2',
        prompt: {
          km: 'អង់ស៊ីមមានធម្មជាតិគីមីជាអ្វី និងធ្វើការជាមួយស៊ុបស្ត្រាតតាមគំរូណា?',
          en: 'What is the chemical nature of most enzymes and how do they bind substrates?',
        },
        options: {
          km: [
            'ជាលីពីត គ្មានភាពជាក់លាក់',
            'ជាប្រូតេអ៊ីន ដែលមានមជ្ឈមណ្ឌលសកម្មជាក់លាក់សម្រាប់ស៊ុបស្ត្រាត',
            'ជាគ្លុយស៊ីត ស្លាប់ពេលប្រតិកម្ម',
            'ជាអាស៊ីតនុយក្លេអ៊ិច',
          ],
          en: [
            'Lipids with no specificity',
            'Proteins with a specific active site complementary to the substrate',
            'Carbohydrates consumed during reaction',
            'Inorganic salts',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'អង់ស៊ីមជាប្រូតេអ៊ីនកាតាលីករដែលមានមជ្ឈមណ្ឌលសកម្មត្រូវគ្នាជាក់លាក់ជាមួយស៊ុបស្ត្រាត។',
          en: 'Enzymes are protein catalysts whose active site specifically recognizes their substrate.',
        },
      },
      {
        id: 'bio-pe-3',
        prompt: {
          km: 'តើមានអ្វីកើតឡើងចំពោះអង់ស៊ីមនៅពេលសីតុណ្ហភាពឡើងខ្ពស់ខ្លាំងលើសកម្រិតអតិបរមា (ឧ. 80°C)?',
          en: 'What happens to an enzyme when temperature rises far above its optimum (e.g., 80°C)?',
        },
        options: {
          km: [
            'ល្បឿនកើនរហូតគ្មានដែនកំណត់',
            'អង់ស៊ីមបាត់បង់ទម្រង់លំហ (Denaturation) និងបាត់បង់សកម្មភាព',
            'អង់ស៊ីមក្លាយជាគ្លុយកូស',
            'មជ្ឈមណ្ឌលសកម្មកាន់តែរឹងមាំ',
          ],
          en: [
            'Activity increases infinitely',
            'Enzyme denatures, altering its active site and stopping catalysis',
            'Enzyme converts into glucose',
            'Active site becomes stronger',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'កំដៅខ្ពស់បំបែកសម្ព័ន្ធទន់ខ្សោយក្នុងប្រូតេអ៊ីន ធ្វើឱ្យអង់ស៊ីមខូចទម្រង់ (Denaturation)។',
          en: 'Excess heat disrupts non-covalent bonds, denaturing the 3D active site structure.',
        },
      },
      {
        id: 'bio-pe-4',
        prompt: {
          km: 'តើសង្វាក់ប៉ូលីប៉ិបទីតមួយមានអាស៊ីតអាមីនេ 50 ម៉ូលេគុល មានសម្ព័ន្ធប៉ិបទីតចំនួនប៉ុន្មាន?',
          en: 'How many peptide bonds exist in a single polypeptide chain of 50 amino acids?',
        },
        options: {
          km: ['50', '49', '51', '25'],
          en: ['50', '49', '51', '25'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ចំនួនសម្ព័ន្ធប៉ិបទីត = n − 1 = 50 − 1 = 49 សម្ព័ន្ធ។',
          en: 'A linear chain of n amino acids contains n − 1 = 49 peptide bonds.',
        },
      },
    ],
  },
  {
    id: 'bio-dna-gene',
    subjectId: 'biology',
    tracks: ['science'],
    title: {
      km: 'ADN ជាព័ត៌មានសេនេទិច និងការសំដែងចេញនៃសែន',
      en: 'DNA as Genetic Information & Gene Expression',
    },
    subtitle: {
      km: 'ច្បាប់ Chargaff, ស្វ័យដំឡើងទ្វេ ADN, ចម្លងក្រម ARNm និងបកប្រែក្រម',
      en: 'Chargaff’s rule, DNA replication, transcription & translation',
    },
    relatedPaperId: 'bio-science-2024',
    questions: [
      {
        id: 'bio-dg-1',
        prompt: {
          km: 'ម៉ូលេគុល ADN មួយមាននុយក្លេអូទីតប្រភេទ A = 20%។ គណនាភាគរយនៃ G តាមច្បាប់ Chargaff។',
          en: 'A DNA molecule has 20% Adenine (A). Calculate the percentage of Guanine (G).',
        },
        options: {
          km: ['20%', '30%', '40%', '80%'],
          en: ['20%', '30%', '40%', '80%'],
        },
        correctIndex: 1,
        explanation: {
          km: 'A = T = 20% ⇒ A + T = 40% ⇒ G + C = 60% ⇒ G = C = 30%។',
          en: 'By Chargaff’s rule, A = T = 20% (40% total), so G = C = (100% − 40%)/2 = 30%.',
        },
      },
      {
        id: 'bio-dg-2',
        prompt: {
          km: 'ម៉ូលេគុល ARNm មួយមាន 300 នុយក្លេអូទីត (រាប់ទាំងកូដុងចាប់ផ្តើម មិនគិតកូដុងបញ្ឈប់)។ រកចំនួនអាស៊ីតអាមីនេ។',
          en: 'An mRNA coding sequence has 300 nucleotides. How many amino acids does it specify?',
        },
        options: {
          km: ['100', '150', '300', '900'],
          en: ['100', '150', '300', '900'],
        },
        correctIndex: 0,
        explanation: {
          km: '១ កូដុង = ៣ នុយក្លេអូទីត = ១ អាស៊ីតអាមីនេ ⇒ 300 / 3 = 100 អាស៊ីតអាមីនេ។',
          en: 'Each codon consists of 3 nucleotides encoding 1 amino acid: 300 / 3 = 100 amino acids.',
        },
      },
      {
        id: 'bio-dg-3',
        prompt: {
          km: 'ប្រសិនបើច្រវាក់ ADN គំរូមានលំដាប់ 3′-TAC-GGA-5′ តើលំដាប់ ARNm ដែលចម្លងបានគឺអ្វី?',
          en: 'If the DNA template strand reads 3′-TAC-GGA-5′, what is the transcribed mRNA sequence?',
        },
        options: {
          km: ['5′-ATG-CCT-3′', '5′-AUG-CCU-3′', '5′-UAC-GGA-3′', '5′-TUG-CCU-3′'],
          en: ['5′-ATG-CCT-3′', '5′-AUG-CCU-3′', '5′-UAC-GGA-3′', '5′-TUG-CCU-3′'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ក្នុង ARNm បាស A ភ្ជាប់ជាមួយ U, T ភ្ជាប់ A, G ភ្ជាប់ C ⇒ 5′-AUG-CCU-3′។',
          en: 'In transcription, A pairs with U, T with A, and G with C, yielding 5′-AUG-CCU-3′.',
        },
      },
      {
        id: 'bio-dg-4',
        prompt: {
          km: 'តើអង់ស៊ីមណាដែលសំយោគច្រវាក់ ADN ថ្មីតាមទិស 5′ → 3′ ក្នុងដំណើរស្វ័យដំឡើងទ្វេ?',
          en: 'Which enzyme synthesizes new DNA strands in the 5′ → 3′ direction during replication?',
        },
        options: {
          km: ['ADN ប៉ូលីមេរ៉ាស (DNA Polymerase)', 'ARN ប៉ូលីមេរ៉ាស', 'អាមីឡាស', 'លីប៉ាស'],
          en: ['DNA Polymerase', 'RNA Polymerase', 'Amylase', 'Lipase'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ADN ប៉ូលីមេរ៉ាសបន្ថែមនុយក្លេអូទីតថ្មីតាមទិស 5′ → 3′ ចំណែក Helicase ជាអ្នកបើកច្រវាក់។',
          en: 'DNA polymerase catalyzes nucleotide addition 5′ → 3′, while helicase unwinds the helix.',
        },
      },
    ],
  },
  {
    id: 'bio-evolution-ecology',
    subjectId: 'biology',
    tracks: ['science'],
    title: {
      km: 'ទ្រឹស្តីវិវត្តរបស់លោកដាវិន និងអេកូឡូស៊ី',
      en: 'Darwin’s Theory of Evolution & Ecology',
    },
    subtitle: {
      km: 'ជម្រើសដោយធម្មជាតិ ការបន្ស៊ាំ ខ្សែសង្វាក់អាហារ និងប្រព័ន្ធអេកូឡូស៊ី',
      en: 'Natural selection, adaptation, food chains & ecosystems',
    },
    relatedPaperId: 'bio-science-2024',
    questions: [
      {
        id: 'bio-ee-1',
        prompt: {
          km: 'យោងតាមទ្រឹស្តីលោក Charles Darwin កត្តាចម្បងដែលជំរុញឱ្យមានការវិវត្តនៃប្រភេទគឺអ្វី?',
          en: 'According to Charles Darwin, what is the primary driving mechanism of evolution?',
        },
        options: {
          km: [
            'ជម្រើសដោយធម្មជាតិ (Natural Selection)',
            'ការប្រែប្រួលរាងកាយតាមបំណង',
            'អវត្តមាននៃបម្រែបម្រួលសេនេទិច',
            'ការចម្លងរូបរាងពីមនុស្ស',
          ],
          en: [
            'Natural selection acting on heritable variation',
            'Intentional organ changes during lifetime',
            'Zero genetic variation',
            'Artificial cloning',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ឯកត្តាដែលមានលក្ខណៈបន្ស៊ាំល្អប្រសើរអាចរស់រាន និងបន្តពូជបញ្ជូនលក្ខណៈតំណពូជទៅកូនចៅបានច្រើនជាង។',
          en: 'Individuals with advantageous heritable traits survive and reproduce more successfully.',
        },
      },
      {
        id: 'bio-ee-2',
        prompt: {
          km: 'ក្នុងខ្សែសង្វាក់អាហារ (Food Chain) តើភាវៈណាជា "អ្នកផលិត" (Producers)?',
          en: 'In an ecosystem food chain, which organisms serve as primary producers?',
        },
        options: {
          km: ['រុក្ខជាតិបៃតង (ធ្វើរស្មីសំយោគ)', 'សត្វស៊ីសាច់', 'ផ្សិត និងបាក់តេរីបំបែក', 'សត្វស៊ីរុក្ខជាតិ'],
          en: ['Green plants / photosynthetic autotrophs', 'Carnivores', 'Decomposer fungi', 'Herbivores'],
        },
        correctIndex: 0,
        explanation: {
          km: 'រុក្ខជាតិបៃតងប្រើថាមពលពន្លឺព្រះអាទិត្យសំយោគសារធាតុសរីរាង្គពី CO₂ និង H₂O។',
          en: 'Autotrophs (green plants/algae) capture solar energy to produce organic nutrients via photosynthesis.',
        },
      },
      {
        id: 'bio-ee-3',
        prompt: {
          km: 'ប្រហែលប៉ុន្មានភាគរយនៃថាមពលត្រូវបានបញ្ជូនពីថ្នាក់អាហារមួយទៅថ្នាក់បន្ទាប់ក្នុងពីរ៉ាមីតថាមពល?',
          en: 'Approximately what percentage of energy transfers from one trophic level to the next?',
        },
        options: {
          km: ['១០%', '៥០%', '៩០%', '១០០%'],
          en: ['10%', '50%', '90%', '100%'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ជាមធ្យមមានតែ ~10% ប៉ុណ្ណោះដែលផ្ទេរទៅថ្នាក់បន្ទាប់ ឯ ~90% បាត់បង់ជាកម្តៅក្នុងដំណកដង្ហើម។',
          en: 'Roughly 10% transfers up each trophic level; ~90% is lost as metabolic heat.',
        },
      },
      {
        id: 'bio-ee-4',
        prompt: {
          km: 'ទំនាក់ទំនងរវាងសត្វឃ្មុំ និងផ្កា (ឃ្មុំបានទឹកដម ផ្កាបានលម្អង) ហៅថាទំនាក់ទំនងអ្វី?',
          en: 'The relationship between bees (obtaining nectar) and flowers (getting pollinated) is called:',
        },
        options: {
          km: ['បរាសិតកម្ម (Parasitism)', 'សហជីវិតប្រយោជន៍ទៅវិញទៅមក (Mutualism)', 'ការប្រកួតប្រជែង', 'ការស៊ីគ្នា'],
          en: ['Parasitism', 'Mutualism', 'Competition', 'Predation'],
        },
        correctIndex: 1,
        explanation: {
          km: 'Mutualism (+/+) គឺភាគីទាំងពីរទទួលបានផលប្រយោជន៍ពីគ្នាទៅវិញទៅមក។',
          en: 'Mutualism (+/+) benefits both interacting species.',
        },
      },
    ],
  },
];
