---
layout: page
title: 프로젝트
permalink: /projects_ko/
---

<div class="project" id="lora-communication">
  <div class="kicker">IoT · Edge · Compression</div>
  <div class="title-row">
    <h2>BAM 기반 페이로드 압축으로 LoRa 통신 효율 개선</h2>
    <div class="meta">역할: 팀 리드<span class="sep">•</span>기간: 2025.03–06<span class="sep">•</span>상태: 완료</div>
  </div>

  <div class="section">
    <h3>What — 프로젝트 개요</h3>
    <p>Raspberry Pi에서 동작하는 <strong>BAM 기반 경량 압축 모델</strong>을 설계해, LoRa 네트워크에서 재전송 및 배터리 소모를 줄였습니다.</p>
  </div>

  <div class="section">
    <h3>Why — 문제 배경</h3>
    <p>LPWA 특성상 긴 페이로드는 충돌·재전송을 유발하고, N-LOS 장거리 링크에서 신뢰도를 악화시킵니다. Autoencoder는 Pi 환경에서 연산/메모리 부담으로 실시간 적용이 어려웠습니다.</p>
  </div>

  <div class="section">
    <h3>How — 접근 및 구현</h3>
    <ul>
      <li><strong>모델</strong>: Autoencoder 대신 <strong>BAM</strong> 채택, <strong>NumPy</strong> 순수 구현(의존성 최소/배포 용이)</li>
      <li><strong>시스템</strong>: 수집→압축→LoRa 전송→복원→평가 End-to-End 파이프라인, 재현성 있는 스크립트/로그 구조</li>
      <li><strong>현장 검증</strong>: 2.6km N-LOS, 1개월 반복 측정</li>
      <li><strong>전처리</strong>: GPS 정수부 제거 → MSE 대폭 개선</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric"><b>62.5% 압축</b> 32B → 20B</div>
    <div class="metric"><b>PDR +14%</b> 실환경 N-LOS</div>
    <div class="metric"><b>MSE 0.0036</b> (약 80% 개선)</div>
    <div class="metric"><b>실시간 Edge</b> Raspberry Pi</div>
  </div>

  <h3>Challenges → Fixes</h3>
  <table>
    <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
    <tbody>
      <tr><td>장마 등 필드 변수로 측정 불안정</td><td>2주→1개월 확장, 반복 측정으로 통계적 신뢰 확보</td></tr>
      <tr><td>GPS 포맷 문제로 MSE↑</td><td>정수부 제거 전처리 → MSE 0.0184→0.0036</td></tr>
      <tr><td>Pi에서 AE 과부하</td><td><strong>NumPy BAM</strong>으로 경량화·실시간화</td></tr>
    </tbody>
  </table>

  <div class="section">
    <h3>Result</h3>
    <p><strong>62.5% 압축</strong>으로 <strong>PDR +14%</strong>, <strong>MSE 0.0036</strong> 달성. 저자원 하드웨어에서 실시간 동작 검증.</p>
  </div>

  <div class="section">
    <h3>So What — 의의/확장</h3>
    <p>배터리 효율과 신뢰도가 필요한 LoRa 환경에서 <strong>실전 배포 가능한 학습형 압축</strong>을 증명했습니다. PyTorch 커널/양자화로 <strong>Furiosa NPU</strong> 친화성 검증 예정.</p>
    <p><a href="https://github.com/4xvgal/ChirpChirp" target="_blank">System</a> · <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">BAM Core</a></p>
  </div>
</div>

<div class="project" id="valve-prediction">
  <div class="kicker">Industrial AI · Time-Series</div>
  <div class="title-row">
    <h2>Encoder-LSTM 기반 산업용 밸브 유량 예측</h2>
    <div class="meta">역할: 개인 연구<span class="sep">•</span>기간: 2024.07–12<span class="sep">•</span>상태: 완료</div>
  </div>

  <div class="section">
    <h3>What — 프로젝트 개요</h3>
    <p>산업용 밸브 고장 진단을 위한 <strong>Encoder-LSTM</strong> 예측 모델을 설계해 <strong>MAPE 10 → 0.188</strong>까지 낮췄습니다.</p>
  </div>

  <div class="section">
    <h3>Why — 문제 배경</h3>
    <p>기존 LSTM은 개도율 0 구간에서 시퀀스 불연속이 발생하고, 센서 이상치에 민감해 산업 현장 적용에 부적합했습니다.</p>
  </div>

  <div class="section">
    <h3>How — 접근 및 구현</h3>
    <ul>
      <li><strong>아키텍처</strong>: Autoencoder에서 착안한 <strong>Encoder-LSTM</strong> (계층적 특징 추출)</li>
      <li><strong>로직</strong>: 개도율=0 구간 <strong>시퀀스 재초기화</strong> 도입</li>
      <li><strong>손실</strong>: 이상치 강건성 확보를 위한 <strong>Huber Loss</strong> 적용</li>
      <li><strong>데이터</strong>: 낮은 소수 정밀도 → 불필요한 정규화 제거</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric"><b>MAPE 0.188</b> 약 98% 개선</div>
    <div class="metric"><b>안정성 향상</b> 시퀀스 불연속 해소</div>
  </div>

  <h3>Challenges → Fixes</h3>
  <table>
    <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
    <tbody>
      <tr><td>개도율=0 구간 불연속</td><td>시퀀스 재초기화 로직으로 안정화</td></tr>
      <tr><td>이상치 민감</td><td>Huber Loss 채택으로 그래디언트 안정성 확보</td></tr>
      <tr><td>데이터 정밀도 불균형</td><td>정규화 단순화로 분산 축소</td></tr>
    </tbody>
  </table>

  <div class="section">
    <h3>Result</h3>
    <p><strong>MAPE 0.188</strong> 달성, 시계열 안정성·일관성 확보.</p>
  </div>

  <div class="section">
    <h3>So What — 의의/확장</h3>
    <p>데이터 특성 기반 설계의 유효성을 입증했으며, 도메인별 튜닝·실시간 추론 파이프라인으로 확장 예정입니다.</p>
  </div>
</div>

<div class="project" id="ultra-low-snr">
  <div class="kicker">Restoration · Classification</div>
  <div class="title-row">
    <h2>Ultra-Low SNR 신호 복원 및 분류 (연쇄 vs MTL)</h2>
    <div class="meta">역할: 개인 연구<span class="sep">•</span>기간: 2025.03–현재<span class="sep">•</span>상태: 진행 중</div>
  </div>

  <div class="section">
    <h3>What — 프로젝트 개요</h3>
    <p>초저 SNR(–30 ~ –10 dB)에서 <strong>연쇄(Cascaded)</strong>와 <strong>MTL(공유 인코더·이중 디코더)</strong>을 비교해 복원·분류 최적 구조를 탐색합니다.</p>
  </div>

  <div class="section">
    <h3>Why — 문제 배경</h3>
    <p>전통적 필터는 초저 SNR에서 급격히 성능이 하락하며, 복원–분류 간 최적 균형점이 명확하지 않습니다. E2E 학습의 이점을 정량 검증합니다.</p>
  </div>

  <div class="section">
    <h3>How — 접근 및 구현</h3>
    <ul>
      <li><strong>백본</strong>: BAM / CAE / U-Net</li>
      <li><strong>파이프라인</strong>: 연쇄(복원→분류) vs MTL(공유 인코더+이중 디코더)</li>
      <li><strong>데이터</strong>: CIFAR-10 → 150K, 노이즈 Gaussian / Salt&Pepper / Burst, SNR –30 ~ –10 dB</li>
      <li><strong>지표</strong>: MSE·MAE·PSNR·Accuracy·Latency</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric"><b>U-Net 유리</b> 복원 품질(스킵 연결)</div>
    <div class="metric"><b>MTL 우위</b> 고 SNR 구간 분류 정확도</div>
    <div class="metric"><b>Burst 난이도 높음</b> 노이즈 유형별 차이 큼</div>
  </div>

  <h3>Challenges → Fixes</h3>
  <table>
    <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
    <tbody>
      <tr><td>실험 조합 폭발</td><td>단계별 파이프라인·자동 로그 집계로 재현성 확보</td></tr>
      <tr><td>손실 불균형</td><td>가중치 grid search·스케줄링으로 PSNR–Acc 트레이드오프 제어</td></tr>
      <tr><td>노이즈 현실성</td><td>SNR 제어·혼합 증강으로 분포 왜곡 최소화</td></tr>
    </tbody>
  </table>

  <div class="section">
    <h3>Result</h3>
    <p>아키텍처·패러다임별 우위 조건을 도출했고, 최종 비교 및 논문화 진행 중입니다.</p>
  </div>

  <div class="section">
    <h3>So What — 의의/확장</h3>
    <p>극저 SNR 환경에서 <strong>연쇄 vs MTL</strong> 선택의 정량적 근거를 제공합니다. PyTorch 포팅·양자화로 실시간 추론을 목표로 합니다.</p>
    <p><a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">Repository</a></p>
  </div>
</div>