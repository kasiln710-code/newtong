import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">关于我们 / About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            连接全球业务机会，助力中国企业走向世界
          </p>
        </div>

        {/* Company Introduction */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">公司介绍</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                融信通信（RongXin）是一家专注于全球通信服务的科技公司，致力于为中国企业提供出海必备的通信基础设施。
              </p>
              <p>
                我们整合了全球 SMS、WhatsApp、Email、Voice 等多种通信渠道，结合 AI 技术，
                帮助企业实现验证通知、营销获客、客户服务与智能运营的全场景覆盖。
              </p>
              <p>
                深度覆盖东南亚、中东、欧洲、非洲及"一带一路"沿线国家，
                为跨境电商、金融科技、SaaS、游戏、物流等行业提供稳定可靠的全球通信解决方案。
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '可靠稳定',
                description: '99.9% 高可用保障，7×24 小时技术支持',
                icon: '🛡️'
              },
              {
                title: '全球覆盖',
                description: '深度覆盖 150+ 国家与地区，一站式接入',
                icon: '🌍'
              },
              {
                title: '智能高效',
                description: 'AI 驱动的智能路由与自动化运营',
                icon: '⚡'
              }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:border-blue-500/50 transition-all">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Partners */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">合作伙伴</h2>
          <div className="p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Alibaba Cloud',
                'AWS',
                'Twilio',
                'WhatsApp Business',
                'Google Cloud',
                'Microsoft Azure',
                'Huawei Cloud',
                'Tencent Cloud'
              ].map((partner, i) => (
                <div key={i} className="flex items-center justify-center h-20 rounded-lg bg-white/5 border border-white/10 text-gray-400 font-semibold hover:border-blue-500/50 transition-all">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">联系方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">企业邮箱</h3>
                  <p className="text-gray-400">contact@rongxin.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-green-500/20">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                  <p className="text-gray-400">+86 138 0000 0000</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/20">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Telegram</h3>
                  <p className="text-gray-400">@rongxin_support</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">微信</h3>
                  <p className="text-gray-400">rongxin_official</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
