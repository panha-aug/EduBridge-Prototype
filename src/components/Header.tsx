import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import type { Language, NavPage, StudentState } from '../types';
import type { TranslationDictionary } from '../translations';

interface HeaderProps {
  dict: TranslationDictionary;
  lang: Language;
  onChangeLang: (lang: Language) => void;
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
  student: StudentState;
  onOpenAuthModal: () => void;
}

export function Header({
  dict,
  lang,
  onChangeLang,
  activePage,
  onNavigate,
  student,
  onOpenAuthModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: dict.nav.home },
    { id: 'learn', label: dict.nav.learn },
    { id: 'prepare', label: dict.nav.prepare },
    { id: 'discover', label: dict.nav.discover },
    { id: 'about', label: dict.nav.about },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const accountButtonLabel =
    student.profile === 'vathanak'
      ? dict.profile.vathanakShort
      : student.profile === 'custom' && student.customAccount?.fullName
      ? student.customAccount.fullName
      : student.profile === 'fresh'
      ? dict.profile.freshShort
      : dict.profile.guestShort;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Left: Uploaded EduBridge Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center shrink-0 focus-visible:outline-none cursor-pointer"
          aria-label="EduBridge Home"
        >
          <img
            src="/assets/aistudio/EduBridge_c89953e0.png"
            alt="EduBridge"
            className="h-9 sm:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Center: 5 concise single-line links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#12366B]'
                    : 'text-[#64748B] hover:text-[#12366B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#F47700] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Student Account Button (opens Auth Modal) + Khmer/EN Toggle + Orange CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenAuthModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#EEF3FA] text-[#12366B] text-xs font-bold hover:bg-[#e2eaf6] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-[#12366B]" />
            <span className="max-w-[120px] truncate">{accountButtonLabel}</span>
          </button>

          {/* Language Toggle */}
          <div
            className="flex items-center p-0.5 rounded-lg bg-[#F5F7FB] border border-slate-200 shrink-0"
            role="group"
            aria-label="Language toggle"
          >
            <button
              type="button"
              onClick={() => onChangeLang('km')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'km'
                  ? 'bg-[#12366B] text-white'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              ខ្មែរ
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#12366B] text-white'
                  : 'text-[#64748B] hover:text-[#12366B]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary Orange CTA */}
          <button
            type="button"
            onClick={() => handleNavClick('learn')}
            className="px-4 py-2 rounded-lg bg-[#F47700] hover:bg-[#dc6b00] text-white text-xs font-bold transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            {dict.nav.startAssessment}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <div className="flex items-center p-0.5 rounded-lg bg-[#F5F7FB] border border-slate-200">
            <button
              type="button"
              onClick={() => onChangeLang('km')}
              className={`px-2 py-1 text-xs font-semibold rounded-md ${
                lang === 'km' ? 'bg-[#12366B] text-white' : 'text-[#64748B]'
              }`}
            >
              ខ្មែរ
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`px-2 py-1 text-xs font-semibold rounded-md ${
                lang === 'en' ? 'bg-[#12366B] text-white' : 'text-[#64748B]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg text-[#12366B] hover:bg-[#EEF3FA]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  activePage === item.id
                    ? 'bg-[#EEF3FA] text-[#12366B]'
                    : 'text-[#1E293B] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal();
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-[#EEF3FA] text-[#12366B] text-sm font-bold flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>{accountButtonLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('learn')}
              className="w-full py-2.5 rounded-lg bg-[#F47700] text-white text-sm font-bold"
            >
              {dict.nav.startAssessment}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
