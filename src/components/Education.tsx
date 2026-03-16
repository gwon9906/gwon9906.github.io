import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  return (
    <section ref={ref} className="section-container bg-white/30" id="education">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-600">Education</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            {t('학력', 'Academic Background')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">{t('학력', 'Education')}</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-dark-700">{t('동의대학교', 'Dong-eui University')}</p>
                  <p className="text-dark-600">{t('컴퓨터공학과 학사', 'B.S. in Computer Engineering')}</p>
                  <p className="text-dark-500">{t('졸업: 2026년 2월', 'Graduated: Feb 2026')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-2xl">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">{t('자격증', 'Certifications')}</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-dark-700">{t('정보처리기사', 'Engineer Information Processing')}</p>
                  <p className="text-dark-500">2025.06.13</p>
                  <p className="text-dark-600">{t('한국산업인력공단', 'Human Resources Development Service of Korea')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
