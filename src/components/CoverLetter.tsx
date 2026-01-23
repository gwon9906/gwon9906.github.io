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

        {/* Opening */}
        <div style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '저는 모델 자체의 화려함보다 전력·메모리·노이즈 같은 제약 조건 아래에서 동작하는 성능을 만드는 것에 집중해 온 AI/ML 엔지니어 이해권입니다. 초저전력 온디바이스 AI를 지향하는 AnalogAI가 풀고자 하는 문제(제약 환경에서의 실험–검증–개선)가 제가 프로젝트에서 반복적으로 다뤄온 방식과 맞닿아 있어 지원합니다.',
              'I am Haegwon Lee, an AI/ML Engineer who has focused on creating performance under constraints like power, memory, and noise rather than model sophistication itself. I am applying because AnalogAI\'s pursuit of ultra-low-power on-device AI (experimentation–validation–improvement in constrained environments) aligns with the approach I have repeatedly employed in my projects.'
            )}
          </p>
        </div>

        {/* Section 1 Header */}
        <div style={{ marginBottom: '1rem', marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1e293b' }}>
            {t(
              '1. 제약 조건을 "데이터"로 검증하고 극복해왔습니다.',
              '1. I have validated and overcome constraints through "data".'
            )}
          </h3>
        </div>

        {/* LoRa Project */}
        <div style={{ marginBottom: '1rem' }}>
          <p className="section-content" style={{ fontWeight: 'bold' }}>
            {t(
              '[LoRa: 복원 기반(BAM) 접근을 전제로 한 데이터 경량화 실험]',
              '[LoRa: Data Lightweighting Experiment Based on Restoration (BAM) Approach]'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              'LoRa 통신 환경에서 배터리 효율을 높이는 핵심은 재전송을 줄이기 위한 전송 데이터 최소화라고 판단했습니다. 이를 위해 수신 측에서 일부 손실을 알고리즘으로 보완할 수 있도록 BAM(Bidirectional Associative Memory) 기반 복원 구조를 전제로 실험을 설계했고, Payload를 32B에서 20B로(37.5%) 줄였을 때 PDR(Packet Delivery Ratio)이 14%p 개선되는 결과를 확인했습니다.',
              'I determined that the key to improving battery efficiency in LoRa communication environments is minimizing transmission data to reduce retransmissions. To achieve this, I designed experiments based on a BAM (Bidirectional Associative Memory) restoration structure that can algorithmically compensate for some losses on the receiving end, and confirmed that reducing Payload from 32B to 20B (37.5%) improved PDR (Packet Delivery Ratio) by 14%p.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '이 과정에서 Log-distance Path Loss 같은 이론 모델이 실제 전파 환경을 완전히 설명하지 못한다는 점을 체감했습니다. 실제 필드에서는 장애물/회절뿐 아니라, 같은 위치에서도 시간대에 따라 결과가 달라지는 변동성이 나타났습니다. 저는 0.1–4km 구간에서 반복 측정을 수행하며, 시뮬레이션 예측과 실측 결과의 편차를 확인했고, 현실 환경에서 성능이 유지되는 조건을 데이터로 정리하는 경험을 쌓았습니다.',
              'During this process, I realized that theoretical models like Log-distance Path Loss cannot fully explain real radio propagation environments. In actual fields, variability appeared where results differed depending on time of day even at the same location, beyond just obstacles and diffraction. I performed repeated measurements in 0.1–4km sections, confirmed discrepancies between simulation predictions and measured results, and gained experience organizing conditions where performance is maintained in real environments through data.'
            )}
          </p>
        </div>

        {/* Industrial Time Series Project */}
        <div style={{ marginBottom: '1rem', marginTop: '1.5rem' }}>
          <p className="section-content" style={{ fontWeight: 'bold' }}>
            {t(
              '[산업 시계열: 튜닝보다 원인 분석 중심의 개선]',
              '[Industrial Time Series: Improvement Centered on Root Cause Analysis Rather Than Tuning]'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '산업용 밸브 유량 예측 프로젝트에서는 단순 튜닝보다 오차가 커지는 구간(불연속 지점, 이상치)의 데이터 특성을 먼저 분석했습니다. 이후 Encoder-LSTM 구조 재설계와 Huber Loss 도입 등 문제 상황에 맞는 해결책을 적용했고, MAPE를 1.13에서 0.188 수준으로 낮추는 방향의 개선을 만들었습니다. 이 경험을 통해 복잡한 모델보다 데이터의 병목(분포, 노이즈, 불연속)을 정의하고 대응하는 과정이 실무적으로 더 중요하다는 점을 확인했습니다.',
              'In the industrial valve flow prediction project, I first analyzed the data characteristics of sections where errors increased (discontinuous points, outliers) rather than simple tuning. I then applied solutions tailored to the problem situation, such as Encoder-LSTM structure redesign and Huber Loss introduction, and achieved improvements reducing MAPE from 1.13 to 0.188 level. Through this experience, I confirmed that defining and addressing data bottlenecks (distribution, noise, discontinuity) is more practically important than complex models.'
            )}
          </p>
        </div>

        {/* Section 2 Header */}
        <div style={{ marginBottom: '1rem', marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1e293b' }}>
            {t(
              '2. AnalogAI에서 "이론을 현실로 구현하는" 엔지니어가 되겠습니다.',
              '2. I will be an engineer who "implements theory into reality" at AnalogAI.'
            )}
          </h3>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              'AnalogAI가 지향하는 초저전력 AI 반도체 환경에서는, 이상적인 가정에서 나온 수식/알고리즘이 실제 하드웨어의 노이즈·비선형성·정밀도 제약 위에서 어떤 방식으로 성능이 변하는지 검증하는 과정이 중요하다고 생각합니다. 저는 다음 방식으로 기여하겠습니다.',
              'In the ultra-low-power AI semiconductor environment that AnalogAI pursues, I believe the process of verifying how formulas/algorithms derived from ideal assumptions change in performance on actual hardware with noise, nonlinearity, and precision constraints is crucial. I will contribute in the following ways.'
            )}
          </p>
        </div>

        <div style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            <strong>• {t('강건성(Robustness) 관점의 검증', 'Validation from Robustness Perspective')}:</strong> {t('이상적인 조건에서만 성능이 나오는 해법보다, 노이즈/정밀도 저하가 존재할 때도 성능이 급격히 무너지지 않는 조건을 실험으로 확인하고, 성능이 무너지는 경계 조건을 정리해 알고리즘의 현실적인 완성도를 높이겠습니다.', 'Rather than solutions that only perform under ideal conditions, I will experimentally verify conditions where performance does not collapse sharply even when noise/precision degradation exists, organize boundary conditions where performance breaks down, and enhance the practical completeness of algorithms.')}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem', paddingLeft: '1rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            <strong>• {t('리소스 관점의 최적화', 'Optimization from Resource Perspective')}:</strong> {t('Transformer/LLM 계열 모델을 포함해 낯선 아키텍처라도, 우선 실행 환경을 구축하고 메모리·연산 병목과 지연을 측정한 뒤, 타깃 제약(전력/지연/정밀도)에 맞춰 경량화·최적화 방향을 설정하겠습니다.', 'Even with unfamiliar architectures including Transformer/LLM models, I will first build execution environments, measure memory and computation bottlenecks and latency, then set lightweighting and optimization directions aligned with target constraints (power/latency/precision).')}
          </p>
        </div>

        {/* Closing */}
        <div style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
          <p className="section-content" style={{ lineHeight: '1.8' }}>
            {t(
              '저는 과장된 목표보다 제약을 인정한 상태에서 실험을 설계하고, 재현 가능한 결과로 개선을 증명하는 방식을 선호합니다. 불완전한 환경에서 빠르게 가설을 세우고 검증하며 전진하는 AnalogAI의 개발 방식에 저의 실행력을 더하고 싶습니다.',
              'I prefer designing experiments acknowledging constraints rather than exaggerated goals, and proving improvements through reproducible results. I want to add my execution capability to AnalogAI\'s development approach of rapidly forming hypotheses, validating, and advancing in imperfect environments.'
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
