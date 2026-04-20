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
  ]

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 bg-white/10 rounded-2xl p-1.5 shadow-lg shadow-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Suhana Service Centre"
                  fill
                  className="object-contain p-1.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] brightness-[1.1]"
                />
              </div>
              <div>
                <div className="font-bold text-lg lg:text-xl leading-tight text-white tracking-tight">
                  Suhana Service
                </div>
                <div className="text-orange-400 text-sm font-bold tracking-widest uppercase">
                  Centre
                </div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              आपकी सेवा, हमारा संकल्प<br />
              <span className="text-blue-300 font-medium">All Online Services Under One Roof</span>
            </p>
            <p className="text-blue-300 text-xs leading-relaxed mb-6">
              Your trusted service centre in Virar for all government and digital services. Fast, reliable, and affordable.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/919619439243" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-500 hover:bg-green-400 flex items-center justify-center transition-colors text-white" title="WhatsApp">
                <LucideIcon name="MessageCircle" size={18} />
              </a>
              <a href="tel:9619439243"
                className="w-10 h-10 rounded-lg bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors text-white" title="Call Us">
                <LucideIcon name="Phone" size={18} />
              </a>
              <a href="mailto:onepointsolution786786@gmail.com"
                className="w-10 h-10 rounded-lg bg-red-600 hover:bg-red-500 flex items-center justify-center transition-colors text-white" title="Email Us">
                <LucideIcon name="Mail" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-400 rounded-full inline-block"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                    <span className="text-orange-400">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-base mt-7 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-400 rounded-full inline-block"></span>
              Service Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <Link href={`/services?cat=${cat.id}`} className="text-blue-200 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                    <LucideIcon name={cat.icon} size={14} className="text-orange-400 group-hover:scale-110 transition-transform" /> {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-400 rounded-full inline-block"></span>
              More Services
            </h3>
            <ul className="space-y-2">
              {categories.slice(5).map(cat => (
                <li key={cat.id}>
                  <Link href={`/services?cat=${cat.id}`} className="text-blue-200 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                    <span>{cat.icon}</span> {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
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
                  <a href="tel:9619439243" className="block text-blue-200 hover:text-white text-sm transition-colors">9619439243</a>
                  <a href="tel:8424842232" className="block text-blue-200 hover:text-white text-sm transition-colors">8424842232</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <LucideIcon name="Mail" size={16} className="text-orange-400" />
                </div>
                <a href="mailto:onepointsolution786786@gmail.com" className="text-blue-200 hover:text-white text-xs transition-colors break-all leading-relaxed">
                  onepointsolution786786<br />@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-300 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Suhana Service Centre, Virar. All rights reserved.
          </p>
          <p className="text-blue-400 text-xs">
            आपकी सेवा, हमारा संकल्प 🙏
          </p>
        </div>
      </div>
    </footer>
  )
}
