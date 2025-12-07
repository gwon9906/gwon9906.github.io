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
  // ChevronDown, // PDF 출력용: 미사용
  // ChevronUp,   // PDF 출력용: 미사용
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  status: 'completed' | 'in-progress';
  icon: any;
  gradient: string;
  summary: {
    label: string;
    value: string;
  }[];
  overview: string;
  context: string;
  approach: string[];
  results: string[];
  challenges?: {
    problem: string;
    solution: string;
  }[];
  next?: string;
  links?: {
    github?: string;
    demo?: string;
  }[];
  techs: string[];
}

const Projects = () => {
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

  const projects: Project[] = [
    {
      id: 'lora-bam',
      title: 'Edge-Device 통신 효율 극대화를 위한 경량 AI 압축 모델',
      subtitle: 'LoRa 페이로드 62.5% 단축 및 통신 성공률 14%p 향상',
      role: '팀 리드 (전체 파이프라인 설계)',
      period: '2025.03 - 06',
      status: 'completed',
      icon: Radio,
      gradient: 'from-blue-500 to-cyan-500',
      summary: [
        { label: '데이터 압축률', value: '62.5%' },
        { label: 'PDR 개선', value: '+14%p' },
        { label: 'MSE 오차', value: '0.0036' },
        { label: '환경', value: 'Raspberry Pi' },
      ],
      overview: '저사양 엣지 디바이스(Raspberry Pi)에서 LoRa 통신의 고질적인 대역폭 문제를 해결하기 위해, 경량 BAM 모델을 활용한 실시간 데이터 압축/복원 시스템을 구축했습니다.',
      context: 'LoRa 통신은 넓은 커버리지를 갖지만 대역폭이 좁아, 데이터 길이가 길어질수록 패킷 충돌과 전송 실패(Drop)가 빈번했습니다. 특히 N-LOS(비가시권) 환경에서 신뢰성 확보가 필수적이었습니다.',
      approach: [
        'Autoencoder 대비 연산량이 40% 적은 BAM 구조 채택하여 엣지 구동 최적화',
        'TensorFlow 의존성을 제거하고 NumPy만으로 순수 구현하여 추론 속도 개선',
        '실제 2.6km 구간 N-LOS 필드 테스트를 통해 데이터셋 구축 및 검증',
      ],
      results: [
        '페이로드 크기 32 Bytes → 20 Bytes로 62.5% 압축 성공',
        '압축 적용 시 통신 성공률(PDR) 기존 대비 14%p 향상 확인',
        'GPS 데이터 포맷 최적화를 통해 복원 오차(MSE) 0.0184 → 0.0036으로 80% 감소',
      ],
      challenges: [
        {
          problem: '야외 필드 테스트의 환경 변수(날씨, 전파 간섭) 통제 불가',
          solution: '1개월간 동일 구간 반복 주행 데이터를 수집하여 통계적 유의성 확보',
        },
        {
          problem: '부동소수점 변환 과정에서의 정밀도 손실',
          solution: '데이터 특성에 맞춘 정수부/소수부 분리 전처리 파이프라인 구축',
        },
        {
          problem: 'Autoencoder의 과도한 연산량',
          solution: 'NumPy 기반 BAM으로 경량화 및 연산 부하 완화',
        },
      ],
      next: '정형 데이터(센서값)를 넘어, 비정형 데이터(이미지)의 저전력 전송을 위한 모델 확장 연구 진행 중',
      links: [
        { github: 'https://github.com/4xvgal/ChirpChirp' },
        { github: 'https://github.com/gwon9906/Lightweight-MF-BAM' },
      ],
      techs: ['Python', 'NumPy', 'Raspberry Pi', 'LoRa', 'Edge Computing'],
    },
    {
      id: 'valve-prediction',
      title: '시계열 데이터 기반 산업용 밸브 유량 예측 시스템',
      subtitle: 'Encoder-LSTM 설계를 통한 예측 오차(MAPE) 98% 개선',
      role: '개인 연구',
      period: '2024.07 - 12',
      status: 'completed',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-500',
      summary: [
        { label: 'MAPE 개선', value: '98%' },
        { label: '최종 MAPE', value: '0.188' },
        { label: '안정성', value: 'Huber Loss' },
        { label: '구조', value: 'Encoder-LSTM' },
      ],
      overview: '불연속적인 산업 데이터의 특성을 고려한 Encoder-LSTM 모델 설계로 기존 대비 예측 오차(MAPE) 98% 개선을 달성했습니다.',
      context: '기존 LSTM 구조는 개도율 0 지점에서 불연속성이 발생하고, 센서 이상치(Outlier)에 대한 민감도가 높아 실제 산업 환경 적용에 한계가 있었습니다.',
      approach: [
        '계층적 특징 추출을 위한 Encoder-LSTM 구조 재설계',
        '개도율 0 구간에서 시퀀스 재초기화(Reset) 로직 추가로 불연속성 제거',
        'Huber Loss 도입으로 이상치에 대한 강건성(Robustness) 확보',
        '데이터 특성 분석을 통한 불필요한 정규화 제거로 안정성 및 일관성 향상',
      ],
      results: [
        'MAPE 10.0 → 0.188 달성 (약 98% 개선)',
        '이상치·분산 완화를 통해 실제 산업 환경에서의 예측 신뢰성 확보',
      ],
      challenges: [
        {
          problem: '개도율 0 구간에서의 불연속성 발생',
          solution: '시퀀스 재초기화 로직 설계 및 적용',
        },
        {
          problem: '센서 이상치에 대한 높은 민감도',
          solution: 'Huber Loss 적용으로 Outlier에 강건한 학습 구조 구축',
        },
        {
          problem: '데이터 정밀도 불균형으로 인한 분산 증가',
          solution: '정규화 파이프라인 단순화를 통한 분산 축소',
        },
      ],
      next: '도메인별 하이퍼파라미터 최적화 및 실시간 적용 환경으로 확장 예정 (산업체 협력으로 저장소 비공개)',
      techs: ['Python', 'PyTorch', 'LSTM', 'Encoder-Decoder', 'Time Series'],
    },
    {
      id: 'lora-demod',
      title: 'Edge-Cloud LoRa Demodulation을 위한 초경량 신호 압축 모델',
      subtitle: 'Ultra-Low SNR 복조 보조를 위한 Multi-layer BAM 기반 Edge 압축기',
      role: '개인 연구',
      period: '2025.11 - 12',
      status: 'completed',
      icon: Signal,
      gradient: 'from-orange-500 to-red-500',
      summary: [
        { label: 'SNR -25dB 개선', value: '+11.0%p' },
        { label: '차원 압축', value: '93.5%' },
        { label: '복조율', value: '27.8%' },
        { label: '환경', value: 'Raspberry Pi' },
      ],
      overview: 'Ultra-Low SNR(–25 ~ –30 dB) 환경에서 복조 실패한 LoRa 신호를 Cloud(C-RAN)로 전송하여 복조하는 시스템을 위해, Edge 단에서 전송 부담을 최소화하면서 LoRa Chirp 구조를 유지하는 초경량 신호 압축 모델을 개발했습니다.',
      context: 'Ultra-Low SNR 환경에서는 표준 LoRa dechirp+FFT 복조가 실패합니다. 복조 실패 신호를 Cloud(C-RAN)에 보내 여러 Edge에서 모은 실패 신호를 합쳐 복조하는 방식이 필요하나, IQ 데이터를 원본으로 전송하면 전송 비용이 과도하여 Edge 단에서 압축 + 신호 구조 보존 + 노이즈 억제를 동시에 수행할 필요가 있었습니다.',
      approach: [
        'LoRa PHY Demod Baseline 재구축: Upchirp/Downchirp 생성, Dechirp → FFT 기반 심볼 추출 체인 재현',
        'Spectrogram 기반 압축: IQ → STFT 수행 후 Complex spectrogram (128×31) 생성, Real/Imag 분리하여 7,936차원 입력 구성',
        'Multi-layer BAM Encoder 설계: 7,936 → 2,048 → 1,024 → 512차원으로 압축, Edge 장치에서 실시간 학습/추론 가능하도록 경량화',
        'Ultra-Low SNR 복조 실험: –30, –25, –20, –15 dB에서 Baseline vs BAM 성능 비교, Symbol Accuracy 및 Peak Ratio 기반 품질 평가 수행',
      ],
      results: [
        'SNR –30 dB: Baseline 2.5% → BAM 5.8% (+3.3%p), SNR –25 dB: Baseline 16.8% → BAM 27.8% (+11.0%p) 달성',
        '입력 7,936차원 → 512차원 (약 93.5% 데이터 절감), 평균 복원 오차 MSE ≈ 0.003 ~ 0.006',
        '표준 LoRa 복조가 완전히 실패하는 –25 ~ –30 dB에서 실제 개선 효과 확인, Cloud(C-RAN) 복조 성공률 향상',
        'Raspberry Pi 환경에서 실시간 처리 가능 속도 확보',
      ],
      challenges: [
        {
          problem: 'STFT/ISTFT에서 Chirp 위상 붕괴 문제 발생',
          solution: '파라미터 표준화 + Trim/Padding 방식 도입으로 시간축 보정',
        },
        {
          problem: 'Huber Loss 적용 시 collapse 발생',
          solution: 'Update Rule을 Baseline 방식으로 유지하여 안정성 확보',
        },
        {
          problem: 'Layer3 수렴 불안정성',
          solution: 'Layer-wise Freeze 방식(1층→2층→3층 순차 학습) 도입으로 해결',
        },
        {
          problem: 'Low-SNR 복원에서 FFT peak migration 문제',
          solution: 'FFT Peak Ratio 기반 정규화 추가로 peak 위치 보존',
        },
      ],
      next: 'SNR Range별 최적 학습 구간 선정 후 Huber Loss + Layer Freeze 조합으로 추가 개선 실험 예정. Cloud(C-RAN) 복조 모델과 end-to-end 연동하여 전체 시스템 성능 측정 및 TensorRT/ONNX 경량화를 통한 실제 배포 테스트 진행 계획',
      links: [
        { github: 'https://github.com/gwon9906/LoRa-bam-reconstruction' },
      ],
      techs: ['Python', 'PyTorch', 'NumPy', 'LoRa PHY', 'DSP', 'Edge Computing', 'BAM', 'Raspberry Pi'],
    },
  ];

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
        <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white`}>
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
                    {project.status === 'completed' ? '완료' : '진행중'}
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
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-dark-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-gradient-to-b ${project.gradient} rounded-full`} />
              Overview
            </h4>
            <p className="text-dark-700 leading-relaxed">{project.overview}</p>
          </div>

          {/* Context */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-gradient-to-b ${project.gradient} rounded-full`} />
              Context
            </h4>
            <p className="text-dark-700 leading-relaxed">{project.context}</p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-gradient-to-b ${project.gradient} rounded-full`} />
              Approach
            </h4>
            <ul className="space-y-2">
              {project.approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-dark-700">
                  <span className={`mt-1.5 w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full flex-shrink-0`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-lg font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span className={`w-1 h-6 bg-gradient-to-b ${project.gradient} rounded-full`} />
              Results
            </h4>
            <ul className="space-y-2">
              {project.results.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-dark-700">
                  <CheckCircle2 className={`mt-0.5 w-5 h-5 flex-shrink-0 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
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
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:scale-105 transition-transform`}
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
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:scale-105 transition-transform`}
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
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Projects</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            실제 문제를 해결한 프로젝트들
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
