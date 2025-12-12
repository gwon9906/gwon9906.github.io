import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const experiences = [
    {
      role: t('학부 연구생', 'Undergraduate Researcher'),
      organization: t('동의대학교 Wireless AIoT System LAB', 'Wireless AIoT System LAB, Dong-eui University'),
      period: t('2024.06 – 현재', 'Jun 2024 – Present'),
      location: t('부산, 대한민국', 'Busan, South Korea'),
      description: [
        t(
          'LoRa 통신 최적화 연구',
          'LoRa communication optimization research'
        ),
        t(
          '초저 SNR 신호 복원 기술 개발',
          'Ultra-low SNR signal restoration technology development'
        ),
        t(
          '산업용 시계열 예측 프로젝트 수행',
          'Industrial time-series prediction project execution'
        ),
      ],
      gradient: 'from-primary-500 to-blue-600',
    },
  ];

  return (
    <section ref={ref} className="section-container bg-white/30" id="experience">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="space-y-12"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Experience</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            {t('연구 및 실무 경험', 'Research and Professional Experience')}
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-8 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`p-2 bg-gradient-to-r ${exp.gradient} rounded-lg mt-1`}>
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-800">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-dark-700 font-medium">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:text-right">
                  <div className="flex items-center gap-2 text-dark-600 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-600 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-3">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-dark-700">
                    <span className={`mt-1.5 w-1.5 h-1.5 bg-gradient-to-r ${exp.gradient} rounded-full flex-shrink-0`} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
