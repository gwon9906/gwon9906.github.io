import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import './Resume.css';

const Resume = () => {
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
            {t(
              '제조·센서 데이터 기반 AI/SW 엔지니어 | 제출용 요약',
              'AI/SW Engineer for Manufacturing & Sensor Data | Submission Summary'
            )}
          </div>
        </div>

        <div className="resume-contact">
          <div className="contact-item">
            <strong>Email:</strong> gwon99065@naver.com
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong> https://github.com/gwon9906
          </div>
          <div className="contact-item">
            <strong>Portfolio:</strong> https://gwon9906.github.io/#resume
          </div>
          <div className="contact-item">
            <strong>{t('휴대폰', 'Phone')}:</strong> 010-3414-9906
          </div>
        </div>

        <div className="resume-divider"></div>

        <section className="resume-section">
          <h2 className="section-title">{t('핵심 요약', 'Profile Summary')}</h2>
          <p className="section-content">
            {t(
              '산업용 밸브 시계열 예측과 LoRa 통신 개선 프로젝트를 수행하며, 제조·센서 데이터에서 문제를 정의하고 검증해온 신입 AI/SW 엔지니어입니다. 모델 성능만이 아니라 데이터 구조, 전처리 기준, 비교 조건, 현장 적용 가능성을 함께 확인하는 방식을 중요하게 생각합니다.',
              'Entry-level AI/SW engineer who has worked on industrial valve forecasting and LoRa communication improvement, focusing on how problems are defined and validated on manufacturing and sensor data. I value not only model scores but also data structure, preprocessing rules, comparison conditions, and practical applicability.'
            )}
          </p>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('직무 적합 포인트', 'Role-fit Highlights')}</h2>
          <ul className="resume-list">
            <li>
              {t(
                '실제 밸브 데이터 기반 시계열 예측 경험: 정상 유량 예측 모델의 최종 MAPE 0.1835',
                'Time-series forecasting on real valve data: final MAPE 0.1835 for normal-flow prediction'
              )}
            </li>
            <li>
              {t(
                '제약 환경 실험 경험: NLOS 환경에서 32B → 20B payload 비교, 100회 기준 성공 패킷 수 29 → 33',
                'Constrained-environment validation: compared 32B → 20B payloads in NLOS tests, improving successful packet count from 29 to 33 per 100 transmissions'
              )}
            </li>
            <li>
              {t(
                'Python · Linux · Raspberry Pi 기반 구현 및 로그 정리 경험',
                'Hands-on implementation and logging experience with Python, Linux, and Raspberry Pi'
              )}
            </li>
            <li>
              {t(
                '스마트제조, 생산기술, 설비·센서 데이터 기반 AI/SW 직무와 높은 관련성',
                'Strong fit for smart manufacturing, production engineering, and equipment/sensor-data AI/SW roles'
              )}
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('핵심 프로젝트 1', 'Selected Project 1')}</h2>
          <div className="project-meta">
            <div className="meta-item"><strong>{t('프로젝트', 'Project')}:</strong> {t('산업용 밸브 정상 유량 예측', 'Industrial Valve Normal-Flow Forecasting')}</div>
            <div className="meta-item"><strong>{t('구분', 'Type')}:</strong> {t('개인 연구', 'Individual project')}</div>
            <div className="meta-item"><strong>{t('내 역할', 'Role')}:</strong> {t('데이터 분석, 전처리 기준 정리, Encoder-LSTM 설계, 실험 검증', 'Data analysis, preprocessing-rule design, Encoder-LSTM design, experiment validation')}</div>
          </div>
          <p className="project-content">
            {t(
              '실제 사용 중인 밸브에서 수집된 개도율과 입·출력 압력 데이터를 활용해 정상 상태 유량 예측 모델을 개발했습니다. 측정 정밀도가 제한된 데이터를 무리하게 정규화하지 않고 이상치 처리 기준을 먼저 정리한 뒤, 기본 LSTM과 비교하며 Encoder-LSTM과 Huber Loss를 적용했습니다.',
              'Built a normal-state flow forecasting model using valve opening and inlet/outlet pressure data collected from real operating valves. Instead of over-normalizing limited-precision data, I first clarified outlier rules and then compared a baseline LSTM with an Encoder-LSTM using Huber Loss.'
            )}
          </p>
          <ul className="project-list">
            <li>Loss 4.0376e-05</li>
            <li>MAE 0.003941</li>
            <li>MAPE 0.183501</li>
          </ul>
          <div className="resume-link-row no-print">
            <a href="/files/valve-flow-report.pdf" target="_blank" rel="noopener noreferrer" className="resume-link-btn">
              <FileText className="w-4 h-4" />
              {t('유량 예측 보고서', 'Valve Forecasting Report')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('핵심 프로젝트 2', 'Selected Project 2')}</h2>
          <div className="project-meta">
            <div className="meta-item"><strong>{t('프로젝트', 'Project')}:</strong> {t('LoRa 저신호 환경 통신 개선', 'LoRa Communication Improvement in Low-Quality Channels')}</div>
            <div className="meta-item"><strong>{t('구분', 'Type')}:</strong> {t('4인 팀 프로젝트', 'Team project (4 members)')}</div>
            <div className="meta-item"><strong>{t('내 역할', 'Role')}:</strong> {t('BAM 기반 압축 구조 구현, 송수신 파이프라인 구성, 필드 테스트', 'BAM-based compression implementation, TX/RX pipeline setup, field testing')}</div>
          </div>
          <p className="project-content">
            {t(
              '저전력 장거리 통신인 LoRa 환경에서 payload 크기와 전송 성공률의 관계를 실험했습니다. Raspberry Pi 기반 Linux 환경에서 GPS·IMU 데이터를 수집하고, BAM 기반 압축 구조를 적용한 뒤 동일 장비·동일 설정 조건으로 RAW 32B와 압축 payload를 반복 비교했습니다.',
              'Investigated the relationship between payload size and transmission success in low-power long-range LoRa communication. On a Raspberry Pi Linux environment, I collected GPS/IMU data, applied a BAM-based compression structure, and repeatedly compared RAW 32B payloads against compressed payloads under the same device and configuration settings.'
            )}
          </p>
          <ul className="project-list">
            <li>{t('Payload 32B → 20B', 'Payload 32B → 20B')}</li>
            <li>{t('100회 전송 기준 성공 패킷 수 29 → 33', 'Successful packets per 100 transmissions: 29 → 33')}</li>
            <li>PDR 33%</li>
            <li>MSE 0.003676</li>
          </ul>
          <div className="resume-link-row no-print">
            <a href="/files/lora-final-report.pdf" target="_blank" rel="noopener noreferrer" className="resume-link-btn">
              <FileText className="w-4 h-4" />
              {t('LoRa 최종 보고서', 'LoRa Final Report')}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank" rel="noopener noreferrer" className="resume-link-btn">
              <FileText className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>

      <div className="resume-page">
        <section className="resume-section">
          <h2 className="section-title">{t('연구 경험', 'Research Experience')}</h2>
          <div className="research-item">
            <div className="research-header">
              <strong>{t('학부 연구생, Wireless AIoT System Lab', 'Undergraduate Researcher, Wireless AIoT System Lab')}</strong>
            </div>
            <div className="research-period">{t('2024.06 - 2026.02 | 동의대학교', 'Jun 2024 - Feb 2026 | Dong-eui University')}</div>
            <ul className="resume-list">
              <li>{t('제조 데이터 예측과 저전력 무선통신 개선 프로젝트 수행', 'Worked on manufacturing-data forecasting and low-power wireless communication projects')}</li>
              <li>{t('실험 기준선 재현, 실패 원인 정리, 결과 문서화까지 포함한 검증 중심 방식으로 연구 수행', 'Conducted research with a validation-first approach including baseline reproduction, failure analysis, and documentation')}</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('학력 및 자격', 'Education & Certification')}</h2>
          <div className="education-item">
            <div className="education-header">
              <strong>{t('동의대학교 컴퓨터공학과', 'Dong-eui University, B.S. in Computer Engineering')}</strong>
            </div>
            <ul className="resume-list">
              <li>{t('2026년 2월 졸업', 'Graduated in Feb 2026')}</li>
            </ul>
          </div>
          <div className="education-item">
            <div className="education-header">
              <strong>{t('정보처리기사', 'Engineer Information Processing')}</strong>
            </div>
            <ul className="resume-list">
              <li>2025.06.13</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('기술 스택', 'Technical Stack')}</h2>
          <div className="tech-category"><strong>Programming:</strong> Python</div>
          <div className="tech-category"><strong>Frameworks:</strong> TensorFlow/Keras, PyTorch, NumPy</div>
          <div className="tech-category"><strong>Data / Validation:</strong> Time-series preprocessing, Outlier handling, Experiment design, Metric analysis</div>
          <div className="tech-category"><strong>Systems:</strong> Linux, Git/GitHub, Raspberry Pi, CSV logging</div>
          <div className="tech-category"><strong>Domain:</strong> Industrial sensor data, LoRa, Signal processing, Forecasting</div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('메모', 'Notes')}</h2>
          <ul className="resume-list">
            <li>
              {t(
                  '웹 포트폴리오에는 완료된 프로젝트 중 공개 가능한 수치로 설명할 수 있는 사례를 중심으로 정리했습니다. 진행 중인 연구는 보조 자료로만 두었습니다.',
                  'This page emphasizes completed projects with shareable, defensible metrics. Ongoing work is included only as supporting material.'
              )}
            </li>
            <li>
              {t(
                  '공개 자료에 있는 수치만 사용해 내용을 정리했습니다.',
                  'The page is intentionally written using only metrics available in public or shareable materials.'
              )}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
