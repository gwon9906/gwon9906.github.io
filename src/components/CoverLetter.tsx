import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Download } from 'lucide-react';
import './Resume.css'; // Resume와 동일한 스타일 사용

const CoverLetter = () => {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      {/* Control Buttons - only visible on screen */}
      <div className="resume-controls no-print">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="control-btn back-btn"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('홈으로', 'Back to Home')}
        </a>
        <button onClick={handlePrint} className="control-btn print-btn">
          <Download className="w-5 h-5" />
          {t('PDF로 저장', 'Save as PDF')}
        </button>
      </div>

      {/* Cover Letter Page */}
      <div className="resume-page">
        {/* Header - Same as Resume */}
        <div className="resume-header">
          <h1 className="resume-name">
            {t('이해권', 'Haegwon Lee')}
          </h1>
          <div className="resume-title">
            {t(
              'AI/ML Engineer | Hardware-aware & On-device AI',
              'AI/ML Engineer | Hardware-aware & On-device AI'
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="resume-contact">
          <div className="contact-item">
            <strong>Email:</strong> gwon99065@naver.com
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong> https://github.com/gwon9906
          </div>
          <div className="contact-item">
            <strong>Portfolio:</strong> https://gwon9906.github.io
          </div>
          <div className="contact-item">
            <strong>{t('휴대폰', 'Phone')}:</strong> 010-3414-9906
          </div>
        </div>

        <div className="resume-divider"></div>

        {/* Date */}
        <div style={{ textAlign: 'right', marginBottom: '2rem', color: '#64748b' }}>
          {t('2025년 1월 22일', 'January 22, 2025')}
        </div>

        {/* Recipient */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {t('채용 담당자님께', 'To the Hiring Manager')}
          </div>
          <div style={{ color: '#64748b' }}>
            {t('아날로그아이(AnalogAI) 귀중', 'AnalogAI Inc.')}
          </div>
        </div>

        {/* Subject */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b' }}>
            {t(
              '제목: AI Algorithm Engineer 지원',
              'Subject: Application for AI Algorithm Engineer Position'
            )}
          </h2>
        </div>

        {/* Greeting */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content">
            {t('안녕하십니까,', 'Dear Hiring Manager,')}
          </p>
        </div>

        {/* Body Paragraphs */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '아날로그아이가 추구하는 "초저전력 온디바이스 AI"는 제가 프로젝트를 통해 일관되게 해결해온 핵심 문제와 정확히 일치합니다. 하드웨어 제약(전력·연산·메모리·노이즈)을 전제로 AI 모델/알고리즘을 설계·최적화하고 정량 지표로 검증해온 AI/ML 엔지니어 이해권입니다. GPU 대비 1,000배 에너지 효율을 목표로 하는 아날로그 인메모리 컴퓨팅 기반 AI 가속기 개발이라는 기술적 도전에 깊은 열망을 느껴 지원하게 되었습니다.',
              'AnalogAI\'s pursuit of "ultra-low-power on-device AI" precisely matches the core problem I have consistently tackled through my projects. I am Haegwon Lee, an AI/ML Engineer with experience in designing, optimizing, and validating AI models/algorithms based on hardware constraints (power, computation, memory, noise) with quantitative metrics. I am deeply inspired by the technical challenge of developing analog in-memory computing-based AI accelerators targeting 1,000x energy efficiency compared to GPUs, which motivates my application.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '학부 연구생으로서 저전력 IoT 환경에서 초경량 데이터 압축·복원 시스템을 설계하며, 배터리 수명 연장을 위해 전송 데이터량을 37.5% 감소시키고 통신 성공률(PDR)을 14%p 향상시킨 경험이 있습니다. 핵심은 Autoencoder 대비 연산 부담이 낮은 BAM 구조를 선택하고, TensorFlow 의존성을 제거한 NumPy 기반 온디바이스 추론으로 전환하여 Raspberry Pi에서 안정적인 실시간 구동을 확보한 것입니다. 실제 N-LOS 필드 테스트(2.6km, 1개월)를 통해 "전송 전력 증대 대신 데이터 표현과 알고리즘 재설계"로 시스템 에너지 효율을 개선하는 접근을 검증했습니다. 이는 아날로그아이가 지향하는 "하드웨어의 물리적 한계를 알고리즘으로 극복"하는 설계 철학과 정확히 일치합니다.',
              'As an undergraduate researcher, I designed an ultra-lightweight data compression/restoration system for low-power IoT environments, reducing transmission data volume by 37.5% and improving Packet Delivery Rate (PDR) by 14%p to extend battery life. The key was selecting a BAM structure with lower computational burden than Autoencoder, transitioning to NumPy-based on-device inference removing TensorFlow dependency, and securing stable real-time operation on Raspberry Pi. Through real N-LOS field tests (2.6km, 1 month), I validated the approach of improving system energy efficiency by "redesigning data representation and algorithms instead of increasing transmission power." This precisely aligns with AnalogAI\'s design philosophy of "overcoming hardware\'s physical limitations through algorithms."'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '또한 산업용 밸브 유량 예측 시스템 개발에서 불연속적인 데이터 특성을 깊이 분석하고 Encoder-LSTM 구조를 재설계하여 MAPE를 98% 개선(10.0→0.188)한 경험이 있습니다. 기존 LSTM이 실패한 이유(개도율 0 지점 불연속성, 센서 이상치 민감도)를 규명하고, 시퀀스 재초기화 로직과 Huber Loss 도입으로 문제를 해결했습니다. 단순히 하이퍼파라미터를 튜닝하는 것이 아니라, 데이터 특성과 하드웨어 조건을 먼저 분석한 뒤 손실 함수·상태 처리·전처리를 근본적으로 재설계하는 접근이 실제 환경 적용의 핵심임을 체득했습니다.',
              'Additionally, in developing an industrial valve flow prediction system, I deeply analyzed discontinuous data characteristics and redesigned the Encoder-LSTM structure to improve MAPE by 98% (10.0→0.188). I identified why existing LSTM failed (discontinuity at valve opening rate 0, sensitivity to sensor outliers) and solved it by introducing sequence reset logic and Huber Loss. Rather than simply tuning hyperparameters, I learned that the key to real-world application is fundamentally redesigning loss functions, state handling, and preprocessing after first analyzing data characteristics and hardware conditions.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '아날로그아이가 추구하는 H/W-S/W Co-design은 제가 프로젝트마다 적용해온 설계 사고방식입니다. 하드웨어 비이상성과 제약 조건(연산량, 메모리 대역폭, 전력 소모, 비트 정밀도 손실)을 학습·추론 알고리즘 설계 단계부터 포함하고, 병목을 정의하여 모델 아키텍처와 데이터 표현을 동시에 최적화하는 경험을 쌓아왔습니다. 특히 아날로그 인메모리 컴퓨팅에서 발생하는 노이즈와 비선형성 문제는, 제가 Ultra-Low SNR 환경에서 LoRa 신호 복원 연구를 통해 다룬 "노이즈 환경에서의 강건한 학습 전략"과 본질적으로 동일한 도전이라고 생각합니다.',
              'AnalogAI\'s pursuit of H/W-S/W Co-design is the design mindset I have applied in every project. I have gained experience including hardware non-idealities and constraints (computation, memory bandwidth, power consumption, bit precision loss) from the learning and inference algorithm design phase, defining bottlenecks, and simultaneously optimizing model architecture and data representation. In particular, I believe the noise and nonlinearity issues in analog in-memory computing are essentially the same challenge as the "robust learning strategy in noisy environments" I addressed through LoRa signal restoration research in Ultra-Low SNR environments.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              'LLM 경량화 및 Transformer 아키텍처 최적화는 현재 제가 가장 깊이 학습하고 싶은 분야입니다. PyTorch와 TensorFlow를 활용한 모델 구현 경험을 바탕으로, 최신 논문(Quantization-Aware Training, Knowledge Distillation, Sparse Attention 등)을 빠르게 탐독하고 코드로 검증하는 방식으로 아날로그 하드웨어 가속기에 특화된 학습 알고리즘 연구에 즉시 기여할 수 있습니다. 배터리 기반 AR·VR 글래스나 휴머노이드 로봇에서 LLM급 고성능 AI를 직접 구동한다는 기술적 비전에 큰 열정을 느낍니다.',
              'LLM lightweighting and Transformer architecture optimization are areas I am most eager to deeply learn. Based on my experience implementing models with PyTorch and TensorFlow, I can immediately contribute to research on learning algorithms specialized for analog hardware accelerators by rapidly exploring the latest papers (Quantization-Aware Training, Knowledge Distillation, Sparse Attention, etc.) and validating them through code. I am deeply passionate about the technical vision of directly running LLM-level high-performance AI on battery-powered AR/VR glasses or humanoid robots.'
            )}
          </p>
        </div>

        {/* Closing */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '"단순히 모델을 돌리는 것을 넘어, 하드웨어의 물리적 한계를 알고리즘으로 극복하는 과정에 즐거움을 느끼는 분"이라는 채용 공고의 문구가 제 연구 경험과 설계 철학을 정확히 표현하고 있어 큰 공감을 느꼈습니다. 아날로그아이의 글로벌 AI 반도체 기술 혁신에 기여하고, 혁신적인 학습 알고리즘 연구를 통해 함께 성장하고 싶습니다. 면접 기회를 주시면 더 구체적으로 말씀드리겠습니다.',
              'The phrase in the job posting, "someone who finds joy in overcoming hardware\'s physical limitations through algorithms beyond simply running models," precisely captures my research experience and design philosophy, deeply resonating with me. I want to contribute to AnalogAI\'s global AI semiconductor technology innovation and grow together through innovative learning algorithm research. I would appreciate the opportunity to discuss this more specifically in an interview.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p className="section-content">
            {t('감사합니다.', 'Thank you for your consideration.')}
          </p>
        </div>

        {/* Signature */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            {t('이해권 올림', 'Sincerely, Haegwon Lee')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
