import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, GraduationCap, Wrench, Award } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const TableOfContents = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: t('홈', 'Home'), icon: Home },
    { id: 'about', label: t('요약', 'Summary'), icon: User },
    { id: 'projects', label: t('프로젝트', 'Projects'), icon: Briefcase },
    { id: 'experience', label: t('경험', 'Experience'), icon: Award },
    { id: 'education', label: t('학력', 'Education'), icon: GraduationCap },
    { id: 'tech-stack', label: t('기술', 'Skills'), icon: Wrench },
    { id: 'contact', label: t('연락처', 'Contact'), icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="floating-toc">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg transition-transform hover:scale-105"
        aria-label={t('목차 열기', 'Open table of contents')}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-20 right-6 z-40 w-[220px] rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl"
          >
            <div className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    <Icon className="h-4 w-4 text-slate-500" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TableOfContents;
