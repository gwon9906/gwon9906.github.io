import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, BookOpen, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gwon99065@naver.com',
      link: 'mailto:gwon99065@naver.com',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@gwon9906',
      link: 'https://github.com/gwon9906',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: BookOpen,
      label: 'Blog',
      value: 'latetime.tistory.com',
      link: 'https://latetime.tistory.com/',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section ref={ref} className="section-container bg-white/30" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Contact</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            언제든지 연락주세요!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-6 hover-lift group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-2xl group-hover:scale-110 transition-transform`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-600 mb-1">
                    {contact.label}
                  </div>
                  <div className={`font-bold text-lg bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`}>
                    {contact.value}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-800 mb-4">
              함께 일하고 싶으신가요?
            </h3>
            <p className="text-dark-600 mb-6 leading-relaxed">
              AI/ML 프로젝트, 모델 최적화, 엣지 AI 솔루션 등<br />
              협업이나 기회에 대해 이야기 나누고 싶습니다.
            </p>
            <a
              href="mailto:gwon99065@naver.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5" />
              이메일 보내기
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center pt-12 border-t border-slate-200"
        >
          <p className="text-dark-600">
            © 2025 Haegwon Lee. Built with React + TypeScript + Tailwind CSS
          </p>
          <p className="text-dark-500 text-sm mt-2">
            Designed for showcasing AI/ML Engineering expertise
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
