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
        t('산업용 밸브 유량 예측과 LoRa 통신 개선 프로젝트를 중심으로 제조·센서 데이터 문제를 수행했습니다.', 'Worked on manufacturing and sensor-data problems centered on industrial valve forecasting and LoRa communication improvement.'),
        t('데이터 전처리, 모델 설계, 실험 비교, 현장 테스트, 결과 문서화까지 이어지는 방식으로 프로젝트를 진행했습니다.', 'Handled projects end to end across preprocessing, model design, experiment comparison, field testing, and documentation.'),
        t('좋은 수치만 남기기보다 실패 원인과 한계를 함께 정리해 다음 실험의 기준으로 삼았습니다.', 'Documented failure causes and limitations as well as strong results, using them as the basis for subsequent experiments.'),
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
            {t('연구 경험', 'Research Experience')}
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
