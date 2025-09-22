import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Music, Globe, Clock } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const StatsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);

  const stats: Stat[] = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 500,
      suffix: 'M+',
      label: 'Active Users',
      color: 'text-blue-400',
    },
    {
      icon: <Music className="w-8 h-8" />,
      value: 100,
      suffix: 'M+',
      label: 'Songs Available',
      color: 'text-green-400',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 190,
      suffix: '+',
      label: 'Countries',
      color: 'text-purple-400',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 24,
      suffix: '/7',
      label: 'Hours Streaming',
      color: 'text-yellow-400',
    },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }, 16);
      });
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-500/10 to-purple-600/10"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              'linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
              'linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Numbers{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Speak
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join millions of music lovers who have made Vibeify their soundtrack to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                {/* Icon Container */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 ${stat.color} group-hover:scale-110 transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${stat.color}`}
                  style={{ filter: 'blur(10px)' }}
                />
              </div>

              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                key={counters[index]} // This will trigger re-render when counter changes
              >
                <span className={stat.color}>{counters[index]}</span>
                <span className="text-white">{stat.suffix}</span>
              </motion.div>

              <p className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>

              {/* Animated underline */}
              <motion.div
                className={`h-1 mx-auto mt-4 rounded-full bg-current ${stat.color}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: '60%' } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Join the Revolution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
