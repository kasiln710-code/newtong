'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient glow-effect">
              {t('title')}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-base font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              {t('cta1')}
            </Link>
            <Link
              href={`/${locale}/solutions`}
              className="px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white text-base font-semibold hover:bg-white/10 transition-all"
            >
              {t('cta2')}
            </Link>
            <Link
              href={`/${locale}/docs`}
              className="px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white text-base font-semibold hover:bg-white/10 transition-all"
            >
              {t('cta3')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Cards Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { number: '150+', label: 'Countries' },
            { number: '99.9%', label: 'Uptime' },
            { number: '10B+', label: 'Messages/Year' },
            { number: '24/7', label: 'Support' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
