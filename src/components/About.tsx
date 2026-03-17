import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';

const About = () => {
  const { t } = useLanguage();

  const blocks = [
    {
      title: t('문제 유형', 'Problem Types'),
      description: t(
        '저전력 통신, 노이즈가 큰 센서 데이터, 불연속 산업 시계열처럼 제약이 많은 데이터를 다뤄왔습니다.',
        'I have worked on constrained data problems such as low-power communication, noisy sensor streams, and discontinuous industrial time series.'
      ),
    },
    {
      title: t('작업 방식', 'How I Work'),
      description: t(
        '모델 하나만 보는 대신 데이터 구조, baseline, 실험 조건, 실패 원인을 함께 정리해 의사결정 가능한 결과를 남깁니다.',
        'I do not stop at model training. I organize data structure, baselines, experiment conditions, and failure cases so the result is actionable.'
      ),
    },
    {
      title: t('강점', 'Strengths'),
      description: t(
        '모델 설계와 검증을 구현까지 연결하는 편입니다. 성능과 효율의 trade-off를 실험으로 확인하고 시스템 제약까지 함께 봅니다.',
        'My strength is carrying model design and validation into implementation, checking performance-efficiency trade-offs against system constraints.'
      ),
    },
    {
      title: t('포지셔닝', 'Positioning'),
      description: t(
        'LLM 중심 엔지니어보다 신호·센서·시계열 중심 Applied ML Engineer에 가깝고, 순수 연구보다 구현과 검증에 더 무게를 둡니다.',
        'I am closer to an applied ML engineer for signal, sensor, and time-series systems than an LLM-focused engineer, with more weight on implementation than pure research.'
      ),
    },
  ];

  return (
    <section id="about" className="section-container py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="space-y-8"
      >
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {t('Summary', 'Summary')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t('어떤 문제를 다뤄왔고, 어떻게 해결하는지', 'What I work on and how I approach it')}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{block.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
