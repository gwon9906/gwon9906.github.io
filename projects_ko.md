---
layout: page
title: 프로젝트
permalink: /projects_ko/
---

# 🔬 BAM 기반 페이로드 압축을 통한 IoT 통신 효율 개선 {#lora-communication}

## 🧩 What — 프로젝트 개요
저자원 임베디드 시스템(Raspberry Pi)에서 동작하는 **BAM 기반 경량 압축 모델**을 설계하여 LoRa 네트워크의 통신 효율을 개선했습니다.  
**62.5% 압축**과 **PDR 14% 향상**을 실환경(N-LOS 2.6km)에서 검증했습니다.

## 💡 Why — 문제 배경
저전력·고손실 환경의 LoRa 통신은 긴 페이로드로 인해 재전송과 충돌이 잦고, 배터리 소모가 커졌습니다.  
기존 Autoencoder 기반 압축은 Raspberry Pi에서 과도한 연산량과 메모리 사용으로 실시간 동작이 어려웠습니다.

## ⚙️ How — 접근 및 구현
- **모델 선택**: Autoencoder 대신 **BAM(Bidirectional Associative Memory)** 채택  
- **경량화**: TensorFlow 대신 **NumPy 직접 구현**, 연산 오버헤드 최소화  
- **시스템 구성**: 데이터 수집→압축→전송→복원→평가로 이어지는 **End-to-End 파이프라인** 구축  
- **현장 검증**: 1개월간 2.6km N-LOS 환경에서 반복 송신/측정  
- **전처리 개선**: GPS 정수부 제거 → **MSE 0.0184 → 0.0036 (80% 개선)**

**기술 스택**: Python, NumPy, Raspberry Pi, LoRa 모듈, Git, Linux

## 🚧 Challenges & Fixes
| 문제 | 해결 |
|------|------|
| 장마 등 외부 변수로 측정 불안정 | 테스트 기간 2주→1개월 연장 및 반복 측정 |
| 데이터 포맷 문제(GPS 정수부) | 전처리 수정으로 **MSE 0.0184 → 0.0036** |
| Autoencoder 과부하 | NumPy BAM으로 경량화, 실시간 동작 달성 |

## 📈 Result — 주요 성과
- **62.5% 압축(32B→20B)** → **PDR 14% 향상**  
- **MSE 0.0036**, 정보 손실 최소화  
- 저자원 하드웨어 기반 실시간 동작 검증  

## 🔎 So What — 의의 및 확장
- **배터리 효율 및 전송 안정성 향상**, 장거리 LoRa 환경에서 재전송 감소  
- 저자원 AI 모델의 **실제 IoT 네트워크 적용 가능성** 입증  
- PyTorch 기반 양자화 버전으로 **NPU (Furiosa)** 실험 예정

**링크**  
- 전체 시스템: <https://github.com/4xvgal/ChirpChirp>  
- BAM 핵심: <https://github.com/gwon9906/Lightweight-MF-BAM>

---

# 📡 Encoder-LSTM 기반 산업용 밸브 유량 예측 {#valve-prediction}

## 🧩 What — 프로젝트 개요
산업용 밸브 고장 진단을 위한 **Encoder-LSTM 기반 예측 모델**을 설계했습니다.  
데이터 특성 분석과 구조 최적화를 통해 **MAPE 10 → 0.188(약 98% 개선)**을 달성했습니다.

## 💡 Why — 문제 배경
기존 LSTM은 개도율 0 구간에서 시퀀스 불연속이 발생하고, 이상치에 민감했습니다.  
이에 따라 **실제 산업 현장에 적용하기 어려운 불안정성**이 존재했습니다.

## ⚙️ How — 접근 및 구현
- **아키텍처 개선**: Autoencoder 구조에서 영감을 받은 **Encoder-LSTM** 설계  
- **시퀀스 재초기화 로직**으로 0 구간 불연속 제거  
- **데이터 최적화**: 낮은 소수 정밀도 → 정규화 제거  
- **손실 함수 변경**: **Huber Loss** 적용으로 이상치 강건성 확보  

**기술 스택**: PyTorch, Python, NumPy, Pandas, Jupyter

## 🚧 Challenges & Fixes
| 문제 | 해결 |
|------|------|
| 개도율=0 구간 불연속 | 재초기화 로직 도입으로 예측 안정화 |
| 이상치 민감성 | Huber Loss 채택, 그래디언트 안정성 확보 |
| 데이터 정밀도 불균형 | 정규화 단순화로 분산 감소 |

## 📈 Result — 주요 성과
- **MAPE 0.188** (약 98% 개선)  
- 시계열 안정성 및 예측 일관성 확보  
- 산업용 적용 가능한 정확도 달성

## 🔎 So What — 의의 및 확장
- **산업 고장 진단의 실용적 적용 가능성** 입증  
- 데이터 특성 기반 모델링의 효과 검증  
- 도메인별 하이퍼파라미터 튜닝 및 실시간 추론 파이프라인 구축 예정

---

# 💻 Ultra-Low SNR 신호 복원 및 분류 (연쇄 vs MTL) {#ultra-low-snr}

## 🧩 What — 프로젝트 개요
초저 SNR(–30 ~ –10dB) 환경에서 **복원+분류 모델의 최적 구조(Cascaded vs MTL)**를 실험적으로 비교합니다.  
6개의 모델을 구현하여 각 노이즈·SNR 조합에서 성능을 측정했습니다.

## 💡 Why — 문제 배경
전통적 필터 기반 복원은 초저 SNR 환경에서 붕괴하며, 복원-분류 간의 최적 균형점이 불명확했습니다.  
딥러닝 기반 **MTL(E2E)** 구조가 이 한계를 극복할 가능성을 탐구했습니다.

## ⚙️ How — 접근 및 구현
- **아키텍처 비교**  
  - 복원: BAM / CAE / U-Net  
  - 파이프라인: Sequential(Cascaded) vs MTL(공유 인코더+이중 디코더)  
- **데이터셋**: CIFAR-10 증강 → 15만 장  
- **노이즈**: Gaussian, Salt & Pepper, Burst  
- **SNR**: –30, –25, –20, –15, –10dB  
- **지표**: MSE·MAE·PSNR·Accuracy·Latency  

**기술 스택**: TensorFlow/Keras, Python, NumPy, Pandas, TensorBoard, RTX 3070Ti

## 🚧 Challenges & Fixes
| 문제 | 해결 |
|------|------|
| 실험 조합 폭발 | 단계별 학습 파이프라인 및 자동 로그 수집으로 관리 |
| 복원-분류 손실 불균형 | 가중치 grid search 및 동적 스케줄링으로 안정화 |
| 노이즈 합성 현실성 부족 | SNR 제어 기반 증강으로 실제 분포 근사 |

## 📈 Result — 주요 성과
- **U-Net**이 복원에서 우수 (skip connections 효과)  
- **MTL**이 고 SNR에서 분류 정확도 향상  
- **Burst 노이즈** 환경이 가장 어려움  

## 🔎 So What — 의의 및 확장
- 초저 SNR 환경에서 **E2E vs 연쇄형 모델의 우위 조건**을 정량 비교  
- 향후 **논문화 및 PyTorch 포팅/양자화 실험** 진행 중

**링크**  
<https://github.com/gwon9906/Denoise-and-Classify>


---

# 💻 Ultra-Low SNR 신호 복원 및 분류 (연쇄 vs MTL) {#ultra-low-snr}
...  ← (위 내용 동일)

---

# 🧠 기타 연구 경험 (Research Experience)

**소속**: 동의대학교 컴퓨터공학과 AI 연구실 (2024 – 현재)  
**역할**: 학부 연구생 / AI 시스템 개발 및 통신 최적화 연구 참여

### 🔹 연구 내용
- **IoT 시스템 및 임베디드 AI** : 저전력 환경에서 AI 경량화 모델 적용  
- **신호 처리 및 시계열 예측** : 센서 데이터 이상 검출 및 예측 모델링  
- **모델 최적화 및 BAM 연구** : 다층 BAM 구조를 활용한 데이터 압축 효율 향상  
- **산업 현장형 AI 솔루션** : 실제 센서 데이터를 활용한 AI 응용 검증  

### 🔹 성과 및 역할
- LoRa 통신 실험 및 데이터 수집 자동화 스크립트 제작  
- 딥러닝 모델 경량화 및 TensorFlow → NumPy 포팅  
- 연구 결과를 논문화 중 (“Low-SNR Restoration & MTL Comparative Study”)

---

<div style="text-align:center;margin-top:40px;">
  <a href="/index_ko" class="btn primary" style="font-weight:bold;">← 홈으로 돌아가기</a>
</div>