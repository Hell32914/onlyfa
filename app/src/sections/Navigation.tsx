import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useI18n, type Language } from '../i18n';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels = t('nav.links') as Record<string, string>;
  const navLinks = [
    { key: 'about', href: '/about' },
    { key: 'services', href: '#system' },
    { key: 'results', href: '#proof' },
    { key: 'community', href: '#community' },
    { key: 'contact', href: '#contact' },
  ];

  const languageOptions = t('language.options') as Record<Language, { short: string; name: string }>;
  const languageOrder: Language[] = ['en', 'ru', 'es'];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      setIsMobileMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/${href}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-elite-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-wider text-elite-white hover:text-elite-purple transition-colors"
            >
              ELITE
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-elite-gray hover:text-elite-white transition-colors tracking-wide"
                >
                  {navLabels[link.key]}
                </button>
              ))}
            </div>

            <div
              className="hidden md:flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1"
              role="group"
              aria-label={t('language.label') as string}
            >
              {languageOrder.map((code) => {
                const option = languageOptions[code];
                const isActive = language === code;

                return (
                  <button
                    key={code}
                    onClick={() => setLanguage(code)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white/10 text-elite-white'
                        : 'text-elite-gray hover:text-elite-white'
                    }`}
                    aria-pressed={isActive}
                    aria-label={option.name}
                  >
                    {option.short}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-2.5 text-sm font-semibold text-elite-white neon-border neon-border-hover rounded-xl transition-all duration-300"
              >
                {t('nav.apply') as string}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-elite-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-elite-black/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.key}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-display font-semibold text-elite-white hover:text-elite-purple transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {navLabels[link.key]}
            </button>
          ))}
          <div
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1"
            role="group"
            aria-label={t('language.label') as string}
          >
            {languageOrder.map((code) => {
              const option = languageOptions[code];
              const isActive = language === code;

              return (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-3 py-1 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/10 text-elite-white'
                      : 'text-elite-gray hover:text-elite-white'
                  }`}
                  aria-pressed={isActive}
                  aria-label={option.name}
                >
                  {option.short}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => scrollToSection('#contact')}
            className="mt-4 px-8 py-3 text-lg font-semibold text-elite-white neon-border rounded-xl"
          >
            {t('nav.apply') as string}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
