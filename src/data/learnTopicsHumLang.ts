import type { LearnTopicModule } from '../types';

export const HUM_LANG_LEARN_TOPICS: LearnTopicModule[] = [
  // ============================================================================
  // 6. HISTORY — SCIENCE & SOCIAL TRACKS (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'hist-us-ussr',
    subjectId: 'history',
    tracks: ['science', 'social'],
    title: {
      km: 'សហរដ្ឋអាមេរិក (1860-1960) និងសហភាពសូវៀត (1945-1991)',
      en: 'United States (1860–1960) & Soviet Union (1945–1991)',
    },
    subtitle: {
      km: 'សង្គ្រាមត្រជាក់ វិបត្តិសេដ្ឋកិច្ច ១៩២៩ និងការដួលរលំសហភាពសូវៀត',
      en: 'Cold War rivalry, 1929 Great Depression & collapse of the USSR',
    },
    relatedPaperId: 'history-social-2025',
    questions: [
      {
        id: 'hist-us-1',
        prompt: {
          km: 'សង្គ្រាមស៊ីវិលអាមេរិក (1861–1865) ដឹកនាំដោយប្រធានាធិបតីណា ដើម្បីបង្រួបបង្រួមជាតិ និងលុបបំបាត់ទាសភាព?',
          en: 'Which US president led the Union during the American Civil War (1861–1865) and abolished slavery?',
        },
        options: {
          km: ['George Washington', 'Abraham Lincoln', 'Franklin D. Roosevelt', 'Woodrow Wilson'],
          en: ['George Washington', 'Abraham Lincoln', 'Franklin D. Roosevelt', 'Woodrow Wilson'],
        },
        correctIndex: 1,
        explanation: {
          km: 'លោក Abraham Lincoln ដឹកនាំសហរដ្ឋអាមេរិកឈ្នះសង្គ្រាមស៊ីវិល និងប្រកាសរំដោះទាសករ (1863)។',
          en: 'Abraham Lincoln preserved the Union and issued the Emancipation Proclamation (1863).',
        },
      },
      {
        id: 'hist-us-2',
        prompt: {
          km: 'កម្មវិធីកំណែទម្រង់សេដ្ឋកិច្ច "New Deal" ដើម្បីដោះស្រាយវិបត្តិឆ្នាំ ១៩២៩ ជាស្នាដៃរបស់ប្រធានាធិបតីណា?',
          en: 'Who launched the "New Deal" to recover the US economy from the 1929 Great Depression?',
        },
        options: {
          km: ['Herbert Hoover', 'Franklin D. Roosevelt', 'Harry Truman', 'John F. Kennedy'],
          en: ['Herbert Hoover', 'Franklin D. Roosevelt', 'Harry Truman', 'John F. Kennedy'],
        },
        correctIndex: 1,
        explanation: {
          km: 'លោក Franklin D. Roosevelt (FDR) បានអនុវត្តគោលនយោបាយ New Deal ចាប់ពីឆ្នាំ ១៩៣៣។',
          en: 'Franklin D. Roosevelt introduced the New Deal reforms beginning in 1933.',
        },
      },
      {
        id: 'hist-us-3',
        prompt: {
          km: 'គោលនយោបាយ "Perestroika" និង "Glasnost" នៅសហភាពសូវៀត (1985) ត្រូវបានផ្តួចផ្តើមដោយមេដឹកនាំណា?',
          en: 'Who initiated the Soviet reforms "Perestroika" and "Glasnost" in 1985?',
        },
        options: {
          km: ['Joseph Stalin', 'Nikita Khrushchev', 'Leonid Brezhnev', 'Mikhail Gorbachev'],
          en: ['Joseph Stalin', 'Nikita Khrushchev', 'Leonid Brezhnev', 'Mikhail Gorbachev'],
        },
        correctIndex: 3,
        explanation: {
          km: 'លោក Mikhail Gorbachev បានដាក់ចេញកំណែទម្រង់សេដ្ឋកិច្ច (Perestroika) និងតម្លាភាពនយោបាយ (Glasnost)។',
          en: 'Mikhail Gorbachev introduced restructuring (Perestroika) and openness (Glasnost).',
        },
      },
      {
        id: 'hist-us-4',
        prompt: {
          km: 'តើសហភាពសូវៀតបានរលាយជាផ្លូវការនៅខែធ្នូ ឆ្នាំណា?',
          en: 'In December of which year did the Soviet Union formally dissolve?',
        },
        options: {
          km: ['១៩៨៩', '១៩៩០', '១៩៩១', '១៩៩៣'],
          en: ['1989', '1990', '1991', '1993'],
        },
        correctIndex: 2,
        explanation: {
          km: 'សហភាពសូវៀតបានរំលាយជាផ្លូវការនៅថ្ងៃទី ២៦ ខែធ្នូ ឆ្នាំ ១៩៩១ ជាការបញ្ចប់សង្គ្រាមត្រជាក់។',
          en: 'The USSR formally dissolved on 26 December 1991, ending the Cold War.',
        },
      },
    ],
  },
  {
    id: 'hist-french-protectorate',
    subjectId: 'history',
    tracks: ['science', 'social'],
    title: {
      km: 'ប្រទេសកម្ពុជាក្រោមអាណានិគមបារាំង (1863-1953)',
      en: 'Cambodia Under French Protectorate (1863–1953)',
    },
    subtitle: {
      km: 'សន្ធិសញ្ញាអាណាព្យាបាល ១៨៦៣ ការទាមទារទឹកដី និងឯករាជ្យ ៩ វិច្ឆិកា ១៩៥៣',
      en: '1863 Protectorate Treaty, 1907 border treaties & 1953 Independence',
    },
    relatedPaperId: 'history-science-2024',
    questions: [
      {
        id: 'hist-fr-1',
        prompt: {
          km: 'សន្ធិសញ្ញាអាណាព្យាបាលបារាំងនៅកម្ពុជាត្រូវបានចុះហត្ថលេខាជាលើកដំបូងនៅថ្ងៃទី ១១ សីហា ១៨៦៣ ក្នុងរជ្ជកាលព្រះមហាក្សត្រអង្គណា?',
          en: 'Under which Cambodian king was the initial French Protectorate Treaty signed on 11 August 1863?',
        },
        options: {
          km: ['ព្រះបាទអង្គឌួង', 'ព្រះបាទនរោត្តម', 'ព្រះបាទស៊ីសុវត្ថិ', 'ព្រះបាទស៊ីសុវត្ថិ មុនីវង្ស'],
          en: ['King Ang Duong', 'King Norodom', 'King Sisowath', 'King Sisowath Monivong'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ព្រះបាទនរោត្តម បានឡាយព្រះហស្តលេខាលើសន្ធិសញ្ញាអាណាព្យាបាលថ្ងៃ ១១ សីហា ១៨៦៣។',
          en: 'King Norodom signed the Protectorate Treaty with France on 11 August 1863.',
        },
      },
      {
        id: 'hist-fr-2',
        prompt: {
          km: 'តាមសន្ធិសញ្ញាបារាំង-សៀម ឆ្នាំ ១៩០៧ តើកម្ពុជាទទួលបានខេត្តភាគពាយ័ព្យណាខ្លះមកវិញ?',
          en: 'Through the 1907 Franco-Siamese treaty, which northwestern provinces were returned to Cambodia?',
        },
        options: {
          km: [
            'បាត់ដំបង សៀមរាប និងសិរីសោភ័ណ',
            'កំពត និងកែប',
            'ព្រៃវែង និងស្វាយរៀង',
            'មណ្ឌលគិរី និងរតនគិរី',
          ],
          en: [
            'Battambang, Siem Reap, and Sisophon',
            'Kampot and Kep',
            'Prey Veng and Svay Rieng',
            'Mondulkiri and Ratanakiri',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'សន្ធិសញ្ញា ២៣ មីនា ១៩០៧ បានប្រគល់ខេត្តបាត់ដំបង សៀមរាប និងសិរីសោភ័ណ មកកម្ពុជាវិញ។',
          en: 'The treaty of 23 March 1907 retroceded Battambang, Siem Reap, and Sisophon to Cambodia.',
        },
      },
      {
        id: 'hist-fr-3',
        prompt: {
          km: 'ការធ្វើបាតុកម្ម "សង្គ្រាមឆត្រ" (Umbrella Demonstration) នៅភ្នំពេញប្រឆាំងបារាំងកើតឡើងនៅថ្ងៃណា?',
          en: 'When did the anti-colonial "Umbrella Demonstration" take place in Phnom Penh?',
        },
        options: {
          km: ['២០ កក្កដា ១៩៤២', '៩ មីនា ១៩៤៥', '៩ វិច្ឆិកា ១៩៥៣', '២០ កក្កដា ១៩៥៤'],
          en: ['20 July 1942', '9 March 1945', '9 November 1953', '20 July 1954'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ថ្ងៃ ២០ កក្កដា ១៩៤២ ព្រះសង្ឃ និងប្រជាជនដង្ហែក្បួនតវ៉ាទាមទារដោះលែងលោកអាចារ្យ ហែម ចៀវ។',
          en: 'On 20 July 1942, monks and citizens protested the arrest of Venerable Hem Chieu.',
        },
      },
      {
        id: 'hist-fr-4',
        prompt: {
          km: 'ព្រះរាជបូជនីយកិច្ចទាមទារឯករាជ្យដឹកនាំដោយព្រះបាទនរោត្តម សីហនុ ទទួលបានឯករាជ្យពេញលេញនៅថ្ងៃណា?',
          en: 'On what exact date did King Norodom Sihanouk’s Royal Crusade achieve Cambodia’s full independence?',
        },
        options: {
          km: ['១១ សីហា ១៩៥៣', '៩ វិច្ឆិកា ១៩៥៣', '២០ កក្កដា ១៩៥៤', '២៣ តុលា ១៩៥៥'],
          en: ['11 August 1953', '9 November 1953', '20 July 1954', '23 October 1955'],
        },
        correctIndex: 1,
        explanation: {
          km: 'កម្ពុជាទទួលបានឯករាជ្យជាតិពេញលេញពីបារាំងនៅថ្ងៃទី ៩ ខែវិច្ឆិកា ឆ្នាំ ១៩៥៣។',
          en: 'Cambodia achieved full independence from France on 9 November 1953.',
        },
      },
    ],
  },
  {
    id: 'hist-sangkum-republic',
    subjectId: 'history',
    tracks: ['science', 'social'],
    title: {
      km: 'របបសង្គមរាស្ត្រនិយម (1955-1970) និងសាធារណរដ្ឋខ្មែរ (1970-1975)',
      en: 'Sangkum Reastr Niyum (1955–1970) & Khmer Republic (1970–1975)',
    },
    subtitle: {
      km: 'នយោបាយអព្យាក្រឹត សមិទ្ធផលអភិវឌ្ឍន៍ និងរដ្ឋប្រហារ ១៨ មីនា ១៩៧០',
      en: 'Neutrality, national development & the 18 March 1970 coup',
    },
    relatedPaperId: 'history-social-2025',
    questions: [
      {
        id: 'hist-sr-1',
        prompt: {
          km: 'តើព្រះអង្គម្ចាស់ នរោត្តម សីហនុ បានបង្កើតអង្គការ "សង្គមរាស្ត្រនិយម" នៅឆ្នាំណា?',
          en: 'In which year did Norodom Sihanouk establish the "Sangkum Reastr Niyum" movement?',
        },
        options: {
          km: ['១៩៥៣', '១៩៥៥', '១៩៦០', '១៩៦៥'],
          en: ['1953', '1955', '1960', '1965'],
        },
        correctIndex: 1,
        explanation: {
          km: 'សង្គមរាស្ត្រនិយមត្រូវបានបង្កើតក្នុងឆ្នាំ ១៩៥៥ ក្រោយព្រះអង្គដាក់រាជ្យជូនព្រះបាទនរោត្តម សុរាម្រិត។',
          en: 'Founded in 1955 after Sihanouk abdicated in favor of his father, King Norodom Suramarit.',
        },
      },
      {
        id: 'hist-sr-2',
        prompt: {
          km: 'គោលនយោបាយការបរទេសចម្បងរបស់កម្ពុជាក្នុងសម័យសង្គមរាស្ត្រនិយមគឺអ្វី?',
          en: 'What was Cambodia’s core foreign policy during the Sangkum Reastr Niyum era?',
        },
        options: {
          km: [
            'នយោបាយអព្យាក្រឹត (មិនចូលបក្សសម្ព័ន្ធ)',
            'ចូលរួមសម្ព័ន្ធមិត្តយោធា SEATO',
            'បិទទ្វារដាច់ខាតពីពិភពលោក',
            'ចូលរួមសង្គ្រាមត្រជាក់ជាមួយសូវៀត',
          ],
          en: [
            'Strict neutrality and non-alignment',
            'Joining SEATO military pact',
            'Complete international isolation',
            'Military pact with the USSR',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'កម្ពុជាប្រកាន់យកនយោបាយអព្យាក្រឹត និងចូលរួមសន្និសីទប៊ែលក្រាដ/បាងឌុង (ចលនាមិនចូលបក្សសម្ព័ន្ធ)។',
          en: 'Cambodia adopted active neutrality and non-alignment (Bandung Conference 1955).',
        },
      },
      {
        id: 'hist-sr-3',
        prompt: {
          km: 'រដ្ឋប្រហារទម្លាក់សម្តេច នរោត្តម សីហនុ និងបង្កើតរបបសាធារណរដ្ឋខ្មែរដឹកនាំដោយ លន់ នល់ កើតឡើងនៅថ្ងៃណា?',
          en: 'On what date did General Lon Nol’s coup oust Prince Norodom Sihanouk?',
        },
        options: {
          km: ['១៨ មីនា ១៩៧០', '៩ តុលា ១៩៧០', '១៧ មេសា ១៩៧៥', '៧ មករា ១៩៧៩'],
          en: ['18 March 1970', '9 October 1970', '17 April 1975', '7 January 1979'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ថ្ងៃ ១៨ មីនា ១៩៧០ រដ្ឋសភាបានបោះឆ្នោតដកសេចក្តីទុកចិត្ត និងថ្ងៃ ៩ តុលា ១៩៧០ ប្រកាសជាសាធារណរដ្ឋខ្មែរ។',
          en: 'The coup occurred on 18 March 1970, followed by the proclamation of the Khmer Republic on 9 October 1970.',
        },
      },
      {
        id: 'hist-sr-4',
        prompt: {
          km: 'សមិទ្ធផលសំខាន់មួយណាដែលមិនមែនជារបស់សម័យសង្គមរាស្ត្រនិយម (1955–1970)?',
          en: 'Which landmark was built AFTER, not during, the Sangkum Reastr Niyum era (1955–1970)?',
        },
        options: {
          km: [
            'ពហុកីឡដ្ឋានជាតិអូឡាំពិក',
            'កំពង់ផែស្វយ័តក្រុងព្រះសីហនុ',
            'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ',
            'ស្ពានមិត្តភាពកម្ពុជា-ចិន (ស្ទឹងត្រង់)',
          ],
          en: [
            'National Olympic Stadium',
            'Sihanoukville Autonomous Port',
            'Royal University of Phnom Penh',
            'Stung Trang–Krouch Chhmar Bridge (2021)',
          ],
        },
        correctIndex: 3,
        explanation: {
          km: 'ពហុកីឡដ្ឋានអូឡាំពិក កំពង់ផែព្រះសីហនុ និងសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ សុទ្ធតែជាស្នាដៃសង្គមរាស្ត្រនិយម។',
          en: 'Olympic Stadium, Sihanoukville Port, and RUPP were signature Sangkum achievements.',
        },
      },
    ],
  },
  {
    id: 'hist-dk-reconstruction',
    subjectId: 'history',
    tracks: ['science', 'social'],
    title: {
      km: 'កម្ពុជាប្រជាធិបតេយ្យ (1975-1979) និងការស្ដារប្រទេស (1979-1993)',
      en: 'Democratic Kampuchea (1975–1979) & Reconstruction (1979–1993)',
    },
    subtitle: {
      km: '៧ មករា ១៩៧៩ កិច្ចព្រមព្រៀងប៉ារីស ១៩៩១ និងរដ្ឋធម្មនុញ្ញ ១៩៩៣',
      en: '7 Jan 1979 liberation, 1991 Paris Peace Accords & 1993 Constitution',
    },
    relatedPaperId: 'history-social-2025',
    questions: [
      {
        id: 'hist-dk-1',
        prompt: {
          km: 'របបកម្ពុជាប្រជាធិបតេយ្យ (ខ្មែរក្រហម) ឡើងកាន់អំណាចនៅថ្ងៃណា និងដួលរលំនៅថ្ងៃណា?',
          en: 'When did Democratic Kampuchea (Khmer Rouge) take power and when did it fall?',
        },
        options: {
          km: [
            '១៧ មេសា ១៩៧៥ – ៧ មករា ១៩៧៩',
            '១៨ មីនា ១៩៧០ – ១៧ មេសា ១៩៧៥',
            '៧ មករា ១៩៧៩ – ២៣ តុលា ១៩៩១',
            '២៣ តុលា ១៩៩១ – ២៤ កញ្ញា ១៩៩៣',
          ],
          en: [
            '17 April 1975 – 7 January 1979',
            '18 March 1970 – 17 April 1975',
            '7 January 1979 – 23 October 1991',
            '23 October 1991 – 24 September 1993',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'របបខ្មែរក្រហមគ្រប់គ្រងរយៈពេល ៣ ឆ្នាំ ៨ ខែ ២០ ថ្ងៃ (១៧ មេសា ១៩៧៥ ដល់ ៧ មករា ១៩៧៩)។',
          en: 'The Khmer Rouge ruled from 17 April 1975 until liberation on 7 January 1979.',
        },
      },
      {
        id: 'hist-dk-2',
        prompt: {
          km: 'កិច្ចព្រមព្រៀងសន្តិភាពទីក្រុងប៉ារីសសម្រាប់កម្ពុជាត្រូវបានចុះហត្ថលេខានៅថ្ងៃណា?',
          en: 'On what exact date were the Paris Peace Agreements on Cambodia signed?',
        },
        options: {
          km: ['៧ មករា ១៩៧៩', '២៣ តុលា ១៩៩១', '២៣ ឧសភា ១៩៩៣', '២៤ កញ្ញា ១៩៩៣'],
          en: ['7 January 1979', '23 October 1991', '23 May 1993', '24 September 1993'],
        },
        correctIndex: 1,
        explanation: {
          km: 'កិច្ចព្រមព្រៀងប៉ារីសថ្ងៃ ២៣ តុលា ១៩៩១ បានត្រួសត្រាយផ្លូវដល់ការបោះឆ្នោតរៀបចំដោយ UNTAC។',
          en: 'Signed on 23 October 1991, the Paris Peace Agreements paved the way for UNTAC elections.',
        },
      },
      {
        id: 'hist-dk-3',
        prompt: {
          km: 'រដ្ឋធម្មនុញ្ញនៃព្រះរាជាណាចក្រកម្ពុជាលើកទី ២ (រាជាធិបតេយ្យអាស្រ័យរដ្ឋធម្មនុញ្ញ) ត្រូវបានប្រកាសឱ្យប្រើនៅថ្ងៃណា?',
          en: 'When was Cambodia’s current Constitution (restoring the constitutional monarchy) promulgated?',
        },
        options: {
          km: ['២៣ តុលា ១៩៩១', '២៣ ឧសភា ១៩៩៣', '២៤ កញ្ញា ១៩៩៣', '៣០ មេសា ១៩៩៩'],
          en: ['23 October 1991', '23 May 1993', '24 September 1993', '30 April 1999'],
        },
        correctIndex: 2,
        explanation: {
          km: 'រដ្ឋធម្មនុញ្ញឆ្នាំ ១៩៩៣ ត្រូវបានព្រះមហាក្សត្រ នរោត្តម សីហនុ ឡាយព្រះហស្តលេខាប្រកាសឱ្យប្រើនៅថ្ងៃ ២៤ កញ្ញា ១៩៩៣។',
          en: 'King Norodom Sihanouk promulgated the new Constitution on 24 September 1993.',
        },
      },
      {
        id: 'hist-dk-4',
        prompt: {
          km: 'នៅសម័យស្តារប្រទេសឡើងវិញ (១៩៧៩–១៩៨៩) សាធារណរដ្ឋប្រជាមានិតកម្ពុជាបានបង្កើតរូបិយវត្ថុប្រាក់រៀលឡើងវិញនៅឆ្នាំណា?',
          en: 'During national reconstruction, in which year did the People’s Republic of Kampuchea reintroduce the Riel currency?',
        },
        options: {
          km: ['១៩៧៩', '១៩៨០ (២០ មីនា)', '១៩៨៥', '១៩៩១'],
          en: ['1979', '1980 (20 March)', '1985', '1991'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ធនាគារជាតិនៃកម្ពុជាបានបោះផ្សាយប្រាក់រៀលឡើងវិញនៅថ្ងៃទី ២០ ខែមីនា ឆ្នាំ ១៩៨០។',
          en: 'The Riel was officially reintroduced on 20 March 1980 after being abolished in 1975.',
        },
      },
    ],
  },

  // ============================================================================
  // 7. GEOGRAPHY — SOCIAL SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'geo-demographics',
    subjectId: 'geography',
    tracks: ['social'],
    title: {
      km: 'ទម្រង់ប្រជាសាស្ត្រ និងបម្លាស់លំនៅនៅកម្ពុជា',
      en: 'Demographics & Migration in Cambodia',
    },
    subtitle: {
      km: 'អត្រាកំណើនធម្មជាតិ ដង់ស៊ីតេ និងចលនាបម្លាស់លំនៅជនបទ-ក្រុង',
      en: 'Natural growth rate, population density & rural-urban migration',
    },
    relatedPaperId: 'geo-social-2023',
    questions: [
      {
        id: 'geo-dm-1',
        prompt: {
          km: 'ប្រសិនបើអត្រាកំណើត CBR = 22‰ និងអត្រាមរណៈ CDR = 6‰ ចូរគណនាអត្រាកំណើនធម្មជាតិ R (%)។',
          en: 'If crude birth rate CBR = 22‰ and death rate CDR = 6‰, calculate natural growth rate R (%).',
        },
        options: {
          km: ['16%', '1.6%', '2.8%', '0.16%'],
          en: ['16%', '1.6%', '2.8%', '0.16%'],
        },
        correctIndex: 1,
        explanation: {
          km: 'R = (CBR − CDR) / 10 = (22 − 6) / 10 = 16 / 10 = 1.6%។',
          en: 'R = (CBR − CDR) / 10 = (22 − 6)/10 = 1.6% (divide per-mille by 10).',
        },
      },
      {
        id: 'geo-dm-2',
        prompt: {
          km: 'ខេត្តមួយមានប្រជាជន 1,200,000 នាក់ និងផ្ទៃដី 6,000 km²។ គណនាដង់ស៊ីតេប្រជាជន។',
          en: 'A province has 1,200,000 residents and area 6,000 km². Compute its population density.',
        },
        options: {
          km: ['120 នាក់/km²', '200 នាក់/km²', '250 នាក់/km²', '600 នាក់/km²'],
          en: ['120 people/km²', '200 people/km²', '250 people/km²', '600 people/km²'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ដង់ស៊ីតេ D = ចំនួនប្រជាជន / ផ្ទៃដី = 1,200,000 / 6,000 = 200 នាក់/km²។',
          en: 'Population density D = Population / Area = 1,200,000 / 6,000 = 200 people/km².',
        },
      },
      {
        id: 'geo-dm-3',
        prompt: {
          km: 'កត្តាទាក់ទាញចម្បង (Pull Factor) ដែលជំរុញបម្លាស់លំនៅពីជនបទមករាជធានីភ្នំពេញគឺអ្វី?',
          en: 'What is the primary pull factor driving rural-to-urban migration toward Phnom Penh?',
        },
        options: {
          km: [
            'ឱកាសការងាររោងចក្រ សេវាកម្ម និងការសិក្សាខ្ពស់',
            'តម្លៃដីស្រែធ្លាក់ចុះ',
            'ការកើនឡើងនៃគ្រោះទឹកជំនន់ជនបទ',
            'ការបាត់បង់ដីកសិកម្មទាំងស្រុង',
          ],
          en: [
            'Factory/service jobs, higher wages, and higher education access',
            'Falling rural farmland prices',
            'Rural floods (that is a push factor)',
            'Total loss of farmland',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ការងារឧស្សាហកម្ម-សេវាកម្ម និងគ្រឹះស្ថានអប់រំនៅទីក្រុងជាកត្តាទាក់ទាញ (Pull Factors)។',
          en: 'Employment opportunities and university education in cities are key pull factors.',
        },
      },
      {
        id: 'geo-dm-4',
        prompt: {
          km: 'តំបន់ភូមិសាស្ត្រណានៅកម្ពុជាដែលមានប្រជាជនរស់នៅកុះករជាងគេបំផុត?',
          en: 'Which geographic region of Cambodia has the highest population concentration?',
        },
        options: {
          km: ['តំបន់ទំនាបកណ្តាល', 'តំបន់ខ្ពង់រាប និងភ្នំភាគឦសាន', 'តំបន់ជួរភ្នំក្រវាញ', 'តំបន់ព្រៃឡង់'],
          en: ['Central Plains (Mekong–Tonle Sap)', 'Northeast Plateau', 'Cardamom Mountains', 'Prey Lang'],
        },
        correctIndex: 0,
        explanation: {
          km: 'តំបន់ទំនាបកណ្តាល (តាមដងទន្លេមេគង្គ និងបឹងទន្លេសាប) មានដីមានជីជាតិ និងគមនាគមន៍ងាយស្រួល។',
          en: 'The Central Plains around the Mekong and Tonle Sap offer fertile soil and transport access.',
        },
      },
    ],
  },
  {
    id: 'geo-economy',
    subjectId: 'geography',
    tracks: ['social'],
    title: {
      km: 'សេដ្ឋកិច្ចកម្ពុជា (កសិកម្ម ឧស្សាហកម្ម និងទេសចរណ៍)',
      en: 'Cambodia’s Economy: Agriculture, Industry & Tourism',
    },
    subtitle: {
      km: 'វិស័យទាំង ៣ នាំចេញសម្លៀកបំពាក់ ដំណាំស្រូវ និងអេកូទេសចរណ៍',
      en: 'Three economic sectors, garment manufacturing, rice & tourism',
    },
    relatedPaperId: 'geo-social-2023',
    questions: [
      {
        id: 'geo-ec-1',
        prompt: {
          km: 'ឧស្សាហកម្មកាត់ដេរសម្លៀកបំពាក់ ស្បែកជើង និងសំណង់ ស្ថិតក្នុងវិស័យសេដ្ឋកិច្ចទីប៉ុន្មាន?',
          en: 'Garment manufacturing, footwear, and construction belong to which economic sector?',
        },
        options: {
          km: ['វិស័យទី ១ (Primary)', 'វិស័យទី ២ (Secondary)', 'វិស័យទី ៣ (Tertiary)', 'វិស័យទី ៤'],
          en: ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'],
        },
        correctIndex: 1,
        explanation: {
          km: 'វិស័យទី ១ = កសិកម្ម/នេសាទ; វិស័យទី ២ = ឧស្សាហកម្ម/សំណង់; វិស័យទី ៣ = សេវាកម្ម/ទេសចរណ៍។',
          en: 'Primary = agriculture/extraction; Secondary = manufacturing/construction; Tertiary = services.',
        },
      },
      {
        id: 'geo-ec-2',
        prompt: {
          km: 'ហេតុអ្វីបានជាទឹកទន្លេសាបហូរបញ្ច្រាសចូលបឹងទន្លេសាបនៅរដូវវស្សា (មិថុនា–តុលា)?',
          en: 'Why does the Tonle Sap River reverse flow into Tonle Sap Lake during the rainy season?',
        },
        options: {
          km: [
            'ជំនោរសមុទ្របង្ហូរទឹកចូល',
            'កម្ពស់ទឹកទន្លេមេគង្គឡើងខ្ពស់ជាងកម្រិតទឹកបឹងទន្លេសាប',
            'ភ្នំបូកគោរារាំងទឹក',
            'កម្លាំងខ្យល់មូសុងឦសាន',
          ],
          en: [
            'Ocean tides push water inland',
            'Mekong River floodwaters rise higher than the lake basin',
            'Bokor mountain blocks outflow',
            'Northeast monsoon winds',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'ទឹកជំនន់ទន្លេមេគង្គនៅប្រសព្វចតុមុខឡើងខ្ពស់ជាងបឹងទន្លេសាប រុញទឹកហូរឡើងចូលបឹងជាអាងស្តុកធម្មជាតិ។',
          en: 'High Mekong flood stage at Chaktomuk forces water upstream into the lower lake basin.',
        },
      },
      {
        id: 'geo-ec-3',
        prompt: {
          km: 'ខេត្តណាខ្លះដែលត្រូវបានចាត់ទុកជា "ជង្រុកស្រូវ" សំខាន់បំផុតនៅភាគពាយ័ព្យកម្ពុជា?',
          en: 'Which northwestern province is famously known as Cambodia’s primary "rice bowl"?',
        },
        options: {
          km: ['មណ្ឌលគិរី', 'បាត់ដំបង', 'កោះកុង', 'ប៉ៃលិន'],
          en: ['Mondulkiri', 'Battambang', 'Koh Kong', 'Pailin'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ខេត្តបាត់ដំបងមានវាលទំនាបធំទូលាយ និងដីល្បាប់មានជីជាតិសម្រាប់ផលិតកម្មស្រូវនាំចេញ។',
          en: 'Battambang’s vast alluvial plains make it Cambodia’s leading rice-producing province.',
        },
      },
      {
        id: 'geo-ec-4',
        prompt: {
          km: 'ប៉ូលទេសចរណ៍សំខាន់ៗទាំង ៣ របស់កម្ពុជាគឺតំបន់ណាខ្លះ?',
          en: 'What are Cambodia’s three major tourism hubs?',
        },
        options: {
          km: [
            'សៀមរាប (អង្គរ) ភ្នំពេញ និងតំបន់ឆ្នេរសមុទ្រ (ព្រះសីហនុ-កំពត-កែប)',
            'ស្វាយរៀង ព្រៃវែង និងត្បូងឃ្មុំ',
            'ប៉ៃលិន ឧត្តរមានជ័យ និងតាកែវ',
            'កំពង់ឆ្នាំង ពោធិ៍សាត់ និងកំពង់ស្ពឺ',
          ],
          en: [
            'Siem Reap (Angkor), Phnom Penh, and the Coastal Zone (Preah Sihanouk–Kampot–Kep)',
            'Svay Rieng, Prey Veng, and Tboung Khmum',
            'Pailin, Oddar Meanchey, and Takeo',
            'Kampong Chhnang, Pursat, and Kampong Speu',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'សៀមរាប (វប្បធម៌-ប្រវត្តិសាស្ត្រ) ភ្នំពេញ (រាជធានី-ធុរកិច្ច) និងតំបន់ឆ្នេរ (សមុទ្រ-អេកូទេសចរណ៍)។',
          en: 'Cultural heritage in Siem Reap, urban/historic hub in Phnom Penh, and coastal eco-tourism.',
        },
      },
    ],
  },
  {
    id: 'geo-urban-environment',
    subjectId: 'geography',
    tracks: ['social'],
    title: {
      km: 'នគរូបនីយកម្ម និងបញ្ហាបរិស្ថាននៅកម្ពុជា',
      en: 'Urbanization & Environmental Challenges in Cambodia',
    },
    subtitle: {
      km: 'កំណើនទីក្រុង សំរាមប្លាស្ទិក ការបាត់បង់ព្រៃឈើ និងបឹងធម្មជាតិ',
      en: 'Urban expansion, waste management, deforestation & wetlands',
    },
    relatedPaperId: 'geo-social-2023',
    questions: [
      {
        id: 'geo-ue-1',
        prompt: {
          km: 'បញ្ហាប្រឈមធំមួយនៃនគរូបនីយកម្មឆាប់រហ័សនៅទីក្រុងធំៗរបស់កម្ពុជាគឺអ្វី?',
          en: 'What is a major challenge caused by rapid urbanization in Cambodia’s cities?',
        },
        options: {
          km: [
            'កកស្ទះចរាចរណ៍ ជំនន់ទឹកភ្លៀង និងការគ្រប់គ្រងសំណល់រឹង-រាវ',
            'ខ្វះកម្លាំងពលកម្មទាំងស្រុង',
            'កង្វះភ្លៀងនៅរដូវវស្សា',
            'ការកើនឡើងផ្ទៃដីព្រៃឈើក្នុងក្រុង',
          ],
          en: [
            'Traffic congestion, urban flash flooding & solid/liquid waste pressure',
            'Complete lack of labor',
            'Absence of rainy season',
            'Rapid forest expansion inside cities',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ការពង្រីកទីក្រុងលឿនពេកបង្កសម្ពាធលើប្រព័ន្ធលូ ចរាចរណ៍ និងការគ្រប់គ្រងសំណល់សំរាម។',
          en: 'Rapid urban growth strains drainage infrastructure, transport networks, and waste systems.',
        },
      },
      {
        id: 'geo-ue-2',
        prompt: {
          km: 'ព្រៃលិចទឹកជុំវិញបឹងទន្លេសាបមានតួនាទីសំខាន់បំផុតសម្រាប់អ្វី?',
          en: 'Why are the flooded forests around Tonle Sap Lake ecologically vital?',
        },
        options: {
          km: [
            'ជាជម្រកពងកូនរបស់ត្រី និងការពារច្រាំងពីការបាក់ស្រុត',
            'ជាកន្លែងរុករកប្រេងកាត',
            'ទប់ស្កាត់រំញ័ររញ្ជួយដី',
            'ផលិតថាមពលនុយក្លេអ៊ែ',
          ],
          en: [
            'Essential fish spawning habitats and shoreline erosion control',
            'Offshore oil drilling',
            'Preventing earthquakes',
            'Nuclear power generation',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ព្រៃលិចទឹកទន្លេសាបផ្តល់ជម្រក និងចំណីសម្រាប់ត្រីទឹកសាបក្នុងអំឡុងរដូវពងកូន។',
          en: 'Flooded forests shelter and feed freshwater fish species during seasonal floods.',
        },
      },
      {
        id: 'geo-ue-3',
        prompt: {
          km: 'គោលការណ៍ 3R ក្នុងការគ្រប់គ្រងសំណល់បរិស្ថានទីក្រុងសំដៅលើអ្វីខ្លះ?',
          en: 'What does the 3R principle in urban waste management stand for?',
        },
        options: {
          km: [
            'កាត់បន្ថយ (Reduce) ប្រើឡើងវិញ (Reuse) និងកែច្នៃឡើងវិញ (Recycle)',
            'រក្សាទុក ដុតចោល និងបោះចោល',
            'ជីកកប់ បំបែក និងទុកចោល',
            'នាំចូល ប្រើប្រាស់ និងលក់បន្ត',
          ],
          en: [
            'Reduce, Reuse, and Recycle',
            'Store, Burn, and Dump',
            'Bury, Scatter, and Leave',
            'Import, Consume, and Resell',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: '3R = Reduce (កាត់បន្ថយការប្រើ) · Reuse (ប្រើប្រាស់ឡើងវិញ) · Recycle (កែច្នៃឡើងវិញ)។',
          en: 'Reduce, Reuse, and Recycle minimize landfill waste and plastic pollution.',
        },
      },
      {
        id: 'geo-ue-4',
        prompt: {
          km: 'តើព្រៃកោងកាង (Mangroves) នៅខេត្តកោះកុង និងព្រះសីហនុជួយការពារបរិស្ថានឆ្នេរយ៉ាងដូចម្តេច?',
          en: 'How do mangrove forests in Koh Kong and Preah Sihanouk protect coastal ecosystems?',
        },
        options: {
          km: [
            'ទប់រលកព្យុះ ច្រោះទឹក និងជាជម្រកកូនក្តាម-បង្គា-ត្រីសមុទ្រ',
            'បង្កើនជាតិអំបិលក្នុងដីស្រែ',
            'បង្កើនការបំភាយឧស្ម័នកាបូនិក',
            'រារាំងនាវាទេសចរណ៍',
          ],
          en: [
            'Buffer storm waves, filter water & nurture marine nurseries',
            'Increase farmland salinity',
            'Increase CO₂ emissions',
            'Block tourism boats',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ព្រៃកោងកាងជួយស្រូបកាបូន ទប់រលកខ្យល់ព្យុះ និងរក្សាជីវចម្រុះសមុទ្រ។',
          en: 'Mangroves stabilize coastlines against storm surges and sustain marine biodiversity.',
        },
      },
    ],
  },
  {
    id: 'geo-world-powers',
    subjectId: 'geography',
    tracks: ['social'],
    title: {
      km: 'មហាអំណាចសេដ្ឋកិច្ចពិភពលោក (សហរដ្ឋអាមេរិក ជប៉ុន និងសហភាពអឺរ៉ុប)',
      en: 'Global Economic Powers: USA, Japan & European Union',
    },
    subtitle: {
      km: 'ត្រីកោណសេដ្ឋកិច្ចពិភពលោក ឧស្សាហកម្មបច្ចេកវិទ្យាខ្ពស់ និងពាណិជ្ជកម្ម',
      en: 'The economic Triad, high-tech industry & global trade',
    },
    relatedPaperId: 'geo-social-2023',
    questions: [
      {
        id: 'geo-wp-1',
        prompt: {
          km: 'តំបន់ Silicon Valley នៅរដ្ឋ California (សហរដ្ឋអាមេរិក) ល្បីល្បាញខាងវិស័យអ្វី?',
          en: 'Silicon Valley in California (USA) is globally renowned as the center for which sector?',
        },
        options: {
          km: ['ធ្យូងថ្ម និងដែកថែប', 'បច្ចេកវិទ្យាព័ត៌មាន កម្មវិធី និង AI', 'ផលិតកម្មកៅស៊ូ', 'នេសាទសមុទ្រ'],
          en: ['Coal and heavy steel', 'Information technology, software & AI', 'Natural rubber', 'Deep-sea fishing'],
        },
        correctIndex: 1,
        explanation: {
          km: 'Silicon Valley ជាមជ្ឈមណ្ឌលបច្ចេកវិទ្យាខ្ពស់ (Technopole) ឈានមុខគេលើពិភពលោក។',
          en: 'Silicon Valley is the world’s premier high-tech innovation and IT cluster.',
        },
      },
      {
        id: 'geo-wp-2',
        prompt: {
          km: 'កត្តាស្នូលអ្វីដែលជំរុញឱ្យប្រទេសជប៉ុនក្លាយជាមហាអំណាចសេដ្ឋកិច្ច បើទោះបីជាខ្វះធនធានរ៉ែធម្មជាតិ?',
          en: 'Despite scarce natural minerals, what is the key driver of Japan’s economic strength?',
        },
        options: {
          km: [
            'ធនធានមនុស្សមានជំនាញ វិន័យការងារ និងបច្ចេកវិទ្យាឧស្សាហកម្មទំនើប',
            'ប្រេងកាតបម្រុងច្រើនជាងគេលើលោក',
            'ដីកសិកម្មទំនាបដ៏ធំទូលាយ',
            'កម្លាំងពលកម្មតម្លៃថោកគ្មានជំនាញ',
          ],
          en: [
            'Highly skilled workforce, innovation, and advanced manufacturing technology',
            'World’s largest crude oil reserves',
            'Vast flat agricultural plains',
            'Low-cost unskilled labor',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ជប៉ុនវិនិយោគខ្លាំងលើការអប់រំ វិទ្យាសាស្ត្រ-បច្ចេកវិទ្យា រ៉ូបូត និងឧស្សាហកម្មនាំចេញតម្លៃខ្ពស់។',
          en: 'Japan relies on human capital, R&D investment, robotics, and high-value exports.',
        },
      },
      {
        id: 'geo-wp-3',
        prompt: {
          km: 'រូបិយវត្ថុរួមដែលប្រើប្រាស់ក្នុងបណ្តាប្រទេសជាសមាជិកតំបន់ Eurozone នៃសហភាពអឺរ៉ុបគឺអ្វី?',
          en: 'What is the shared single currency used by Eurozone member states of the European Union?',
        },
        options: {
          km: ['ដុល្លារ (USD)', 'អឺរ៉ូ (Euro / €)', 'ផោន (GBP)', 'យ៉េន (JPY)'],
          en: ['US Dollar (USD)', 'Euro (€)', 'British Pound (GBP)', 'Japanese Yen (JPY)'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ប្រាក់អឺរ៉ូ (€) ជួយសម្រួលពាណិជ្ជកម្ម និងទីផ្សាររួមក្នុងសហភាពអឺរ៉ុប។',
          en: 'The Euro (€) facilitates single-market trade and monetary integration across the Eurozone.',
        },
      },
      {
        id: 'geo-wp-4',
        prompt: {
          km: 'កំពង់ផែ Rotterdam (ប្រទេសហូឡង់) មានសារៈសំខាន់យ៉ាងណាសម្រាប់សហភាពអឺរ៉ុប?',
          en: 'Why is the Port of Rotterdam (Netherlands) strategically important to the European Union?',
        },
        options: {
          km: [
            'ជាកំពង់ផែពាណិជ្ជកម្មសមុទ្រធំបំផុតនៅអឺរ៉ុប (ច្រកចេញចូលទំនិញអន្តរជាតិ)',
            'ជាតំបន់ទេសចរណ៍ភ្នំទឹកកក',
            'ជាមជ្ឈមណ្ឌលដាំដុះកាហ្វេ',
            'ជាកំពង់ផែយោធាបិទជិត',
          ],
          en: [
            'Europe’s largest seaport and primary international trade gateway',
            'Alpine ski resort',
            'Coffee plantation zone',
            'Closed military dock',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'កំពង់ផែ Rotterdam ភ្ជាប់ទន្លេ Rhine ទៅសមុទ្រខាងជើង ធ្វើជាច្រកនាំចេញ-នាំចូលធំជាងគេនៅអឺរ៉ុប។',
          en: 'Located at the Rhine-Meuse delta, Rotterdam is Europe’s busiest maritime freight gateway.',
        },
      },
    ],
  },

  // ============================================================================
  // 8. MORALITY & CIVICS — SOCIAL SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'moral-dignity-justice',
    subjectId: 'morality',
    tracks: ['social'],
    title: {
      km: 'តម្លៃមនុស្ស ទំនួលខុសត្រូវ និងយុត្តិធម៌',
      en: 'Human Dignity, Responsibility & Justice',
    },
    subtitle: {
      km: 'សីលធម៌បុគ្គល សុចរិតភាព ការទទួលខុសត្រូវ និងនីតិរដ្ឋ',
      en: 'Personal ethics, integrity, civic accountability & rule of law',
    },
    relatedPaperId: 'moral-social-2021',
    questions: [
      {
        id: 'mor-dj-1',
        prompt: {
          km: 'អ្វីទៅជា "តម្លៃមនុស្ស" (Human Dignity) ក្នុងទស្សនៈសីលធម៌សង្គម?',
          en: 'What does "Human Dignity" mean in civic ethics?',
        },
        options: {
          km: [
            'គុណតម្លៃដែលមនុស្សគ្រប់រូបមានស្មើគ្នាតាំងពីកំណើត និងត្រូវគោរពដោយគ្មានការរើសអើង',
            'តម្លៃវាស់ដោយទ្រព្យសម្បត្តិតែប៉ុណ្ណោះ',
            'សិទ្ធិផ្តាច់មុខរបស់អ្នកមានអំណាច',
            'ការប្រកួតប្រជែងឈ្នះ-ចាញ់',
          ],
          en: [
            'Inherent worth shared equally by every person without discrimination',
            'Worth measured solely by wealth',
            'Privilege limited to elites',
            'Zero-sum competition',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'មនុស្សគ្រប់រូបមានសេចក្តីថ្លៃថ្នូរ និងសិទ្ធិស្មើគ្នាចំពោះមុខច្បាប់ និងសង្គម។',
          en: 'Every human being holds inherent dignity deserving equal respect under law and ethics.',
        },
      },
      {
        id: 'mor-dj-2',
        prompt: {
          km: 'គោលការណ៍ "នីតិរដ្ឋ" (Rule of Law) ធានាយុត្តិធម៌សង្គមយ៉ាងដូចម្តេច?',
          en: 'How does the "Rule of Law" uphold social justice?',
        },
        options: {
          km: [
            'ច្បាប់ជាកំពូល និងប្រជាពលរដ្ឋគ្រប់រូបស្មើភាពគ្នាចំពោះមុខច្បាប់',
            'អនុវត្តច្បាប់តាមអារម្មណ៍បុគ្គល',
            'លើកលែងទោសឱ្យអ្នកមានប្រាក់',
            'លុបបំបាត់តុលាការឯករាជ្យ',
          ],
          en: [
            'Law is supreme and every citizen is equal before the courts',
            'Selective enforcement by personal preference',
            'Immunity for wealth',
            'Abolishing independent courts',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'មាត្រា ៣១ នៃរដ្ឋធម្មនុញ្ញកម្ពុជាចែងថាប្រជាពលរដ្ឋខ្មែរមានភាពស្មើគ្នាចំពោះមុខច្បាប់។',
          en: 'Article 31 of Cambodia’s Constitution guarantees equal treatment before the law.',
        },
      },
      {
        id: 'mor-dj-3',
        prompt: {
          km: 'តើទង្វើណាបង្ហាញពីទំនួលខុសត្រូវរបស់យុវជនក្នុងការសិក្សា និងសង្គម?',
          en: 'Which behavior best demonstrates student responsibility and integrity?',
        },
        options: {
          km: [
            'ខិតខំរៀនដោយស្មោះត្រង់ មិនលួចចម្លង និងគោរពពេលវេលា',
            'ទម្លាក់កំហុសឱ្យមិត្តភក្តិ',
            'បំផ្លាញសម្បត្តិសាធារណៈ',
            'មិនគោរពច្បាប់ចរាចរណ៍',
          ],
          en: [
            'Studying honestly without cheating and fulfilling commitments on time',
            'Blaming peers for mistakes',
            'Damaging school property',
            'Ignoring traffic laws',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ភាពស្មោះត្រង់សិក្សា និងការទទួលខុសត្រូវលើទង្វើខ្លួនជាមូលដ្ឋាននៃពលរដ្ឋល្អ។',
          en: 'Academic honesty and personal accountability build trustworthy citizenship.',
        },
      },
      {
        id: 'mor-dj-4',
        prompt: {
          km: 'ហេតុអ្វីបានជាពលរដ្ឋត្រូវបំពេញកាតព្វកិច្ចបង់ពន្ធស្របច្បាប់?',
          en: 'Why is paying lawful taxes an essential civic duty?',
        },
        options: {
          km: [
            'ដើម្បីបង្កើតថវិកាជាតិកសាងសាលារៀន មន្ទីរពេទ្យ ផ្លូវថ្នល់ និងសេវាសាធារណៈ',
            'ដើម្បីកាត់បន្ថយប្រាក់ខែគ្រូបង្រៀន',
            'ព្រោះជាទោសទណ្ឌព្រហ្មទណ្ឌ',
            'ដើម្បីបិទទីផ្សារក្នុងស្រុក',
          ],
          en: [
            'To fund public schools, hospitals, roads, and essential services',
            'To cut teacher salaries',
            'As a criminal punishment',
            'To close local markets',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ចំណូលពន្ធគឺជាប្រភពថវិកាជាតិសម្រាប់អភិវឌ្ឍហេដ្ឋារចនាសម្ព័ន្ធ អប់រំ និងសុខាភិបាល។',
          en: 'Tax revenue finances public education, healthcare, and national infrastructure.',
        },
      },
    ],
  },
  {
    id: 'moral-38-blessings-peace',
    subjectId: 'morality',
    tracks: ['social'],
    title: {
      km: 'មង្គល ៣៨ប្រការ និងវប្បធម៌សន្តិភាព',
      en: '38 Blessings & Culture of Peace',
    },
    subtitle: {
      km: 'មង្គលសូត្រ ការគោរពមាតាបិតា និងការដោះស្រាយជម្លោះដោយអហិង្សា',
      en: 'Mangala Sutta principles, filial respect & non-violent conflict resolution',
    },
    relatedPaperId: 'moral-social-2021',
    questions: [
      {
        id: 'mor-bp-1',
        prompt: {
          km: 'ក្នុងមង្គល ៣៨ ប្រការ មង្គលទី ១ ចែងអំពីការសេពគប់មនុស្សយ៉ាងណា?',
          en: 'What does the very first principle of the 38 Blessings (Mangala Sutta) teach about companionship?',
        },
        options: {
          km: [
            'កុំសេពគប់បុគ្គលពាល (អសប្បុរស) និងត្រូវសេពគប់បណ្ឌិត (អ្នកមានប្រាជ្ញា)',
            'ស្វែងរកទ្រព្យសម្បត្តិតែម្នាក់ឯង',
            'និយាយរិះគន់អ្នកដទៃ',
            'មិនត្រូវស្តាប់ដំបូន្មានគ្រូ',
          ],
          en: [
            'Avoid foolish/harmful company and associate with the wise',
            'Pursue wealth alone',
            'Criticize others publicly',
            'Ignore teachers’ advice',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'អសេវនា ច ពាលានំ បណ្ឌិតានញ្ច សេវនា៖ មិនគប់ពាល និងគប់បណ្ឌិត គឺជាមូលដ្ឋាននៃសេចក្តីចម្រើន។',
          en: 'Avoiding harmful influences and associating with wise mentors is the first blessing.',
        },
      },
      {
        id: 'mor-bp-2',
        prompt: {
          km: 'តើគុណធម៌សំខាន់ៗក្នុងគ្រួសារតាមមង្គល ៣៨ ប្រការរួមមានអ្វីខ្លះ?',
          en: 'Which family virtue is emphasized in the 38 Blessings?',
        },
        options: {
          km: [
            'ការឧបត្ថម្ភចិញ្ចឹមបីបាច់មាតាបិតា និងសង្គ្រោះបុត្រភរិយា',
            'ការបំបែកបំបាក់ញាតិមិត្ត',
            'ការចាយវាយខ្ជះខ្ជាយ',
            'ការមិនអត់ឱនឱ្យគ្នា',
          ],
          en: [
            'Caring for parents and supporting one’s family',
            'Dividing relatives',
            'Wasteful spending',
            'Refusing forgiveness',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'មាតាបិតុឧបដ្ឋានំ៖ ការថែទាំដឹងគុណមាតាបិតាជាមង្គលដ៏ឧត្តមក្នុងសង្គមខ្មែរ។',
          en: 'Honoring and caring for parents (Matapitu-upatthanam) is a core moral foundation.',
        },
      },
      {
        id: 'mor-bp-3',
        prompt: {
          km: 'អ្វីទៅជា "វប្បធម៌សន្តិភាព" (Culture of Peace)?',
          en: 'What characterizes a "Culture of Peace"?',
        },
        options: {
          km: [
            'ការដោះស្រាយជម្លោះដោយការសន្ទនា ការយោគយល់ និងអហិង្សា',
            'ការប្រើអំពើហិង្សាដើម្បីយកឈ្នះ',
            'ការរើសអើងជាតិសាសន៍',
            'ការបិទសិទ្ធិបញ្ចេញមតិ',
          ],
          en: [
            'Resolving conflicts through dialogue, mutual respect, and non-violence',
            'Using force to win disputes',
            'Ethnic discrimination',
            'Silencing dialogue',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'វប្បធម៌សន្តិភាពលើកកម្ពស់ការអត់ឱន សន្ទនាដោយសន្តិវិធី និងការរស់នៅដោយសុខដុមរមនា។',
          en: 'A culture of peace prioritizes dialogue, empathy, tolerance, and non-violent resolution.',
        },
      },
      {
        id: 'mor-bp-4',
        prompt: {
          km: 'គោលការណ៍ "ពហុវិជ្ជា" និង "វិន័យល្អ" ក្នុងមង្គល ៣៨ ប្រការជួយសិស្សយ៉ាងដូចម្តេច?',
          en: 'How do "sound learning" and "self-discipline" in the 38 Blessings help students?',
        },
        options: {
          km: [
            'បង្កើតចំណេះវិជ្ជាជ្រៅជ្រះ និងអាកប្បកិរិយាសុភាពរាបសា',
            'បង្កើនភាពខ្ជិលច្រអូស',
            'បដិសេធការសិក្សាវិទ្យាសាស្ត្រ',
            'បង្កជម្លោះក្នុងថ្នាក់រៀន',
          ],
          en: [
            'Build deep competence paired with ethical self-control',
            'Encourage laziness',
            'Reject scientific learning',
            'Create classroom conflict',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ពាហុសច្ចំ (ចេះដឹងច្រើន) និងវិនយោ ច សុសិក្ខិតោ (វិន័យល្អ) នាំមកនូវជោគជ័យទាំងការសិក្សា និងវិជ្ជាជីវៈ។',
          en: 'Broad knowledge combined with good discipline builds lifelong personal and academic success.',
        },
      },
    ],
  },
  {
    id: 'moral-human-rights',
    subjectId: 'morality',
    tracks: ['social'],
    title: {
      km: 'សិទ្ធិមនុស្ស សិទ្ធិនារី និងសិទ្ធិកុមារ',
      en: 'Human Rights, Women’s Rights & Children’s Rights',
    },
    subtitle: {
      km: 'សេចក្តីប្រកាសសកល ១៩៤៨ សមភាពយេនឌ័រ និងសិទ្ធិកុមារទាំង ៤ ក្រុម',
      en: 'UDHR 1948, gender equality & the 4 pillars of children’s rights',
    },
    relatedPaperId: 'moral-social-2021',
    questions: [
      {
        id: 'mor-hr-1',
        prompt: {
          km: 'សេចក្តីប្រកាសជាសកលស្តីពីសិទ្ធិមនុស្ស (UDHR) ត្រូវបានអង្គការសហប្រជាជាតិអនុម័តនៅថ្ងៃណា?',
          en: 'When did the United Nations adopt the Universal Declaration of Human Rights (UDHR)?',
        },
        options: {
          km: ['១០ ធ្នូ ១៩៤៨', '២៤ តុលា ១៩៤៥', '២០ វិច្ឆិកា ១៩៨៩', '២៣ តុលា ១៩៩១'],
          en: ['10 December 1948', '24 October 1945', '20 November 1989', '23 October 1991'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ថ្ងៃទី ១០ ខែធ្នូ ឆ្នាំ ១៩៤៨ ត្រូវបានប្រារព្ធជាទិវាសិទ្ធិមនុស្សអន្តរជាតិជារៀងរាល់ឆ្នាំ។',
          en: 'Adopted on 10 December 1948 (celebrated annually as International Human Rights Day).',
        },
      },
      {
        id: 'mor-hr-2',
        prompt: {
          km: 'សិទ្ធិមូលដ្ឋានទាំង ៤ ក្រុមរបស់កុមារ (CRC 1989) រួមមានអ្វីខ្លះ?',
          en: 'What are the four core categories of children’s rights under the 1989 UN Convention (CRC)?',
        },
        options: {
          km: [
            'សិទ្ធិរស់រានមានជីវិត សិទ្ធិអភិវឌ្ឍន៍ សិទ្ធិទទួលការការពារ និងសិទ្ធិចូលរួម',
            'សិទ្ធិបើកបរ សិទ្ធិបោះឆ្នោត សិទ្ធិឈរឈ្មោះ និងសិទ្ធិបង់ពន្ធ',
            'សិទ្ធិធ្វើពាណិជ្ជកម្ម និងសិទ្ធិយោធា',
            'គ្មានចម្លើយត្រឹមត្រូវ',
          ],
          en: [
            'Survival, Development, Protection, and Participation',
            'Driving, Voting, Running for office, and Taxing',
            'Commercial and military rights',
            'None of the above',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'កុមារគ្រប់រូប (អាយុក្រោម ១៨ ឆ្នាំ) មានសិទ្ធិរស់រាន អភិវឌ្ឍន៍ ការពារ និងចូលរួម។',
          en: 'Under the UN CRC, every child under 18 holds Survival, Development, Protection, and Participation rights.',
        },
      },
      {
        id: 'mor-hr-3',
        prompt: {
          km: 'អនុសញ្ញា CEDAW ផ្តោតលើការលុបបំបាត់ការរើសអើងប្រឆាំងនឹងក្រុមណា?',
          en: 'What does the international UN treaty CEDAW work to eliminate?',
        },
        options: {
          km: [
            'គ្រប់ទម្រង់នៃការរើសអើងប្រឆាំងនឹងស្ត្រី (សិទ្ធិនារី)',
            'ពន្ធគយពាណិជ្ជកម្ម',
            'ច្បាប់ចរាចរណ៍ផ្លូវទឹក',
            'ការប្រឡងបាក់ឌុប',
          ],
          en: [
            'All forms of discrimination against women',
            'Trade tariffs',
            'Maritime navigation rules',
            'National school exams',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'CEDAW ការពារសមភាពយេនឌ័រ សិទ្ធិអប់រំ ការងារ និងការចូលរួមនយោបាយរបស់ស្ត្រី។',
          en: 'CEDAW protects women’s equal rights in education, employment, law, and leadership.',
        },
      },
      {
        id: 'mor-hr-4',
        prompt: {
          km: 'នៅកម្ពុជា ស្ត្រី និងបុរសមានសិទ្ធិដូចម្តេចក្នុងការទទួលបានប្រាក់ឈ្នួលចំពោះការងារដូចគ្នា?',
          en: 'Under Cambodia’s Constitution (Article 36), how are women and men treated regarding equal work?',
        },
        options: {
          km: [
            'ទទួលបានប្រាក់បំណាច់ និងសិទ្ធិស្មើគ្នាចំពោះការងារដូចគ្នា',
            'បុរសទទួលបានប្រាក់ឈ្នួលខ្ពស់ជាងជានិច្ច',
            'ស្ត្រីមិនអាចធ្វើការរដ្ឋបានទេ',
            'អាស្រ័យលើភេទ',
          ],
          en: [
            'Equal pay for equal work without gender discrimination',
            'Men always earn more',
            'Women are barred from civil service',
            'Depends on gender',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'មាត្រា ៣៦ នៃរដ្ឋធម្មនុញ្ញធានាសិទ្ធិទទួលប្រាក់បំណាច់ស្មើគ្នាចំពោះការងារដូចគ្នារវាងស្ត្រី និងបុរស។',
          en: 'Article 36 guarantees women and men equal pay for equal work.',
        },
      },
    ],
  },
  {
    id: 'moral-institutions',
    subjectId: 'morality',
    tracks: ['social'],
    title: {
      km: 'ស្ថាប័ននីតិប្រតិបត្តិ តុលាការ និងរដ្ឋបាលមូលដ្ឋានកម្ពុជា',
      en: 'Executive, Judiciary & Local Administration in Cambodia',
    },
    subtitle: {
      km: 'ការបែងចែកអំណាចទាំង ៣ ក្រុមប្រឹក្សាឃុំ-សង្កាត់ និងវិមជ្ឈការ',
      en: 'Separation of powers, courts & commune/province governance',
    },
    relatedPaperId: 'moral-social-2021',
    questions: [
      {
        id: 'mor-in-1',
        prompt: {
          km: 'យោងតាមមាត្រា ៥១ នៃរដ្ឋធម្មនុញ្ញ អំណាចរដ្ឋទាំង ៣ នៅកម្ពុជាត្រូវបានបែងចែកដាច់ពីគ្នាជាអ្វីខ្លះ?',
          en: 'Under Article 51 of the Constitution, what are Cambodia’s three separated branches of power?',
        },
        options: {
          km: [
            'អំណាចនីតិប្បញ្ញត្តិ អំណាចនីតិប្រតិបត្តិ និងអំណាចតុលាការ',
            'ឃុំ ស្រុក និងខេត្ត',
            'ភូមិ ឃុំ និងរាជធានី',
            'រដ្ឋសភា រាជបណ្ឌិត្យសភា និងធនាគារជាតិ',
          ],
          en: [
            'Legislative, Executive, and Judicial branches',
            'Commune, District, and Province',
            'Village, Commune, and Capital',
            'Parliament, Academy, and Central Bank',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'នីតិប្បញ្ញត្តិ (រដ្ឋសភា/ព្រឹទ្ធសភា) អនុម័តច្បាប់ · នីតិប្រតិបត្តិ (រាជរដ្ឋាភិបាល) អនុវត្តច្បាប់ · តុលាការ ជម្រះក្តីដោយឯករាជ្យ។',
          en: 'Legislative makes laws, Executive enforces them, and Judiciary adjudicates independently.',
        },
      },
      {
        id: 'mor-in-2',
        prompt: {
          km: 'តើប្រជាពលរដ្ឋខ្មែរត្រូវមានអាយុយ៉ាងតិចប៉ុន្មានឆ្នាំ ដើម្បីមានសិទ្ធិបោះឆ្នោត និងអាយុប៉ុន្មានឆ្នាំដើម្បីឈរឈ្មោះជាតំណាងរាស្ត្រ?',
          en: 'What are the minimum ages to vote and to run as a National Assembly candidate in Cambodia?',
        },
        options: {
          km: [
            'បោះឆ្នោត ១៨ ឆ្នាំ · ឈរឈ្មោះតំណាងរាស្ត្រ ២៥ ឆ្នាំ',
            'បោះឆ្នោត ១៦ ឆ្នាំ · ឈរឈ្មោះ ២១ ឆ្នាំ',
            'បោះឆ្នោត ២០ ឆ្នាំ · ឈរឈ្មោះ ៣០ ឆ្នាំ',
            'បោះឆ្នោត ១៨ ឆ្នាំ · ឈរឈ្មោះ ១៨ ឆ្នាំ',
          ],
          en: [
            '18 years to vote · 25 years to run for National Assembly',
            '16 years to vote · 21 years to run',
            '20 years to vote · 30 years to run',
            '18 years to vote · 18 years to run',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'មាត្រា ៣៤ និង ៧៦ នៃរដ្ឋធម្មនុញ្ញកំណត់អាយុបោះឆ្នោត ≥ ១៨ ឆ្នាំ និងអាយុឈរឈ្មោះតំណាងរាស្ត្រ ≥ ២៥ ឆ្នាំ។',
          en: 'Citizens aged 18+ may vote; National Assembly candidates must be at least 25.',
        },
      },
      {
        id: 'mor-in-3',
        prompt: {
          km: 'ប្រព័ន្ធតុលាការនៅកម្ពុជាមាន ៣ ថ្នាក់ គឺអ្វីខ្លះ?',
          en: 'What are the three tiers of Cambodia’s judicial court hierarchy?',
        },
        options: {
          km: [
            'សាលាដំបូង សាលាឧទ្ធរណ៍ និងតុលាការកំពូល',
            'តុលាការឃុំ ស្រុក និងខេត្ត',
            'ក្រសួងយុត្តិធម៌ រដ្ឋសភា និងព្រឹទ្ធសភា',
            'ក្រុមប្រឹក្សាឃុំ និងរដ្ឋបាលខេត្ត',
          ],
          en: [
            'Courts of First Instance, Courts of Appeal, and Supreme Court',
            'Commune, District, and Provincial courts',
            'Ministry of Justice, Assembly, and Senate',
            'Commune Council and Provincial Hall',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ស្ថាប័នជម្រះក្តីមាន ៣ ថ្នាក់៖ សាលាដំបូង (រាជធានី-ខេត្ត) → សាលាឧទ្ធរណ៍ → តុលាការកំពូល។',
          en: 'Cambodia’s three-tier court system runs from First Instance → Appeal → Supreme Court.',
        },
      },
      {
        id: 'mor-in-4',
        prompt: {
          km: 'រដ្ឋបាលថ្នាក់ក្រោមជាតិនៅកម្ពុជាដែលប្រជាពលរដ្ឋបោះឆ្នោតដោយផ្ទាល់រៀងរាល់ ៥ ឆ្នាំម្តងគឺអ្វី?',
          en: 'Which sub-national local council in Cambodia is directly elected by citizens every 5 years?',
        },
        options: {
          km: [
            'ក្រុមប្រឹក្សាឃុំ-សង្កាត់',
            'អភិបាលខេត្ត',
            'ចៅក្រមតុលាការកំពូល',
            'រដ្ឋមន្ត្រីក្រសួងមហាផ្ទៃ',
          ],
          en: [
            'Commune / Sangkat Councils',
            'Provincial Governors',
            'Supreme Court Justices',
            'Interior Ministers',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ការបោះឆ្នោតជ្រើសរើសក្រុមប្រឹក្សាឃុំ-សង្កាត់ធ្វើឡើងដោយផ្ទាល់ ជាសកល និងរៀងរាល់ ៥ ឆ្នាំម្តង។',
          en: 'Commune/Sangkat Councilors are directly elected by local voters every five years.',
        },
      },
    ],
  },

  // ============================================================================
  // 9. EARTH SCIENCE — SOCIAL SCIENCE TRACK (4 Core Exam Topics)
  // ============================================================================
  {
    id: 'earth-minerals-soil',
    subjectId: 'earth',
    tracks: ['social'],
    title: {
      km: 'ធនធានរ៉ែ សិលា និងដំណើរពុកផុយនៃដី',
      en: 'Minerals, Rocks & Soil Weathering',
    },
    subtitle: {
      km: 'មាត្រដ្ឋានភាពរឹង Mohs, សិលាទាំង ៣ ប្រភេទ និងការកកើតដី',
      en: 'Mohs hardness scale, 3 rock types & physical/chemical weathering',
    },
    relatedPaperId: 'earth-social-2022',
    questions: [
      {
        id: 'ea-ms-1',
        prompt: {
          km: 'ក្នុងមាត្រដ្ឋានភាពរឹងរ៉ែ Mohs តើរ៉ែលេខ ១ (ទន់បំផុត) និងលេខ ១០ (រឹងបំផុត) គឺជារ៉ែអ្វី?',
          en: 'On the Mohs hardness scale, which minerals represent 1 (softest) and 10 (hardest)?',
        },
        options: {
          km: ['1 = Talc, 10 = Diamond (ពេជ្រ)', '1 = Quartz, 10 = Gold', '1 = Calcite, 10 = Iron', '1 = Mica, 10 = Ruby'],
          en: ['1 = Talc, 10 = Diamond', '1 = Quartz, 10 = Gold', '1 = Calcite, 10 = Iron', '1 = Mica, 10 = Ruby'],
        },
        correctIndex: 0,
        explanation: {
          km: 'មាត្រដ្ឋាន Mohs ចាប់ពីកម្រិត ១ = តាល់ (Talc) ដល់កម្រិត ១០ = ពេជ្រ (Diamond)។',
          en: 'Mohs hardness scale runs from Talc (1) up to Diamond (10).',
        },
      },
      {
        id: 'ea-ms-2',
        prompt: {
          km: 'សិលាប្រភេទណាដែលកកើតពីការត្រជាក់ និងកកនៃម៉ាក់ម៉ា ឬកំអែភ្នំភ្លើង?',
          en: 'Which rock category forms from the cooling and solidification of magma or lava?',
        },
        options: {
          km: ['សិលាកម្ទេចកំណ (Sedimentary)', 'សិលាម៉ាក់ម៉ា / អគ្គី (Igneous)', 'សិលាប្រែប្រួល (Metamorphic)', 'ដីឥដ្ឋ'],
          en: ['Sedimentary rock', 'Igneous rock', 'Metamorphic rock', 'Clay'],
        },
        correctIndex: 1,
        explanation: {
          km: 'សិលាម៉ាក់ម៉ា (Igneous) កកើតពីម៉ាក់ម៉ាត្រជាក់ (ឧ. ក្រានីត និងបាសាល់)។',
          en: 'Igneous rocks (such as granite and basalt) crystallize from molten magma or lava.',
        },
      },
      {
        id: 'ea-ms-3',
        prompt: {
          km: 'អ្វីជាភាពខុសគ្នារវាងការពុកផុយមេកានិច និងការពុកផុយគីមីនៃសិលា?',
          en: 'What distinguishes mechanical weathering from chemical weathering of rock?',
        },
        options: {
          km: [
            'ពុកផុយមេកានិចបំបែកទំហំដោយមិនប្តូរធាតុគីមី; ពុកផុយគីមីផ្លាស់ប្តូរសមាសធាតុរ៉ែ',
            'ពុកផុយមេកានិចកើតតែក្នុងសមុទ្រ',
            'ពុកផុយគីមីមិនពាក់ព័ន្ធនឹងទឹកទេ',
            'ដូចគ្នាទាំងស្រុង',
          ],
          en: [
            'Mechanical breaks rock into smaller pieces without changing composition; chemical alters mineral composition',
            'Mechanical happens only underwater',
            'Chemical never involves water',
            'They are identical',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ការពុកផុយមេកានិចបំបែកដុំថ្មជាបំណែកតូចៗ ចំណែកពុកផុយគីមី (អុកស៊ីតកម្ម អ៊ីដ្រូលីស) បំប្លែងរ៉ែថ្មី។',
          en: 'Mechanical weathering fragments rock physically; chemical weathering alters minerals via reactions like oxidation.',
        },
      },
      {
        id: 'ea-ms-4',
        prompt: {
          km: 'សិលាកម្ទេចកំណ (Sedimentary rocks) ដូចជាថ្មកំបោរ និងថ្មភក់ ច្រើនផ្ទុកអ្វីដែលជួយសិក្សាប្រវត្តិផែនដី?',
          en: 'Sedimentary rocks like limestone and shale frequently preserve what clues to Earth’s past?',
        },
        options: {
          km: ['ហ្វូស៊ីល (Fossils)', 'លោហៈធាតុប្លាទីន', 'ម៉ាក់ម៉ារាវ', 'ផ្កាភ្លើង'],
          en: ['Fossils', 'Liquid magma', 'Pure platinum', 'Solar wind'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ស្រទាប់សិលាកម្ទេចកំណរក្សាទុកហ្វូស៊ីលសត្វ និងរុក្ខជាតិបុរាណពីសម័យភូគព្ភសាស្ត្រផ្សេងៗ។',
          en: 'Layered sedimentary strata preserve fossils used to reconstruct Earth’s biological history.',
        },
      },
    ],
  },
  {
    id: 'earth-solar-gravity',
    subjectId: 'earth',
    tracks: ['social'],
    title: {
      km: 'ប្រព័ន្ធព្រះអាទិត្យ ទំនាញសកល និងចលនាភព',
      en: 'Solar System, Universal Gravitation & Planetary Motion',
    },
    subtitle: {
      km: 'ភពទាំង ៨ ច្បាប់ Kepler និងទំនាញសកលរបស់លោក Newton',
      en: 'The 8 planets, Kepler’s laws & Newton’s universal gravitation',
    },
    relatedPaperId: 'earth-social-2022',
    questions: [
      {
        id: 'ea-sg-1',
        prompt: {
          km: 'តាមច្បាប់ទី ១ របស់ Kepler តើភពទាំងឡាយគោចរជុំវិញព្រះអាទិត្យតាមគន្លងរាងអ្វី?',
          en: 'According to Kepler’s First Law, what shape are planetary orbits around the Sun?',
        },
        options: {
          km: ['រាងអេលីប (Ellipse) ដែលមានព្រះអាទិត្យនៅកំណុំមួយ', 'បន្ទាត់ត្រង់', 'រាងការ៉េ', 'រាងប៉ារ៉ាបូល'],
          en: ['An ellipse with the Sun at one focus', 'A straight line', 'A square', 'A parabola'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ភពនីមួយៗវិលជុំវិញព្រះអាទិត្យតាមគន្លងអេលីប ដែលព្រះអាទិត្យស្ថិតនៅកំណុំមួយនៃអេលីប។',
          en: 'Kepler’s First Law states each planet orbits in an ellipse with the Sun at one focus.',
        },
      },
      {
        id: 'ea-sg-2',
        prompt: {
          km: 'លំដាប់ភពថ្ម (Terrestrial Planets) ទាំង ៤ ដែលនៅជិតព្រះអាទិត្យជាងគេគឺភពណាខ្លះ?',
          en: 'Which four rocky (terrestrial) planets lie closest to the Sun in order?',
        },
        options: {
          km: [
            'ពុធ (Mercury), សុក្រ (Venus), ផែនដី (Earth), អង្គារ (Mars)',
            'ព្រហស្បតិ៍, សៅរ៍, អ៊ុយរ៉ានុស, ណិបទូន',
            'ផែនដី, អង្គារ, ព្រហស្បតិ៍, សៅរ៍',
            'ពុធ, ផែនដី, សុក្រ, អង្គារ',
          ],
          en: [
            'Mercury, Venus, Earth, Mars',
            'Jupiter, Saturn, Uranus, Neptune',
            'Earth, Mars, Jupiter, Saturn',
            'Mercury, Earth, Venus, Mars',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ភពក្នុង (ថ្ម) ទាំង ៤ គឺ ពុធ → សុក្រ → ផែនដី → អង្គារ បន្ទាប់មកទើបជាភពឧស្ម័នខាងក្រៅ។',
          en: 'From closest outward: Mercury, Venus, Earth, and Mars are the four rocky inner planets.',
        },
      },
      {
        id: 'ea-sg-3',
        prompt: {
          km: 'តាមច្បាប់ទំនាញសកល F = G·(m₁m₂)/r² បើចម្ងាយ r កើនឡើង ២ ដង តើកម្លាំងទំនាញ F ប្រែប្រួលយ៉ាងណា?',
          en: 'By Newton’s law F = G·(m₁m₂)/r², if separation distance r doubles, what happens to force F?',
        },
        options: {
          km: ['ថយចុះនៅសល់ 1/4', 'ថយចុះពាក់កណ្តាល (1/2)', 'កើនឡើង 2 ដង', 'កើនឡើង 4 ដង'],
          en: ['Decreases to 1/4', 'Halves (1/2)', 'Doubles (2×)', 'Quadruples (4×)'],
        },
        correctIndex: 0,
        explanation: {
          km: 'F ច្រាសសមាមាត្រនឹង r² ⇒ ពេល r កើន 2 ដង នោះ F ថយ 2² = 4 ដង (នៅសល់ 1/4)។',
          en: 'Gravity obeys an inverse-square law (1/r²): doubling r reduces F by 2² = 4.',
        },
      },
      {
        id: 'ea-sg-4',
        prompt: {
          km: 'តើរដូវកាលទាំង ៤ នៅលើផែនដីកើតឡើងដោយសារមូលហេតុចម្បងអ្វី?',
          en: 'What is the primary cause of Earth’s changing seasons?',
        },
        options: {
          km: [
            'អ័ក្សរង្វិលជុំផែនដីផ្អៀង ២៣.៥° ខណៈផែនដីគោចរជុំវិញព្រះអាទិត្យ',
            'ចម្ងាយពីព្រះអាទិត្យប្រែប្រួលខ្លាំង',
            'ចលនាទឹកសមុទ្រ',
            'ពន្លឺព្រះចន្ទ',
          ],
          en: [
            'Earth’s 23.5° axial tilt as it orbits the Sun',
            'Large distance changes from the Sun',
            'Ocean currents alone',
            'Moonlight phases',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ភាពផ្អៀង ២៣.៥° នៃអ័ក្សផែនដីធ្វើឱ្យអឌ្ឍគោលខាងជើង និងខាងត្បូងទទួលមុំពន្លឺព្រះអាទិត្យខុសគ្នាពេញមួយឆ្នាំ។',
          en: 'Earth’s 23.5° axial tilt varies solar angle and daylight duration across hemispheres.',
        },
      },
    ],
  },
  {
    id: 'earth-warming-ozone',
    subjectId: 'earth',
    tracks: ['social'],
    title: {
      km: 'កំណើនកម្ដៅផែនដី និងការបំផ្លាញស្រទាប់អូសូន',
      en: 'Global Warming & Ozone Layer Depletion',
    },
    subtitle: {
      km: 'ឥទ្ធិពលផ្ទះកញ្ចក់ (CO₂, CH₄) និងសារធាតុ CFCs បំផ្លាញអូសូន O₃',
      en: 'Greenhouse gases (CO₂, CH₄) & CFC impact on stratospheric ozone',
    },
    relatedPaperId: 'earth-social-2022',
    questions: [
      {
        id: 'ea-wo-1',
        prompt: {
          km: 'ឧស្ម័នផ្ទះកញ្ចក់ចម្បងដែលបំភាយចេញពីចំហេះឥន្ធនៈហ្វូស៊ីល និងបង្កកំណើនកម្ដៅផែនដីគឺអ្វី?',
          en: 'Which primary greenhouse gas from fossil fuel combustion drives global warming?',
        },
        options: {
          km: ['អាសូត (N₂)', 'ឧស្ម័នកាបូនិក (CO₂)', 'អុកស៊ីសែន (O₂)', 'អាកុង (Ar)'],
          en: ['Nitrogen (N₂)', 'Carbon dioxide (CO₂)', 'Oxygen (O₂)', 'Argon (Ar)'],
        },
        correctIndex: 1,
        explanation: {
          km: 'CO₂ (រួមជាមួយ CH₄ និង N₂O) ស្រូបកាំរស្មីកម្តៅអាំងហ្វ្រារូស ទប់កម្តៅក្នុងបរិយាកាសផែនដី។',
          en: 'CO₂ traps outgoing infrared radiation in the atmosphere, warming Earth’s surface.',
        },
      },
      {
        id: 'ea-wo-2',
        prompt: {
          km: 'ស្រទាប់អូសូន (O₃) ស្ថិតក្នុងស្រទាប់បរិយាកាសណា និងមានតួនាទីការពារអ្វី?',
          en: 'In which atmospheric layer is the ozone layer (O₃) located, and what does it block?',
        },
        options: {
          km: [
            'ស្រទាប់ស្ត្រាតូស្វ៊ែរ (Stratosphere) — ស្រូបកាំរស្មីអ៊ុលត្រាវីយ៉ូឡេ (UV) គ្រោះថ្នាក់',
            'ស្រទាប់ត្រូប៉ូស្វ៊ែរ — បង្កើតភ្លៀង',
            'ស្រទាប់មេសូស្វ៊ែរ — ឆេះអាចម៍ផ្កាយ',
            'ស្រទាប់ស្នូលផែនដី',
          ],
          en: [
            'Stratosphere — absorbs harmful solar ultraviolet (UV) radiation',
            'Troposphere — creates rain',
            'Mesosphere — burns meteors',
            'Earth’s core',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ស្រទាប់អូសូននៅកម្ពស់ ~20–30 km ក្នុងស្ត្រាតូស្វ៊ែរស្រូបកាំរស្មី UV-B ការពារមហារីកស្បែក និងជីវិតលើផែនដី។',
          en: 'Stratospheric ozone absorbs harmful UV-B rays, protecting living organisms from DNA damage.',
        },
      },
      {
        id: 'ea-wo-3',
        prompt: {
          km: 'សារធាតុគីមីឧស្សាហកម្មណាដែលជាមូលហេតុចម្បងបំផ្លាញស្រទាប់អូសូន (ត្រូវបានហាមឃាត់ដោយពិធីសារ Montreal)?',
          en: 'Which industrial chemical group primarily depletes the ozone layer (phased out by the Montreal Protocol)?',
        },
        options: {
          km: ['ក្លរ៉ូភ្លុយអរ៉ូកាបូន (CFCs)', 'ចំហាយទឹក (H₂O)', 'អុកស៊ីសែន (O₂)', 'ហេល្យូម (He)'],
          en: ['Chlorofluorocarbons (CFCs)', 'Water vapor (H₂O)', 'Oxygen (O₂)', 'Helium (He)'],
        },
        correctIndex: 0,
        explanation: {
          km: 'អាតូមក្លរ (Cl) បំបែកចេញពី CFCs ទៅប្រតិកម្មបំផ្លាញម៉ូលេគុលអូសូន O₃ ក្នុងស្រទាប់ស្ត្រាតូស្វ៊ែរ។',
          en: 'Chlorine radicals released from CFCs catalytically break down O₃ molecules.',
        },
      },
      {
        id: 'ea-wo-4',
        prompt: {
          km: 'ផលវិបាកផ្ទាល់មួយនៃការកើនឡើងសីតុណ្ហភាពសកលគឺអ្វី?',
          en: 'What is a direct global consequence of rising average global temperatures?',
        },
        options: {
          km: [
            'ការរលាយទឹកកកតំបន់ប៉ូល និងកំណើនកម្ពស់នីវ៉ូទឹកសមុទ្រ',
            'ការថយចុះកម្រិតទឹកសមុទ្រ',
            'ទំហំផែនដីរួមតូច',
            'ការឈប់វិលរបស់ផែនដី',
          ],
          en: [
            'Melting polar ice/glaciers and rising global sea levels',
            'Falling sea levels',
            'Shrinking Earth radius',
            'Earth stopping rotation',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'កម្ដៅកើនឡើងធ្វើឱ្យផ្ទាំងទឹកកករលាយ និងទឹកសមុទ្ររីកមាឌ បង្កគ្រោះទឹកជំនន់តាមតំបន់ឆ្នេរ។',
          en: 'Thermal expansion of oceans and melting ice sheets drive sea-level rise and extreme weather.',
        },
      },
    ],
  },
  {
    id: 'earth-fossil-sustainability',
    subjectId: 'earth',
    tracks: ['social'],
    title: {
      km: 'ឥន្ធនៈផូស៊ីល និងនិរន្តរភាពបរិស្ថាន',
      en: 'Fossil Fuels & Environmental Sustainability',
    },
    subtitle: {
      km: 'ធ្យូងថ្ម ប្រេងកាត ឧស្ម័នធម្មជាតិ និងថាមពលកកើតឡើងវិញ',
      en: 'Coal, oil, natural gas & renewable clean energy transitions',
    },
    relatedPaperId: 'earth-social-2022',
    questions: [
      {
        id: 'ea-fs-1',
        prompt: {
          km: 'ឥន្ធនៈផូស៊ីលសំខាន់ៗទាំង ៣ ប្រភេទដែលមិនអាចកកើតឡើងវិញបានក្នុងរយៈពេលខ្លីគឺអ្វីខ្លះ?',
          en: 'What are the three primary non-renewable fossil fuels?',
        },
        options: {
          km: [
            'ធ្យូងថ្ម ប្រេងកាត និងឧស្ម័នធម្មជាតិ',
            'ពន្លឺព្រះអាទិត្យ ខ្យល់ និងវារីអគ្គិសនី',
            'អូសូន អុកស៊ីសែន និងអាសូត',
            'ថ្មកំបោរ ខ្សាច់ និងដីឥដ្ឋ',
          ],
          en: [
            'Coal, Petroleum (Crude Oil), and Natural Gas',
            'Solar, Wind, and Hydro',
            'Ozone, Oxygen, and Nitrogen',
            'Limestone, Sand, and Clay',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ធ្យូងថ្ម ប្រេងកាត និងឧស្ម័នធម្មជាតិ កកើតពីសំណល់ភាវៈរស់រាប់លានឆ្នាំមកហើយ។',
          en: 'Coal, crude oil, and natural gas formed over millions of years from ancient organic matter.',
        },
      },
      {
        id: 'ea-fs-2',
        prompt: {
          km: 'ប្រព័ន្ធសូឡាអានុភាព 2 kW ផលិតអគ្គិសនីរយៈពេល 5 ម៉ោង។ គណនាថាមពលសរុបជា kWh។',
          en: 'A 2 kW solar array runs for 5 hours. Calculate total electrical energy generated in kWh.',
        },
        options: {
          km: ['7 kWh', '10 kWh', '2.5 kWh', '0.4 kWh'],
          en: ['7 kWh', '10 kWh', '2.5 kWh', '0.4 kWh'],
        },
        correctIndex: 1,
        explanation: {
          km: 'E = P × t = 2 kW × 5 h = 10 kWh។',
          en: 'Energy E = Power × time = 2 kW × 5 h = 10 kWh.',
        },
      },
      {
        id: 'ea-fs-3',
        prompt: {
          km: 'ប្រភពថាមពលណាមួយជា "ថាមពលកកើតឡើងវិញ" (Renewable Energy) និងមិនបញ្ចេញ CO₂ ពេលដំណើរការ?',
          en: 'Which energy source is renewable and emits zero CO₂ during electricity generation?',
        },
        options: {
          km: ['ថាមពលពន្លឺព្រះអាទិត្យ និងខ្យល់', 'ធ្យូងថ្ម', 'ប្រេងម៉ាស៊ូត', 'ប្រេងកាតឆៅ'],
          en: ['Solar and Wind power', 'Coal', 'Diesel fuel', 'Crude oil'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ថាមពលពន្លឺព្រះអាទិត្យ ខ្យល់ និងវារីអគ្គិសនី គឺជាប្រភពថាមពលស្អាតកកើតឡើងវិញ។',
          en: 'Solar, wind, and hydro power replenish naturally without fossil carbon combustion.',
        },
      },
      {
        id: 'ea-fs-4',
        prompt: {
          km: 'គោលគំនិត "ការអភិវឌ្ឍប្រកបដោយចីរភាព" (Sustainable Development) មានន័យយ៉ាងដូចម្តេច?',
          en: 'What is the core definition of "Sustainable Development"?',
        },
        options: {
          km: [
            'បំពេញតម្រូវការបច្ចុប្បន្នដោយមិនបំផ្លាញសមត្ថភាពផ្គត់ផ្គង់សម្រាប់មនុស្សជំនាន់ក្រោយ',
            'ប្រើប្រាស់ធនធានធម្មជាតិឱ្យអស់ភ្លាមៗក្នុងជំនាន់នេះ',
            'បញ្ឈប់ការអភិវឌ្ឍសេដ្ឋកិច្ចទាំងអស់',
            'ដុតព្រៃឈើធ្វើឧស្សាហកម្ម',
          ],
          en: [
            'Meeting present needs without compromising future generations’ ability to meet theirs',
            'Consuming all resources immediately',
            'Halting all economic activity',
            'Clearing forests for factories',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ចីរភាពតុល្យភាពរវាងកំណើនសេដ្ឋកិច្ច សុខុមាលភាពសង្គម និងការការពារបរិស្ថាន។',
          en: 'Sustainability balances economic growth, social equity, and environmental stewardship.',
        },
      },
    ],
  },

  // ============================================================================
  // 10. KHMER LITERATURE — BOTH TRACKS (3 Exam Skill Modules)
  // ============================================================================
  {
    id: 'khmer-culture-history',
    subjectId: 'khmer',
    tracks: ['science', 'social'],
    isSkillModule: true,
    title: {
      km: 'វប្បធម៌ទូទៅ និងប្រវត្តិអក្សរសិល្ប៍ខ្មែរ',
      en: 'General Culture & History of Khmer Literature',
    },
    subtitle: {
      km: 'ប្រវត្តិស្នាដៃល្បីៗ អ្នកនិពន្ធ ទំនៀមទម្លាប់ និងចលនាអក្សរសិល្ប៍',
      en: 'Classic authors, literary movements & Cambodian cultural heritage',
    },
    relatedPaperId: 'khmer-social-2024',
    questions: [
      {
        id: 'kh-ch-1',
        prompt: {
          km: 'រឿង "ផ្កាស្រពោន" ដែលឆ្លុះបញ្ចាំងពីទំនាស់រវាងប្រពៃណី និងស្នេហាយុវវ័យ និពន្ធដោយអ្នកនិពន្ធរូបណា?',
          en: 'Who authored the classic Cambodian novel "Phka Srapon" (Wilted Flower, 1949)?',
        },
        options: {
          km: ['លោក រីម គីន', 'លោក នូ ហាច', 'លោក ញ៉ុក ថែម', 'ព្រះភិក្ខុ សោម'],
          en: ['Rim Kin', 'Nou Hach', 'Nhok Them', 'Preah Bhikkhu Som'],
        },
        correctIndex: 1,
        explanation: {
          km: 'លោក នូ ហាច និពន្ធរឿង "ផ្កាស្រពោន" (១៩៤៩) ចំណែកលោក រីម គីន និពន្ធរឿង "សុផាត" (១៩៣៨)។',
          en: 'Nou Hach wrote "Phka Srapon" (1949), while Rim Kin wrote "Sophat" (1938).',
        },
      },
      {
        id: 'kh-ch-2',
        prompt: {
          km: 'តើអ្នកនិពន្ធរឿង "កុលាបប៉ៃលិន" និងរឿង "ទុំទាវ" គឺជាលោកគ្រូ អ្នកនិពន្ធរូបណា?',
          en: 'Who are the famous authors of "Kolab Pailin" and "Tum Teav", respectively?',
        },
        options: {
          km: [
            'លោក ញ៉ុក ថែម និង ព្រះភិក្ខុ សោម',
            'លោក នូ ហាច និង លោក រីម គីន',
            'លោក គង់ ប៊ុនឈឿន និង ក្រម ង៉ុយ',
            'លោក ជួន ណាត និង លោក អ៊ុម ឈឹម',
          ],
          en: [
            'Nhok Them and Preah Bhikkhu Som',
            'Nou Hach and Rim Kin',
            'Kong Bunchhoeun and Kram Ngoy',
            'Chuon Nath and Oum Chhim',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'រឿង "កុលាបប៉ៃលិន" និពន្ធដោយលោក ញ៉ុក ថែម និងរឿង "ទុំទាវ" ជាស្នាដៃព្រះភិក្ខុ សោម (១៩១៥)។',
          en: 'Nhok Them wrote "Kolab Pailin" and Venerable Preah Bhikkhu Som composed "Tum Teav".',
        },
      },
      {
        id: 'kh-ch-3',
        prompt: {
          km: 'បទកំណាព្យ "បទកាកគតិ" មានទម្រង់ ១ វគ្គប៉ុន្មានឃ្លា និង ១ ឃ្លាប៉ុន្មានព្យាង្គ?',
          en: 'What is the stanza structure of the Khmer poetic meter "Bot Kakagati"?',
        },
        options: {
          km: ['៤ ឃ្លា × ៧ ព្យាង្គ', '៧ ឃ្លា × ៤ ព្យាង្គ', '៤ ឃ្លា × ៨ ព្យាង្គ', '៦ ឃ្លា × ៦ ព្យាង្គ'],
          en: ['4 lines × 7 syllables', '7 lines × 4 syllables', '4 lines × 8 syllables', '6 lines × 6 syllables'],
        },
        correctIndex: 1,
        explanation: {
          km: 'បទកាកគតិមាន ៧ ឃ្លា ក្នុង ១ វគ្គ និង ១ ឃ្លាមាន ៤ ព្យាង្គ (ច្រើនប្រើក្នុងច្បាប់ទូន្មាន និងច្បាប់ក្រមង៉ុយ)។',
          en: 'Bot Kakagati features 7 lines per stanza with 4 syllables per line.',
        },
      },
      {
        id: 'kh-ch-4',
        prompt: {
          km: 'រឿង "ព្រះអាទិត្យថ្មីរះលើផែនដីចាស់" (១៩៦១) ជាប្រភេទរឿងប្រលោមលោកបែបណា និងនិពន្ធដោយអ្នកណា?',
          en: 'Who wrote the realist social novel "A New Sun Rises Over the Old Earth" (1961)?',
        },
        options: {
          km: [
            'លោក សួន សុរិន្ទ (អក្សរសិល្ប៍តថនិយម)',
            'លោក នូ ហាច (មនោសញ្ចេតនា)',
            'លោក រីម គីន (ប្រវត្តិសាស្ត្រ)',
            'ឧកញ៉ា សុត្តន្តប្រីជា ឥន្ទ',
          ],
          en: [
            'Suon Sorin (Social Realism)',
            'Nou Hach',
            'Rim Kin',
            'Oknha Suttantaprija Ind',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'លោក សួន សុរិន្ទ និពន្ធរឿង "ព្រះអាទិត្យថ្មីរះលើផែនដីចាស់" ដើម្បីរិះគន់អយុត្តិធម៌សង្គម និងលើកទឹកចិត្តពលកម្មសុចរិត។',
          en: 'Suon Sorin wrote this social-realist novel highlighting worker dignity and social justice.',
        },
      },
    ],
  },
  {
    id: 'khmer-essay-method',
    subjectId: 'khmer',
    tracks: ['science', 'social'],
    isSkillModule: true,
    title: {
      km: 'វិធីសាស្ត្រវិភាគប្រធាន និងគម្រោងតែងសេចក្តី',
      en: 'Essay Prompt Analysis & Composition Outline',
    },
    subtitle: {
      km: 'តែងសេចក្តីពន្យល់ ពិភាក្សា ប្រៀបធៀប និងផ្នែកទាំង ៣',
      en: 'Explanatory, argumentative & comparative 3-part essay rubrics',
    },
    relatedPaperId: 'khmer-science-2021',
    questions: [
      {
        id: 'kh-es-1',
        prompt: {
          km: 'ក្នុងតែងសេចក្តីប្រភេទ "ពិភាក្សា" (Discursive Essay) តើផ្នែកតួសេចក្តីត្រូវមានដំណាក់កាលសំខាន់ៗអ្វីខ្លះ?',
          en: 'In a Khmer argumentative/discursive essay (ពិភាក្សា), what three stages must appear in the Body?',
        },
        options: {
          km: [
            'មតិស្រប មតិផ្ទុយ និងមតិសំយោគ',
            'តែឧទាហរណ៍ពីរឿងនិទានប៉ុណ្ណោះ',
            'ចំណោទបញ្ហា និងពាក្យផ្តាំផ្ញើ',
            'និយមន័យពាក្យគន្លឹះតែមួយមុខ',
          ],
          en: [
            'Thesis (មតិស្រប), Antithesis (មតិផ្ទុយ), and Synthesis (មតិសំយោគ)',
            'Only fictional quotes',
            'Problem statement and closing wish',
            'Only vocabulary definitions',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'តែងសេចក្តីពិភាក្សាត្រូវបង្ហាញមតិស្រប → មតិផ្ទុយ → មតិសំយោគ ទើបទទួលបានពិន្ទុពេញតាមស្តង់ដារ MoEYS។',
          en: 'A discursive essay requires supporting arguments, counter-arguments, and a balanced synthesis.',
        },
      },
      {
        id: 'kh-es-2',
        prompt: {
          km: 'តើ "ចំណោទបញ្ហា" និង "ការលើកទស្សនៈប្រធាន" ស្ថិតនៅក្នុងផ្នែកណានៃតែងសេចក្តី?',
          en: 'Where do the topic quote and problem question (ចំណោទបញ្ហា) belong in a Khmer essay?',
        },
        options: {
          km: ['ផ្តើមសេចក្តី (Introduction)', 'តួសេចក្តី (Body)', 'បញ្ចប់សេចក្តី (Conclusion)', 'កំណត់សម្គាល់ចុងទំព័រ'],
          en: ['Introduction (ផ្តើមសេចក្តី)', 'Body', 'Conclusion', 'Footnote'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ផ្តើមសេចក្តីមាន ៣ ជំហាន៖ លំនាំបញ្ហា → ចំណូលបញ្ហា (ដកស្រង់ប្រធាន) → ចំណោទបញ្ហា។',
          en: 'The Introduction moves from broad context → prompt restatement → problem question.',
        },
      },
      {
        id: 'kh-es-3',
        prompt: {
          km: 'ពាក្យបញ្ជាប្រធាន "ចូរប្រៀបធៀប" (Compare) តម្រូវឱ្យសិស្សបង្ហាញអ្វីខ្លះក្នុងតួសេចក្តី?',
          en: 'What must students include when a BacII essay prompt asks them to "Compare" (ប្រៀបធៀប)?',
        },
        options: {
          km: [
            'លក្ខណៈដូចគ្នា លក្ខណៈខុសគ្នា និងការវាយតម្លៃសន្និដ្ឋាន',
            'ពន្យល់តែចំណុចម្ខាង',
            'សរសេរតែប្រវត្តិអ្នកនិពន្ធ',
            'រៀបរាប់ពាក្យផ្ទុយគ្មានហេតុផល',
          ],
          en: [
            'Similarities, differences, and a comparative evaluation',
            'Explain only one side',
            'Only author biography',
            'Unexplained antonyms',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'តែងសេចក្តីប្រៀបធៀបត្រូវវិភាគទាំងចំណុចដូចគ្នា (សមានភាព) និងចំណុចខុសគ្នា (វិសមានភាព) រួចវាយតម្លៃ។',
          en: 'Comparative essays analyze both similarities and differences before drawing an evaluation.',
        },
      },
      {
        id: 'kh-es-4',
        prompt: {
          km: 'នៅក្នុងផ្នែក "បញ្ចប់សេចក្តី" (Conclusion) នៃតែងសេចក្តីបាក់ឌុប ត្រូវសរសេរអ្វីខ្លះ?',
          en: 'What are the two core elements of a BacII essay Conclusion (បញ្ចប់សេចក្តី)?',
        },
        options: {
          km: [
            'វាយតម្លៃខ្លឹមសារប្រធានឡើងវិញ និងបញ្ចេញទស្សនៈ/ចំណាប់អារម្មណ៍ផ្ទាល់ខ្លួន',
            'បើកប្រធានថ្មីខុសពីប្រធានដើម',
            'និយមន័យពាក្យលំបាក',
            'សង្ខេបរឿងនិទានទាំងមូល',
          ],
          en: [
            'Re-evaluate the thesis/prompt and offer a personal takeaway or call to action',
            'Introduce an unrelated topic',
            'List dictionary definitions',
            'Retell an entire novel plot',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'បញ្ចប់សេចក្តីមាន ២ ផ្នែក៖ វាយតម្លៃប្រធាន និងមតិ/ទស្សនៈផ្ទាល់ខ្លួនភ្ជាប់នឹងការរស់នៅបច្ចុប្បន្ន។',
          en: 'A strong conclusion evaluates the central claim and adds a reflective personal insight.',
        },
      },
    ],
  },
  {
    id: 'khmer-grammar-orthography',
    subjectId: 'khmer',
    tracks: ['science', 'social'],
    isSkillModule: true,
    title: {
      km: 'វេយ្យាករណ៍ និងអក្ខរាវិរុទ្ធខ្មែរ',
      en: 'Khmer Grammar & Orthography',
    },
    subtitle: {
      km: 'ថ្នាក់ពាក្យ ឃ្លា ប្រយោគ សញ្ញាវណ្ណយុត្ត និងអក្ខរាវិរុទ្ធសម្តេចសង្ឃ ជួន ណាត',
      en: 'Parts of speech, punctuation & Chuon Nath dictionary spelling',
    },
    relatedPaperId: 'khmer-science-2021',
    questions: [
      {
        id: 'kh-go-1',
        prompt: {
          km: 'តើពាក្យណាមួយដែលសរសេរត្រឹមត្រូវតាមវចនានុក្រមខ្មែរ (អត្ថន័យ៖ ភាពជោគជ័យ ឬសម្រេច)?',
          en: 'Which Khmer spelling is correct according to the official Chuon Nath dictionary?',
        },
        options: {
          km: ['អភិវឌ្ឍន៍ / សម្រេច', 'អភិវឌ្ឈន៍', 'អភិវឌ្ឍ', 'សំរេច (ក្នុងកិរិយាសព្ទទូទៅ)'],
          en: ['អភិវឌ្ឍន៍ (noun) / សម្រេច', 'អភិវឌ្ឈន៍', 'អភិវឌ្ឍ (as noun)', 'សំរេច'],
        },
        correctIndex: 0,
        explanation: {
          km: 'តាមវចនានុក្រមសម្តេច ជួន ណាត នាមស័ព្ទសរសេរ "ការអភិវឌ្ឍ" ឬ "អភិវឌ្ឍន៍" និងកិរិយាសព្ទ "សម្រេច"។',
          en: 'Following Chuon Nath orthography, "អភិវឌ្ឍន៍" and "សម្រេច" match standard MoEYS grading.',
        },
      },
      {
        id: 'kh-go-2',
        prompt: {
          km: 'សញ្ញាវណ្ណយុត្ត "។" (ខណ្ឌ) ប្រើសម្រាប់ធ្វើអ្វីក្នុងសំណេរអក្សរសាស្ត្រខ្មែរ?',
          en: 'What is the function of the Khmer punctuation mark "។" (Khan)?',
        },
        options: {
          km: [
            'បញ្ចប់ប្រយោគពេញលេញ (ដូចសញ្ញា "." ក្នុងភាសាអង់គ្លេស)',
            'សួរសំណួរ',
            'ដកស្រង់ពាក្យសម្ដី',
            'បញ្ចេញឧទានសព្ទ',
          ],
          en: [
            'Marks the end of a complete sentence (like a period)',
            'Asks a question',
            'Opens quotation marks',
            'Marks an exclamation',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'សញ្ញាខណ្ឌ "។" ប្រើសម្រាប់បញ្ចប់ប្រយោគ ឬឃ្លាពេញសេចក្តី។',
          en: 'Khan (។) functions as a full stop at the end of a complete Khmer sentence.',
        },
      },
      {
        id: 'kh-go-3',
        prompt: {
          km: 'ពាក្យ "ទន្ទឹមនឹងនេះ" "ម្យ៉ាងវិញទៀត" និង "ដូច្នេះ" ជាថ្នាក់ពាក្យអ្វីក្នុងតែងសេចក្តី?',
          en: 'In essay composition, phrases like "ទន្ទឹមនឹងនេះ" (meanwhile) and "ដូច្នេះ" (therefore) function as:',
        },
        options: {
          km: ['ឈ្នាប់ភ្ជាប់សេចក្តី (Connectors)', 'គុណនាម', 'សព្វនាម', 'ឧទានសព្ទ'],
          en: ['Discourse connectors / transitions', 'Adjectives', 'Pronouns', 'Interjections'],
        },
        correctIndex: 0,
        explanation: {
          km: 'ឈ្នាប់ភ្ជាប់សេចក្តីជួយតភ្ជាប់គំនិតពីកថាខណ្ឌមួយទៅកថាខណ្ឌមួយឱ្យមានសង្គតិភាពល្អ។',
          en: 'Transition connectors link arguments logically between sentences and paragraphs.',
        },
      },
      {
        id: 'kh-go-4',
        prompt: {
          km: 'ក្នុងករណីពាក្យខ្ចីពីបាលី-សំស្ក្រឹត តើសញ្ញាទណ្ឌឃាដ "៍" មានតួនាទីអ្វី?',
          en: 'What is the role of the Khmer diacritic "៍" (Toandakheat) above a consonant?',
        },
        options: {
          km: [
            'សម្លាប់សំឡេងព្យញ្ជនៈខាងចុង (មិនអានបញ្ចេញសំឡេងព្យញ្ជនៈនោះទេ)',
            'បន្ថែមស្រៈ "អា"',
            'ប្តូរអក្សរពីអឃោសៈទៅឃោសៈ',
            'បង្ហាញពហុវចនៈ',
          ],
          en: [
            'Silences the consonant underneath (usually in Pali/Sanskrit loanwords)',
            'Adds an "aa" vowel sound',
            'Shifts consonant register',
            'Marks plural nouns',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ទណ្ឌឃាដ "៍" សម្លាប់សំឡេងព្យញ្ជនៈក្រោមវា ដូចជាក្នុងពាក្យ ប្រយោជន៍, វិទ្យាសាស្ត្រ (ត្រ) ឬ សាកលវិទ្យាល័យ។',
          en: 'Toandakheat silences the trailing consonant in loanwords such as ប្រយោជន៍ or ព័ត៌មាន.',
        },
      },
    ],
  },

  // ============================================================================
  // 11. ENGLISH — BOTH TRACKS (3 Exam Skill Modules)
  // ============================================================================
  {
    id: 'eng-grammar',
    subjectId: 'english',
    tracks: ['science', 'social'],
    isSkillModule: true,
    title: {
      km: 'វេយ្យាករណ៍ (Grammar)',
      en: 'Grammar',
    },
    subtitle: {
      km: 'Tenses, Conditionals, Passive Voice & Subject-Verb Agreement',
      en: 'Tenses, Conditionals, Passive Voice & Subject-Verb Agreement',
    },
    relatedPaperId: 'english-social-2023',
    questions: [
      {
        id: 'eng-gr-1',
        prompt: {
          km: 'ជ្រើសរើសកិរិយាសព្ទត្រឹមត្រូវ៖ "Neither the teacher nor the students _____ informed about the change."',
          en: 'Choose the correct verb: "Neither the teacher nor the students _____ informed about the change."',
        },
        options: {
          km: ['was', 'were', 'has', 'is'],
          en: ['was', 'were', 'has', 'is'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ជាមួយ "Neither A nor B" កិរិយាសព្ទតាមប្រធាននៅជិតបំផុត ("students" ពហុវចនៈ) ⇒ ប្រើ "were"។',
          en: 'With "Neither A nor B", the verb agrees with the closer noun ("students" plural → "were").',
        },
      },
      {
        id: 'eng-gr-2',
        prompt: {
          km: 'បំពេញ Conditional Type 3៖ "If Vathanak had reviewed his notes, he _____ higher marks."',
          en: 'Complete Conditional Type 3: "If Vathanak had reviewed his notes, he _____ higher marks."',
        },
        options: {
          km: ['would get', 'will get', 'would have gotten', 'got'],
          en: ['would get', 'will get', 'would have gotten', 'got'],
        },
        correctIndex: 2,
        explanation: {
          km: 'Conditional Type 3 ប្រើទម្រង់៖ If + Past Perfect, ... would have + V₃។',
          en: 'Type 3 conditional pairs "had + V₃" with "would have + V₃".',
        },
      },
      {
        id: 'eng-gr-3',
        prompt: {
          km: 'ជ្រើសរើសប្រយោគ Passive Voice ត្រឹមត្រូវនៃ៖ "MoEYS has published the official exam key."',
          en: 'Select the accurate Passive Voice form of: "MoEYS has published the official exam key."',
        },
        options: {
          km: [
            'The official exam key was published by MoEYS.',
            'The official exam key has been published by MoEYS.',
            'The official exam key is published by MoEYS.',
            'The official exam key had published by MoEYS.',
          ],
          en: [
            'The official exam key was published by MoEYS.',
            'The official exam key has been published by MoEYS.',
            'The official exam key is published by MoEYS.',
            'The official exam key had published by MoEYS.',
          ],
        },
        correctIndex: 1,
        explanation: {
          km: 'ត្រូវរក្សាកាល Present Perfect៖ has/have + been + V₃ ⇒ "has been published"។',
          en: 'Keep the Present Perfect tense: has/have + been + past participle.',
        },
      },
      {
        id: 'eng-gr-4',
        prompt: {
          km: 'ជ្រើសរើសពាក្យភ្ជាប់ត្រឹមត្រូវ៖ "_____ her busy schedule, Sokha completed every past paper."',
          en: 'Choose the correct connector: "_____ her busy schedule, Sokha completed every past paper."',
        },
        options: {
          km: ['Although', 'Despite', 'Even though', 'Because'],
          en: ['Although', 'Despite', 'Even though', 'Because'],
        },
        correctIndex: 1,
        explanation: {
          km: '"Despite" ប្រើមុខកន្សោមនាម ("her busy schedule") ចំណែក "Although" ប្រើមុខឃ្លាពេញ (Subject + Verb)។',
          en: '"Despite" precedes a noun phrase, whereas "Although/Even though" require a subject + verb clause.',
        },
      },
    ],
  },
  {
    id: 'eng-vocabulary',
    subjectId: 'english',
    tracks: ['science', 'social'],
    isSkillModule: true,
    title: {
      km: 'វាក្យសព្ទ (Vocabulary)',
      en: 'Vocabulary',
    },
    subtitle: {
      km: 'Academic Words, Synonyms, Collocations & Phrasal Verbs',
      en: 'Academic Words, Synonyms, Collocations & Phrasal Verbs',
    },
    relatedPaperId: 'english-science-2021',
    questions: [
      {
        id: 'eng-vb-1',
        prompt: {
          km: 'ជ្រើសរើសពាក្យមានន័យដូចនឹង "vital" ក្នុងប្រយោគ៖ "Clean water is vital for public health."',
          en: 'Choose the closest synonym for "vital" in: "Clean water is vital for public health."',
        },
        options: {
          km: ['optional', 'essential', 'harmful', 'temporary'],
          en: ['optional', 'essential', 'harmful', 'temporary'],
        },
        correctIndex: 1,
        explanation: {
          km: '"vital" មានន័យថា សំខាន់បំផុត ឬចាំបាច់ (essential / crucial)។',
          en: '"Vital" means absolutely necessary or essential.',
        },
      },
      {
        id: 'eng-vb-2',
        prompt: {
          km: 'ជ្រើសរើស Phrasal Verb ត្រឹមត្រូវ៖ "Don’t _____ your scholarship dream even when math feels tough."',
          en: 'Select the right phrasal verb: "Don’t _____ your scholarship dream even when math feels tough."',
        },
        options: {
          km: ['give up', 'give out', 'put off', 'look into'],
          en: ['give up', 'give out', 'put off', 'look into'],
        },
        correctIndex: 0,
        explanation: {
          km: '"give up" = បោះបង់; "put off" = ពន្យារពេល; "look into" = ស្រាវជ្រាវពិនិត្យ។',
          en: '"Give up" means quit/abandon; "put off" means postpone.',
        },
      },
      {
        id: 'eng-vb-3',
        prompt: {
          km: 'បំពេញពាក្យ Collocation ត្រឹមត្រូវ៖ "Students should _____ great effort to prepare for BacII."',
          en: 'Complete the natural collocation: "Students should _____ great effort to prepare for BacII."',
        },
        options: {
          km: ['do', 'make', 'take', 'say'],
          en: ['do', 'make', 'take', 'say'],
        },
        correctIndex: 1,
        explanation: {
          km: 'ក្នុងភាសាអង់គ្លេសប្រើ Collocation ថា "make an effort" (មិនមែន do an effort ទេ)។',
          en: 'The standard English collocation is "make an effort" (not "do an effort").',
        },
      },
      {
        id: 'eng-vb-4',
        prompt: {
          km: 'ពាក្យផ្ទុយ (Antonym) នៃពាក្យ "scarce" (កម្រ/ខ្វះខាត) គឺពាក្យណា?',
          en: 'What is the best antonym for "scarce"?',
        },
        options: {
          km: ['rare', 'abundant', 'fragile', 'narrow'],
          en: ['rare', 'abundant', 'fragile', 'narrow'],
        },
        correctIndex: 1,
        explanation: {
          km: '"scarce" មានន័យថាកម្រ/ខ្វះខាត ផ្ទុយពី "abundant" ដែលមានន័យថាសម្បូរបែប។',
          en: '"Scarce" (rare/limited) is the opposite of "abundant" (plentiful).',
        },
      },
    ],
  },
  {
    id: 'eng-reading',
    subjectId: 'english',
    tracks: ['science', 'social'],
    isSkillModule: true,
    title: {
      km: 'អំណាន (Reading Comprehension)',
      en: 'Reading Comprehension',
    },
    subtitle: {
      km: 'Main Idea, Inference & Context Clues from MoEYS Passages',
      en: 'Main Idea, Inference & Context Clues from MoEYS Passages',
    },
    relatedPaperId: 'english-social-2023',
    questions: [
      {
        id: 'eng-rd-1',
        prompt: {
          km: 'អានអត្ថបទខ្លី៖ "Solar energy reduces household electricity bills and avoids carbon emissions, though initial panel installation requires savings." — តើគំនិតសំខាន់គឺអ្វី?',
          en: 'Passage: "Solar energy reduces household electricity bills and avoids carbon emissions, though initial panel installation requires savings." What is the main idea?',
        },
        options: {
          km: [
            'ថាមពលព្រះអាទិត្យមានប្រយោជន៍រយៈពេលវែង ប៉ុន្តែត្រូវការដើមទុនដំបូង',
            'ថាមពលព្រះអាទិត្យថ្លៃជាងធ្យូងថ្មជារៀងរហូត',
            'គ្មានផ្ទះណាអាចប្រើសូឡាបានទេ',
            'អគ្គិសនីបង្កើតកាបូនតិចជាងសូឡា',
          ],
          en: [
            'Solar energy offers financial and environmental benefits despite upfront costs',
            'Solar panels never save money',
            'Households cannot install solar panels',
            'Coal emits less carbon than solar',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'អត្ថបទបង្ហាញទាំងផលប្រយោជន៍ (សន្សំថ្លៃភ្លើង និងកាត់បន្ថយកាបូន) និងបញ្ហាប្រឈម (ការចំណាយដំបូង)។',
          en: 'The sentence balances long-term savings and zero emissions against upfront installation cost.',
        },
      },
      {
        id: 'eng-rd-2',
        prompt: {
          km: 'អាន៖ "Unlike urban centers with fast internet, remote villages rely on offline PDFs to study." — តើពាក្យ "rely on" មានន័យដូចម្តេច?',
          en: 'Passage: "Unlike urban centers with fast internet, remote villages rely on offline PDFs to study." What does "rely on" mean?',
        },
        options: {
          km: ['បដិសេធ', 'ពឹងផ្អែកលើ', 'លុបចោល', 'បំភ្លេចចោល'],
          en: ['reject', 'depend on', 'delete', 'forget'],
        },
        correctIndex: 1,
        explanation: {
          km: '"rely on" មានន័យថា ពឹងផ្អែកលើ (depend on)។',
          en: '"Rely on" means to depend on or trust in something.',
        },
      },
      {
        id: 'eng-rd-3',
        prompt: {
          km: 'អាន៖ "Because Dara practiced four past papers weekly, his confidence soared before the August exam." — ហេតុអ្វីទំនុកចិត្តរបស់តារាកើនឡើង?',
          en: 'Passage: "Because Dara practiced four past papers weekly, his confidence soared before the August exam." Why did Dara’s confidence rise?',
        },
        options: {
          km: [
            'ព្រោះគាត់ហាត់ធ្វើវិញ្ញាសាចាស់ៗ ៤ ឈុតរៀងរាល់សប្តាហ៍',
            'ព្រោះការប្រឡងត្រូវបានលុបចោល',
            'ព្រោះគាត់មិនបានរៀនសោះ',
            'ព្រោះមិត្តភក្តិធ្វើជំនួសគាត់',
          ],
          en: [
            'Because he consistently practiced four past exam papers every week',
            'Because the exam was canceled',
            'Because he stopped studying',
            'Because a friend took the exam',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'ពាក្យ "Because" បង្ហាញមូលហេតុដោយផ្ទាល់៖ ការហាត់វិញ្ញាសាប្រចាំសប្តាហ៍។',
          en: 'The causal clause starting with "Because" directly attributes his confidence to weekly practice.',
        },
      },
      {
        id: 'eng-rd-4',
        prompt: {
          km: 'នៅពេលសំណួរអំណានសួរថា "What can be inferred from paragraph 2?" តើសិស្សត្រូវធ្វើដូចម្តេច?',
          en: 'When a reading question asks "What can be inferred from paragraph 2?", what skill is tested?',
        },
        options: {
          km: [
            'ទាញសេចក្តីសន្និដ្ឋានសមហេតុផលផ្អែកលើភស្តុតាងក្នុងកថាខណ្ឌទី ២',
            'ទាយដោយគ្មានការអានអត្ថបទ',
            'រាប់ចំនួនពាក្យក្នុងប្រយោគ',
            'រកតែកាលបរិច្ឆេទ',
          ],
          en: [
            'Drawing a logical conclusion supported by clues in paragraph 2',
            'Guessing without reading',
            'Counting words',
            'Checking only numbers',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: 'Inference គឺការសន្និដ្ឋានអ្វីដែលមិនសរសេរចំៗ ប៉ុន្តែមានភស្តុតាងគាំទ្រច្បាស់ក្នុងអត្ថបទ។',
          en: 'An inference is a logical conclusion derived from evidence stated in the text.',
        },
      },
    ],
  },

  // ============================================================================
  // 12. FRENCH — SCIENCE TRACK (3 Exam Skill Modules)
  // ============================================================================
  {
    id: 'fr-grammar',
    subjectId: 'french',
    tracks: ['science'],
    isSkillModule: true,
    title: {
      km: 'វេយ្យាករណ៍ (Grammar)',
      en: 'Grammar',
    },
    subtitle: {
      km: 'Passé Composé, Conditionnel, Subjonctif & Pronoms (qui/que/lui)',
      en: 'Passé Composé, Conditionnel, Subjonctif & Pronoms',
    },
    relatedPaperId: 'french-science-2021',
    questions: [
      {
        id: 'fr-gr-1',
        prompt: {
          km: 'បំពេញ Passé composé៖ "Hier, Elle _____ au lycée pour réviser."',
          en: 'Complete in Passé composé: "Hier, Elle _____ au lycée pour réviser."',
        },
        options: {
          km: ['a allé', 'est allé', 'est allée', 'sont allées'],
          en: ['a allé', 'est allé', 'est allée', 'sont allées'],
        },
        correctIndex: 2,
        explanation: {
          km: 'កិរិយាសព្ទ "aller" ប្រើជាមួយ "être" ហើយត្រូវសម្របអក្សរតាមប្រធានឥត្ថីលិង្គ "Elle" ⇒ "est allée"។',
          en: '"Aller" takes auxiliary "être" and agrees with feminine singular "Elle" → "est allée".',
        },
      },
      {
        id: 'fr-gr-2',
        prompt: {
          km: 'ជ្រើសរើសសព្វនាមជំនួស៖ "Il téléphone à son professeur. → Il _____ téléphone."',
          en: 'Replace the underlined object: "Il téléphone à son professeur. → Il _____ téléphone."',
        },
        options: {
          km: ['le', 'la', 'lui', 'leur'],
          en: ['le', 'la', 'lui', 'leur'],
        },
        correctIndex: 2,
        explanation: {
          km: 'téléphoner à + មនុស្ស ១ នាក់ ជា COI (កម្មបទមិនផ្ទាល់) ⇒ ប្រើសព្វនាម "lui"។',
          en: '"Téléphoner à" takes an indirect object (COI): singular person → "lui".',
        },
      },
      {
        id: 'fr-gr-3',
        prompt: {
          km: 'បំពេញ Conditionnel présent៖ "Si nous révisions chaque jour, nous _____ (réussir) au BacII."',
          en: 'Complete Conditionnel présent: "Si nous révisions chaque jour, nous _____ (réussir) au BacII."',
        },
        options: {
          km: ['réussirons', 'réussirions', 'réussissons', 'avons réussi'],
          en: ['réussirons', 'réussirions', 'réussissons', 'avons réussi'],
        },
        correctIndex: 1,
        explanation: {
          km: 'Si + Imparfait (révisions) ⇒ Conditionnel présent៖ "réussirions" (កន្ទុយ -ions)។',
          en: 'Si + imparfait requires conditionnel présent: nous réussirions.',
        },
      },
      {
        id: 'fr-gr-4',
        prompt: {
          km: 'បំពេញ Subjonctif présent៖ "Il faut que tu _____ (faire) attention aux signes."',
          en: 'Complete Subjonctif présent: "Il faut que tu _____ (faire) attention aux signes."',
        },
        options: {
          km: ['fais', 'feras', 'fasses', 'faisais'],
          en: ['fais', 'feras', 'fasses', 'faisais'],
        },
        correctIndex: 2,
        explanation: {
          km: '"Il faut que" តម្រូវឱ្យប្រើ Subjonctif présent នៃ "faire" ជាមួយ "tu" គឺ "fasses"។',
          en: '"Il faut que" triggers the subjunctive mood: que tu fasses.',
        },
      },
    ],
  },
  {
    id: 'fr-vocabulary',
    subjectId: 'french',
    tracks: ['science'],
    isSkillModule: true,
    title: {
      km: 'វាក្យសព្ទ (Vocabulary)',
      en: 'Vocabulary',
    },
    subtitle: {
      km: 'Lexique scolaire, environnement, sciences & synonymes',
      en: 'Academic, science & everyday French vocabulary',
    },
    relatedPaperId: 'french-science-2021',
    questions: [
      {
        id: 'fr-vb-1',
        prompt: {
          km: 'ពាក្យភាសាបារាំងណាដែលមានន័យថា "អាហារូបករណ៍" (Scholarship)?',
          en: 'Which French word means "scholarship"?',
        },
        options: {
          km: ['une bourse d’études', 'un cahier', 'une bibliothèque', 'un tableau'],
          en: ['une bourse d’études', 'un cahier', 'une bibliothèque', 'un tableau'],
        },
        correctIndex: 0,
        explanation: {
          km: '"une bourse d’études" មានន័យថា អាហារូបករណ៍សិក្សា។',
          en: '"Une bourse d’études" translates to a study scholarship.',
        },
      },
      {
        id: 'fr-vb-2',
        prompt: {
          km: 'ជ្រើសរើសពាក្យមានន័យផ្ទុយ (Antonyme) នៃ "difficile" (ពិបាក)៖',
          en: 'Select the antonym of "difficile" (difficult):',
        },
        options: {
          km: ['complexe', 'facile', 'lourd', 'triste'],
          en: ['complexe', 'facile', 'lourd', 'triste'],
        },
        correctIndex: 1,
        explanation: {
          km: '"difficile" (ពិបាក) ផ្ទុយនឹង "facile" (ងាយស្រួល)។',
          en: 'The opposite of "difficile" is "facile" (easy).',
        },
      },
      {
        id: 'fr-vb-3',
        prompt: {
          km: 'បំពេញប្រយោគ៖ "Pour réussir à l’examen, il faut beaucoup de _____." (ការខិតខំប្រឹងប្រែង)',
          en: 'Complete: "Pour réussir à l’examen, il faut beaucoup de _____." (effort / hard work)',
        },
        options: {
          km: ['travail', 'paresse', 'bruit', 'retard'],
          en: ['travail', 'paresse', 'bruit', 'retard'],
        },
        correctIndex: 0,
        explanation: {
          km: '"travail" (ការងារ/ការខិតខំ) ផ្ទុយពី "paresse" (ភាពខ្ជិលច្រអូស)។',
          en: '"Travail" means work/effort, whereas "paresse" means laziness.',
        },
      },
      {
        id: 'fr-vb-4',
        prompt: {
          km: 'ពាក្យមានន័យដូច (Synonyme) នឹងកិរិយាសព្ទ "protéger" (ការពារ) ក្នុងអត្ថបទបរិស្ថានគឺអ្វី?',
          en: 'Which verb is closest in meaning to "protéger" (to protect)?',
        },
        options: {
          km: ['détruire', 'préserver', 'oublier', 'polluer'],
          en: ['détruire', 'préserver', 'oublier', 'polluer'],
        },
        correctIndex: 1,
        explanation: {
          km: '"préserver" (ថែរក្សាការពារ) មានន័យដូច "protéger"។',
          en: '"Préserver" (to preserve) is a synonym for "protéger".',
        },
      },
    ],
  },
  {
    id: 'fr-reading',
    subjectId: 'french',
    tracks: ['science'],
    isSkillModule: true,
    title: {
      km: 'អំណាន (Reading Comprehension)',
      en: 'Reading Comprehension',
    },
    subtitle: {
      km: 'Compréhension écrite: idée principale et détails précis',
      en: 'French reading comprehension & textual inference',
    },
    relatedPaperId: 'french-science-2021',
    questions: [
      {
        id: 'fr-rd-1',
        prompt: {
          km: 'អានអត្ថបទ៖ "À Phnom Penh, les lycéens utilisent les bibliothèques numériques pour préparer le BacII." — តើសិស្សវិទ្យាល័យប្រើអ្វីដើម្បីត្រៀមបាក់ឌុប?',
          en: 'Text: "À Phnom Penh, les lycéens utilisent les bibliothèques numériques pour préparer le BacII." What do students use?',
        },
        options: {
          km: [
            'បណ្ណាល័យឌីជីថល (les bibliothèques numériques)',
            'ទីលានបាល់ទាត់',
            'ស្ថានីយរថភ្លើង',
            'សារមន្ទីរ',
          ],
          en: [
            'Digital libraries (les bibliothèques numériques)',
            'Football stadiums',
            'Train stations',
            'Museums',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: '"les bibliothèques numériques" មានន័យថា បណ្ណាល័យឌីជីថល (អនឡាញ)។',
          en: '"Les bibliothèques numériques" means digital libraries.',
        },
      },
      {
        id: 'fr-rd-2',
        prompt: {
          km: 'អាន៖ "Bien que la physique soit exigeante, Sophea résout trois exercices chaque matin." — តើប្រយោគនេះបញ្ជាក់ពីអ្វី?',
          en: 'Text: "Bien que la physique soit exigeante, Sophea résout trois exercices chaque matin." What does this express?',
        },
        options: {
          km: [
            'ទោះបីរូបវិទ្យាលំបាក ក៏សុភាហាត់ធ្វើ ៣ លំហាត់រាល់ព្រឹកដែរ',
            'សុភាឈប់រៀនរូបវិទ្យា',
            'រូបវិទ្យាងាយស្រួលគ្មានលំហាត់',
            'សុភាហាត់តែពេលយប់',
          ],
          en: [
            'Although physics is demanding, Sophea solves three exercises every morning',
            'Sophea quit physics',
            'Physics has no exercises',
            'Sophea only studies at midnight',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: '"Bien que..." មានន័យថា "ទោះបីជា..." បង្ហាញពីការតស៊ូព្យាយាមរបស់សុភា។',
          en: '"Bien que" means "although", highlighting Sophea’s daily persistence.',
        },
      },
      {
        id: 'fr-rd-3',
        prompt: {
          km: 'អាន៖ "Le recyclage diminue les déchets plastiques dans nos rivières." — តើការកែច្នៃឡើងវិញជួយអ្វី?',
          en: 'Text: "Le recyclage diminue les déchets plastiques dans nos rivières." What does recycling achieve?',
        },
        options: {
          km: [
            'កាត់បន្ថយសំរាមប្លាស្ទិកក្នុងទន្លេ',
            'បង្កើនសំរាមក្នុងទន្លេ',
            'បំផ្លាញព្រៃឈើ',
            'បញ្ឈប់ទឹកភ្លៀង',
          ],
          en: [
            'Reduces plastic waste in rivers',
            'Increases river plastic',
            'Destroys forests',
            'Stops rainfall',
          ],
        },
        correctIndex: 0,
        explanation: {
          km: '"diminue les déchets plastiques" = កាត់បន្ថយសំណល់ប្លាស្ទិក។',
          en: '"Diminue" means reduces, and "déchets plastiques" means plastic waste.',
        },
      },
      {
        id: 'fr-rd-4',
        prompt: {
          km: 'ពាក្យភ្ជាប់ "En conclusion," នៅដើមកថាខណ្ឌចុងក្រោយនៃអត្ថបទបារាំងមានន័យដូចម្តេច?',
          en: 'What does the transition phrase "En conclusion," signal at the start of the final paragraph?',
        },
        options: {
          km: ['ជាសរុប / បញ្ចប់សេចក្តី (In conclusion)', 'ឧទាហរណ៍ទី ១', 'ផ្ទុយទៅវិញ', 'នៅពេលព្រឹក'],
          en: ['In conclusion (summarizing the essay)', 'First example', 'On the contrary', 'In the morning'],
        },
        correctIndex: 0,
        explanation: {
          km: '"En conclusion" ប្រើដើម្បីសង្ខេប និងបិទបញ្ចប់គំនិតសំខាន់ៗនៃអត្ថបទ។',
          en: '"En conclusion" introduces the concluding summary.',
        },
      },
    ],
  },
];
