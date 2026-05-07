import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { trackEvent } from '../analytics';
import './Resume.css';

const githubUrl = 'https://github.com/gwon9906';
const portfolioUrl = 'https://gwon9906.github.io/#resume';
const valveReportUrl = 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf';
const loraReportUrl = 'https://gwon9906.github.io/files/lora-final-report.pdf';
const loraGithubUrl = 'https://github.com/gwon9906/Lightweight-MF-BAM';
const valveChartUrl = '/files/valve-forecast-chart.png';
const loraChartUrl = '/files/lora-success-chart.png';
const blogUrl = 'https://latetime.tistory.com/';

const Resume = () => {
  const { t } = useLanguage();

  const handlePrint = () => {
    trackEvent('click_resume_print');
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
            {t(
              '제조·센서 데이터 AI/SW 프로젝트 포트폴리오',
              'Manufacturing & Sensor Data AI/SW Project Portfolio'
            )}
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
          <h2 className="section-title">{t('포트폴리오 개요', 'Portfolio Overview')}</h2>
          <p className="section-content">
            {t(
              '제조·센서 데이터와 제약 환경에서의 실험 검증 경험을 보여줄 수 있는 프로젝트 2개를 중심으로 정리했습니다. 각 사례는 문제 정의, 접근, 검증 결과, 그리고 실제 직무와의 연결성을 짧고 명확하게 보여주는 방식으로 구성했습니다.',
              'This portfolio centers on two projects that demonstrate experimentation and validation with manufacturing/sensor data and constrained environments. Each case is organized to show the problem, approach, validation results, and why the work matters in practice.'
            )}
          </p>
          <ul className="resume-list compact-list">
            <li>{t('실제 산업용 밸브 데이터 기반 시계열 예측 경험', 'Time-series forecasting on real industrial valve data')}</li>
            <li>{t('NLOS 환경 LoRa 필드 테스트와 성능 비교 경험', 'LoRa field validation and performance comparison under NLOS conditions')}</li>
            <li>{t('문제 정의, 구현, 검증까지 직접 연결한 프로젝트 경험', 'Projects handled end-to-end from problem definition through implementation and validation')}</li>
          </ul>
          <div className="metric-chip-row">
            <span className="metric-chip">MAPE 0.1835</span>
            <span className="metric-chip">32B → 20B</span>
            <span className="metric-chip">29 → 33 / 100 tx</span>
            <span className="metric-chip">Python · Linux · Raspberry Pi</span>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('프로젝트 1 | 산업용 밸브 정상 유량 예측', 'Project 1 | Industrial Valve Normal-Flow Forecasting')}</h2>
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
                '데이터 분석, 전처리 기준 정리, Encoder-LSTM 설계, 실험 검증',
                'Data analysis, preprocessing-rule design, Encoder-LSTM design, experiment validation'
              )}
            </div>
          </div>

          <div className="subsection-title">{t('문제와 접근', 'Problem & Approach')}</div>
          <p className="project-content">
            {t(
              '정상 상태 밸브의 유량을 안정적으로 예측해 두어야 이후 고장 상태와의 차이를 기준선 형태로 비교할 수 있습니다. 실제 운전 데이터는 개도율 변화에 따른 불연속성, 제한된 측정 정밀도, 이상치가 함께 존재했기 때문에 무리한 정규화보다 이상치 기준 정리와 원본값 유지에 집중했습니다. 이후 기본 LSTM과 Encoder-LSTM을 비교하며, 이상치에 덜 민감한 Huber Loss를 적용해 예측 구조를 조정했습니다.',
              'A stable normal-flow baseline is needed before abnormal valve conditions can be compared against it. Because the real operating data contained discontinuities, limited measurement precision, and outliers, I focused on outlier rules and preserving original values rather than forcing normalization. I then compared a baseline LSTM with an Encoder-LSTM and used Huber Loss to make the final training setup less sensitive to outliers.'
            )}
          </p>

          <div className="subsection-title">{t('검증 결과', 'Validation Results')}</div>
          <ul className="project-list">
            <li>{t('실제 운용 밸브 데이터 사용', 'Used data collected from real operating valves')}</li>
            <li>{t('기본 LSTM 대비 Encoder-LSTM 구조 비교', 'Compared a baseline LSTM against an Encoder-LSTM')}</li>
            <li>Loss 4.0376e-05 / MAE 0.003941 / MAPE 0.183501</li>
          </ul>

          <figure className="project-figure">
            <img src={valveChartUrl} alt={t('유량 예측 결과 그래프', 'Valve forecasting result chart')} />
            <figcaption className="figure-caption">
              {t(
                '예측값과 실제값이 대부분 구간에서 안정적으로 일치하며, 오차가 큰 일부 지점을 제외하면 정상 상태 기준선으로 활용 가능한 수준의 추세 일치를 확인할 수 있습니다.',
                'Predicted and actual values align consistently across most regions, showing a stable enough trend to serve as a normal-state reference except for a few larger-error points.'
              )}
            </figcaption>
          </figure>

          <div className="subsection-title">{t('성과와 근거', 'Why It Matters & Evidence')}</div>
          <p className="project-content">
            {t(
                '이 프로젝트는 실제 설비 데이터에서 정상 상태의 기준선을 어떻게 만들고 검증했는지를 보여주는 사례입니다. 개도율, 입·출력 압력, 이상치처럼 예측 결과를 흔들 수 있는 요소를 먼저 정리한 뒤, 기본 LSTM과 Encoder-LSTM을 비교해 정상 유량 예측 오차를 낮췄습니다. 최종 결과는 Loss 4.0376e-05, MAE 0.003941, MAPE 0.183501로 정리했고, 예측값과 실제값의 비교 그래프를 함께 남겨 단순 수치가 아니라 추세 일치 여부까지 확인할 수 있도록 했습니다.',
                'This project shows how I built and validated a normal-state baseline from real equipment data. I first organized factors that could affect prediction quality, such as valve opening, inlet/outlet pressure, outliers, and limited measurement precision, then compared a baseline LSTM with an Encoder-LSTM to reduce normal-flow forecasting error. The final result was summarized as Loss 4.0376e-05, MAE 0.003941, and MAPE 0.183501, with prediction-vs-actual charts included to show not only the metric but also the trend alignment.'

            )}
          </p>
          <div className="project-content">
            <strong>{t('관련 자료', 'Related material')}:</strong> {valveReportUrl}
          </div>
          <div className="resume-link-row no-print">
            <a
              href={valveReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_resume_link', { link_label: 'valve_report', link_href: valveReportUrl })}
              className="resume-link-btn"
            >
              <FileText className="w-4 h-4" />
              {t('유량 예측 요약 보고서', 'Valve Forecasting Summary Report')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>

      <div className="resume-page">
        <section className="resume-section">
          <h2 className="section-title">{t('프로젝트 2 | LoRa 저신호 환경 통신 개선', 'Project 2 | LoRa Communication Improvement in Low-Quality Channels')}</h2>
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

          <div className="subsection-title">{t('문제와 접근', 'Problem & Approach')}</div>
          <p className="project-content">
            {t(
              'LoRa 환경에서는 payload가 커질수록 전송 시간이 길어지고, 충돌과 재전송으로 인해 성공률이 빠르게 떨어질 수 있습니다. 이를 확인하기 위해 GPS·IMU 센서 데이터를 수집하고, BAM 기반 손실 압축 구조로 payload를 줄이는 파이프라인을 구성했습니다. Raspberry Pi 기반 Linux 환경에서 동일 장비·동일 설정 조건으로 RAW 32B와 압축 payload를 반복 비교하고, 약 2.0 - 2.6 km NLOS 구간에서 100회 전송 실험을 수행했습니다.',
              'In LoRa communication, larger payloads increase airtime and can quickly reduce transmission success through collisions and retransmissions. To test this, I built a BAM-based lossy-compression pipeline on top of GPS and IMU sensor data. RAW 32B and compressed payloads were repeatedly compared under identical hardware and configuration settings on Raspberry Pi based Linux nodes, with 100-transmission trials conducted in roughly 2.0 - 2.6 km NLOS conditions.'
            )}
          </p>

          <div className="subsection-title">{t('검증 결과', 'Validation Results')}</div>
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
                '100회 반복 전송 기준으로 BAM 압축 방식이 RAW 전송 방식보다 누적 성공 패킷 수를 꾸준히 상회했습니다. 즉, payload를 줄인 접근이 실제 제약 환경에서 전송 성공률 개선으로 이어졌음을 보여줍니다.',
                'Across repeated 100-transmission trials, the BAM-compressed approach consistently stayed above the RAW baseline in cumulative successful packets, showing that reduced payload size translated into better success rates under real constraints.'
              )}
            </figcaption>
          </figure>

          <div className="subsection-title">{t('성과와 근거', 'Why It Matters & Evidence')}</div>
          {t(
            '이 프로젝트는 통신 품질이 불안정한 환경에서 payload 경량화가 실제 전송 성공률 개선으로 이어지는지 확인한 사례입니다. 단순히 압축 모델을 구현하는 데서 끝내지 않고, 동일 장비·동일 설정에서 RAW 32B payload와 BAM 압축 20B payload를 반복 비교했습니다. 대표 실험에서 100회 전송 기준 성공 패킷 수가 29건에서 33건으로 증가했고, 복원 오차도 MSE 0.003676 수준으로 유지되어 전송량 감소와 데이터 복원 품질을 함께 확인할 수 있었습니다.',
            'This project validates whether reducing payload size can improve real transmission success in unstable LoRa conditions. Rather than stopping at model implementation, I repeatedly compared RAW 32B payloads with BAM-compressed 20B payloads under the same hardware and configuration. In the representative trial, successful packets increased from 29 to 33 out of 100 transmissions, while reconstruction error remained at MSE 0.003676, confirming both transmission efficiency and data reconstruction quality.'
          )}
          <div className="project-content">
            <strong>{t('관련 자료', 'Related material')}:</strong><br />
            {loraReportUrl}
            <br />
            {loraGithubUrl}
          </div>
          <div className="resume-link-row no-print">
            <a
              href={loraReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_resume_link', { link_label: 'lora_report', link_href: loraReportUrl })}
              className="resume-link-btn"
            >
              <FileText className="w-4 h-4" />
              {t('LoRa 최종 보고서', 'LoRa Final Report')}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={loraGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_resume_link', { link_label: 'lora_github', link_href: loraGithubUrl })}
              className="resume-link-btn"
            >
              <FileText className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('프로젝트를 통해 보여주고 싶은 점', 'What These Projects Show')}</h2>
          <ul className="resume-list">
            <li>
              {t(
                '두 프로젝트는 도메인은 다르지만, 제가 문제를 다루는 방식이 일관되어 있습니다. 먼저 데이터가 수집된 조건과 제약을 확인하고, 비교 가능한 기준선을 만든 뒤, 성능 수치와 그래프로 결과를 검증했습니다. 유량 예측에서는 실제 산업 시계열 데이터의 전처리와 오차 해석을 다뤘고, LoRa 프로젝트에서는 제약 환경에서 직접 구현한 압축 구조를 필드 테스트로 확인했습니다. 그래서 이 포트폴리오는 특정 모델을 사용했다는 나열보다, 데이터를 해석하고 실험 조건을 맞춘 뒤 결과를 근거로 설명할 수 있습니다.',
                'Both projects demonstrate a consistent approach to problem-solving: first, I clarify the data conditions and constraints, then establish a fair baseline, and finally validate the results with performance metrics and graphs. The valve project involved preprocessing and error interpretation of real industrial time-series data, while the LoRa project involved implementing a compression scheme under constraint conditions and validating it through field tests. Thus, this portfolio showcases my ability to interpret data and explain results based on experimental conditions rather than simply listing models used.'
              )}
            </li>
            <li>
              {t(
                '유량 예측은 실제 산업 데이터를 다루는 전처리·모델링·오차 해석 능력을, LoRa 프로젝트는 제약 환경에서의 구현과 필드 테스트 역량을 보여줍니다.',
                'The valve project shows preprocessing, modeling, and error interpretation on industrial data, while the LoRa project shows implementation and field validation under constraints.'
              )}
            </li>
            <li>
              {t(
                '따라서 이 포트폴리오는 제조·센서 데이터 기반 AI/SW 직무에서 요구하는 문제 정의, 구현, 검증 역량을 프로젝트 사례 중심으로 보여주기 위한 자료입니다.',
                'Taken together, this portfolio is meant to show problem definition, implementation, and validation capabilities for manufacturing and sensor-data AI/SW roles through project cases.'
              )}
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('링크 및 추가 자료', 'Links & Additional Materials')}</h2>
          <ul className="resume-list">
            <li><strong>GitHub:</strong> {githubUrl}</li>
            <li><strong>Portfolio:</strong> {portfolioUrl}</li>
            <li><strong>Blog:</strong> {blogUrl}</li>
            <li><strong>LoRa GitHub:</strong> {loraGithubUrl}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
