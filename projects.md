---
layout: page
title: Projects
permalink: /projects/
---

# 🔬 IoT Communication Efficiency via BAM-based Payload Compression {#lora-communication}

## 🧩 What — Overview
Designed a **lightweight BAM-based compression model** for LoRa networks to reduce retransmissions and power drain.  
Achieved **62.5% compression** and **+14% PDR** under real-world N-LOS (2.6 km) conditions.

## 💡 Why — Background
Low-power, high-loss LoRa links suffer from long payloads → collisions, retransmissions, and battery drain.  
Traditional Autoencoders are too heavy for Raspberry Pi.

## ⚙️ How — Method & Implementation
- **Model**: Selected **BAM (Bidirectional Associative Memory)** for low-resource use  
- **Implementation**: Rewrote in **NumPy** for minimal dependency  
- **System**: End-to-end pipeline (capture → compress → transmit → restore → evaluate)  
- **Field Testing**: 1-month N-LOS (2.6 km) campaign, repeated TX at fixed intervals  
- **Preprocessing**: GPS integer issue fixed → **MSE 0.0184 → 0.0036 (80%+)**

**Stack**: Python, NumPy, Raspberry Pi, LoRa Module, Git, Linux

## 🚧 Challenges & Fixes
| Challenge | Solution |
|------------|-----------|
| Field variance | Extended test duration & repeated measures |
| Format inconsistency (GPS) | Preprocessing fix → **MSE ↓** |
| Resource overhead | NumPy BAM enables real-time inference |

## 📈 Result
- **62.5% compression (32B→20B)** → **+14% PDR**  
- **MSE 0.0036**, verified in N-LOS 2.6 km  
- Real-time operation on Raspberry Pi

## 🔎 So What — Impact
- Demonstrated **deployable learned compression** on embedded hardware  
- Improves LoRa reliability & battery life  
- Future: PyTorch kernel & quantization for **NPU (Furiosa)** deployment

**Links**  
System: <https://github.com/4xvgal/ChirpChirp>  
Core Model: <https://github.com/gwon9906/Lightweight-MF-BAM>

---

# 📡 Industrial Valve Flow Prediction via Encoder-LSTM {#valve-prediction}

## 🧩 What — Overview
Developed a **custom Encoder-LSTM** for industrial valve fault diagnosis.  
Achieved **98% improvement (MAPE 10 → 0.188)** with robust time-series prediction.

## 💡 Why — Background
Vanilla LSTM failed near zero-opening segments and was unstable against sensor outliers.

## ⚙️ How — Method & Implementation
- **Architecture**: Designed Encoder-LSTM (hierarchical feature extraction)  
- **Logic**: Added sequence reinit at valve=0  
- **Loss**: Switched to **Huber Loss** for outlier robustness  
- **Data**: Removed unnecessary normalization for low-precision floats

**Stack**: PyTorch, Python, NumPy, Pandas, Jupyter

## 🚧 Challenges & Fixes
| Challenge | Solution |
|------------|-----------|
| Sequence discontinuity | Sequence reinit logic solved instability |
| Outlier sensitivity | Adopted Huber Loss |
| Data precision mismatch | Simplified normalization |

## 📈 Result
- **MAPE 0.188**, consistent predictions across sequences  
- Enhanced stability and industrial deployability

## 🔎 So What — Impact
- Validated **data-first architectural design** for robust time-series models  
- Applicable to real-world industrial fault detection  
- Future: domain-specific tuning & real-time inference

---

# 💻 Ultra-Low SNR Restoration & Classification (Cascaded vs MTL) {#ultra-low-snr}

## 🧩 What — Overview
Compared **Cascaded vs Multi-Task Learning (MTL)** architectures for –30~–10 dB SNR restoration & classification.  
Implemented 6 models (BAM, CAE, U-Net × Cascaded/MTL).

## 💡 Why — Background
Traditional filters collapse under ultra-low SNR; the optimal **joint vs sequential** paradigm remains unclear.

## ⚙️ How — Method & Implementation
- **Backbones**: BAM / CAE / U-Net  
- **Pipelines**: Cascaded (Restoration→Classification) vs MTL (Shared Encoder + Dual Decoder)  
- **Dataset**: CIFAR-10 → 150 K augmented samples  
- **Noise Types**: Gaussian, Salt & Pepper, Burst  
- **SNR Levels**: –30, –25, –20, –15, –10 dB  

**Stack**: TensorFlow/Keras, Python, NumPy, Pandas, TensorBoard, RTX 3070 Ti

## 🚧 Challenges & Fixes
| Challenge | Solution |
|------------|-----------|
| Massive experiment combinations | Modular pipeline + automated logging |
| Loss imbalance | Weight grid + scheduling → stable PSNR–Acc trade-off |
| Unrealistic noise | Controlled SNR injection & hybrid augmentation |

## 📈 Result
- **U-Net** best for restoration (skip connections)  
- **MTL** better classification at higher SNR  
- **Burst noise** most challenging  

## 🔎 So What — Impact
- Provides a **quantitative basis** for choosing Cascaded vs MTL under extreme noise  
- Building foundation for low-SNR inference research  
- Preparing **paper submission & PyTorch port** for real-time inference  

**Link**  
<https://github.com/gwon9906/Denoise-and-Classify>

---

# 💻 Ultra-Low SNR Restoration & Classification (Cascaded vs MTL) {#ultra-low-snr}
... ← (previous content same)

---

# 🧠 Research Experience

**Affiliation**: AI & Embedded Systems Lab, Dong-Eui University (2024 – Present)  
**Role**: Undergraduate Researcher / AI Model Optimization & IoT Systems Development

### 🔹 Focus Areas
- **IoT & Embedded AI** – Low-power model optimization for edge devices  
- **Signal Processing & Time-Series Prediction** – Fault detection and forecasting  
- **BAM Model Compression Research** – Improving payload efficiency in noisy LoRa links  
- **Industrial AI Applications** – Deployable real-world AI solutions

### 🔹 Contributions & Achievements
- Developed LoRa field test automation tools and data loggers  
- Ported TensorFlow models to NumPy for edge execution  
- Currently preparing a paper: *“Low-SNR Restoration & MTL Comparative Study”*

---

<div style="text-align:center;margin-top:40px;">
  <a href="/index" class="btn primary" style="font-weight:bold;">← Back to Home</a>
</div>