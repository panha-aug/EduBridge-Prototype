import { useState, useEffect, useCallback } from 'react';
import type { CustomAccountInfo, Language, NavPage, StudentState } from './types';
import { translations } from './translations';
import {
  buildCustomStudentPreset,
  buildVathanakPreset,
  loadSavedCustomAccount,
  loadSavedLanguage,
  loadStudentState,
  saveCustomAccount,
  saveLanguage,
  saveStudentState,
  switchProfilePreset,
} from './data/profiles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { LearnView } from './components/LearnView';
import { PrepareView } from './components/PrepareView';
import { DiscoverView } from './components/DiscoverView';
import { AboutView } from './components/AboutView';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => loadSavedLanguage());
  const [activePage, setActivePage] = useState<NavPage>('home');
  const [navResetTick, setNavResetTick] = useState(0);
  const [student, setStudent] = useState<StudentState>(() => loadStudentState(loadSavedLanguage()));
  const [prepareInitialPaperId, setPrepareInitialPaperId] = useState<string | null>(null);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [pendingAiContext, setPendingAiContext] = useState<{ title: string; content: string } | null>(
    null
  );

  const dict = translations[lang];

  // Sync HTML lang attribute for Kantumruy Pro & line-height: 1.6 when Khmer is active
  useEffect(() => {
    document.documentElement.lang = lang;
    saveLanguage(lang);
  }, [lang]);

  // Persist student state to localStorage
  useEffect(() => {
    saveStudentState(student);
  }, [student]);

  const handleChangeLang = useCallback((nextLang: Language) => {
    setLang(nextLang);
    // Keep pre-loaded Vathanak sample labels localized while preserving user edits
    setStudent((prev) => {
      if (prev.profile === 'vathanak') {
        const localized = buildVathanakPreset(nextLang);
        const completedMap = new Map(prev.studyPlan.map((d) => [d.day, d.completed]));
        const nextScores = { ...prev.subjectScores };
        for (const key of ['math', 'physics', 'biology'] as const) {
          if (nextScores[key]?.completedAt === localized.subjectScores[key]?.completedAt) {
            nextScores[key] = localized.subjectScores[key];
          }
        }
        return {
          ...prev,
          subjectScores: nextScores,
          studyPlan:
            prev.studyPlan.length === 7
              ? localized.studyPlan.map((d) => ({
                  ...d,
                  completed: completedMap.get(d.day) ?? d.completed,
                }))
              : prev.studyPlan,
        };
      }
      return prev;
    });
  }, []);

  const handleNavigate = useCallback((page: NavPage, hash?: string) => {
    setActivePage(page);
    setNavResetTick((t) => t + 1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSelectSampleVathanak = useCallback(() => {
    const nextState = switchProfilePreset('vathanak', lang);
    setStudent(nextState);
  }, [lang]);

  const handleSelectFreshStudent = useCallback(() => {
    const nextState = switchProfilePreset('fresh', lang);
    setStudent(nextState);
  }, [lang]);

  const handleCreateAccount = useCallback((account: CustomAccountInfo) => {
    saveCustomAccount(account);
    const nextState = buildCustomStudentPreset(account);
    saveStudentState(nextState);
    setStudent(nextState);
  }, []);

  const handleSignInCustom = useCallback((email: string) => {
    const existing = loadSavedCustomAccount();
    if (existing && existing.email.toLowerCase() === email.toLowerCase()) {
      const nextState = buildCustomStudentPreset(existing);
      saveStudentState(nextState);
      setStudent(nextState);
      return;
    }
    const inferredName = email.split('@')[0] || 'Student';
    const account: CustomAccountInfo = {
      fullName: inferredName.charAt(0).toUpperCase() + inferredName.slice(1),
      highSchool: '',
      email,
      track: student.track,
    };
    saveCustomAccount(account);
    const nextState = buildCustomStudentPreset(account);
    saveStudentState(nextState);
    setStudent(nextState);
  }, [student.track]);

  const handleUpdateStudent = useCallback((updater: (prev: StudentState) => StudentState) => {
    setStudent((prev) => updater(prev));
  }, []);

  const handleJumpToPreparePaper = useCallback((paperId: string) => {
    setPrepareInitialPaperId(paperId);
    setActivePage('prepare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleSaveScholarship = useCallback((scholarshipId: string) => {
    setStudent((prev) => {
      const exists = prev.savedScholarshipIds.includes(scholarshipId);
      return {
        ...prev,
        savedScholarshipIds: exists
          ? prev.savedScholarshipIds.filter((id) => id !== scholarshipId)
          : [...prev.savedScholarshipIds, scholarshipId],
      };
    });
  }, []);

  const handleAskAiAboutExercise = useCallback((title: string, content: string) => {
    setPendingAiContext({ title, content });
    setAiDrawerOpen(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#F5F7FB] text-[#1E293B] ${
        lang === 'km' ? 'lang-km' : ''
      }`}
    >
      <Header
        dict={dict}
        lang={lang}
        onChangeLang={handleChangeLang}
        activePage={activePage}
        onNavigate={(page) => handleNavigate(page)}
        student={student}
        onOpenAuthModal={() => setAuthModalOpen(true)}
      />

      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView dict={dict} student={student} onNavigate={(page) => handleNavigate(page)} />
        )}
        {activePage === 'learn' && (
          <LearnView
            dict={dict}
            lang={lang}
            student={student}
            navResetTick={navResetTick}
            onUpdateStudent={handleUpdateStudent}
            onJumpToPreparePaper={handleJumpToPreparePaper}
          />
        )}
        {activePage === 'prepare' && (
          <PrepareView
            dict={dict}
            initialPaperId={prepareInitialPaperId}
            navResetTick={navResetTick}
            onClearInitialPaper={() => setPrepareInitialPaperId(null)}
            onAskAiAboutExercise={handleAskAiAboutExercise}
          />
        )}
        {activePage === 'discover' && (
          <DiscoverView
            dict={dict}
            savedIds={student.savedScholarshipIds}
            navResetTick={navResetTick}
            onToggleSave={handleToggleSaveScholarship}
          />
        )}
        {activePage === 'about' && (
          <AboutView dict={dict} onNavigate={(page) => handleNavigate(page)} />
        )}
      </main>

      <Footer dict={dict} onNavigate={handleNavigate} />

      <AuthModal
        dict={dict}
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSelectSampleVathanak={handleSelectSampleVathanak}
        onSelectFreshStudent={handleSelectFreshStudent}
        onSignInCustom={handleSignInCustom}
        onCreateAccount={handleCreateAccount}
      />

      <AiAssistantDrawer
        dict={dict}
        lang={lang}
        track={student.track}
        isOpen={aiDrawerOpen}
        onToggleOpen={setAiDrawerOpen}
        pendingContext={pendingAiContext}
        onConsumePendingContext={() => setPendingAiContext(null)}
      />
    </div>
  );
}
