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
      title: 'BAM 기반 LoRa 통신 효율 개선',
      subtitle: 'IoT 페이로드 압축으로 PDR 14% 향상',
      role: '팀 리드',
      period: '2025.03 - 06',
      status: 'completed',
      icon: Radio,
      gradient: 'from-blue-500 to-cyan-500',
      summary: [
        { label: '압축률', value: '62.5%' },
        { label: 'PDR 향상', value: '+14%' },
        { label: 'MSE', value: '0.0036' },
        { label: '실시간 처리', value: 'Edge' },
      ],
      overview: '저자원 엣지(Raspberry Pi) 환경에서 동작 가능한 경량 NumPy 기반 BAM 압축 모델을 설계하고, LoRa 수집-압축-전송-복원-평가 파이프라인 전체에 통합했습니다.',
      context: 'LoRa는 장거리·저전력 통신이 가능하지만, 긴 페이로드로 인한 충돌과 재전송이 빈번하게 발생해 배터리 효율이 저하됩니다. 특히 비가시권(N-LOS) 환경에서는 전송 신뢰도 저하가 심각했습니다.',
      approach: [
        'Autoencoder 대비 연산량이 적은 BAM 채택',
        'NumPy 순수 구현으로 의존성과 지연 최소화',
        '스크립트·로그 체계화로 재현 가능한 실험 환경 구축',
        '한 달간 N-LOS 구간 반복 주행 실험으로 통계적 신뢰 확보 (~2.6km)',
      ],
      results: [
        '62.5% 압축률(32B→20B)로 PDR +14% 향상',
        'GPS 포맷 오류 수정으로 MSE 0.0184 → 0.0036 달성 (~80% 개선)',
        'Raspberry Pi에서 실시간 처리 검증 완료',
      ],
      challenges: [
        {
          problem: '날씨·간섭 등 환경 변수로 인한 측정 변동',
          solution: '1개월 반복 측정으로 평균화 및 신뢰도 향상',
        },
        {
          problem: 'GPS 정수부 포맷 오류로 오차 상승',
          solution: '정수부 제거 등 전처리 개선으로 MSE 80% 감소',
        },
        {
          problem: 'Autoencoder의 과도한 연산',
          solution: 'NumPy BAM으로 경량화 및 연산 부하 완화',
        },
      ],
      next: '온도·습도 등 규칙성이 높은 센서 데이터에 BAM 구조를 적용해 압축 효율을 추가로 높이는 연구를 진행 중입니다.',
      links: [
        { github: 'https://github.com/4xvgal/ChirpChirp' },
        { github: 'https://github.com/gwon9906/Lightweight-MF-BAM' },
      ],
      techs: ['Python', 'NumPy', 'Raspberry Pi', 'LoRa', 'TensorFlow', 'BAM'],
    },
    {
      id: 'valve-prediction',
      title: '산업용 밸브 유량 예측',
      subtitle: 'Encoder-LSTM으로 MAPE 98% 개선',
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
      overview: '산업용 밸브의 개도율과 유량 데이터를 기반으로 고정밀 Encoder-LSTM 예측 모델을 설계했습니다. 모델 구조 최적화를 통해 실제 산업 환경에서 신뢰도 높은 예측을 달성했습니다.',
      context: '기존 LSTM은 개도율 0 구간에서 불연속이 발생하고 이상치에 민감해 실사용에 부적합했습니다.',
      approach: [
        '계층적 특징 추출을 위한 Encoder-LSTM 구조 설계',
        '개도율 0 구간에서 시퀀스 재초기화로 불연속 제거',
        'Huber 손실을 적용해 이상치에 강건한 학습 확보',
        '정규화 단순화로 안정성 및 일관성 향상',
      ],
      results: [
        'MAPE 10 → 0.188 달성 (약 98% 개선)',
        '이상치·분산 완화로 산업 환경에서의 예측 신뢰성 확보',
      ],
      challenges: [
        {
          problem: '개도율 0 구간에서 불연속',
          solution: '시퀀스 재초기화 로직 추가',
        },
        {
          problem: '이상치 민감도 높음',
          solution: 'Huber 손실로 안정성 확보',
        },
        {
          problem: '데이터 정밀도 불균형',
          solution: '정규화 단순화로 분산 축소',
        },
      ],
      next: '도메인별 하이퍼파라미터 최적화 및 실시간 적용 환경으로 확장할 계획입니다. (산업체 협력으로 저장소 비공개)',
      techs: ['Python', 'PyTorch', 'LSTM', 'Encoder-Decoder', 'Time Series'],
    },
    {
      id: 'ultra-low-snr',
      title: 'Ultra-Low SNR 신호 복원·분류',
      subtitle: '연쇄 vs MTL 비교 연구 (진행중)',
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
      overview: '극저 SNR(-30~-10dB) 환경에서 복원과 분류를 동시에 향상시키기 위한 연쇄(Cascaded) vs MTL(다중 과제 학습) 비교 연구를 수행 중입니다.',
      context: '전통적 필터 기반 복원은 초저 SNR에서 성능이 급격히 저하되며, 딥러닝 기반 복원-분류 구조 중 어느 파이프라인이 더 효과적인지 근거가 부족했습니다.',
      approach: [
        '백본: BAM, CAE, U-Net',
        '파이프라인: 연쇄(복원→분류) vs MTL(공유 인코더·이중 디코더)',
        '데이터: CIFAR-10 (150K), 노이즈 3종(Gaussian/SP/Burst)',
        '지표: MSE/MAE/PSNR/Accuracy/Latency',
      ],
      results: [
        '복원: U-Net이 뛰어남 (스킵 연결 효과)',
        '분류: 고 SNR 구간에서 MTL이 우세',
        'Burst 노이즈가 가장 난이도 높음',
      ],
      challenges: [
        {
          problem: '조합 폭발',
          solution: '모듈형 학습·자동 로그·재현 규칙으로 관리',
        },
        {
          problem: '손실 불균형',
          solution: '가중치 스케줄링으로 PSNR-Acc 균형 유지',
        },
        {
          problem: '노이즈 현실성 부족',
          solution: 'SNR 제어 및 혼합 노이즈 합성으로 개선',
        },
      ],
      next: '노이즈 유형별 MTL/연쇄 모델의 적합성을 정량 분석 후, 실제 저신호 영상 복원으로 확장 예정입니다. LoRa 통신의 복조 실패 신호를 클라우드(C-RAN)로 전송해 BAM 압축·복원하는 연구로 발전시킬 계획입니다.',
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
