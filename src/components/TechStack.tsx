import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Radio, Wrench, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TechGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

const TechStack = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  const groups: TechGroup[] = [
    {
      id: 'ml',
      title: t('ML 모델링', 'ML Modeling'),
      icon: Brain,
      description: t('모델 설계·학습·검증에 사용하는 기술', 'Technologies used for model design, training, and validation'),
      items: ['Python', 'PyTorch', 'TensorFlow', 'LSTM / Encoder-Decoder', 'Model Compression (BAM)'],
    },
    {
      id: 'signal-edge',
      title: t('신호·엣지 시스템', 'Signal & Edge Systems'),
      icon: Radio,
      description: t('신호 처리 및 제약 환경 구현 관련 기술', 'Technologies for signal processing and constrained-environment implementation'),
      items: ['LoRa Communication', 'Raspberry Pi', 'Embedded Systems', 'C/C++', 'STFT / DSP'],
    },
    {
      id: 'dev',
      title: t('개발·협업 도구', 'Development & Collaboration'),
      icon: Wrench,
      description: t('실험 관리와 개발 운영에 사용하는 도구', 'Tools used for experiment management and development operations'),
      items: ['Git', 'Linux', 'GitHub'],
    },
  ];

  return (
    <section ref={ref} className="section-container bg-white/30" id="tech-stack">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-600">Tech Stack</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            {t('숙련도 점수 없이, 큰 기술 부류 중심으로 정리했습니다.', 'Organized by major technology groups without proficiency scores.')}
          </p>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-card p-6 lg:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 rounded-2xl">
                  <group.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-800">{group.title}</h3>
                  <p className="text-sm text-dark-600">{group.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
