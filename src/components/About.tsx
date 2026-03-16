import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="section-container" id="about">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="space-y-12"
      >
        <motion.div variants={item} className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-600">About</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            {t('자기소개', 'Self Introduction')}
          </p>
        </motion.div>

        <motion.div variants={item} className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-dark-700">
            <span className="font-bold text-primary-600">
              {t('엔드투엔드 ML 파이프라인 설계와 지표 기반 반복 개선', 'End-to-end ML pipeline design and metric-driven iteration')}
            </span>
            {t('에 집중하는 AI/ML 엔지니어입니다.', ' are my core focus as an AI/ML engineer.')}
            <br />
            {t(
              '제약 조건이 있는 실제 환경에서 데이터 처리–모델링–검증 루프를 설계하고,',
              'In constrained real-world settings, I design the full data processing-modeling-validation loop and'
            )}{' '}
            <span className="font-bold text-dark-900">
              {t('노이즈·불규칙 데이터(신호/시계열)에서도 재현 가능한 실험과 강건한 성능', 'build robust performance and reproducible experiments even on noisy, irregular data (signal/time-series)')}
            </span>
            {t('을 구현합니다.', '.')}
            <br />
            {t(
              '손실/상태 처리와 실험 설계를 통해 성능–효율 트레이드오프를 정량적으로 최적화하며, 필요 시 엣지·저자원 조건까지 고려해 구현합니다. 도메인보다 문제 유형(제약 환경 최적화, 분포 변화 대응, 엔드투엔드 검증)에 초점을 맞춰 해결합니다.',
              'I quantitatively optimize performance-efficiency trade-offs through loss/state handling and experimental design, and extend this to edge/resource-constrained deployment when needed. I focus on problem types over domains: constrained optimization, distribution shift handling, and end-to-end verification.'
            )}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
