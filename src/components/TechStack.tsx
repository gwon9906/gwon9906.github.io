import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Wrench, type LucideIcon } from 'lucide-react';
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
      title: t('주요 언어 · 프레임워크', 'Core Languages · Frameworks'),
      icon: Brain,
      skills: ['Python', 'TensorFlow/Keras', 'PyTorch', 'NumPy'],
    },
    {
      title: t('데이터 · 검증', 'Data · Validation'),
      icon: Database,
      skills: [
        'Time-Series Preprocessing',
        'Outlier Handling',
        'Experiment Design',
        'Metric Analysis',
      ],
    },
    {
      title: t('시스템 · 현장 실행', 'Systems · Field Execution'),
      icon: Cpu,
      skills: ['Linux', 'Git/GitHub', 'Raspberry Pi', 'CSV Logging', 'Field Testing'],
    },
    {
      title: t('도메인 경험', 'Domain Experience'),
      icon: Wrench,
      skills: ['Industrial Sensor Data', 'LoRa', 'Signal Processing', 'Forecasting'],
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
            {t('사용 기술', 'Skills Used')}
          </h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              '프로젝트에서 반복적으로 사용한 기술 위주로 정리했습니다. 과장 없이 직접 다룬 항목만 남겼습니다.',
              'Listed around the tools and techniques used repeatedly across projects, keeping only items I can defend directly.'
            )}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <group.icon className="h-5 w-5 text-slate-800" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
