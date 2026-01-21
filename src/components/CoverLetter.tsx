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
          {t('2025년 1월 21일', 'January 21, 2025')}
        </div>

        {/* Recipient */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {t('채용 담당자님께', 'To the Hiring Manager')}
          </div>
          <div style={{ color: '#64748b' }}>
            {t('아날로그아이 귀중', 'AnalogAI Inc.')}
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
              '하드웨어 제약(전력·연산·메모리·노이즈)을 전제로, 온디바이스 환경에서 AI 모델/알고리즘을 설계·최적화하고 정량 지표로 검증해온 AI/ML 엔지니어 이해권입니다. 귀사의 AI Algorithm Engineer 직무에 지원하게 되어 큰 기대를 품고 있습니다.',
              'I am Haegwon Lee, an AI/ML Engineer with experience in designing, optimizing, and validating AI models/algorithms in on-device environments, with a focus on hardware constraints (power, computation, memory, noise). I am excited to apply for the AI Algorithm Engineer position at AnalogAI.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '학부 연구생으로서 LoRa 통신 환경에서 초경량 데이터 압축·복원 시스템을 설계하며, 저전력 IoT 디바이스의 배터리 수명 연장을 위해 전송 데이터량을 37.5% 감소시키고 PDR을 14%p 향상시킨 경험이 있습니다. BAM 기반 경량 모델을 NumPy로 재구현하여 TensorFlow 의존성을 제거하고, 실제 N-LOS 필드 테스트(2.6km, 1개월)를 통해 실환경 검증을 수행했습니다. 이 과정에서 모델 성능보다 "한 번에 성공적으로 전달되는 데이터의 양"이 에너지 효율과 시스템 수명을 좌우한다는 핵심 인사이트를 얻었습니다.',
              'As an undergraduate researcher, I designed an ultra-lightweight data compression/restoration system for LoRa communication environments, reducing transmission data volume by 37.5% and improving PDR by 14%p to extend battery life for low-power IoT devices. I reimplemented a BAM-based lightweight model in NumPy to remove TensorFlow dependency and validated it through real N-LOS field tests (2.6km, 1 month). Through this process, I gained the key insight that "the amount of data successfully transmitted at once" determines energy efficiency and system lifespan more than model performance itself.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '또한 산업용 밸브 유량 예측 시스템 개발에서 불연속적인 데이터 특성을 분석하고 Encoder-LSTM 구조를 재설계하여 MAPE를 98% 개선(10.0→0.188)한 경험이 있습니다. 개도율 0 구간에서 시퀀스 재초기화 로직을 추가하고 Huber Loss를 도입하여 센서 노이즈와 이상치에 강건한 모델을 구축했습니다. 기존 방식이 통하지 않을 때 손실 함수, 상태 처리, 전처리를 재설계하며 문제를 해결하는 접근이 실제 산업 환경 적용의 핵심임을 배웠습니다.',
              'Additionally, in developing an industrial valve flow prediction system, I analyzed discontinuous data characteristics and redesigned the Encoder-LSTM structure to improve MAPE by 98% (10.0→0.188). I built a model robust to sensor noise and outliers by adding sequence reset logic at valve opening rate 0 and introducing Huber Loss. I learned that redesigning loss functions, state handling, and preprocessing when existing methods fail is key to real industrial environment application.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '귀사가 추구하는 하드웨어-알고리즘 공동 최적화(H/W-S/W Co-design)와 온디바이스 AI 효율화는 제가 프로젝트를 통해 체득한 설계 철학과 정확히 일치합니다. 하드웨어 비이상성과 제약 조건을 포함해 학습·추론 전략을 설계하고, 병목을 정의하여 경량화와 추론 효율을 개선하며, 정량 지표 기반의 빠른 실험과 검증을 반복하는 경험을 바탕으로 귀사의 AI 알고리즘 개발에 즉시 기여할 수 있습니다.',
              'AnalogAI\'s pursuit of hardware-algorithm co-optimization (H/W-S/W Co-design) and on-device AI efficiency perfectly aligns with the design philosophy I have developed through my projects. With experience in designing learning and inference strategies considering hardware non-idealities and constraints, defining bottlenecks to improve lightweighting and inference efficiency, and iterating rapid experimentation and validation based on quantitative metrics, I can immediately contribute to your AI algorithm development.'
            )}
          </p>
        </div>

        {/* Closing */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '제약이 큰 환경에서 데이터 표현과 복원 파이프라인을 재설계해 성능-효율 trade-off를 개선하는 문제 해결 능력으로 귀사의 아날로그 AI 기술 혁신에 기여하고 싶습니다. 면접 기회를 주시면 더 자세히 말씀드리겠습니다.',
              'I would like to contribute to AnalogAI\'s analog AI technology innovation with my problem-solving ability to improve performance-efficiency trade-offs by redesigning data representation and restoration pipelines in highly constrained environments. I would appreciate the opportunity to discuss this further in an interview.'
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
