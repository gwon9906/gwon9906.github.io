import { ArrowLeft, Download, ExternalLink, FileText, Github } from 'lucide-react';
import './IBMConsultingResume.css';

const githubUrl = 'https://github.com/gwon9906';
const portfolioUrl = 'https://gwon9906.github.io/#matchgroup-resume';
const blogUrl = 'https://latetime.tistory.com/';
const valveReportUrl = 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf';
const loraReportUrl = 'https://gwon9906.github.io/files/lora-final-report.pdf';
const loraGithubUrl = 'https://github.com/gwon9906/Lightweight-MF-BAM';
const targetJobUrl = 'https://jobs.lever.co/matchgroup/edf748a7-a883-4fef-8112-8cbfba14afa3';

const MatchGroupResume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="ibm-resume-container">
      <div className="ibm-resume-controls no-print">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="ibm-control-btn ibm-back-btn"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </a>
        <button onClick={handlePrint} className="ibm-control-btn ibm-print-btn">
          <Download className="w-5 h-5" />
          Save as PDF
        </button>
      </div>

      <div className="ibm-resume-page">
        <h1 className="ibm-top-title">Haegwon Lee Resume | Match Group AI Machine Learning Engineer</h1>

        <div className="ibm-intro-layout">
          <div className="ibm-photo-box">
            <img src="/profile-photo.jpg" alt="Haegwon Lee" className="ibm-photo-img" />
          </div>

          <section className="ibm-intro-section">
            <h2 className="ibm-section-title">Introduction</h2>

            <div className="ibm-block">
              <h3>Target Role</h3>
              <p>
                Machine Learning Engineer at Match Group AI. I am applying as a junior ML/SW engineer who can
                define data problems, validate model behavior with controlled experiments, and connect model
                results to engineering constraints such as payload size, inference feasibility, and measurable metrics.
              </p>
            </div>

            <div className="ibm-block">
              <h3>Profile</h3>
              <p>
                My background is strongest in applied AI projects with sensor, time-series, and constrained
                communication data. I have built an industrial valve normal-flow forecasting model, implemented
                a BAM-based compression approach for LoRa sensor transmission, and validated model behavior
                through baseline comparisons, field tests, and reconstruction metrics. While my experience is not
                a direct online dating or LLM production background, it is relevant to ML engineering work that
                requires EDA, problem reframing, prototype development, metric design, and careful interpretation
                of noisy real-world data.
              </p>
            </div>
          </section>
        </div>

        <div className="ibm-blog-line">
          <strong>Target Job:</strong> <a href={targetJobUrl} target="_blank" rel="noopener noreferrer">Match Group AI Machine Learning Engineer</a>
          <br />
          <strong>Blog Link:</strong> <a href={blogUrl} target="_blank" rel="noopener noreferrer">{blogUrl}</a>
        </div>

        <section className="ibm-section">
          <h2 className="ibm-section-title">Personal Information</h2>

          <div className="ibm-info-grid">
            <div><strong>Name</strong><span>Haegwon Lee</span></div>
            <div><strong>Target Position</strong><span>Machine Learning Engineer, Match Group AI</span></div>
            <div><strong>Education</strong><span>B.S. in Computer Engineering, Dong-Eui University</span></div>
            <div><strong>Graduation Status</strong><span>Graduated — February 23, 2026</span></div>
            <div><strong>Email</strong><span>gwon99065@naver.com</span></div>
            <div><strong>Phone</strong><span>010-3414-9906</span></div>
            <div><strong>GitHub</strong><span>{githubUrl}</span></div>
            <div><strong>Portfolio</strong><span>{portfolioUrl}</span></div>
            <div><strong>Official English Score</strong><span>TOEIC Speaking IM1</span></div>
          </div>
        </section>

        <section className="ibm-section">
          <h2 className="ibm-section-title">Core Technical Fit</h2>
          <div className="ibm-skill-grid">
            <div>
              <h3>ML / Deep Learning</h3>
              <p>Python, TensorFlow/Keras, PyTorch, LSTM, Encoder-LSTM, Autoencoder, Huber Loss, model comparison, metric-based validation</p>
            </div>
            <div>
              <h3>Data Analysis</h3>
              <p>EDA, sensor/time-series preprocessing, outlier handling, sequence segmentation, baseline design, error interpretation</p>
            </div>
            <div>
              <h3>Engineering / Deployment Orientation</h3>
              <p>Linux, Raspberry Pi, UART, Git, field-test logging, ONNX-oriented model validation, reproducible experiment documentation</p>
            </div>
            <div>
              <h3>Product ML Relevance</h3>
              <p>Problem definition, evaluation metric selection, noisy data handling, model feasibility analysis, limitation-aware reporting</p>
            </div>
          </div>
        </section>
      </div>

      <div className="ibm-resume-page">
        <section className="ibm-section">
          <h2 className="ibm-section-title">Project</h2>

          <article className="ibm-project">
            <h3>[Applied ML / Edge Validation] LoRa Sensor Payload Compression & Field Validation</h3>

            <div className="ibm-project-meta">
              <span><strong>Period:</strong> 2025.03 - 2025.06</span>
              <span><strong>Tech Stack:</strong> Python, BAM, LoRa, Raspberry Pi, Linux, UART, GPS/IMU sensor data, CSV logging</span>
              <span><strong>Role:</strong> BAM compression logic, TX/RX pipeline, field testing, result analysis</span>
              <span><strong>Relevance:</strong> On-device constraints, noisy real-world data, metric design, model feasibility validation</span>
            </div>

            <div className="ibm-project-body">
              <p>
                <strong>Problem:</strong> In low-quality LoRa channels, larger payloads increase airtime and can lower
                packet delivery. I tested whether reducing sensor payload size with a BAM-based lossy compression
                structure could improve transmission success while keeping reconstruction error measurable.
              </p>

              <ul>
                <li>
                  Implemented a BAM-based compression and restoration pipeline for GPS and IMU sensor data without relying on an existing library implementation.
                </li>
                <li>
                  Built the transmission, reception, and CSV logging workflow in a Raspberry Pi based Linux environment and repeatedly modified the pipeline during field tests.
                </li>
                <li>
                  Conducted validation in roughly <strong>2.0 - 2.6 km NLOS</strong> conditions with weak RSSI levels around <strong>-101 to -104 dBm</strong>.
                </li>
                <li>
                  Compared RAW payload and BAM-compressed payload under the same device and configuration conditions. In a representative 100-transmission test, RAW succeeded <strong>29</strong> times and BAM-compressed transmission succeeded <strong>33</strong> times.
                </li>
                <li>
                  Measured reconstruction quality with <strong>MSE 0.003676</strong>, separating transmission efficiency from information-preservation quality.
                </li>
              </ul>

              <p className="ibm-project-limit">
                <strong>Limit / Interpretation:</strong> This is not a claim that BAM universally improves LoRa.
                PDR varied by location, antenna direction, and channel condition. GPS restoration also showed errors
                when the training and evaluation distributions did not match. I interpreted the result as evidence that
                payload reduction can help under specific low-quality channel conditions, not as a general solution.
              </p>
            </div>

            <div className="ibm-link-row no-print">
              <a href={loraReportUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> LoRa Final Report <ExternalLink className="w-4 h-4" />
              </a>
              <a href={loraGithubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> LoRa GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="ibm-project">
            <h3>[Individual Research] Industrial Valve Normal-Flow Forecasting</h3>

            <div className="ibm-project-meta">
              <span><strong>Period:</strong> 2024.07 - 2024.12</span>
              <span><strong>Tech Stack:</strong> Python, TensorFlow/Keras, LSTM, Encoder-LSTM, Huber Loss, Pandas, Matplotlib</span>
              <span><strong>Role:</strong> Data preprocessing, model design, experiment comparison, result documentation</span>
              <span><strong>Relevance:</strong> EDA, time-series modeling, noisy sensor data, evaluation metric improvement</span>
            </div>

            <div className="ibm-project-body">
              <p>
                <strong>Problem:</strong> Normal valve flow needed to be forecasted as a baseline so that future abnormal
                states could be compared against normal-state predictions. The data came from operating valves and included
                valve opening, three inlet-pressure variables, and three outlet-pressure variables.
              </p>

              <ul>
                <li>
                  Defined the task as normal-state forecasting rather than overstating it as a completed fault-diagnosis system.
                </li>
                <li>
                  Preserved the time-series order during training and validation because random shuffling could damage the operating sequence structure.
                </li>
                <li>
                  Reset sequences around valve-opening zero points to reduce errors caused by discontinuous operating segments.
                </li>
                <li>
                  Treated limited decimal precision as a data constraint and handled clear outliers instead of forcing unnecessary normalization.
                </li>
                <li>
                  Improved the model from a baseline LSTM to an Encoder-LSTM with Huber Loss. Final validation result: <strong>Loss 4.0376e-05 / MAE 0.003941 / MAPE 0.1835</strong>.
                </li>
              </ul>

              <p className="ibm-project-limit">
                <strong>Limit / Interpretation:</strong> The value of this project is not a finished anomaly-detection product.
                Its value is that it built a validated normal-state prediction baseline and showed how data structure,
                preprocessing, and metric choice can change model behavior.
              </p>
            </div>

            <div className="ibm-link-row no-print">
              <a href={valveReportUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> Valve Forecasting Report <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>
        </section>
      </div>

      <div className="ibm-resume-page">
        <section className="ibm-section">
          <h2 className="ibm-section-title">Research & Engineering Notes</h2>

          <article className="ibm-activity">
            <h3>ONNX-oriented Autoencoder / Compression Benchmarking</h3>
            <div className="ibm-project-meta">
              <span><strong>Topics:</strong> Autoencoder, BAM comparison, ONNX export, ONNXRuntime validation, Intel Lab sensor data</span>
              <span><strong>Purpose:</strong> Verify whether a learned encoder can be converted and validated for lightweight inference-oriented use</span>
            </div>
            <ul>
              <li>
                Built feature vectors from sensor variables such as temperature, humidity, light, voltage, and change-rate features, then compared compressed latent representations.
              </li>
              <li>
                Exported an autoencoder encoder to ONNX and checked PyTorch vs ONNXRuntime output parity using numerical differences and allclose-style validation.
              </li>
              <li>
                Positioned the benchmark as a deployment-feasibility check rather than a claim of production-grade serving experience.
              </li>
              <li>
                This work is relevant to Match Group AI because the role requires attention to model deployment, inference efficiency, and reproducible validation rather than model accuracy alone.
              </li>
            </ul>
          </article>

          <article className="ibm-activity">
            <h3>AI / Signal Processing Research Meeting Notes</h3>
            <div className="ibm-project-meta">
              <span><strong>Topics:</strong> LoRa, BAM, SOM, ultra-low SNR restoration, payload compression, signal representation</span>
              <span><strong>Output:</strong> Experiment notes, failure analysis, metric summaries, follow-up tasks</span>
            </div>
            <ul>
              <li>
                Reviewed LoRa communication constraints, BAM-based restoration/compression concepts, SOM-based distribution analysis, and signal representation issues.
              </li>
              <li>
                Documented a concrete failed direction: restoring only spectrogram magnitude removed phase information, which made IQ restoration infeasible and caused near-zero classification performance.
              </li>
              <li>
                Changed the experiment direction toward Real/Imag representation and clearer evaluation criteria after identifying the input-representation issue.
              </li>
              <li>
                This experience supports ML engineering work that requires diagnosing why a model or input representation fails instead of only reporting successful trials.
              </li>
            </ul>
          </article>
        </section>

        <section className="ibm-section">
          <h2 className="ibm-section-title">Match Group AI Fit Summary</h2>

          <article className="ibm-activity">
            <ul>
              <li>
                <strong>Business-to-ML problem definition:</strong> Reframed physical operating issues into measurable ML tasks such as normal-state forecasting and payload-reduction validation.
              </li>
              <li>
                <strong>EDA and noisy data handling:</strong> Considered data precision, discontinuous sequences, outliers, NLOS channel instability, and train/evaluation distribution mismatch.
              </li>
              <li>
                <strong>Model and metric validation:</strong> Compared baselines and alternatives using MAPE, MAE, PDR, cumulative successful packets, and reconstruction MSE.
              </li>
              <li>
                <strong>Engineering constraints:</strong> Worked with Raspberry Pi/Linux, LoRa payload limits, logging workflows, and ONNX-oriented validation for lightweight inference feasibility.
              </li>
              <li>
                <strong>Growth area:</strong> I do not yet have direct production experience in online dating recommendation, LLM-scale training, A/B testing, or SQL-based KPI analysis. I would treat these as priority onboarding areas while contributing with disciplined ML experimentation and implementation work.
              </li>
            </ul>
          </article>
        </section>

        <section className="ibm-section">
          <h2 className="ibm-section-title">Links</h2>
          <ul className="ibm-links-list">
            <li><strong>GitHub:</strong> {githubUrl}</li>
            <li><strong>Portfolio:</strong> {portfolioUrl}</li>
            <li><strong>Blog:</strong> {blogUrl}</li>
            <li><strong>Valve Report:</strong> {valveReportUrl}</li>
            <li><strong>LoRa Report:</strong> {loraReportUrl}</li>
            <li><strong>LoRa GitHub:</strong> {loraGithubUrl}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MatchGroupResume;
