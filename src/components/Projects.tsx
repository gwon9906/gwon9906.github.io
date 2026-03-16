import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion'; // PDF 출력용: 미사용
import { useRef } from 'react'; // PDF 출력용: useState, useEffect 제거
import {
  Radio,
  TrendingUp,
  Signal,
  Github,
  ExternalLink,
  Calendar,
  Users,
  CheckCircle2,
  Loader,
  type LucideIcon,
  // ChevronDown, // PDF 출력용: 미사용
  // ChevronUp,   // PDF 출력용: 미사용
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  status: 'completed' | 'in-progress';
  icon: LucideIcon;
  gradient: string;
  summary: {
    label: string;
    value: string;
  }[];
  overview?: string;
  context: string;
  approach: string[];
  results: string[];
  challenges?: {
    problem: string;
    solution: string;
  }[];
  next?: string;
  keyInsight?: string;
  relevance?: string[];
  links?: {
    github?: string;
    demo?: string;
  }[];
  techs: string[];
}

const Projects = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: "-100px" }); // PDF 출력용: 미사용
  // PDF 출력용으로 일시적으로 비활성화
  // const [expandedProject, setExpandedProject] = useState<string | null>(null);
  // const [isPrinting, setIsPrinting] = useState(false);

  // // 인쇄 시 모든 프로젝트 펼치기
  // useEffect(() => {
  //   const handleBeforePrint = () => {
  //     setIsPrinting(true);
  //   };

  //   const handleAfterPrint = () => {
  //     setIsPrinting(false);
  //   };

  //   window.addEventListener('beforeprint', handleBeforePrint);
  //   window.addEventListener('afterprint', handleAfterPrint);

  //   // 미디어 쿼리로도 체크 (일부 브라우저 대응)
  //   const printMediaQuery = window.matchMedia('print');
  //   const handlePrintChange = (e: MediaQueryListEvent | MediaQueryList) => {
  //     setIsPrinting(e.matches);
  //   };

  //   if (printMediaQuery.addEventListener) {
  //     printMediaQuery.addEventListener('change', handlePrintChange);
  //   }

  //   return () => {
  //     window.removeEventListener('beforeprint', handleBeforePrint);
  //     window.removeEventListener('afterprint', handleAfterPrint);
  //     if (printMediaQuery.removeEventListener) {
  //       printMediaQuery.removeEventListener('change', handlePrintChange);
  //     }
  //   };
  // }, []);

  const rawProjects: Project[] = [
    {
      id: 'valve-prediction',
      title: t(
        '시계열 데이터 기반 산업용 밸브 유량 예측 시스템',
        'Industrial Valve Flow Prediction System Based on Time Series Data'
      ),
      subtitle: t(
        'Encoder-LSTM 설계를 통한 예측 오차(MAPE) 83% 개선',
        '83% Prediction Error (MAPE) Improvement through Encoder-LSTM Design'
      ),
      role: t('개인 연구', 'Individual Research'),
      period: '2024.07 - 12',
      status: 'completed',
      icon: TrendingUp,
      gradient: 'from-slate-500 to-slate-600',
      summary: [
        { label: t('MAPE 개선', 'MAPE Improvement'), value: '83%' },
        { label: t('최종 MAPE', 'Final MAPE'), value: '0.188' },
        { label: t('안정성', 'Stability'), value: 'Huber Loss' },
        { label: t('구조', 'Architecture'), value: 'Encoder-LSTM' },
      ],
      overview: t(
        '불연속적인 산업 데이터의 특성을 고려한 Encoder-LSTM 모델 설계로 기존 대비 예측 오차(MAPE) 83% 개선을 달성했습니다.',
        'Achieved 83% improvement in prediction error (MAPE) compared to baseline through Encoder-LSTM model design considering the characteristics of discontinuous industrial data.'
      ),
      context: t(
        '기존 LSTM 구조는 개도율 0 지점에서 불연속성이 발생하고, 센서 이상치(Outlier)에 대한 민감도가 높아 실제 산업 환경 적용에 한계가 있었습니다.',
        'Existing LSTM structures had discontinuities at valve opening rate 0 and high sensitivity to sensor outliers, limiting application in real industrial environments.'
      ),
      approach: [
        t(
          'Baselines: Persistence(직전 시점 유지) + 기본 LSTM을 기준선으로 두고 개선 효과를 비교',
          'Baselines: Compared improvements against a persistence baseline (carry-forward) and a vanilla LSTM'
        ),
        t(
          'Validation: 시간 순서 기반 split과 누수(leakage) 방지 규칙을 적용해 검증',
          'Validation: Used time-ordered split with explicit leakage prevention rules'
        ),
        t(
          'My role: 데이터 분석, 시퀀스 reset/손실 함수 설계, Encoder-LSTM 구현 및 실험 주도',
          'My role: Led data analysis, sequence reset/loss design, Encoder-LSTM implementation, and experiments'
        ),
        t(
          '계층적 특징 추출을 위한 Encoder-LSTM 구조 재설계',
          'Redesigned Encoder-LSTM architecture for hierarchical feature extraction'
        ),
        t(
          '개도율 0 구간에서 시퀀스 재초기화(Reset) 로직 추가로 불연속성 제거',
          'Eliminated discontinuities by adding sequence reset logic at valve opening rate 0'
        ),
        t(
          'Huber Loss 도입으로 이상치에 대한 강건성(Robustness) 확보',
          'Secured robustness against outliers by introducing Huber Loss'
        ),
        t(
          '데이터 특성 분석을 통한 불필요한 정규화 제거로 안정성 및 일관성 향상',
          'Improved stability and consistency by removing unnecessary normalization through data characteristic analysis'
        ),
      ],
      results: [
        t(
          'MAPE 1.13 → 0.188 달성 (약 83% 개선)',
          'Achieved MAPE 1.13 → 0.188 (approximately 83% improvement)'
        ),
        t(
          '이상치·분산 완화를 통해 실제 산업 환경에서의 예측 신뢰성 확보',
          'Secured prediction reliability in real industrial environments through outlier and variance mitigation'
        ),
      ],
      challenges: [
        {
          problem: t(
            '개도율 0 구간에서의 불연속성 발생',
            'Discontinuity occurrence at valve opening rate 0'
          ),
          solution: t(
            '시퀀스 재초기화 로직 설계 및 적용',
            'Designed and applied sequence reset logic'
          ),
        },
        {
          problem: t(
            '센서 이상치에 대한 높은 민감도',
            'High sensitivity to sensor outliers'
          ),
          solution: t(
            'Huber Loss 적용으로 Outlier에 강건한 학습 구조 구축',
            'Built robust learning structure against outliers by applying Huber Loss'
          ),
        },
        {
          problem: t(
            '데이터 정밀도 불균형으로 인한 분산 증가',
            'Increased variance due to data precision imbalance'
          ),
          solution: t(
            '정규화 파이프라인 단순화를 통한 분산 축소',
            'Reduced variance through normalization pipeline simplification'
          ),
        },
      ],
      next: t(
        '도메인별 하이퍼파라미터 최적화 및 실시간 적용 환경으로 확장 예정 (산업체 협력으로 저장소 비공개)',
        'Planning to optimize hyperparameters by domain and expand to real-time application environment (repository private due to industry collaboration)'
      ),
      techs: ['Python', 'PyTorch', 'LSTM', 'Encoder-Decoder', 'Time Series'],
    },
    {
      id: 'lora-bam',
      title: t(
        '저전력 IoT 환경을 위한 초경량 데이터 압축·복원 (BAM 기반)',
        'Ultra-Lightweight Data Compression & Restoration for Low-Power IoT Environments (BAM-based)'
      ),
      subtitle: t(
        '페이로드 37.5% 감소, PDR 14%p 향상, 전송 부담 최소화로 배터리 수명 연장',
        '37.5% Payload Reduction, 14%p PDR Improvement, Battery Life Extension through Minimized Transmission Burden'
      ),
      role: t('팀 리드 (전체 파이프라인 설계)', 'Team Lead (Full Pipeline Design)'),
      period: '2024.03 - 06',
      status: 'completed',
      icon: Radio,
      gradient: 'from-sky-500 to-slate-500',
      summary: [
        { label: t('전송량 감소', 'Transmission Reduction'), value: '37.5%' },
        { label: t('PDR 개선', 'PDR Improvement'), value: '+14%p' },
        { label: t('GPS MSE', 'GPS MSE'), value: '0.0036' },
        { label: t('환경', 'Environment'), value: t('필드 테스트', 'Field Test') },
      ],
      context: t(
        '대규모 IoT 디바이스는 배터리 기반으로 장기간 운용되며, 패킷 손실이 발생할 경우 재전송으로 에너지 소모가 급증하여 디바이스 수명이 크게 단축될 수 있습니다. LoRa/LPWAN 환경에서는 전송 전력을 높이기보다 전송 데이터량 자체를 줄여 재전송 빈도를 낮추는 접근이 더 효과적입니다. 본 프로젝트에서는 제한된 페이로드 조건에서 전송량을 최소화하면서도 데이터 품질을 유지하여 통신 성공률(PDR)을 개선하는 것을 목표로 하였습니다.',
        'Large-scale IoT devices operate long-term on batteries, and packet loss can cause energy consumption to surge through retransmissions, significantly shortening device lifespan. In LoRa/LPWAN environments, reducing transmission data volume rather than increasing transmission power is more effective for lowering retransmission frequency. This project aimed to improve Packet Delivery Rate (PDR) by minimizing transmission volume while maintaining data quality under limited payload conditions.'
      ),
      approach: [
        t(
          'Baselines: 단순 압축 규칙 기반 baseline과 AutoEncoder baseline을 재현해 비교하고, 선행 연구의 효율 지표를 함께 검토한 뒤 BAM을 선택',
          'Baselines: Reproduced and compared a simple rule-based compression baseline and an AutoEncoder baseline, then chose BAM after reviewing efficiency trade-offs with prior work'
        ),
        t(
          'Validation: 동일 데이터·동일 통신 조건(N-LOS 2.6km, 동일 주행/기간)에서 same-condition 비교로 검증',
          'Validation: Verified by same-condition comparison using identical data and communication settings (N-LOS 2.6km, same route/period)'
        ),
        t(
          'My role: 전처리 규격, BAM 압축/복원 파이프라인, 필드 실험 설계와 지표 분석을 직접 설계·구현',
          'My role: Designed and implemented preprocessing specs, BAM compression/restoration pipeline, field experiment setup, and metric analysis'
        ),
        t(
          '경량 압축 구조 설계: AutoEncoder 대비 연산 부담이 낮은 BAM 구조를 적용하여, 저전력·리소스 제약 환경에서의 안정적 구동을 우선 고려',
          'Lightweight Compression Structure Design: Applied BAM structure with lower computational burden compared to AutoEncoder, prioritizing stable operation in low-power, resource-constrained environments'
        ),
        t(
          '데이터 표현 최적화: GPS/센서 데이터의 특성을 분석하여 정수부·소수부 분리 인코딩을 적용하였고, 압축 과정에서 발생하는 정밀도 손실을 최소화',
          'Data Representation Optimization: Analyzed GPS/sensor data characteristics to apply integer-decimal separation encoding, minimizing precision loss during compression'
        ),
        t(
          '실환경 검증 중심 설계: 시뮬레이션이 아닌 실제 N-LOS 환경(약 2.6km 구간)을 1개월간 반복 주행하며 수집한 데이터를 기반으로 성능을 검증',
          'Real Environment Validation-Centered Design: Validated performance based on data collected through repeated driving in real N-LOS environment (approx. 2.6km section) for 1 month, not simulation'
        ),
      ],
      results: [
        t(
          '전송량 감소: Payload 32B → 20B (전송량 약 37.5% 감소)',
          'Transmission Volume Reduction: Payload 32B → 20B (transmission volume approx. 37.5% reduction)'
        ),
        t(
          '통신 신뢰성 개선: 압축 적용 후 PDR 약 +14%p 향상',
          'Communication Reliability Improvement: PDR improved by approximately +14%p after compression application'
        ),
        t(
          '복원 품질 유지: GPS 복원 오차(MSE) 0.0184 → 0.0036으로, 전송량 감소에도 서비스 가능한 품질을 확보',
          'Restoration Quality Maintained: GPS restoration error (MSE) 0.0184 → 0.0036, securing serviceable quality despite reduced transmission volume'
        ),
      ],
      keyInsight: t(
        '패킷 손실이 잦은 환경에서는 모델 성능 자체보다 "한 번에 성공적으로 전달되는 데이터의 양"이 에너지 효율과 시스템 수명을 좌우합니다. 본 프로젝트에서는 전송 전력 증대 대신 데이터 표현과 알고리즘을 재설계하는 방식으로 시스템 효율을 개선하였습니다.',
        'In environments with frequent packet loss, "the amount of data successfully transmitted at once" determines energy efficiency and system lifespan more than model performance itself. This project improved system efficiency by redesigning data representation and algorithms rather than increasing transmission power.'
      ),
      relevance: [
        t('Hardware-aware Algorithm Design 경험 확보', 'Gained Hardware-aware Algorithm Design experience'),
        t('On-device / Edge AI 최적화 관점에서의 설계·검증 경험 보유', 'Experience in design and validation from On-device / Edge AI optimization perspective'),
        t('노이즈·제약 환경에서 실측 기반 성능 개선 수행', 'Performed measurement-based performance improvement in noisy, constrained environments'),
      ],
      links: [
        { github: 'https://github.com/4xvgal/ChirpChirp' },
        { github: 'https://github.com/gwon9906/Lightweight-MF-BAM' },
      ],
      techs: ['Python', 'BAM', 'NumPy', 'Raspberry Pi', 'LoRa', 'Field Testing'],
    },
    {
      id: 'lora-demod',
      title: t(
        'Ultra-Low SNR 환경에서 LoRa 패킷 복원을 위한 전초 연구',
        'Preliminary Study for LoRa Packet Recovery in Ultra-Low SNR Environments'
      ),
      subtitle: t(
        'Edge-Cloud 협력 복조를 위한 초경량 신호 압축 모델 개발',
        'Ultra-Lightweight Signal Compression Model Development for Edge-Cloud Collaborative Demodulation'
      ),
      role: t('개인 연구', 'Individual Research'),
      period: '2025.11 - 2026.02',
      status: 'completed',
      icon: Signal,
      gradient: 'from-amber-500 to-slate-500',
      summary: [
        { label: t('상태', 'Status'), value: t('연구 중단 (목표 미달성)', 'Discontinued (Goal Not Met)') },
        { label: t('최종 목표', 'Final Goal'), value: t('패킷 복원', 'Packet Recovery') },
        { label: t('최종 단계', 'Final Phase'), value: t('전초 연구 완료', 'Preliminary Study Completed') },
        { label: t('환경', 'Environment'), value: t('시뮬레이션', 'Simulation') },
      ],
      overview: t(
        'Ultra-Low SNR(–25 ~ –30 dB) 환경에서 패킷 복원(CRC 통과)을 목표로, Edge 복조 실패 신호를 Cloud(C-RAN)로 전송해 재복조하는 구조를 전초 연구로 수행했습니다. 전송 부담을 최소화하면서 LoRa Chirp 구조를 유지하는 초경량 신호 압축 모델을 구현·검증했습니다.',
        'As a preliminary study, I explored a system that sends demodulation-failed LoRa signals from Edge to Cloud (C-RAN) for re-demodulation, targeting packet recovery (CRC validation) in Ultra-Low SNR (–25 ~ –30 dB). I implemented and validated an ultra-lightweight signal compression model that minimizes transmission burden while preserving LoRa chirp structure.'
      ),
      context: t(
        'Ultra-Low SNR 환경에서는 표준 LoRa dechirp+FFT 복조가 실패합니다. 복조 실패 신호를 Cloud(C-RAN)에 보내 여러 Edge에서 모은 실패 신호를 합쳐 복조하는 방식이 필요하나, IQ 데이터를 원본으로 전송하면 전송 비용이 과도하여 Edge 단에서 압축 + 신호 구조 보존 + 노이즈 억제를 동시에 수행할 필요가 있었습니다.',
        'Standard LoRa dechirp+FFT demodulation fails in Ultra-Low SNR environments. While a method to send failed signals to Cloud (C-RAN) and combine signals from multiple Edges for demodulation is needed, transmitting raw IQ data incurs excessive transmission costs, requiring simultaneous compression + signal structure preservation + noise suppression at the Edge.'
      ),
      approach: [
        t(
          'Baselines: 표준 LoRa dechirp+FFT baseline과 단순 스펙트로그램 디노이징 baseline을 함께 재현해 비교',
          'Baselines: Reproduced and compared a standard LoRa dechirp+FFT baseline and a simple spectrogram denoising baseline'
        ),
        t(
          'Validation: 동일 SNR/동일 입력 세트에서 same-condition 비교(–30, –25, –20, –15 dB)로 평가',
          'Validation: Evaluated with same-condition comparisons at identical SNR/input sets (–30, –25, –20, –15 dB)'
        ),
        t(
          'My role: PHY baseline 재구축, STFT 파이프라인/압축 모델 설계, 실험 자동화 및 지표 해석 담당',
          'My role: Rebuilt PHY baseline, designed STFT pipeline/compression model, and led experiment automation and metric interpretation'
        ),
        t(
          'LoRa PHY Demod Baseline 재구축: Upchirp/Downchirp 생성, Dechirp → FFT 기반 심볼 추출 체인 재현',
          'LoRa PHY Demod Baseline Reconstruction: Reproduced Upchirp/Downchirp generation, Dechirp → FFT-based symbol extraction chain'
        ),
        t(
          'Spectrogram 기반 압축: IQ → STFT 수행 후 Complex spectrogram (128×31) 생성, Real/Imag 분리하여 7,936차원 입력 구성',
          'Spectrogram-based Compression: Generated Complex spectrogram (128×31) after IQ → STFT, configured 7,936-dimensional input by separating Real/Imag'
        ),
        t(
          'Multi-layer BAM Encoder 설계: 7,936 → 2,048 → 1,024 → 512차원으로 압축, Edge 장치에서 실시간 학습/추론 가능하도록 경량화',
          'Multi-layer BAM Encoder Design: Compressed from 7,936 → 2,048 → 1,024 → 512 dimensions, lightweighted for real-time training/inference on Edge devices'
        ),
        t(
          'Ultra-Low SNR 복조 실험: –30, –25, –20, –15 dB에서 Baseline vs BAM 성능 비교, Symbol Accuracy 및 Peak Ratio 기반 품질 평가 수행',
          'Ultra-Low SNR Demodulation Experiments: Baseline vs BAM performance comparison at –30, –25, –20, –15 dB, quality evaluation based on Symbol Accuracy and Peak Ratio'
        ),
      ],
      results: [
        t(
          'Complex-valued BAM 기반 스펙트로그램 디노이저 설계: 실수부/허수부를 분리 처리하는 구조 구현',
          'Complex-valued BAM-based Spectrogram Denoiser Design: Implemented structure for separate processing of real/imaginary parts'
        ),
        t(
          'Lagrange 안정성 조건 적용: 위상 보존 활성화 함수 구현을 통해 학습 안정성 확보',
          'Applied Lagrange Stability Condition: Secured learning stability through implementation of phase-preserving activation functions'
        ),
        t(
          'STFT 기반 전처리 파이프라인 구축: 시간-주파수 변환 및 정규화 로직 완성',
          'Built STFT-based Preprocessing Pipeline: Completed time-frequency transformation and normalization logic'
        ),
        t(
          '학습 안정성 및 복원 품질 검증을 완료하고 결과를 정리',
          'Completed learning stability and restoration quality validation and consolidated results'
        ),
      ],
      challenges: [
        {
          problem: t(
            'STFT/ISTFT에서 Chirp 위상 붕괴 문제 발생',
            'Chirp phase collapse issue in STFT/ISTFT'
          ),
          solution: t(
            '파라미터 표준화 + Trim/Padding 방식 도입으로 시간축 보정',
            'Time-axis correction through parameter standardization + Trim/Padding approach'
          ),
        },
        {
          problem: t(
            'Huber Loss 적용 시 collapse 발생',
            'Collapse occurrence when applying Huber Loss'
          ),
          solution: t(
            'Update Rule을 Baseline 방식으로 유지하여 안정성 확보',
            'Secured stability by maintaining Update Rule in Baseline manner'
          ),
        },
        {
          problem: t(
            'LoRa 심볼 분류에서 이론값과 불일치하는 정확도 문제',
            'Symbol classification accuracy mismatching theoretical values in LoRa'
          ),
          solution: t(
            'LoRa upchirp 신호의 대역폭 특성상 음수 주파수 영역의 신호가 FFT 수행 시 음수 인덱스에 정렬되는 점을 고려하여 주파수 축 재정렬 로직 추가, 이론값과 일치하는 정확도 달성',
            'Added frequency axis reordering logic considering that negative frequency domain signals in LoRa upchirp align to negative indices during FFT due to bandwidth characteristics, achieved accuracy matching theoretical values'
          ),
        },
        {
          problem: t(
            'Low-SNR 복원에서 FFT peak migration 문제',
            'FFT peak migration issue in Low-SNR reconstruction'
          ),
          solution: t(
            'FFT Peak Ratio 기반 정규화 추가로 peak 위치 보존',
            'Preserved peak location by adding FFT Peak Ratio-based normalization'
          ),
        },
      ],
      next: t(
        '목표 성능에 도달하지 못해 본 전초 연구는 중단했습니다. 실패 원인(저SNR 구간 일반화 한계, 복조 안정성)을 문서화했으며, 후속 시도 시 데이터셋 확장과 Cloud(C-RAN) end-to-end 검증이 필요합니다.',
        'This preliminary study was discontinued because target performance was not achieved. I documented failure causes (low-SNR generalization limits and demodulation stability), and any follow-up should include dataset expansion and end-to-end validation with Cloud (C-RAN) integration.'
      ),
      links: [
        { github: 'https://github.com/gwon9906/LoRa-bam-reconstruction' },
      ],
      techs: ['Python', 'PyTorch', 'NumPy', 'LoRa PHY', 'DSP', 'Edge Computing', 'BAM', 'Raspberry Pi'],
    },
  ];

  const projects = rawProjects;

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const cardRef = useRef(null);
    // const cardInView = useInView(cardRef, { once: true, margin: "-100px" }); // PDF 출력용: 미사용
    // PDF 출력용: 모든 프로젝트 항상 펼침 상태 (isExpanded 제거)

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }} // PDF 출력용: 항상 표시
        transition={{ delay: index * 0.2, duration: 0.6 }}
        className="glass-card overflow-hidden hover-lift"
      >
        {/* Card Header */}
        <div className={`p-6 bg-primary-600 text-white`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <project.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-white/90 text-lg mb-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4" />
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </span>
                  <span className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-green-500/90'
                      : 'bg-yellow-500/90'
                  }`}>
                    {project.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Loader className="w-4 h-4 animate-spin" />
                    )}
                    {project.status === 'completed' ? t('완료', 'Completed') : t('진행중', 'In Progress')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50">
          {project.summary.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-sm text-dark-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-primary-600 rounded-full`} />
              Overview
            </h4>
            <p className="text-dark-700 leading-relaxed">{project.overview}</p>
          </div>

          {/* Context */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-primary-600 rounded-full`} />
              Context
            </h4>
            <p className="text-dark-700 leading-relaxed">{project.context}</p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-primary-600 rounded-full`} />
              Approach
            </h4>
            <ul className="space-y-2">
              {project.approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-dark-700">
                  <span className={`mt-1.5 w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-primary-600 rounded-full`} />
              Results
            </h4>
            <ul className="space-y-2">
              {project.results.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-dark-700">
                  <CheckCircle2 className={`mt-0.5 w-5 h-5 flex-shrink-0 bg-primary-600 text-primary-600`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expandable Section - PDF 출력용: 항상 펼침 */}
          {project.challenges && (
            <div>
              {/* PDF 출력용: 버튼 숨김
              <button
                onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-dark-800">Challenges & Solutions</span>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-dark-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-dark-600" />
                )}
              </button>
              */}

              <div className="mb-2">
                <span className="font-bold text-dark-800 text-lg">Challenges & Solutions</span>
              </div>

              <div className="mt-4 space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                    <div className="font-semibold text-dark-800 mb-2">
                      ⚠️ {challenge.problem}
                    </div>
                    <div className="text-dark-700 pl-6">
                      ✅ {challenge.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Insight */}
          {project.keyInsight && (
            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-bold text-dark-800 mb-2">💡 Key Insight</h4>
              <p className="text-dark-700 leading-relaxed">{project.keyInsight}</p>
            </div>
          )}

          {/* Relevance */}
          {project.relevance && (
            <div className="p-4 bg-green-50 rounded-xl">
              <h4 className="font-bold text-dark-800 mb-2">🎯 Relevance</h4>
              <ul className="space-y-2">
                {project.relevance.map((item, idx) => (
                  <li key={idx} className="text-dark-700 leading-relaxed flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Steps */}
          {project.next && (
            <div className="p-4 bg-blue-50 rounded-xl">
              <h4 className="font-bold text-dark-800 mb-2">🔮 Next Steps</h4>
              <p className="text-dark-700 leading-relaxed">{project.next}</p>
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 text-dark-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-3 pt-4 border-t border-slate-200">
              {project.links.map((link, idx) => (
                <div key={idx}>
                  {link.github && (
                    <a
                      href={link.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform`}
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  )}
                  {link.demo && (
                    <a
                      href={link.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }} // PDF 출력용: 항상 표시
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-600">Projects</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            {t('실제 문제를 해결한 프로젝트들', 'Projects solving real-world problems')}
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
