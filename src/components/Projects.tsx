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
      overview: '라즈베리파이에서도 돌아가는 경량 BAM 압축 모델. 데이터 수집부터 전송, 복원, 평가까지 전체 파이프라인을 직접 구축했습니다.',
      context: 'LoRa는 장거리 통신이 가능하지만, 데이터가 길면 충돌이 많아져요. 특히 건물이나 장애물이 있는 환경에서는 재전송이 빈번하고 배터리 소모가 심했습니다.',
      approach: [
        'Autoencoder보다 가벼운 BAM 선택',
        'NumPy로 직접 구현해서 의존성 최소화',
        '실험 재현을 위한 스크립트와 로그 시스템 구축',
        '실제 도로에서 한 달간 반복 테스트 (~2.6km)',
      ],
      results: [
        '32B → 20B로 62.5% 압축, 전송 성공률(PDR) 14% 향상',
        'GPS 데이터 전처리 개선으로 오차 80% 감소',
        '라즈베리파이에서 실시간 처리 확인',
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
      next: '온도, 습도 같은 규칙적인 센서 데이터에도 BAM을 적용해서 압축률을 더 올려볼 예정입니다.',
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
      overview: '산업 현장의 밸브 유량을 예측하는 AI 모델. 기존보다 98% 정확해졌습니다.',
      context: '기존 LSTM은 밸브가 완전히 닫혔을 때(개도율 0) 예측이 튀고, 센서 노이즈에도 약했어요.',
      approach: [
        'Encoder-LSTM 구조로 재설계',
        '밸브가 닫힐 때마다 시퀀스 리셋',
        'Huber Loss로 이상치에 강하게',
        '불필요한 정규화 제거해서 더 안정적으로',
      ],
      results: [
        'MAPE 10 → 0.188로 98% 개선',
        '실제 산업 현장에서도 안정적으로 작동',
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
      next: '다른 산업 분야에도 적용해볼 예정입니다. (산업체 협력으로 코드 비공개)',
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
      overview: '노이즈가 심한 이미지를 복원하고 분류하는 연구. 어떤 방식이 더 나은지 비교 실험 중입니다.',
      context: '기존 필터는 노이즈가 너무 심하면 작동을 안 해요. 딥러닝으로 복원→분류를 따로 하는게 나을지, 동시에 하는게 나을지 궁금했습니다.',
      approach: [
        '3가지 모델 비교: BAM, CAE, U-Net',
        '2가지 방식 비교: 복원→분류 vs 동시 학습(MTL)',
        'CIFAR-10 이미지에 3종류 노이즈 추가',
        '복원 정확도, 분류 정확도, 속도 측정',
      ],
      results: [
        '복원은 U-Net이 제일 좋음 (스킵 연결 덕분)',
        '분류는 노이즈가 적을 때 MTL이 유리',
        'Burst 노이즈가 제일 어려움',
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
      next: '노이즈 종류별로 어떤 방식이 더 좋은지 분석 완료하면, LoRa 통신 실패한 신호를 복원하는 실전 프로젝트로 확장할 계획입니다.',
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
