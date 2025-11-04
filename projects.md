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

<div class="project-card">
  <h3>🔬 IoT Communication Efficiency via BAM-based Payload Compression</h3>
  <p class="project-meta">LoRa · Edge AI · Payload Compression</p>
  <ul>
    <li><b>Result:</b> Payload 32B → 20B (62.5% reduction), PDR +14%</li>
  </ul>

  <h4 id="lora-communication">📡 Overview</h4>
  <p><b>Role:</b> Undergraduate Researcher & Team Lead · <b>Period:</b> Mar–Jun 2025 · <b>Status:</b> Completed</p>

  <p><b>Summary</b></p>
  <ul>
    <li><b>Problem:</b> Long payloads in low-power, high-loss LoRa networks cause retransmissions and energy waste.</li>
    <li><b>Approach:</b> Implemented a lightweight <b>BAM</b> model (NumPy) on Raspberry Pi for real-time compression.</li>
    <li><b>Result:</b> <b>32B → 20B</b> (62.5% reduction), <b>PDR +14%</b>, <b>MSE 0.0036</b>, validated in 2.6 km NLOS tests.</li>
  </ul>

  <details>
    <summary><b>Read more</b></summary>

    <h5>🔍 Technical Approach</h5>
    <ul>
      <li>Replaced heavy Autoencoder with NumPy-based <b>BAM</b>.</li>
      <li>Designed end-to-end system architecture for resource-limited Raspberry Pi.</li>
      <li>Conducted repeated NLOS field tests to ensure statistical reliability.</li>
    </ul>

    <h5>⚙️ Optimization</h5>
    <ul>
      <li>Removed integer part of GPS data → <b>MSE 0.0184 → 0.0036 (≈80% improvement)</b>.</li>
      <li>Reduced retransmissions and battery drain under LoRa protocol limits.</li>
    </ul>

    <h5>🧠 Tech Stack</h5>
    <p>Python, NumPy · Raspberry Pi, LoRa · Git, Linux</p>

    <h5>🔗 Links</h5>
    <p>
      System: <a href="https://github.com/4xvgal/ChirpChirp" target="_blank">ChirpChirp</a><br>
      Model: <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">Lightweight-MF-BAM</a>
    </p>
  </details>
</div>

---

<div class="project-card">
  <h3>📡 Industrial Valve Flow Rate Prediction using Encoder-LSTM</h3>
  <p class="project-meta">Time Series · Encoder-LSTM</p>
  <ul>
    <li><b>Result:</b> MAPE 10 → 0.188 (≈98% improvement)</li>
  </ul>

  <p><b>Role:</b> Undergraduate Researcher (Individual) · <b>Period:</b> Jul–Dec 2024 · <b>Status:</b> Completed</p>

  <p><b>Summary</b></p>
  <ul>
    <li><b>Problem:</b> Baseline LSTM model had MAPE > 10, unsuitable for industrial use.</li>
    <li><b>Approach:</b> Designed custom <b>Encoder-LSTM</b> architecture handling zero-opening discontinuities.</li>
    <li><b>Result:</b> <b>MAPE 10 → 0.188</b>, lower model complexity, stable with <b>Huber Loss</b>.</li>
  </ul>

  <details>
    <summary><b>Read more</b></summary>

    <h5>🔍 Technical Approach</h5>
    <ul>
      <li>Implemented sequence reinitialization at valve-opening = 0 to fix discontinuity.</li>
      <li>Autoencoder-inspired hierarchical <b>Encoder-LSTM</b> design for robust feature extraction.</li>
      <li>Removed redundant normalization to match low decimal precision of data.</li>
    </ul>

    <h5>🧠 Data Optimization</h5>
    <ul>
      <li>Used <b>Huber Loss</b> for outlier robustness and gradient stability.</li>
      <li>Iteratively refined preprocessing pipeline with statistical checks.</li>
    </ul>

    <h5>🧩 Tech Stack</h5>
    <p>PyTorch · Python, Pandas, NumPy, Jupyter</p>
  </details>
</div>

---

<div class="project-card">
  <h3>💻 Ultra-Low SNR Signal Restoration & Classification</h3>
  <p class="project-meta">MTL · Noise Restoration · Deep Learning</p>
  <ul>
    <li><b>Status:</b> 6 models trained · Comparative analysis and paper in progress</li>
  </ul>

  <p><b>Role:</b> Undergraduate Researcher (Individual) · <b>Period:</b> July 2025 – Present · <b>Status:</b> Ongoing</p>

  <p><b>Summary</b></p>
  <ul>
    <li><b>Problem:</b> Traditional methods fail under –30 to –10 dB SNR.</li>
    <li><b>Approach:</b> Compare <b>Cascaded</b> vs <b>MTL</b> architectures across noise types and SNR levels.</li>
    <li><b>Preliminary:</b> MTL better for high-SNR classification; U-Net superior for restoration.</li>
  </ul>

  <details>
    <summary><b>Read more</b></summary>

    <h5>🔍 Research Focus</h5>
    <ul>
      <li>Sequential (two-stage) vs MTL (shared encoder, dual decoders with joint loss).</li>
      <li>Restoration architectures compared: <b>BAM</b>, <b>CAE</b>, <b>U-Net</b>.</li>
    </ul>

    <h5>📈 Experiment Setup</h5>
    <ul>
      <li>Dataset: CIFAR-10 (150k augmented images)</li>
      <li>Noise: Gaussian, Salt & Pepper, Burst</li>
      <li>SNR Levels: –30 to –10 dB</li>
      <li>Metrics: MSE, MAE, PSNR, Accuracy, Top-3 Accuracy</li>
    </ul>

    <h5>🧠 Tech Stack</h5>
    <p>TensorFlow/Keras · Python, NumPy, Pandas, Jupyter, TensorBoard</p>

    <h5>🔗 Links</h5>
    <p>
      Repository: <a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">Denoise-and-Classify</a>
    </p>
  </details>
</div>

---

<div class="project-card">
  <h3>💡 Additional Experience</h3>
  <p>Undergraduate Research Assistant · Dong-eui University Computer Engineering Lab (2024– Present)</p>
  <ul>
    <li>Signal processing and time-series prediction</li>
    <li>IoT systems and embedded AI</li>
    <li>Model optimization for resource-constrained devices</li>
    <li>Practical AI solutions for industrial applications</li>
  </ul>
</div>

---

<div style="text-align: center; margin-top: 40px;">
  <a href="/" class="btn primary" style="font-weight: bold;">← Back to Home</a>
</div>