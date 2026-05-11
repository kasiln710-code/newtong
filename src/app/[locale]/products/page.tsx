import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">产品中心 / Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            全渠道通信能力，助力企业全球化发展
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Global SMS */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">全球短信服务</h2>
                <p className="text-gray-400">Global SMS Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              提供稳定、安全、高到达率的国际短信能力，覆盖验证码、通知、营销等多种场景。
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                全球线路覆盖
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                智能路由切换
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                实时状态回执
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                高并发能力
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                API 快速接入
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI 风控识别
              </div>
            </div>
          </div>

          {/* WhatsApp Business */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">WhatsApp Business 接入</h2>
                <p className="text-gray-400">WhatsApp Business API</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              帮助企业快速建立全球即时通信能力，实现客户营销、互动与服务。
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Business API 接入
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                多账号管理
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI 自动回复
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                客户会话管理
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                多语言支持
              </div>
            </div>
          </div>

          {/* AI Voice Bot */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">AI 语音机器人</h2>
                <p className="text-gray-400">AI Voice Bot</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              通过 AI 语音能力，实现自动外呼、语音通知与客户交互。
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                催收通知
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                订单确认
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                客户回访
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                营销外呼
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                服务提醒
              </div>
            </div>
          </div>

          {/* Email Service */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">邮件服务</h2>
                <p className="text-gray-400">Email Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              全球高送达邮件能力，支持营销邮件与系统通知。
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                高送达率
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                营销邮件
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                系统通知
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                邮件模板
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                数据分析
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
