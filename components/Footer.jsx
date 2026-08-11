import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/services'
import LucideIcon from './LucideIcon'

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'All Services' },
    { href: '/xerox-delivery', label: 'Xerox Delivery' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ]

  return (
    <footer className="hero-gradient relative text-white overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"></div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand (Takes up 4 columns on large screens) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-4 mb-8 group inline-flex">
              <div className="relative w-16 h-16 bg-white rounded-2xl p-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Image src="/logo.png" alt="Suhana Service center" fill className="object-contain p-1.5" />
              </div>
              <div>
                <div className="font-black text-xl lg:text-2xl leading-tight text-white tracking-tight group-hover:text-blue-100 transition-colors">
                  Suhana Service
                </div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 text-sm font-black tracking-[0.2em] uppercase">
                  center
                </div>
              </div>
            </Link>
            
            <p className="text-blue-100/70 text-[15px] leading-relaxed mb-6 font-medium max-w-sm">
              Your trusted service center in Virar for all government and digital services. <span className="text-white">Fast, reliable, and affordable.</span>
            </p>

            <div className="flex gap-4">
              <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] text-gray-300 hover:text-white" title="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>
              <a href="tel:7709709243"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] text-gray-300 hover:text-white" title="Call Us">
                <LucideIcon name="Phone" size={20} />
              </a>
              <a href="mailto:suhanaservicec@gmail.com"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500 hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(239,68,68,0.3)] text-gray-300 hover:text-white" title="Email Us">
                <LucideIcon name="Mail" size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Takes 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center text-blue-100/60 hover:text-white text-sm font-medium transition-colors">
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-400 mr-2">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                      {link.label === 'Xerox Delivery' && <span className="ml-2 text-xs">🚀</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Categories (Takes 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
              Top Services
            </h3>
            <ul className="space-y-4">
              {categories.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <Link href="/services" className="group flex items-center text-blue-100/60 hover:text-white text-sm font-medium transition-colors">
                    <LucideIcon name={cat.icon} size={16} className="text-blue-400/50 group-hover:text-blue-400 group-hover:scale-110 transition-all mr-3" /> 
                    <span className="group-hover:translate-x-1 transition-transform">{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Map (Takes 4 columns) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
              Reach Out
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <LucideIcon name="MapPin" size={20} />
                </div>
                <div>
                  <p className="text-blue-100/80 text-[13px] leading-relaxed font-medium">
                    Office No- 04, Raipada,<br />
                    Nr. Anand Gaushalla, Chandansar Road,<br />
                    Virar (E) - 401305
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <a href="tel:7709709243" className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <LucideIcon name="Phone" size={16} />
                  </div>
                  <span className="text-blue-100/90 font-semibold text-sm group-hover:text-white transition-colors">7709709243</span>
                </a>

                <a href="mailto:suhanaservicec@gmail.com" className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <LucideIcon name="Mail" size={16} />
                  </div>
                  <span className="text-blue-100/90 font-semibold text-sm group-hover:text-white transition-colors truncate">suhanaservicec@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Premium Mini Map */}
            <div className="rounded-2xl overflow-hidden h-32 border border-white/10 group relative flex flex-col shadow-lg">
              <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
              <div className="flex-1">
                <iframe 
                  width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Suhana%20Service%20centre%20Virar&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="grayscale-[50%] contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 h-full w-full"
                ></iframe>
              </div>
              <a href="https://share.google/WSHO8xeatiA8sLkRW" target="_blank" rel="noopener noreferrer"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold py-1.5 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-500 hover:border-blue-500 transition-all z-20 shadow-lg"
              >
                <LucideIcon name="Navigation" size={12} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p className="text-blue-100/50 text-xs font-medium text-center sm:text-left flex items-center gap-1">
              © {new Date().getFullYear()} Suhana Service center
              <Link href="/admin/login" className="text-transparent hover:text-white/20 transition-colors cursor-default select-none">.</Link>
            </p>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></span>
            <p className="text-blue-100/50 text-xs font-medium text-center sm:text-left">
              Crafted by{' '}
              <a href="https://webxcrafting.in" target="_blank" rel="noopener noreferrer" className="text-orange-400/80 hover:text-orange-400 transition-colors font-bold tracking-wide">
                WEBXCRAFTING
              </a>
            </p>
          </div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400 text-xs font-bold tracking-widest uppercase text-center sm:text-right">
            आपकी सेवा, हमारा संकल्प 🙏
          </p>
        </div>
      </div>
    </footer>
  )
}

