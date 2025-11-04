---
layout: page
title: Projects
permalink: /projects/
---

<div style="text-align: right; margin-bottom: 20px;">
  <a href="/projects_ko" style="text-decoration: none; padding: 8px 16px; background-color: #0366d6; color: white; border-radius: 5px;">🇰🇷 한국어</a>
</div>

# Research & Development Projects

---

## 🔬 <a name="lora-communication"></a>IoT Communication Efficiency Improvement via BAM-based Payload Compression

**Role**: Undergraduate Researcher & Team Lead  
**Period**: 2023 - 2024  
**Status**: Completed

### Overview
Led a research project to improve communication efficiency in low-power, high-loss IoT networks by designing and implementing a lightweight payload compression model optimized for resource-constrained embedded systems.

### Problem Statement
Frequent retransmissions in low-power, high-loss networks caused communication inefficiency and excessive battery consumption, particularly in long-range LoRa networks operating in non-line-of-sight (N-LOS) environments.

### Technical Approach

**Technology Selection**
- Analyzed existing solutions (Autoencoder) and identified their unsuitability for resource-constrained environments
- Through extensive paper study and team discussions, selected BAM (Bidirectional Associative Memory) as the optimal model for low-resource IoT devices
- Implemented the model from scratch using **NumPy** instead of TensorFlow to ensure portability and minimal computational overhead on Raspberry Pi

**System Design & Implementation**
- Designed end-to-end system architecture considering hardware constraints (Raspberry Pi) and communication protocol limitations (LoRa)
- Built testbed infrastructure and developed data analysis pipeline
- Collaborated with team members through clear role distribution: I led model reconstruction and testbed development, while team members handled sensor data collection and preprocessing

**Field Testing & Validation**
- Conducted rigorous field tests in intentionally challenging N-LOS environment (~2.6km distance)
- Extended testing period to one month to account for external variables (weather conditions)
- Performed repeated measurements to ensure data reliability

**Performance Optimization**
- Identified data format issues affecting model accuracy
- Optimized data preprocessing (e.g., removing integer part of GPS data)
- Achieved **80%+ MSE improvement** (0.0184 → 0.0036)

### Technical Stack
- **Languages**: Python, NumPy
- **Hardware**: Raspberry Pi, LoRa modules
- **ML Model**: Bidirectional Associative Memory (BAM)
- **Tools**: Git, Linux

### Key Achievements
- ✅ **14% PDR (Packet Delivery Ratio) improvement** through 62.5% payload compression (32 Bytes → 20 Bytes)
- ✅ **MSE 0.0036** - minimal information loss
- ✅ Validated in real-world N-LOS environment over ~2.6km distance
- ✅ Successfully deployed on resource-constrained Raspberry Pi platform

### Future Improvements
Identified potential for higher compression efficiency by applying BAM to sensor data with more predictable patterns (e.g., CPU temperature, humidity) compared to dynamic data (GPS/IMU).

---

## 📡 <a name="valve-prediction"></a>Industrial Valve Flow Rate Prediction using Encoder-LSTM

**Role**: Undergraduate Researcher  
**Period**: 2022 - 2023  
**Status**: Completed

### Overview
Developed a high-precision flow rate prediction model for industrial valve fault diagnosis, achieving a **98% improvement** in prediction accuracy through systematic data analysis and custom architecture design.

### Problem Statement
Initial baseline LSTM model showed poor practical performance with MAPE (Mean Absolute Percentage Error) exceeding 10, making it unsuitable for real-world industrial applications.

### Technical Approach

**Root Cause Analysis**
- Systematically diagnosed limitations of baseline LSTM architecture
- Identified prediction errors at valve opening rate = 0, where sequences became discontinuous
- Implemented sequence reinitialization at zero points → achieved first-stage performance improvement

**Architecture Innovation**
- Designed custom **Encoder-LSTM architecture** inspired by Autoencoder structure
- Focused on extracting essential features from time-series data
- Overcame limitations of vanilla LSTM through hierarchical feature learning

**Data-Driven Optimization**
- Analyzed data characteristics: recognized that float values had low decimal precision
- Removed unnecessary normalization and treated data as integer-like values
- Reduced model complexity while improving stability
- Adopted **Huber loss function** for robustness against outliers

**Experimental Methodology**
- Conducted systematic experiments to validate each optimization step
- Analyzed data splitting methods and their impact on model performance
- Iteratively refined preprocessing pipeline based on data insights

### Technical Stack
- **Framework**: PyTorch
- **Models**: LSTM, Encoder-LSTM (custom architecture)
- **Loss Function**: Huber Loss
- **Tools**: Python, Pandas, NumPy, Jupyter

### Key Achievements
- ✅ **98%+ improvement in prediction accuracy**: MAPE 10 → 0.188
- ✅ Designed and implemented custom Encoder-LSTM architecture
- ✅ Demonstrated strong data analysis and architecture design capabilities
- ✅ Proved practical applicability for industrial fault diagnosis

### Key Learnings
- Importance of understanding data characteristics before modeling
- Value of systematic experimentation and iterative refinement
- Ability to design custom architectures based on problem requirements

---

## 💡 Additional Experience

### Undergraduate Research Assistant
**Institution**: Dong-eui University Computer Engineering Lab  
**Period**: 2022 - Present

Participated in multiple research projects focusing on:
- Signal processing and time-series prediction
- IoT systems and embedded AI
- Model optimization for resource-constrained environments
- Practical problem-solving in industrial settings

---

## 🎯 Technical Competencies

### Core Strengths
1. **End-to-End System Design**: Experience building complete systems from hardware integration to model deployment
2. **Model Optimization**: Proven ability to compress models (62.5% payload reduction) and improve performance (98% error reduction)
3. **Data Analysis**: Strong skills in identifying data patterns and designing appropriate preprocessing strategies
4. **Problem Solving**: Systematic approach to diagnosing issues and implementing effective solutions

### Domain Expertise
- Time-series prediction and analysis
- IoT communication protocols (LoRa)
- Embedded AI on resource-constrained devices
- Industrial AI applications

---

<div style="text-align: center; margin-top: 40px;">
  <a href="/" style="text-decoration: none; padding: 10px 20px; background-color: #0366d6; color: white; border-radius: 5px;">← Back to Home</a>
</div>
