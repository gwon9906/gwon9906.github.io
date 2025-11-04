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
**Period**: March 2025 - June 2025  
**Status**: Completed

### Overview
Leading a research project to improve communication efficiency in low-power, high-loss IoT networks by designing and implementing a lightweight payload compression model optimized for resource-constrained embedded systems.

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

### Team & My Contribution
- **Team Size**: 4 members
- **My Role**: 
  - Led BAM model design, implementation, and integration
  - Conducted entire field testing process (testbed setup, data collection, analysis)
  - Responsible for all BAM-related technical decisions and optimizations
- **Contribution**: ~40% (Model development & Field validation lead)

### Challenges & Solutions

**Challenge 1: Environmental Variability in Field Testing**
- **Problem**: Weather conditions (rainy season) caused inconsistent measurements and data reliability issues
- **Solution**: Extended testing period from 2 weeks to 1 month and performed repeated measurements to ensure statistical significance and data reliability

**Challenge 2: Model Performance Optimization**
- **Problem**: Initial model showed poor accuracy (MSE 0.0184) due to suboptimal data format
- **Solution**: Analyzed data characteristics and optimized preprocessing by removing integer parts of GPS data, achieving 80%+ MSE improvement (0.0184 → 0.0036)

**Challenge 3: Resource Constraints on Embedded Device**
- **Problem**: Autoencoder was computationally expensive for Raspberry Pi
- **Solution**: Through literature review and team discussion, selected and implemented lightweight BAM model using NumPy instead of TensorFlow, ensuring real-time operation on resource-constrained hardware

### Key Achievements
- ✅ **14% PDR (Packet Delivery Ratio) improvement** through 62.5% payload compression (32 Bytes → 20 Bytes)
- ✅ **MSE 0.0036** - minimal information loss
- ✅ Validated in real-world N-LOS environment over ~2.6km distance
- ✅ Successfully deployed on resource-constrained Raspberry Pi platform

### Future Improvements
Identified potential for higher compression efficiency by applying BAM to sensor data with more predictable patterns (e.g., CPU temperature, humidity) compared to dynamic data (GPS/IMU).

### Links
🔗 **Project Repository**: [github.com/4xvgal/ChirpChirp](https://github.com/4xvgal/ChirpChirp) - Full system implementation  
🔗 **BAM Model**: [github.com/gwon9906/Lightweight-MF-BAM](https://github.com/gwon9906/Lightweight-MF-BAM) - Core compression model

---

<div style="margin-bottom: 60px;"></div>

## 📡 <a name="valve-prediction"></a>Industrial Valve Flow Rate Prediction using Encoder-LSTM

**Role**: Undergraduate Researcher  
**Period**: July 2024 - December 2024  
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

### Team & My Contribution
- **Team Size**: Individual project under professor's guidance
- **Supervision**: Received directional feedback and validation from advisor on methodology and results
- **My Role**: 
  - Complete ownership of model design and implementation
  - Data analysis and preprocessing pipeline development
  - Experimental design and performance optimization
- **Contribution**: 100% (Independent research with advisory support)

### Challenges & Solutions

**Challenge 1: Sequence Discontinuity at Zero Points**
- **Problem**: Model showed prediction errors when valve opening rate = 0, causing sequence discontinuities
- **Solution**: Implemented sequence reinitialization at zero points, achieving first-stage performance improvement

**Challenge 2: Baseline Model Limitations**
- **Problem**: Vanilla LSTM showed insufficient accuracy (MAPE > 10) for industrial applications
- **Solution**: Designed custom Encoder-LSTM architecture inspired by Autoencoder structure to better capture time-series features through hierarchical learning

**Challenge 3: Data Characteristics Mismatch**
- **Problem**: Float-format data had low decimal precision, causing unnecessary model complexity
- **Solution**: Analyzed data distribution patterns and treated data as integer-like values by removing normalization, reducing model complexity while improving stability

**Challenge 4: Outlier Robustness**
- **Problem**: MSE loss was sensitive to outliers in industrial sensor data
- **Solution**: Adopted Huber loss function for better robustness against outliers while maintaining gradient stability

### Key Achievements
- ✅ **98%+ improvement in prediction accuracy**: MAPE 10 → 0.188
- ✅ Designed and implemented custom Encoder-LSTM architecture
- ✅ Demonstrated strong data analysis and architecture design capabilities
- ✅ Proved practical applicability for industrial fault diagnosis

### Key Learnings
- Importance of understanding data characteristics before modeling
- Value of systematic experimentation and iterative refinement
- Ability to design custom architectures based on problem requirements

### Links
🔗 **Project Repository**: Private (Industrial collaboration)

---

<div style="margin-bottom: 60px;"></div>

## 💻 Currently Working On

### 🌟 <a name="ultra-low-snr"></a>Ultra Low SNR Signal Restoration & Classification

**Role**: Undergraduate Researcher  
**Period**: March 2025 - Present  
**Status**: In Progress

### Overview
Researching deep learning models for signal restoration and classification in extremely low signal-to-noise ratio (Ultra Low SNR) environments. Conducting comparative analysis between cascaded models and Multi-Task Learning (MTL) architectures to identify optimal approaches for handling degraded signals.

### Problem Statement
In ultra-low SNR environments (SNR: -30dB to -10dB), traditional signal processing methods fail to effectively restore and classify signals. This research aims to leverage deep learning to overcome these limitations and enable reliable signal processing in extreme noise conditions.

### Technical Approach

**Model Architectures Under Investigation**
1. **Sequential (Cascaded) Models**: Two-stage approach with separate restoration and classification
   - Stage 1: Restoration using BAM/CAE/U-Net
   - Stage 2: Classification using trained classifier
   
2. **Multi-Task Learning (MTL) Models**: End-to-end joint optimization
   - Shared encoder for feature extraction
   - Dual decoders for restoration and classification
   - Joint loss function balancing both tasks

**Restoration Architectures**
- **BAM (Bidirectional Associative Memory)**: Dense architecture with bidirectional connections
- **CAE (Convolutional Autoencoder)**: Convolutional layers for spatial feature learning
- **U-Net**: Skip connections for preserving fine-grained details

**Experimental Design**
- **Dataset**: CIFAR-10 augmented to 150,000 images
- **Noise Types**: Gaussian, Salt & Pepper, Burst noise
- **SNR Levels**: -30dB, -25dB, -20dB, -15dB, -10dB
- **Evaluation Metrics**: 
  - Restoration: MSE, MAE, PSNR (dB)
  - Classification: Accuracy, Top-3 Accuracy

### Technical Stack
- **Framework**: TensorFlow/Keras
- **Models**: Custom CNN, ResNet, Transformer-based architectures, BAM, CAE, U-Net
- **Tools**: Python, NumPy, Pandas, Jupyter, TensorBoard
- **Hardware**: NVIDIA RTX 3070 Ti 8GB, Intel i7-12700K

### Team & My Contribution
- **Team Size**: Individual research project
- **Supervision**: Professor guidance on research direction
- **My Role**:
  - Complete model architecture design and implementation (6 models)
  - Large-scale data augmentation pipeline (150K images)
  - Comprehensive experimental framework development
  - Statistical analysis and performance evaluation across multiple conditions

### Current Progress
- ✅ Data preprocessing and augmentation completed
- ✅ 6 models implemented and trained (Sequential BAM/CAE/U-Net, MTL BAM/CAE/U-Net)
- ✅ Comprehensive evaluation framework with noise-type and SNR-level analysis
- 🔄 Final comparative analysis and paper writing in progress

### Preliminary Findings
- U-Net shows superior restoration performance due to skip connections
- MTL models demonstrate better end-to-end classification performance
- Performance varies significantly across noise types (Burst noise most challenging)
- Higher SNR levels show greater benefits from MTL approach

### Challenges & Solutions

**Challenge 1: Large-Scale Experiment Management**
- **Problem**: Managing and training 6 different models across multiple architectures (Sequential vs MTL) and noise conditions (3 types × 5 SNR levels) required significant computational resources and careful experiment tracking
- **Solution**: Implemented modular training pipeline with separate notebooks for each phase, automated result collection and analysis, and systematic memory management between training phases to ensure reproducibility

**Challenge 2: Model Architecture Selection for Ultra-Low SNR**
- **Problem**: Determining optimal architecture (BAM vs CAE vs U-Net) and learning paradigm (Sequential vs MTL) for extreme noise conditions where traditional methods fail
- **Solution**: Conducted comprehensive literature review and systematic comparison across all combinations, implemented custom evaluation framework that analyzes performance by noise type and SNR level to identify architecture-specific strengths

**Challenge 3: Data Augmentation for Realistic Noise Simulation**
- **Problem**: Creating realistic noise conditions that accurately represent ultra-low SNR environments while maintaining dataset diversity
- **Solution**: Implemented sophisticated data augmentation pipeline scaling CIFAR-10 to 150,000 images with multiple noise types (Gaussian, Salt & Pepper, Burst) and precise SNR control across 5 levels (-30dB to -10dB)

**Challenge 4: Multi-Task Loss Balancing**
- **Problem**: Finding optimal weights for restoration and classification losses in MTL models to ensure both tasks perform well without one dominating
- **Solution**: Experimented with different loss weight combinations and implemented joint optimization strategies, analyzing trade-offs between restoration quality (PSNR) and classification accuracy

### Links
🔗 **Project Repository**: [github.com/gwon9906/Denoise-and-Classify](https://github.com/gwon9906/Denoise-and-Classify)  
📊 **Tech Stack**: TensorFlow, Custom Neural Architectures

---

<div style="margin-bottom: 60px;"></div>

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

<div style="margin-bottom: 30px;"></div>

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
