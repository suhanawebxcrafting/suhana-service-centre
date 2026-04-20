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
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            <div className={`relative w-12 h-12 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-105 flex items-center justify-center rounded-xl p-1 ${!scrolled && isHomePage ? 'bg-white/10 backdrop-blur-sm shadow-lg shadow-white/5' : ''}`}>
              <Image
                src="/logo.png"
                alt="Suhana Service Centre Logo"
                fill
                className={`object-contain transition-all duration-300 ${!scrolled && isHomePage ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] brightness-[1.1]' : ''}`}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base lg:text-lg leading-tight transition-colors ${textColor}`}>
                Suhana Service
              </span>
              <span className={`text-xs font-semibold tracking-wider transition-colors ${accentColor}`}>
                CENTRE
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : textColor + ' hover:bg-blue-50/50 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9619439243"
              className="ml-3 btn-accent text-sm py-2 px-5 rounded-lg flex items-center gap-2"
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
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2">
            <a href="tel:9619439243" className="flex-1 btn-primary text-sm py-2.5 justify-center text-center rounded-lg flex items-center gap-2">
              <LucideIcon name="Phone" size={16} /> Call Now
            </a>
            <a href="https://wa.me/919619439243" className="flex-1 justify-center text-center bg-green-500 hover:bg-green-600 text-white text-sm py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <LucideIcon name="MessageCircle" size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
