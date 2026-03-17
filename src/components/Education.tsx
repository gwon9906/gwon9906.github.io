import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-container py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="space-y-7"
      >
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {t('Education', 'Education')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t('학력', 'Education')}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-100 p-3">
                <GraduationCap className="h-5 w-5 text-slate-800" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-slate-950">{t('동의대학교', 'Dong-eui University')}</h3>
                <p className="text-sm text-slate-700">{t('컴퓨터공학과 학사', 'B.S. in Computer Engineering')}</p>
                <p className="text-sm text-slate-500">{t('졸업: 2026년 2월', 'Graduated: February 2026')}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-100 p-3">
                <Award className="h-5 w-5 text-slate-800" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-slate-950">{t('정보처리기사', 'Engineer Information Processing')}</h3>
                <p className="text-sm text-slate-700">{t('한국산업인력공단', 'Human Resources Development Service of Korea')}</p>
                <p className="text-sm text-slate-500">2025.06.13</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
