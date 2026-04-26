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
import './Portfolio.css';

const AckertonPortfolio = () => {
  const handlePrint = () => {
    window.print();
  };

  const selectedProjects = [
    {
      id: 'valve-flow',
      icon: Factory,
      eyebrow: 'Case 01',
      title: '산업용 밸브 정상 유량 예측',
      subtitle: '실제 밸브 운전 데이터에서 정상 상태 기준선을 만들고, 향후 이상 징후 비교의 기반을 설계한 프로젝트',
      meta: [
        ['기간', '2024.07 - 2024.12'],
        ['형태', '개인 연구 / 학부연구생'],
        ['핵심 역할', '데이터 조건 분석 · 전처리 기준 정리 · Encoder-LSTM 설계 · 성능 검증'],
      ],
      problem:
        '정상 상태 밸브의 유량을 안정적으로 예측해야 고장 상태와의 차이를 비교할 수 있습니다. 하지만 실제 데이터에는 개도율 변화에 따른 불연속 구간, 제한된 측정 정밀도, 이상치가 함께 존재해 단순한 모델 적용만으로는 결과를 설명하기 어려웠습니다.',
      approach: [
        '개도율, 입력 압력 3개, 출력 압력 3개를 입력 변수로 사용하고 실제 측정 유량을 예측 대상으로 설정했습니다.',
        '측정값의 유효 자릿수와 이상치 가능성을 고려해 무리한 정규화보다 원본값 유지와 이상치 기준 정리에 집중했습니다.',
        '기본 LSTM의 한계를 확인한 뒤 Encoder 구조와 Huber Loss를 적용해 이상치에 덜 민감한 예측 구조를 설계했습니다.',
      ],
      results: ['Loss 4.0376e-05', 'MAE 0.003941', 'MAPE 0.183501'],
      meaning:
        '이 프로젝트는 제조 데이터에서 모델 성능보다 데이터 조건 해석과 검증 기준 설정이 중요하다는 점을 보여줍니다. AI 제조혁신 컨설팅에서 필요한 생산 현장 데이터 이해, 문제 구조화, 정량 지표 기반 판단과 연결됩니다.',
      evidenceNote:
        '원본 데이터와 전체 코드는 공개할 수 없어, 공개 가능한 범위의 프로젝트 요약 보고서를 증빙으로 연결했습니다.',
      links: [
        {
          label: '유량 예측 요약 보고서',
          url: 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf',
          kind: 'report',
        },
        {
          label: '유량 예측 원본 보고서',
          url: 'https://gwon9906.github.io/files/valve-flow-report.pdf',
          kind: 'report',
        },
      ],
    },
    {
      id: 'lora',
      icon: Radio,
      eyebrow: 'Case 02',
      title: 'LoRa 저신호 환경 통신 개선',
      subtitle: '제약이 큰 저전력 장거리 통신 환경에서 payload 경량화와 전송 성공률의 관계를 필드 테스트로 검증한 프로젝트',
      meta: [
        ['기간', '2025.03 - 2025.06'],
        ['형태', '4인 팀 프로젝트'],
        ['핵심 역할', 'BAM 기반 압축 구조 구현 · 송수신 파이프라인 구성 · 현장 테스트'],
      ],
      problem:
        'LoRa 통신에서는 payload가 커질수록 전송 시간이 길어지고, 간섭과 재전송으로 인해 PDR이 떨어질 수 있습니다. 따라서 통신 설정만 바꾸는 것이 아니라 전송 데이터 자체를 줄였을 때 실제 환경에서 성공률이 개선되는지 확인할 필요가 있었습니다.',
      approach: [
        'GPS·IMU 센서 데이터를 12차원 벡터로 구성하고, BAM 기반 손실 압축 구조로 payload를 줄이는 파이프라인을 설계했습니다.',
        'Raspberry Pi 기반 Linux 환경에서 LoRa 송수신 장비를 구성하고, RAW 32B payload와 압축 20B payload를 동일 조건으로 비교했습니다.',
        '약 2.0~2.6 km NLOS 조건에서 반복 전송하며 성공 패킷 수와 복원 오차를 함께 확인했습니다.',
      ],
      results: ['Payload 32B → 20B', '100회 전송 기준 성공 패킷 수 29 → 33', 'PDR 33%', 'MSE 0.003676'],
      meaning:
        '이 프로젝트는 모델 구현 자체보다 현장 조건에서 기술이 실제로 의미 있는 개선을 만드는지 검증한 사례입니다. 제조 현장의 설비·센서 데이터 처리, 제한된 환경에서의 AI 적용 가능성 검토와 닿아 있습니다.',
      evidenceNote:
        '최종 보고서와 GitHub 저장소를 함께 남겨 구현 방식과 검증 결과를 확인할 수 있도록 했습니다.',
      links: [
        {
          label: 'LoRa 최종 보고서',
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
      title: '문제 정의와 전처리 기준 정리',
      body: '모델을 먼저 고르기보다 데이터 구조, 비교 기준, 누수 가능성, 현장 제약을 먼저 정리합니다.',
    },
    {
      icon: Cpu,
      title: '구현과 실험을 연결하는 접근',
      body: 'Python, Linux, Raspberry Pi 환경에서 모델 구현과 로그 확인, 필드 테스트를 연결해 결과를 검증했습니다.',
    },
    {
      icon: BarChart3,
      title: '정량 지표 기반 설명',
      body: '공개 가능한 자료에서 확인되는 수치만 사용하고, 결과를 문제·접근·성과·의미로 정리합니다.',
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
        <a href="#ackerton-resume" className="portfolio-control-btn portfolio-back-btn">
          <ExternalLink size={16} /> 이력서
        </a>
        <button type="button" onClick={handlePrint} className="portfolio-control-btn portfolio-print-btn">
          <Download size={16} /> PDF 저장
        </button>
      </div>

      <div className="portfolio-shell">
        <section className="portfolio-hero">
          <p className="portfolio-eyebrow">Portfolio · Ackerton Partners</p>
          <h1 className="portfolio-title">AI 제조혁신 포트폴리오</h1>
          <p className="portfolio-description">
            제조·센서 데이터와 제약 환경에서의 실험 검증 경험을 중심으로 대표 프로젝트 2개를 분리해 정리했습니다.
            이 페이지는 이력서가 아니라 프로젝트 증빙용 포트폴리오이며, 문제·접근·결과·직무 연결성이 빠르게 보이도록 구성했습니다.
          </p>

          <div className="portfolio-intro-grid">
            <div className="portfolio-intro-panel">
              <span>Case 01</span>
              <strong>산업용 밸브 유량 예측 · MAPE 0.1835</strong>
            </div>
            <div className="portfolio-intro-panel">
              <span>Case 02</span>
              <strong>LoRa payload 32B → 20B · 성공 패킷 29 → 33</strong>
            </div>
            <div className="portfolio-intro-panel">
              <span>Focus</span>
              <strong>문제 정의 → 구현 → 정량 검증 → 현장 적용 가능성 판단</strong>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="portfolio-section-header">
            <p className="portfolio-eyebrow">Case Studies</p>
            <h2>대표 프로젝트</h2>
            <p>
              긴 보고서를 그대로 보여주기보다, 담당자가 빠르게 판단할 수 있도록 각 프로젝트를 문제, 접근, 결과,
              의미, 증빙 링크 순서로 정리했습니다.
            </p>
          </div>

          <div className="portfolio-project-list">
            {selectedProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="portfolio-project-card" key={project.id}>
                  <div className="portfolio-project-head">
                    <span className="portfolio-project-icon">
                      <Icon size={22} />
                    </span>
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
                      <p className="portfolio-block-label">문제</p>
                      <p>{project.problem}</p>
                    </div>
                    <div className="portfolio-body-block">
                      <p className="portfolio-block-label">접근</p>
                      <ul>
                        {project.approach.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="portfolio-result-strip">
                    <div className="portfolio-result-header">
                      <p className="portfolio-block-label">결과와 의미</p>
                      <p>{project.meaning}</p>
                    </div>
                    <div className="portfolio-result-metrics">
                      {project.results.map((result) => (
                        <span className="portfolio-metric-chip" key={result}>
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="portfolio-proof-box">
                    <p className="portfolio-block-label">증빙 링크</p>
                    <div className="portfolio-proof-links">
                      {project.links.map((link) => (
                        <a href={link.url} className="portfolio-proof-link" target="_blank" rel="noreferrer" key={link.url}>
                          {link.kind === 'github' ? <Github size={15} /> : <FileText size={15} />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <p>{project.evidenceNote}</p>
                    <ul className="portfolio-proof-urls">
                      {project.links.map((link) => (
                        <li className="portfolio-proof-url-item" key={`${link.url}-print`}>
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
            <p className="portfolio-eyebrow">Working Style</p>
            <h2>문제 해결 방식</h2>
            <div className="portfolio-strength-list">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <div className="portfolio-strength-item" key={strength.title}>
                    <span className="portfolio-strength-icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3>{strength.title}</h3>
                      <p>{strength.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="portfolio-footer-card">
            <p className="portfolio-eyebrow">Additional Details</p>
            <h2>함께 보는 정보</h2>
            <div className="portfolio-info-group">
              <p className="portfolio-block-label">주요 기술</p>
              <p>Python, TensorFlow/PyTorch, Linux, Git/GitHub, Raspberry Pi, 시계열 전처리, 신호·센서 데이터 처리</p>
            </div>
            <div className="portfolio-info-group">
              <p className="portfolio-block-label">제출 시 사용</p>
              <p>
                이력서는 #ackerton-resume 경로로 분리하고, 이 페이지는 프로젝트 세부 증빙용으로 사용하면 됩니다.
                파일 제출이 필요한 경우 PDF 저장 후 첨부할 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AckertonPortfolio;
