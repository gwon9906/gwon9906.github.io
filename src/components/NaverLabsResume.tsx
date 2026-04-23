import { ArrowLeft, Download, ExternalLink, FileText, Github } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import './Resume.css';

const githubUrl = 'https://github.com/gwon9906';
const portfolioUrl = 'https://gwon9906.github.io/#naverlabs-resume';
const valveReportUrl = 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf';
const loraReportUrl = 'https://gwon9906.github.io/files/lora-final-report.pdf';
const loraGithubUrl = 'https://github.com/gwon9906/Lightweight-MF-BAM';
const valveChartUrl = '/files/valve-forecast-chart.png';
const loraChartUrl = '/files/lora-success-chart.png';

const NaverLabsResume = () => {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
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
          {t('페이지 저장', 'Save Page as PDF')}
        </button>
      </div>

      <div className="resume-page">
        <div className="resume-header">
          <h1 className="resume-name">{t('이해권', 'Haegwon Lee')}</h1>
          <div className="resume-title">
            {t('NAVER LABS | AI Data Platform Developer Portfolio', 'NAVER LABS | AI Data Platform Developer Portfolio')}
          </div>
        </div>

        <div className="resume-contact">
          <div className="contact-item">
            <strong>Email:</strong> gwon99065@naver.com
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong> {githubUrl}
          </div>
          <div className="contact-item">
            <strong>Portfolio:</strong> {portfolioUrl}
          </div>
          <div className="contact-item">
            <strong>{t('휴대폰', 'Phone')}:</strong> 010-3414-9906
          </div>
        </div>

        <div className="resume-divider"></div>

        <section className="resume-section">
          <h2 className="section-title">{t('Profile', 'Profile')}</h2>
          <p className="section-content">
            {t(
              '센서 데이터 처리와 제약 환경 검증을 중심으로 프로젝트를 수행해 왔습니다. 산업용 밸브 유량 예측에서는 시계열 데이터의 불연속 구간과 측정 정밀도를 반영해 전처리 기준과 모델 구조를 조정했고, LoRa 프로젝트에서는 payload 경량화가 실제 전송 성공률에 미치는 영향을 Raspberry Pi 기반 Linux 환경과 NLOS 필드 테스트로 확인했습니다. 공고의 핵심인 데이터 처리 자동화, 품질 검증, 실험 결과의 지표화·시각화 읽히도록 두 프로젝트를 정리했습니다.',
              'My work has focused on sensor-data handling and validation under constrained environments. In industrial valve forecasting, I adjusted preprocessing rules and model structure by reflecting sequence discontinuities and limited measurement precision. In the LoRa project, I validated how payload reduction affects real transmission success through Raspberry Pi based Linux experiments and NLOS field tests. The two projects below are organized so their relevance to data processing, quality validation, and metric-driven analysis is immediately visible.'
            )}
          </p>
          <div className="metric-chip-row">
            <span className="metric-chip">MAPE 0.1835</span>
            <span className="metric-chip">32B → 20B</span>
            <span className="metric-chip">29 → 33 / 100 tx</span>
            <span className="metric-chip">Python · Linux · Raspberry Pi</span>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('Selected Project 01 | Industrial Valve Normal-Flow Forecasting', 'Selected Project 01 | Industrial Valve Normal-Flow Forecasting')}</h2>
          <div className="project-meta">
            <div className="meta-item">
              <strong>{t('기간', 'Period')}:</strong> 2024.07 - 2024.12
            </div>
            <div className="meta-item">
              <strong>{t('형태', 'Type')}:</strong> {t('개인 연구', 'Individual project')}
            </div>
            <div className="meta-item">
              <strong>{t('내 역할', 'Role')}:</strong>{' '}
              {t(
                '데이터 분석, 전처리 기준 수립, Encoder-LSTM 설계, 결과 검증',
                'Data analysis, preprocessing-rule design, Encoder-LSTM design, result validation'
              )}
            </div>
          </div>

          <div className="subsection-title">{t('Overview', 'Overview')}</div>
          <p className="project-content">
            {t(
              '정상 상태 밸브의 유량을 안정적으로 예측해 두면 이후 고장 상태와의 차이를 기준선 형태로 비교할 수 있습니다. 실제 데이터에는 개도율 변화에 따른 불연속성과 제한된 측정 정밀도, 이상치가 함께 존재했기 때문에 무리한 정규화보다 시계열 순서 유지와 이상치 기준 정리에 집중했습니다. 이후 기본 LSTM과 Encoder-LSTM을 비교하고 Huber Loss를 적용해 이상치에 덜 민감한 구조로 조정했습니다.',
              'A stable normal-flow baseline is necessary before abnormal conditions can be compared against it. Because the real data contained discontinuities from valve opening changes, limited measurement precision, and outliers, I focused on preserving time order and defining outlier rules rather than forcing normalization. I then compared a baseline LSTM with an Encoder-LSTM and used Huber Loss to make the setup less sensitive to outliers.'
            )}
          </p>

          <div className="subsection-title">{t('Result', 'Result')}</div>
          <ul className="project-list">
            <li>{t('실제 운용 밸브 데이터 사용', 'Used data collected from real operating valves')}</li>
            <li>{t('기본 LSTM 대비 Encoder-LSTM 구조 비교', 'Compared a baseline LSTM against an Encoder-LSTM')}</li>
            <li>Loss 4.0376e-05 / MAE 0.003941 / MAPE 0.183501</li>
          </ul>

          <figure className="project-figure">
            <img src={valveChartUrl} alt={t('유량 예측 결과 그래프', 'Valve forecasting result chart')} />
            <figcaption className="figure-caption">
              {t(
                '예측값과 실제값이 대부분 구간에서 안정적으로 일치하며, 정상 상태 기준선으로 활용 가능한 수준의 추세 일치를 확인할 수 있습니다.',
                'Predicted and actual values align consistently across most regions, showing stable trend agreement that can serve as a normal-state baseline.'
              )}
            </figcaption>
          </figure>

          <div className="subsection-title">{t('Evidence', 'Evidence')}</div>
          <p className="project-content">
            {t(
              '이 프로젝트는 실제 설비 데이터에서 기준선을 어떻게 만들고 검증했는지를 보여주는 사례입니다. 개도율, 입·출력 압력, 이상치처럼 예측 결과를 흔들 수 있는 요소를 먼저 정리한 뒤, 모델 구조와 손실 함수를 조정해 오차를 낮췄습니다. 공개 가능한 자료는 요약 보고서로 정리했습니다.',
              'This project shows how I built and validated a baseline from real equipment data. I first organized factors that could distort prediction quality, such as valve opening, inlet/outlet pressure, and outliers, and then reduced error by adjusting the model structure and loss function. The shareable evidence is summarized in the attached brief.'
            )}
          </p>
          <div className="resume-link-row no-print">
            <a href={valveReportUrl} target="_blank" rel="noopener noreferrer" className="resume-link-btn">
              <FileText className="w-4 h-4" />
              {t('유량 예측 요약 보고서', 'Valve Forecasting Summary Report')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>

      <div className="resume-page">
        <section className="resume-section">
          <h2 className="section-title">{t('Selected Project 02 | LoRa Communication Improvement in Low-Quality Channels', 'Selected Project 02 | LoRa Communication Improvement in Low-Quality Channels')}</h2>
          <div className="project-meta">
            <div className="meta-item">
              <strong>{t('기간', 'Period')}:</strong> 2025.03 - 2025.06
            </div>
            <div className="meta-item">
              <strong>{t('형태', 'Type')}:</strong> {t('4인 팀 프로젝트', 'Team project (4 members)')}
            </div>
            <div className="meta-item">
              <strong>{t('내 역할', 'Role')}:</strong>{' '}
              {t(
                'BAM 기반 압축 구조 구현, 송수신 파이프라인 구성, 필드 테스트',
                'BAM-based compression implementation, TX/RX pipeline setup, field testing'
              )}
            </div>
          </div>

          <div className="subsection-title">{t('Overview', 'Overview')}</div>
          <p className="project-content">
            {t(
              'LoRa 환경에서는 payload가 커질수록 전송 시간이 길어지고, 충돌과 재전송으로 인해 성공률이 빠르게 떨어질 수 있습니다. 이를 확인하기 위해 GPS·IMU 센서 데이터를 대상으로 BAM 기반 손실 압축 구조를 구현하고, Raspberry Pi 기반 Linux 환경에서 RAW 32B payload와 압축 payload를 동일 조건으로 반복 비교했습니다. 실험은 약 2.0~2.6 km NLOS 구간에서 100회 전송 기준으로 수행했습니다.',
              'In LoRa communication, larger payloads increase airtime and can sharply reduce success rates through collisions and retransmissions. To test this, I implemented a BAM-based lossy-compression pipeline for GPS and IMU sensor data and repeatedly compared RAW 32B payloads against compressed payloads under identical conditions on Raspberry Pi based Linux nodes. Trials were conducted across roughly 2.0–2.6 km NLOS conditions with 100 transmissions per run.'
            )}
          </p>

          <div className="subsection-title">{t('Result', 'Result')}</div>
          <ul className="project-list">
            <li>{t('동일 장비·동일 설정 조건에서 RAW/압축 payload 반복 비교', 'Repeated RAW vs. compressed payload comparison under identical device/configuration settings')}</li>
            <li>{t('Payload 32B → 20B', 'Payload 32B → 20B')}</li>
            <li>{t('100회 전송 기준 성공 패킷 수 29 → 33', 'Successful packets per 100 transmissions: 29 → 33')}</li>
            <li>PDR 33% / MSE 0.003676</li>
          </ul>

          <figure className="project-figure">
            <img src={loraChartUrl} alt={t('LoRa 누적 성공 패킷 그래프', 'LoRa cumulative success chart')} />
            <figcaption className="figure-caption">
              {t(
                '100회 반복 전송 기준으로 BAM 압축 방식이 RAW 전송 방식보다 누적 성공 패킷 수를 꾸준히 상회했습니다.',
                'Across repeated 100-transmission trials, the BAM-compressed approach consistently stayed above the RAW baseline in cumulative successful packets.'
              )}
            </figcaption>
          </figure>

          <div className="subsection-title">{t('Evidence', 'Evidence')}</div>
          <p className="project-content">
            {t(
              '이 프로젝트는 통신 품질이 불안정한 환경에서 payload 경량화가 실제 전송 성공률 개선으로 이어지는지 확인한 사례입니다. 단순히 압축 모델을 구현하는 데서 끝내지 않고, 동일 장비·동일 설정에서 RAW와 압축 payload를 반복 비교했습니다. 대표 실험에서 성공 패킷 수가 29건에서 33건으로 증가했고, 복원 오차는 MSE 0.003676 수준으로 유지했습니다.',
              'This project validates whether payload reduction improves real transmission success under unstable channel conditions. Instead of stopping at model implementation, I repeatedly compared RAW and compressed payloads under identical hardware and configuration settings. In the representative trial, successful packets increased from 29 to 33, while reconstruction error remained at MSE 0.003676.'
            )}
          </p>
          <div className="resume-link-row no-print">
            <a href={loraReportUrl} target="_blank" rel="noopener noreferrer" className="resume-link-btn">
              <FileText className="w-4 h-4" />
              {t('LoRa 최종 보고서', 'LoRa Final Report')}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href={loraGithubUrl} target="_blank" rel="noopener noreferrer" className="resume-link-btn">
              <Github className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('Relevant Strengths', 'Relevant Strengths')}</h2>
          <ul className="resume-list">
            <li>{t('센서 데이터 전처리, 비교 기준 설정, 평가 지표 관리 경험', 'Experience in sensor-data preprocessing, comparison-rule design, and metric management')}</li>
            <li>{t('Python 기반 실험 코드 작성과 Linux/Raspberry Pi 환경 실행 경험', 'Hands-on implementation in Python and execution in Linux/Raspberry Pi environments')}</li>
            <li>{t('수치만이 아니라 그래프와 필드 테스트를 함께 남겨 결과를 검증하는 방식', 'A validation style that combines metrics with charts and field tests rather than relying on numbers alone')}</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('Links', 'Links')}</h2>
          <ul className="resume-list">
            <li><strong>GitHub:</strong> {githubUrl}</li>
            <li><strong>Portfolio:</strong> {portfolioUrl}</li>
            <li><strong>Valve Report:</strong> {valveReportUrl}</li>
            <li><strong>LoRa Report:</strong> {loraReportUrl}</li>
            <li><strong>LoRa GitHub:</strong> {loraGithubUrl}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default NaverLabsResume;
