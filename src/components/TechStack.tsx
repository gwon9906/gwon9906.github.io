import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion'; // PDF 출력용: 미사용
import { useRef } from 'react';
import { Code2, Cpu, Wrench } from 'lucide-react';

interface TechItem {
  name: string;
  level: number;
  category: string;
}

const TechStack = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: "-100px" }); // PDF 출력용: 미사용

  const techStack: TechItem[] = [
    // Expert
    { name: 'PyTorch', level: 95, category: 'expert' },
    { name: 'TensorFlow', level: 90, category: 'expert' },
    { name: 'Python', level: 95, category: 'expert' },
    { name: 'LSTM / Encoder-Decoder', level: 90, category: 'expert' },
    { name: 'Model Compression (BAM)', level: 95, category: 'expert' },

    // Advanced
    { name: 'Raspberry Pi', level: 85, category: 'advanced' },
    { name: 'LoRa Communication', level: 85, category: 'advanced' },
    { name: 'Embedded Systems', level: 80, category: 'advanced' },
    { name: 'C/C++', level: 75, category: 'advanced' },

    // Intermediate
    { name: 'Git', level: 70, category: 'intermediate' },
    { name: 'Linux', level: 65, category: 'intermediate' },
  ];

  const categories = [
    {
      id: 'expert',
      title: 'Expert',
      icon: Code2,
      color: 'from-primary-500 to-blue-600',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-700',
      description: '프로젝트에 실제 사용하고 깊이 이해'
    },
    {
      id: 'advanced',
      title: 'Advanced',
      icon: Cpu,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      description: '실무 프로젝트에 자주 사용'
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      icon: Wrench,
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      description: '기본적인 사용 가능'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section ref={ref} className="section-container bg-white/30" id="tech-stack">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }} // PDF 출력용: 항상 표시
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Tech Stack</h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            실제 프로젝트에서 사용한 핵심 기술들
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }} // PDF 출력용: 항상 표시
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="glass-card p-6 lg:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-2xl`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-800">{category.title}</h3>
                  <p className="text-sm text-dark-600">{category.description}</p>
                </div>
              </div>

              {/* Tech Items */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show" // PDF 출력용: 항상 표시
                className="space-y-4"
              >
                {techStack
                  .filter(tech => tech.category === category.id)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      variants={item}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-dark-800">{tech.name}</span>
                        <span className={`text-sm font-medium ${category.textColor}`}>
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }} // PDF 출력용: 항상 표시
                          transition={{
                            delay: categoryIndex * 0.2 + techIndex * 0.1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // PDF 출력용: 항상 표시
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center glass-card p-6 max-w-4xl mx-auto"
        >
          <p className="text-dark-700 leading-relaxed">
            <span className="font-bold text-primary-600">Model Optimization</span>과{' '}
            <span className="font-bold text-blue-600">Embedded AI</span>에 특화된 기술 스택을 보유하고 있으며,
            실제 프로젝트를 통해 <span className="font-bold text-indigo-600">End-to-End</span> 구현 경험을 쌓아왔습니다.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;
