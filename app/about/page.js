import Link from 'next/link'
import { services, categories } from '@/data/services'
import LucideIcon from '@/components/LucideIcon'

export const metadata = {
  title: 'About Us | Suhana Service Centre Virar',
  description: 'Learn about Suhana Service Centre — Virar\'s trusted one-stop service centre for all government and digital services. Fast, reliable, affordable.',
}

export default function AboutPage() {
  const totalServices = services.length

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/10 flex items-center gap-2 mx-auto w-fit">
            <LucideIcon name="Building2" size={16} /> About Us
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            About Suhana<br /><span className="text-orange-400">Service Centre</span>
          </h1>
          <p className="text-blue-200 text-lg">आपकी सेवा, हमारा संकल्प</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-5">
                Your Trusted Service Centre in Virar
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Suhana Service Centre</strong> is a well-established, trusted service centre located in Virar (East), offering a comprehensive range of government and digital services under one roof. We serve thousands of residents from Virar, Vasai, Nalasopara, and surrounding areas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our centre is managed by an experienced team that is dedicated to providing accurate, fast, and affordable assistance with all types of government applications, digital services, and document processing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that navigating government procedures can be complex and time-consuming. That's why we take care of every step for you — from document preparation to final submission — ensuring a smooth and hassle-free experience.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'Building2', title: 'Established Centre', sub: 'Trusted by community' },
                  { icon: 'CheckCircle2', title: `${totalServices}+ Services`, sub: 'All under one roof' },
                  { icon: 'Zap', title: 'Fast Processing', sub: 'Minimal wait time' },
                  { icon: 'CreditCard', title: 'Affordable', sub: 'Transparent charges' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <LucideIcon name={item.icon} size={24} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-blue-900 text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {/* Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                    <LucideIcon name="Target" size={20} />
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To make government and digital services accessible, affordable, and hassle-free for every resident of Virar and surrounding areas. We aim to bridge the gap between citizens and government services through expert guidance and efficient processing.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                    <LucideIcon name="Eye" size={20} />
                  </div>
                  <h3 className="font-bold text-orange-900 text-lg">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  To be the most trusted and comprehensive service centre in Virar, where every citizen can walk in with a problem and walk out with a solution. We envision a community where no one is left behind due to lack of knowledge or access to government services.
                </p>
              </div>
              {/* Values */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white">
                    <LucideIcon name="Gem" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Our Values</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Honesty', 'Transparency', 'Reliability', 'Efficiency', 'Respect', 'Commitment'].map(v => (
                    <div key={v} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <LucideIcon name="Check" size={14} className="text-green-500" /> {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 pattern-bg border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Professional Services</h2>
            <p className="section-subtitle">Complete support for over {totalServices} services across multiple categories</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map(cat => {
              const count = services.filter(s => s.category === cat.id).length
              return (
                <Link key={cat.id} href={`/services?cat=${cat.id}`}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover block group hover:shadow-md transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                      <LucideIcon name={cat.icon} size={36} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="font-black text-blue-900 text-sm uppercase tracking-tight mb-2">{cat.label}</div>
                  <div className="inline-block bg-blue-600/5 px-3 py-1 rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest">
                    {count} services
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Visit Us Today</h2>
          <p className="text-blue-200 mb-7 max-w-lg mx-auto text-base">
            We're conveniently located in Virar (East). Walk in anytime or contact us first.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-7 inline-block backdrop-blur-sm border border-white/20">
            <p className="text-white text-base flex items-center gap-3">
              <LucideIcon name="MapPin" size={24} className="text-orange-400" />
              Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:9619439243" className="btn-accent px-7 py-3 flex items-center gap-2">
              <LucideIcon name="Phone" size={18} /> 9619439243
            </a>
            <a href="tel:8424842232" className="btn-outline px-7 py-3 flex items-center gap-2">
              <LucideIcon name="Phone" size={18} /> 8424842232
            </a>
            <Link href="/contact" className="bg-white text-blue-800 font-bold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
              <LucideIcon name="MapPin" size={18} /> Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
