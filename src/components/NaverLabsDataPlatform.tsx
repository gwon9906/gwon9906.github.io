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
import './NaverLabsDataPlatform.css';

const githubUrl = 'https://github.com/gwon9906';
const portfolioUrl = 'https://gwon9906.github.io/#naverlabs-data-platform';
const loraReportUrl = 'https://gwon9906.github.io/files/lora-final-report.pdf';
const loraGithubUrl = 'https://github.com/gwon9906/Lightweight-MF-BAM';
const valveSummaryUrl = 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf';
const valveReportUrl = 'https://gwon9906.github.io/files/valve-flow-report.pdf';
const loraChartUrl = '/files/lora-success-chart.png';
const valveChartUrl = '/files/valve-forecast-chart.png';

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
      label: t('연결 역량', 'Core Fit'),
      value: t(
        '센서 데이터 처리 · 실험 검증 · 결과 지표화/시각화',
        'Sensor-data processing · validation · metricization/visualization'
      ),
    },
    {
      label: t('기여 방향', 'Contribution'),
      value: t(
        '로봇 데이터의 품질 확인과 처리 자동화부터 기여',
        'Start from robot-data quality checks and processing automation'
      ),
    },
  ];

  const roleNeeds = [
    t(
      '로봇 학습 데이터가 수집 이후 가공·검증·학습으로 이어지는 처리 흐름 개선',
      'Improving the flow from collected robot data to preparation, validation, and training'
    ),
    t(
      '반복 검수와 기준 불일치를 줄이는 annotation/data tool 생산성 개선',
      'Improving annotation/data-tool productivity by reducing repeated review and inconsistent criteria'
    ),
    t(
      '데이터 상태를 빠르게 판단할 수 있는 지표화·시각화·로그 기반 품질 확인',
      'Metricization, visualization, and log-based quality checks for fast data-state diagnosis'
    ),
    t(
      '모델·시뮬레이션·AI 도구와 연결될 수 있는 데이터 처리 자동화',
      'Data-processing automation that can connect to models, simulation, and AI tools'
    ),
  ];

  const matchingEvidence = [
    t(
      'GPS·IMU·압력·유량 등 센서 데이터를 모델 입력으로 구성하고 전처리 기준을 세운 경험',
      'Experience turning GPS, IMU, pressure, and flow sensor data into model inputs with preprocessing rules'
    ),
    t(
      'PDR, MSE, MAE, MAPE 등 지표를 기준으로 결과를 비교하고 해석한 경험',
      'Experience comparing and interpreting outcomes using metrics such as PDR, MSE, MAE, and MAPE'
    ),
    t(
      'Raspberry Pi/Linux 환경에서 송수신 파이프라인을 실행하고 현장 로그를 확인한 경험',
      'Experience running a TX/RX pipeline on Raspberry Pi/Linux and checking field-test logs'
    ),
    t(
      '실패 사례와 데이터 분포 한계를 정리해 다음 개선 기준으로 연결한 경험',
      'Experience documenting failure cases and data-distribution limits as inputs for the next iteration'
    ),
  ];

  const projects = [
    {
      id: 'lora-data-pipeline',
      icon: Radio,
      eyebrow: t('대표 사례 01', 'Case 01'),
      title: t(
        'LoRa 센서 데이터 전송 파이프라인 개선',
        'LoRa Sensor-Data Transmission Pipeline Improvement'
      ),
      subtitle: t(
        '제한된 통신 환경에서 GPS·IMU 센서 데이터를 전송하기 위해 압축·복원 구조와 필드 검증 기준을 설계했습니다.',
        'Designed a compression/restoration pipeline and field-validation criteria for transmitting GPS/IMU data under constrained communication conditions.'
      ),
      meta: [
        [t('기간', 'Period'), '2025.03 - 2025.06'],
        [t('형태', 'Type'), t('4인 팀 프로젝트', 'Team project (4 members)')],
        [
          t('내 역할', 'My role'),
          t(
            'BAM 압축·복원 구현, Raspberry Pi/Linux 실행, RAW/BAM 비교 실험',
            'BAM compression/restoration, Raspberry Pi/Linux execution, RAW/BAM comparison'
          ),
        ],
      ],
      problem: t(
        'LoRa 환경에서는 payload가 커질수록 airtime이 길어지고 손실 위험이 커집니다. 그래서 통신 설정만 바꾸기보다, 전송 데이터 자체를 줄이면서 복원 품질을 유지할 수 있는지 검증했습니다.',
        'In LoRa environments, larger payloads increase airtime and loss risk. Rather than only changing communication settings, the project tested whether transmitted data could be reduced while preserving restoration quality.'
      ),
      approach: [
        t(
          'GPS·IMU 데이터를 12차원 센서 벡터로 구성하고 BAM 기반 손실 압축 구조로 payload를 줄였습니다.',
          'Composed GPS/IMU data into a 12-dimensional sensor vector and reduced payload size using a BAM-based lossy compression structure.'
        ),
        t(
          'Raspberry Pi 기반 Linux 환경에서 송수신 파이프라인을 실행하고 동일 장비·동일 설정 조건으로 비교했습니다.',
          'Ran the TX/RX pipeline on Raspberry Pi Linux nodes and compared methods under matched hardware and configuration.'
        ),
        t(
          'NLOS 구간 필드 테스트에서 성공 패킷 수, PDR, MSE를 함께 기록해 전송 효율과 데이터 품질을 같이 평가했습니다.',
          'Evaluated both transmission efficiency and data quality by logging successful packets, PDR, and MSE in NLOS field tests.'
        ),
      ],
      metricCards: [
        [t('Payload', 'Payload'), '32B → 20B', t('전송량 경량화', 'Payload reduction')],
        [t('성공 패킷', 'Successful packets'), '29 → 33 / 100', t('+4건, 상대 약 14% 개선', '+4 packets, about 14% relative gain')],
        [t('복원 오차', 'Restoration error'), 'MSE 0.003676', t('데이터 품질 확인', 'Data quality check')],
      ],
      resultTable: {
        headers: [t('구분', 'Item'), 'RAW', t('BAM 압축', 'BAM compressed'), t('해석', 'Meaning')],
        rows: [
          [t('Payload', 'Payload'), '32B', '20B', t('전송 데이터 크기 감소', 'Reduced transmitted data size')],
          [t('성공 패킷', 'Successful packets'), '29 / 100', '33 / 100', t('동일 조건에서 +4건 성공', '+4 successes under matched conditions')],
          [t('복원 오차', 'Restoration error'), '-', 'MSE 0.003676', t('압축 후 복원 품질 확인', 'Restoration quality checked after compression')],
        ],
      },
      chart: {
        src: loraChartUrl,
        alt: t('LoRa RAW와 BAM 압축 방식의 성공 패킷 수 비교 그래프', 'Chart comparing successful packets between LoRa RAW and BAM-compressed methods'),
        caption: t(
          '동일한 100회 전송 조건에서 RAW와 BAM 압축 방식의 누적 성공 패킷 수를 비교한 결과입니다.',
          'Cumulative successful-packet comparison between RAW and BAM-compressed methods under the same 100-transmission condition.'
        ),
      },
      platformMeaning: t(
        '이 경험은 로봇 데이터 플랫폼에서 필요한 데이터 처리 기준 설정, 반복 실험, 지표화, 품질 확인 흐름과 연결됩니다. 특히 실제 환경에서 데이터가 흔들릴 때 비교 조건과 로그를 남기며 판단한 경험을 보여줍니다.',
        'This connects to data-platform work: defining processing rules, repeating experiments, metricizing results, and checking quality. It shows experience making defensible comparisons with logs when data changes under real-world conditions.'
      ),
      note: t(
        '학습 데이터와 실제 이동 데이터의 분포 차이로 GPS 복원 오차가 발생한 한계도 확인했습니다. 이를 통해 데이터 대표성과 검증 조건이 플랫폼 단계에서 함께 관리되어야 함을 배웠습니다.',
        'A limitation was also identified: GPS restoration error appeared when training and movement-data distributions differed. This showed that data representativeness and validation conditions must be managed at the platform level.'
      ),
      links: [
        {
          label: t('최종 보고서', 'Final Report'),
          url: loraReportUrl,
          kind: 'report',
        },
        {
          label: 'GitHub',
          url: loraGithubUrl,
          kind: 'github',
        },
      ],
    },
    {
      id: 'valve-baseline',
      icon: BarChart3,
      eyebrow: t('대표 사례 02', 'Case 02'),
      title: t(
        '산업용 밸브 정상 유량 예측 기준선 구축',
        'Industrial Valve Normal-Flow Baseline Forecasting'
      ),
      subtitle: t(
        '센서 시계열 데이터의 불연속성과 측정 정밀도를 고려해 예측 모델과 검증 기준을 정리했습니다.',
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
        '정상 상태 밸브의 유량을 안정적으로 예측해야 이후 고장 상태와의 차이를 기준선 형태로 비교할 수 있었습니다. 실제 데이터에는 제한된 측정 정밀도, 이상치, 개도율 변화에 따른 불연속성이 함께 존재했습니다.',
        'A stable normal-flow baseline was needed before abnormal valve conditions could be compared against it. The real data contained limited measurement precision, outliers, and discontinuities from valve-opening changes.'
      ),
      approach: [
        t(
          '개도율과 입력 압력 3개·출력 압력 3개를 입력으로 사용하고 실제 측정 유량을 예측 대상으로 구성했습니다.',
          'Used valve opening plus three inlet and three outlet pressures as inputs, with measured flow as the prediction target.'
        ),
        t(
          '측정값의 유효 자릿수와 이상치를 고려해 전처리 기준을 세우고, 무리한 정규화보다 데이터 해석 가능성을 우선했습니다.',
          'Defined preprocessing rules based on measurement precision and outliers, prioritizing interpretability over forced normalization.'
        ),
        t(
          '기본 LSTM과 비교하며 Encoder-LSTM과 Huber Loss를 적용해 이상치에 덜 민감한 학습 구조를 구성했습니다.',
          'Compared against a baseline LSTM and applied Encoder-LSTM with Huber Loss to reduce sensitivity to outliers.'
        ),
      ],
      metricCards: [
        ['Loss', '4.0376e-05', t('최종 평가 손실', 'Final evaluation loss')],
        ['MAE', '0.003941', t('평균 절대오차', 'Mean absolute error')],
        ['MAPE', '0.183501', t('예측 오차율', 'Prediction error rate')],
      ],
      resultTable: {
        headers: [t('지표', 'Metric'), t('결과', 'Result'), t('의미', 'Meaning')],
        rows: [
          ['Loss', '4.0376e-05', t('최종 모델 평가 손실', 'Final model evaluation loss')],
          ['MAE', '0.003941', t('예측값과 실제값의 평균 절대 차이', 'Average absolute difference between prediction and target')],
          ['MAPE', '0.183501', t('정상 유량 기준선으로 활용 가능한 오차 수준 확인', 'Confirmed error level usable for a normal-flow baseline')],
        ],
      },
      chart: {
        src: valveChartUrl,
        alt: t('산업용 밸브 유량 예측값과 실제값 비교 그래프', 'Chart comparing predicted and measured industrial valve flow'),
        caption: t(
          '정상 상태 유량 예측에서 실제값과 예측값의 추세 일치를 확인하기 위한 결과 시각화입니다.',
          'Result visualization used to check trend alignment between measured and predicted normal-state flow.'
        ),
      },
      platformMeaning: t(
        '로봇 데이터 플랫폼에서도 센서 데이터가 어떤 기준으로 정제되고 어떤 지표로 품질을 판단해야 하는지가 중요합니다. 이 프로젝트는 모델 성능뿐 아니라 전처리 기준과 평가 지표를 함께 정리한 경험입니다.',
        'Robot data platforms also require clear rules for cleaning sensor data and judging quality with metrics. This project shows experience organizing preprocessing rules and evaluation metrics, not only model scores.'
      ),
      note: t(
        '원본 데이터와 전체 코드는 공개할 수 없어 공개 가능한 범위의 보고서와 결과 이미지로 증빙합니다.',
        'The original dataset and full code cannot be published, so evidence is provided through shareable reports and result images.'
      ),
      links: [
        {
          label: t('요약 보고서', 'Brief Report'),
          url: valveSummaryUrl,
          kind: 'report',
        },
        {
          label: t('원본 보고서', 'Full Report'),
          url: valveReportUrl,
          kind: 'report',
        },
      ],
    },
  ];

  const contributionMap = [
    {
      icon: Wrench,
      title: t('초기 기여', 'Initial Contribution'),
      body: t(
        '로봇 센서 데이터의 전처리, 품질 점검, 결과 지표화, 시각화 자동화부터 빠르게 기여하겠습니다.',
        'I can first contribute to preprocessing, quality checks, metricization, and visualization automation for robot sensor data.'
      ),
    },
    {
      icon: Cpu,
      title: t('확장 방향', 'Growth Direction'),
      body: t(
        '이후 annotation/data tool에서 반복 검수 비용을 줄이는 기능과 모델·시뮬레이션으로 이어지는 AI 기반 도구 구현으로 확장하고 싶습니다.',
        'I want to grow toward features that reduce repeated review cost in annotation/data tools and AI-assisted tools connected to models and simulation.'
      ),
    },
    {
      icon: FileText,
      title: t('보완할 영역', 'Areas to Strengthen'),
      body: t(
        '웹 annotation tool과 3D 데이터는 직접 프로젝트 경험이 제한적입니다. 대신 센서 데이터 처리, 실험 기준 통제, Linux 기반 구현 경험을 바탕으로 빠르게 보완하겠습니다.',
        'My direct experience in web annotation tools and 3D data is limited. I will build from sensor-data handling, validation control, and Linux-based implementation experience.'
      ),
    },
  ];

  return (
    <main className="portfolio-page naverlabs-page">
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
        <section className="portfolio-hero naverlabs-hero">
          <p className="portfolio-eyebrow">{t('NAVER LABS 맞춤 포트폴리오', 'NAVER LABS Targeted Portfolio')}</p>
          <h1 className="portfolio-title">AI Data Platform Developer</h1>
          <p className="portfolio-description">
            {t(
              '센서 데이터 처리와 현장 검증 경험을 로봇 데이터 플랫폼 업무에 연결한 포트폴리오입니다. 데이터가 수집된 뒤 전처리, 품질 확인, 지표화, 시각화, 모델 활용으로 이어지는 흐름을 중심으로 정리했습니다.',
              'A targeted portfolio connecting sensor-data processing and field-validation experience to robot data-platform work. It focuses on the flow from collected data to preprocessing, quality checks, metricization, visualization, and model usage.'
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
            <span className="portfolio-badge">TensorFlow/Keras</span>
            <span className="portfolio-badge">Linux / Raspberry Pi</span>
            <span className="portfolio-badge">Sensor Data</span>
            <span className="portfolio-badge">Metricization</span>
            <span className="portfolio-badge">Field Validation</span>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">{t('직무와 경험의 연결', 'Role Alignment')}</p>
            <h2>{t('공고 핵심과 제 경험의 대응점', 'How my experience maps to the role')}</h2>
            <p>
              {t(
                '이 페이지는 일반 프로젝트 나열이 아니라, 로봇 데이터 처리 파이프라인과 annotation/data tool 생산성 개선에 필요한 역량을 중심으로 재구성했습니다.',
                'This page is not a generic project list. It is reorganized around capabilities relevant to robot-data pipelines and annotation/data-tool productivity.'
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
              <p className="portfolio-block-label">{t('대응 근거', 'Matching evidence')}</p>
              <ul>
                {matchingEvidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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

                  <div className="portfolio-result-strip naverlabs-result-strip">
                    <div className="portfolio-result-header">
                      <p className="portfolio-block-label">{t('검증 결과', 'Validation Results')}</p>
                      <p>{project.platformMeaning}</p>
                    </div>

                    <div className="naverlabs-metric-grid">
                      {project.metricCards.map(([label, value, description]) => (
                        <div className="naverlabs-metric-card" key={`${project.id}-${label}`}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                          <p>{description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="naverlabs-result-grid">
                      <figure className="naverlabs-result-figure">
                        <img src={project.chart.src} alt={project.chart.alt} />
                        <figcaption>{project.chart.caption}</figcaption>
                      </figure>

                      <div className="naverlabs-table-card">
                        <p className="portfolio-block-label">{t('결과 표', 'Result Table')}</p>
                        <div className="naverlabs-table-wrap">
                          <table className="naverlabs-result-table">
                            <thead>
                              <tr>
                                {project.resultTable.headers.map((header) => (
                                  <th key={header}>{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {project.resultTable.rows.map((row) => (
                                <tr key={row.join('-')}>
                                  {row.map((cell, index) => (
                                    <td key={`${row[0]}-${index}`}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio-proof-box">
                    <p className="portfolio-block-label">{t('한계와 증빙', 'Limit and Evidence')}</p>
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
            <p className="portfolio-eyebrow">{t('추가 정보', 'Additional Details')}</p>
            <h2>{t('기술 및 관련 링크', 'Tech and Related Links')}</h2>
            <div className="portfolio-info-group">
              <p className="portfolio-block-label">{t('주요 기술', 'Main Stack')}</p>
              <p>
                {t(
                  'Python, TensorFlow/Keras, pandas, NumPy, Linux, Raspberry Pi, Git/GitHub, 센서 데이터 전처리, 시계열 예측, 실험 지표화',
                  'Python, TensorFlow/Keras, pandas, NumPy, Linux, Raspberry Pi, Git/GitHub, sensor-data preprocessing, time-series forecasting, experiment metricization'
                )}
              </p>
            </div>
            <div className="portfolio-info-group">
              <p className="portfolio-block-label">{t('링크', 'Links')}</p>
              <div className="portfolio-contact-lines">
                <p><Github size={16} /> GitHub: {githubUrl}</p>
                <p><FileText size={16} /> Portfolio: {portfolioUrl}</p>
                <p><ExternalLink size={16} /> LoRa Report: {loraReportUrl}</p>
                <p><ExternalLink size={16} /> Valve Report: {valveSummaryUrl}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NaverLabsDataPlatform;
