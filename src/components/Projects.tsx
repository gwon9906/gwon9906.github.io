import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  FileText,
  Github,
  Radio,
  Signal,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

type ProjectLink = {
  label: string;
  href: string;
  type: 'github' | 'evidence' | 'external';
};

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
  icon: LucideIcon;
  links?: ProjectLink[];
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
  const [expandedProject, setExpandedProject] = useState<string>('valve-prediction');

  const projects: Project[] = [
    {
      id: 'valve-prediction',
      tier: 'featured',
      title: t('산업용 밸브 정상 유량 예측', 'Industrial Valve Normal-Flow Forecasting'),
      oneLiner: t(
        '실제 밸브 시계열 데이터의 불연속성과 이상치를 반영해 예측 성능과 안정성을 개선한 프로젝트입니다.',
        'A forecasting project that improved stability and performance by reflecting discontinuities and outliers in real valve time-series data.'
      ),
      problemType: ['Time Series', 'Manufacturing Data', 'Forecasting', 'Validation'],
      period: '2024.07 - 2024.12',
      teamSize: t('개인 연구', 'Individual project'),
      role: t('데이터 분석, 모델 설계, 실험 검증', 'Data analysis, model design, experiment validation'),
      highlights: [
        'MAPE 0.1835',
        'MAE 0.00394',
        t('Encoder-LSTM + Huber Loss', 'Encoder-LSTM + Huber Loss'),
      ],
      techStack: ['Python', 'TensorFlow/Keras', 'LSTM', 'Time-Series', 'Huber Loss'],
      icon: TrendingUp,
      links: [
        { label: t('프로젝트 PDF', 'Project PDF'), href: '/files/valve-flow-report.pdf', type: 'evidence' },
      ],
      detail: {
        problem: t(
          '정상 상태 밸브의 유량을 안정적으로 예측해 이후 이상 징후 탐지의 기준선을 만들 필요가 있었습니다.',
          'The project needed a stable normal-flow baseline for later abnormality detection on valves.'
        ),
        context: t(
          '입력은 개도율과 입력/출력 압력 6개였고, 데이터는 실제 사용 중인 밸브에서 수집되었습니다. 측정 정밀도가 제한적이어서 이상치 처리 기준과 입력 표현을 함께 조정해야 했습니다.',
          'Inputs consisted of valve opening plus six pressure values, collected from real operating valves. Because measurement precision was limited, preprocessing rules and input representation had to be adjusted carefully.'
        ),
        myRole: [
          t('데이터 분포와 이상치를 확인하고 전처리 기준을 정리했습니다.', 'Reviewed distribution and outliers, then defined preprocessing rules.'),
          t('Encoder-LSTM 구조와 손실 함수를 직접 바꾸며 비교 실험을 진행했습니다.', 'Changed the Encoder-LSTM design and loss function directly through comparative experiments.'),
        ],
        approach: [
          t('정규화를 무조건 적용하지 않고 데이터 정밀도와 해석 가능성을 우선해 원본 값을 최대한 유지했습니다.', 'Avoided unnecessary normalization and preserved original values as much as possible based on data precision and interpretability.'),
          t('기본 LSTM과 비교하며 인코더 구조를 추가했고, Huber Loss를 적용해 이상치 민감도를 낮췄습니다.', 'Added an encoder structure against a baseline LSTM and applied Huber Loss to reduce sensitivity to outliers.'),
        ],
        result: [
          'Loss 4.0376e-05',
          'MAE 0.003941',
          'MAPE 0.183501',
        ],
        challenges: [
          t('시계열의 불연속 구간과 제한된 유효 자릿수 때문에 일반적인 전처리 관행을 그대로 적용하기 어려웠습니다.', 'Discontinuous segments and limited numeric precision made standard preprocessing choices unreliable.'),
        ],
        limitations: [
          t('협력 데이터 특성상 전체 데이터와 코드를 공개하지는 못합니다.', 'The full data and code cannot be published because of collaboration constraints.'),
        ],
      },
    },
    {
      id: 'lora-bam',
      tier: 'featured',
      title: t('LoRa 저신호 환경 통신 개선', 'LoRa Communication Improvement in Low-Quality Channels'),
      oneLiner: t(
        '저전력 장거리 통신 환경에서 payload를 줄이면서 복원 품질과 전송 성공률을 함께 검증한 프로젝트입니다.',
        'A project that validated both restoration quality and transmission success while reducing payload in low-power long-range communication.'
      ),
      problemType: ['LoRa', 'Field Test', 'Compression', 'Sensor Data'],
      period: '2025.03 - 2025.06',
      teamSize: t('4인 팀', 'Team of 4'),
      role: t('BAM 구조 구현, 송수신 파이프라인 구성, 필드 테스트', 'BAM implementation, TX/RX pipeline setup, field testing'),
      highlights: [
        '32B → 20B payload',
        t('100회 기준 29 → 33', '29 → 33 per 100 transmissions'),
        'MSE 0.003676',
      ],
      techStack: ['Python', 'Raspberry Pi', 'Linux', 'LoRa', 'BAM', 'CSV Logging'],
      icon: Radio,
      links: [
        { label: 'GitHub', href: 'https://github.com/gwon9906/Lightweight-MF-BAM', type: 'github' },
        { label: t('최종 보고서', 'Final Report'), href: '/files/lora-final-report.pdf', type: 'evidence' },
      ],
      detail: {
        problem: t(
          'LoRa에서는 페이로드가 커질수록 전송 시간이 길어지고 패킷 손실 가능성이 높아져, 재전송으로 에너지 소모가 커지는 문제가 있었습니다.',
          'In LoRa, larger payloads increase airtime and packet loss risk, which drives retransmissions and higher energy cost.'
        ),
        context: t(
          'GPS와 IMU 기반 센서 데이터를 보내야 했고, 단순히 많이 압축하면 복원 품질이 무너질 수 있어 통신 성공률과 데이터 유용성의 균형이 중요했습니다.',
          'The system had to send GPS and IMU sensor data. Over-compressing could damage restoration quality, so balancing transmission success with data usefulness mattered.'
        ),
        myRole: [
          t('BAM 기반 압축·복원 구조를 구현하고 송수신 장치 파이프라인을 연결했습니다.', 'Implemented the BAM-based compression/restoration structure and connected the transmitter-receiver pipeline.'),
          t('동일 장비·동일 설정 조건으로 반복 필드 테스트를 수행하고 결과를 로그로 정리했습니다.', 'Ran repeated field tests under the same device/configuration conditions and documented the results.'),
        ],
        approach: [
          t('Raspberry Pi 기반 Linux 환경에서 GPS, 가속도, 자이로 데이터를 수집·압축·전송·복원하는 흐름을 구성했습니다.', 'Built a full flow that collects, compresses, transmits, and restores GPS, acceleration, and gyro data on Raspberry Pi Linux devices.'),
          t('NLOS 2.0~2.6km 구간에서 RAW 32B와 압축 payload를 비교해 PDR과 복원 오차를 동시에 확인했습니다.', 'Compared RAW 32B and compressed payloads across NLOS 2.0–2.6 km runs, checking both PDR and restoration error.'),
        ],
        result: [
          t('100회 전송 기준 성공 패킷 수 29건 → 33건', 'Successful packets per 100 transmissions: 29 → 33'),
          'PDR 33%',
          'MSE 0.003676',
        ],
        challenges: [
          t('현장 실험은 위치, 날씨, 전파 환경에 영향을 크게 받아 동일 조건을 맞추는 것이 중요했습니다.', 'Field tests were highly sensitive to location, weather, and radio conditions, so controlling comparison conditions was critical.'),
        ],
        limitations: [
          t('장기 운영 환경까지 검증한 것은 아니며, 다양한 이동 패턴에 대한 일반화 개선 여지가 있습니다.', 'This is not yet a long-term deployment study, and generalization to broader movement patterns can still improve.'),
        ],
      },
    },
    {
      id: 'lora-demod',
      tier: 'supporting',
      title: t('Ultra-Low SNR LoRa 복원 전초 연구', 'Preliminary Study on LoRa Recovery in Ultra-Low SNR'),
      oneLiner: t(
        '초저 SNR에서 LoRa 신호 복원을 목표로 PHY baseline과 신호 표현 방식을 재검토한 예비 연구입니다.',
        'A preliminary study that revisited PHY baselines and signal representations for LoRa recovery under ultra-low SNR.'
      ),
      problemType: ['Signal Processing', 'LoRa PHY', 'Preliminary Study'],
      period: '2024.09 - 2025.02',
      teamSize: t('개인 연구', 'Individual research'),
      role: t('baseline 재구축, 실험 설계, 실패 원인 정리', 'Baseline reconstruction, experiment design, failure analysis'),
      highlights: [
        t('Dechirp + FFT baseline 재구축', 'Rebuilt Dechirp + FFT baseline'),
        t('실패 원인 문서화', 'Documented failure causes'),
      ],
      techStack: ['Python', 'NumPy', 'STFT', 'LoRa PHY', 'PyTorch'],
      icon: Signal,
      detail: {
        problem: t(
          '표준 복조가 거의 동작하지 않는 초저 SNR 영역에서 무엇이 병목인지 먼저 확인할 필요가 있었습니다.',
          'It was necessary to identify the true bottlenecks first in ultra-low-SNR regions where standard demodulation nearly fails.'
        ),
        context: t(
          '바로 성능 개선을 주장하기보다, 복조 baseline과 입력 표현을 다시 확인하며 실험 체계를 정리하는 데 목적을 두었습니다.',
          'Rather than claiming immediate gains, the goal was to rebuild the demodulation baseline and organize an experiment framework around input representations.'
        ),
        myRole: [
          t('LoRa upchirp/downchirp, dechirp, FFT 기반 baseline을 직접 재구성했습니다.', 'Reconstructed LoRa upchirp/downchirp, dechirp, and FFT baselines directly.'),
          t('입력 표현, 손실 함수, skip connection 등 여러 대안을 비교하며 실패 원인을 정리했습니다.', 'Compared several alternatives such as input representations, loss functions, and skip connections while documenting failure causes.'),
        ],
        approach: [
          t('스펙트로그램 기반 입력을 만들고 복원 성능보다 baseline 일치 여부를 우선 확인했습니다.', 'Built spectrogram-based inputs and prioritized baseline consistency before pushing restoration scores.'),
        ],
        result: [
          t('성능이 포트폴리오 대표 프로젝트가 될 수준은 아니었지만, 후속 연구 방향을 정리하는 데 의미 있는 기준을 남겼습니다.', 'The performance was not strong enough to lead the portfolio, but it provided a meaningful basis for follow-up work.'),
        ],
        challenges: [
          t('목표 성능 미달 시 중단 기준을 명확히 두고, 무엇이 안 됐는지 남기는 것이 중요했습니다.', 'It was important to define stop criteria clearly and document what did not work when targets were missed.'),
        ],
        limitations: [
          t('본 연구는 예비 검증 단계이며, 완료 프로젝트처럼 해석하면 안 됩니다.', 'This was a preliminary validation study and should not be interpreted like a completed production-ready project.'),
        ],
      },
    },
  ];

  const linkIcon = (type: ProjectLink['type']) => {
    if (type === 'github') return <Github className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  };

  return (
    <section id="projects" className="section-container py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="space-y-8"
      >
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {t('Projects', 'Projects')}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t('제출용으로 앞세울 프로젝트', 'Projects to lead with for applications')}
          </h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              '완료했고 수치로 설명할 수 있는 프로젝트를 먼저 배치했습니다. 진행 중이거나 예비 성격인 연구는 아래에 두었습니다.',
              'Completed projects with defensible metrics are shown first. Ongoing or preliminary work is placed later.'
            )}
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;

            return (
              <motion.article
                key={project.id}
                layout
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setExpandedProject(isExpanded ? '' : project.id)}
                  className="w-full text-left"
                >
                  <div className="flex flex-col gap-5 px-6 py-6 lg:px-8 lg:py-7">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-slate-950 p-3 text-white">
                          <project.icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${project.tier === 'featured' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                              {project.tier === 'featured' ? t('핵심', 'Featured') : t('보조', 'Supporting')}
                            </span>
                            {project.problemType.map((tag) => (
                              <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                          <p className="max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">{project.oneLiner}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-slate-400 lg:pt-1">
                        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </div>
                    </div>

                    <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 lg:justify-end">
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.period}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {project.teamSize}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden border-t border-slate-200"
                    >
                      <div className="grid gap-8 px-6 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-8">
                        <div className="space-y-6">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('문제', 'Problem')}</p>
                            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{project.detail.problem}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('배경', 'Context')}</p>
                            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{project.detail.context}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('내 역할', 'My Role')}</p>
                            <ul className="mt-2 space-y-2">
                              {project.detail.myRole.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('접근', 'Approach')}</p>
                            <ul className="mt-2 space-y-2">
                              {project.detail.approach.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                            <p className="text-sm font-semibold text-slate-900">{t('결과', 'Results')}</p>
                            <ul className="mt-3 space-y-2">
                              {project.detail.result.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('어려웠던 점', 'Challenges')}</p>
                            <ul className="mt-2 space-y-2">
                              {project.detail.challenges.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('한계 / 메모', 'Limitations / Notes')}</p>
                            <ul className="mt-2 space-y-2">
                              {project.detail.limitations.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('기술 스택', 'Tech Stack')}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.techStack.map((stack) => (
                                <span key={stack} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600">
                                  {stack}
                                </span>
                              ))}
                            </div>
                          </div>

                          {project.links && project.links.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                              {project.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target={link.href.startsWith('http') ? '_blank' : undefined}
                                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                                >
                                  {linkIcon(link.type)}
                                  {link.label}
                                  <ArrowUpRight className="h-4 w-4" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
