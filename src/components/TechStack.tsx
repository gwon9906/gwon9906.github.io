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
      title: t('모델링 도구', 'Modeling Tools'),
      icon: Brain,
      strong: ['Python', 'PyTorch', 'NumPy', 'scikit-learn'],
      familiar: ['TensorFlow'],
    },
    {
      title: t('데이터·실험', 'Data & Experiment'),
      icon: Database,
      strong: ['Pandas', 'Time-Series Preprocessing', 'Experiment Design', 'Metric Analysis', 'Baseline Reproduction'],
    },
    {
      title: t('신호·시계열 기법', 'Signal & Time-Series Techniques'),
      icon: Radio,
      strong: ['Signal Processing', 'Denoising', 'Reconstruction', 'Forecasting', 'LoRa PHY'],
      familiar: ['STFT', 'DSP', 'Encoder-LSTM'],
    },
    {
      title: t('도메인·시스템', 'Domain & Systems'),
      icon: Wrench,
      strong: ['LoRa', 'Edge ML', 'Industrial Sensor Data', 'Raspberry Pi'],
      familiar: ['Git', 'Linux', 'Docker', 'C/C++'],
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
            {t('실제로 사용한 기술과 도구', 'Technologies and tools used in practice')}
          </h2>
          <p className="text-base leading-7 text-slate-600">
            {t(
              '프로젝트에서 반복적으로 사용한 기술을 중심으로 정리했습니다. 보조적으로 사용한 도구와 개념은 구분해 표시했습니다.',
              'This list focuses on technologies used repeatedly across projects. Supporting tools and concepts are marked separately.'
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
