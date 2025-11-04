---
layout: page
title: Projects
permalink: /projects/
---

# 🔬 <a name="lora-communication"></a>Improving IoT Communication Efficiency via BAM-based Payload Compression

**Role**: Undergraduate Researcher & Team Lead  
**Period**: Mar 2025 – Jun 2025  
**Status**: Completed  

### Overview
Designed and implemented a lightweight payload compression model optimized for low-resource embedded systems to enhance communication efficiency in low-power, high-loss IoT networks. Focused on **real-time performance, low memory usage, and minimal latency** for Edge deployment.

### Problem Definition
In LPWA networks, long payloads frequently cause retransmissions and packet collisions, leading to severe power loss—especially in **Non-Line-of-Sight (N-LOS)** environments over long LoRa ranges.

### Technical Approach

**Model Selection**
- Determined **Autoencoder** unsuitable due to heavy computation on Raspberry Pi.  
- Selected **BAM (Bidirectional Associative Memory)** as a lightweight alternative.  
- Implemented directly in **NumPy** instead of TensorFlow for portability and minimal dependencies.

**System Design & Implementation**
- Built end-to-end architecture reflecting LoRa protocol constraints (ToA, DR) and Raspberry Pi’s limited hardware (CPU-only, low RAM).  
- Established full pipeline: data acquisition → compression → transmission → reconstruction → evaluation.  
- Implemented experiment logging & reproducible scripting for consistent validation.

**Field Testing**
- Conducted one-month continuous outdoor experiments in 2.6 km **N-LOS** environments.  
- Repeated fixed-interval transmissions to eliminate weather variance.

**Optimization**
- Identified GPS format issues (integer part redundancy).  
- Improved preprocessing and achieved **MSE 0.0184 → 0.0036 (80 %+ reduction)**.

### Tech Stack
- **Languages/Tools**: Python, NumPy, Git, Linux  
- **Hardware/Comm**: Raspberry Pi, LoRa module  
- **ML Model**: Bidirectional Associative Memory (tied-weight structure)

### Team & Role
- **Team Size**: 4  
- **Responsibilities**:
  - Led BAM model design, implementation, and integration.  
  - Built and operated full field testbed.  
  - Defined preprocessing and logging standards.  
- **Contribution**: ~40 % (model & validation lead)

### Challenges & Solutions
- **Field Variability** → Extended test duration and repeated measurement for statistical reliability.  
- **Model Accuracy** → Optimized data format and preprocessing to reduce MSE by 80 %.  
- **Hardware Limitation** → Reimplemented in NumPy to ensure real-time operation on Pi.

### Key Results
- **62.5 % compression (32 B → 20 B)** → **+14 % PDR improvement**  
- **MSE = 0.0036**, verified over 2.6 km N-LOS  
- Fully deployed on Raspberry Pi Edge nodes  

### Future Work
- Apply BAM to periodic sensor data (e.g., temperature, humidity) for higher compression efficiency.  
- Extend to **PyTorch-based kernel & quantization experiments** for NPU optimization (Furiosa AI compatibility).

### Links
- System: <https://github.com/4xvgal/ChirpChirp>  
- Model: <https://github.com/gwon9906/Lightweight-MF-BAM>

---

<div style="margin-bottom: 60px;"></div>

## 📡 <a name="valve-prediction"></a>Industrial Valve Flow-Rate Prediction using Encoder-LSTM

**Role**: Undergraduate Researcher  
**Period**: Jul 2024 – Dec 2024  
**Status**: Completed  

### Overview
Developed a high-precision predictive model for industrial valve fault detection. Through **data-driven analysis** and architectural redesign, achieved **MAPE 10 → 0.188 (≈ 98 % improvement)**.

### Problem Definition
Baseline LSTM models exhibited discontinuity around valve opening = 0 and were sensitive to sensor outliers, making them unsuitable for real-world deployment.

### Technical Approach

**Root Cause Analysis**
- Identified sequence discontinuity at valve = 0 → prediction breakdown.  
- Discovered low decimal precision in float data → excessive normalization noise.

**Architecture Innovation**
- Introduced a custom **Encoder-LSTM** for hierarchical feature extraction.  
- Implemented sequence re-initialization logic to handle zero-segments.

**Data Optimization**
- Removed unnecessary normalization, treating floats as integers → improved stability.  
- Adopted **Huber Loss** for outlier robustness and smoother gradients.

**Experimental Methodology**
- Layered train/validation splits to avoid leakage.  
- Performed **Ablation** on LSTM vs Encoder-LSTM, MSE vs Huber.  
- Evaluated accuracy, latency, and variance.

### Tech Stack
- **Framework**: PyTorch  
- **Tools**: Python, Pandas, NumPy, Jupyter  

### Team & Role
- Individual research under faculty supervision.  
- Owned full model & data pipeline, experimentation, and reporting.

### Challenges & Solutions
- **Discontinuity** → Resolved via sequence re-init logic.  
- **Outlier Sensitivity** → Adopted Huber Loss.  
- **Low Precision** → Simplified normalization to reduce variance.

### Key Results
- **MAPE 10 → 0.188 (≈ 98 % improvement)**  
- Stable Encoder-LSTM architecture validated for industrial use.

### Key Learnings
- Importance of data-driven architecture design.  
- Value of ablation-based iterative improvement.  
- Need to consider deployment constraints (latency, robustness).

### Link
- Repository: Private (Industry collaboration)

---

<div style="margin-bottom: 60px;"></div>

## 💻 In Progress

### 🌟 <a name="ultra-low-snr"></a>Ultra-Low SNR Signal Restoration and Classification

**Role**: Undergraduate Researcher  
**Period**: Mar 2025 – Present  
**Status**: Ongoing  

### Overview
Researching deep-learning-based restoration & classification under **Ultra-Low SNR (–30 to –10 dB)** conditions.  
Comparing **Cascaded (two-stage)** and **Multi-Task Learning (MTL)** architectures to determine optimal strategies for extreme noise.

### Problem Definition
Traditional filtering or rule-based methods fail in ultra-low-SNR domains. Determining when **E2E (MTL)** outperforms sequential pipelines remains an open question.

### Technical Approach

**Architectures**
- Restoration backbones: **BAM**, **CAE**, **U-Net**  
- Pipelines: **Cascaded (Restoration → Classification)** vs **MTL (Shared Encoder + Dual Decoder)**  

**Experimental Design**
- **Dataset**: 150 K CIFAR-10 images with augmentation  
- **Noise**: Gaussian, Salt & Pepper, Burst  
- **SNR Levels**: –30, –25, –20, –15, –10 dB  
- **Metrics**: MSE, MAE, PSNR, Accuracy, Top-3, Latency, Memory usage  

### Current Progress
- Data augmentation & preprocessing complete  
- Six models (Sequential + MTL variants) trained  
- Unified evaluation framework established → final comparison in progress  

### Preliminary Findings
- **U-Net** shows best restoration via skip connections  
- **MTL** models outperform at higher SNRs  
- **Burst** noise is the most challenging type  

### Tech Stack
- **Framework**: TensorFlow / Keras  
- **Tools**: Python, NumPy, Pandas, Jupyter, TensorBoard  
- **Hardware**: RTX 3070 Ti (8 GB), Intel i7-12700K  

### Role & Contributions
- Designed and implemented all six architectures and pipelines  
- Built automated augmentation and evaluation system  
- Conducted statistical analysis across noise types and levels  

### Challenges & Solutions
- **Experiment Scalability** → Modular notebooks, structured logs, auto aggregation for reproducibility.  
- **Loss Balancing** → Tuned loss weights and dynamic scheduling to avoid task dominance, analyzed **PSNR vs Accuracy trade-offs**.  
- **Realistic Noise Simulation** → Controlled SNR distribution and type mixing to maintain dataset diversity.

### Links
- Repository: <https://github.com/gwon9906/Denoise-and-Classify>  
- Tech Stack: TensorFlow, Custom CNN Architectures  

---

<div class="project-card">
  <h3>💡 Additional Research Experience</h3>
  <p>Undergraduate Research Assistant – Dong-Eui University (2024 – Present)</p>
  <ul>
    <li>Signal Processing and Time-Series Prediction</li>
    <li>IoT Systems and Embedded AI</li>
    <li>Model Optimization for Low-Power Devices</li>
    <li>Industrial AI and Practical System Design</li>
  </ul>
</div>

---

<div style="text-align: center; margin-top: 40px;">
  <a href="/index" class="btn primary" style="font-weight: bold;">← Back to Home</a>
</div>