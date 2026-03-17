import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Languages, FileDown } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('요약', 'Summary'), href: '#about' },
    { label: t('프로젝트', 'Projects'), href: '#projects' },
    { label: t('경험', 'Experience'), href: '#experience' },
    { label: t('학력', 'Education'), href: '#education' },
    { label: t('기술', 'Skills'), href: '#tech-stack' },
    { label: t('연락처', 'Contact'), href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-200 ${
        isScrolled
          ? 'border-slate-200 bg-white/94 backdrop-blur-md'
          : 'border-transparent bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl"
        >
          Haegwon Lee
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            title={t('이력서 PDF', 'Resume PDF')}
          >
            <FileDown className="h-4 w-4" />
            <span>{t('Resume', 'Resume')}</span>
          </a>

          <button
            onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
          >
            <Languages className="h-4 w-4" />
            <span>{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={t('메뉴 열기', 'Open menu')}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
            >
              <FileDown className="h-4 w-4" />
              <span>{t('Resume', 'Resume')}</span>
            </a>

            <button
              type="button"
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700"
            >
              <Languages className="h-4 w-4" />
              <span>{language === 'ko' ? 'English' : '한국어'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
