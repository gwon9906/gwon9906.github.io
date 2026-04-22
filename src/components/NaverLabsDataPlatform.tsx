import {
  ArrowLeft,
  BarChart3,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Github,
  Radio,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import './Portfolio.css';

const NaverLabsDataPlatform = () => {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const fitSummary = [
    {
      label: t('지원 직무', 'Target Role'),
      value: 'NAVER LABS · AI Data Platform Developer',
    },
    {
      label: t('핵심 포지션', 'Positioning'),
      value: t(
        '센서 데이터 처리 · 실험 검증 · 데이터 가공/지표화 자동화',
        'Sensor-data processing · validation · data preparation/metric automation'
      ),
    },
    {
      label: t('주의할 점', 'Boundary'),
      value: t(
        '웹/3D 경험을 과장하지 않고, 데이터 파이프라인 기여 가능성 중심으로 제시',
        'No inflated web/3D claim; focused on data-pipeline contribution'
      ),
    },
  ];

  const roleNeeds = [
    t(
      '로봇 학습 데이터 생산 효율을 높이기 위한 데이터 처리 흐름 개선',
      'Improving data-processing flow for efficient robot training-data production'
    ),
    t(
      '반복 검수·기준 불일치·결과 확인 비용을 줄이는 지표화/시각화',
      'Metric and visualization workflows that reduce review and verification cost'
    ),
    t(
      '수집 데이터가 모델·시뮬레이션·AI 도구로 이어지도록 만드는 자동화',
      'Automation that connects collected data to models, simulation, and AI tools'
    ),
    t(
      '확장 가능한 시스템을 위해 실험 조건과 실패 사례를 기록하는 습관',
      'Documentation of experiment conditions and failure cases for scalable systems'
    ),
  ];

  const projects = [
    {
      id: 'lora-data-pipeline',
      icon: Radio,
      eyebrow: t('직무 연결 사례 01', 'Role-fit Case 01'),
      title: t(
        'LoRa 센서 데이터 전송 파이프라인 개선',
        'LoRa Sensor-Data Transmission Pipeline Improvement'
      ),
      subtitle: t(
        'GPS·IMU 센서 데이터를 제한된 통신 환경에서 전송하기 위해 압축·복원 구조와 필드 검증 기준을 설계한 프로젝트',
        'Designed a compression/restoration pipeline and field-validation rules for transmitting GPS/IMU data under constrained communication conditions.'
      ),
      meta: [
        [t('기간', 'Period'), '2025.03 - 2025.06'],
        [t('형태', 'Type'), t('4인 팀 프로젝트', 'Team project (4 members)')],
        [
          t('내 역할', 'My role'),
          t(
            'BAM 기반 압축·복원 구현, Raspberry Pi/Linux 실행, RAW/BAM 비교 실험',
            'BAM compression/restoration, Raspberry Pi/Linux execution, RAW/BAM comparison'
          ),
        ],
      ],
      problem: t(
        'LoRa 환경에서는 payload가 커질수록 airtime과 손실 위험이 커집니다. 단순히 통신 설정을 바꾸는 대신, 전송 데이터 자체를 줄이면서 복원 품질을 유지할 수 있는지 검증할 필요가 있었습니다.',
        'In LoRa environments, larger payloads increase airtime and loss risk. The project tested whether the transmitted data itself could be reduced while keeping restoration quality usable.'
      ),
      approach: [
        t(
          'GPS·IMU 데이터를 12차원 센서 벡터로 구성하고, BAM 기반 손실 압축 구조로 payload를 줄였습니다.',
          'Composed GPS/IMU data into a 12-dimensional sensor vector and reduced payload size with a BAM-based lossy compression structure.'
        ),
        t(
          'Raspberry Pi 기반 Linux 환경에서 송수신 파이프라인을 실행하고, 동일 장비·동일 설정 기준으로 비교했습니다.',
          'Ran the TX/RX pipeline on Raspberry Pi Linux nodes and compared methods under matched hardware and configuration.'
        ),
        t(
          'NLOS 구간 필드 테스트에서 성공 패킷 수, PDR, MSE를 함께 기록해 전송 효율과 데이터 품질을 동시에 평가했습니다.',
          'Evaluated both transmission efficiency and data quality by logging successful packets, PDR, and MSE in NLOS field tests.'
        ),
      ],
      results: [
        t('RAW 32B payload → BAM 압축 20B payload', 'RAW 32B payload → BAM compressed 20B payload'),
        t('100회 전송 기준 성공 패킷 수 29건 → 33건', 'Successful packets per 100 transmissions: 29 → 33'),
        t('상대 개선 약 14%, 복원 MSE 0.003676', 'Relative improvement about 14%, restoration MSE 0.003676'),
      ],
      platformMeaning: t(
        '이 경험은 로봇 데이터 플랫폼에서 필요한 “데이터 처리 기준 설정 → 반복 실험 → 지표화 → 품질 확인” 흐름과 연결됩니다. 특히 데이터가 실제 환경 조건에 따라 흔들릴 때, 비교 기준과 로그를 남기며 판단하는 방식이 강점입니다.',
        'This connects to the data-platform workflow of defining processing rules, repeating experiments, metricizing results, and checking quality. The strength is making defensible comparisons when data changes under real-world conditions.'
      ),
      note: t(
        '학습 데이터와 실제 이동 데이터의 분포 차이로 GPS 복원 오차가 발생한 한계도 확인했습니다. 이 점은 데이터 대표성과 검증 조건이 플랫폼 단계에서 관리되어야 함을 보여줍니다.',
        'A limitation was also identified: GPS restoration error appeared when training and movement-data distributions differed. This shows why data representativeness and validation conditions must be managed at the platform level.'
      ),
      links: [
        {
          label: t('최종 보고서', 'Final Report'),
          url: 'https://gwon9906.github.io/files/lora-final-report.pdf',
          kind: 'report',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/gwon9906/Lightweight-MF-BAM',
          kind: 'github',
        },
      ],
    },
    {
      id: 'valve-baseline',
      icon: BarChart3,
      eyebrow: t('직무 연결 사례 02', 'Role-fit Case 02'),
      title: t(
        '산업용 밸브 정상 유량 예측 기준선 구축',
        'Industrial Valve Normal-Flow Baseline Forecasting'
      ),
      subtitle: t(
        '센서 시계열 데이터의 불연속성과 측정 정밀도를 고려해 예측 모델과 검증 기준을 정리한 프로젝트',
        'Built a forecasting and validation baseline while considering discontinuities and measurement precision in sensor time-series data.'
      ),
      meta: [
        [t('기간', 'Period'), '2024.07 - 2024.12'],
        [t('형태', 'Type'), t('개인 연구', 'Individual project')],
        [
          t('내 역할', 'My role'),
          t(
            '데이터 분석, 전처리 기준 설정, Encoder-LSTM 설계, 평가 지표 관리',
            'Data analysis, preprocessing rules, Encoder-LSTM design, metric management'
          ),
        ],
      ],
      problem: t(
        '정상 상태 밸브의 유량을 안정적으로 예측해야 이후 고장 상태와의 차이를 기준선 형태로 비교할 수 있었습니다. 하지만 실제 센서 데이터에는 제한된 측정 정밀도, 이상치, 개도율 변화에 따른 불연속성이 함께 존재했습니다.',
        'A stable normal-flow baseline was needed before abnormal valve conditions could be compared against it. The real sensor data contained limited measurement precision, outliers, and discontinuities from valve-opening changes.'
      ),
      approach: [
        t(
          '개도율과 입력 압력 3개·출력 압력 3개를 입력으로 사용하고, 실제 측정 유량을 예측 대상으로 구성했습니다.',
          'Used valve opening plus three inlet and three outlet pressures as inputs, with measured flow as the prediction target.'
        ),
        t(
          '측정값의 유효 자릿수와 이상치를 고려해 전처리 기준을 세우고, 단순 정규화보다 데이터 해석 가능성을 우선했습니다.',
          'Defined preprocessing rules based on measurement precision and outliers, prioritizing interpretability over forced normalization.'
        ),
        t(
          '기본 LSTM과 비교하며 Encoder-LSTM과 Huber Loss를 적용해 이상치에 덜 민감한 학습 구조를 구성했습니다.',
          'Compared against a baseline LSTM and applied Encoder-LSTM with Huber Loss to reduce sensitivity to outliers.'
        ),
      ],
      results: ['Loss 4.0376e-05', 'MAE 0.003941', 'MAPE 0.183501'],
      platformMeaning: t(
        '로봇 데이터 플랫폼에서도 센서 데이터가 어떤 기준으로 정제되고, 어떤 지표로 품질을 판단해야 하는지가 중요합니다. 이 프로젝트는 모델 성능뿐 아니라 전처리 기준과 평가 지표를 함께 정리한 경험입니다.',
        'Robot data platforms also require clear rules for cleaning sensor data and judging quality with metrics. This project shows experience organizing preprocessing rules and evaluation metrics, not only model scores.'
      ),
      note: t(
        '원본 데이터와 전체 코드는 공개할 수 없어 공개 가능한 범위의 보고서로 증빙합니다.',
        'The original dataset and full code cannot be published, so evidence is provided through shareable reports.'
      ),
      links: [
        {
          label: t('요약 보고서', 'Brief Report'),
          url: 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf',
          kind: 'report',
        },
        {
          label: t('원본 보고서', 'Full Report'),
          url: 'https://gwon9906.github.io/files/valve-flow-report.pdf',
          kind: 'report',
        },
      ],
    },
  ];

  const contributionMap = [
    {
      icon: Wrench,
      title: t('초기 기여 영역', 'Initial Contribution'),
      body: t(
        '로봇 센서 데이터의 전처리, 품질 점검, 결과 지표화, 시각화 자동화부터 빠르게 기여할 수 있습니다.',
        'I can first contribute to preprocessing, quality checks, metricization, and visualization automation for robot sensor data.'
      ),
    },
    {
      icon: Cpu,
      title: t('확장 가능 영역', 'Growth Area'),
      body: t(
        'annotation tool이나 데이터 도구에서 반복 검수 비용을 줄이는 기능, 모델·시뮬레이션과 연결되는 AI 기반 도구 구현으로 확장하고 싶습니다.',
        'I want to grow toward features that reduce repeated review cost in annotation/data tools and AI-assisted tools connected to models and simulation.'
      ),
    },
    {
      icon: FileText,
      title: t('정직한 경계', 'Honest Boundary'),
      body: t(
        '웹 annotation tool과 3D 데이터 경험은 아직 직접 경험이 부족합니다. 대신 센서 데이터 처리, 실험 기준 통제, Linux 기반 구현 경험을 기반으로 빠르게 보완하겠습니다.',
        'I do not overclaim direct experience in web annotation tools or 3D data. I will build from sensor-data handling, validation control, and Linux-based implementation experience.'
      ),
    },
  ];

  return (
    <main className="portfolio-page">
      <div className="portfolio-controls no-print">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="portfolio-control-btn portfolio-back-btn"
        >
          <ArrowLeft size={16} />
          {t('홈으로', 'Back to Home')}
        </a>
        <button onClick={handlePrint} className="portfolio-control-btn portfolio-print-btn">
          <Download size={16} />
          {t('PDF 저장', 'Save as PDF')}
        </button>
      </div>

      <div className="portfolio-shell">
        <section className="portfolio-hero">
          <p className="portfolio-eyebrow">{t('NAVER LABS 맞춤 포트폴리오', 'NAVER LABS Targeted Portfolio')}</p>
          <h1 className="portfolio-title">AI Data Platform Developer</h1>
          <p className="portfolio-description">
            {t(
              '로봇/3D 경험을 과장하기보다, 센서 데이터 처리·실험 검증·지표화 경험을 로봇 데이터 플랫폼 업무로 확장할 수 있는 근거 중심으로 정리했습니다.',
              'Rather than overstating robotics or 3D experience, this page focuses on evidence that sensor-data processing, validation, and metricization experience can transfer to robot data-platform work.'
            )}
          </p>

          <div className="portfolio-intro-grid">
            {fitSummary.map((item) => (
              <div className="portfolio-intro-panel" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="portfolio-badge-row">
            <span className="portfolio-badge">Python</span>
            <span className="portfolio-badge">Linux / Raspberry Pi</span>
            <span className="portfolio-badge">Sensor Data</span>
            <span className="portfolio-badge">Metricization</span>
            <span className="portfolio-badge">Field Validation</span>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">{t('직무 요구와 연결', 'Role Alignment')}</p>
            <h2>{t('제가 이 직무에서 보여줘야 할 것', 'What I should prove for this role')}</h2>
            <p>
              {t(
                '이 페이지는 일반 포트폴리오가 아니라, 공고의 핵심인 로봇 데이터 처리 파이프라인·annotation/data tool 생산성·데이터 가공/지표화에 맞춘 제출용 페이지입니다.',
                'This is not a general portfolio page; it is tailored to robot-data pipelines, annotation/data-tool productivity, and data preparation/metricization required by the role.'
              )}
            </p>
          </div>
          <div className="portfolio-body-grid">
            <div className="portfolio-body-block">
              <p className="portfolio-block-label">{t('공고 핵심 요구', 'Role needs')}</p>
              <ul>
                {roleNeeds.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="portfolio-body-block">
              <p className="portfolio-block-label">{t('제 경험의 대응점', 'My matching evidence')}</p>
              <ul>
                <li>{t('센서 데이터 수집·전처리·모델 입력 구성 경험', 'Sensor-data collection, preprocessing, and model-input design')}</li>
                <li>{t('PDR, MSE, MAE, MAPE 기반 평가 지표 관리 경험', 'Metric management using PDR, MSE, MAE, and MAPE')}</li>
                <li>{t('Raspberry Pi/Linux 환경에서 송수신 파이프라인 실행 경험', 'TX/RX pipeline execution on Raspberry Pi/Linux')}</li>
                <li>{t('실패 사례와 데이터 분포 한계를 문서화한 경험', 'Documented failure cases and data-distribution limitations')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">{t('프로젝트 사례', 'Project Evidence')}</p>
            <h2>{t('데이터 플랫폼 업무와 연결되는 대표 경험', 'Representative cases linked to data-platform work')}</h2>
          </div>

          <div className="portfolio-project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="portfolio-project-card" key={project.id}>
                  <div className="portfolio-project-head">
                    <div className="portfolio-project-icon">
                      <Icon size={22} />
                    </div>
                    <div className="portfolio-project-heading">
                      <p className="portfolio-project-order">{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                      <p className="portfolio-project-subtitle">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="portfolio-meta-bar">
                    {project.meta.map(([label, value]) => (
                      <div className="portfolio-meta-line" key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="portfolio-body-grid">
                    <div className="portfolio-body-block">
                      <p className="portfolio-block-label">{t('문제', 'Problem')}</p>
                      <p>{project.problem}</p>
                    </div>
                    <div className="portfolio-body-block">
                      <p className="portfolio-block-label">{t('접근', 'Approach')}</p>
                      <ul>
                        {project.approach.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="portfolio-result-strip">
                    <div className="portfolio-result-header">
                      <p className="portfolio-block-label">{t('결과와 의미', 'Results and meaning')}</p>
                      <p>{project.platformMeaning}</p>
                    </div>
                    <div className="portfolio-result-metrics">
                      {project.results.map((item) => (
                        <span className="portfolio-metric-chip" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="portfolio-proof-box">
                    <p className="portfolio-block-label">{t('한계와 증빙', 'Limit and evidence')}</p>
                    <p>{project.note}</p>
                    <div className="portfolio-proof-links">
                      {project.links.map((link) => (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="portfolio-proof-link"
                          key={link.url}
                        >
                          {link.kind === 'github' ? <Github size={16} /> : <ExternalLink size={16} />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <ul className="portfolio-proof-urls">
                      {project.links.map((link) => (
                        <li className="portfolio-proof-url-item" key={link.url}>
                          <strong>{link.label}</strong>
                          <span>{link.url}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="portfolio-footer-grid">
          <div className="portfolio-footer-card">
            <p className="portfolio-eyebrow">{t('기여 방식', 'Contribution Plan')}</p>
            <h2>{t('어디서부터 기여할 수 있는가', 'Where I can contribute first')}</h2>
            <div className="portfolio-strength-list">
              {contributionMap.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="portfolio-strength-item" key={item.title}>
                    <div className="portfolio-strength-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="portfolio-footer-card">
            <p className="portfolio-eyebrow">{t('함께 보는 정보', 'Additional Details')}</p>
            <h2>{t('기술 및 연락처', 'Tech and Contact')}</h2>
            <div className="portfolio-info-group">
              <p className="portfolio-block-label">{t('주요 기술', 'Main stack')}</p>
              <p>
                {t(
                  'Python, TensorFlow/Keras, pandas, NumPy, Linux, Raspberry Pi, Git/GitHub, 센서 데이터 전처리, 시계열 예측, 실험 지표화',
                  'Python, TensorFlow/Keras, pandas, NumPy, Linux, Raspberry Pi, Git/GitHub, sensor-data preprocessing, time-series forecasting, experiment metricization'
                )}
              </p>
            </div>
            <div className="portfolio-info-group">
              <p className="portfolio-block-label">{t('제출 링크', 'Submission links')}</p>
              <div className="portfolio-contact-lines">
                <p><Github size={16} /> GitHub: https://github.com/gwon9906</p>
                <p><FileText size={16} /> Portfolio: https://gwon9906.github.io/#naverlabs-data-platform</p>
              </div>
            </div>
            <div className="portfolio-info-group">
              <p className="portfolio-block-label">{t('제출 메모', 'Submission note')}</p>
              <p>
                {t(
                  '지원서 첨부에는 이 페이지 링크를 넣고, 필요하면 브라우저에서 PDF 저장 후 파일로도 첨부하는 방식을 권장합니다.',
                  'Use this page link in the application, and if a file upload is needed, save it as PDF from the browser and attach the file as well.'
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NaverLabsDataPlatform;
