import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  ChevronDown,
  ChevronUp,
  Cpu,
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

type ProjectVisual = {
  src: string;
  alt: string;
  caption: string;
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
  visual?: ProjectVisual;
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
        { label: t('유량 예측 보고서', 'Valve Forecasting Report'), href: '/files/valve-flow-report.pdf', type: 'evidence' },
      ],
      visual: {
        src: '/files/valve-forecast-chart.png',
        alt: t('유량 예측 결과 그래프', 'Valve forecasting result chart'),
        caption: t(
          '실제값과 예측값이 전반적으로 유사한 추세를 보이며, 정상 상태 기준선으로 활용 가능한 수준의 예측 안정성을 확인했습니다.',
          'The predicted and observed values follow a similar overall trend, supporting use as a stable normal-state baseline.'
        ),
      },
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
          t(
            '데이터 분포와 이상치를 확인하고 전처리 기준을 정리했습니다.',
            'Reviewed distribution and outliers, then defined preprocessing rules.'
          ),
          t(
            'Encoder-LSTM 구조와 손실 함수를 직접 바꾸며 비교 실험을 진행했습니다.',
            'Changed the Encoder-LSTM design and loss function directly through comparative experiments.'
          ),
        ],
        approach: [
          t(
            '정규화를 무조건 적용하지 않고 데이터 정밀도와 해석 가능성을 우선해 원본 값을 최대한 유지했습니다.',
            'Avoided unnecessary normalization and preserved original values as much as possible based on data precision and interpretability.'
          ),
          t(
            '기본 LSTM과 비교하며 인코더 구조를 추가했고, Huber Loss를 적용해 이상치 민감도를 낮췄습니다.',
            'Added an encoder structure against a baseline LSTM and applied Huber Loss to reduce sensitivity to outliers.'
          ),
        ],
        result: ['Loss 4.0376e-05', 'MAE 0.003941', 'MAPE 0.183501'],
        challenges: [
          t(
            '시계열의 불연속 구간과 제한된 유효 자릿수 때문에 일반적인 전처리 관행을 그대로 적용하기 어려웠습니다.',
            'Discontinuous segments and limited numeric precision made standard preprocessing choices unreliable.'
          ),
        ],
        limitations: [
          t(
            '협력 데이터 특성상 전체 데이터와 코드를 공개하지는 못합니다.',
            'The full data and code cannot be published because of collaboration constraints.'
          ),
        ],
      },
    },
    {
      id: 'lora-bam',
      tier: 'featured',
      title: t('LoRa 저신호 환경 통신 개선', 'LoRa Communication Improvement in Low-Quality Channels'),
      oneLiner: t(
        'LPWAN 특성상 손실이 빈번한 LoRa 환경에서 재전송 및 대기 전력으로 기대 배터리 수명이 줄어드는 문제를 줄이기 위해, payload를 경량화하면서 복원 품질과 전송 성공률을 함께 검증한 프로젝트입니다.',
        'A project that addressed LPWAN-style LoRa links where frequent losses increase retransmission and waiting energy, reducing expected battery life, by validating payload reduction together with restoration quality and transmission success.'
      ),
      problemType: ['LoRa', 'LPWAN', 'Field Test', 'Baseline Validation'],
      period: '2025.03 - 2025.06',
      teamSize: t('4인 팀', 'Team of 4'),
      role: t(
        'BAM 구조 구현, baseline 비교, 송수신 파이프라인 구성, 필드 테스트',
        'BAM implementation, baseline comparison, TX/RX pipeline setup, field testing'
      ),
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
      visual: {
        src: '/files/lora-success-chart.png',
        alt: t('LoRa 누적 성공 패킷 비교 그래프', 'LoRa cumulative success comparison chart'),
        caption: t(
          '손실이 반복되는 동일 조건 전송에서 압축 payload가 원본 방식보다 더 높은 누적 성공 패킷 수를 유지해 재전송 부담을 줄일 가능성을 확인했습니다.',
          'Under repeated lossy transmissions in the same conditions, the compressed payload maintained a higher cumulative success count than the raw approach, indicating lower retransmission burden.'
        ),
      },
      detail: {
        problem: t(
          'LoRa는 LPWAN 환경 특성상 전송 손실이 빈번하게 발생할 수 있고, 이때 재전송과 ACK 대기로 추가 전력이 소모되어 기대한 배터리 수명이 확보되지 않을 수 있었습니다. 그래서 단순히 데이터를 보내는 것이 아니라, 손실 가능성이 큰 환경에서 전송 부담 자체를 줄이는 방향이 필요했습니다.',
          'In LPWAN-style LoRa environments, packet loss can occur frequently. Retransmissions and ACK waiting then consume extra energy, making the expected battery life hard to achieve. The goal was therefore not only to send data, but to reduce the transmission burden itself under lossy conditions.'
        ),
        context: t(
          'GPS와 IMU 기반 센서 데이터를 주기적으로 보내야 했고, payload가 길어질수록 airtime이 늘어나 손실과 재전송 가능성이 커질 수 있었습니다. 다만 압축률만 높이면 복원 품질이 무너질 수 있어, 전송 성공률과 데이터 유용성의 균형을 맞추는 방식이 필요했습니다. 이 관점은 LPWAN 환경에서 재전송 대기 전력이 배터리 수명에 영향을 준다는 문제의식과도 맞닿아 있습니다.',
          'The system had to transmit GPS and IMU sensor data periodically. Longer payloads increase airtime, which can raise both loss probability and retransmission risk. However, maximizing compression alone can damage restoration quality, so the method had to balance transmission success with data usefulness. This framing is aligned with the LPWAN perspective that retransmission and waiting energy directly affect battery lifetime.'
        ),
        myRole: [
          t(
            'BAM 기반 압축·복원 구조를 구현하고 송수신 장치 파이프라인을 연결했습니다.',
            'Implemented the BAM-based compression/restoration structure and connected the transmitter-receiver pipeline.'
          ),
          t(
            '동일 장비·동일 설정 기준으로 baseline 비교와 반복 필드 테스트를 수행하고 결과를 로그로 정리했습니다.',
            'Conducted baseline comparisons and repeated field tests under matched device/configuration conditions, then organized the logs.'
          ),
        ],
        approach: [
          t(
            'Raspberry Pi 기반 Linux 환경에서 GPS, 가속도, 자이로 데이터를 수집·압축·전송·복원하는 전체 흐름을 구성했습니다.',
            'Built a full flow that collects, compresses, transmits, and restores GPS, acceleration, and gyro data on Raspberry Pi Linux devices.'
          ),
          t(
            'RAW 전송, 단순 축소 방식, BAM 기반 압축 방식을 비교하면서 payload 감소 폭과 복원 오차를 함께 확인했습니다.',
            'Compared raw transmission, simpler reduction approaches, and BAM-based compression while checking both payload reduction and restoration error.'
          ),
          t(
            '단순히 가장 많이 줄어드는 방식을 고르기보다, 손실이 잦은 LPWAN 환경에서 재전송 부담을 줄일 가능성이 있고 동시에 복원 가능성도 유지되는 방식을 선택했습니다.',
            'Rather than selecting the method that compressed the most, the chosen approach was the one that could reduce retransmission burden in lossy LPWAN conditions while still preserving recoverability.'
          ),
          t(
            'NLOS 2.0~2.6km 구간에서 RAW 32B와 압축 payload를 비교해 전송 성공률과 복원 오차를 동시에 검증했습니다.',
            'Compared RAW 32B and compressed payloads across NLOS 2.0–2.6 km runs, validating both transmission success and restoration error.'
          ),
        ],
        result: [
          t('100회 전송 기준 성공 패킷 수 29건 → 33건', 'Successful packets per 100 transmissions: 29 → 33'),
          'PDR 33%',
          'MSE 0.003676',
          t('baseline 비교를 통해 BAM 선택 근거를 정리', 'Established a clear rationale for choosing BAM through baseline validation'),
        ],
        challenges: [
          t(
            'LPWAN 환경에서는 위치, 날씨, 전파 상태 변화에 따라 손실률이 흔들려 동일 조건 비교를 맞추는 것이 중요했습니다.',
            'In LPWAN conditions, loss rates vary with location, weather, and radio status, so keeping a fair comparison setup was critical.'
          ),
          t(
            '압축률만 강조하면 실제 활용 가능한 데이터 품질이 무너질 수 있어, “얼마나 줄였는가”보다 “줄인 뒤에도 다시 쓸 수 있는가”를 더 중요하게 봤습니다.',
            'Focusing only on compression ratio could destroy usable data quality, so the more important question was whether the reduced payload remained reusable after restoration.'
          ),
        ],
        limitations: [
          t(
            '배터리 수명을 직접 계측한 실험은 아니며, 재전송 부담 감소와 airtime 축소를 통해 전력 소모를 줄일 가능성을 간접적으로 해석한 결과입니다.',
            'This was not a direct battery-life measurement study. The energy benefit is interpreted indirectly through reduced retransmission burden and shorter airtime.'
          ),
        ],
      },
    },
    {
      id: 'onnx-sensor-compression',
      tier: 'supporting',
      title: t('ONNX 변환 기반 경량 추론 검증', 'ONNX-based Lightweight Inference Validation'),
      oneLiner: t(
        '센서 데이터 압축 모델을 ONNX로 변환해 추론 경량화 가능성과 배포 활용성을 보강한 보조 프로젝트입니다.',
        'A supporting project that converted sensor-compression models to ONNX to reinforce lightweight inference and deployment readiness.'
      ),
      problemType: ['ONNX', 'Model Conversion', 'Inference', 'Edge AI'],
      period: '2026.03 - 2026.04',
      teamSize: t('개인 프로젝트', 'Individual project'),
      role: t('모델 변환, 호환성 점검, 추론 경량화 검증', 'Model conversion, compatibility check, lightweight inference validation'),
      highlights: [
        t('PyTorch/TensorFlow 모델 변환 검토', 'Reviewed conversion from PyTorch/TensorFlow models'),
        t('배포 활용성 보강', 'Strengthened deployment usability'),
      ],
      techStack: ['Python', 'ONNX', 'ONNX Runtime', 'PyTorch', 'TensorFlow'],
      icon: Cpu,
      detail: {
        problem: t(
          '모델 성능만 보여주는 것에서 끝나면 실제 활용 가능성이 약해 보일 수 있어, 학습된 모델을 더 가볍고 이식성 있게 사용할 수 있는 방법을 함께 보여줄 필요가 있었습니다.',
          'Showing only model performance can make practical usability look weak, so it was necessary to demonstrate a more portable and lightweight inference path as well.'
        ),
        context: t(
          '기존 센서 데이터 압축·복원 프로젝트를 포트폴리오에서 더 설득력 있게 만들기 위해, 학습 모델을 ONNX 형태로 변환해 다른 환경에서도 사용할 수 있는지 확인했습니다.',
          'To make the existing sensor compression/restoration work more convincing in the portfolio, the project checked whether trained models could be converted into ONNX and reused across environments.'
        ),
        myRole: [
          t(
            '학습 모델을 ONNX 형식으로 변환 가능한 구조로 정리하고 추론 흐름을 점검했습니다.',
            'Restructured trained models for ONNX export and checked the inference flow.'
          ),
          t(
            '변환 이후 입력/출력 형태와 실행 가능성을 확인하며 배포 활용성을 정리했습니다.',
            'Verified input-output compatibility and execution viability after conversion, then organized the deployment implications.'
          ),
        ],
        approach: [
          t(
            '압축 또는 복원 모델을 ONNX로 변환하고, 학습 프레임워크 의존성을 줄인 추론 경로를 확인했습니다.',
            'Converted compression or restoration models to ONNX and checked an inference path with reduced framework dependency.'
          ),
          t(
            '단순 변환 성공 여부만이 아니라, 다른 언어·런타임 환경에서도 활용 가능한 구조인지 관점에서 정리했습니다.',
            'The focus was not only whether conversion succeeded, but whether the result was practical across other languages and runtimes.'
          ),
        ],
        result: [
          t('모델 이식성과 경량 추론 관점의 보강 포인트 확보', 'Added a clear portability and lightweight-inference angle to the project'),
          t('기존 프로젝트를 Edge/배포 관점으로 확장', 'Extended the existing project toward an edge/deployment perspective'),
        ],
        challenges: [
          t(
            '모든 연산이 ONNX 변환에 자연스럽게 대응하지는 않아 모델 구조와 연산 호환성을 함께 점검해야 했습니다.',
            'Not every operation maps cleanly to ONNX, so model structure and operator compatibility had to be reviewed together.'
          ),
        ],
        limitations: [
          t(
            '현재는 배포 가능성을 확인하는 보강 단계이며, 실제 저사양 디바이스 실측 벤치마크는 추가 과제로 남아 있습니다.',
            'This is currently a reinforcement step focused on deployability; real low-spec device benchmarking remains future work.'
          ),
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
      period: '2025.09 - 2026.02',
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
          t(
            'LoRa upchirp/downchirp, dechirp, FFT 기반 baseline을 직접 재구성했습니다.',
            'Reconstructed LoRa upchirp/downchirp, dechirp, and FFT baselines directly.'
          ),
          t(
            '입력 표현, 손실 함수, skip connection 등 여러 대안을 비교하며 실패 원인을 정리했습니다.',
            'Compared several alternatives such as input representations, loss functions, and skip connections while documenting failure causes.'
          ),
        ],
        approach: [
          t(
            '스펙트로그램 기반 입력을 만들고 복원 성능보다 baseline 일치 여부를 우선 확인했습니다.',
            'Built spectrogram-based inputs and prioritized baseline consistency before pushing restoration scores.'
          ),
        ],
        result: [
          t(
            '성능이 포트폴리오 대표 프로젝트가 될 수준은 아니었지만, 후속 연구 방향을 정리하는 데 의미 있는 기준을 남겼습니다.',
            'The performance was not strong enough to lead the portfolio, but it provided a meaningful basis for follow-up work.'
          ),
        ],
        challenges: [
          t(
            '목표 성능 미달 시 중단 기준을 명확히 두고, 무엇이 안 됐는지 남기는 것이 중요했습니다.',
            'It was important to define stop criteria clearly and document what did not work when targets were missed.'
          ),
        ],
        limitations: [
          t(
            '본 연구는 예비 검증 단계이며, 완료 프로젝트처럼 해석하면 안 됩니다.',
            'This was a preliminary validation study and should not be interpreted like a completed production-ready project.'
          ),
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
            {t('대표 프로젝트', 'Featured Projects')}
          </h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {t(
              '완료된 프로젝트를 먼저 배치했고, 진행 중인 연구나 예비 검증은 아래에 정리했습니다.',
              'Completed projects are shown first, while ongoing or preliminary work is listed below.'
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
                  aria-expanded={isExpanded}
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
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                project.tier === 'featured'
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {project.tier === 'featured' ? t('핵심', 'Featured') : t('보조', 'Supporting')}
                            </span>
                            {project.problemType.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                            {project.title}
                          </h3>
                          <p className="max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                            {project.oneLiner}
                          </p>
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
                      <div className="grid gap-8 px-6 py-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-8">
                        <div className="space-y-6">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('문제', 'Problem')}</p>
                            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                              {project.detail.problem}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('배경', 'Context')}</p>
                            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                              {project.detail.context}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-900">{t('내 역할', 'My Role')}</p>
                            <ul className="mt-2 space-y-2">
                              {project.detail.myRole.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                                >
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
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                                >
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

                            {project.visual && (
                              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                                <div className="aspect-[16/10] w-full bg-white">
                                  <img
                                    src={project.visual.src}
                                    alt={project.visual.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-contain"
                                  />
                                </div>
                                <div className="border-t border-slate-200 px-4 py-3">
                                  <p className="text-xs leading-6 text-slate-500">{project.visual.caption}</p>
                                </div>
                              </div>
                            )}
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
                            <p className="text-sm font-semibold text-slate-900">
                              {t('한계 / 메모', 'Limitations / Notes')}
                            </p>
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
                                <span
                                  key={stack}
                                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                                >
                                  {stack}
                                </span>
                              ))}
                            </div>
                          </div>

                          {project.links && project.links.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                              {project.links.map((link) => {
                                const openInNewTab =
                                  link.href.startsWith('http') || link.href.startsWith('/');

                                return (
                                  <a
                                    key={link.href}
                                    href={link.href}
                                    target={openInNewTab ? '_blank' : undefined}
                                    rel={openInNewTab ? 'noopener noreferrer' : undefined}
                                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                                  >
                                    {linkIcon(link.type)}
                                    {link.label}
                                    <ArrowUpRight className="h-4 w-4" />
                                  </a>
                                );
                              })}
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
