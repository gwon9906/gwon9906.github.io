import { ArrowLeft, Download } from 'lucide-react';
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
              '프로젝트 포트폴리오 | Manufacturing & Sensor Data AI/SW',
              'Project Portfolio | Manufacturing & Sensor Data AI/SW'
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
          <h2 className="section-title">{t('포트폴리오 개요', 'Portfolio Overview')}</h2>
          <p className="section-content">
            {t(
              '제조·센서 데이터와 제약 환경에서의 검증 경험을 보여줄 수 있는 대표 프로젝트 2개를 중심으로 정리했습니다. 이 문서는 이력서 요약이 아니라, 문제 정의·접근 방식·검증 결과를 빠르게 파악할 수 있도록 구성한 작업 사례집입니다.',
              'This document highlights two representative projects around manufacturing/sensor data and constrained-environment validation. Rather than acting as a résumé summary, it is structured as a compact project portfolio so the problem, approach, and validation results can be grasped quickly.'
            )}
          </p>
          <ul className="resume-list">
            <li>{t('산업용 밸브 시계열 예측: 최종 MAPE 0.1835', 'Industrial valve time-series forecasting: final MAPE 0.1835')}</li>
            <li>{t('LoRa 필드 테스트: 32B → 20B payload, 100회 기준 성공 패킷 수 29 → 33', 'LoRa field validation: 32B → 20B payload, successful packets improved from 29 to 33 per 100 transmissions')}</li>
            <li>{t('Python · Linux · Raspberry Pi 기반 구현 및 검증 경험', 'Hands-on implementation and validation using Python, Linux, and Raspberry Pi')}</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('대표 프로젝트 1', 'Selected Project 1')}</h2>
          <div className="project-meta">
            <div className="meta-item"><strong>{t('프로젝트', 'Project')}:</strong> {t('산업용 밸브 정상 유량 예측', 'Industrial Valve Normal-Flow Forecasting')}</div>
            <div className="meta-item"><strong>{t('기간', 'Period')}:</strong> 2024.07 - 2024.12</div>
            <div className="meta-item"><strong>{t('형태', 'Type')}:</strong> {t('개인 연구', 'Individual project')}</div>
            <div className="meta-item"><strong>{t('내 역할', 'My Role')}:</strong> {t('데이터 분석, 전처리 기준 정리, Encoder-LSTM 설계, 실험 검증', 'Data analysis, preprocessing rules, Encoder-LSTM design, experiment validation')}</div>
          </div>

          <p className="subsection-title">{t('문제', 'Problem')}</p>
          <p className="project-content">
            {t(
              '밸브 고장 진단을 위해서는 정상 상태 유량을 안정적으로 예측할 수 있는 기준선이 먼저 필요했습니다. 하지만 실제 운전 데이터에는 개도율 변화에 따른 불연속성, 제한된 측정 정밀도, 이상치가 함께 존재해 단순 모델로는 결과 해석과 일반화가 어려울 수 있었습니다.',
              'A stable baseline for normal valve flow was needed before abnormal conditions could be diagnosed. The real operating data, however, included discontinuities from valve-opening changes, limited measurement precision, and outliers, making both interpretation and generalization difficult with a simple model.'
            )}
          </p>

          <p className="subsection-title">{t('접근', 'Approach')}</p>
          <ul className="project-list">
            <li>{t('개도율과 입력 압력 3개·출력 압력 3개를 입력으로 사용하고, 실제 측정 유량을 예측 대상으로 설정했습니다.', 'Used valve opening plus three inlet and three outlet pressures as inputs, with measured flow as the prediction target.')}</li>
            <li>{t('측정 정밀도가 높지 않다고 판단해 정규화보다 이상치 처리와 원본값 유지에 집중했습니다.', 'Because the measurement precision was limited, I focused on outlier handling and preserving the original values rather than forcing normalization.')}</li>
            <li>{t('기본 LSTM과 비교하면서 Encoder-LSTM 구조와 Huber Loss를 적용해 이상치에 덜 민감한 학습 구조를 설계했습니다.', 'Compared a baseline LSTM against an Encoder-LSTM with Huber Loss to make training less sensitive to outliers.')}</li>
          </ul>

          <p className="subsection-title">{t('검증 결과', 'Results')}</p>
          <ul className="project-list">
            <li>Loss 4.0376e-05</li>
            <li>MAE 0.003941</li>
            <li>MAPE 0.183501</li>
          </ul>

          <p className="subsection-title">{t('의미', 'Why it matters')}</p>
          <p className="project-content">
            {t(
              '이 프로젝트는 성능 수치 자체보다, 실제 산업 데이터에서 어떤 전처리 기준과 비교 방식이 설득력 있는지를 정리했다는 점에 의미가 있습니다. 제조·설비 데이터 기반 AI/SW 직무에서 요구하는 데이터 이해와 검증 중심 접근을 보여줄 수 있는 사례입니다.',
              'Beyond the final metric itself, this project is meaningful because it clarifies which preprocessing and comparison rules are convincing on real industrial data. It demonstrates a validation-first workflow that is directly relevant to manufacturing and equipment-data AI/SW roles.'
            )}
          </p>

          <p className="subsection-title">{t('증빙 자료', 'Evidence')}</p>
          <ul className="resume-list">
            <li>https://gwon9906.github.io/files/valve-flow-report-summary.pdf</li>
            <li>https://gwon9906.github.io/files/valve-flow-report.pdf</li>
          </ul>
        </section>
      </div>

      <div className="resume-page">
        <section className="resume-section">
          <h2 className="section-title">{t('대표 프로젝트 2', 'Selected Project 2')}</h2>
          <div className="project-meta">
            <div className="meta-item"><strong>{t('프로젝트', 'Project')}:</strong> {t('LoRa 저신호 환경 통신 개선', 'LoRa Communication Improvement in Low-Quality Channels')}</div>
            <div className="meta-item"><strong>{t('기간', 'Period')}:</strong> 2025.03 - 2025.06</div>
            <div className="meta-item"><strong>{t('형태', 'Type')}:</strong> {t('4인 팀 프로젝트', 'Team project (4 members)')}</div>
            <div className="meta-item"><strong>{t('내 역할', 'My Role')}:</strong> {t('BAM 기반 압축 구조 구현, 송수신 파이프라인 구성, 필드 테스트', 'BAM-based compression implementation, TX/RX pipeline setup, field testing')}</div>
          </div>

          <p className="subsection-title">{t('문제', 'Problem')}</p>
          <p className="project-content">
            {t(
              'LoRa 환경에서는 payload가 커질수록 airtime이 늘어나고 충돌과 재전송으로 인해 PDR이 빠르게 떨어질 수 있습니다. 그래서 통신 파라미터만 조정하는 대신, 전송 데이터 자체를 줄였을 때 실환경에서 성공률이 얼마나 개선되는지 확인하는 것이 핵심이었습니다.',
              'In LoRa communication, larger payloads increase airtime and can sharply reduce PDR through collisions and retransmissions. The core question was whether shrinking the transmitted data itself could improve success rates in real conditions, not just through parameter tuning.'
            )}
          </p>

          <p className="subsection-title">{t('접근', 'Approach')}</p>
          <ul className="project-list">
            <li>{t('GPS·IMU 센서 데이터를 수집하고 BAM 기반 손실 압축 구조로 payload를 줄이는 파이프라인을 구성했습니다.', 'Collected GPS and IMU sensor data and built a BAM-based lossy-compression pipeline to reduce payload size.')}</li>
            <li>{t('Raspberry Pi 기반 Linux 환경에서 동일 장비·동일 설정 조건으로 RAW 32B와 압축 payload를 반복 비교했습니다.', 'Repeatedly compared RAW 32B and compressed payloads under identical hardware and configuration on Raspberry Pi based Linux nodes.')}</li>
            <li>{t('약 2.0~2.6 km NLOS 구간에서 100회 반복 전송하며 성공 패킷 수와 복원 오차를 함께 확인했습니다.', 'Measured both successful packets and restoration error across repeated 100-transmission trials in roughly 2.0–2.6 km NLOS conditions.')}</li>
          </ul>

          <p className="subsection-title">{t('검증 결과', 'Results')}</p>
          <ul className="project-list">
            <li>{t('Payload 32B → 20B', 'Payload 32B → 20B')}</li>
            <li>{t('100회 전송 기준 성공 패킷 수 29 → 33', 'Successful packets per 100 transmissions: 29 → 33')}</li>
            <li>PDR 33%</li>
            <li>MSE 0.003676</li>
          </ul>

          <p className="subsection-title">{t('의미', 'Why it matters')}</p>
          <p className="project-content">
            {t(
              '이 프로젝트는 모델 구현보다, 제약이 큰 환경에서 전송 효율과 데이터 품질 사이의 균형을 어떻게 실험적으로 검증했는지를 보여준다는 점에 의미가 있습니다. 제조 현장의 설비·센서 데이터 처리와도 맞닿아 있는 강점입니다.',
              'This project matters less for the model itself than for how it experimentally validated the trade-off between transmission efficiency and data quality under tight constraints. That mindset is also relevant to equipment and sensor-data handling in manufacturing.'
            )}
          </p>

          <p className="subsection-title">{t('증빙 자료', 'Evidence')}</p>
          <ul className="resume-list">
            <li>https://gwon9906.github.io/files/lora-final-report.pdf</li>
            <li>https://github.com/gwon9906/Lightweight-MF-BAM</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('문제 해결 방식', 'Working Style')}</h2>
          <ul className="resume-list">
            <li>
              {t(
                '모델을 먼저 고르기보다 데이터 구조, 비교 기준, 누수 가능성, 현장 제약을 먼저 정리합니다.',
                'I begin by clarifying data structure, comparison rules, leakage risks, and field constraints before selecting a model.'
              )}
            </li>
            <li>
              {t(
                'Python·Linux·Raspberry Pi 환경에서 실험과 로그 정리까지 직접 연결해 결과를 확인해왔습니다.',
                'I connect modeling with implementation and logging in Python, Linux, and Raspberry Pi environments.'
              )}
            </li>
            <li>
              {t(
                '공개 가능한 자료에서 방어 가능한 수치만 사용하고, 장문 보고서는 보조 증빙으로만 두었습니다.',
                'I use only defensible metrics from shareable materials and keep long reports strictly as supporting evidence.'
              )}
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="section-title">{t('기술 키워드', 'Technical Keywords')}</h2>
          <div className="tech-category"><strong>Programming:</strong> Python</div>
          <div className="tech-category"><strong>Frameworks:</strong> TensorFlow/Keras, PyTorch, NumPy</div>
          <div className="tech-category"><strong>Data / Validation:</strong> Time-series preprocessing, Outlier handling, Experiment design, Metric analysis</div>
          <div className="tech-category"><strong>Systems:</strong> Linux, Git/GitHub, Raspberry Pi, CSV logging</div>
          <div className="tech-category"><strong>Domain:</strong> Industrial sensor data, LoRa, Signal processing, Forecasting</div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
