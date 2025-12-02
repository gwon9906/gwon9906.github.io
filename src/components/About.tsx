import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
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
            AI/ML 학부 연구생, 2024.06 ~
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div variants={item} className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-dark-700">
            클라우드 서버가 아니라{' '}
            <span className="font-bold text-primary-600">라즈베리파이에서도 돌아가는 AI</span>를 만듭니다.
            <br/>모델이 아무리 좋아도 실제로 배포할 수 없으면 의미가 없다고 생각해요.
            <br/>IoT부터 산업 현장까지, 제약이 있는 환경에서의 최적화가 제 강점입니다.
          </p>
        </motion.div>

        {/* Education & Research */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.div variants={item} className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">학력</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-dark-700">동의대학교</p>
                  <p className="text-dark-600">컴퓨터공학과 학사</p>
                  <p className="text-dark-500">졸업 예정: 2026년</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-800 mb-2">학부 연구생</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-dark-700">AI/ML 연구실</p>
                  <p className="text-dark-600">2024년 6월 ~ 현재</p>
                  <p className="text-dark-500">논문 작성 프로젝트 진행 중</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strengths */}
        <motion.div variants={item} className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-dark-800">
            <Target className="inline-block w-8 h-8 mr-2 text-primary-600" />
            강점
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'End-to-End',
                description: '데이터 수집부터 배포까지',
                gradient: 'from-primary-500 to-blue-600'
              },
              {
                title: '압축 & 최적화',
                description: '저자원에서도 작동하게',
                gradient: 'from-blue-600 to-indigo-600'
              },
              {
                title: '데이터 중심',
                description: '데이터를 보고 구조 결정',
                gradient: 'from-indigo-600 to-purple-600'
              },
              {
                title: '실전 배포',
                description: '실제 환경에서 검증',
                gradient: 'from-purple-600 to-pink-600'
              },
            ].map((strength, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${strength.gradient} rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
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
            <div className="p-3 bg-green-100 rounded-xl">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-dark-800 mb-2">자격증</h3>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-lg font-semibold text-dark-700">정보처리기사</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  2025.06.13
                </span>
                <span className="text-dark-600">한국산업인력공단</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
