---
layout: home
title: "이해권 | AI/ML 엔지니어링"
permalink: /index_ko/
---

<div class="hero-compact">
  <div class="hero-text">
    <h1>이해권 (Haegwon Lee)</h1>
    <p class="tagline">AI/ML 엔지니어링 · 엣지/임베디드 최적화</p>
    <div class="hero-cta">
      <a class="btn hero-outline" href="{{ '/' | relative_url }}">🇺🇸 English</a>
      <a class="btn hero-primary" href="{{ '/projects_ko' | relative_url }}">프로젝트</a>
      <a class="btn hero-contrast" href="mailto:gwon99065@naver.com">이메일</a>
    </div>
  </div>
</div>

# AI/ML 엔지니어링 학부 연구생

하드웨어 제약을 이해하고 데이터의 본질을 파악해  
**효율적이고 실용적인 AI 솔루션**을 설계·구현합니다.  
IoT 통신 최적화부터 산업용 AI까지, 모델 압축과 시스템 최적화에 강점이 있습니다.

---

## 🎓 학력
**동의대학교** — 컴퓨터공학과 학사  
졸업 예정: 2026년

---

## 📊 주요 프로젝트 (요약)

<div class="project-card">
  <h3>🔬 BAM 기반 IoT 통신 효율 개선</h3>
  <p class="project-meta">LoRa · 엣지 AI · 페이로드 압축</p>
  <p>
    Raspberry Pi와 LoRa 프로토콜 제약을 고려하여 경량 BAM 압축기를 설계했습니다.
    복잡한 추론 없이 페이로드 길이를 줄여 장거리 NLOS 환경에서 재전송을 완화합니다.
    약 2.6 km 필드 테스트로 실환경 강건성을 검증했습니다.
  </p>
  <ul>
    <li><b>성과:</b> 32B → 20B (62.5%), <b>PDR +14%</b>, MSE 0.0036</li>
  </ul>
  <a class="btn primary" href="{{ '/projects_ko#lora-communication' | relative_url }}">자세히 보기</a>
</div>

<div class="project-card">
  <h3>📡 산업용 밸브 유량 예측</h3>
  <p class="project-meta">시계열 · Encoder-LSTM · Huber Loss</p>
  <p>
    개도율 0% 지점의 불연속성과 센서 이상치에 대응하도록 Encoder-LSTM으로 재설계했습니다.
    소수 정밀도가 낮은 데이터 특성에 맞게 불필요한 정규화를 제거하고 Huber Loss로 안정성을 확보했습니다.
    산업 현장 고장 진단 관점에서 평가 파이프라인을 구성했습니다.
  </p>
  <ul>
    <li><b>성과:</b> <b>MAPE 10 → 0.188</b> (약 98% 개선)</li>
  </ul>
  <a class="btn primary" href="{{ '/projects_ko#valve-prediction' | relative_url }}">자세히 보기</a>
</div>

<div class="project-card">
  <h3>💻 Ultra-Low SNR 신호 복원·분류</h3>
  <p class="project-meta">MTL vs. 연쇄 · CIFAR-10 (15만) · U-Net/BAM/CAE</p>
  <p>
    복원→분류의 연쇄 파이프라인과 공유 인코더+이중 디코더 MTL을 체계적으로 비교합니다.
    3종 노이즈 × 5단계 SNR로 조건을 확장해, 어떤 상황에서 End-to-End가 유리한지 규명합니다.
    예비 경향: 복원은 U-Net이 우수, 분류는 고 SNR에서 MTL 이점이 큼.
  </p>
  <ul>
    <li><b>진행:</b> 6개 모델 학습 완료, 비교 분석 중</li>
  </ul>
  <a class="btn primary" href="{{ '/projects_ko#ultra-low-snr' | relative_url }}">자세히 보기</a>
</div>

---

## 💼 기술 스택
- **AI/ML**: PyTorch, TensorFlow · 모델 최적화, LSTM, Encoder–Decoder  
- **임베디드/IoT**: Raspberry Pi, LoRa 통신  
- **도구**: Python, C/C++, Git, Jupyter, Linux

---

## 🏆 자격증
**정보처리기사** — 2025.06.13 (한국산업인력공단)

---

## 🚀 강점
- 하드웨어 제약 고려 End-to-End 설계  
- 저자원 환경에서의 압축·최적화  
- 데이터 기반 구조/전처리 의사결정  
- 실환경 배포 경험

---

## 📫 연락처
- **이메일**: <a href="mailto:gwon99065@naver.com">gwon99065@naver.com</a>  
- **GitHub**: <a href="https://github.com/gwon9906" target="_blank">@gwon9906</a>  
- **블로그**: <a href="https://latetime.tistory.com/" target="_blank">https://latetime.tistory.com/</a>