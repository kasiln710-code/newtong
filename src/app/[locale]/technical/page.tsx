import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function TechnicalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">技术优势 / Technical</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            企业级全球通信架构，保障稳定性与高可用性
          </p>
        </div>

        {/* Technical Architecture */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">技术架构</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '全球节点部署',
                description: '全球多区域节点部署，确保低延迟高可用',
                icon: '🌐'
              },
              {
                title: '智能链路调度',
                description: '实时监控链路质量，自动切换最优路由',
                icon: '🔄'
              },
              {
                title: 'AI 路由优化',
                description: 'AI 学习历史数据，智能优化通信路径',
                icon: '🤖'
              },
              {
                title: '多活架构',
                description: '多地域多活，单点故障自动容灾',
                icon: '⚡'
              },
              {
                title: '高并发处理',
                description: '支持百万级并发，峰值自动扩容',
                icon: '🚀'
              },
              {
                title: '实时监控系统',
                description: '7×24 小时监控预警，故障秒级响应',
                icon: '📊'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Process */}
        <div className="mb-20 p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">快速接入流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: '注册账号', desc: '在线注册，快速开通' },
              { step: '02', title: '获取 API Key', desc: '生成密钥，配置权限' },
              { step: '03', title: '接入测试', desc: '测试环境验证功能' },
              { step: '04', title: '联调上线', desc: '技术支持协助上线' },
              { step: '05', title: '全球部署', desc: '开始服务全球客户' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* API Documentation */}
        <div className="p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API 文档与 SDK</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            提供标准 RESTful API 与多语言 SDK，帮助开发者快速完成接入
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {['Java', 'Python', 'PHP', 'Node.js', 'Go'].map((lang, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-blue-500/50 transition-all cursor-pointer">
                <div className="text-4xl mb-2">
                  {lang === 'Java' && '☕'}
                  {lang === 'Python' && '🐍'}
                  {lang === 'PHP' && '🐘'}
                  {lang === 'Node.js' && '💚'}
                  {lang === 'Go' && '🔵'}
                </div>
                <div className="text-white font-semibold">{lang}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#0a0d1f] rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Example: Send SMS</span>
              <button className="px-3 py-1 rounded bg-white/5 text-xs text-gray-300 hover:bg-white/10 transition-colors">
                Copy
              </button>
            </div>
            <pre className="text-sm text-green-400 overflow-x-auto">
{`// Node.js Example
const Newtong = require('@newtong/sdk');

const client = new Newtong({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET'
});

await client.sms.send({
  to: '+1234567890',
  content: 'Your verification code is: 123456',
  template: 'verification'
});`}
            </pre>
          </div>
        </div>
      </div>

      <Footer locale={locale} />
    </main>
  );
}
