import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';

const About = () => {
  const { t } = useLanguage();

  const blocks = [
    {
      title: t('다루는 문제', 'Problem Focus'),
      description: t(
        '저전력 통신, 잡음이 큰 센서 데이터, 불연속 산업 시계열처럼 제약이 큰 데이터를 대상으로 문제를 정의하고 해결해왔습니다.',
        'I define and solve problems on constrained data, including low-power communication, noisy sensor streams, and discontinuous industrial time series.'
      ),
    },
    {
      title: t('접근 방식', 'Approach'),
      description: t(
        '모델 성능만 보지 않고 데이터 구조, baseline, 실험 조건, 검증 과정까지 함께 검토해 재현 가능한 결과를 만드는 데 집중합니다.',
        'Beyond model scores, I review data structure, baselines, experiment conditions, and failure causes to produce reproducible results.'
      ),
    },
    {
      title: t('강점', 'Strengths'),
      description: t(
        '모델 설계에 그치지 않고 전처리, 지표 해석, 실험 비교, 시스템 제약까지 연결해 현실적인 trade-off를 판단합니다.',
        'I connect model design with preprocessing, metric interpretation, experiment comparison, and system constraints to make realistic trade-off decisions.'
      ),
    },
    {
      title: t('적합한 역할', 'Best-fit Role'),
      description: t(
        '신호·센서·시계열 데이터 기반의 Applied ML Engineer 역할에 가장 가깝고, 순수 연구보다 구현과 검증에 무게를 둡니다.',
        'I am best aligned with Applied ML Engineer roles focused on signal, sensor, and time-series data, with stronger emphasis on implementation and validation.'
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
