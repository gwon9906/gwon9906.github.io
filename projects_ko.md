---
layout: page
title: 프로젝트
permalink: /projects_ko/
---

<div style="text-align: right; margin-bottom: 20px;">
  <a href="/projects" style="text-decoration: none; padding: 8px 16px; background-color: #0366d6; color: white; border-radius: 5px;">🇺🇸 English</a>
</div>

# 연구 및 개발 프로젝트

---

<div class="project-card">
  <h3>🔬 BAM 기반 페이로드 압축을 통한 IoT 통신 효율 개선</h3>
  <p class="project-meta">LoRa · Edge AI · Payload Compression</p>
  <ul>
    <li><b>성과:</b> 페이로드 32B → 20B (62.5% 감소), PDR 14% 향상</li>
  </ul>

  <h4 id="lora-communication">📡 프로젝트 개요</h4>
  <p><b>역할:</b> 학부 연구생 및 팀 리드 · <b>기간:</b> 2025년 3월 – 2025년 6월 · <b>상태:</b> 완료</p>

  <p><b>요약</b></p>
  <ul>
    <li><b>문제:</b> 장거리·고손실 LoRa 환경에서 긴 페이로드로 재전송 및 배터리 소모 증가</li>
    <li><b>접근:</b> Autoencoder 대신 <b>BAM(NumPy)</b> 기반 경량 모델로 라즈베리파이에 실시간 적용</li>
    <li><b>결과:</b> <b>32B → 20B</b> (62.5%) 압축, <b>PDR +14%</b>, <b>MSE 0.0036</b>, 약 2.6km NLOS 환경 검증</li>
  </ul>

  <details>
    <summary><b>자세히 보기</b></summary>

    <h5>🔍 기술적 접근</h5>
    <ul>
      <li>Autoencoder의 높은 연산 부하 → NumPy 기반 <b>BAM</b> 직접 구현</li>
      <li>라즈베리파이 제약과 LoRa 프로토콜 한계를 고려한 End-to-End 설계</li>
      <li>비가시권(NLOS) 현장 테스트를 반복 수행하여 통계적 신뢰도 확보</li>
    </ul>

    <h5>⚙️ 최적화</h5>
    <ul>
      <li>GPS 데이터 정수부 제거 등 포맷 정비 → <b>MSE 0.0184 → 0.0036 (약 80% 개선)</b></li>
      <li>재전송 감소 → 배터리 소모 완화</li>
    </ul>

    <h5>🧠 기술 스택</h5>
    <p>Python, NumPy · Raspberry Pi, LoRa · Git, Linux</p>

    <h5>🔗 링크</h5>
    <p>
      시스템 전체: <a href="https://github.com/4xvgal/ChirpChirp" target="_blank">ChirpChirp</a><br>
      BAM 모델: <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">Lightweight-MF-BAM</a>
    </p>
  </details>
</div>

---

<div class="project-card">
  <h3>📡 Encoder-LSTM 기반 산업용 밸브 유량 예측</h3>
  <p class="project-meta">Time Series · Encoder-LSTM</p>
  <ul>
    <li><b>성과:</b> MAPE 10 → 0.188 (약 98% 개선)</li>
  </ul>

  <p><b>역할:</b> 학부 연구생(개인) · <b>기간:</b> 2024년 7월 – 2024년 12월 · <b>상태:</b> 완료</p>

  <p><b>요약</b></p>
  <ul>
    <li><b>문제:</b> 베이스라인 LSTM의 오차율(MAPE) > 10으로 산업 적용 불가</li>
    <li><b>접근:</b> 개도율 0% 구간의 불연속을 처리하는 맞춤형 <b>Encoder-LSTM</b> 설계</li>
    <li><b>결과:</b> <b>MAPE 10 → 0.188</b>, 모델 복잡도 감소, <b>Huber Loss</b>로 이상치에 강건</li>
  </ul>

  <details>
    <summary><b>자세히 보기</b></summary>

    <h5>🔍 기술적 접근</h5>
    <ul>
      <li>밸브 개도율 0 구간에서 시퀀스 재초기화로 불연속 문제 해결</li>
      <li>Autoencoder에서 영감을 받은 계층적 <b>Encoder-LSTM</b> 구조</li>
      <li>소수점 정밀도가 낮은 데이터 특성에 맞춰 불필요한 정규화 제거</li>
    </ul>

    <h5>🧠 데이터 최적화</h5>
    <ul>
      <li><b>Huber Loss</b> 채택으로 이상치에 강건하고 안정적인 그래디언트 확보</li>
      <li>통계 기반 검증을 통해 전처리 파이프라인 반복 개선</li>
    </ul>

    <h5>🧩 기술 스택</h5>
    <p>PyTorch · Python, Pandas, NumPy, Jupyter</p>
  </details>
</div>

---

<div class="project-card">
  <h3>💻 Ultra Low SNR 신호 복원 및 분류</h3>
  <p class="project-meta">MTL · Noise Restoration · Deep Learning</p>
  <ul>
    <li><b>진행 상황:</b> 6개 모델 학습 완료 · 비교 분석 및 논문 작성 중</li>
  </ul>

  <p><b>역할:</b> 학부 연구생(개인) · <b>기간:</b> 2025년 7월 – 현재 · <b>상태:</b> 진행 중</p>

  <p><b>요약</b></p>
  <ul>
    <li><b>문제:</b> 초저 SNR(–30 ~ –10 dB)에서 전통적 방법의 성능 저하</li>
    <li><b>접근:</b> <b>Cascaded</b> vs <b>MTL</b> 아키텍처를 노이즈/레벨별로 체계 비교</li>
    <li><b>예비 결과:</b> 고 SNR에선 MTL 분류 우수, 복원은 U-Net이 우수</li>
  </ul>

  <details>
    <summary><b>자세히 보기</b></summary>

    <h5>🔍 연구 초점</h5>
    <ul>
      <li>Sequential(2단계) vs MTL(공유 인코더 + 이중 디코더 + 공동 손실)</li>
      <li>복원 아키텍처 비교: <b>BAM</b>, <b>CAE</b>, <b>U-Net</b></li>
    </ul>

    <h5>📈 실험 환경</h5>
    <ul>
      <li>데이터셋: CIFAR-10 (총 15만 장 증강)</li>
      <li>노이즈: Gaussian, Salt & Pepper, Burst</li>
      <li>SNR: –30, –25, –20, –15, –10 dB</li>
      <li>지표: MSE, MAE, PSNR, Accuracy, Top-3 Accuracy</li>
    </ul>

    <h5>🧠 기술 스택</h5>
    <p>TensorFlow/Keras · Python, NumPy, Pandas, Jupyter, TensorBoard</p>

    <h5>🔗 링크</h5>
    <p>
      저장소: <a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">Denoise-and-Classify</a>
    </p>
  </details>
</div>

---

<div class="project-card">
  <h3>💡 기타 연구 경험</h3>
  <p>동의대학교 컴퓨터공학 연구실 학부 연구생 (2024 – 현재)</p>
  <ul>
    <li>신호 처리 및 시계열 예측</li>
    <li>IoT 시스템 및 임베디드 AI</li>
    <li>저자원 기기 대상 모델 최적화</li>
    <li>산업 현장 중심 실용 AI 솔루션</li>
  </ul>
</div>

---

<div style="text-align: center; margin-top: 40px;">
  <a href="/index_ko" class="btn primary" style="font-weight: bold;">← 홈으로 돌아가기</a>
</div>