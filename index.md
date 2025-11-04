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
      <a class="btn primary" href="{{ '/index_ko' | relative_url }}">🇰🇷 한국어</a>
      <a class="btn" href="{{ '/projects' | relative_url }}">Projects</a>
      <a class="btn" href="mailto:{{ site.email }}">Email</a>
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

## 💼 Skills

### AI/ML
- **Frameworks**: PyTorch, TensorFlow  
- **Specialization**: Model Optimization, LSTM, Encoder–Decoder Architecture  
- **Focus Areas**: Model Compression, Hardware-Constrained AI, Time-Series Prediction

### Programming & Tools
- **Languages**: Python, C/C++  
- **IoT/Embedded**: Raspberry Pi, LoRa Communication  
- **Dev Tools**: Git, Jupyter, Linux

---

## 🏆 Certifications
**Engineer Information Processing (정보처리기사)**  
Acquired: June 13, 2025 · Issued by: HRD Korea

---

## 🚀 Key Strengths
- **End-to-End System Design**: Hardware-aware systems (Raspberry Pi, LoRa)  
- **Model Optimization**: 62.5% payload reduction & 98% error reduction  
- **Data-Driven Problem Solving**: Strong at reading data and shaping architectures  
- **Practical Implementation**: Real-world, resource-limited deployments

---

## 📊 Highlighted Projects

<div class="project-card">
  <h3>🔬 IoT Communication Efficiency Improvement</h3>
  <p class="project-meta">LoRa · Edge AI · Payload Compression</p>
  <ul>
    <li><b>Result:</b> <b>+14% PDR</b> via BAM-based compression (<b>32B → 20B</b>, 62.5%)</li>
  </ul>

  <h4 id="lora-communication">🔬 IoT Communication Efficiency via BAM-based Payload Compression</h4>
  <p><b>Role:</b> Undergraduate Researcher & Team Lead · <b>Period:</b> 2025-03–2025-06 · <b>Status:</b> Completed</p>

  <p><b>Summary</b></p>
  <ul>
    <li><b>Problem:</b> Long payloads in low-power, high-loss LoRa → collisions/retransmissions → battery drain</li>
    <li><b>Approach:</b> Lightweight <b>BAM</b> (NumPy) on Raspberry Pi, end-to-end with LoRa</li>
    <li><b>Result:</b> <b>32 B → 20 B (62.5%)</b>, <b>PDR +14%</b>, <b>MSE 0.0036</b>, verified N-LOS (~2.6 km)</li>
  </ul>

  <details>
    <summary><b>Read more</b></summary>
    <p>Designed and implemented a lightweight payload compression model optimized for constrained embedded systems.</p>

    <h5>Technical Approach</h5>
    <ul>
      <li>Autoencoder too heavy → chose <b>BAM</b> after literature review</li>
      <li>Reimplemented core in <b>NumPy</b> for low overhead on Raspberry Pi</li>
      <li>One-month repeated field tests to mitigate weather variability</li>
    </ul>

    <h5>Optimization</h5>
    <p>GPS format fix (removed integer part) → <b>MSE 0.0184 → 0.0036 (~80% improvement)</b></p>

    <h5>Tech Stack</h5>
    <p>Python, NumPy · Raspberry Pi, LoRa · Git, Linux</p>

    <h5>Links</h5>
    <p>
      System: <a href="https://github.com/4xvgal/ChirpChirp" target="_blank">ChirpChirp</a><br>
      Model: <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">Lightweight-MF-BAM</a>
    </p>
  </details>
</div>

<div class="project-card">
  <h3>📡 Industrial Valve Flow Prediction</h3>
  <p class="project-meta">Time-Series · Encoder-LSTM</p>
  <ul>
    <li><b>Result:</b> <b>MAPE 10 → 0.188</b> (~98% improvement) via Encoder–LSTM</li>
  </ul>
  <a class="btn" href="{{ '/projects#valve-prediction' | relative_url }}">View Details</a>
</div>

---

## 💻 Currently Working On

### Ultra-Low SNR Signal Restoration & Classification
**Period**: March 2025 – Present  
Comparing cascaded vs. MTL architectures to improve restoration and classification under ultra-low SNR.

**Tech Stack**: TensorFlow, Custom CNN, BAM, CAE, U-Net  
🔗 <a class="btn" href="{{ '/projects#ultra-low-snr' | relative_url }}">View Details</a>
<a class="btn" href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">GitHub</a>

---

## 📫 Contact
- **Email**: <a href="mailto:{% raw %}{{ site.email }}{% endraw %}">{% raw %}{{ site.email }}{% endraw %}</a>  
- **GitHub**: <a href="https://github.com/{% raw %}{{ site.github_username }}{% endraw %}" target="_blank">@{% raw %}{{ site.github_username }}{% endraw %}</a>  
- **Blog**: <a href="{% raw %}{{ site.blog_url }}{% endraw %}" target="_blank">{% raw %}{{ site.blog_url }}{% endraw %}</a>  
- **Phone**: +82-10-3414-9906

<div style="text-align: center; margin-top: 40px;">
  <a href="{{ '/projects' | relative_url }}" class="btn primary" style="font-weight: bold;">View All Projects →</a>
</div>