---
layout: page
title: Projects
permalink: /projects/
---

<div class="project" id="lora-communication">
  <div class="kicker">IoT · Edge · Compression</div>
  <div class="title-row">
    <h2>Improving LoRa Efficiency with BAM-based Payload Compression</h2>
    <div class="meta">Role: Team Lead<span class="sep">•</span>Period: Mar–Jun 2025<span class="sep">•</span>Status: Completed</div>
  </div>

  <div class="section">
    <h3>What — Overview</h3>
    <p>Designed a <strong>lightweight BAM-based compression model</strong> running on Raspberry Pi to reduce retransmissions and power drain in LoRa networks.</p>
  </div>

  <div class="section">
    <h3>Why — Background</h3>
    <p>Long payloads in LPWA links increase collisions and retries, especially under long-range N-LOS. Autoencoders were too heavy for Raspberry Pi in real time.</p>
  </div>

  <div class="section">
    <h3>How — Method & Implementation</h3>
    <ul>
      <li><strong>Model</strong>: Chose <strong>BAM</strong> over AE; implemented in <strong>NumPy</strong> to minimize dependencies/overhead</li>
      <li><strong>System</strong>: End-to-end pipeline (capture → compress → LoRa TX → restore → evaluate), reproducible scripts/logs</li>
      <li><strong>Field</strong>: 2.6 km N-LOS, 1-month repeated measurements</li>
      <li><strong>Preprocess</strong>: GPS integer issue fix → large MSE reduction</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric"><b>62.5% compression</b> 32B → 20B</div>
    <div class="metric"><b>+14% PDR</b> in real N-LOS</div>
    <div class="metric"><b>MSE 0.0036</b> (~80% improvement)</div>
    <div class="metric"><b>Edge real-time</b> Raspberry Pi</div>
  </div>

  <h3>Challenges → Fixes</h3>
  <table>
    <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
    <tbody>
      <tr><td>Field variance (weather, interference)</td><td>Extended to 1 month; repeated measures for statistical reliability</td></tr>
      <tr><td>GPS format inconsistency raised MSE</td><td>Removed integer part; <strong>MSE 0.0184 → 0.0036</strong></td></tr>
      <tr><td>AE overload on Pi</td><td><strong>NumPy BAM</strong> for lightweight, real-time execution</td></tr>
    </tbody>
  </table>

  <div class="section">
    <h3>Result</h3>
    <p><strong>62.5% compression</strong> led to <strong>+14% PDR</strong> with <strong>MSE 0.0036</strong>. Verified real-time on resource-constrained edge hardware.</p>
  </div>

  <div class="section">
    <h3>So What — Impact</h3>
    <p>Demonstrates a <strong>deployable learned compression</strong> for LoRa. Next: PyTorch kernels/quantization toward <strong>Furiosa NPU</strong> readiness.</p>
    <p><a href="https://github.com/4xvgal/ChirpChirp" target="_blank">System</a> · <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">BAM Core</a></p>
  </div>
</div>

<div class="project" id="valve-prediction">
  <div class="kicker">Industrial AI · Time-Series</div>
  <div class="title-row">
    <h2>Industrial Valve Flow Prediction with Encoder-LSTM</h2>
    <div class="meta">Role: Individual Research<span class="sep">•</span>Period: Jul–Dec 2024<span class="sep">•</span>Status: Completed</div>
  </div>

  <div class="section">
    <h3>What — Overview</h3>
    <p>Built a <strong>custom Encoder-LSTM</strong> for fault-oriented flow prediction, improving MAPE from 10 to <strong>0.188</strong>.</p>
  </div>

  <div class="section">
    <h3>Why — Background</h3>
    <p>Vanilla LSTM failed around zero-opening segments and was sensitive to outliers, making it unreliable for deployment.</p>
  </div>

  <div class="section">
    <h3>How — Method & Implementation</h3>
    <ul>
      <li><strong>Architecture</strong>: Encoder-LSTM (hierarchical feature extraction)</li>
      <li><strong>Logic</strong>: Sequence reinitialization at valve=0</li>
      <li><strong>Loss</strong>: <strong>Huber</strong> for outlier robustness</li>
      <li><strong>Data</strong>: Removed unnecessary normalization for low-precision floats</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric"><b>MAPE 0.188</b> ~98% improvement</div>
    <div class="metric"><b>Stability</b> sequence discontinuity resolved</div>
  </div>

  <h3>Challenges → Fixes</h3>
  <table>
    <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
    <tbody>
      <tr><td>Discontinuity near zero opening</td><td>Sequence reinit logic stabilized predictions</td></tr>
      <tr><td>Outlier sensitivity</td><td>Adopted Huber loss</td></tr>
      <tr><td>Precision mismatch</td><td>Simplified normalization to reduce variance</td></tr>
    </tbody>
  </table>

  <div class="section">
    <h3>Result</h3>
    <p><strong>MAPE 0.188</strong> with consistent time-series behavior across segments.</p>
  </div>

  <div class="section">
    <h3>So What — Impact</h3>
    <p>Validates data-first design; next steps include domain-specific tuning and real-time inference pipeline.</p>
  </div>
</div>

<div class="project" id="ultra-low-snr">
  <div class="kicker">Restoration · Classification</div>
  <div class="title-row">
    <h2>Ultra-Low SNR Restoration & Classification (Cascaded vs MTL)</h2>
    <div class="meta">Role: Individual Research<span class="sep">•</span>Period: Mar 2025–Present<span class="sep">•</span>Status: In Progress</div>
  </div>

  <div class="section">
    <h3>What — Overview</h3>
    <p>Compares <strong>Cascaded</strong> vs <strong>MTL (shared encoder + dual decoders)</strong> for restoration/classification at –30 to –10 dB SNR.</p>
  </div>

  <div class="section">
    <h3>Why — Background</h3>
    <p>Traditional filters collapse under ultra-low SNR; the optimal joint vs sequential paradigm is unclear. We provide quantitative evidence.</p>
  </div>

  <div class="section">
    <h3>How — Method & Implementation</h3>
    <ul>
      <li><strong>Backbones</strong>: BAM / CAE / U-Net</li>
      <li><strong>Pipelines</strong>: Cascaded (Restoration→Classification) vs MTL (shared encoder + dual decoders)</li>
      <li><strong>Data</strong>: CIFAR-10 → 150K; Gaussian / Salt & Pepper / Burst; SNR –30 ~ –10 dB</li>
      <li><strong>Metrics</strong>: MSE, MAE, PSNR, Accuracy, Latency</li>
    </ul>
  </div>

  <div class="metrics">
    <div class="metric"><b>U-Net best</b> for restoration (skip connections)</div>
    <div class="metric"><b>MTL advantage</b> at higher SNR for classification</div>
    <div class="metric"><b>Burst hardest</b> largest gap among noise types</div>
  </div>

  <h3>Challenges → Fixes</h3>
  <table>
    <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
    <tbody>
      <tr><td>Combination explosion</td><td>Modular training, auto logging, reproducible runs</td></tr>
      <tr><td>Loss imbalance</td><td>Weight grid + scheduling for a stable PSNR–Acc trade-off</td></tr>
      <tr><td>Realistic noise</td><td>Controlled SNR injection and hybrid augmentations</td></tr>
    </tbody>
  </table>

  <div class="section">
    <h3>Result</h3>
    <p>Derived conditions where architectures/paradigms dominate. Final comparison and paper preparation in progress.</p>
  </div>

  <div class="section">
    <h3>So What — Impact</h3>
    <p>Provides a quantitative basis to choose between <strong>Cascaded vs MTL</strong> under extreme noise; moving to PyTorch + quantization for real-time inference.</p>
    <p><a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">Repository</a></p>
  </div>
</div>