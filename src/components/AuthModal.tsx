import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import type { CustomAccountInfo, Track } from '../types';
import type { TranslationDictionary } from '../translations';

interface AuthModalProps {
  dict: TranslationDictionary;
  isOpen: boolean;
  onClose: () => void;
  onSelectSampleVathanak: () => void;
  onSelectFreshStudent: () => void;
  onSignInCustom: (email: string) => void;
  onCreateAccount: (account: CustomAccountInfo) => void;
}

export function AuthModal({
  dict,
  isOpen,
  onClose,
  onSelectSampleVathanak,
  onSelectFreshStudent,
  onSignInCustom,
  onCreateAccount,
}: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Get Started form state
  const [fullName, setFullName] = useState('');
  const [highSchool, setHighSchool] = useState('');
  const [track, setTrack] = useState<Track>('science');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setFormError('');
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setFormError(dict.authModal.validationError);
      return;
    }
    setFormError('');
    onSignInCustom(loginEmail.trim());
    onClose();
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !highSchool.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      setFormError(dict.authModal.validationError);
      return;
    }
    setFormError('');
    onCreateAccount({
      fullName: fullName.trim(),
      highSchool: highSchool.trim(),
      track,
      email: signupEmail.trim(),
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/55 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={activeTab === 'login' ? dict.authModal.loginTitle : dict.authModal.getStartedTitle}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Persistent Top Header across BOTH tabs */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-white">
          <img
            src="/assets/aistudio/EduBridge_c89953e0.png"
            alt="EduBridge"
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={dict.authModal.closeModalLabel}
            className="p-2 rounded-lg text-[#64748B] hover:text-[#12366B] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Segmented Pill Tab Switcher */}
          <div
            className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-[#F5F7FB] border border-slate-200"
            role="tablist"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'login'}
              onClick={() => {
                setActiveTab('login');
                setFormError('');
              }}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-white text-[#12366B] shadow-xs'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              {dict.authModal.tabLogin}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'signup'}
              onClick={() => {
                setActiveTab('signup');
                setFormError('');
              }}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'signup'
                  ? 'bg-white text-[#12366B] shadow-xs'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              {dict.authModal.tabGetStarted}
            </button>
          </div>

          {activeTab === 'login' ? (
            <div className="space-y-5">
              <div className="space-y-1">
                <h2 className="text-xl font-extrabold text-[#12366B]">
                  {dict.authModal.loginTitle}
                </h2>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {dict.authModal.loginSubtitle}
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="auth-login-email"
                    className="block text-xs font-bold text-[#1E293B] mb-1"
                  >
                    {dict.authModal.emailLabel}
                  </label>
                  <input
                    id="auth-login-email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder={dict.authModal.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-sm text-[#1E293B] focus:border-[#12366B] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="auth-login-password"
                    className="block text-xs font-bold text-[#1E293B] mb-1"
                  >
                    {dict.authModal.passwordLabel}
                  </label>
                  <input
                    id="auth-login-password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder={dict.authModal.passwordPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7FB] border border-slate-200 text-sm text-[#1E293B] focus:border-[#12366B] focus:bg-white"
                  />
                </div>

                {formError && (
                  <p className="text-xs font-semibold text-rose-600">{formError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-sm font-bold transition-colors cursor-pointer"
                >
                  {dict.authModal.signInBtn}
                </button>
              </form>

              {/* Subtle Divider */}
              <div className="relative flex items-center py-1">
                <div className="flex-grow border-t border-slate-200" />
                <span className="shrink-0 px-3 text-[11px] font-semibold text-[#64748B]">
                  {dict.authModal.quickAccessDivider}
                </span>
                <div className="flex-grow border-t border-slate-200" />
              </div>

              {/* Two Side-by-Side 1-Click Workspace Buttons (NO Demo Admin) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onSelectSampleVathanak();
                    onClose();
                  }}
                  className="px-3 py-2.5 rounded-xl bg-[#EEF3FA] hover:bg-[#e1eaf7] border border-[#12366B]/15 text-[#12366B] text-xs font-bold text-left transition-colors cursor-pointer"
                >
                  {dict.authModal.sampleAccountBtn}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectFreshStudent();
                    onClose();
                  }}
                  className="px-3 py-2.5 rounded-xl bg-[#FFF3E8] hover:bg-[#ffe7d1] border border-[#F47700]/25 text-[#1E293B] text-xs font-bold text-left transition-colors cursor-pointer"
                >
                  {dict.authModal.freshAccountBtn}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-extrabold text-[#12366B]">
                  {dict.authModal.getStartedTitle}
                </h2>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {dict.authModal.getStartedSubtitle}
                </p>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-3">
                <div>
                  <label
                    htmlFor="auth-signup-name"
                    className="block text-xs font-bold text-[#1E293B] mb-1"
                  >
                    {dict.authModal.fullNameLabel}
                  </label>
                  <input
                    id="auth-signup-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={dict.authModal.fullNamePlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F5F7FB] border border-slate-200 text-sm text-[#1E293B] focus:border-[#12366B] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="auth-signup-school"
                      className="block text-xs font-bold text-[#1E293B] mb-1"
                    >
                      {dict.authModal.highSchoolLabel}
                    </label>
                    <input
                      id="auth-signup-school"
                      type="text"
                      value={highSchool}
                      onChange={(e) => setHighSchool(e.target.value)}
                      placeholder={dict.authModal.highSchoolPlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F7FB] border border-slate-200 text-sm text-[#1E293B] focus:border-[#12366B] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="auth-signup-track"
                      className="block text-xs font-bold text-[#1E293B] mb-1"
                    >
                      {dict.authModal.trackLabel}
                    </label>
                    <select
                      id="auth-signup-track"
                      value={track}
                      onChange={(e) => setTrack(e.target.value as Track)}
                      className="w-full px-3 py-2 rounded-xl bg-[#F5F7FB] border border-slate-200 text-sm font-semibold text-[#1E293B] focus:border-[#12366B] focus:bg-white"
                    >
                      <option value="science">{dict.tracks.science.label}</option>
                      <option value="social">{dict.tracks.social.label}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="auth-signup-email"
                    className="block text-xs font-bold text-[#1E293B] mb-1"
                  >
                    {dict.authModal.emailLabel}
                  </label>
                  <input
                    id="auth-signup-email"
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder={dict.authModal.emailPlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F5F7FB] border border-slate-200 text-sm text-[#1E293B] focus:border-[#12366B] focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="auth-signup-password"
                    className="block text-xs font-bold text-[#1E293B] mb-1"
                  >
                    {dict.authModal.passwordLabel}
                  </label>
                  <input
                    id="auth-signup-password"
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder={dict.authModal.passwordPlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F5F7FB] border border-slate-200 text-sm text-[#1E293B] focus:border-[#12366B] focus:bg-white"
                  />
                </div>

                {formError && (
                  <p className="text-xs font-semibold text-rose-600">{formError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#12366B] hover:bg-[#0d2a54] text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{dict.authModal.createAccountBtn}</span>
                  <ArrowRight className="w-4 h-4 hidden" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
