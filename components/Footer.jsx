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
    <footer className="relative bg-[#0b1121] text-white overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-10 pointer-events-none mix-blend-screen"></div>

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
                <LucideIcon name="MessageCircle" size={22} />
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
              
              <div className="flex items-center gap-4">
                <a href="tel:7709709243" className="flex-1 flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <LucideIcon name="PhoneCall" size={16} />
                  </div>
                  <span className="text-blue-100/90 font-semibold text-sm group-hover:text-white transition-colors">7709709243</span>
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

