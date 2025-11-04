---
layout: page
title: 프로젝트
permalink: /projects_ko/
---

<div class="project-compact" id="lora-communication">
  <div class="head">
    <h2>BAM 기반 페이로드 압축으로 LoRa 통신 효율 개선</h2>
    <div class="meta">역할: 팀 리드<span class="sep">•</span>기간: 2025.03–06<span class="sep">•</span>상태: 완료</div>
  </div>

  <div class="summary-strip">
    <div class="summary-item"><b>62.5% 압축</b> 32B → 20B</div>
    <div class="summary-item"><b>PDR +14%</b> 실환경 N-LOS</div>
    <div class="summary-item"><b>MSE 0.0036</b> (~80% 개선)</div>
    <div class="summary-item"><b>Edge 실시간</b> Raspberry Pi</div>
  </div>

  <div class="p-section">
    <h3>Overview</h3>
    <p>저자원 엣지(Raspberry Pi) 환경에서 동작 가능한 경량 <strong>NumPy 기반 BAM 압축</strong> 모델을 설계하고, LoRa 수집–압축–전송–복원–평가 파이프라인 전체에 통합했습니다.</p>
  </div>

  <div class="p-section">
    <h3>Context</h3>
    <p>LoRa는 장거리·저전력 통신이 가능하지만, 긴 페이로드로 인한 충돌과 재전송이 빈번하게 발생해 배터리 효율이 저하됩니다. 특히 비가시권(N-LOS) 환경에서는 전송 신뢰도 저하가 심각했습니다.</p>
  </div>

  <div class="p-section">
    <h3>Approach</h3>
    <ul>
      <li>Autoencoder 대비 연산량이 적은 <strong>BAM</strong> 채택</li>
      <li><strong>NumPy 순수 구현</strong>으로 의존성과 지연 최소화</li>
      <li>스크립트·로그 체계화로 <strong>재현 가능한 실험 환경</strong> 구축</li>
      <li>한 달간 N-LOS 구간 반복 주행 실험으로 통계적 신뢰 확보</li>
    </ul>
  </div>

  <div class="p-section">
    <h3>Results</h3>
    <ul>
      <li><strong>62.5% 압축률</strong>(32B→20B)로 <strong>PDR +14%</strong> 향상</li>
      <li>GPS 포맷 오류 수정으로 <strong>MSE 0.0184 → 0.0036</strong> 달성</li>
      <li>Raspberry Pi에서 <strong>실시간 처리</strong> 검증 완료</li>
    </ul>
  </div>

  <details>
    <summary>Challenges &amp; Fixes</summary>
    <table>
      <thead><tr><th>문제</th><th>해결 방법</th></tr></thead>
      <tbody>
        <tr><td>날씨·간섭 등 환경 변수로 인한 측정 변동</td><td>1개월 반복 측정으로 평균화 및 신뢰도 향상</td></tr>
        <tr><td>GPS 정수부 포맷 오류로 오차 상승</td><td>정수부 제거 등 전처리 개선으로 MSE 80% 감소</td></tr>
        <tr><td>Autoencoder의 과도한 연산</td><td><strong>NumPy BAM</strong>으로 경량화 및 연산 부하 완화</td></tr>
      </tbody>
    </table>
  </details>

  <div class="p-section">
    <h3>Next</h3>
    <p>온도·습도 등 규칙성이 높은 센서 데이터에 BAM 구조를 적용해 압축 효율을 추가로 높이는 연구를 진행 중입니다.</p>
    <p><a href="https://github.com/4xvgal/ChirpChirp" target="_blank">System</a> · <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">BAM Core</a></p>
  </div>
</div>

---

<div class="project-compact" id="valve-prediction">
  <div class="head">
    <h2>Encoder-LSTM 기반 산업용 밸브 유량 예측</h2>
    <div class="meta">역할: 개인 연구<span class="sep">•</span>기간: 2024.07–12<span class="sep">•</span>상태: 완료</div>
  </div>

  <div class="summary-strip">
    <div class="summary-item"><b>MAPE 0.188</b> (~98% 개선)</div>
    <div class="summary-item"><b>안정성 확보</b> 불연속 구간 해결</div>
    <div class="summary-item"><b>Robust</b> Huber Loss 적용</div>
    <div class="summary-item"><b>정규화 단순화</b> 데이터 안정성 ↑</div>
  </div>

  <div class="p-section">
    <h3>Overview</h3>
    <p>산업용 밸브의 개도율과 유량 데이터를 기반으로 <strong>고정밀 Encoder-LSTM</strong> 예측 모델을 설계했습니다. 모델 구조 최적화를 통해 실제 산업 환경에서 신뢰도 높은 예측을 달성했습니다.</p>
  </div>

  <div class="p-section">
    <h3>Context</h3>
    <p>기존 LSTM은 개도율 0 구간에서 불연속이 발생하고 이상치에 민감해 실사용에 부적합했습니다.</p>
  </div>

  <div class="p-section">
    <h3>Approach</h3>
    <ul>
      <li>계층적 특징 추출을 위한 <strong>Encoder-LSTM</strong> 구조 설계</li>
      <li>개도율 0 구간에서 <strong>시퀀스 재초기화</strong>로 불연속 제거</li>
      <li><strong>Huber 손실</strong>을 적용해 이상치에 강건한 학습 확보</li>
      <li>정규화 단순화로 안정성 및 일관성 향상</li>
    </ul>
  </div>

  <div class="p-section">
    <h3>Results</h3>
    <ul>
      <li><strong>MAPE 10 → 0.188</strong> 달성</li>
      <li>이상치·분산 완화로 산업 환경에서의 <strong>예측 신뢰성 확보</strong></li>
    </ul>
  </div>

  <details>
    <summary>Challenges &amp; Fixes</summary>
    <table>
      <thead><tr><th>문제</th><th>해결 방법</th></tr></thead>
      <tbody>
        <tr><td>개도율 0 구간에서 불연속</td><td>시퀀스 재초기화 로직 추가</td></tr>
        <tr><td>이상치 민감도 높음</td><td>Huber 손실로 안정성 확보</td></tr>
        <tr><td>데이터 정밀도 불균형</td><td>정규화 단순화로 분산 축소</td></tr>
      </tbody>
    </table>
  </details>

  <div class="p-section">
    <h3>Next</h3>
    <p>도메인별 하이퍼파라미터 최적화 및 실시간 적용 환경으로 확장할 계획입니다. (산업체 협력으로 저장소 비공개)</p>
  </div>
</div>

---

<div class="project-compact" id="ultra-low-snr">
  <div class="head">
    <h2>Ultra-Low SNR 신호 복원 및 분류 비교 연구</h2>
    <div class="meta">역할: 개인 연구<span class="sep">•</span>기간: 2025.03–현재<span class="sep">•</span>상태: 진행 중</div>
  </div>

  <div class="summary-strip">
    <div class="summary-item"><b>비교</b> 연쇄 vs MTL</div>
    <div class="summary-item"><b>데이터</b> CIFAR-10 (150K)</div>
    <div class="summary-item"><b>SNR</b> –30~–10 dB</div>
    <div class="summary-item"><b>백본</b> BAM / CAE / U-Net</div>
  </div>

  <div class="p-section">
    <h3>Overview</h3>
    <p>극저 SNR(–30~–10dB) 환경에서 복원과 분류를 동시에 향상시키기 위한 <strong>연쇄(Cascaded) vs MTL(다중 과제 학습)</strong> 비교 연구를 수행했습니다.</p>
  </div>

  <div class="p-section">
    <h3>Context</h3>
    <p>전통적 필터 기반 복원은 초저 SNR에서 성능이 급격히 저하되며, 딥러닝 기반 복원–분류 구조 중 어느 파이프라인이 더 효과적인지 근거가 부족했습니다.</p>
  </div>

  <div class="p-section">
    <h3>Approach</h3>
    <ul>
      <li><strong>백본</strong>: BAM, CAE, U-Net</li>
      <li><strong>파이프라인</strong>: 연쇄(복원→분류) vs MTL(공유 인코더·이중 디코더)</li>
      <li><strong>데이터</strong>: CIFAR-10, 노이즈 3종(Gaussian/SP/Burst)</li>
      <li><strong>지표</strong>: MSE/MAE/PSNR/Accuracy/Latency</li>
    </ul>
  </div>

  <div class="p-section">
    <h3>Results</h3>
    <ul>
      <li><strong>복원</strong>: U-Net이 뛰어남 (스킵 연결 효과)</li>
      <li><strong>분류</strong>: 고 SNR 구간에서 MTL이 우세</li>
      <li>Burst 노이즈가 가장 난이도 높음</li>
    </ul>
  </div>

  <details>
    <summary>Challenges &amp; Fixes</summary>
    <table>
      <thead><tr><th>문제</th><th>해결 방법</th></tr></thead>
      <tbody>
        <tr><td>조합 폭발</td><td>모듈형 학습·자동 로그·재현 규칙으로 관리</td></tr>
        <tr><td>손실 불균형</td><td>가중치 스케줄링으로 PSNR–Acc 균형 유지</td></tr>
        <tr><td>노이즈 현실성 부족</td><td>SNR 제어 및 혼합 노이즈 합성으로 개선</td></tr>
      </tbody>
    </table>
  </details>

  <div class="p-section">
    <h3>Next</h3>
    <p>노이즈 유형별 MTL/연쇄 모델의 적합성을 정량 분석 후, 실제 저신호 영상 복원으로 확장 예정입니다.</p>
    <p><a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">Repository</a></p>
  </div>
</div>