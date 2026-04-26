import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import './Resume.css';

const resumeUrl = 'https://gwon9906.github.io/#ackerton-resume';
const valveReportUrl = 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf';
const valveFullReportUrl = 'https://gwon9906.github.io/files/valve-flow-report.pdf';
const loraReportUrl = 'https://gwon9906.github.io/files/lora-final-report.pdf';
const loraGithubUrl = 'https://github.com/gwon9906/Lightweight-MF-BAM';
const valveChartUrl = '/files/valve-forecast-chart.png';
const loraChartUrl = '/files/lora-success-chart.png';

const AckertonPortfolio = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      <div className="resume-controls no-print">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.location.hash = '';
          }}
          className="control-btn back-btn"
        >
          <ArrowLeft size={16} /> 홈으로
        </a>
        <a href="#ackerton-resume" className="control-btn back-btn">
          <ExternalLink size={16} /> 이력서
        </a>
        <button type="button" onClick={handlePrint} className="control-btn print-btn">
          <Download size={16} /> PDF 저장
        </button>
      </div>

      <article className="resume-page">
        <header className="resume-header">
          <h1 className="resume-name">AI 제조혁신 포트폴리오</h1>
          <p className="resume-title">이해권 · 제조·센서 데이터 분석 및 현장 검증 프로젝트</p>
        </header>

        <section className="resume-contact">
          <div className="contact-item">
            <strong>지원 포지션</strong> AI 제조혁신 컨설턴트 인턴
          </div>
          <div className="contact-item">
            <strong>Portfolio Focus</strong> 문제 이해 · 구현 · 정량 검증
          </div>
          <div className="contact-item">
            <strong>Resume</strong> {resumeUrl}
          </div>
          <div className="contact-item">
            <strong>GitHub</strong> https://github.com/gwon9906
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">포트폴리오 개요</h2>
          <p className="section-content">
            이 포트폴리오는 제조·센서 데이터와 제약 환경에서의 실험 검증 경험을 정리한 자료입니다.
            각 프로젝트는 어떤 문제를 다뤘는지, 어떻게 접근했는지, 어떤 기준으로 결과를 확인했는지를 중심으로 구성했습니다.
          </p>
          <div className="metric-chip-row">
            <span className="metric-chip">산업용 밸브 유량 예측</span>
            <span className="metric-chip">LoRa 필드 테스트</span>
            <span className="metric-chip">MAPE 0.183501</span>
            <span className="metric-chip">Payload 32B → 20B</span>
            <span className="metric-chip">29 → 33 / 100 tx</span>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Project 1 | 산업용 밸브 정상 유량 예측</h2>
          <div className="project-meta">
            <p className="meta-item">
              <strong>기간</strong> 2024.07 - 2024.12
            </p>
            <p className="meta-item">
              <strong>형태</strong> 개인 연구 / 학부연구생
            </p>
            <p className="meta-item">
              <strong>내 역할</strong> 데이터 분석, 전처리 기준 정리, Encoder-LSTM 설계, 실험 검증
            </p>
          </div>

          <h3 className="subsection-title">문제와 접근</h3>
          <p className="project-content">
            정상 상태 밸브의 유량을 안정적으로 예측해야 고장 상태와의 차이를 기준선 형태로 비교할 수
            있습니다. 실제 운전 데이터에는 개도율 변화에 따른 불연속성, 제한된 측정 정밀도, 이상치가 함께
            존재했기 때문에 단순 모델 적용만으로는 결과를 설명하기 어려웠습니다.
          </p>
          <ul className="project-list">
            <li>개도율, 입력 압력 3개, 출력 압력 3개를 입력 변수로 사용하고 실제 측정 유량을 예측 대상으로 설정</li>
            <li>측정값의 유효 자릿수와 이상치 가능성을 고려해 무리한 정규화보다 원본값 유지와 이상치 기준 정리에 집중</li>
            <li>기본 LSTM의 한계를 확인한 뒤 Encoder 구조와 Huber Loss를 적용해 이상치에 덜 민감한 학습 구조로 조정</li>
          </ul>

          <h3 className="subsection-title">검증 결과</h3>
          <div className="metric-chip-row">
            <span className="metric-chip">Loss 4.0376e-05</span>
            <span className="metric-chip">MAE 0.003941</span>
            <span className="metric-chip">MAPE 0.183501</span>
          </div>
          <p className="project-content">
            예측값과 실제값이 대부분 구간에서 안정적으로 일치했고, 정상 상태 기준선으로 활용 가능한 수준의
            추세 일치를 확인했습니다. 이 프로젝트를 통해 실제 설비 데이터에서는 모델 구조뿐 아니라 데이터 조건과
            검증 기준을 함께 정리해야 결과를 설명할 수 있다는 점을 배웠습니다.
          </p>

          <figure className="project-figure">
            <img src={valveChartUrl} alt="밸브 유량 예측 결과 그래프" />
            <figcaption className="figure-caption">
              예측 유량과 실제 유량의 비교 결과입니다. 일부 오차 구간을 제외하면 정상 상태 기준선으로 활용할 수
              있는 추세 일치를 확인할 수 있습니다.
            </figcaption>
          </figure>

          <div className="resume-link-row">
            <a href={valveReportUrl} className="resume-link-btn">
              <FileText size={14} /> 유량 예측 요약 보고서
            </a>
            <a href={valveFullReportUrl} className="resume-link-btn">
              <ExternalLink size={14} /> 유량 예측 원본 보고서
            </a>
          </div>
        </section>
      </article>

      <article className="resume-page">
        <header className="resume-header">
          <h1 className="resume-name">Project 2</h1>
          <p className="resume-title">LoRa 저신호 환경 통신 개선</p>
        </header>

        <section className="resume-section">
          <h2 className="section-title">Project 2 | LoRa 저전력 장거리 통신 개선</h2>
          <div className="project-meta">
            <p className="meta-item">
              <strong>기간</strong> 2025.03 - 2025.06
            </p>
            <p className="meta-item">
              <strong>형태</strong> 4인 팀 프로젝트
            </p>
            <p className="meta-item">
              <strong>내 역할</strong> BAM 기반 압축 구조 구현, 송수신 파이프라인 구성, Raspberry Pi 기반 필드 테스트
            </p>
          </div>

          <h3 className="subsection-title">문제와 접근</h3>
          <p className="project-content">
            LoRa 통신에서는 payload가 커질수록 전송 시간이 길어지고, 충돌과 재전송으로 인해 성공률이 떨어질 수
            있습니다. 따라서 통신 설정만 바꾸는 것이 아니라 전송 데이터 자체를 줄였을 때 실제 환경에서 성공률이
            개선되는지 확인할 필요가 있었습니다.
          </p>
          <ul className="project-list">
            <li>GPS·IMU 센서 데이터를 12차원 벡터로 구성하고 BAM 기반 손실 압축 구조로 payload를 줄이는 파이프라인 설계</li>
            <li>Raspberry Pi 기반 Linux 환경에서 LoRa 송수신 장비 구성 및 RAW 32B와 압축 20B payload 비교</li>
            <li>약 2.0 - 2.6 km NLOS 조건에서 반복 전송하며 성공 패킷 수와 복원 오차를 함께 확인</li>
          </ul>

          <h3 className="subsection-title">검증 결과</h3>
          <div className="metric-chip-row">
            <span className="metric-chip">Payload 32B → 20B</span>
            <span className="metric-chip">100회 전송 기준 29 → 33</span>
            <span className="metric-chip">PDR 33%</span>
            <span className="metric-chip">MSE 0.003676</span>
          </div>
          <p className="project-content">
            동일 장비·동일 설정 조건에서 BAM 압축 방식이 RAW 전송 방식보다 누적 성공 패킷 수를 꾸준히
            상회했습니다. 즉, payload를 줄인 접근이 실제 제약 환경에서 전송 성공률 개선으로 이어졌음을
            확인했습니다.
          </p>

          <figure className="project-figure">
            <img src={loraChartUrl} alt="LoRa RAW와 BAM 누적 성공 패킷 비교 그래프" />
            <figcaption className="figure-caption">
              RAW 전송 방식과 BAM 압축 전송 방식의 누적 성공 패킷 수 비교입니다. 동일 조건에서 payload 경량화가
              실제 전송 결과에 어떤 차이를 만드는지 확인하기 위해 사용했습니다.
            </figcaption>
          </figure>
        </section>

        <section className="resume-section">
          <h2 className="section-title">프로젝트를 통해 보여주고 싶은 점</h2>
          <p className="section-content">
            두 프로젝트는 다루는 대상은 다르지만 접근 방식은 비슷했습니다. 먼저 데이터가 만들어진 조건과 제약을 확인하고,
            비교 가능한 기준을 만든 뒤, 성능 수치와 실험 결과로 개선 여부를 확인했습니다. 유량 예측 프로젝트에서는
            산업 시계열 데이터의 전처리와 오차 해석을 경험했고, LoRa 프로젝트에서는 제한된 환경에서 구현 결과를
            실제 장비로 검증해보았습니다.
          </p>
          <p className="section-content">
            그래서 이 포트폴리오는 특정 모델을 사용했다는 나열보다, 데이터를 어떤 기준으로 보고 결과를 어떻게 확인했는지를
            보여주는 데 초점을 두었습니다. 앞으로도 AI를 적용할 때 성능 수치만 보지 않고, 데이터의 조건과 실제 적용 가능성을
            함께 확인하는 방식으로 문제를 다루고 싶습니다.
          </p>
        </section>

        <section className="resume-section">
          <h2 className="section-title">관련 자료</h2>
          <div className="resume-link-row">
            <a href={loraReportUrl} className="resume-link-btn">
              <FileText size={14} /> LoRa 최종 보고서
            </a>
            <a href={loraGithubUrl} className="resume-link-btn">
              <ExternalLink size={14} /> LoRa GitHub
            </a>
            <a href={resumeUrl} className="resume-link-btn">
              <ExternalLink size={14} /> Ackerton Resume
            </a>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AckertonPortfolio;
