'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function GlobalCoverage() {
  const t = useTranslations('coverage');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[500px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 overflow-hidden"
        >
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3B82F610_1px,transparent_1px),linear-gradient(to_bottom,#3B82F610_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

          {/* Global Network Animation */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center space-y-8">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl"
              ></motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { region: 'Asia Pacific', count: '60+' },
                  { region: 'Middle East', count: '25+' },
                  { region: 'Europe', count: '40+' },
                  { region: 'Africa', count: '30+' }
                ].map((region, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-2">{region.count}</div>
                    <div className="text-sm text-gray-400">{region.region}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Connection Lines Animation */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 20}%`
              }}
              animate={{
                opacity: [0, 1, 0],
                height: [0, 80, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
