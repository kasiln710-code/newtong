'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AIFeatures() {
  const t = useTranslations('ai');

  const features = [
    { key: 'chatbot', icon: '🤖' },
    { key: 'sales', icon: '💼' },
    { key: 'reply', icon: '💬' },
    { key: 'tags', icon: '🏷️' },
    { key: 'translate', icon: '🌐' },
    { key: 'marketing', icon: '📊' }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {t(`features.${feature.key}`)}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* AI Workflow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {['Input', 'AI Processing', 'Output', 'Analytics'].map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold"
                >
                  {i + 1}
                </motion.div>
                <div className="ml-4">
                  <div className="text-white font-semibold">{step}</div>
                  <div className="text-sm text-gray-400">Automated</div>
                </div>
                {i < 3 && (
                  <svg className="hidden md:block w-8 h-8 mx-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
