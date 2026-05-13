import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';

export default async function DocsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'docs' });

  const endpoints = [
    { method: 'POST', path: '/v1/sms/send', key: 'sms' },
    { method: 'POST', path: '/v1/whatsapp/send', key: 'whatsapp' },
    { method: 'POST', path: '/v1/voice/call', key: 'voice' },
    { method: 'POST', path: '/v1/email/send', key: 'email' }
  ] as const;

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('description')}</p>
        </div>
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t('auth.title')}</h2>
          <p className="text-gray-300 leading-relaxed">{t('auth.description')}</p>
        </div>
        <div className="space-y-6">
          {endpoints.map((ep) => (
            <div key={ep.key} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
              <span className="inline-block px-3 py-1 rounded text-xs font-bold text-white bg-green-500 mb-4">{ep.method}</span>
              <div className="font-mono text-cyan-400 text-lg mb-3">{ep.path}</div>
              <p className="text-gray-300 leading-relaxed">{t(`${ep.key}.description`)}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={`/${locale}`} className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:shadow-2xl transition-all">
            ← {t('cta')}
          </a>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
