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
      <a class="btn primary" href="{{ '/' | relative_url }}">🇺🇸 English</a>
      <a class="btn" href="{{ '/projects_ko' | relative_url }}">프로젝트</a>
      <a class="btn" href="mailto:{% raw %}{{ site.email }}{% endraw %}">이메일</a>
    </div>
  </div>
</div>

# AI/ML 엔지니어링 학부 연구생

AI 모델의 **효율성과 실용성**을 함께 추구합니다.  
하드웨어 제약을 이해하고 데이터의 본질을 파악하여  
**최적화된 AI 솔루션**을 설계하고 구현합니다.

저자원 환경에서 동작하는 실용적 AI 시스템 구축에 집중하고 있으며,  
IoT 통신 최적화부터 산업용 AI 응용까지 경험을 쌓아왔습니다.  
모델 압축과 시스템 최적화에 특히 강점이 있습니다.

---

## 🎓 학력
**동의대학교** — 컴퓨터공학과 학사  
졸업 예정: 2026년

---

## 💼 기술 스택

### AI/ML
- **프레임워크**: PyTorch, TensorFlow  
- **전문 분야**: 모델 최적화, LSTM, Encoder–Decoder 아키텍처  
- **관심 영역**: 모델 압축, 하드웨어 제약 AI, 시계열 예측

### 프로그래밍 & 도구
- **언어**: Python, C/C++  
- **IoT/임베디드**: Raspberry Pi, LoRa 통신  
- **개발 도구**: Git, Jupyter, Linux

---

## 🏆 자격증
**정보처리기사**  
취득일: 2025년 6월 13일 · 발급기관: 한국산업인력공단

---

## 🚀 핵심 역량
- **End-to-End 시스템 설계**: Raspberry Pi, LoRa 등 하드웨어 제약 고려  
- **모델 최적화**: 페이로드 62.5% 감소 & 예측 오차 98% 개선  
- **데이터 기반 설계**: 데이터 특성에 맞춘 구조/전처리 설계  
- **실용적 구현**: 자원 제약 환경에서도 안정 동작

---

## 📊 주요 프로젝트

<div class="project-card">
  <h3>🔬 IoT 통신 효율 개선</h3>
  <p class="project-meta">LoRa · 엣지 AI · 페이로드 압축</p>
  <ul>
    <li><b>성과:</b> <b>PDR +14%</b> (BAM 기반 압축, <b>32B → 20B</b>, 62.5%)</li>
  </ul>

  <h4 id="lora-communication">🔬 BAM 기반 페이로드 압축을 통한 IoT 통신 효율 개선</h4>
  <p><b>역할:</b> 학부 연구생 및 팀 리드 · <b>기간:</b> 2025-03–2025-06 · <b>상태:</b> 완료</p>

  <p><b>요약</b></p>
  <ul>
    <li><b>문제:</b> 저전력·고손실 LoRa에서 긴 페이로드로 충돌/재전송 → 배터리 소모</li>
    <li><b>접근:</b> 경량 <b>BAM</b>(NumPy) 모델을 Raspberry Pi에 적용, End-to-End 실증</li>
    <li><b>결과:</b> <b>32B → 20B</b> (62.5%), <b>PDR +14%</b>, <b>MSE 0.0036</b>, N-LOS 약 2.6km 검증</li>
  </ul>

  <details>
    <summary><b>자세히 보기</b></summary>
    <p>저자원 임베디드 시스템에 최적화된 경량 압축 모델을 설계하고 실제 LoRa 환경에서 검증했습니다.</p>

    <h5>기술적 접근</h5>
    <ul>
      <li>Autoencoder의 연산 부담 → <b>BAM</b>으로 대체</li>
      <li><b>NumPy</b> 기반으로 재구현하여 오버헤드 최소화</li>
      <li>한 달간 반복 필드 테스트로 환경 변수(날씨 등) 보정</li>
    </ul>

    <h5>최적화</h5>
    <p>GPS 정수부 제거 등 포맷 최적화 → <b>MSE 0.0184 → 0.0036</b> (약 80% 개선)</p>

    <h5>스택</h5>
    <p>Python, NumPy · Raspberry Pi, LoRa · Git, Linux</p>

    <h5>링크</h5>
    <p>
      시스템: <a href="https://github.com/4xvgal/ChirpChirp" target="_blank">ChirpChirp</a><br>
      모델: <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">Lightweight-MF-BAM</a>
    </p>
  </details>
</div>

<div class="project-card">
  <h3>📡 산업용 밸브 유량 예측</h3>
  <p class="project-meta">Time-Series · Encoder-LSTM</p>
  <ul>
    <li><b>성과:</b> <b>MAPE 10 → 0.188</b> (~98% 개선)</li>
  </ul>
  <a class="btn" href="{{ '/projects_ko#valve-prediction' | relative_url }}">자세히 보기</a>
</div>

---

## 💻 현재 진행 중

### Ultra-Low SNR 신호 복원 및 분류
**기간**: 2025년 3월 – 현재  
초저 SNR 환경에서 복원/분류 성능을 높이기 위해 Cascaded vs. MTL 구조를 비교 중입니다.

**스택**: TensorFlow, Custom CNN, BAM, CAE, U-Net  
🔗 <a class="btn" href="{{ '/projects_ko#ultra-low-snr' | relative_url }}">프로젝트 상세</a>
<a class="btn" href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">GitHub</a>

---

## 📫 연락처
- **이메일**: <a href="mailto:{% raw %}{{ site.email }}{% endraw %}">{% raw %}{{ site.email }}{% endraw %}</a>  
- **GitHub**: <a href="https://github.com/{% raw %}{{ site.github_username }}{% endraw %}" target="_blank">@{% raw %}{{ site.github_username }}{% endraw %}</a>  
- **블로그**: <a href="{% raw %}{{ site.blog_url }}{% endraw %}" target="_blank">{% raw %}{{ site.blog_url }}{% endraw %}</a>

<div style="text-align: center; margin-top: 40px;">
  <a href="{{ '/projects_ko' | relative_url }}" class="btn primary" style="font-weight: bold;">전체 프로젝트 보기 →</a>
</div>