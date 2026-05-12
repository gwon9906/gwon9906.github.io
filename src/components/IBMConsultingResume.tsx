import { ArrowLeft, Download, ExternalLink, FileText, Github } from 'lucide-react';
import './IBMConsultingResume.css';

const githubUrl = 'https://github.com/gwon9906';
const portfolioUrl = 'https://gwon9906.github.io/#ibm-consulting-resume';
const blogUrl = 'https://latetime.tistory.com/';
const valveReportUrl = 'https://gwon9906.github.io/files/valve-flow-report-summary.pdf';
const loraReportUrl = 'https://gwon9906.github.io/files/lora-final-report.pdf';
const loraGithubUrl = 'https://github.com/gwon9906/Lightweight-MF-BAM';

const IBMConsultingResume = () => {
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
        <h1 className="ibm-top-title">Haegwon Lee Resume | IBM Consulting AI Data Scientist Intern</h1>

        <div className="ibm-intro-layout">
          <div className="ibm-photo-box">
            <img src="/profile-photo.jpg" alt="Haegwon Lee" className="ibm-photo-img" />
          </div>

          <section className="ibm-intro-section">
            <h2 className="ibm-section-title">Introduction</h2>

            <div className="ibm-block">
              <h3>Target Role</h3>
              <p>
                Data Scientist Intern specializing in Artificial Intelligence at IBM Consulting.
                I am applying as a junior AI/SW engineer who can turn sensor, time-series, and
                constrained communication data into measurable AI prototypes and technical deliverables.
              </p>
            </div>

            <div className="ibm-block">
              <h3>Profile</h3>
              <p>
                My strongest experience is not general AI study. It is practical AI work with real
                operating data: defining the problem, preparing the input variables, building a baseline,
                comparing model changes, and documenting the limits of the result. I have worked on
                industrial valve flow forecasting and LoRa communication improvement under low-quality
                field conditions. These projects fit AI consulting work that requires feasibility analysis,
                Python-based prototyping, metric-driven validation, and clear communication with technical
                and non-technical stakeholders.
              </p>
            </div>
          </section>
        </div>

        <div className="ibm-blog-line">
          <strong>Blog Link:</strong> <a href={blogUrl} target="_blank" rel="noopener noreferrer">{blogUrl}</a>
        </div>

        <section className="ibm-section">
          <h2 className="ibm-section-title">Personal Information</h2>

          <div className="ibm-info-grid">
            <div><strong>Name</strong><span>Haegwon Lee</span></div>
            <div><strong>Target Position</strong><span>AI Data Scientist Intern, IBM Consulting</span></div>
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
          <h2 className="ibm-section-title">Core Competencies</h2>

          <div className="ibm-skill-grid">
            <div>
              <h3>AI / Data Analysis</h3>
              <p>Python, TensorFlow/Keras, NumPy, Pandas, Matplotlib, time-series forecasting, regression metrics, baseline comparison</p>
            </div>
            <div>
              <h3>Modeling</h3>
              <p>LSTM, Encoder-LSTM, Huber Loss, BAM-based lossy compression, SOM/BAM research notes, anomaly-detection baseline design</p>
            </div>
            <div>
              <h3>IoT / Field Validation</h3>
              <p>LoRa, Raspberry Pi, Linux, UART, payload design, CSV logging, NLOS field testing, PDR/RSSI/SNR analysis</p>
            </div>
            <div>
              <h3>Consulting Deliverables</h3>
              <p>Problem framing, technical documentation, trend and literature review, metric summary, chart-based result explanation</p>
            </div>
          </div>
        </section>
      </div>

      <div className="ibm-resume-page">
        <section className="ibm-section">
          <h2 className="ibm-section-title">Project</h2>

          <article className="ibm-project">
            <h3>[Individual Research] Industrial Valve Normal-Flow Forecasting</h3>

            <div className="ibm-project-meta">
              <span><strong>Period:</strong> 2024.07 - 2024.12</span>
              <span><strong>Tech Stack:</strong> Python, TensorFlow/Keras, LSTM, Encoder-LSTM, Huber Loss, Pandas, Matplotlib</span>
              <span><strong>Role:</strong> Data preprocessing, model design, experiment comparison, result documentation</span>
              <span><strong>Domain:</strong> Manufacturing equipment data / sensor time-series forecasting</span>
            </div>

            <div className="ibm-project-body">
              <p>
                <strong>Business Problem:</strong> Normal valve flow needed to be forecasted as a baseline so that future abnormal
                states could be compared against the normal-state prediction. The data came from operating valves and included
                valve opening, three inlet-pressure variables, and three outlet-pressure variables.
              </p>

              <ul>
                <li>
                  Defined the input and target structure for a normal-flow forecasting task instead of presenting the work as a completed fault-diagnosis system.
                </li>
                <li>
                  Treated limited decimal precision as a data constraint, kept the original value scale, and handled clear outliers rather than forcing unnecessary normalization.
                </li>
                <li>
                  Compared a baseline LSTM with an Encoder-LSTM structure. Applied Huber Loss to reduce sensitivity to outliers.
                </li>
                <li>
                  Final validation result: <strong>Loss 4.0376e-05 / MAE 0.003941 / MAPE 0.1835</strong>.
                </li>
              </ul>

              <p className="ibm-project-limit">
                <strong>Limit / Interpretation:</strong> This project did not complete a full fault-diagnosis product.
                Its value is that it built and validated a normal-state prediction baseline that can later be used to analyze
                the gap between normal and abnormal valve behavior.
              </p>
            </div>

            <div className="ibm-link-row no-print">
              <a href={valveReportUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> Valve Forecasting Report <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="ibm-project">
            <h3>[Capstone Design] Machine Learning-based LoRa Communication Improvement</h3>

            <div className="ibm-project-meta">
              <span><strong>Period:</strong> 2025.03 - 2025.06</span>
              <span><strong>Tech Stack:</strong> Python, BAM, LoRa, Raspberry Pi, Linux, UART, GPS/IMU sensor data, CSV logging</span>
              <span><strong>Role:</strong> BAM compression logic, TX/RX pipeline, field testing, result analysis</span>
              <span><strong>Domain:</strong> Low-power IoT communication / constrained sensor-data transmission</span>
            </div>

            <div className="ibm-project-body">
              <p>
                <strong>Business Problem:</strong> In low-quality LoRa channels, larger payloads increase airtime and can lower
                packet delivery. The project tested whether reducing sensor payload size with a BAM-based lossy compression
                structure could improve real transmission success while keeping reconstruction error measurable.
              </p>

              <ul>
                <li>
                  Implemented a BAM-based lossy compression approach for GPS and IMU sensor data and prepared compressed payloads for LoRa transmission.
                </li>
                <li>
                  Built and tested the transmission / reception / logging pipeline in a Raspberry Pi based Linux environment.
                </li>
                <li>
                  Conducted field validation in roughly <strong>2.0 - 2.6 km NLOS</strong> conditions with weak RSSI levels around <strong>-101 to -104 dBm</strong>.
                </li>
                <li>
                  Compared RAW payload and BAM-compressed payload under the same device and configuration conditions. In a representative 100-transmission test, RAW succeeded <strong>29</strong> times and BAM-compressed transmission succeeded <strong>33</strong> times.
                </li>
                <li>
                  Reconstruction error remained low at <strong>MSE 0.003676</strong>, supporting the feasibility of payload reduction with measurable information preservation.
                </li>
              </ul>

              <p className="ibm-project-limit">
                <strong>Limit / Interpretation:</strong> The result should not be overstated as universal LoRa improvement.
                PDR varied by location and channel conditions. GPS restoration also showed errors when the training and evaluation
                distributions did not match, so more representative mobile-scenario data would be needed for generalization.
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
        </section>
      </div>

      <div className="ibm-resume-page">
        <section className="ibm-section">
          <h2 className="ibm-section-title">Research & Documentation</h2>

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
                This experience is relevant to IBM Consulting deliverables because it shows how I document assumptions, failed trials, and next actions instead of reporting only favorable results.
              </li>
            </ul>
          </article>

          <article className="ibm-activity">
            <h3>AI Consulting Fit Summary</h3>
            <ul>
              <li>
                <strong>AI application analysis:</strong> Able to translate physical or operational issues into measurable AI tasks, such as normal-state forecasting and payload reduction.
              </li>
              <li>
                <strong>Python prototype development:</strong> Built forecasting and compression prototypes with Python-based analysis and model validation.
              </li>
              <li>
                <strong>Business-oriented communication:</strong> Connects metrics to operational meaning, such as anomaly-baseline preparation or transmission-efficiency validation.
              </li>
              <li>
                <strong>Documentation discipline:</strong> Records comparison conditions, metrics, limitations, and next validation steps.
              </li>
            </ul>
          </article>
        </section>

        <section className="ibm-section">
          <h2 className="ibm-section-title">Certifications & Activities</h2>

          <article className="ibm-activity">
            <h3>Capstone Design Final Report — Machine Learning-based LoRa Communication Improvement</h3>
            <p><strong>Period:</strong> 2025.06</p>
            <p><strong>Keywords:</strong> LoRa, BAM, payload compression, PDR, MSE, NLOS field validation</p>
            <ul>
              <li>
                Organized the full project flow from problem definition and related research to system design, implementation, field testing, result interpretation, and limitations.
              </li>
              <li>
                Summarized quantitative results using PDR, cumulative successful packets, and MSE instead of relying on qualitative claims.
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

export default IBMConsultingResume;
