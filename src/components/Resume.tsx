import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Download } from 'lucide-react';
import './Resume.css';

const Resume = () => {
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

      {/* Page 1 */}
      <div className="resume-page">
        {/* Header */}
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
            <strong>Portfolio(Web):</strong> https://gwon9906.github.io
          </div>
          <div className="contact-item">
            <strong>{t('휴대폰', 'Phone')}:</strong> 010-3414-9906
          </div>
        </div>

        <div className="resume-divider"></div>

        {/* Profile Summary */}
        <section className="resume-section">
          <h2 className="section-title">
            {t('프로필 요약', 'Profile Summary')}
          </h2>
          <p className="section-content">
            {t(
              '하드웨어 제약(전력·연산·메모리·노이즈)을 전제로, 온디바이스 환경에서 AI 모델/알고리즘을 설계·최적화하고 정량 지표로 검증해온 AI/ML 엔지니어입니다. 제약이 큰 환경에서 데이터 표현과 복원 파이프라인을 재설계해 성능–효율 trade-off를 개선하는 문제 해결에 강점을 갖고 있습니다.',
              'AI/ML Engineer experienced in designing, optimizing, and validating AI models/algorithms in on-device environments, with a focus on hardware constraints (power, computation, memory, noise). Strong in problem-solving that improves performance-efficiency trade-offs by redesigning data representation and restoration pipelines in highly constrained environments.'
            )}
          </p>
        </section>

        {/* Core Strengths */}
        <section className="resume-section">
          <h2 className="section-title">
            {t('핵심 역량', 'Core Strengths')}
          </h2>

          <div className="strength-item">
            <h3 className="strength-title">
              Hardware-aware Algorithm Design
            </h3>
            <p className="section-content">
              {t(
                '하드웨어 비이상성/제약 조건을 포함해 학습·추론 전략을 설계하고, 성능–효율 trade-off를 기준으로 의사결정',
                'Design learning and inference strategies considering hardware non-idealities and constraints, making decisions based on performance-efficiency trade-offs'
              )}
            </p>
          </div>

          <div className="strength-item">
            <h3 className="strength-title">
              On-device Model Optimization
            </h3>
            <p className="section-content">
              {t(
                '모델 크기·연산량·메모리 사용량을 분석해 병목을 정의하고, 경량화/추론 효율 개선으로 실시간 구동 가능성을 확보',
                'Analyze model size, computation, and memory usage to define bottlenecks, securing real-time operation through lightweighting and inference efficiency improvements'
              )}
            </p>
          </div>

          <div className="strength-item">
            <h3 className="strength-title">
              Noisy & Irregular Data Modeling
            </h3>
            <p className="section-content">
              {t(
                '노이즈가 크고 불규칙한 신호/시계열 데이터를 직접 전처리·모델링. 스펙트로그램(STFT), 시퀀스 리셋, 이상치 대응 등 도메인 특성 기반 파이프라인 설계',
                'Directly preprocess and model noisy and irregular signal/time-series data. Design domain-specific pipelines including spectrogram (STFT), sequence reset, and outlier handling'
              )}
            </p>
          </div>

          <div className="strength-item">
            <h3 className="strength-title">
              Rapid Experimentation & Validation
            </h3>
            <p className="section-content">
              {t(
                '데이터 특성 분석 → 가설 설정 → 실험 설계 → 지표 기반 검증을 빠르게 반복. 기존 방식이 통하지 않을 때 손실 함수/상태 처리/전처리를 재설계해 성능을 개선한 경험',
                'Rapidly iterate through data characteristic analysis → hypothesis setting → experimental design → metric-based validation. Experience redesigning loss functions, state handling, and preprocessing to improve performance when existing methods fail'
              )}
            </p>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="resume-section">
          <h2 className="section-title">
            {t('기술 스택', 'Technical Stack')}
          </h2>
          <div className="tech-category">
            <strong>Programming:</strong> Python, C/C++
          </div>
          <div className="tech-category">
            <strong>ML/DL:</strong> PyTorch, TensorFlow
          </div>
          <div className="tech-category">
            <strong>Optimization / On-device:</strong> {t('모델 압축, 추론 최적화, 프로파일링(연산·메모리)', 'Model compression, inference optimization, profiling (computation, memory)')}
          </div>
          <div className="tech-category">
            <strong>Signal / Time-series:</strong> {t('STFT 기반 스펙트로그램 처리, 시계열 예측, 이상치 대응', 'STFT-based spectrogram processing, time-series prediction, outlier handling')}
          </div>
          <div className="tech-category">
            <strong>Collaboration:</strong> Git/GitHub
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="section-title">
            {t('학력', 'Education')}
          </h2>
          <div className="education-item">
            <div className="education-header">
              <strong>{t('동의대학교 컴퓨터공학과 (학부)', 'Dong-eui University, B.S. in Computer Engineering')}</strong>
            </div>
            <ul className="resume-list">
              <li>{t('재학 중 (졸업 예정: 2026년 2월)', 'Currently enrolled (Expected graduation: Feb 2026)')}</li>
            </ul>
          </div>
        </section>

        {/* Research/Activity */}
        <section className="resume-section">
          <h2 className="section-title">
            {t('연구/활동', 'Research & Activities')}
          </h2>
          <div className="research-item">
            <div className="research-header">
              <strong>{t('학부 연구생, AI/ML 연구실 (동의대학교)', 'Undergraduate Researcher, AI/ML Lab (Dong-eui University)')}</strong>
            </div>
            <div className="research-period">
              {t('기간: 2024.06 ~ 현재', 'Period: Jun 2024 ~ Present')}
            </div>
            <div className="research-topic">
              {t('주제:', 'Topics:')}
            </div>
            <ul className="resume-list">
              <li>{t('LoRa 통신 신호 복원 및 초저 SNR 환경 디노이징', 'LoRa communication signal restoration and ultra-low SNR environment denoising')}</li>
              <li>{t('산업용 센서 시계열 기반 유량 예측 모델링', 'Industrial sensor time-series based flow prediction modeling')}</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Page 2 - Project 1 */}
      <div className="resume-page">
        <section className="project-section">
          <h2 className="project-title">
            [PROJECT 1] {t(
              '저전력 IoT 환경을 위한 초경량 데이터 압축·복원 (BAM 기반)',
              'Ultra-Lightweight Data Compression & Restoration for Low-Power IoT Environments (BAM-based)'
            )}
          </h2>
          <div className="project-subtitle">
            {t(
              '페이로드 37.5% 감소, PDR 14%p 향상, 전송 부담 최소화로 배터리 수명 연장',
              '37.5% Payload Reduction, 14%p PDR Improvement, Battery Life Extension through Minimized Transmission Burden'
            )}
          </div>

          <div className="project-meta">
            <div className="meta-item"><strong>{t('구분', 'Type')}:</strong> {t('팀 프로젝트 (본인 역할: 팀 리드 / 전체 파이프라인 설계)', 'Team Project (Role: Team Lead / Full Pipeline Design)')}</div>
            <div className="meta-item"><strong>{t('기간', 'Period')}:</strong> 2024.03 ~ 06 ({t('완료', 'Completed')})</div>
            <div className="meta-item"><strong>{t('역할', 'Role')}:</strong> {t('시스템 설계, 모델 구조 설계, Edge 구현, 필드 테스트 주도', 'System design, Model architecture design, Edge implementation, Field test leadership')}</div>
            <div className="meta-item"><strong>{t('성과', 'Results')}:</strong> {t('페이로드', 'Payload')} 32B → 20B (37.5% {t('감소', 'reduction')}), PDR +14%p, GPS MSE 0.0036</div>
            <div className="meta-item"><strong>{t('환경', 'Environment')}:</strong> Raspberry Pi, LoRa/LPWAN, {t('실측 기반 필드 테스트 (약 2.6km 구간, 1개월)', 'Field test based on real measurements (approx. 2.6km section, 1 month)')}</div>
          </div>

          <h3 className="subsection-title">Context</h3>
          <p className="project-content">
            {t(
              '대규모 IoT 디바이스는 배터리 기반으로 장기간 운용되며, 패킷 손실이 발생할 경우 재전송으로 에너지 소모가 급증하여 디바이스 수명이 크게 단축될 수 있습니다. LoRa/LPWAN 환경에서는 전송 전력을 높이기보다 전송 데이터량 자체를 줄여 재전송 빈도를 낮추는 접근이 더 효과적입니다. 본 프로젝트에서는 제한된 페이로드 조건에서 전송량을 최소화하면서도 데이터 품질을 유지하여 통신 성공률(PDR)을 개선하는 것을 목표로 하였습니다.',
              'Large-scale IoT devices operate long-term on batteries, and packet loss can cause energy consumption to surge through retransmissions, significantly shortening device lifespan. In LoRa/LPWAN environments, reducing transmission data volume rather than increasing transmission power is more effective for lowering retransmission frequency. This project aimed to improve Packet Delivery Rate (PDR) by minimizing transmission volume while maintaining data quality under limited payload conditions.'
            )}
          </p>

          <h3 className="subsection-title">Approach</h3>
          <ul className="project-list">
            <li>
              <strong>{t('경량 압축 구조 설계', 'Lightweight Compression Structure Design')}:</strong> {t('Autoencoder 대비 연산 부담이 낮은 BAM 구조를 적용하여, 저전력·리소스 제약 환경에서의 안정적 구동을 우선 고려', 'Applied BAM structure with lower computational burden compared to Autoencoder, prioritizing stable operation in low-power, resource-constrained environments')}
            </li>
            <li>
              <strong>{t('데이터 표현 최적화', 'Data Representation Optimization')}:</strong> {t('GPS/센서 데이터의 특성을 분석하여 정수부·소수부 분리 인코딩을 적용하였고, 압축 과정에서 발생하는 정밀도 손실을 최소화', 'Analyzed GPS/sensor data characteristics to apply integer-decimal separation encoding, minimizing precision loss during compression')}
            </li>
            <li>
              <strong>{t('실환경 검증 중심 설계', 'Real Environment Validation-Centered Design')}:</strong> {t('시뮬레이션이 아닌 실제 N-LOS 환경(약 2.6km 구간)을 1개월간 반복 주행하며 수집한 데이터를 기반으로 성능을 검증', 'Validated performance based on data collected through repeated driving in real N-LOS environment (approx. 2.6km section) for 1 month, not simulation')}
            </li>
          </ul>

          <h3 className="subsection-title">Results</h3>
          <ul className="project-list">
            <li>
              <strong>{t('전송량 감소', 'Transmission Volume Reduction')}:</strong> Payload 32B → 20B ({t('전송량 약', 'transmission volume approx.')} 37.5% {t('감소', 'reduction')})
            </li>
            <li>
              <strong>{t('통신 신뢰성 개선', 'Communication Reliability Improvement')}:</strong> {t('압축 적용 후 PDR 약 +14%p 향상', 'PDR improved by approximately +14%p after compression application')}
            </li>
            <li>
              <strong>{t('복원 품질 유지', 'Restoration Quality Maintained')}:</strong> GPS {t('복원 오차', 'restoration error')}(MSE) 0.0184 → 0.0036{t('으로, 전송량 감소에도 서비스 가능한 품질을 확보', ', securing serviceable quality despite reduced transmission volume')}
            </li>
          </ul>

          <h3 className="subsection-title">Key Insight</h3>
          <p className="project-content">
            {t(
              '패킷 손실이 잦은 환경에서는 모델 성능 자체보다 "한 번에 성공적으로 전달되는 데이터의 양"이 에너지 효율과 시스템 수명을 좌우합니다. 본 프로젝트에서는 전송 전력 증대 대신 데이터 표현과 알고리즘을 재설계하는 방식으로 시스템 효율을 개선하였습니다.',
              'In environments with frequent packet loss, "the amount of data successfully transmitted at once" determines energy efficiency and system lifespan more than model performance itself. This project improved system efficiency by redesigning data representation and algorithms rather than increasing transmission power.'
            )}
          </p>

          <h3 className="subsection-title">Relevance</h3>
          <ul className="project-list">
            <li>{t('Hardware-aware Algorithm Design 경험 확보', 'Gained Hardware-aware Algorithm Design experience')}</li>
            <li>{t('On-device / Edge AI 최적화 관점에서의 설계·검증 경험 보유', 'Experience in design and validation from On-device / Edge AI optimization perspective')}</li>
            <li>{t('노이즈·제약 환경에서 실측 기반 성능 개선 수행', 'Performed measurement-based performance improvement in noisy, constrained environments')}</li>
          </ul>

          <div className="tech-stack-footer">
            <strong>{t('사용 기술', 'Technologies Used')}:</strong> Python, BAM, NumPy (on-device inference), Raspberry Pi, LoRa, Field Testing
          </div>
        </section>
      </div>

      {/* Page 3 - Project 2 */}
      <div className="resume-page">
        <section className="project-section">
          <h2 className="project-title">
            [PROJECT 2] {t(
              '시계열 데이터 기반 산업용 밸브 유량 예측 시스템',
              'Industrial Valve Flow Prediction System Based on Time Series Data'
            )}
          </h2>
          <div className="project-subtitle">
            {t(
              'Encoder-LSTM 설계를 통한 예측 오차(MAPE) 98% 개선',
              '98% Prediction Error (MAPE) Improvement through Encoder-LSTM Design'
            )}
          </div>

          <div className="project-meta">
            <div className="meta-item"><strong>{t('구분', 'Type')}:</strong> {t('개인 연구', 'Individual Research')}</div>
            <div className="meta-item"><strong>{t('기간', 'Period')}:</strong> 2024.07 ~ 12 ({t('완료', 'Completed')})</div>
            <div className="meta-item"><strong>{t('역할', 'Role')}:</strong> {t('모델 설계, 데이터 분석, Loss Function 최적화, 학습 전략 설계', 'Model design, Data analysis, Loss function optimization, Training strategy design')}</div>
            <div className="meta-item"><strong>{t('성과', 'Results')}:</strong> MAPE 10.0 → 0.188 ({t('약', 'approx.')} 98% {t('개선', 'improvement')})</div>
            <div className="meta-item"><strong>{t('환경', 'Environment')}:</strong> PyTorch, LSTM, Time Series Analysis</div>
          </div>

          <h3 className="subsection-title">Overview</h3>
          <p className="project-content">
            {t(
              '불연속적인 산업 데이터의 특성을 고려한 Encoder-LSTM 모델 설계로 기존 대비 예측 오차(MAPE) 98% 개선을 달성했습니다. 개도율 0 지점의 불연속성 및 센서 이상치 문제를 해결하여 실제 산업 환경에 적용 가능한 예측 시스템을 구축했습니다.',
              'Achieved 98% improvement in prediction error (MAPE) compared to baseline through Encoder-LSTM model design considering the characteristics of discontinuous industrial data. Built a prediction system applicable to real industrial environments by resolving discontinuities at valve opening rate 0 and sensor outlier issues.'
            )}
          </p>

          <h3 className="subsection-title">Context</h3>
          <p className="project-content">
            {t(
              '기존 LSTM 구조는 개도율 0 지점에서 불연속성이 발생하고, 센서 이상치(Outlier)에 대한 민감도가 높아 실제 산업 환경 적용에 한계가 있었습니다. 특히 불규칙한 밸브 작동 패턴과 센서 노이즈로 인해 예측 오차가 크고 분산이 높은 문제가 있었습니다.',
              'Existing LSTM structures had discontinuities at valve opening rate 0 and high sensitivity to sensor outliers, limiting application in real industrial environments. In particular, irregular valve operation patterns and sensor noise caused large prediction errors and high variance.'
            )}
          </p>

          <h3 className="subsection-title">Approach</h3>
          <ul className="project-list">
            <li>
              <strong>{t('Encoder-LSTM 구조 재설계', 'Encoder-LSTM Structure Redesign')}:</strong> {t('계층적 특징 추출이 가능하도록 Encoder-LSTM 구조로 재설계하여 시계열 패턴의 장기 의존성(Long-term Dependency) 학습 능력 향상', 'Redesigned to Encoder-LSTM structure for hierarchical feature extraction, improving long-term dependency learning capability of time series patterns')}
            </li>
            <li>
              <strong>{t('시퀀스 재초기화 로직 추가', 'Sequence Reset Logic Addition')}:</strong> {t('개도율 0 구간에서 LSTM Hidden State를 재초기화하는 로직을 추가하여 불연속성 구간에서의 예측 안정성 확보', 'Added logic to reset LSTM Hidden State at valve opening rate 0 to secure prediction stability in discontinuous sections')}
            </li>
            <li>
              <strong>{t('Huber Loss 도입', 'Huber Loss Introduction')}:</strong> {t('이상치에 강건한 Huber Loss를 도입하여 센서 노이즈 및 Outlier에 대한 모델의 견고성(Robustness) 향상', 'Improved model robustness against sensor noise and outliers by introducing outlier-resistant Huber Loss')}
            </li>
            <li>
              <strong>{t('정규화 파이프라인 최적화', 'Normalization Pipeline Optimization')}:</strong> {t('데이터 특성 분석을 통해 불필요한 정규화 단계를 제거하고, 예측 분산을 크게 축소하여 일관된 예측 품질 달성', 'Removed unnecessary normalization steps through data characteristic analysis, significantly reduced prediction variance to achieve consistent prediction quality')}
            </li>
          </ul>

          <h3 className="subsection-title">Results</h3>
          <ul className="project-list">
            <li>
              <strong>{t('예측 오차 대폭 개선', 'Significant Prediction Error Improvement')}:</strong> MAPE 10.0 → 0.188 ({t('약', 'approx.')} 98% {t('개선', 'improvement')}), {t('산업 환경에서 실용적인 수준의 정확도 달성', 'achieved practical accuracy level in industrial environments')}
            </li>
            <li>
              <strong>{t('이상치 강건성 확보', 'Outlier Robustness Secured')}:</strong> Huber Loss {t('적용으로 센서 이상치에 대한 모델 안정성 향상, 급격한 예측 오차 발생 빈도 감소', 'improved model stability against sensor outliers by applying, reduced frequency of sudden prediction error occurrences')}
            </li>
            <li>
              <strong>{t('예측 분산 축소', 'Prediction Variance Reduction')}:</strong> {t('정규화 최적화를 통해 예측 일관성 향상, 실제 운용 환경에서의 신뢰성 증대', 'Improved prediction consistency through normalization optimization, increased reliability in actual operating environments')}
            </li>
          </ul>

          <h3 className="subsection-title">Challenges & Solutions</h3>
          <ul className="project-list">
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('개도율 0 구간에서 불연속성으로 인한 예측 오차 급증', 'Sudden prediction error increase due to discontinuity at valve opening rate 0')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('개도율 0 감지 시 LSTM Hidden State를 재초기화하는 시퀀스 리셋 로직을 설계·적용하여 불연속 구간에서의 예측 안정성 확보', 'Designed and applied sequence reset logic that reinitializes LSTM Hidden State when valve opening rate 0 is detected, securing prediction stability in discontinuous sections')}
            </li>
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('센서 이상치에 대한 높은 민감도로 예측 품질 저하', 'Prediction quality degradation due to high sensitivity to sensor outliers')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('MSE Loss에서 Huber Loss로 전환하여 이상치에 강건한 학습 구조 구축, 예측 안정성 향상', 'Built outlier-resistant learning structure by switching from MSE Loss to Huber Loss, improved prediction stability')}
            </li>
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('데이터 정밀도 불균형으로 인한 예측 분산 증가', 'Increased prediction variance due to data precision imbalance')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('과도한 정규화가 오히려 분산을 증가시킨다는 점을 발견, 정규화 파이프라인을 단순화하여 예측 일관성 크게 개선', 'Discovered that excessive normalization actually increases variance, significantly improved prediction consistency by simplifying normalization pipeline')}
            </li>
          </ul>

          <h3 className="subsection-title">Next Steps</h3>
          <p className="project-content">
            {t(
              '현재 모델을 기반으로 도메인별(제조 공정별) 하이퍼파라미터 최적화 작업 진행 중이며, 실시간 적용 환경으로의 확장을 계획하고 있습니다. 산업체 협력 프로젝트로 저장소는 비공개 상태입니다.',
              'Currently working on hyperparameter optimization by domain (manufacturing process) based on current model, planning expansion to real-time application environment. Repository is private due to industry collaboration project.'
            )}
          </p>

          <div className="tech-stack-footer">
            <strong>{t('사용 기술', 'Technologies Used')}:</strong> Python, PyTorch, LSTM, Encoder-Decoder, Time Series, Huber Loss
          </div>
        </section>
      </div>

      {/* Page 4 - Project 3 */}
      <div className="resume-page">
        <section className="project-section">
          <h2 className="project-title">
            [PROJECT 3] {t(
              'Ultra-Low SNR 환경에서 LoRa 패킷 복원을 위한 전초 연구',
              'Preliminary Study for LoRa Packet Recovery in Ultra-Low SNR Environments'
            )} ({t('진행 중', 'In Progress')})
          </h2>
          <div className="project-subtitle">
            {t(
              'Edge-Cloud 협력 복조를 위한 초경량 신호 압축 모델 개발',
              'Ultra-Lightweight Signal Compression Model Development for Edge-Cloud Collaborative Demodulation'
            )}
          </div>

          <div className="project-meta">
            <div className="meta-item"><strong>{t('구분', 'Type')}:</strong> {t('개인 연구', 'Individual Research')}</div>
            <div className="meta-item"><strong>{t('상태', 'Status')}:</strong> {t('진행 중', 'In Progress')}</div>
            <div className="meta-item"><strong>{t('최종 목표', 'Final Goal')}:</strong> {t('Ultra-Low SNR 환경에서 패킷 복원 (CRC 통과)', 'Packet recovery with CRC validation in Ultra-Low SNR environments')}</div>
            <div className="meta-item"><strong>{t('역할', 'Role')}:</strong> {t('모델 설계, 실험 설계, 시뮬레이션 환경 구축', 'Model design, Experiment design, Simulation environment setup')}</div>
            <div className="meta-item"><strong>{t('환경', 'Environment')}:</strong> {t('시뮬레이션 기반 실험 환경', 'Simulation-based Experimental Environment')}</div>
          </div>

          <h3 className="subsection-title">Overview</h3>
          <p className="project-content">
            {t(
              'Ultra-Low SNR(–25 ~ –30 dB) 환경에서 패킷 복원(CRC 통과)을 최종 목표로, Edge에서 복조 실패한 LoRa 신호를 Cloud(C-RAN)로 전송해 재복조하는 시스템을 연구하고 있습니다. 현재는 전송 부담을 최소화하면서 LoRa Chirp 구조를 유지하는 초경량 신호 압축 모델을 개발하는 전초 단계입니다.',
              'Researching a system that sends demodulation-failed LoRa signals from Edge to Cloud (C-RAN) for re-demodulation, with the final goal of packet recovery (CRC validation) in Ultra-Low SNR (–25 ~ –30 dB) environments. Currently in the preliminary phase of developing an ultra-lightweight signal compression model that minimizes transmission burden while preserving LoRa Chirp structure.'
            )}
          </p>

          <h3 className="subsection-title">Context</h3>
          <p className="project-content">
            {t(
              '–25 dB 이하 환경에서는 표준 LoRa dechirp+FFT 복조가 거의 실패합니다. 복조 실패 신호를 Cloud(C-RAN)로 보내 여러 Edge에서 모은 신호를 결합해 복조하는 구조가 필요하지만, IQ 데이터를 그대로 전송하면 대역폭·전송 비용이 과도해집니다.',
              'Standard LoRa dechirp+FFT demodulation almost completely fails in environments below –25 dB. While a structure that sends failed signals to Cloud (C-RAN) and combines signals from multiple Edges for demodulation is needed, transmitting raw IQ data incurs excessive bandwidth and transmission costs.'
            )}
          </p>

          <h3 className="subsection-title">Approach</h3>
          <ul className="project-list">
            <li>
              <strong>{t('LoRa PHY Demod Baseline 재구축', 'LoRa PHY Demod Baseline Reconstruction')}:</strong> {t('Upchirp/Downchirp 생성, Dechirp → FFT 기반 심볼 추출 체인을 파이썬으로 재현', 'Reproduced Upchirp/Downchirp generation and Dechirp → FFT-based symbol extraction chain in Python')}
            </li>
            <li>
              <strong>{t('Spectrogram 기반 압축 인코딩', 'Spectrogram-based Compression Encoding')}:</strong> {t('IQ 신호에 STFT 수행 → Complex spectrogram (128×31) 생성, Real/Imag를 분리하여 7,936차원 입력 벡터 구성', 'Performed STFT on IQ signals → Generated Complex spectrogram (128×31), configured 7,936-dimensional input vector by separating Real/Imag')}
            </li>
            <li>
              <strong>{t('Multi-layer BAM Encoder 설계', 'Multi-layer BAM Encoder Design')}:</strong> {t('7,936 → 2,048 → 1,024 → 512 차원으로 단계적 압축, 초경량 구조로 설계하여 Edge 장치에서 실시간 학습/추론 가능하도록 구현', 'Stepwise compression from 7,936 → 2,048 → 1,024 → 512 dimensions, implemented with ultra-lightweight structure for real-time training/inference on Edge devices')}
            </li>
            <li>
              <strong>{t('Ultra-Low SNR 복조 실험', 'Ultra-Low SNR Demodulation Experiments')}:</strong> {t('SNR –30, –25, –20, –15 dB 구간에서 Baseline vs BAM 비교, Symbol Accuracy 및 FFT Peak Ratio 기반 품질 평가 수행', 'Compared Baseline vs BAM at SNR –30, –25, –20, –15 dB, performed quality evaluation based on Symbol Accuracy and FFT Peak Ratio')}
            </li>
          </ul>

          <h3 className="subsection-title">{t('현재 진행 상황', 'Current Progress')}</h3>
          <ul className="project-list">
            <li>
              <strong>{t('Complex-valued BAM 기반 스펙트로그램 디노이저 설계', 'Complex-valued BAM-based Spectrogram Denoiser Design')}:</strong> {t('실수부/허수부를 분리 처리하는 구조 구현', 'Implemented structure for separate processing of real/imaginary parts')}
            </li>
            <li>
              <strong>{t('Lagrange 안정성 조건 적용', 'Applied Lagrange Stability Condition')}:</strong> {t('위상 보존 활성화 함수 구현을 통해 학습 안정성 확보', 'Secured learning stability through implementation of phase-preserving activation functions')}
            </li>
            <li>
              <strong>{t('STFT 기반 전처리 파이프라인 구축', 'Built STFT-based Preprocessing Pipeline')}:</strong> {t('시간-주파수 변환 및 정규화 로직 완성', 'Completed time-frequency transformation and normalization logic')}
            </li>
            <li>
              <strong>{t('학습 안정성 및 복원 품질 개선 실험 진행 중', 'Ongoing Experiments for Learning Stability and Restoration Quality')}:</strong> {t('다양한 SNR 구간에서 성능 검증 중', 'Validating performance across various SNR ranges')}
            </li>
          </ul>

          <h3 className="subsection-title">Challenges & Solutions</h3>
          <ul className="project-list">
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('STFT/ISTFT 과정에서 Chirp 위상 붕괴 문제', 'Chirp phase collapse issue in STFT/ISTFT process')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('STFT 파라미터 표준화 및 Trim/Padding 방식 도입으로 시간축 정렬 보정', 'Corrected time-axis alignment by standardizing STFT parameters and introducing Trim/Padding approach')}
            </li>
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('Huber Loss 적용 시 학습 collapse 발생', 'Learning collapse when applying Huber Loss')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('Huber Loss를 제거하고 기존 Update Rule 중심으로 안정적인 학습 구조 유지', 'Removed Huber Loss and maintained stable learning structure centered on existing Update Rule')}
            </li>
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('LoRa 심볼 분류에서 이론값과 불일치하는 정확도 문제', 'Symbol classification accuracy mismatching theoretical values in LoRa')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('LoRa upchirp 신호의 대역폭 특성상 음수 주파수 영역의 신호가 FFT 수행 시 음수 인덱스에 정렬되는 점을 고려하여 주파수 축 재정렬 로직 추가, 이론값과 일치하는 정확도 달성', 'Added frequency axis reordering logic considering that negative frequency domain signals in LoRa upchirp align to negative indices during FFT due to bandwidth characteristics, achieved accuracy matching theoretical values')}
            </li>
          </ul>

          <h3 className="subsection-title">Next Steps</h3>
          <p className="project-content">
            {t(
              'SNR 구간별 최적 학습 범위를 재조정하고, Huber Loss + Layer Freeze 조합으로 추가 개선 실험 진행 예정. Cloud(C-RAN) 복조 모델과 end-to-end로 연동하여 전체 시스템 성능 측정.',
              'Planning to readjust optimal learning range per SNR segment and conduct additional improvement experiments with Huber Loss + Layer Freeze combination. Measure overall system performance through end-to-end integration with Cloud (C-RAN) demodulation model.'
            )}
          </p>

          <div className="tech-stack-footer">
            <strong>{t('사용 기술', 'Technologies Used')}:</strong> Python, PyTorch, NumPy, LoRa PHY, DSP, Edge Computing, BAM, Raspberry Pi
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
