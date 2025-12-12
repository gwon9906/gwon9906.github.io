import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Lightbulb, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
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

  return (
    <section ref={ref} className="section-container" id="about">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="space-y-12"
      >
        {/* Section Title */}
        <motion.div variants={item} className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">About</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            {t('AI/ML 학부 연구생, 2024.06 ~', 'AI/ML Undergraduate Researcher, Jun 2024 ~')}
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div variants={item} className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-dark-700">
            <span className="font-bold text-primary-600">
              {t('제약이 있는 환경에서의 최적화', 'Optimization under constraints')}
            </span>
            {t('에 몰입하는 엔지니어입니다.', ' is what I focus on as an engineer.')}
            <br />
            {t(
              '단순한 모델링을 넘어, 실제 산업 현장의 엣지(Edge) 디바이스에서',
              'Beyond simple modeling, I design'
            )}{' '}
            <span className="font-bold text-dark-900">
              {t('실시간으로 동작 가능한 경량화 솔루션', 'lightweight solutions that run in real-time')}
            </span>
            {t('을 설계합니다.', ' on edge devices in real industrial environments.')}
            <br />
            {t(
              '데이터의 본질적인 흐름을 파악하여 시스템 전체의 효율을 높이는 엔지니어링을 지향합니다.',
              'I pursue engineering that improves overall system efficiency by understanding the essential flow of data.'
            )}
          </p>
        </motion.div>

        {/* Education & Research */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.div variants={item} className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">
                  {t('학력', 'Education')}
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-dark-700">
                    {t('동의대학교', 'Dong-eui University')}
                  </p>
                  <p className="text-dark-600">
                    {t('컴퓨터공학과 학사', 'B.S. in Computer Engineering')}
                  </p>
                  <p className="text-dark-500">
                    {t('졸업 예정: 2026년', 'Expected: 2026')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">
                  {t('학부 연구생', 'Undergraduate Researcher')}
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-dark-700">
                    {t('AI/ML 연구실', 'AI/ML Lab')}
                  </p>
                  <p className="text-dark-600">
                    {t('2024년 6월 ~ 현재', 'Jun 2024 ~ Present')}
                  </p>
                  <p className="text-dark-500">
                    {t('논문 작성 프로젝트 진행 중', 'Research paper project in progress')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strengths */}
        <motion.div variants={item} className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-dark-800">
            <Target className="inline-block w-8 h-8 mr-2 text-primary-600" />
            {t('강점', 'Strengths')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'End-to-End',
                description: t('데이터 수집부터 배포까지', 'From data collection to deployment'),
                gradient: 'from-primary-500 to-blue-600'
              },
              {
                title: t('압축 & 최적화', 'Compression & Optimization'),
                description: t('저자원에서도 작동하게', 'Works even on low resources'),
                gradient: 'from-blue-600 to-indigo-600'
              },
              {
                title: t('데이터 중심', 'Data-Centric'),
                description: t('데이터를 보고 구조 결정', 'Structure driven by data'),
                gradient: 'from-indigo-600 to-purple-600'
              },
              {
                title: t('실전 배포', 'Real Deployment'),
                description: t('실제 환경에서 검증', 'Verified in real environments'),
                gradient: 'from-purple-600 to-pink-600'
              },
            ].map((strength, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${strength.gradient} rounded-2xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-dark-800 mb-2">{strength.title}</h4>
                <p className="text-sm text-dark-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div variants={item} className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-2xl">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-dark-800 mb-2">
                {t('자격증', 'Certifications')}
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-lg font-semibold text-dark-700">
                  {t('정보처리기사', 'Engineer Information Processing')}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  2025.06.13
                </span>
                <span className="text-dark-600">
                  {t('한국산업인력공단', 'Human Resources Development Service of Korea')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
