import { motion } from 'framer-motion';
import { Github, Mail, BookOpen, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative inline-block"
          >
            <div className="w-40 h-40 mx-auto bg-primary-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50">
              <span className="text-6xl font-bold text-white">이</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-white">AI</span>
            </div>
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              <span className="text-primary-600">이해권</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-dark-700"
            >
              Haegwon Lee
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl sm:text-2xl text-dark-600 max-w-3xl mx-auto font-medium"
            >
              {t(
                'AI/ML Engineer | End-to-End ML & Robust Validation',
                'AI/ML Engineer | End-to-End ML & Robust Validation'
              )}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-dark-500 max-w-2xl mx-auto leading-relaxed"
            >
              {t(
                '제약 조건이 있는 실제 환경에서 데이터 처리–모델링–검증 루프를 설계하고, 지표 기반으로 성능을 개선해온 AI/ML 엔지니어입니다. 노이즈·불규칙 데이터에서 강건성과 재현성을 높이는 실험 설계에 강점을 가지고 있습니다.',
                'AI/ML engineer focused on building end-to-end data processing-modeling-validation loops in constrained real-world settings and improving outcomes through metric-driven iteration. Strong in experiment design for robustness and reproducibility on noisy, irregular data.'
              )}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToProjects();
              }}
              className="group px-8 py-4 bg-primary-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('프로젝트 보기', 'View Projects')}
              <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="https://github.com/gwon9906"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-dark-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/50 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="mailto:gwon99065@naver.com"
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-dark-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/50 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('이메일', 'Email')}
            </a>

            <a
              href="https://latetime.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-dark-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/50 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              {t('블로그', 'Blog')}
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
          >
            {[
              { label: '학부 연구생', value: '24.06~' },
              { label: '완료 프로젝트', value: '3+' },
              { label: '압축률', value: '62.5%' },
              { label: 'MAPE 개선', value: '98%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift"
              >
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-sm text-dark-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-dark-400"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
