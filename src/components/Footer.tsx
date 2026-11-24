import type { NavPage } from '../types';
import type { TranslationDictionary } from '../translations';

interface FooterProps {
  dict: TranslationDictionary;
  onNavigate: (page: NavPage, hash?: string) => void;
}

export function Footer({ dict, onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Brand */}
          <div className="md:col-span-6 space-y-3">
            <img
              src="/assets/aistudio/EduBridge_c89953e0.png"
              alt="EduBridge"
              className="h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm font-bold text-[#12366B]">{dict.brandTagline}</p>
            <p className="text-sm text-[#64748B] max-w-md leading-relaxed">{dict.footer.mission}</p>
          </div>

          {/* Column 2 & Column 3 */}
          {dict.footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <h3 className="text-sm font-bold text-[#12366B] mb-3">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.page, link.hash)}
                      className="text-sm text-[#64748B] hover:text-[#F47700] transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
