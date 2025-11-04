---
layout: page
title: Projects
permalink: /projects/
---

<div class="project-compact" id="lora-communication">
  <div class="head">
    <h2>LoRa Efficiency via BAM-based Payload Compression</h2>
    <div class="meta">Role: Team Lead<span class="sep">•</span>Period: Mar–Jun 2025<span class="sep">•</span>Status: Completed</div>
  </div>

  <div class="summary-strip">
    <div class="summary-item"><b>62.5% compression</b> 32B → 20B</div>
    <div class="summary-item"><b>+14% PDR</b> under N-LOS</div>
    <div class="summary-item"><b>MSE 0.0036</b> (~80% better)</div>
    <div class="summary-item"><b>Edge real-time</b> on Raspberry Pi</div>
  </div>

  <div class="p-section">
    <h3>Overview</h3>
    <p>Developed a lightweight <strong>NumPy-based BAM compressor</strong> optimized for edge devices and integrated it into a full LoRa pipeline — data capture, compression, transmission, restoration, and evaluation.</p>
  </div>

  <div class="p-section">
    <h3>Context</h3>
    <p>In LPWA networks, long payloads cause frequent collisions and retransmissions, degrading battery efficiency — especially under long-range N-LOS conditions.</p>
  </div>

  <div class="p-section">
    <h3>Approach</h3>
    <ul>
      <li>Adopted <strong>BAM</strong> over Autoencoder for low computation</li>
      <li>Implemented <strong>pure NumPy version</strong> to minimize latency</li>
      <li>Built reproducible experiment scripts and logging system</li>
      <li>Conducted a one-month N-LOS field test for statistical reliability</li>
    </ul>
  </div>

  <div class="p-section">
    <h3>Results</h3>
    <ul>
      <li><strong>62.5% compression</strong> (32B→20B) → <strong>+14% PDR</strong></li>
      <li>GPS format fix reduced <strong>MSE 0.0184 → 0.0036</strong></li>
      <li>Achieved <strong>real-time inference</strong> on Raspberry Pi</li>
    </ul>
  </div>

  <details>
    <summary>Challenges &amp; Fixes</summary>
    <table>
      <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>Environmental variance (weather/interference)</td><td>Extended testing and averaged measurements</td></tr>
        <tr><td>GPS integer format errors</td><td>Removed integer portion → reduced MSE by 80%</td></tr>
        <tr><td>AE overload on Pi</td><td>Replaced with <strong>NumPy BAM</strong> for lightweight runtime</td></tr>
      </tbody>
    </table>
  </details>

  <div class="p-section">
    <h3>Next</h3>
    <p>Extending the compression scheme to domain-specific sensors (temperature, humidity, etc.) for higher efficiency.</p>
    <p><a href="https://github.com/4xvgal/ChirpChirp" target="_blank">System</a> · <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">BAM Core</a></p>
  </div>
</div>

---

<div class="project-compact" id="valve-prediction">
  <div class="head">
    <h2>Industrial Valve Flow Prediction with Encoder-LSTM</h2>
    <div class="meta">Role: Individual Research<span class="sep">•</span>Period: Jul–Dec 2024<span class="sep">•</span>Status: Completed</div>
  </div>

  <div class="summary-strip">
    <div class="summary-item"><b>MAPE 0.188</b> (~98% better)</div>
    <div class="summary-item"><b>Stable</b> resolved discontinuity</div>
    <div class="summary-item"><b>Robust</b> Huber loss</div>
    <div class="summary-item"><b>Streamlined</b> normalization</div>
  </div>

  <div class="p-section">
    <h3>Overview</h3>
    <p>Designed a high-precision <strong>Encoder-LSTM</strong> model for industrial valve flow prediction, improving stability and accuracy in real environments.</p>
  </div>

  <div class="p-section">
    <h3>Context</h3>
    <p>Conventional LSTM models showed discontinuities at valve=0 and were sensitive to outliers, making them unsuitable for deployment.</p>
  </div>

  <div class="p-section">
    <h3>Approach</h3>
    <ul>
      <li>Hierarchical feature <strong>Encoder-LSTM</strong> architecture</li>
      <li><strong>Sequence reinit</strong> to remove discontinuity</li>
      <li>Applied <strong>Huber loss</strong> for outlier robustness</li>
      <li>Removed unnecessary normalization to stabilize variance</li>
    </ul>
  </div>

  <div class="p-section">
    <h3>Results</h3>
    <ul>
      <li><