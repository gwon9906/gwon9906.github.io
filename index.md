---
layout: home
title: "Haegwon Lee | AI/ML Engineering"
permalink: /
---

<div class="hero-compact">
  <div class="hero-text">
    <h1>Haegwon Lee</h1>
    <p class="tagline">AI/ML Engineering · Edge/Embedded Optimization</p>
    <div class="hero-cta">
      <a class="btn hero-outline" href="{{ '/index_ko' | relative_url }}">🇰🇷 한국어</a>
      <a class="btn hero-primary" href="{{ '/projects' | relative_url }}">Projects</a>
      <a class="btn hero-contrast" href="mailto:gwon99065@naver.com">Email</a>
    </div>
  </div>
</div>

# AI/ML Engineering Student

I pursue both efficiency and practicality in AI models.  
By understanding hardware constraints and analyzing data characteristics,  
I design and implement optimized AI solutions.

As an undergraduate researcher in Computer Engineering, I focus on building practical AI systems for resource-constrained environments—from IoT communication optimization to industrial AI—specializing in model compression and system-level optimization.

---

## 🎓 Education
**Dong-eui University** — B.S. in Computer Engineering  
Expected Graduation: 2026

---

## 📊 Highlighted Projects

<div class="project-card">
  <h3>🔬 IoT Communication Efficiency via BAM-based Compression</h3>
  <p class="project-meta">LoRa · Edge AI · Payload Compression</p>
  <p>
    Designed a lightweight BAM compressor tailored to Raspberry Pi and LoRa protocol limits.
    The model reduces payload length without costly inference, cutting retransmissions in long-range NLOS scenarios.
    Field-tested ~2.6 km to validate robustness in real conditions.
  </p>
  <ul>
    <li><b>Result:</b> 32B → 20B (62.5%), <b>PDR +14%</b>, MSE 0.0036</li>
  </ul>
  <a class="btn primary" href="{{ '/projects#lora-communication' | relative_url }}">View Details</a>
</div>

<div class="project-card">
  <h3>📡 Industrial Valve Flow Prediction</h3>
  <p class="project-meta">Time-Series · Encoder-LSTM · Huber Loss</p>
  <p>
    Re-architected a baseline into an Encoder-LSTM to handle zero-opening discontinuities and noisy sensors.
    Simplified preprocessing (no redundant normalization) matched low-precision floats and improved stability with Huber loss.
    Built an evaluation pipeline focused on industrial fault-diagnosis readiness.
  </p>
  <ul>
    <li><b>Result:</b> <b>MAPE 10 → 0.188</b> (~98% improvement)</li>
  </ul>
  <a class="btn primary" href="{{ '/projects#valve-prediction' | relative_url }}">View Details</a>
</div>

<div class="project-card">
  <h3>💻 Ultra-Low SNR Restoration & Classification</h3>
  <p class="project-meta">MTL vs. Cascaded · CIFAR-10 (150k) · U-Net/BAM/CAE</p>
  <p>
    Systematically compare cascaded restoration+classifier vs. MTL with a shared encoder and dual decoders.
    Experiments span three noise types and five SNR levels to identify when end-to-end learning beats staged pipelines.
    Early trends: U-Net restores best; MTL improves classification at higher SNRs.
  </p>
  <ul>
    <li><b>Status:</b> 6 models trained; comparative analysis in progress</li>
  </ul>
  <a class="btn primary" href="{{ '/projects#ultra-low-snr' | relative_url }}">View Details</a>
</div>

---

## 💼 Skills
- **AI/ML**: PyTorch, TensorFlow · Model Optimization, LSTM, Encoder–Decoder  
- **Embedded/IoT**: Raspberry Pi, LoRa Communication  
- **Tools**: Python, C/C++, Git, Jupyter, Linux

---

## 🏆 Certifications
**Engineer Information Processing (정보처리기사)** — June 13, 2025 (HRD Korea)

---

## 🚀 Strengths
- End-to-End system design (hardware-aware)  
- Compression & optimization in constrained settings  
- Data-driven architecture decisions  
- Practical deployments

---

## 📫 Contact
- **Email**: <a href="mailto:gwon99065@naver.com">gwon99065@naver.com</a>  
- **GitHub**: <a href="https://github.com/gwon9906" target="_blank">@gwon9906</a>  
- **Blog**: <a href="https://latetime.tistory.com/" target="_blank">https://latetime.tistory.com/</a>