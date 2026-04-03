import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';

const About = () => {
  const { t } = useLanguage();

  const blocks = [
    {
      title: t('핵심 경험', 'Core Experience'),
      description: t(
        '실제 밸브 시계열 데이터 예측과 LoRa 통신 개선 프로젝트를 통해 제조·센서 데이터 문제를 다뤘습니다.',
        'Worked on manufacturing and sensor-data problems through real valve time-series forecasting and LoRa communication improvement projects.'
      ),
    },
    {
      title: t('문제 접근 방식', 'How I Approach Problems'),
      description: t(
        '모델부터 고르기보다 데이터 수집 조건, 비교 기준, 실패 원인을 먼저 정리한 뒤 실험 설계를 맞추는 편입니다.',
        'I start by clarifying data collection conditions, comparison baselines, and failure causes before locking in a model design.'
      ),
    },
    {
      title: t('적합 직무', 'Best-fit Roles'),
      description: t(
        '스마트제조, 생산기술, 제조 데이터 분석, 설비·센서 기반 AI/SW처럼 현장 검증이 중요한 역할과 가장 잘 맞습니다.',
        'I fit best with roles where field validation matters, such as smart manufacturing, production engineering, manufacturing data analysis, and equipment/sensor-based AI/SW.'
      ),
    },
    {
      title: t('작업 방식', 'Working Style'),
      description: t(
        '전처리, 모델링, 지표 해석, 문서화까지 이어서 수행하며, 과장된 성과보다 재현 가능한 결과를 우선합니다.',
        'I work across preprocessing, modeling, metric interpretation, and documentation, prioritizing reproducible results over inflated claims.'
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
            {t('제조·센서 데이터 문제에 맞는 방식으로 일합니다', 'I work in a way that matches manufacturing and sensor-data problems')}
          </h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              '웹 서비스 전반보다 제조·설비·센서 환경에서의 데이터 처리와 검증형 AI/SW 구현 경험이 더 선명한 편입니다.',
              'My strongest fit is not generic web development but data handling and validation-oriented AI/SW work in manufacturing, equipment, and sensor environments.'
            )}
          </p>
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
