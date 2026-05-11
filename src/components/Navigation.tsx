'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

const localeNames: Record<string, string> = {
  zh: '中文',
  en: 'English',
  ko: '한국어',
  es: 'Español',
  ar: 'العربية'
};

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('products'), href: `/${locale}/products` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('technical'), href: `/${locale}/technical` },
    { name: t('about'), href: `/${locale}/about` }
  ];

  const switchLocale = (newLocale: string) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    return path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060816]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">
                RongXin
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center space-x-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>{localeNames[locale]}</span>
              </button>

              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-[#0a0d1f] border border-white/10 rounded-lg shadow-xl overflow-hidden"
                >
                  {Object.entries(localeNames).map(([code, name]) => (
                    <Link
                      key={code}
                      href={switchLocale(code)}
                      onClick={() => setLangMenuOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-white/5 transition-all ${
                        locale === code ? 'text-blue-400' : 'text-gray-300'
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              {t('home')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#0a0d1f] border-t border-white/5"
        >
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/5">
              {Object.entries(localeNames).map(([code, name]) => (
                <Link
                  key={code}
                  href={switchLocale(code)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm hover:bg-white/5 ${
                    locale === code ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
