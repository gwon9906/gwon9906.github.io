import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('학부 연구생', 'Undergraduate Researcher'),
      organization: t('Wireless AIoT System Lab, 동의대학교', 'Wireless AIoT System Lab, Dong-eui University'),
      period: t('2024.06 - 2026.02', 'Jun 2024 - Feb 2026'),
      location: t('부산, 대한민국', 'Busan, South Korea'),
      bullets: [
        t('LoRa 통신 최적화, 저전력 전송, 신호 복원 관련 프로젝트 수행', 'Worked on LoRa optimization, low-power transmission, and signal restoration projects'),
        t('산업 시계열 예측과 초저 SNR 복조 문제를 연구·구현·검증까지 직접 연결', 'Connected research, implementation, and validation for industrial forecasting and ultra-low-SNR demodulation'),
        t('실험 기준선 재현, 실패 원인 분석, 결과 문서화까지 포함한 엔지니어링 방식으로 작업', 'Worked with an engineering mindset that includes reproducing baselines, analyzing failure causes, and documenting outcomes'),
      ],
    },
  ];

  return (
    <section id="experience" className="section-container py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="space-y-8"
      >
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {t('Experience', 'Experience')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t('프로젝트를 뒷받침하는 연구 경험', 'Research experience behind the projects')}
          </h2>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          {experiences.map((experience) => (
            <div key={experience.role} className="space-y-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-950 p-3 text-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">{experience.role}</h3>
                    <p className="mt-1 text-base text-slate-700">{experience.organization}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2 lg:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
