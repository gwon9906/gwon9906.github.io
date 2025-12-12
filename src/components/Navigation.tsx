import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('소개', 'About'), href: '#about' },
    { label: t('기술 스택', 'Tech Stack'), href: '#tech-stack' },
    { label: t('프로젝트', 'Projects'), href: '#projects' },
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            Haegwon Lee
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-dark-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Language Toggle Button */}
            <button
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="flex items-center gap-2 px-3 py-1.5 text-dark-700 hover:text-primary-600 font-medium transition-colors border border-slate-300 rounded-full hover:border-primary-600"
              title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm">{language === 'ko' ? 'EN' : 'KO'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-700 hover:text-primary-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-200"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-3 text-dark-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="w-full flex items-center justify-center gap-2 mt-4 px-4 py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors border border-slate-300 rounded-full hover:border-primary-600"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm">{language === 'ko' ? 'English' : '한국어'}</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
