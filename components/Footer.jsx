import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/services'
import LucideIcon from './LucideIcon'

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'All Services' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/privacy', label: 'Privacy Policy' },
  ]

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 bg-white rounded-2xl p-1 shadow-lg shadow-black/40 flex items-center justify-center transition-transform hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Suhana Service center"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <div className="font-bold text-lg lg:text-xl leading-tight text-white tracking-tight">
                  Suhana Service
                </div>
                <div className="text-orange-400 text-sm font-bold tracking-widest uppercase">
                  center
                </div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              आपकी सेवा, हमारा संकल्प<br />
              <span className="text-blue-300 font-medium">All Online Services Under One Roof</span>
            </p>
            <p className="text-blue-300 text-xs leading-relaxed mb-6">
              Your trusted service center in Virar for all government and digital services. Fast, reliable, and affordable.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-400 flex items-center justify-center transition-colors text-white" title="WhatsApp">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                </svg>              </a>
              <a href="tel:7709709243"
                className="w-10 h-10 rounded-lg bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors text-white" title="Call Us">
                <LucideIcon name="Phone" size={18} />
              </a>
              <a href="mailto:suhanaservicec@gmail.com"
                className="w-10 h-10 rounded-lg bg-red-600 hover:bg-red-500 flex items-center justify-center transition-colors text-white" title="Email Us">
                <LucideIcon name="Mail" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-400 rounded-full inline-block"></span>
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-orange-400 text-sm font-medium transition-colors flex items-center gap-2">
                    <span className="text-orange-400">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-400 rounded-full inline-block"></span>
              Service Categories
            </h3>
            <ul className="space-y-3.5">
              {categories.slice(0, 7).map(cat => (
                <li key={cat.id}>
                  <Link href="/services" className="text-blue-200 hover:text-orange-400 text-sm font-medium transition-colors flex items-center gap-2 group">
                    <LucideIcon name={cat.icon} size={14} className="text-orange-400 group-hover:scale-110 transition-transform" /> {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-400 rounded-full inline-block"></span>
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <LucideIcon name="MapPin" size={16} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Office No- 04, Raipada,<br />
                    Nr. Anand Gaushalla,<br />
                    Chandansar Road,<br />
                    Virar (E) - 401305
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <LucideIcon name="Phone" size={16} className="text-orange-400" />
                </div>
                <div className="space-y-1">
                  <a href="tel:7709709243" className="block text-blue-200 hover:text-white text-sm transition-colors">7709709243</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <LucideIcon name="Mail" size={16} className="text-orange-400" />
                </div>
                <a href="mailto:suhanaservicec@gmail.com" className="text-blue-200 hover:text-white text-sm transition-colors break-all leading-relaxed">
                  suhanaservicec@gmail.com
                </a>
              </div>
              
              <div className="mt-4 rounded-xl overflow-hidden h-36 border-[2px] border-blue-800/50 shadow-inner group relative flex flex-col">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
                <div className="flex-1">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Suhana%20Service%20centre%20Virar&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className="grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-500 h-full w-full"
                  ></iframe>
                </div>
                <a 
                  href="https://share.google/WSHO8xeatiA8sLkRW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-[11px] font-bold py-1.5 px-3 flex items-center justify-center gap-1.5 hover:bg-blue-500 transition-colors z-20"
                >
                  <LucideIcon name="MapPin" size={12} /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-blue-300 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Suhana Service center, Virar
              <Link href="/admin/login" className="text-blue-300/50 hover:text-white transition-colors cursor-default">.</Link>
              {' '}All rights reserved
            </p>
            <span className="hidden sm:inline text-blue-800">|</span>
            <p className="text-blue-300 text-xs text-center sm:text-left">
              Developed by:{' '}
              <a href="https://webxcrafting.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">
                webxcrafting.in
              </a>
            </p>
          </div>
          <p className="text-blue-400 text-xs text-center sm:text-right">
            आपकी सेवा, हमारा संकल्प 🙏
          </p>
        </div>
      </div>
    </footer>
  )
}

