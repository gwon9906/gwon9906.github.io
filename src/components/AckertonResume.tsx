import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import './Resume.css';

const githubUrl = 'https://github.com/gwon9906';
const portfolioUrl = 'https://gwon9906.github.io/#ackerton-portfolio';
const valveReportUrl = 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf';
const loraReportUrl = 'https://gwon9906.github.io/files/lora-final-report.pdf';
const loraGithubUrl = 'https://github.com/gwon9906/Lightweight-MF-BAM';

const AckertonResume = () => {
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
        <a href="#ackerton-portfolio" className="control-btn back-btn">
          <ExternalLink size={16} /> 포트폴리오
        </a>
        <button type="button" onClick={handlePrint} className="control-btn print-btn">
          <Download size={16} /> PDF 저장
        </button>
      </div>

      <article className="resume-page">
        <header className="resume-header">
          <h1 className="resume-name">이해권</h1>
          <p className="resume-title">AI 제조혁신 컨설턴트 인턴 지원</p>
        </header>

        <section className="resume-contact">
          <div className="contact-item">
            <strong>Email</strong> gwon99065@naver.com
          </div>
          <div className="contact-item">
            <strong>Phone</strong> 010-3414-9906
          </div>
          <div className="contact-item">
            <strong>GitHub</strong> {githubUrl}
          </div>
          <div className="contact-item">
            <strong>Portfolio</strong> {portfolioUrl}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">지원 방향</h2>
          <p className="section-content">
            제조·센서 데이터가 어떤 조건에서 만들어졌는지 확인하고, 실험 기준을 맞춰 결과를 검증해온 경험이 있습니다.
            산업용 밸브 유량 예측과 LoRa 필드 테스트를 수행하며, 모델 성능뿐 아니라 데이터의 배경과 현장 제약을 함께
            보아야 결과를 설명할 수 있다는 점을 배웠습니다.
          </p>
          <div className="metric-chip-row">
            <span className="metric-chip">제조 데이터 분석</span>
            <span className="metric-chip">시계열 예측</span>
            <span className="metric-chip">현장 검증</span>
            <span className="metric-chip">정량 지표 기반 판단</span>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">다룰 수 있는 영역</h2>
          <p className="tech-category">
            <strong>AI / Data</strong> Python, TensorFlow, PyTorch, Scikit-learn, LSTM, 회귀 모델링,
            시계열 전처리, 이상치 기준 정리
          </p>
          <p className="tech-category">
            <strong>System / Field</strong> Linux, Raspberry Pi, Git/GitHub, LoRa 송수신 테스트,
            센서 데이터 로깅, 실험 조건 관리
          </p>
          <p className="tech-category">
            <strong>문제 접근</strong> 제조 데이터 조건 해석, 복잡한 이슈 구조화, 동일 조건 비교,
            리서치, 현황 분석, 검증 근거 정리
          </p>
        </section>

        <section className="resume-section">
          <h2 className="section-title">학력 및 연구 활동</h2>
          <div className="project-meta">
            <p className="meta-item">
              <strong>동의대학교 컴퓨터공학 전공</strong>
            </p>
            <p className="meta-item">
              <strong>연구 활동</strong> Wireless AIoT System Lab 학부연구생
            </p>
            <p className="meta-item">
              <strong>수행 분야</strong> 산업용 데이터 분석, 시계열 예측, 저전력 통신 환경 데이터 경량화,
              Raspberry Pi 기반 필드 검증
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">주요 프로젝트</h2>

          <h3 className="subsection-title">1. 산업용 밸브 정상 유량 예측</h3>
          <div className="project-meta">
            <p className="meta-item">
              <strong>기간</strong> 2024.07 - 2024.12
            </p>
            <p className="meta-item">
              <strong>형태</strong> 개인 연구 / 학부연구생
            </p>
            <p className="meta-item">
              <strong>역할</strong> 데이터 조건 분석, 전처리 기준 정리, Encoder-LSTM 설계, 성능 검증
            </p>
          </div>
          <ul className="project-list compact-list">
            <li>개도율, 입력 압력 3개, 출력 압력 3개를 활용해 정상 상태 유량 예측 모델 개발</li>
            <li>시계열 특성, 개도율 0 구간의 불연속성, 측정값 유효 자릿수, 이상치 가능성을 고려해 전처리 기준 조정</li>
            <li>기본 LSTM의 한계를 확인한 뒤 Encoder 구조와 Huber Loss를 적용해 MAPE 0.18 수준 달성</li>
          </ul>
          <div className="metric-chip-row">
            <span className="metric-chip">Loss 4.0376e-05</span>
            <span className="metric-chip">MAE 0.003941</span>
            <span className="metric-chip">MAPE 0.183501</span>
          </div>

          <h3 className="subsection-title">2. LoRa 저전력 장거리 통신 개선</h3>
          <div className="project-meta">
            <p className="meta-item">
              <strong>기간</strong> 2025.03 - 2025.06
            </p>
            <p className="meta-item">
              <strong>형태</strong> 4인 팀 프로젝트
            </p>
            <p className="meta-item">
              <strong>역할</strong> BAM 기반 압축 구조 구현, 송수신 파이프라인 구성, Raspberry Pi 기반 현장 테스트
            </p>
          </div>
          <ul className="project-list compact-list">
            <li>GPS·IMU 센서 데이터를 12차원 벡터로 구성하고 BAM 기반 손실 압축 구조 구현</li>
            <li>팀원들과 실험 기준을 맞춰 RAW 32B payload와 압축 20B payload를 동일 조건으로 반복 비교</li>
            <li>100회 전송 기준 성공 패킷 수 29건에서 33건으로 개선, 복원 오차 MSE 0.003676 수준 유지</li>
          </ul>
          <div className="metric-chip-row">
            <span className="metric-chip">Payload 32B → 20B</span>
            <span className="metric-chip">29 → 33 / 100 tx</span>
            <span className="metric-chip">MSE 0.003676</span>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">프로젝트를 통해 확인한 점</h2>
          <p className="section-content">
            두 프로젝트에서 제가 반복해서 신경 쓴 부분은 모델 자체보다 결과를 비교할 수 있는 조건을 먼저 정리하는 일이었습니다.
            데이터가 어떤 상황에서 수집됐는지, 어떤 기준으로 개선 여부를 볼 수 있는지 확인한 뒤 정량 지표로 검증했습니다.
            이 과정에서 현장 데이터는 성능 수치만으로 판단하기 어렵고, 수집 조건과 운영 제약까지 함께 보아야 한다는 점을 배웠습니다.
          </p>
        </section>

        <section className="resume-section">
          <h2 className="section-title">관련 자료</h2>
          <div className="resume-link-row">
            <a href={portfolioUrl} className="resume-link-btn">
              <FileText size={14} /> Ackerton Portfolio
            </a>
            <a href={valveReportUrl} className="resume-link-btn">
              <ExternalLink size={14} /> 유량 예측 보고서
            </a>
            <a href={loraReportUrl} className="resume-link-btn">
              <ExternalLink size={14} /> LoRa 최종 보고서
            </a>
            <a href={loraGithubUrl} className="resume-link-btn">
              <ExternalLink size={14} /> LoRa GitHub
            </a>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AckertonResume;
