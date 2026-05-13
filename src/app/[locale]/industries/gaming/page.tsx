import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';

export default async function GamingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'industryGaming' });

  const channels = ['sms', 'whatsapp', 'voice', 'email'] as const;

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('description')}</p>
        </div>
        <div className="space-y-8">
          {channels.map((ch) => (
            <div key={ch} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4">{t(`${ch}.title`)}</h2>
              <p className="text-gray-300 leading-relaxed">{t(`${ch}.description`)}</p>
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
