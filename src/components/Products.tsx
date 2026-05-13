'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Products() {
  const t = useTranslations('products');
  const locale = useLocale();

  const products = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      key: 'sms',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      key: 'whatsapp',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      key: 'voice',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      key: 'email',
      gradient: 'from-orange-500 to-red-400'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${product.gradient} mb-6`}>
                  {product.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {t(`${product.key}.title`)}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {t(`${product.key}.description`)}
                </p>

                {/* Learn More Arrow */}
                <Link href={`/${locale}/${product.key}`} className="mt-6 flex items-center text-sm font-medium text-blue-400 group-hover:text-cyan-400 transition-colors">
                  <span>{t('learnMore')}</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
