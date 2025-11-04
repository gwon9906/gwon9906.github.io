---
layout: page
title: 프로젝트
permalink: /projects_ko/
---

<!-- LoRa / BAM -->
<div class="project" id="lora-communication">
  <div class="kicker">IoT · Edge · Compression</div>
  <div class="title-row">
    <h2>BAM 기반 페이로드 압축으로 LoRa 통신 효율 개선</h2>
    <div class="meta">역할: 팀 리드<span class="sep">•</span>기간: 2025.03–06<span class="sep">•</span>상태: 완료</div>
  </div>

  <div class="tldr">
    <h3>요약</h3>
    <ul>
      <li>Raspberry Pi에서 동작하는 <strong>BAM 기반 경량 압축</strong>으로 <strong>62.5% 압축(32B→20B)</strong></li>
      <li>N-LOS(약 2.6km) 실환경에서 <strong>PDR +14%</strong>, <strong>MSE 0.0036</strong></li>
    </ul>
  </div>

  <div class="section">
    <h3>What — 무엇을 했나</h3>
    <p>저자원 엣지(PI)에서 실시간 가능한 <strong>NumPy BAM</strong> 압축 모델을 구현하고 LoRa E2E 파이프라인(수집→압축→전송→복원→평가)에 통합했습니다.</p>
  </div>

  <div class="section">
    <h3>Why — 왜 필요한가</h3>
    <p>LPWA에서는 긴 페이로드가 충돌·재전송을 유발해 배터리가 빠르게 소모되며, 특히 장거리 N-LOS에서 신뢰도 저하가 큽니다. Autoencoder는 Pi에 과부하였습니다.</p>
  </div>

  <div class="section section-grid">
    <div>
      <h3>How — 어떻게 했나 (모델/시스템)</h3>
      <ul>
        <li><strong>모델</strong>: AE 대신 BAM 채택, <strong>NumPy 순수 구현</strong>(의존성↓/지연↓)</li>
        <li><strong>시스템</strong>: 스크립트/로그 표준화로 재현 가능한 실험 체계 구축</li>
        <li><strong>현장</strong>: 1개월 반복 측정으로 외부 변수 평균화</li>
      </ul>
    </div>
    <div>
      <h3>Result — 결과</h3>
      <div class="metrics">
        <div class="metric"><b>62.5% 압축</b> 32B → 20B</div>
        <div class="metric"><b>PDR +14%</b> 실환경 N-LOS</div>
        <div class="metric"><b>MSE 0.0036</b> (약 80% 개선)</div>
        <div class="metric"><b>Edge 실시간</b> Raspberry Pi</div>
      </div>
    </div>
  </div>

  <details>
    <summary>Challenges → Fixes (펼쳐보기)</summary>
    <table>
      <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>장마 등 필드 변수로 측정 불안정</td><td>2주→1개월 확장, 반복 측정으로 통계적 신뢰 확보</td></tr>
        <tr><td>GPS 포맷 문제로 MSE↑</td><td>정수부 제거 전처리 → MSE 0.0184→0.0036</td></tr>
        <tr><td>Pi에서 AE 과부하</td><td><strong>NumPy BAM</strong>으로 경량화·실시간화</td></tr>
      </tbody>
    </table>
  </details>

  <div class="section">
    <h3>So What — 무엇이 남았나</h3>
    <p>실전 배포 가능한 <strong>학습형 압축</strong>의 유효성을 증명했습니다. 다음 단계로 PyTorch 커널/양자화로 <strong>Furiosa NPU 친화성</strong>을 검증할 계획입니다.</p>
    <p><a href="https://github.com/4xvgal/ChirpChirp" target="_blank">System</a> · <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">BAM Core</a></p>
  </div>
</div>

<!-- Valve -->
<div class="project" id="valve-prediction">
  <div class="kicker">Industrial AI · Time-Series</div>
  <div class="title-row">
    <h2>Encoder-LSTM 기반 산업용 밸브 유량 예측</h2>
    <div class="meta">역할: 개인 연구<span class="sep">•</span>기간: 2024.07–12<span class="sep">•</span>상태: 완료</div>
  </div>

  <div class="tldr">
    <h3>요약</h3>
    <ul>
      <li>개도율 0 불연속·이상치 민감 등 한계를 <strong>Encoder-LSTM</strong>과 <strong>Huber 손실</strong>로 해결</li>
      <li><strong>MAPE 10 → 0.188</strong>, 운영 안정성 향상</li>
    </ul>
  </div>

  <div class="section">
    <h3>What</h3>
    <p>고장 진단용 고정밀 유량 예측을 위해 <strong>맞춤 Encoder-LSTM</strong>을 설계·구현했습니다.</p>
  </div>

  <div class="section">
    <h3>Why</h3>
    <p>Vanilla LSTM은 개도율 0에서 시퀀스가 끊기고, 이상치에 취약해 현장 적용이 어려웠습니다.</p>
  </div>

  <div class="section section-grid">
    <div>
      <h3>How</h3>
      <ul>
        <li>계층적 특징 추출 <strong>Encoder-LSTM</strong> 구조</li>
        <li><strong>시퀀스 재초기화</strong> 로직으로 불연속 해소</li>
        <li><strong>Huber Loss</strong> 채택으로 이상치 강건성 확보</li>
        <li>낮은 소수 정밀도 데이터 → 불필요 정규화 제거</li>
      </ul>
    </div>
    <div>
      <h3>Result</h3>
      <div class="metrics">
        <div class="metric"><b>MAPE 0.188</b> (~98% 개선)</div>
        <div class="metric"><b>안정성</b> 불연속·분산 완화</div>
      </div>
    </div>
  </div>

  <details>
    <summary>Challenges → Fixes (펼쳐보기)</summary>
    <table>
      <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>개도율=0 구간 불연속</td><td>시퀀스 재초기화로 안정화</td></tr>
        <tr><td>이상치 민감</td><td>Huber Loss 채택</td></tr>
        <tr><td>정밀도 불균형</td><td>정규화 단순화로 분산 축소</td></tr>
      </tbody>
    </table>
  </details>

  <div class="section">
    <h3>So What</h3>
    <p>데이터 특성-우선 설계의 효과를 입증했으며, 도메인별 튜닝과 실시간 파이프라인으로 확장 가능합니다.</p>
  </div>
</div>

<!-- Ultra-Low SNR -->
<div class="project" id="ultra-low-snr">
  <div class="kicker">Restoration · Classification</div>
  <div class="title-row">
    <h2>Ultra-Low SNR 신호 복원 및 분류 (연쇄 vs MTL)</h2>
    <div class="meta">역할: 개인 연구<span class="sep">•</span>기간: 2025.03–현재<span class="sep">•</span>상태: 진행 중</div>
  </div>

  <div class="tldr">
    <h3>요약</h3>
    <ul>
      <li>–30~–10 dB에서 <strong>연쇄(Cascaded)</strong> vs <strong>MTL</strong> 비교</li>
      <li>U-Net 복원 우위, 고 SNR에서 MTL 분류 우위 경향</li>
    </ul>
  </div>

  <div class="section">
    <h3>What</h3>
    <p>복원/분류 파이프라인의 최적 균형점을 찾기 위해 모델·패러다임을 체계 비교합니다.</p>
  </div>

  <div class="section">
    <h3>Why</h3>
    <p>전통적 필터는 초저 SNR에서 급락하며, E2E와 순차의 선택 근거가 불명확합니다.</p>
  </div>

  <div class="section section-grid">
    <div>
      <h3>How</h3>
      <ul>
        <li><strong>백본</strong>: BAM / CAE / U-Net</li>
        <li><strong>파이프라인</strong>: 연쇄(복원→분류) vs MTL(공유 인코더+이중 디코더)</li>
        <li><strong>데이터</strong>: CIFAR-10 150K, Gaussian/Salt&Pepper/Burst, –30~–10 dB</li>
        <li><strong>지표</strong>: MSE/MAE/PSNR/Accuracy/Latency</li>
      </ul>
    </div>
    <div>
      <h3>Result</h3>
      <div class="metrics">
        <div class="metric"><b>U-Net 유리</b> 복원 품질</div>
        <div class="metric"><b>MTL 우위</b> 고 SNR 분류</div>
        <div class="metric"><b>Burst 난이도↑</b> 유형별 격차 큼</div>
      </div>
    </div>
  </div>

  <details>
    <summary>Challenges → Fixes (펼쳐보기)</summary>
    <table>
      <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>실험 조합 폭발</td><td>모듈러 트레이닝, 자동 로깅, 재현 규약</td></tr>
        <tr><td>손실 불균형</td><td>가중치 그리드+스케줄링으로 PSNR–Acc 균형</td></tr>
        <tr><td>노이즈 현실성</td><td>SNR 제어/혼합 증강으로 분포 왜곡 최소화</td></tr>
      </tbody>
    </table>
  </details>

  <div class="section">
    <h3>So What</h3>
    <p>극저 SNR에서 <strong>연쇄 vs MTL</strong> 선택의 정량 근거를 제공합니다. PyTorch 포팅/양자화로 실시간 추론을 준비 중입니다.</p>
    <p><a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">Repository</a></p>
  </div>
</div>