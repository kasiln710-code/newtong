import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">服务中心 / Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI 驱动的智能销售与客户服务解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Sales */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-500/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">AI 智能销售系统</h2>
                  <p className="text-gray-400">AI Sales Assistant</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg">
                通过 AI 与多渠道通信能力，帮助企业建立自动化销售流程。
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">核心功能</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">智能线索挖掘</h4>
                        <p className="text-sm text-gray-400">AI 自动识别高价值潜在客户</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">自动化跟进</h4>
                        <p className="text-sm text-gray-400">多渠道自动触达与跟进</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">销售数据分析</h4>
                        <p className="text-sm text-gray-400">实时销售漏斗与转化分析</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">个性化营销</h4>
                        <p className="text-sm text-gray-400">基于用户行为的精准营销</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">适用场景</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 text-sm">电商获客</span>
                    <span className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 text-sm">SaaS 销售</span>
                    <span className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 text-sm">金融营销</span>
                    <span className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 text-sm">教育推广</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Customer Service */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-400/10 border border-purple-500/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">智能客户服务</h2>
                  <p className="text-gray-400">AI Customer Service</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg">
                支持多语言 AI 客服，7×24 小时自动响应全球客户。
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">核心功能</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">多语言支持</h4>
                        <p className="text-sm text-gray-400">支持 50+ 种语言自动识别与回复</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">智能问答</h4>
                        <p className="text-sm text-gray-400">AI 理解上下文，精准回答客户问题</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">人机协同</h4>
                        <p className="text-sm text-gray-400">复杂问题自动转人工</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">全渠道接入</h4>
                        <p className="text-sm text-gray-400">统一管理 WhatsApp、邮件、短信等渠道</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">适用场景</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-sm">售前咨询</span>
                    <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-sm">售后支持</span>
                    <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-sm">订单查询</span>
                    <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 text-sm">投诉处理</span>
                  </div>
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
