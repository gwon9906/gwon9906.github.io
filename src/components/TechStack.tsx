import { motion } from 'framer-motion';
import { Brain, Database, Radio, Wrench, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  strong: string[];
  familiar?: string[];
}

const TechStack = () => {
  const { t } = useLanguage();

  const groups: SkillGroup[] = [
    {
      title: t('Modeling', 'Modeling'),
      icon: Brain,
      strong: ['Python', 'PyTorch', 'NumPy', 'scikit-learn', 'LSTM / Encoder-LSTM'],
      familiar: ['TensorFlow'],
    },
    {
      title: t('Data Processing', 'Data Processing'),
      icon: Database,
      strong: ['Pandas', 'Time-Series Preprocessing', 'Experiment Design', 'Metric Analysis'],
    },
    {
      title: t('Signal / Analysis', 'Signal / Analysis'),
      icon: Radio,
      strong: ['Signal Processing', 'Denoising', 'Reconstruction', 'Forecasting', 'LoRa PHY'],
      familiar: ['STFT', 'DSP'],
    },
    {
      title: t('System / Tools', 'System / Tools'),
      icon: Wrench,
      strong: ['Git', 'Linux', 'Docker', 'Raspberry Pi', 'LoRa'],
      familiar: ['C/C++'],
    },
  ];

  return (
    <section id="tech-stack" className="section-container py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="space-y-8"
      >
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {t('Skills', 'Skills')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t('많이 써본 것과 익숙한 것을 구분해 정리', 'Grouped by real usage, with clear separation of depth')}
          </h2>
          <p className="text-base leading-7 text-slate-600">
            {t(
              '기술 이름을 많이 늘어놓기보다, 실제로 반복 사용한 것과 보조적으로 다뤄본 것을 나눴습니다.',
              'Rather than listing everything, I separated tools used repeatedly from those used in a supporting role.'
            )}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <group.icon className="h-5 w-5 text-slate-800" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t('많이 사용', 'Used Often')}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.strong.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-medium text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {group.familiar && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {t('보조적으로 사용', 'Used Occasionally')}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.familiar.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
