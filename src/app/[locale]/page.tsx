import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GlobalCoverage from '@/components/GlobalCoverage';
import Products from '@/components/Products';
import AIFeatures from '@/components/AIFeatures';
import Industries from '@/components/Industries';
import Footer from '@/components/Footer';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero locale={locale} />
      <GlobalCoverage />
      <Products />
      <AIFeatures />
      <Industries />
      <Footer locale={locale} />
    </main>
  );
}
