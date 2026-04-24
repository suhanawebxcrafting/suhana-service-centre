'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LucideIcon from './LucideIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/xerox-delivery', label: 'Xerox Delivery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isHomePage = pathname === '/'
  const navBackground = scrolled || !isHomePage ? 'navbar-glass shadow-md' : 'bg-transparent'
  const textColor = scrolled || !isHomePage ? 'text-blue-900' : 'text-white'
  const accentColor = scrolled || !isHomePage ? 'text-orange-600' : 'text-orange-400'
  const iconColor = scrolled || !isHomePage ? 'text-gray-700' : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-centre justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-centre gap-2 lg:gap-3 group">
            <div className={`relative w-12 h-12 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-105 flex items-centre justify-centre rounded-xl p-1 ${!scrolled && isHomePage ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-white shadow-sm'}`}>
              <Image
                src="/logo.png"
                alt="Suhana Service centre Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base lg:text-lg leading-tight transition-colors ${textColor}`}>
                Suhana Service
              </span>
              <span className={`text-xs font-semibold tracking-wider transition-colors ${accentColor}`}>
                centre
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-centre gap-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${pathname === link.href
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : textColor + ' hover:bg-blue-50/50 hover:text-blue-600'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:7709709243"
              className="ml-3 btn-accent text-sm py-2 px-5 rounded-lg flex items-centre gap-2"
            >
              <LucideIcon name="Phone" size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || !isHomePage ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/15'}`}
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${scrolled || !isHomePage ? 'bg-gray-700' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 rounded transition-all duration-300 ${scrolled || !isHomePage ? 'bg-gray-700' : 'bg-white'} ${isOpen ? 'opacity-0 w-0' : 'w-full'}`}></span>
              <span className={`block h-0.5 w-full rounded transition-all duration-300 ${scrolled || !isHomePage ? 'bg-gray-700' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-1">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${pathname === link.href
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2">
            <a href="tel:7709709243" className="flex-1 btn-primary text-sm py-2.5 justify-centre text-centre rounded-lg flex items-centre gap-2">
              <LucideIcon name="Phone" size={16} /> Call Now
            </a>
            <a href="https://wa.me/917709709243" className="flex-1 justify-centre text-centre bg-green-500 hover:bg-green-600 text-white text-sm py-2.5 rounded-lg font-semibold transition-colors flex items-centre gap-2" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
              </svg> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

