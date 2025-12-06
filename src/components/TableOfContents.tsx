import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: '홈', icon: Home },
    { id: 'about', label: '소개', icon: User },
    { id: 'tech-stack', label: '기술 스택', icon: Code },
    { id: 'projects', label: '프로젝트', icon: Briefcase },
    { id: 'contact', label: '연락처', icon: Mail },
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
      {/* Floating Menu Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="목차 열기"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-28 right-8 z-40"
          >
            <div className="flex flex-col gap-3">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: { delay: index * 0.05 }
                    }}
                    exit={{
                      opacity: 0,
                      x: 50,
                      scale: 0.8,
                      transition: { delay: (sections.length - index) * 0.03 }
                    }}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl border border-slate-200/50 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50"
                  >
                    <Icon className="w-5 h-5 text-primary-600 group-hover:text-primary-700 transition-colors" />
                    <span className="text-sm font-semibold text-dark-700 whitespace-nowrap">
                      {section.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TableOfContents;
