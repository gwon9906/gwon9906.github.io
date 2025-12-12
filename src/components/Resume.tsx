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
              'AI/ML & Edge/Communication Engineering',
              'AI/ML & Edge/Communication Engineering'
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
              '통신·산업 환경에서 수집된 센서·신호 데이터를 기반으로 모델 설계부터 전처리, 학습, 배포까지 End-to-End로 수행해 온 AI/ML 엔지니어링 지망생입니다.',
              'Aspiring AI/ML engineer with end-to-end experience from model design to preprocessing, training, and deployment based on sensor and signal data collected in communication and industrial environments.'
            )}
          </p>
          <p className="section-content">
            {t('특히', 'Particularly strong in')}
          </p>
          <ul className="resume-list">
            <li>
              {t(
                '초저 SNR 환경의 LoRa 통신 신호 복원 및 전송 효율 개선',
                'LoRa communication signal restoration and transmission efficiency improvement in ultra-low SNR environments'
              )}
            </li>
            <li>
              {t(
                '산업용 밸브 유량 예측 및 이상 징후 탐지',
                'Industrial valve flow prediction and anomaly detection'
              )}
            </li>
          </ul>
          <p className="section-content">
            {t(
              '와 같이 \'실제 물리 시스템과 연결된 문제\'를 데이터와 모델 구조를 함께 설계하여 해결하는 데 강점을 가지고 있습니다.',
              'Excel at solving problems connected to real physical systems by co-designing data and model structures.'
            )}
          </p>
          <p className="section-content">
            {t(
              '라즈베리파이 등 저사양 엣지 디바이스에서의 경량화·최적화 경험을 바탕으로, 제한된 자원에서 신뢰도 높은 AI 시스템을 구현하는 것을 목표로 하고 있습니다.',
              'Aim to implement reliable AI systems with limited resources based on experience in lightweighting and optimization on low-spec edge devices such as Raspberry Pi.'
            )}
          </p>
        </section>

        {/* Key Strengths */}
        <section className="resume-section">
          <h2 className="section-title">
            {t('핵심 역량', 'Key Strengths')}
          </h2>

          <div className="strength-item">
            <h3 className="strength-title">
              {t('Edge AI & 임베디드 최적화', 'Edge AI & Embedded Optimization')}
            </h3>
            <ul className="resume-list">
              <li>
                {t(
                  '라즈베리파이 등 저사양 디바이스에서 실시간 추론을 위해 딥러닝 연산을 NumPy 기반으로 재구현, 프레임워크 의존성 최소화',
                  'Reimplemented deep learning operations in NumPy for real-time inference on low-spec devices like Raspberry Pi, minimizing framework dependencies'
                )}
              </li>
              <li>
                {t(
                  '모델 크기·연산량·메모리 사용량을 분석하며 추론 속도 개선',
                  'Improved inference speed by analyzing model size, computation, and memory usage'
                )}
              </li>
            </ul>
          </div>

          <div className="strength-item">
            <h3 className="strength-title">
              {t('통신·센서 데이터 기반 모델링', 'Communication & Sensor Data Modeling')}
            </h3>
            <ul className="resume-list">
              <li>
                {t(
                  'LoRa IQ 신호, 산업용 센서 시계열 등 노이즈 많고 불규칙한 데이터를 직접 전처리·모델링',
                  'Direct preprocessing and modeling of noisy and irregular data such as LoRa IQ signals and industrial sensor time series'
                )}
              </li>
              <li>
                {t(
                  'STFT 기반 스펙트로그램, 시퀀스 리셋 로직, 이상치 대응 등 도메인 특성에 맞춘 파이프라인 설계',
                  'Designed pipelines tailored to domain characteristics including STFT-based spectrograms, sequence reset logic, and outlier handling'
                )}
              </li>
            </ul>
          </div>

          <div className="strength-item">
            <h3 className="strength-title">
              {t('실험 설계 및 문제 정의', 'Experimental Design & Problem Definition')}
            </h3>
            <ul className="resume-list">
              <li>
                {t(
                  '하이퍼파라미터 튜닝에 앞서 데이터 구조와 물리/도메인 특성을 먼저 분석',
                  'Analyzed data structure and physical/domain characteristics before hyperparameter tuning'
                )}
              </li>
              <li>
                {t(
                  '기존 방식이 통하지 않을 때 손실 함수·hidden state 처리·전처리 로직을 재설계하여 성능을 끌어올린 경험 다수 보유',
                  'Extensive experience redesigning loss functions, hidden state handling, and preprocessing logic to improve performance when existing methods fail'
                )}
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="resume-section">
          <h2 className="section-title">
            {t('기술 스택', 'Tech Stack')}
          </h2>
          <div className="tech-category">
            <strong>Programming:</strong> Python (중점), C/C++(기본), Bash
          </div>
          <div className="tech-category">
            <strong>ML/DL:</strong> PyTorch, TensorFlow, NumPy, SciPy, scikit-learn
          </div>
          <div className="tech-category">
            <strong>Signal & Time-series:</strong> STFT, {t('스펙트로그램 처리', 'Spectrogram processing')}, {t('시계열 예측', 'Time-series prediction')}, {t('이상치 대응', 'Outlier handling')}
          </div>
          <div className="tech-category">
            <strong>{t('기타', 'Others')}:</strong> Git/GitHub, Linux, Jupyter/Colab, matplotlib
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
              <li>{t('관련 수강: 컴퓨터네트워크, 데이터베이스, 인공지능, 통신 관련 과목 등', 'Relevant courses: Computer Networks, Database, Artificial Intelligence, Communication, etc.')}</li>
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
              'Edge-Cloud LoRa Demodulation을 위한 초경량 신호 압축 모델',
              'Ultra-Lightweight Signal Compression Model for Edge-Cloud LoRa Demodulation'
            )}
          </h2>
          <div className="project-subtitle">
            {t(
              'Ultra-Low SNR 복조 보조를 위한 Multi-layer BAM 기반 Edge 압축기',
              'Multi-layer BAM-based Edge Compressor for Ultra-Low SNR Demodulation Assistance'
            )}
          </div>

          <div className="project-meta">
            <div className="meta-item"><strong>{t('구분', 'Type')}:</strong> {t('개인 연구', 'Individual Research')}</div>
            <div className="meta-item"><strong>{t('기간', 'Period')}:</strong> 2025.11 ~ {t('진행 중', 'In Progress')}</div>
            <div className="meta-item"><strong>{t('역할', 'Role')}:</strong> {t('모델 설계, 실험 설계, Edge 추론 구조 구현', 'Model design, Experiment design, Edge inference implementation')}</div>
            <div className="meta-item"><strong>{t('성과', 'Results')}:</strong> SNR –25 dB {t('구간 복조율', 'demodulation rate')} +11.0%p {t('개선', 'improvement')}, {t('약', 'approx.')} 93.5% {t('차원 압축', 'dimension compression')}</div>
            <div className="meta-item"><strong>{t('환경', 'Environment')}:</strong> Raspberry Pi {t('기반 Edge 디바이스', 'based Edge device')}</div>
          </div>

          <h3 className="subsection-title">Overview</h3>
          <p className="project-content">
            {t(
              'Ultra-Low SNR(–25 ~ –30 dB) 환경에서 복조에 실패한 LoRa 신호를 Cloud(C-RAN)로 전송해 재복조하는 시스템을 목표로, Edge 단에서 전송 부담을 최소화하면서도 LoRa Chirp 구조를 유지하는 초경량 신호 압축 모델을 개발했습니다.',
              'Developed an ultra-lightweight signal compression model that minimizes transmission burden at the Edge while preserving LoRa Chirp structure for a system that sends demodulation-failed LoRa signals to Cloud (C-RAN) for re-demodulation in Ultra-Low SNR (–25 ~ –30 dB) environments.'
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

          <h3 className="subsection-title">Results</h3>
          <ul className="project-list">
            <li>
              <strong>{t('복조율 개선', 'Demodulation Rate Improvement')}:</strong> SNR –30 dB: Baseline 2.5% → BAM 5.8% (+3.3%p) / SNR –25 dB: Baseline 16.8% → BAM 27.8% (+11.0%p)
            </li>
            <li>
              <strong>{t('데이터 압축 효과', 'Data Compression Effect')}:</strong> {t('입력', 'Input')} 7,936{t('차원', 'dim')} → 512{t('차원', 'dim')} ({t('약', 'approx.')} 93.5% {t('차원 축소', 'dimension reduction')}), {t('복원 오차', 'Reconstruction error')} MSE ≈ 0.003 ~ 0.006
            </li>
            <li>
              <strong>{t('시스템 관점 성과', 'System-level Achievement')}:</strong> {t('표준 LoRa 복조가 거의 실패하는 –25 ~ –30 dB 구간에서 유의미한 성능 개선 확인, Raspberry Pi 환경에서도 실시간 처리 가능한 속도 확보', 'Confirmed meaningful performance improvement in –25 ~ –30 dB range where standard LoRa demodulation almost completely fails, secured real-time processing speed even in Raspberry Pi environment')}
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
              <strong>{t('문제', 'Challenge')}:</strong> {t('3층 구조(Layer 3) 수렴 불안정', '3-layer structure (Layer 3) convergence instability')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('Layer-wise Freeze(1층→2층→3층 순차 학습) 전략으로 수렴 안정성 확보', 'Secured convergence stability through Layer-wise Freeze (sequential training Layer1→Layer2→Layer3) strategy')}
            </li>
          </ul>

          <h3 className="subsection-title">Next Steps</h3>
          <p className="project-content">
            {t(
              'SNR 구간별 최적 학습 범위를 재조정하고, Huber Loss + Layer Freeze 조합으로 추가 개선 실험 진행 예정. Cloud(C-RAN) 복조 모델과 end-to-end로 연동하여 전체 시스템 성능 측정.',
              'Planning to readjust optimal learning range per SNR segment and conduct additional improvement experiments with Huber Loss + Layer Freeze combination. Measure overall system performance through end-to-end integration with Cloud (C-RAN) demodulation model.'
            )}
          </p>
        </section>
      </div>

      {/* Page 3 - Project 2 */}
      <div className="resume-page">
        <section className="project-section">
          <h2 className="project-title">
            [PROJECT 2] {t(
              'Edge-Device 통신 효율 극대화를 위한 경량 AI 압축 모델',
              'Lightweight AI Compression Model for Edge-Device Communication Efficiency'
            )}
          </h2>
          <div className="project-subtitle">
            {t(
              'LoRa 페이로드 62.5% 단축 및 통신 성공률 14%p 향상',
              '62.5% LoRa Payload Reduction & 14%p Communication Success Rate Improvement'
            )}
          </div>

          <div className="project-meta">
            <div className="meta-item"><strong>{t('구분', 'Type')}:</strong> {t('팀 프로젝트 (본인 역할: 팀 리드 / 전체 파이프라인 설계)', 'Team Project (Role: Team Lead / Full Pipeline Design)')}</div>
            <div className="meta-item"><strong>{t('기간', 'Period')}:</strong> 2025.03 ~ 06 ({t('완료', 'Completed')})</div>
            <div className="meta-item"><strong>{t('역할', 'Role')}:</strong> {t('시스템 설계, 모델 구조 설계, Edge 구현, 필드 테스트 주도', 'System design, Model architecture design, Edge implementation, Field test leadership')}</div>
            <div className="meta-item"><strong>{t('성과', 'Results')}:</strong> {t('페이로드', 'Payload')} 62.5% {t('압축', 'compression')}, PDR +14%p {t('개선', 'improvement')}, MSE 0.0036 {t('달성', 'achieved')}</div>
            <div className="meta-item"><strong>{t('환경', 'Environment')}:</strong> Raspberry Pi {t('기반 LoRa 엣지 장치', 'based LoRa edge device')}</div>
          </div>

          <h3 className="subsection-title">Overview</h3>
          <p className="project-content">
            {t(
              '저사양 엣지 디바이스(Raspberry Pi) 환경에서 LoRa 통신의 구조적 대역폭 제약을 완화하기 위해, 경량 Bidirectional Associative Memory(BAM) 모델을 활용한 실시간 데이터 압축/복원 시스템을 설계·구현했습니다.',
              'Designed and implemented a real-time data compression/decompression system using a lightweight Bidirectional Associative Memory (BAM) model to mitigate structural bandwidth constraints of LoRa communication in low-spec edge device (Raspberry Pi) environments.'
            )}
          </p>

          <h3 className="subsection-title">Context</h3>
          <p className="project-content">
            {t(
              'LoRa는 넓은 커버리지를 제공하지만 대역폭이 좁아, 데이터 길이가 길어질수록 패킷 충돌과 전송 실패(Drop)가 급격히 증가합니다. 특히 N-LOS(비가시권) 환경에서는 신뢰성 높은 통신 확보가 핵심 과제였습니다.',
              'While LoRa provides wide coverage, its narrow bandwidth causes rapid increases in packet collisions and transmission failures as data length increases. Securing reliable communication in N-LOS (Non-Line-Of-Sight) environments was a key challenge.'
            )}
          </p>

          <h3 className="subsection-title">Approach</h3>
          <ul className="project-list">
            <li>
              <strong>{t('경량 BAM 구조 채택', 'Lightweight BAM Structure Adoption')}:</strong> {t('Autoencoder 대비 연산량 약 40% 감소가 가능한 BAM 구조를 선택해 엣지 환경에 최적화', 'Selected BAM structure capable of approximately 40% computation reduction compared to Autoencoder, optimized for edge environment')}
            </li>
            <li>
              <strong>{t('TensorFlow → NumPy 순수 구현 전환', 'TensorFlow → NumPy Pure Implementation Transition')}:</strong> {t('TensorFlow 의존성을 제거하고, NumPy만으로 추론 로직을 재구현하여 라이브러리 의존성 축소 + 추론 지연(latency) 감소', 'Removed TensorFlow dependency and reimplemented inference logic using only NumPy, reducing library dependency + inference latency')}
            </li>
            <li>
              <strong>{t('실제 N-LOS 환경 필드 테스트 기반 데이터 수집', 'Real N-LOS Environment Field Test-based Data Collection')}:</strong> {t('약 2.6 km 구간을 1개월간 반복 주행하며 N-LOS 환경 데이터 수집, 단순 시뮬레이션이 아닌 실제 운용 환경에서 모델 검증', 'Collected N-LOS environment data through repeated driving over approximately 2.6 km section for 1 month, validated model in actual operating environment rather than simple simulation')}
            </li>
            <li>
              <strong>{t('전처리·포맷 최적화', 'Preprocessing & Format Optimization')}:</strong> {t('GPS / 센서 데이터 포맷을 재설계하고, 부동소수점 변환 과정에서의 정밀도 손실을 줄이기 위해 정수부/소수부 분리 인코딩 파이프라인 도입', 'Redesigned GPS/sensor data format and introduced integer/decimal separation encoding pipeline to reduce precision loss during floating-point conversion')}
            </li>
          </ul>

          <h3 className="subsection-title">Results</h3>
          <ul className="project-list">
            <li>
              <strong>{t('전송 데이터 절감', 'Transmission Data Reduction')}:</strong> {t('페이로드', 'Payload')} 32 Bytes → 20 Bytes ({t('약', 'approx.')} 62.5% {t('압축', 'compression')})
            </li>
            <li>
              <strong>{t('통신 성공률(PDR) 개선', 'Packet Delivery Rate (PDR) Improvement')}:</strong> {t('압축 적용 전 대비 PDR 약 +14%p 향상, 동일 환경에서 더 많은 시도 중 성공 패킷 비율 증가', 'PDR improved by approximately +14%p compared to before compression application, increased successful packet ratio in the same environment')}
            </li>
            <li>
              <strong>{t('복원 정확도 향상', 'Restoration Accuracy Improvement')}:</strong> GPS {t('데이터 복원 오차', 'data restoration error')}(MSE): 0.0184 → 0.0036 ({t('약', 'approx.')} 80% {t('감소', 'reduction')}), {t('압축 후에도 실제 서비스 가능한 수준의 위치 정보 품질 유지', 'maintained location information quality at serviceable level even after compression')}
            </li>
          </ul>

          <h3 className="subsection-title">Challenges & Solutions</h3>
          <ul className="project-list">
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('야외 필드 테스트 환경 변수(날씨, 전파 간섭 등) 통제 어려움', 'Difficulty controlling outdoor field test environmental variables (weather, radio interference, etc.)')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('1개월간 동일 구간을 반복 주행하여 다양한 조건에서 통계적 유의성 확보', 'Secured statistical significance under various conditions through repeated driving over the same section for 1 month')}
            </li>
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('부동소수점 변환 과정에서 정밀도 손실', 'Precision loss during floating-point conversion')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('데이터 특성 분석 후, 정수부/소수부를 분리 처리하는 전처리 파이프라인 설계로 문제 완화', 'Mitigated problem by designing preprocessing pipeline that separates integer/decimal parts after analyzing data characteristics')}
            </li>
            <li>
              <strong>{t('문제', 'Challenge')}:</strong> {t('Autoencoder 기반 모델의 과도한 연산량', 'Excessive computation of Autoencoder-based model')}<br/>
              <strong>{t('해결', 'Solution')}:</strong> {t('BAM + NumPy 순수 구현으로 전환하여 연산 부하를 크게 낮추고, 엣지 디바이스에서 안정적인 실시간 구동 확보', 'Significantly reduced computational load by transitioning to BAM + NumPy pure implementation, secured stable real-time operation on edge devices')}
            </li>
          </ul>

          <h3 className="subsection-title">Next Steps</h3>
          <p className="project-content">
            {t(
              '현재는 정형 데이터(센서값, GPS)를 대상으로 압축/복원을 수행 중이며, 추후 비정형 데이터(이미지 등)에 대한 저전력 전송·압축 모델로 확장 연구 예정입니다.',
              'Currently performing compression/decompression on structured data (sensor values, GPS), planning to expand research to low-power transmission and compression models for unstructured data (images, etc.) in the future.'
            )}
          </p>

          <div className="tech-stack-footer">
            <strong>{t('사용 기술', 'Technologies Used')}:</strong> Python, NumPy, Raspberry Pi, LoRa, Edge Computing, GitHub
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
