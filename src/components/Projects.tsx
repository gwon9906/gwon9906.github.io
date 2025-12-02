import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
  ChevronDown,
  ChevronUp,
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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
      overview: '저사양 엣지 디바이스(Raspberry Pi)에서 LoRa 통신의 고질적인 대역폭 문제를 해결하기 위해, 경량 BAM 모델을 활용한 실시간 데이터 압축/복원 시스템을 구축함.',
      context: 'LoRa 통신은 넓은 커버리지를 갖지만 대역폭이 좁아, 데이터 길이가 길어질수록 패킷 충돌과 전송 실패(Drop)가 빈번함. 특히 N-LOS(비가시권) 환경에서 신뢰성 확보가 필수적이었음.',
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
      overview: '불연속적인 산업 데이터의 특성을 고려한 Encoder-LSTM 모델 설계로 기존 대비 예측 오차(MAPE) 98% 개선을 달성함.',
      context: '기존 LSTM 구조는 개도율 0 지점에서 불연속성이 발생하고, 센서 이상치(Outlier)에 대한 민감도가 높아 실제 산업 환경 적용에 한계가 있었음.',
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
      id: 'ultra-low-snr',
      title: 'Ultra-Low SNR 환경에서의 신호 복원 및 분류 파이프라인 비교 연구',
      subtitle: '연쇄(Cascaded) vs MTL(Multi-Task Learning) 구조 비교 분석',
      role: '개인 연구',
      period: '2025.03 - 현재',
      status: 'in-progress',
      icon: Signal,
      gradient: 'from-orange-500 to-red-500',
      summary: [
        { label: '비교', value: '연쇄 vs MTL' },
        { label: '데이터', value: 'CIFAR-10' },
        { label: 'SNR 범위', value: '-30~-10dB' },
        { label: '백본', value: 'BAM/CAE/U-Net' },
      ],
      overview: '극저 SNR(-30~-10dB) 환경에서 복원과 분류를 동시에 향상시키기 위한 연쇄(Cascaded) vs MTL(다중 과제 학습) 비교 연구를 수행 중.',
      context: '전통적 필터 기반 복원 방식은 초저 SNR에서 성능이 급격히 저하됨. 딥러닝 기반 복원-분류 구조 중 어느 파이프라인이 더 효과적인지에 대한 정량적 근거가 부족했음.',
      approach: [
        '백본 모델: BAM, CAE, U-Net (3종 비교)',
        '파이프라인: 연쇄(복원→분류) vs MTL(공유 인코더·이중 디코더) 비교',
        '데이터: CIFAR-10 (150K), 노이즈 3종(Gaussian/Salt&Pepper/Burst) × 5단계 SNR',
        '평가 지표: MSE/MAE/PSNR(복원) + Accuracy(분류) + Latency(추론 속도)',
      ],
      results: [
        '복원 성능: U-Net이 가장 우수함 (스킵 연결을 통한 공간 정보 보존)',
        '분류 성능: 고 SNR 구간에서 MTL 구조가 연쇄 대비 우세',
        '노이즈 난이도: Burst > Gaussian > Salt&Pepper 순으로 확인',
      ],
      challenges: [
        {
          problem: '모델 × 파이프라인 × 노이즈 조합 폭발로 인한 실험 관리 어려움',
          solution: '모듈형 학습 구조 설계 및 자동 로깅 시스템으로 재현 가능성 확보',
        },
        {
          problem: 'MTL에서 복원 손실과 분류 손실 간 균형(Balance) 문제',
          solution: '동적 가중치 스케줄링을 통해 PSNR-Accuracy 균형 유지',
        },
        {
          problem: '합성 노이즈의 현실성(Realism) 부족',
          solution: 'SNR 제어 및 혼합 노이즈 합성으로 실환경 근사화',
        },
      ],
      next: '노이즈 유형별 MTL/연쇄 모델의 적합성을 정량 분석 완료 후, LoRa 통신 복조 실패 신호를 클라우드(C-RAN)로 전송하여 복원하는 실전 응용 연구로 확장 예정',
      links: [
        { github: 'https://github.com/gwon9906/Denoise-and-Classify' },
      ],
      techs: ['Python', 'PyTorch', 'U-Net', 'BAM', 'CAE', 'MTL', 'CIFAR-10'],
    },
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
    const isExpanded = expandedProject === project.id;

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

          {/* Expandable Section */}
          {project.challenges && (
            <div>
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

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-4"
                >
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
                </motion.div>
              )}
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
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
