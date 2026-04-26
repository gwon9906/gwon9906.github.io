import {
  ArrowLeft,
  BarChart3,
  BriefcaseBusiness,
  Cpu,
  Download,
  ExternalLink,
  Factory,
  FileText,
  GraduationCap,
  Radio,
  Target,
} from 'lucide-react';
import './Portfolio.css';

const AckertonResume = () => {
  const handlePrint = () => {
    window.print();
  };

  const profilePanels = [
    ['지원 포지션', 'AI 제조혁신 컨설턴트 인턴'],
    ['핵심 방향', '제조 데이터 분석 · 문제 구조화 · AI 적용 가능성 검토'],
    ['대표 경험', '산업용 유량 예측 · LoRa 필드 검증'],
  ];

  const skillGroups = [
    {
      title: 'AI / Data',
      body: 'Python, TensorFlow, PyTorch, Scikit-learn, 시계열 전처리, 회귀 모델링, 이상치 기준 정리',
    },
    {
      title: 'Field / System',
      body: 'Linux, Raspberry Pi, Git/GitHub, LoRa 송수신 테스트, 센서 데이터 로깅, 실험 조건 관리',
    },
    {
      title: 'Consulting Fit',
      body: '제조 데이터 조건 해석, 정량 지표 기반 비교, 리서치, 현황 분석, 검증 근거 정리',
    },
  ];

  const experiences = [
    {
      icon: Factory,
      title: '산업용 밸브 정상 유량 예측',
      period: '2024.07 - 2024.12',
      role: '개인 연구 / 학부연구생',
      summary:
        '실제 밸브 운전 데이터에서 정상 유량을 예측하는 기준선 모델을 개발했습니다. 개도율과 압력 데이터의 시계열 특성, 불연속 구간, 측정값 유효 자릿수를 고려해 전처리와 학습 방식을 조정했습니다.',
      results: ['Encoder-LSTM + Huber Loss 적용', 'MAPE 0.18 수준', 'MAE 0.003941'],
    },
    {
      icon: Radio,
      title: 'LoRa 저전력 장거리 통신 개선',
      period: '2025.03 - 2025.06',
      role: '4인 팀 프로젝트 / 압축 구조 구현 및 필드 테스트',
      summary:
        '제약이 큰 통신 환경에서 payload 경량화가 실제 전송 성공률 개선으로 이어지는지 검증했습니다. Raspberry Pi 기반 장비에서 RAW payload와 압축 payload를 동일 조건으로 비교했습니다.',
      results: ['Payload 32B → 20B', '100회 전송 기준 성공 패킷 29건 → 33건', '복원 오차 MSE 0.003676'],
    },
  ];

  const workingStyle = [
    {
      icon: Target,
      title: '문제 조건을 먼저 확인',
      body: '모델이나 기법을 먼저 선택하기보다 데이터가 수집된 조건, 비교 기준, 현장 제약을 먼저 정리합니다.',
    },
    {
      icon: BarChart3,
      title: '정량 기준으로 검증',
      body: '성능 개선을 주장하기 전에 동일 조건 비교와 평가 지표를 통해 결과가 설명 가능한지 확인합니다.',
    },
    {
      icon: FileText,
      title: '판단 가능한 근거로 정리',
      body: '실험 결과를 단순 수치로 남기지 않고, 실무자가 참고할 수 있는 문제·접근·결과 형태로 정리하려고 합니다.',
    },
  ];

  return (
    <main className="portfolio-page">
      <div className="portfolio-controls no-print">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.location.hash = '';
          }}
          className="portfolio-control-btn portfolio-back-btn"
        >
          <ArrowLeft size={16} /> 홈으로
        </a>
        <a href="#ackerton-portfolio" className="portfolio-control-btn portfolio-back-btn">
          <ExternalLink size={16} /> 포트폴리오
        </a>
        <button type="button" onClick={handlePrint} className="portfolio-control-btn portfolio-print-btn">
          <Download size={16} /> PDF 저장
        </button>
      </div>

      <div className="portfolio-shell">
        <section className="portfolio-hero">
          <p className="portfolio-eyebrow">Resume · Ackerton Partners</p>
          <h1 className="portfolio-title">이해권</h1>
          <p className="portfolio-description">
            제조·센서 데이터의 조건을 해석하고, AI 적용 가능성을 정량 지표로 검증해온 지원자입니다.
            애커튼파트너스 AI 제조혁신 컨설턴트 인턴 포지션에 맞춰 제조 데이터 분석, 문제 구조화, 현장 적용
            가능성 검토 경험을 중심으로 정리했습니다.
          </p>

          <div className="portfolio-intro-grid">
            {profilePanels.map(([label, value]) => (
              <div className="portfolio-intro-panel" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="portfolio-badge-row">
            <span className="portfolio-badge">Python</span>
            <span className="portfolio-badge">TensorFlow / PyTorch</span>
            <span className="portfolio-badge">시계열 데이터</span>
            <span className="portfolio-badge">제조·센서 데이터</span>
            <span className="portfolio-badge">Linux / Raspberry Pi</span>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">Profile</p>
            <h2>지원 직무와 맞닿는 역량</h2>
            <p>
              이력서는 기술 스택 나열보다 애커튼파트너스가 요구하는 제조 데이터 분석, 복잡한 이슈 구조화,
              정량 근거 기반 판단에 연결되는 경험 위주로 구성했습니다.
            </p>
          </div>

          <div className="portfolio-body-grid">
            <div className="portfolio-body-block">
              <p className="portfolio-block-label">Summary</p>
              <p>
                학부연구생으로 실제 산업용 밸브 데이터와 LoRa 통신 환경을 다루며, 데이터 조건을 먼저 해석하고
                실험 기준을 맞춰 결과를 검증하는 방식으로 프로젝트를 수행했습니다. AI 모델 구현 자체보다 현장
                조건에서 결과가 의미를 가지는지 확인하는 과정에 강점이 있습니다.
              </p>
            </div>
            <div className="portfolio-body-block">
              <p className="portfolio-block-label">Objective</p>
              <p>
                제조 현장의 데이터를 바탕으로 개선 기회를 찾고, AI로 해결 가능한 과제인지 판단하며, 실행 가능한
                개선안으로 구체화하는 과정을 배우고 기여하고자 합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">Education</p>
            <h2>학력 및 연구 활동</h2>
          </div>
          <div className="portfolio-project-card">
            <div className="portfolio-project-head">
              <span className="portfolio-project-icon">
                <GraduationCap size={22} />
              </span>
              <div className="portfolio-project-heading">
                <p className="portfolio-project-order">Dong-Eui University</p>
                <h3>동의대학교 컴퓨터공학 전공</h3>
                <p className="portfolio-project-subtitle">
                  Wireless AIoT System Lab 학부연구생으로 산업용 데이터 분석, 시계열 예측, 저전력 통신 환경에서의
                  데이터 경량화 및 필드 검증 프로젝트를 수행했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">Experience</p>
            <h2>주요 프로젝트 경험</h2>
          </div>
          <div className="portfolio-project-list">
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <article className="portfolio-project-card" key={experience.title}>
                  <div className="portfolio-project-head">
                    <span className="portfolio-project-icon">
                      <Icon size={22} />
                    </span>
                    <div className="portfolio-project-heading">
                      <p className="portfolio-project-order">Project</p>
                      <h3>{experience.title}</h3>
                      <p className="portfolio-project-subtitle">{experience.summary}</p>
                    </div>
                  </div>
                  <div className="portfolio-meta-bar">
                    <div className="portfolio-meta-line">
                      <span>기간</span>
                      <strong>{experience.period}</strong>
                    </div>
                    <div className="portfolio-meta-line">
                      <span>역할</span>
                      <strong>{experience.role}</strong>
                    </div>
                    <div className="portfolio-meta-line">
                      <span>성과</span>
                      <strong>{experience.results.join(' · ')}</strong>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="portfolio-footer-grid">
          <div className="portfolio-footer-card">
            <p className="portfolio-eyebrow">Skills</p>
            <h2>기술 및 분석 역량</h2>
            {skillGroups.map((group) => (
              <div className="portfolio-info-group" key={group.title}>
                <p className="portfolio-block-label">{group.title}</p>
                <p>{group.body}</p>
              </div>
            ))}
          </div>

          <div className="portfolio-footer-card">
            <p className="portfolio-eyebrow">Working Style</p>
            <h2>일하는 방식</h2>
            <div className="portfolio-strength-list">
              {workingStyle.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="portfolio-strength-item" key={item.title}>
                    <span className="portfolio-strength-icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="portfolio-footer-card portfolio-section">
          <p className="portfolio-eyebrow">Contact</p>
          <h2>연락처</h2>
          <div className="portfolio-contact-lines">
            <p>
              <BriefcaseBusiness size={16} /> Email: gwon99065@naver.com
            </p>
            <p>
              <Cpu size={16} /> GitHub: https://github.com/gwon9906
            </p>
            <p>
              <ExternalLink size={16} /> Portfolio: https://gwon9906.github.io/#ackerton-portfolio
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AckertonResume;
