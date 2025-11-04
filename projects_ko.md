---
layout: page
title: 프로젝트
permalink: /projects_ko/
---

<div style="text-align: right; margin-bottom: 20px;">
  <a href="{{ '/projects' | relative_url }}" style="text-decoration: none; padding: 8px 16px; background-color: #0366d6; color: white; border-radius: 5px;">🇺🇸 English</a>
</div>

# 연구 및 개발 프로젝트

---

## 🔬 BAM 기반 페이로드 압축을 통한 IoT 통신 효율 개선 {#lora-communication}

**역할**: 학부 연구생(팀 리드) · **기간**: 2025.03–2025.06 · **상태**: 완료

**Summary**
- **Problem**: 저전력·고손실 LoRa에서 긴 페이로드로 충돌/재전송 증가 → 배터리 소모↑  
- **Approach**: Autoencoder 대신 **경량 BAM** 채택, **NumPy**로 재구현(임베디드 최적화), **Raspberry Pi + LoRa**로 E2E 검증  
- **Result**: **32 B → 20 B (62.5%)** 압축으로 **PDR +14%**, **MSE 0.0036**, **N-LOS 약 2.6 km** 필드테스트 성공

<details><summary><b>자세히 보기</b></summary>
<br/>

### 프로젝트 개요
저자원 임베디드 시스템에 최적화된 경량 페이로드 압축 모델을 설계·구현해 LoRa 네트워크 통신 효율을 개선했습니다.

### 문제 정의
저전력·고손실 환경에서 재전송/충돌로 인한 비효율과 배터리 소모가 컸고, 특히 N-LOS 장거리에서 심각했습니다.

### 기술적 접근
- **기술 선택**: Autoencoder의 연산 부담 → 저자원에 부적합. 문헌/토론을 통해 **BAM** 채택  
- **구현**: TensorFlow 대신 **NumPy**로 직접 구현(임베디드 이식성·오버헤드↓)  
- **시스템 설계**: Raspberry Pi(자원 제약) + LoRa(프로토콜 제약) 고려한 E2E 아키텍처  
- **현장 검증**: **N-LOS 약 2.6 km**, 1개월간 반복 측정(장마 등 외부 변수 고려)

### 성능 최적화
- GPS 데이터 **정수부 제거** 등 포맷 최적화로 **MSE 0.0184 → 0.0036 (≈80% 개선)**

### 기술 스택
Python, NumPy / Raspberry Pi, LoRa / Git, Linux

### 팀 & 역할
4인 팀. 모델 설계·구현·통합과 필드 테스트(테스트베드/수집/분석) 리딩. **기여도 ≈40%**

### 주요 성과
- **62.5% 압축(32 B→20 B)** → **PDR +14%**  
- **MSE 0.0036**, **N-LOS 2.6 km** 실증, Raspberry Pi 배포

### 링크
- 시스템: <a href="https://github.com/4xvgal/ChirpChirp" target="_blank">github.com/4xvgal/ChirpChirp</a>  
- 모델: <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">github.com/gwon9906/Lightweight-MF-BAM</a>

</details>

---

## 📡 Encoder-LSTM 기반 산업용 밸브 유량 예측 {#valve-prediction}

**역할**: 학부 연구생(개인) · **기간**: 2024.07–2024.12 · **상태**: 완료

**Summary**
- **Problem**: 베이스라인 LSTM **MAPE > 10**으로 실무 적용 불가  
- **Approach**: **Encoder-LSTM** 재설계, **Huber Loss**, 0% 개도 구간 **시퀀스 재초기화**, 정규화 제거(데이터 특성 반영)  
- **Result**: **MAPE 10 → 0.188 (≈98% 개선)**

<details><summary><b>자세히 보기</b></summary>
<br/>

### 프로젝트 개요
산업용 밸브 고장 진단을 위한 고정밀 유량 예측 모델을 개발했습니다.

### 문제 정의
기존 LSTM이 높은 오차(MAPE > 10)로 실용성이 낮았습니다.

### 기술적 접근
- **근본 원인 분석**: 개도 0% 지점의 불연속 → **시퀀스 재초기화**로 1차 개선  
- **아키텍처**: Autoencoder에서 영감 → **Encoder-LSTM**로 계층적 특징 추출  
- **데이터 특성 반영**: 소수점 신뢰도 낮음 → 불필요한 정규화 제거, 정수형처럼 처리  
- **강건성**: 이상치에 강한 **Huber Loss**

### 기술 스택
PyTorch / Python, Pandas, NumPy, Jupyter

### 성과
- **MAPE 10 → 0.188 (≈98% 개선)**  
- 커스텀 Encoder-LSTM 설계·구현, 데이터 파이프라인 및 실험 설계

### 링크
- 저장소: Private(산업체 협력)

</details>

---

## 💻 Ultra-Low SNR 이미지 복원 및 분류 (Sequential vs MTL 비교) {#ultra-low-snr}

**역할**: 학부 연구생(개인) · **기간**: 2025.03–현재 · **상태**: 진행 중

**Summary**
- **Goal**: **ultra-low SNR (–30 dB ~ –10 dB)** 에서 **복원+분류** 성능 향상  
- **Approach**: 복원→분류 **Sequential** vs **MTL(공유 인코더+이중 디코더)** 비교, 아키텍처(BAM/CAE/U-Net) 교차 실험  
- **Status**: 데이터 증강(15만 장), 6모델 구현·학습 완료, 최종 비교 분석 중

<details><summary><b>자세히 보기</b></summary>
<br/>

### 문제 정의
전통 신호처리로는 극저 SNR에서 복원/분류가 곤란. 딥러닝으로 한계 극복을 목표.

### 모델 패러다임
1) **Sequential**: 복원(BAM/CAE/U-Net) → 분류기  
2) **MTL**: 공유 인코더 + 복원/분류 디코더, **공동 손실**로 트레이드오프 제어

### 실험 설계
- **데이터**: CIFAR-10, **150,000장** 증강  
- **노이즈**: Gaussian / Salt-&-Pepper / Burst  
- **SNR**: –30, –25, –20, –15, –10 dB  
- **지표**: 복원(PSNR/MSE/MAE), 분류(Acc/Top-3)

### 기술 스택
TensorFlow/Keras / Python, NumPy, Pandas, Jupyter, TensorBoard  
HW: RTX 3070 Ti (8 GB), i7-12700K

### 현재 상황/예비 관찰
- U-Net: skip connection으로 복원 품질 우수  
- **MTL**: End-to-End 분류 성능 유리  
- Burst 노이즈 난이도↑, 고 SNR로 갈수록 MTL 이점↑

### 링크
- 저장소: <a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">github.com/gwon9906/Denoise-and-Classify</a>

</details>

---

## 💡 추가 경험

**학부 연구생(동의대 컴퓨터공학 연구실)** · 2022–현재  
- 신호처리/시계열, IoT & 임베디드 AI, 저자원 최적화, 산업용 AI 응용

---

<div style="text-align: center; margin-top: 40px;">
  <a href="{{ '/index_ko' | relative_url }}" style="text-decoration: none; padding: 10px 20px; background-color: #0366d6; color: white; border-radius: 5px;">← 홈으로 돌아가기</a>
</div>