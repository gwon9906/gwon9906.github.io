---
layout: home
title: "이해권 | AI/ML 엔지니어링"
permalink: /index_ko/
---

<div class="hero-compact">
  <div class="hero-text">
    <h1>이해권</h1>
    <p class="tagline">AI/ML Engineering · Edge/Embedded Optimization</p>
    <div class="hero-cta">
      <a class="btn primary" href="{{ '/' | relative_url }}">🇺🇸 English</a>
      <a class="btn" href="{{ '/projects_ko' | relative_url }}">프로젝트 보기</a>
      <a class="btn" href="mailto:{{ site.email }}">이메일</a>
    </div>
  </div>
</div>

## AI/ML 엔지니어링 학생

AI 모델의 효율성과 실용성을 모두 추구합니다.  
하드웨어 제약을 이해하고 데이터의 본질을 파악하여,  
최적화된 AI 솔루션을 설계하고 구현합니다.

컴퓨터공학과 학부 연구생으로서 저자원 환경에서 동작하는 실용적인 AI 시스템 구축에 집중하고 있습니다. IoT 통신 최적화부터 산업용 AI 응용까지 다양한 경험을 쌓았으며, 특히 모델 압축과 시스템 수준의 최적화 분야에서 전문성을 키워가고 있습니다.

---

## 🎓 학력
**동의대학교** - 컴퓨터공학과 학사  
졸업 예정: 2026년

---

## 💼 기술 스택
### AI/ML
- **프레임워크**: PyTorch, TensorFlow  
- **전문 분야**: 모델 최적화, LSTM, Encoder-Decoder 아키텍처  
- **주요 관심사**: 모델 압축, 하드웨어 제약 AI, 시계열 예측

### 프로그래밍 & 도구
- **언어**: Python, C/C++  
- **IoT/임베디드**: Raspberry Pi, LoRa 통신  
- **개발 도구**: Git, Jupyter, Linux

---

## 🏆 자격증
**정보처리기사**  
취득일: 2025년 6월 13일  
발급기관: 한국산업인력공단

---

## 🚀 핵심 역량
- **End-to-End 시스템 설계**: 하드웨어 제약(Raspberry Pi, LoRa)을 고려한 완전한 시스템 구축 경험  
- **모델 최적화**: 페이로드 62.5% 감소, 예측 오차율 98% 개선  
- **데이터 기반 문제 해결**: 데이터 특성 분석 및 최적 아키텍처 설계  
- **실용적 구현**: 실제 환경과 자원 제약 속에서도 안정적으로 동작하는 솔루션 구현

---

## 📊 주요 프로젝트

<div class="project-card" id="lora-communication">
  <h3>🔬 IoT 통신 효율 개선</h3>
  <p class="project-meta">LoRa · Edge AI · Payload Compression</p>
  <ul>
    <li><b>Problem:</b> 저전력 LoRa 네트워크에서 긴 페이로드로 인한 충돌/재전송 증가</li>
    <li><b>Approach:</b> 경량 BAM 기반 페이로드 압축 (32B → 20B, 62.5%)</li>
    <li><b>Result:</b> <b>PDR 14% 향상</b>, MSE 0.0036</li>
  </ul>
  <a class="btn" href="{{ '/projects_ko#lora-communication' | relative_url }}">자세히 보기</a>
</div>

<div class="project-card" id="valve-prediction">
  <h3>📡 산업용 밸브 유량 예측</h3>
  <p class="project-meta">Time-Series · Encoder-LSTM</p>
  <ul>
    <li><b>Problem:</b> 초기 LSTM의 높은 예측 오차 (MAPE &gt; 10)</li>
    <li><b>Approach:</b> Encoder-LSTM + Huber 손실 + 시퀀스 초기화</li>
    <li><b>Result:</b> <b>MAPE 10 → 0.188 (98% 개선)</b></li>
  </ul>
  <a class="btn" href="{{ '/projects_ko#valve-prediction' | relative_url }}">자세히 보기</a>
</div>

---

## 💻 현재 진행 중
### Ultra-Low SNR 신호 복원 및 분류
**기간**: 2025년 3월 - 현재  
극한의 낮은 신호대잡음비(SNR) 환경에서 이미지 복원 및 분류 모델을 비교·평가 중입니다.  
단일 과제 학습(Single Task)과 다중 과제 학습(Multi-Task)을 비교하며,  
궁극적으로는 **ultra-low SNR 환경에서의 성능 향상**을 목표로 합니다.  

**기술 스택**: TensorFlow, Custom CNN, CAE, U-Net, BAM  
🔗 [자세히 보기](/projects_ko#ultra-low-snr) | [GitHub](https://github.com/gwon9906/Denoise-and-Classify)

---

## 📫 연락처
<a class="btn primary" href="mailto:{{ site.email }}">이메일 보내기</a>
<a class="btn" href="https://github.com/gwon9906" target="_blank">GitHub @gwon9906</a>
<a class="btn" href="https://latetime.tistory.com/" target="_blank">블로그</a>

---

<div style="text-align: center; margin-top: 40px;">
  <a href="{{ '/projects_ko' | relative_url }}" class="btn primary" style="font-weight: bold;">전체 프로젝트 보기 →</a>
</div>