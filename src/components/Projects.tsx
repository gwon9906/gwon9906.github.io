import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  Github,
  Radio,
  Signal,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

interface Project {
  id: string;
  tier: 'featured' | 'supporting';
  title: string;
  oneLiner: string;
  problemType: string[];
  period: string;
  teamSize: string;
  role: string;
  highlights: string[];
  techStack: string[];
  status?: string;
  links?: {
    github?: string;
    demo?: string;
  }[];
  icon: LucideIcon;
  detail: {
    problem: string;
    context: string;
    myRole: string[];
    approach: string[];
    result: string[];
    challenges: string[];
    limitations: string[];
  };
}

const Projects = () => {
  const { t } = useLanguage();
  const [expandedProject, setExpandedProject] = useState<string>('lora-bam');

  const projects: Project[] = [
    {
      id: 'lora-bam',
      tier: 'featured',
      title: t(
        '저전력 IoT 환경용 초경량 데이터 압축·복원',
        'Ultra-Lightweight Data Compression & Restoration for Low-Power IoT'
      ),
      oneLiner: t(
        'LoRa 환경에서 전송량을 줄이면서 복원 품질과 통신 성공률을 함께 개선한 프로젝트입니다.',
        'Reduced LoRa payload while improving restoration quality and communication success in a resource-constrained setting.'
      ),
      problemType: ['Signal Restoration', 'Edge ML', 'LoRa', 'Experimental Validation'],
      period: '2024.03 - 2024.06',
      teamSize: t('3인 팀', 'Team of 3'),
      role: t('팀 리드, 파이프라인 설계/실험 검증 주도', 'Team lead, pipeline design and validation lead'),
      highlights: [
        t('Payload 32B → 20B, 전송량 37.5% 감소', 'Payload 32B → 20B, 37.5% transmission reduction'),
        t('실환경 필드 테스트에서 PDR +14%p', '+14%p PDR in real-world field tests'),
      ],
      techStack: ['Python', 'NumPy', 'BAM', 'LoRa', 'Raspberry Pi', 'Field Testing'],
      icon: Radio,
      links: [
        { github: 'https://github.com/4xvgal/ChirpChirp' },
        { github: 'https://github.com/gwon9906/Lightweight-MF-BAM' },
      ],
      detail: {
        problem: t(
          '배터리 기반 LoRa 디바이스에서는 패킷 손실이 잦을수록 재전송으로 에너지 소모가 커집니다. 전송 전력을 높이기보다 전송량 자체를 줄여 성공 확률을 높일 필요가 있었습니다.',
          'Battery-powered LoRa devices lose lifetime quickly when packet loss triggers retransmission. We needed to reduce transmitted data itself instead of simply increasing transmission power.'
        ),
        context: t(
          '제한된 페이로드 안에서 GPS/센서 데이터를 보내야 했고, 품질이 너무 낮아지면 복원 데이터가 쓸모없어지는 상황이었습니다. 시뮬레이션이 아니라 N-LOS 약 2.6km 구간의 실제 주행 데이터를 기준으로 검증했습니다.',
          'GPS and sensor data had to fit into a limited payload budget, but too much compression would make the restored data unusable. Validation was done on repeated real N-LOS driving data over roughly 2.6 km rather than simulation only.'
        ),
        myRole: [
          t('전처리 규격과 BAM 기반 압축·복원 파이프라인 설계', 'Designed preprocessing specs and the BAM-based compression/restoration pipeline'),
          t('실험 조건 통제와 필드 테스트 지표 분석 수행', 'Controlled evaluation conditions and analyzed field-test metrics'),
        ],
        approach: [
          t('규칙 기반 압축과 AutoEncoder baseline을 재현해 비교 기준을 먼저 만들었습니다.', 'Reproduced rule-based compression and AutoEncoder baselines before choosing the final direction.'),
          t('GPS/센서 데이터 특성에 맞춰 정수부/소수부 분리 인코딩으로 정밀도 손실을 줄였습니다.', 'Used integer-decimal split encoding to limit precision loss based on the structure of GPS and sensor data.'),
          t('연산량이 낮은 BAM 구조를 선택해 저전력 장치에서의 실행 가능성을 우선했습니다.', 'Selected BAM for lower computational burden so the method remains feasible on low-power hardware.'),
        ],
        result: [
          t('전송량 감소와 함께 통신 성공률을 높여 시스템 효율 개선 근거를 만들었습니다.', 'Created evidence that system efficiency can improve by lowering payload while increasing communication success.'),
          t('GPS 복원 오차 MSE를 0.0184 → 0.0036으로 낮춰 서비스 가능한 품질을 유지했습니다.', 'Reduced GPS restoration MSE from 0.0184 to 0.0036 while keeping the compressed setup usable.'),
        ],
        challenges: [
          t('압축률을 높이면 복원 품질이 무너질 수 있어 통신 성능과 데이터 품질의 균형이 중요했습니다.', 'Pushing compression too far risked breaking restoration quality, so the trade-off between transmission efficiency and data quality mattered.'),
          t('필드 테스트 기반 비교를 위해 동일 경로·동일 조건에서 실험을 반복해 변수 통제를 맞췄습니다.', 'To keep the field-test comparison credible, I repeated experiments under the same route and operating conditions.'),
        ],
        limitations: [
          t('산업 배포 수준의 장기 운영 검증까지는 아직 진행하지 않았습니다.', 'This has not yet been validated in a long-term production deployment.'),
        ],
      },
    },
    {
      id: 'valve-prediction',
      tier: 'featured',
      title: t(
        '산업용 밸브 유량 시계열 예측',
        'Industrial Valve Flow Forecasting'
      ),
      oneLiner: t(
        '불연속성과 이상치가 있는 산업 데이터를 대상으로 Encoder-LSTM 구조와 손실 설계를 조정해 예측 오차를 개선했습니다.',
        'Improved forecasting error on industrial time-series data with discontinuities and outliers by redesigning the Encoder-LSTM setup and loss.'
      ),
      problemType: ['Time-Series Forecasting', 'Lightweight Modeling', 'Experimental Validation'],
      period: '2024.07 - 2024.12',
      teamSize: t('개인 연구', 'Individual project'),
      role: t('데이터 분석, 구조 설계, 실험 주도', 'Data analysis, architecture design, experiment lead'),
      highlights: [
        t('MAPE 1.13 → 0.188, 약 83% 개선', 'MAPE 1.13 → 0.188, about 83% improvement'),
        t('불연속 구간 reset + Huber Loss로 강건성 확보', 'Sequence reset + Huber Loss for robustness'),
      ],
      techStack: ['Python', 'PyTorch', 'LSTM', 'Encoder-LSTM', 'Time Series'],
      icon: TrendingUp,
      detail: {
        problem: t(
          '기존 LSTM은 개도율 0 지점의 불연속성과 센서 이상치 때문에 실제 산업 데이터에서 오차가 크게 흔들렸습니다.',
          'The baseline LSTM broke down on real industrial data because discontinuities around valve opening 0 and sensor outliers destabilized predictions.'
        ),
        context: t(
          '정확도만이 아니라 실제 적용 가능한 안정성이 중요했고, 시간 순서를 보존한 검증과 누수 방지가 필수였습니다.',
          'Application stability mattered as much as raw accuracy, and the evaluation had to preserve time order and avoid leakage.'
        ),
        myRole: [
          t('데이터 특성 분석 후 정규화와 시퀀스 처리 방식을 다시 정의했습니다.', 'Redefined normalization and sequence handling after analyzing the data characteristics.'),
          t('Encoder-LSTM 구조, reset logic, 손실 함수를 직접 설계하고 실험했습니다.', 'Designed and tested the Encoder-LSTM architecture, reset logic, and loss function directly.'),
        ],
        approach: [
          t('Persistence와 vanilla LSTM을 baseline으로 두고 개선 폭을 비교했습니다.', 'Compared against persistence and vanilla LSTM baselines.'),
          t('개도율 0 구간에서 시퀀스를 재초기화해 불연속 구간 누적 오차를 줄였습니다.', 'Reset sequences around valve opening 0 to reduce accumulated errors from discontinuities.'),
          t('Huber Loss를 적용해 이상치에 덜 민감한 학습 구조를 만들었습니다.', 'Used Huber Loss to reduce sensitivity to outliers.'),
        ],
        result: [
          t('예측 오차를 큰 폭으로 줄였고, 산업 환경 적용 가능성을 더 설득력 있게 만들었습니다.', 'Substantially reduced forecasting error and improved the case for real industrial use.'),
          t('정규화 단순화와 데이터 처리 기준 정비로 실험 일관성도 함께 개선했습니다.', 'Improved experiment consistency by simplifying normalization and tightening preprocessing rules.'),
        ],
        challenges: [
          t('좋은 성능보다 재현 가능한 검증 설계가 더 중요해 데이터 누수 방지와 split 기준을 엄격하게 잡았습니다.', 'Reliable validation mattered more than headline metrics, so I enforced strict split and leakage rules.'),
          t('산업 데이터의 정밀도 불균형이 분산을 키워 전처리 기준을 여러 번 조정했습니다.', 'Precision imbalance in the industrial data increased variance and required repeated preprocessing adjustments.'),
        ],
        limitations: [
          t('산업체 협력 데이터라 공개 저장소와 재현 코드를 모두 제공하지는 못합니다.', 'Because this used industry collaboration data, I cannot publish the full repository or dataset.'),
        ],
      },
    },
    {
      id: 'lora-demod',
      tier: 'supporting',
      title: t(
        'Ultra-Low SNR LoRa 패킷 복원 전초 연구',
        'Preliminary Study on LoRa Packet Recovery in Ultra-Low SNR'
      ),
      oneLiner: t(
        '초저 SNR 복조를 위한 PHY baseline 재구축과 신호 압축 실험을 체계적으로 검증한 연구입니다.',
        'A structured validation study covering full-cycle work on PHY baseline reconstruction and signal compression under ultra-low SNR.'
      ),
      problemType: ['Signal Restoration', 'LoRa PHY', 'Validation Analysis'],
      period: '2025.11 - 2026.02',
      teamSize: t('개인 연구', 'Individual project'),
      role: t('PHY baseline 재구축, 실험 자동화, 검증 분석', 'PHY baseline rebuild, experiment automation, validation analysis'),
      highlights: [
        t('초저 SNR 구간용 STFT 기반 압축 파이프라인 구축', 'Built an STFT-based compression pipeline for ultra-low SNR signals'),
        t('실험 검증 결과를 문서화해 후속 연구 기준 확보', 'Documented validation outcomes to guide follow-up work'),
      ],
      techStack: ['Python', 'PyTorch', 'NumPy', 'LoRa PHY', 'DSP', 'STFT'],
      icon: Signal,
      status: t('추가 프로젝트 / 실험 검증', 'Additional project / validation study'),
      links: [{ github: 'https://github.com/gwon9906/LoRa-bam-reconstruction' }],
      detail: {
        problem: t(
          'Ultra-Low SNR에서는 표준 LoRa 복조 성능이 크게 저하되고, 원본 IQ를 그대로 전송하면 Edge-Cloud 협업 복조 비용이 너무 커집니다.',
          'Standard LoRa demodulation fails in ultra-low SNR, while transmitting raw IQ data makes edge-cloud collaboration too expensive.'
        ),
        context: t(
          'CRC 통과 수준의 패킷 복원을 위해, Edge에서 신호 구조를 최대한 보존하며 압축하는 방법을 우선 검증했습니다.',
          'The target was packet recovery at CRC-pass quality, and the first step was validating an edge-side compression method that preserves signal structure.'
        ),
        myRole: [
          t('LoRa PHY baseline을 재구축하고 STFT 파이프라인과 BAM 압축 구조를 설계했습니다.', 'Rebuilt the LoRa PHY baseline and designed the STFT pipeline and BAM compression structure.'),
          t('실험 자동화, SNR 조건별 비교, 검증 결과 정리를 직접 수행했습니다.', 'Ran experiment automation, SNR-by-SNR comparisons, and validation analysis myself.'),
        ],
        approach: [
          t('Dechirp-FFT 기반 복조 체인을 먼저 재현해 비교 기준을 만들었습니다.', 'Reproduced the dechirp-FFT demodulation chain to create a trustworthy baseline.'),
          t('IQ를 complex spectrogram으로 변환한 뒤 다층 BAM으로 압축했습니다.', 'Converted IQ into complex spectrograms and compressed them with a multi-layer BAM model.'),
          t('SNR -30 ~ -15 dB에서 baseline과 비교해 구조 보존 여부를 평가했습니다.', 'Compared against the baseline from -30 to -15 dB to evaluate structure preservation.'),
        ],
        result: [
          t('학습 안정성과 파이프라인 동작을 검증하고, 패킷 복원 성능 고도화를 위한 개선 포인트를 확보했습니다.', 'Validated training stability and end-to-end pipeline behavior, and identified clear directions for packet recovery performance improvement.'),
          t('대신 저 SNR 일반화 한계와 복조 안정성 문제를 명확하게 문서화했습니다.', 'The project still produced clear documentation of low-SNR generalization limits and demodulation stability issues.'),
        ],
        challenges: [
          t('STFT/ISTFT 과정에서 chirp 위상이 무너지는 문제가 있어 주파수축 정렬과 보정 로직을 추가했습니다.', 'Chirp phase collapse in STFT/ISTFT required extra frequency-axis alignment and correction logic.'),
          t('일부 손실 함수는 바로 collapse를 유발해 업데이트 규칙을 보수적으로 다시 설계했습니다.', 'Some loss-function choices immediately caused collapse, so the update rule had to be redesigned more conservatively.'),
        ],
        limitations: [
          t('대표 프로젝트로 전면 배치할 정도의 결과는 아니므로 supporting case로만 두는 것이 적절합니다.', 'The result is not strong enough to lead the portfolio and is best presented as a supporting case.'),
        ],
      },
    },
  ];

  const featuredProjects = projects.filter((project) => project.tier === 'featured');
  const supportingProjects = projects.filter((project) => project.tier === 'supporting');

  const renderDetailList = (items: string[]) => (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="body-copy-sm flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="projects" className="section-container py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="space-y-10"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
                className="rounded-[30px] border border-slate-200/90 ring-1 ring-slate-100 bg-white shadow-[0_24px_70px_-44px_rgba(15,23,42,0.35)]"
                      <h3 className="text-2xl font-bold tracking-[-0.02em] leading-[1.22] text-slate-950 sm:text-[1.7rem]">
                        {project.title}
                      </h3>
                  </div>
                      <p className="text-sm font-bold tracking-[-0.015em] text-slate-700">
              {t('대표 프로젝트', 'Featured Projects')}
            </h2>
            <p className="text-base leading-7 text-slate-600">
              {t(
                '제약이 큰 환경에서 문제를 정의하고, 모델을 설계·검증한 프로젝트를 중심으로 정리했습니다.',
                'This section focuses on projects where I defined constrained-environment problems and designed and validated models.'
              )}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            {t(
              '핵심 사례: LoRa 압축·복원 / 산업 시계열 예측 / Ultra-Low SNR 실험 검증',
              'Key cases: LoRa compression & restoration / industrial forecasting / ultra-low SNR validation study'
            )}
          </div>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => {
            const isOpen = expandedProject === project.id;
            return (
              <article
                key={project.id}
                className="rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_70px_-44px_rgba(15,23,42,0.35)]"
              >
                <div className="grid gap-6 border-b border-slate-200 p-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:p-8">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="rounded-2xl bg-slate-950 p-3 text-white">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        {t('대표 프로젝트', 'Featured')}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-slate-950 sm:text-[1.7rem]">{project.title}</h3>
                      <p className="max-w-3xl text-base leading-7 text-slate-600">{project.oneLiner}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.problemType.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {t('내 역할', 'My Role')}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700">{project.role}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 px-4 py-3">
                      <p className="text-sm font-bold tracking-[-0.015em] text-slate-700">
                          {t('핵심 성과', 'Key Results')}
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="text-sm leading-6 text-slate-700">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>{project.teamSize}</span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {t('사용 기술', 'Tech Stack')}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setExpandedProject(isOpen ? '' : project.id)}
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                      >
                        {t('상세 보기', 'View Details')}
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {project.links?.[0]?.github && (
                        <a
                          href={project.links[0].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 p-6 lg:grid-cols-2 lg:p-8">
                        <div className="space-y-5">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Problem</h4>
                            <p className="mt-2 text-sm leading-7 text-slate-700">{project.detail.problem}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Context</h4>
                            <p className="mt-2 text-sm leading-7 text-slate-700">{project.detail.context}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">My Role</h4>
                            <div className="mt-2">{renderDetailList(project.detail.myRole)}</div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Approach</h4>
                            <div className="mt-2">{renderDetailList(project.detail.approach)}</div>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Result</h4>
                            <div className="mt-2">{renderDetailList(project.detail.result)}</div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                              {t('Challenges', 'Challenges')}
                            </h4>
                            <div className="mt-2">{renderDetailList(project.detail.challenges)}</div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                              {t('Limitations', 'Limitations')}
                            </h4>
                            <div className="mt-2">{renderDetailList(project.detail.limitations)}</div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tech Stack</h4>
                            <p className="mt-2 text-sm leading-7 text-slate-700">{project.techStack.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        {supportingProjects.length > 0 && (
          <div className="space-y-4 rounded-[28px] border border-dashed border-slate-300 bg-slate-50/80 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {t('추가 프로젝트', 'Additional Project')}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {t(
                    '대표 프로젝트를 보완하는 실험 검증 사례입니다. 문제 정의, 실험 과정, 검증 결과를 중심으로 정리했습니다.',
                    'A validation-focused case that complements featured projects, centered on problem framing, experiment process, and outcomes.'
                  )}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {supportingProjects.map((project) => {
                const isOpen = expandedProject === project.id;
                return (
                  <div key={project.id} className="rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="rounded-2xl bg-slate-900 p-3 text-white">
                            <project.icon className="h-5 w-5" />
                          </div>
                          {project.status && (
                            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                              {project.status}
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-950">{project.title}</h4>
                          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{project.oneLiner}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.problemType.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                          <p>{project.period}</p>
                          <p>{project.role}</p>
                        </div>
                        <ul className="space-y-1 text-sm leading-6 text-slate-700">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setExpandedProject(isOpen ? '' : project.id)}
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                        >
                          {t('상세 보기', 'View Details')}
                          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                        {project.links?.[0]?.github && (
                          <a
                            href={project.links[0].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.24 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 grid gap-5 border-t border-slate-200 pt-5 lg:grid-cols-2">
                            <div className="space-y-4">
                              <div>
                                <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Problem</h5>
                                <p className="mt-2 text-sm leading-7 text-slate-700">{project.detail.problem}</p>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">My Role</h5>
                                <div className="mt-2">{renderDetailList(project.detail.myRole)}</div>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Approach</h5>
                                <div className="mt-2">{renderDetailList(project.detail.approach)}</div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Result</h5>
                                <div className="mt-2">{renderDetailList(project.detail.result)}</div>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                  {t('Challenges / Limitations', 'Challenges / Limitations')}
                                </h5>
                                <div className="mt-2">
                                  {renderDetailList([...project.detail.challenges, ...project.detail.limitations])}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tech Stack</h5>
                                <p className="mt-2 text-sm leading-7 text-slate-700">{project.techStack.join(', ')}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
