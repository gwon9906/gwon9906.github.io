import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  const signals = [
    {
      label: t('저전력·제약 환경', 'Constrained Environments'),
      value: t('LoRa / Edge ML', 'LoRa / Edge ML'),
      detail: t(
        '전송량과 연산 제약이 큰 환경에서 압축·복원 파이프라인을 설계했습니다.',
        'Designed compression and restoration pipelines under tight transmission and compute constraints.'
      ),
    },
    {
      label: t('시계열 예측', 'Time-Series Forecasting'),
      value: t('MAPE 83% 개선', '83% MAPE Reduction'),
      detail: t(
        '산업 데이터의 불연속성과 이상치에 대응하는 Encoder-LSTM 구조를 검증했습니다.',
        'Validated an Encoder-LSTM design that handles discontinuities and outliers in industrial data.'
      ),
    },
    {
      label: t('실험 검증', 'Validation'),
      value: t('필드 테스트 / 검증 기록', 'Field Tests / Validation Logs'),
      detail: t(
        '실험 조건과 검증 과정을 체계적으로 기록해 결과를 다시 확인할 수 있도록 정리했습니다.',
        'Systematically documented experiment conditions and validation steps so outcomes can be revisited and verified.'
      ),
    },
  ];

  return (
    <section
      id="hero"
      className="border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.2),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)] pt-28 sm:pt-32"
    >
      <div className="section-container py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.9fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-7"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                {t('Applied ML Engineer', 'Applied ML Engineer')}
              </p>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  {t('이해권', 'Haegwon Lee')}
                </h1>
                <h2 className="max-w-4xl text-2xl font-semibold leading-tight text-slate-800 sm:text-3xl lg:text-[2rem]">
                  {t(
                    '신호·센서·시계열 문제를 제약 환경에서 해결하는 구현형 ML 엔지니어',
                    'Implementation-focused ML engineer solving signal, sensor, and time-series problems in constrained environments'
                  )}
                </h2>
              </div>
              <div className="max-w-3xl space-y-3 text-base leading-7 text-slate-600 sm:text-lg">
                <p>
                  {t(
                    'LoRa, 신호 복원, 산업 시계열 예측, 경량 모델 설계처럼 전송량과 계산 자원이 제한된 환경의 ML 문제를 다뤄왔습니다.',
                    'I work on ML problems where transmission and compute are limited, including LoRa systems, signal restoration, industrial forecasting, and lightweight model design.'
                  )}
                </p>
                <p>
                  {t(
                    '데이터 처리, 모델링, 실험 설계, 검증, 프로토타입 구현까지 직접 연결해 결과를 만드는 방식으로 일합니다.',
                    'I connect data processing, modeling, experiment design, validation, and prototype implementation end to end.'
                  )}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                t('Payload 37.5% 감소', '37.5% Payload Reduction'),
                t('PDR +14%p', '+14%p PDR'),
                t('MAPE 1.13 → 0.188', 'MAPE 1.13 → 0.188'),
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#resume"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                {t('Resume', 'Resume')}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                {t('Projects', 'Projects')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-slate-600">
              <a
                href="https://github.com/gwon9906"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:gwon99065@naver.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="rounded-[28px] border border-slate-200 bg-white/88 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {t('핵심 근거', 'Evidence')}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {t('채용 관점에서 바로 보이는 강점', 'Signals recruiters can scan quickly')}
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {t('대표 3개', 'Top 3')}
              </span>
            </div>

            <div className="space-y-4">
              {signals.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium text-slate-500">{signal.label}</p>
                    <p className="text-sm font-semibold text-slate-900">{signal.value}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{signal.detail}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
