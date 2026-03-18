import { motion } from 'framer-motion';
import { Brain, Database, Radio, Wrench, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const TechStack = () => {
  const { t } = useLanguage();

  const groups: SkillGroup[] = [
    {
      title: t('모델링 도구', 'Modeling Tools'),
      icon: Brain,
      skills: ['Python', 'PyTorch', 'NumPy', 'TensorFlow'],
    },
    {
      title: t('데이터·실험', 'Data & Experiment'),
      icon: Database,
      skills: ['Time-Series Preprocessing', 'Experiment Design', 'Metric Analysis', 'Baseline Reproduction'],
    },
    {
      title: t('신호·시계열 기법', 'Signal & Time-Series Techniques'),
      icon: Radio,
      skills: ['Signal Processing', 'Denoising', 'Reconstruction', 'Forecasting', 'STFT', 'DSP'],
    },
    {
      title: t('도메인·시스템', 'Domain & Systems'),
      icon: Wrench,
      skills: ['Edge ML', 'Industrial Sensor Data', 'Raspberry Pi', 'Git', 'Linux', 'Docker', 'C/C++'],
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
              <div className="mt-5">
                <p className="text-sm font-bold tracking-[-0.015em] text-slate-700">
                  {t('사용 기술', 'Tech Stack')}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((item) => (
                    <span
                      key={item}
                      className="chip-text rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
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
