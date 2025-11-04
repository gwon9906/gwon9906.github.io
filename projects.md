---
layout: page
title: Projects
permalink: /projects/
---

<!-- LoRa / BAM -->
<div class="project" id="lora-communication">
  <div class="kicker">IoT · Edge · Compression</div>
  <div class="title-row">
    <h2>Improving LoRa Efficiency with BAM-based Payload Compression</h2>
    <div class="meta">Role: Team Lead<span class="sep">•</span>Period: Mar–Jun 2025<span class="sep">•</span>Status: Completed</div>
  </div>

  <div class="tldr">
    <h3>TL;DR</h3>
    <ul>
      <li><strong>Lightweight NumPy BAM</strong> on Raspberry Pi; <strong>62.5% compression (32B→20B)</strong></li>
      <li><strong>+14% PDR</strong> and <strong>MSE 0.0036</strong> in ~2.6 km N-LOS field</li>
    </ul>
  </div>

  <div class="section">
    <h3>What</h3>
    <p>Implemented a real-time <strong>BAM compression model</strong> for edge devices and integrated it into an end-to-end LoRa pipeline (capture → compress → TX → restore → evaluate).</p>
  </div>

  <div class="section">
    <h3>Why</h3>
    <p>In LPWA, longer payloads increase collisions/retries and battery drain—worse under long-range N-LOS. Autoencoders were too heavy for Pi.</p>
  </div>

  <div class="section section-grid">
    <div>
      <h3>How</h3>
      <ul>
        <li><strong>Model</strong>: BAM over AE; <strong>NumPy-only</strong> implementation (low deps/latency)</li>
        <li><strong>System</strong>: Reproducible scripts/logging; standardized pipeline</li>
        <li><strong>Field</strong>: 1-month repeated runs to average external variance</li>
      </ul>
    </div>
    <div>
      <h3>Result</h3>
      <div class="metrics">
        <div class="metric"><b>62.5% compression</b> 32B → 20B</div>
        <div class="metric"><b>+14% PDR</b> real N-LOS</div>
        <div class="metric"><b>MSE 0.0036</b> (~80% better)</div>
        <div class="metric"><b>Edge real-time</b> on Raspberry Pi</div>
      </div>
    </div>
  </div>

  <details>
    <summary>Challenges → Fixes</summary>
    <table>
      <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>Field variance (weather, interference)</td><td>Extended to 1 month; repeated measures for reliability</td></tr>
        <tr><td>GPS format caused high MSE</td><td>Removed integer part → <strong>MSE 0.0184→0.0036</strong></td></tr>
        <tr><td>AE overload on Pi</td><td><strong>NumPy BAM</strong> for lightweight, real-time execution</td></tr>
      </tbody>
    </table>
  </details>

  <div class="section">
    <h3>So What</h3>
    <p>Demonstrates a <strong>deployable learned compression</strong> for LoRa. Next: PyTorch kernels/quantization toward <strong>Furiosa NPU</strong> readiness.</p>
    <p><a href="https://github.com/4xvgal/ChirpChirp" target="_blank">System</a> · <a href="https://github.com/gwon9906/Lightweight-MF-BAM" target="_blank">BAM Core</a></p>
  </div>
</div>

<!-- Valve -->
<div class="project" id="valve-prediction">
  <div class="kicker">Industrial AI · Time-Series</div>
  <div class="title-row">
    <h2>Industrial Valve Flow Prediction with Encoder-LSTM</h2>
    <div class="meta">Role: Individual Research<span class="sep">•</span>Period: Jul–Dec 2024<span class="sep">•</span>Status: Completed</div>
  </div>

  <div class="tldr">
    <h3>TL;DR</h3>
    <ul>
      <li>Fixed zero-opening discontinuity & outlier sensitivity via <strong>Encoder-LSTM</strong> + <strong>Huber loss</strong></li>
      <li><strong>MAPE 10 → 0.188</strong> with stable behavior</li>
    </ul>
  </div>

  <div class="section">
    <h3>What</h3>
    <p>Designed a fault-aware <strong>Encoder-LSTM</strong> to deliver high-precision flow prediction for industrial diagnosis.</p>
  </div>

  <div class="section">
    <h3>Why</h3>
    <p>Vanilla LSTM broke near zero-opening segments and was too sensitive to outliers—unreliable for deployment.</p>
  </div>

  <div class="section section-grid">
    <div>
      <h3>How</h3>
      <ul>
        <li>Hierarchical feature <strong>Encoder-LSTM</strong> architecture</li>
        <li><strong>Sequence reinit</strong> logic at valve=0</li>
        <li><strong>Huber</strong> loss for robustness</li>
        <li>Simplified normalization for low-precision floats</li>
      </ul>
    </div>
    <div>
      <h3>Result</h3>
      <div class="metrics">
        <div class="metric"><b>MAPE 0.188</b> (~98% improvement)</div>
        <div class="metric"><b>Stability</b> discontinuity resolved</div>
      </div>
    </div>
  </div>

  <details>
    <summary>Challenges → Fixes</summary>
    <table>
      <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>Discontinuity near zero opening</td><td>Sequence reinit stabilized predictions</td></tr>
        <tr><td>Outlier sensitivity</td><td>Adopted Huber loss</td></tr>
        <tr><td>Precision mismatch</td><td>Trimmed normalization to reduce variance</td></tr>
      </tbody>
    </table>
  </details>

  <div class="section">
    <h3>So What</h3>
    <p>Validates data-first design; next steps include domain tuning and real-time inference.</p>
  </div>
</div>

<!-- Ultra-Low SNR -->
<div class="project" id="ultra-low-snr">
  <div class="kicker">Restoration · Classification</div>
  <div class="title-row">
    <h2>Ultra-Low SNR Restoration & Classification (Cascaded vs MTL)</h2>
    <div class="meta">Role: Individual Research<span class="sep">•</span>Period: Mar 2025–Present<span class="sep">•</span>Status: In Progress</div>
  </div>

  <div class="tldr">
    <h3>TL;DR</h3>
    <ul>
      <li>Controlled comparison of <strong>Cascaded</strong> vs <strong>MTL</strong> at –30 to –10 dB</li>
      <li>U-Net superior for restoration; MTL benefits classification at higher SNR</li>
    </ul>
  </div>

  <div class="section">
    <h3>What</h3>
    <p>Quantifies when end-to-end MTL or sequential pipelines are preferable under extreme noise.</p>
  </div>

  <div class="section">
    <h3>Why</h3>
    <p>Traditional filters collapse at ultra-low SNR; the optimal paradigm is unclear without systematic evidence.</p>
  </div>

  <div class="section section-grid">
    <div>
      <h3>How</h3>
      <ul>
        <li><strong>Backbones</strong>: BAM / CAE / U-Net</li>
        <li><strong>Pipelines</strong>: Cascaded (Restore→Classify) vs MTL (shared encoder + dual decoders)</li>
        <li><strong>Data</strong>: CIFAR-10 → 150K; Gaussian/Salt&Pepper/Burst; –30~–10 dB</li>
        <li><strong>Metrics</strong>: MSE/MAE/PSNR/Accuracy/Latency</li>
      </ul>
    </div>
    <div>
      <h3>Result</h3>
      <div class="metrics">
        <div class="metric"><b>U-Net best</b> restoration (skip connections)</div>
        <div class="metric"><b>MTL advantage</b> classification at higher SNR</div>
        <div class="metric"><b>Burst hardest</b> largest gap across types</div>
      </div>
    </div>
  </div>

  <details>
    <summary>Challenges → Fixes</summary>
    <table>
      <thead><tr><th>Challenge</th><th>Fix</th></tr></thead>
      <tbody>
        <tr><td>Combination explosion</td><td>Modular training, auto logging, reproducible runs</td></tr>
        <tr><td>Loss imbalance</td><td>Weight grids + scheduling for PSNR–Acc balance</td></tr>
        <tr><td>Realistic noise</td><td>Controlled SNR injection and hybrid augmentations</td></tr>
      </tbody>
    </table>
  </details>

  <div class="section">
    <h3>So What</h3>
    <p>Offers a quantitative basis to choose <strong>Cascaded vs MTL</strong> under extreme noise; moving to PyTorch + quantization for real-time inference.</p>
    <p><a href="https://github.com/gwon9906/Denoise-and-Classify" target="_blank">Repository</a></p>
  </div>
</div>