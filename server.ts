import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

interface AssistantChatRequestBody {
  message?: string;
  language?: 'en' | 'km';
  track?: 'science' | 'social';
  contextTitle?: string;
  contextContent?: string;
  history?: ChatHistoryItem[];
}

const VERIFIED_SCHOLARSHIP_KNOWLEDGE = `
VERIFIED CAMBODIAN SCHOLARSHIP DATASET (Use these exact facts):
1. អាហារូបករណ៍រដ្ឋ (ក្រសួងអប់រំ MoEYS) [Domestic]:
   - Public universities (RUPP, ITC, NUM, RULE, UHS...) — all majors.
   - 100% tuition waiver for 4–5 years.
   - Deadline: September – October (after BacII results).
   - Selection via BacII grade, entrance exam (ITC/UHS), or priority quotas for disadvantaged/remote students.

2. អាហារូបករណ៍ AMT (សម្តេចតេជោ និងសម្តេចកិត្តិព្រឹទ្ធបណ្ឌិត) [Domestic]:
   - 80%–100% tuition waiver. Deadline: September – October (multiple duplicate applications prohibited).
   - For recent BacII passers facing financial hardship who have not yet enrolled at a partner university.
   - Entrance Exam Required: ITC (100%), IFL & IISPP-RUPP (80%), AUPP Tech majors (100% — EPT or IELTS 6.0 / TOEFL 79 / Duolingo 110), NUM Digital majors, and UHS/NIE.
   - No Entrance Exam Required: Provincial universities and partner private universities (AUB, Norton...) evaluated via BacII grade, interview, and family financial status.

3. អាហារូបករណ៍ ស.ស.យ.ក (UYFC) [Domestic]:
   - Partner public & private universities (Paragon, AUPP, NUM, PUC, Norton...).
   - 50%–100% tuition waiver. Deadline: September – November.
   - Evaluated via BacII grade, volunteer/community work, and interview.

4. អាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោ (MPTC Techo Digital Talent) [Domestic]:
   - Partner tech institutions (CADT, AUPP, ITC, RUPP, Paragon, NUM) for ICT, AI, Cybersecurity, Telecom.
   - 100% tuition + monthly stipend + laptop (for qualifying institutions/majors such as CADT).
   - Deadline: September – November. Exam: Math, Logic, English, and Interview.

5. អាហារូបករណ៍សិស្សពូកែប្រចាំសាកលវិទ្យាល័យ (Paragon, AUPP, CamTech, AUB) [Domestic]:
   - 25%–100% tuition waiver. Deadline: August – October (and January – February for Semester 2).
   - Based on university scholarship exam, Grade A/B BacII, or IELTS score.

6. អាហារូបករណ៍រដ្ឋាភិបាលជប៉ុន MEXT (Japanese Embassy) [International]:
   - General Bachelor's (5 years) or Medicine/Dentistry/Pharmacy (7 years) in Japan.
   - 100% tuition + monthly stipend + round-trip airfare + 1-year Japanese language prep.
   - Deadline: May – June annually. Requires ≥70% BacII & annual GPA (~Grade C+).
   - Exam subjects: Japanese (mandatory), English, Math (A for Social / B for Science), and Physics/Chemistry (or Chemistry/Biology) for Science.
`.trim();

function createGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function buildLocalSafetyNetReply(params: {
  message: string;
  language: 'en' | 'km';
  track: 'science' | 'social';
  contextTitle?: string;
}): string {
  const q = params.message.toLowerCase();
  const isKm = params.language === 'km';
  const isSocial = params.track === 'social';

  const isMathChip =
    q.includes('ដោះស្រាយលំហាត់គណិត') ||
    q.includes('លំហាត់គណិត') ||
    q.includes('គណិត') ||
    q.includes('integrate') ||
    q.includes('integral') ||
    q.includes('math problem') ||
    q.includes('អាំងតេក្រាល') ||
    q.includes('លីមីត') ||
    q.includes('ដេរីវេ');

  const isScholarshipCompareChip =
    q.includes('amt') ||
    q.includes('តេជោ') ||
    q.includes('mptc') ||
    q.includes('cadt') ||
    q.includes('ប្រៀបធៀបអាហារូបករណ៍') ||
    q.includes('scholarship');

  const isScheduleChip =
    q.includes('តារាងពេលវេលា') ||
    q.includes('កាលវិភាគ') ||
    q.includes('ប្រចាំសប្តាហ៍') ||
    q.includes('schedule') ||
    q.includes('study plan') ||
    q.includes('រៀបចំតារាង');

  if (isScholarshipCompareChip) {
    if (isKm) {
      return [
        'ខាងក្រោមនេះជាការប្រៀបធៀបច្បាស់លាស់រវាង **អាហារូបករណ៍ AMT** និង **អាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោ (MPTC)**៖',
        '',
        '• **អាហារូបករណ៍ AMT (សម្តេចតេជោ និងសម្តេចកិត្តិព្រឹទ្ធបណ្ឌិត)៖** រួចថ្លៃសិក្សា ៨០%–១០០% (កញ្ញា – តុលា; ហាមដាក់ពាក្យស្ទួនច្រើនកន្លែង) សម្រាប់សិស្សជាប់បាក់ឌុបថ្មី និងខ្វះខាតជីវភាព។',
        '• **ផ្នែកតម្រូវប្រឡងរបស់ AMT៖** ITC (១០០%), IFL & IISPP-RUPP (៨០%), AUPP ជំនាញបច្ចេកវិទ្យា (១០០% — តេស្ត EPT ឬ IELTS 6.0 / TOEFL 79 / Duolingo 110), NUM ឌីជីថល និង UHS/NIE។',
        '• **ផ្នែកមិនតម្រូវប្រឡងរបស់ AMT៖** សាកលវិទ្យាល័យតាមខេត្ត និងឯកជនដៃគូ (AUB, Norton...) វាយតម្លៃលើនិទ្ទេសបាក់ឌុប ការសម្ភាសន៍ និងជីវភាពគ្រួសារ។',
        '• **អាហារូបករណ៍ទេពកោសល្យឌីជីថលតេជោ (MPTC)៖** ផ្តល់ថ្លៃសិក្សា ១០០% + ប្រាក់ឧបត្ថម្ភប្រចាំខែ + កុំព្យូទ័រយួរដៃ (ដូចជា CADT) នៅ CADT, AUPP, ITC, RUPP, Paragon និង NUM លើជំនាញ ICT, AI, Cybersecurity និងទូរគមនាគមន៍។',
        '• **ការជ្រើសរើស MPTC (កញ្ញា – វិច្ឆិកា)៖** តម្រូវឱ្យប្រឡងគណិតវិទ្យា តក្កវិទ្យា ភាសាអង់គ្លេស និងសម្ភាសន៍ — ត្រូវហាត់លំហាត់គណិតវិទ្យា និងតក្កវិទ្យាឱ្យបានស្ទាត់។',
      ].join('\n');
    }
    return [
      'Here is a concise side-by-side comparison of **AMT** and **MPTC Techo Digital Talent Scholarships**:',
      '',
      '• **AMT Scholarship (80%–100% Tuition, Sep–Oct):** Strictly prohibits duplicate applications; designed for recent BacII passers facing financial hardship.',
      '• **AMT Exam vs. Non-Exam Tracks:** Exam required for ITC (100%), IFL & IISPP-RUPP (80%), AUPP Tech (100% via EPT or IELTS 6.0 / TOEFL 79 / Duolingo 110), NUM Digital, and UHS/NIE; non-exam review (BacII grade + interview + financial need) for provincial & partner private universities (AUB, Norton).',
      '• **MPTC Techo Digital Talent (Sep–Nov):** 100% tuition + monthly stipend + laptop (at partner institutions like CADT) across CADT, AUPP, ITC, RUPP, Paragon, and NUM for ICT, AI, Cybersecurity, and Telecom.',
      '• **MPTC Selection Format:** Competitive entrance exam covering Mathematics, Logic, English, plus an interview.',
      '• **Preparation Tip:** Target high BacII Math/English grades for both, and drill timed Logic & Calculus problems for MPTC.',
    ].join('\n');
  }

  if (isMathChip) {
    if (isKm) {
      return [
        'ក្បួនដោះស្រាយលំហាត់គណិតវិទ្យាបាក់ឌុបឱ្យបានពិន្ទុពេញតាមស្តង់ដារ MoEYS (ឧទាហរណ៍៖ I = ∫ 6x · e^(x²) dx)៖',
        '',
        '• **ជំហានទី ១ — កំណត់ប្រភេទលំហាត់ និងរូបមន្តគោល៖** សរសេររូបមន្តស្តង់ដារជាមុន ∫ u′ · e^u dx = e^u + C (កុំរំលងរូបមន្ត)។',
        '• **ជំហានទី ២ — ប្តូរអថេរឱ្យច្បាស់លាស់៖** តាង u = x² ⇒ du = 2x dx ⇒ 6x dx = 3 du។',
        '• **ជំហានទី ៣ — គណនាអាំងតេក្រាលកណ្តាល៖** I = ∫ 3 · e^u du = 3 · ∫ e^u du = 3e^u + C។',
        '• **ជំហានទី ៤ — ជំនួសអថេរដើមត្រឡប់មកវិញ៖** I = 3e^(x²) + C (ដែល C ∈ ℝ)។',
        '• **កំហុសដែលសិស្សងាយភ្លាត់បំផុត៖** ភ្លេចចែកមេគុណ 6 ÷ 2 = 3 ឬភ្លេចសរសេរថេរ "+ C" ដែលបណ្តាលឱ្យបាត់បង់ពិន្ទុសំខាន់ក្នុងកំណែបាក់ឌុប។',
      ].join('\n');
    }
    return [
      'How to solve Grade 12 BacII Mathematics problems for full MoEYS credit (example: I = ∫ 6x · e^(x²) dx):',
      '',
      '• **Step 1 — State the Official Formula:** Begin by writing ∫ u′ · e^u dx = e^u + C explicitly.',
      '• **Step 2 — Show u-Substitution:** Set u = x² → du = 2x dx, so 6x dx = 3 du.',
      '• **Step 3 — Evaluate Intermediate Integral:** I = 3 ∫ e^u du = 3e^u + C.',
      '• **Step 4 — Substitute Back:** Replace u with x² to conclude I = 3e^(x²) + C (C ∈ ℝ).',
      '• **#1 Common Mistake:** Dividing incorrectly (writing 6e^(x²) instead of 3e^(x²)) or omitting "+ C", both of which lose immediate points.',
    ].join('\n');
  }

  if (isScheduleChip) {
    if (isKm) {
      return isSocial
        ? [
            'នេះជាតារាងពេលវេលារៀនប្រចាំសប្តាហ៍សម្រាប់ **ថ្នាក់វិទ្យាសាស្ត្រសង្គម (៤៧៥ ពិន្ទុ)**៖',
            '',
            '• **ថ្ងៃចន្ទ និងថ្ងៃព្រហស្បតិ៍ (១.៥ ម៉ោង) — អក្សរសាស្ត្រខ្មែរ (១២៥ ពិន្ទុ)៖** ហាត់សរសេរតែងសេចក្តី ៣ ផ្នែក (មតិស្រប ផ្ទុយ សំយោគ) និងអក្ខរាវិរុទ្ធ។',
            '• **ថ្ងៃអង្គារ និងថ្ងៃសុក្រ (១ ម៉ោង) — ប្រវត្តិវិទ្យា និងភូមិវិទ្យា (៧៥+៧៥ ពិន្ទុ)៖** ទន្ទេញកាលបរិច្ឆេទសំខាន់ៗ និងគណនារូបមន្តប្រជាសាស្ត្រ (% និងដង់ស៊ីតេ)។',
            '• **ថ្ងៃពុធ (១ ម៉ោង) — គណិតវិទ្យា (៧៥ ពិន្ទុ) និងសីលធម៌ (៧៥ ពិន្ទុ)៖** ហាត់ដេរីវេ ស្វ៊ីតនព្វន្ត និងរចនាសម្ព័ន្ធរដ្ឋធម្មនុញ្ញ ១៩៩៣។',
            '• **ថ្ងៃសៅរ៍ (៤៥ នាទី) — ផែនដីវិទ្យា និងភាសាអង់គ្លេស (៥០+៥០ ពិន្ទុ)៖** ធ្វើលំហាត់វេយ្យាករណ៍ និងសំណួរខ្លីៗក្នុងវិញ្ញាសា ២០២១–២០២៥។',
            '• **ថ្ងៃអាទិត្យ (៩០ នាទី) — សាកល្បងវិញ្ញាសាពេញម៉ោង៖** បើកឯកសារ PDF ក្នុងផ្នែក "ត្រៀមប្រឡង" ហើយផ្ទៀងផ្ទាត់ជាមួយកំណែលោកគ្រូ-អ្នកគ្រូ។',
          ].join('\n')
        : [
            'នេះជាតារាងពេលវេលារៀនប្រចាំសប្តាហ៍សម្រាប់ **ថ្នាក់វិទ្យាសាស្ត្រ (៤៧៥ ពិន្ទុ)**៖',
            '',
            '• **ថ្ងៃចន្ទ និងថ្ងៃព្រហស្បតិ៍ (១.៥ ម៉ោង) — គណិតវិទ្យា (១២៥ ពិន្ទុ)៖** ផ្តោតលើលីមីត អាំងតេក្រាល ចំនួនកុំផ្លិច និងសមីការឌីផេរ៉ង់ស្យែល (ត្រូវសរសេរ + C ជានិច្ច)។',
            '• **ថ្ងៃអង្គារ (១ ម៉ោង) — រូបវិទ្យា (៧៥ ពិន្ទុ)៖** ហាត់ទែម៉ូឌីណាមិច លំយោល SHM និងសៀគ្វី RLC ដោយប្រើខ្នាត SI ត្រឹមត្រូវ។',
            '• **ថ្ងៃពុធ (១ ម៉ោង) — គីមីវិទ្យា និងជីវវិទ្យា (៧៥+៧៥ ពិន្ទុ)៖** ថ្លឹងសមីការ pH ស្តូស្យូម៉ែត្រី និងសេនេទិច ADN (ច្បាប់ Chargaff)។',
            '• **ថ្ងៃសុក្រ និងថ្ងៃសៅរ៍ (៤៥ នាទី) — អក្សរសាស្ត្រខ្មែរ ប្រវត្តិ និងភាសាបរទេស៖** រក្សាពិន្ទុបន្ថែមលើតែងសេចក្តី និងវេយ្យាករណ៍អង់គ្លេស/បារាំង។',
            '• **ថ្ងៃអាទិត្យ (៩០ នាទី) — សាកល្បងវិញ្ញាសាបាក់ឌុប PDF៖** ធ្វើវិញ្ញាសាឆ្នាំ ២០២១–២០២៥ ក្នុងផ្នែក "ត្រៀមប្រឡង" រួចផ្ទៀងជាមួយកំណែផ្លូវការ។',
          ].join('\n');
    }
    return isSocial
      ? [
          'Recommended weekly study plan for **Social Science Track (475 pts)**:',
          '',
          '• **Mon & Thu (90 min) — Khmer Literature (125 pts):** Practice 3-part Thesis/Antithesis/Synthesis essays and accurate orthography.',
          '• **Tue & Fri (60 min) — History & Geography (75 + 75 pts):** Review key historical dates (1953, 1991, 1999) and demographic formulas.',
          '• **Wed (60 min) — Mathematics (75 pts) & Civics (75 pts):** Drill derivatives, arithmetic sequences, and 1993 Constitution concepts.',
          '• **Sat (45 min) — Earth Science & English (50 + 50 pts):** Review renewable energy problems and English grammar.',
          '• **Sun (90 min) — Timed PDF Simulation:** Solve combined MoEYS papers in Prepare and grade strictly against the answer key.',
        ].join('\n')
      : [
          'Recommended weekly study plan for **Science Track (475 pts)**:',
          '',
          '• **Mon & Thu (90 min) — Mathematics (125 pts):** Master Limits, Integrals (+ C), Complex Numbers, and Differential Equations.',
          '• **Tue (60 min) — Physics (75 pts):** Drill Thermodynamics signs, SHM velocity, and RLC circuits with exact SI units.',
          '• **Wed (60 min) — Chemistry & Biology (75 + 75 pts):** Balance stoichiometry equations, pH formulas, and Chargaff DNA problems.',
          '• **Fri & Sat (45 min) — Khmer, History & Foreign Language:** Secure high marks on essay structure and grammar.',
          '• **Sun (90 min) — Timed PDF Simulation:** Open the 2021–2025 MoEYS PDFs in Prepare and self-check every formula step.',
        ].join('\n');
  }

  if (isKm) {
    const contextHeader = params.contextTitle
      ? `សង្ខេបវិធីសាស្ត្រដោះស្រាយសម្រាប់ **${params.contextTitle}**៖`
      : 'មគ្គុទ្ទេសក៍សិក្សាបាក់ឌុប និងអាហារូបករណ៍ពី EduBridge៖';
    return [
      contextHeader,
      '',
      '• **១. ចាប់ផ្តើមដោយរូបមន្តផ្លូវការ៖** កំណែបាក់ឌុប MoEYS ឱ្យពិន្ទុខ្ពស់លើការសរសេររូបមន្តគោល និងលក្ខខណ្ឌកំណត់ជាមុន មុនពេលជំនួសតម្លៃលេខ។',
      '• **២. បង្ហាញជំហានកណ្តាលឱ្យច្បាស់៖** កុំរំលងជំហានប្តូរអថេរ u, ការថ្លឹងសមីការគីមី ឬតារាងអថិរភាព ព្រោះជាចំណុចកំណត់ពិន្ទុសំខាន់។',
      '• **៣. ផ្ទៀងផ្ទាត់ចំណុចងាយភ្លាត់៖** ពិនិត្យសញ្ញា (+ / −), ថេរអាំងតេក្រាល + C និងខ្នាត SI (m/s, Ω, mol, J) នៅចម្លើយចុងក្រោយ។',
      '• **៤. អនុវត្តជាមួយវិញ្ញាសា PDF ២០២១–២០២៥៖** អ្នកអាចបើកមើលវិញ្ញាសា និងកំណែរៀបរៀងដោយលោកគ្រូ-អ្នកគ្រូនៅក្នុងផ្នែក "ត្រៀមប្រឡង"។',
      '• **៥. រៀបចំផែនការ ៧ ថ្ងៃ៖** ប្រើតេស្តវិភាគក្នុងផ្នែក "សិក្សា" ដើម្បីរកចំណុចខ្សោយតាមទម្ងន់ពិន្ទុ ១២៥/៧៥/៥០ ពិន្ទុ។',
    ].join('\n');
  }

  const enHeader = params.contextTitle
    ? `Step-by-step MoEYS strategy for **${params.contextTitle}**:`
    : 'EduBridge BacII & Scholarship Study Guide:';
  return [
    enHeader,
    '',
    '• **1. State the Core Formula First:** MoEYS examiners award essential partial credit for writing the exact theorem or formula before substituting numbers.',
    '• **2. Keep Intermediate Steps Explicit:** Show variable substitutions (u = x²), balanced chemical equations, or sign tables clearly.',
    '• **3. Check High-Loss Traps:** Always verify "+ C" on indefinite integrals, plus/minus signs, and SI units (m/s, Ω, mol, J).',
    '• **4. Practice Official 2021–2025 PDFs:** Open any of the 16 combined exam + answer key PDFs in the Prepare tab.',
    '• **5. Prioritize by BacII Points:** Focus first on your 125-pt core subject and 75-pt STEM/Humanities subjects using the Learn diagnostic.',
  ].join('\n');
}

async function streamTextChunks(res: express.Response, fullText: string): Promise<void> {
  const chunkSize = 24;
  for (let i = 0; i < fullText.length; i += chunkSize) {
    const slice = fullText.slice(i, i + chunkSize);
    res.write(`data: ${JSON.stringify({ text: slice })}\n\n`);
    await new Promise((resolve) => setTimeout(resolve, 14));
  }
}

async function tryGeminiStreamWithTimeout(
  ai: GoogleGenAI,
  model: string,
  thinkingLevel: ThinkingLevel,
  contents: { role: 'user' | 'model'; parts: { text: string }[] }[],
  systemInstruction: string,
  res: express.Response,
  timeoutMs: number
): Promise<boolean> {
  let emittedAny = false;

  const streamPromise = (async () => {
    const stream = await ai.models.generateContentStream({
      model,
      contents,
      config: {
        systemInstruction,
        thinkingConfig: {
          thinkingLevel,
        },
      },
    });

    for await (const chunk of stream) {
      const text = chunk.text;
      if (text) {
        emittedAny = true;
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }
    return emittedAny;
  })();

  const timeoutPromise = new Promise<boolean>((_, reject) => {
    setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms on ${model}`)), timeoutMs);
  });

  const ok = await Promise.race([streamPromise, timeoutPromise]);
  return ok;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.post('/api/assistant/chat', async (req, res) => {
    const body = (req.body || {}) as AssistantChatRequestBody;
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    if (!message) {
      res.status(400).json({ error: 'Message is required.' });
      return;
    }

    const language: 'en' | 'km' = body.language === 'km' ? 'km' : 'en';
    const track: 'science' | 'social' = body.track === 'social' ? 'social' : 'science';
    const trackLabel =
      track === 'social'
        ? 'Social Science Track (ថ្នាក់វិទ្យាសាស្ត្រសង្គម)'
        : 'Science Track (ថ្នាក់វិទ្យាសាស្ត្រ)';

    const systemInstruction = [
      'You are the EduBridge AI Study Assistant (ជំនួយការ AI), an expert tutor for Cambodian Grade 12 (BacII / មធ្យមសិក្សាទុតិយភូមិ) students and Cambodian university scholarship applicants.',
      language === 'km'
        ? 'LANGUAGE RULE: Respond completely in natural, clear Khmer (ភាសាខ្មែរ) using accurate Cambodian MoEYS academic terminology.'
        : 'LANGUAGE RULE: Respond completely in clear, concise English tailored for Cambodian Grade 12 students.',
      `Active student track: ${trackLabel}.`,
      'OUTPUT & FORMATTING RULES (STRICT):',
      '1. Respond concisely in 4–6 clear bullet points (or 4–6 short numbered steps). Keep every answer focused, practical, and easy to scan.',
      '2. MATHEMATICAL NOTATION: ALWAYS use clean Unicode math symbols directly (e.g., x², x³, √, ∫, π, Δ, θ, ω, →, ⇒, ≠, ≤, ≥, ×, ÷, eˣ). NEVER output raw LaTeX delimiters or commands such as $$, $, \\frac, \\sqrt, \\int, \\left, \\right, or \\cdot.',
      '3. PEDAGOGY: State the exact required MoEYS formula or rule first, show intermediate steps concisely, give the final answer with SI units (+ C for indefinite integrals), and warn about the #1 common student mistake.',
      '4. SCHOLARSHIP GROUNDING: Always accurately cite our 6 verified Cambodian scholarships (MoEYS State, AMT exam vs non-exam tracks, UYFC ស.ស.យ.ក, MPTC Techo Digital Talent, University Merit, and MEXT Japan).',
      '',
      VERIFIED_SCHOLARSHIP_KNOWLEDGE,
    ].join('\n');

    const contextBlock =
      body.contextTitle || body.contextContent
        ? `\n\n[Attached Exercise / Context: ${body.contextTitle ?? 'Selected Problem'}]\n${body.contextContent ?? ''}\n`
        : '';

    const historyParts = Array.isArray(body.history)
      ? body.history
          .slice(-6)
          .filter((item) => item && typeof item.text === 'string' && item.text.trim().length > 0)
          .map((item) => ({
            role: item.role === 'model' ? ('model' as const) : ('user' as const),
            parts: [{ text: item.text }],
          }))
      : [];

    const contents = [
      ...historyParts,
      {
        role: 'user' as const,
        parts: [{ text: `${contextBlock}${message}` }],
      },
    ];

    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders?.();

    const ai = createGeminiClient();
    let streamedSuccess = false;

    if (ai) {
      // Layer 1 (Primary): gemini-4-hydrogen with ThinkingLevel.LOW
      try {
        streamedSuccess = await tryGeminiStreamWithTimeout(
          ai,
          'gemini-4-hydrogen',
          ThinkingLevel.LOW,
          contents,
          systemInstruction,
          res,
          12000
        );
      } catch (err1) {
        console.warn('AI Assistant Layer 1 (gemini-4-hydrogen) fallback triggered:', err1 instanceof Error ? err1.message : err1);
      }

      // Layer 2 (API Fallback): gemini-3.1-flash-lite with ThinkingLevel.MINIMAL
      if (!streamedSuccess) {
        try {
          streamedSuccess = await tryGeminiStreamWithTimeout(
            ai,
            'gemini-3.1-flash-lite',
            ThinkingLevel.MINIMAL,
            contents,
            systemInstruction,
            res,
            10000
          );
        } catch (err2) {
          console.warn('AI Assistant Layer 2 (gemini-3.1-flash-lite) fallback triggered:', err2 instanceof Error ? err2.message : err2);
        }
      }
    }

    // Layer 3 (Instant Local Demo Safety Net): smoothly stream built-in Khmer/English guide (never raw JSON errors)
    if (!streamedSuccess) {
      const safetyReply = buildLocalSafetyNetReply({
        message,
        language,
        track,
        contextTitle: body.contextTitle,
      });
      await streamTextChunks(res, safetyReply);
    }

    res.write('data: [DONE]\n\n');
    res.end();
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      const indexFile = path.join(distPath, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Build output not found.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EduBridge server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start EduBridge server:', err);
  process.exit(1);
});
