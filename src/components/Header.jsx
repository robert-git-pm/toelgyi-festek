import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = ['about', 'services', 'projects', 'testimonials', 'contact'];

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [autoReveal, setAutoReveal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal the header automatically 3s after mount, using the same
  // styling as the scrolled state.
  useEffect(() => {
    const timer = setTimeout(() => setAutoReveal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const revealed = scrolled || autoReveal;

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        revealed
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm opacity-100 pointer-events-auto'
          : 'bg-transparent opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-xl text-bark-900 hover:text-terracotta-500 transition-colors"
          >
            János Tölgyi
            <span className="block text-xs font-sans font-normal text-bark-700 -mt-1">
              Maler · Festő · Zugrav
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm text-bark-700 hover:text-terracotta-500 transition-colors font-medium"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </nav>

          {/* Lang + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-sm py-2 px-4"
            >
              {t('hero.cta')}
            </button>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="p-1 text-bark-900"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-bark-900/10 py-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-4 py-2.5 text-bark-700 hover:text-terracotta-500 hover:bg-terracotta-50 transition-colors font-medium"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            <div className="px-4 pt-2 pb-1">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary w-full text-center text-sm"
              >
                {t('hero.cta')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
