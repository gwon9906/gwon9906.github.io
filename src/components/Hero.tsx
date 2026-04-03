import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText, Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  const evidence = [
    {
      label: t('산업 시계열 예측', 'Industrial Time-Series Forecasting'),
      value: 'MAPE 0.1835',
      detail: t(
        '실제 밸브 데이터에서 Encoder-LSTM과 Huber Loss를 적용해 정상 유량 예측 성능을 검증했습니다.',
        'Validated a normal-flow forecasting model on real valve data using Encoder-LSTM and Huber Loss.'
      ),
    },
    {
      label: t('현장 검증', 'Field Validation'),
      value: t('100회 기준 29 → 33', '29 → 33 per 100 transmissions'),
      detail: t(
        'NLOS 환경 필드 테스트에서 압축 payload 적용 후 성공 패킷 수를 개선했습니다.',
        'Improved successful packet count after applying compressed payloads in NLOS field tests.'
      ),
    },
    {
      label: t('구현 환경', 'Implementation Environment'),
      value: 'Python · Linux · Raspberry Pi',
      detail: t(
        '모델링뿐 아니라 데이터 처리, 장치 환경 실행, 실험 조건 통제와 문서화까지 직접 수행했습니다.',
        'Worked end to end from modeling to data handling, device-side execution, controlled experiments, and documentation.'
      ),
    },
  ];

  const chips = [
    t('제조·센서 데이터', 'Manufacturing & Sensor Data'),
    t('스마트제조 / 생산기술 적합', 'Smart Manufacturing Fit'),
    t('모델 설계 + 검증 중심', 'Modeling + Validation Focus'),
  ];

  return (
    <section
      id="hero"
      className="border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.18),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)] pt-28 sm:pt-32"
    >
      <div className="section-container py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.95fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-7"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                {t('Manufacturing / Sensor Data AI·SW', 'Manufacturing / Sensor Data AI·SW')}
              </p>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  {t('이해권', 'Haegwon Lee')}
                </h1>
                <h2 className="max-w-4xl text-2xl font-semibold leading-tight text-slate-800 sm:text-3xl lg:text-[2rem]">
                  {t(
                    '제조·센서 데이터에서 예측 모델과 현장 검증 파이프라인을 구현해 온 AI/SW 엔지니어',
                    'AI/SW engineer focused on predictive models and validation pipelines for manufacturing and sensor data'
                  )}
                </h2>
              </div>
              <div className="max-w-3xl space-y-3 text-base leading-7 text-slate-600 sm:text-lg">
                <p>
                  {t(
                    '산업용 밸브 시계열 예측과 LoRa 통신 개선 프로젝트를 수행하며, 데이터 구조와 운영 제약을 반영한 모델 설계·실험·검증 경험을 쌓았습니다.',
                    'Through industrial valve forecasting and LoRa communication projects, I built experience in model design, experimentation, and validation under real data and operating constraints.'
                  )}
                </p>
                <p>
                  {t(
                    '성능 수치만이 아니라 실험 조건, 비교 기준, 현장 적용 가능성을 함께 보는 방식을 중요하게 생각합니다.',
                    'I focus not only on headline metrics but also on experiment conditions, fair comparisons, and practical applicability.'
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                'MAPE 0.1835',
                t('32B → 20B Payload', '32B → 20B Payload'),
                t('MSE 0.003676', 'MSE 0.003676'),
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
                <FileText className="h-4 w-4" />
                {t('제출용 요약', 'Submission Summary')}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                {t('핵심 프로젝트', 'Selected Projects')}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/files/lora-final-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                <Download className="h-4 w-4" />
                {t('근거 PDF', 'Evidence PDF')}
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
                  {t('직무 적합 요약', 'Role-fit Summary')}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t(
                      '제조 데이터, 현장 제약, 검증 기반 문제 해결 경험을 중심으로 정리했습니다.',
                    'Summarized around manufacturing data, operating constraints, and validation-driven problem solving.'
                  )}
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {t('핵심 3개', 'Top 3')}
              </span>
            </div>

            <div className="space-y-4">
              {evidence.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
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
