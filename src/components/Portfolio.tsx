import {
  ArrowLeft,
  BarChart3,
  Cpu,
  Download,
  ExternalLink,
  Factory,
  FileText,
  Github,
  Radio,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../../../gwon9906.github.io-portfolio-brief-clean (1)/src/contexts/useLanguage.ts';
import './Portfolio.css';

const Portfolio = () => {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const selectedProjects = [
    {
      id: 'valve-flow',
      icon: Factory,
      eyebrow: t('대표 프로젝트 01', 'Selected Project 01'),
      title: t('산업용 밸브 정상 유량 예측', 'Industrial Valve Normal-Flow Forecasting'),
      subtitle: t(
        '실제 밸브 시계열 데이터에서 기준선 모델을 만들고, 현장 데이터 특성을 반영해 예측 오차를 낮춘 사례',
        'Built a baseline model on real valve time-series data and reduced forecasting error by reflecting industrial data characteristics.'
      ),
      meta: [
        [t('기간', 'Period'), '2024.07 - 2024.12'],
        [t('형태', 'Type'), t('개인 연구', 'Individual project')],
        [
          t('내 역할', 'My role'),
          t(
            '데이터 분석, 전처리 기준 정리, Encoder-LSTM 설계, 실험 검증',
            'Data analysis, preprocessing rules, Encoder-LSTM design, experiment validation'
          ),
        ],
      ],
      problem: t(
        '정상 상태 밸브의 유량을 안정적으로 예측해 두어야 이후 고장 상태와의 차이를 기준선 형태로 비교할 수 있습니다. 하지만 실제 운전 데이터는 개도율 변화에 따른 불연속성과 제한된 측정 정밀도, 이상치가 함께 존재해 단순 LSTM으로는 오차가 흔들릴 가능성이 있었습니다.',
        'A stable baseline for normal valve flow is necessary before abnormal conditions can be compared against it. Real operating data, however, contained discontinuities from valve opening changes, limited measurement precision, and outliers, which made a simple LSTM unstable.'
      ),
      approach: [
        t(
          '개도율과 입력 압력 3개·출력 압력 3개를 입력으로 사용하고, 실제 측정 유량을 예측 대상으로 두었습니다.',
          'Used valve opening plus three inlet and three outlet pressures as inputs, with measured flow as the prediction target.'
        ),
        t(
          '측정값 정밀도가 제한적이어서 무리한 정규화보다 이상치 기준 정리와 원본값 유지에 집중했습니다.',
          'Because measurement precision was limited, I focused on outlier rules and preserving original values rather than forcing normalization.'
        ),
        t(
          '기본 LSTM과 비교하면서 Encoder-LSTM 구조와 Huber Loss를 적용해 이상치에 덜 민감한 학습 구조를 설계했습니다.',
          'Compared against a baseline LSTM and then applied an Encoder-LSTM with Huber Loss to make training less sensitive to outliers.'
        ),
      ],
      results: ['Loss 4.0376e-05', 'MAE 0.003941', 'MAPE 0.183501'],
      outcome: t(
        '이 프로젝트는 단순히 성능 수치를 높인 사례보다, 실제 산업 데이터에서 어떤 전처리와 검증 기준이 설득력 있는지를 정리한 사례에 가깝습니다. 스마트제조·생산기술 직무에서 요구하는 설비 데이터 이해와 검증 중심 접근을 보여줄 수 있습니다.',
        'This case is valuable not only for the final metric, but for showing which preprocessing and validation rules are convincing on real industrial data. It demonstrates an equipment-data and validation-first approach relevant to smart-manufacturing and production-technology roles.'
      ),
      note: t(
        '원본 데이터와 전체 코드는 공개할 수 없어, 공개 가능한 범위에서 프로젝트 요약 보고서를 별도 첨부했습니다.',
        'Because the original dataset and full code cannot be published, a shareable project brief is attached instead.'
      ),
      links: [
        {
          label: t('유량 예측 요약 보고서', 'Valve Forecasting Brief'),
          url: 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf',
          kind: 'report',
        },
        {
          label: t('유량 예측 원본 보고서', 'Valve Forecasting Full Report'),
          url: 'https://gwon9906.github.io/files/valve-flow-report.pdf',
          kind: 'report',
        },
      ],
    },
    {
      id: 'lora',
      icon: Radio,
      eyebrow: t('대표 프로젝트 02', 'Selected Project 02'),
      title: t('LoRa 저신호 환경 통신 개선', 'LoRa Communication Improvement in Low-Quality Channels'),
      subtitle: t(
        '저전력·장거리 무선통신 환경에서 payload 크기와 전송 성공률의 관계를 실제 필드 테스트로 검증한 사례',
        'Validated the relationship between payload size and transmission success through real field tests in low-power long-range communication.'
      ),
      meta: [
        [t('기간', 'Period'), '2025.03 - 2025.06'],
        [t('형태', 'Type'), t('4인 팀 프로젝트', 'Team project (4 members)')],
        [
          t('내 역할', 'My role'),
          t(
            'BAM 기반 압축 구조 구현, 송수신 파이프라인 구성, 필드 테스트',
            'BAM-based compression implementation, TX/RX pipeline setup, field testing'
          ),
        ],
      ],
      problem: t(
        'LoRa 환경에서는 payload가 커질수록 전송 시간이 길어지고, 충돌과 재전송으로 인해 PDR이 빠르게 떨어질 수 있습니다. 따라서 단순히 통신 파라미터를 조정하는 대신, 전송할 데이터 자체를 줄여 실환경에서 성공률을 높일 수 있는지 확인할 필요가 있었습니다.',
        'In LoRa communication, larger payloads increase airtime and can sharply reduce PDR through collisions and retransmissions. The key question was whether shrinking the transmitted data itself could improve success rates under real conditions.'
      ),
      approach: [
        t(
          'GPS·IMU 센서 데이터를 수집하고, BAM 기반 손실 압축 구조로 payload를 줄이는 파이프라인을 구성했습니다.',
          'Collected GPS and IMU sensor data and built a BAM-based lossy-compression pipeline to reduce payload size.'
        ),
        t(
          'Raspberry Pi 기반 Linux 환경에서 동일 장비·동일 설정으로 RAW 32B와 압축 payload를 반복 비교했습니다.',
          'Repeatedly compared RAW 32B and compressed payloads under identical hardware and configuration on Raspberry Pi based Linux nodes.'
        ),
        t(
          '약 2.0~2.6 km NLOS 구간에서 100회 반복 전송하며 성공 패킷 수와 복원 오차를 함께 확인했습니다.',
          'Measured successful packets and restoration error across repeated 100-transmission trials in roughly 2.0–2.6 km NLOS conditions.'
        ),
      ],
      results: [
        t('Payload 32B → 20B', 'Payload 32B → 20B'),
        t('100회 전송 기준 성공 패킷 수 29 → 33', 'Successful packets per 100 transmissions: 29 → 33'),
        'PDR 33%',
        'MSE 0.003676',
      ],
      outcome: t(
        '이 프로젝트는 모델 구현 자체보다, 제약이 큰 환경에서 전송 효율과 데이터 품질 사이의 균형을 어떻게 실험적으로 검증했는지를 보여줍니다. 제조 현장의 설비·센서 데이터 처리와도 닿아 있는 강점입니다.',
        'More than the model itself, this project shows how I experimentally validated the trade-off between transmission efficiency and data quality under tight constraints. That mindset is also relevant to equipment and sensor-data handling in manufacturing.'
      ),
      note: t(
        '오픈 저장소와 최종 보고서를 함께 남겨 두어, 구현 방식과 검증 결과를 확인할 수 있습니다.',
        'Both an open repository and the final report are available so the implementation approach and validation results can be reviewed.'
      ),
      links: [
        {
          label: t('LoRa 최종 보고서', 'LoRa Final Report'),
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
  ];

  const strengths = [
    {
      icon: Wrench,
      title: t('문제 정의와 검증 기준 정리', 'Problem definition and validation rules'),
      body: t(
        '모델을 먼저 고르기보다 데이터 구조, 비교 기준, 누수 가능성, 현장 제약을 먼저 정리합니다.',
        'I start by clarifying data structure, comparison rules, leakage risks, and field constraints before choosing a model.'
      ),
    },
    {
      icon: Cpu,
      title: t('구현까지 연결하는 실무형 접근', 'Implementation-minded workflow'),
      body: t(
        'Python·Linux·Raspberry Pi 환경에서 실험과 로그 정리까지 직접 연결해 결과를 확인해왔습니다.',
        'I connect modeling with implementation and logging in Python, Linux, and Raspberry Pi environments.'
      ),
    },
    {
      icon: BarChart3,
      title: t('방어 가능한 수치 중심 정리', 'Defensible metrics over inflated claims'),
      body: t(
        '공개 가능한 자료에서 확인되는 수치만 사용하고, 긴 보고서는 보조 증빙으로만 두었습니다.',
        'I keep only metrics that can be defended from shareable materials, while using long reports only as supporting evidence.'
      ),
    },
  ];

  return (
    <div className="portfolio-brief">
      <div className="portfolio-controls no-print">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="portfolio-control-btn portfolio-back-btn"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('홈으로', 'Back to Home')}
        </a>
        <button onClick={handlePrint} className="portfolio-control-btn portfolio-print-btn">
          <Download className="w-5 h-5" />
          {t('PDF 저장', 'Save as PDF')}
        </button>
      </div>

      <div className="portfolio-shell">
        <section className="portfolio-hero-card">
          <div className="portfolio-hero-copy">
            <p className="portfolio-eyebrow">{t('포트폴리오 요약', 'Portfolio Brief')}</p>
            <h1 className="portfolio-title">{t('제출용 포트폴리오', 'Submission Portfolio')}</h1>
            <p className="portfolio-subtitle">
              {t(
                '제조·센서 데이터와 제약 환경에서의 실험 검증 경험을 중심으로, 대표 프로젝트 2개만 간결하게 정리했습니다. 이 페이지는 파일 제출과 PDF 저장을 함께 고려해 웹과 문서의 중간 형태로 구성했습니다.',
                'This page highlights only two representative projects around manufacturing/sensor data and constrained-environment validation. It is designed as a hybrid of a web portfolio and a file-friendly document for PDF submission.'
              )}
            </p>
            <div className="portfolio-chip-row">
              <span className="portfolio-chip">MAPE 0.1835</span>
              <span className="portfolio-chip">32B → 20B</span>
              <span className="portfolio-chip">29 → 33 / 100 tx</span>
              <span className="portfolio-chip">Python · Linux · Raspberry Pi</span>
            </div>
          </div>

          <div className="portfolio-summary-card">
            <p className="portfolio-summary-label">{t('핵심 포인트', 'What this page shows')}</p>
            <ul className="portfolio-summary-list">
              <li>{t('실제 밸브 데이터 기반 시계열 예측 경험', 'Time-series forecasting on real valve data')}</li>
              <li>{t('NLOS 환경 LoRa 필드 테스트와 성능 비교', 'LoRa field validation under NLOS conditions')}</li>
              <li>{t('문제 정의 → 구현 → 검증까지 직접 연결한 사례', 'Cases where problem definition, implementation, and validation were handled end to end')}</li>
            </ul>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">{t('프로젝트 사례', 'Case Studies')}</p>
            <h2>{t('대표 프로젝트', 'Selected Projects')}</h2>
            <p>
              {t(
                '길게 읽히는 보고서 대신, 문제·접근·결과·의미가 바로 보이도록 정리했습니다. 상세 자료는 각 프로젝트 아래 증빙 링크로 남겨 두었습니다.',
                'Rather than relying on long reports, each case is structured so the problem, approach, results, and implications are visible immediately. Detailed evidence is linked below each project.'
              )}
            </p>
          </div>

          <div className="portfolio-project-list">
            {selectedProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.id} className="portfolio-project-card">
                  <div className="portfolio-project-head">
                    <div className="portfolio-project-icon">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="portfolio-project-eyebrow">{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                      <p className="portfolio-project-subtitle">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="portfolio-meta-grid">
                    {project.meta.map(([label, value]) => (
                      <div key={label} className="portfolio-meta-item">
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="portfolio-project-grid">
                    <div className="portfolio-project-block">
                      <p className="portfolio-block-title">{t('문제', 'Problem')}</p>
                      <p>{project.problem}</p>
                    </div>
                    <div className="portfolio-project-block">
                      <p className="portfolio-block-title">{t('접근', 'Approach')}</p>
                      <ul>
                        {project.approach.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="portfolio-project-grid portfolio-project-grid-bottom">
                    <div className="portfolio-project-block">
                      <p className="portfolio-block-title">{t('결과', 'Results')}</p>
                      <ul className="portfolio-metric-list">
                        {project.results.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="portfolio-project-block">
                      <p className="portfolio-block-title">{t('의미', 'Why it matters')}</p>
                      <p>{project.outcome}</p>
                    </div>
                  </div>

                  <div className="portfolio-note-box">
                    <p className="portfolio-block-title">{t('보완 메모', 'Supporting note')}</p>
                    <p>{project.note}</p>
                  </div>

                  <div className="portfolio-proof-box">
                    <p className="portfolio-block-title">{t('증빙 링크', 'Evidence links')}</p>
                    <div className="portfolio-proof-links no-print">
                      {project.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="portfolio-proof-link">
                          {link.kind === 'github' ? <Github className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                          <span>{link.label}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                    <div className="portfolio-proof-urls">
                      {project.links.map((link) => (
                        <div key={`${link.url}-text`} className="portfolio-proof-url-item">
                          <strong>{link.label}:</strong> {link.url}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="portfolio-section portfolio-two-column">
          <div className="portfolio-detail-card">
            <p className="portfolio-eyebrow">{t('일하는 방식', 'How I work')}</p>
            <h2>{t('문제 해결 방식', 'Working Style')}</h2>
            <div className="portfolio-strength-list">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <div key={strength.title} className="portfolio-strength-item">
                    <div className="portfolio-strength-icon">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3>{strength.title}</h3>
                      <p>{strength.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="portfolio-detail-card">
            <p className="portfolio-eyebrow">{t('기술 및 연락처', 'Tech and Contact')}</p>
            <h2>{t('함께 보는 정보', 'Additional Details')}</h2>
            <div className="portfolio-info-group">
              <p className="portfolio-block-title">{t('주요 기술', 'Main stack')}</p>
              <p>
                {t(
                  'Python, TensorFlow/PyTorch, Linux, Git/GitHub, Raspberry Pi, 시계열 전처리, 신호·센서 데이터 처리',
                  'Python, TensorFlow/PyTorch, Linux, Git/GitHub, Raspberry Pi, time-series preprocessing, signal and sensor-data handling'
                )}
              </p>
            </div>
            <div className="portfolio-info-group">
              <p className="portfolio-block-title">{t('연락처', 'Contact')}</p>
              <p>Email: gwon99065@naver.com</p>
              <p>GitHub: https://github.com/gwon9906</p>
              <p>Portfolio: https://gwon9906.github.io/#portfolio</p>
            </div>
            <div className="portfolio-info-group">
              <p className="portfolio-block-title">{t('제출 시 사용 팁', 'Submission note')}</p>
              <p>
                {t(
                  '파일 제출이 필요한 경우 이 페이지를 PDF로 저장해 제출하고, 보고서 원문은 보조 증빙으로만 추가하는 방식을 권장합니다.',
                  'If a file upload is required, save this page as PDF for submission and attach the original reports only as supporting evidence.'
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
