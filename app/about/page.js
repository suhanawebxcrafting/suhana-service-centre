import Link from 'next/link'
import { services, categories } from '@/data/services'
import LucideIcon from '@/components/LucideIcon'
import CategoryLink from '@/components/CategoryLink'

export const metadata = {
  title: 'About Us — Suhana Service Center Virar',
  description: 'Learn about Suhana Service Center — Virar East\'s trusted one-stop center for Aadhaar, PAN, Passport & 70+ government services.',
  keywords: ['about suhana service center', 'service center virar east', 'trusted service center virar', 'government services virar vasai nalasopara'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Suhana Service Center — Virar East',
    description: 'Your trusted one-stop center for all government & digital services in Virar.',
  },
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
            About Suhana<br /><span className="text-orange-400">Service center</span>
          </h1>
          <p className="text-blue-200 text-lg">आपकी सेवा, हमारा संकल्प</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-5">
                Your Trusted Service center in Virar
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Suhana Service center</strong> is a well-established, trusted service center located in Virar (East), offering a comprehensive range of government and digital services under one roof. We serve thousands of residents from Virar, Vasai, Nalasopara, and surrounding areas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our center is managed by an experienced team that is dedicated to providing accurate, fast, and affordable assistance with all types of government applications, digital services, and document processing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that navigating government procedures can be complex and time-consuming. That's why we take care of every step for you — from document preparation to final submission — ensuring a smooth and hassle-free experience.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'Building2', title: 'Established Center', sub: 'Trusted by community' },
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
                  To be the most trusted and comprehensive service center in Virar, where every citizen can walk in with a problem and walk out with a solution. We envision a community where no one is left behind due to lack of knowledge or access to government services.
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
                <CategoryLink key={cat.id} catId={cat.id}
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
                </CategoryLink>
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
            <a href="tel:7709709243" className="btn-accent px-7 py-3 flex items-center gap-2">
              <LucideIcon name="Phone" size={18} /> 7709709243
            </a>
            <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer" className="btn-outline px-7 py-3 flex items-center gap-2">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
              </svg> WhatsApp
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

