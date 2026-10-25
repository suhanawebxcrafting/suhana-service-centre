import Link from 'next/link'
import { locations } from '@/data/locations'
import { categories, services } from '@/data/services'
import { prisma } from '@/lib/prisma'
import SitemapExplorer from './SitemapExplorer'
import { Compass, Layers, MapPin, Printer, BookOpen, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: '#1 Complete HTML Sitemap & Service Directory | Suhana',
  description: 'Explore the complete directory of 114+ government services, 17 regional location hubs, Xerox delivery coverage, and 23+ guides at Suhana Service Center Virar.',
  alternates: {
    canonical: '/sitemap',
  },
}

export default async function SitemapPage() {
  let blogs = []
  try {
    const { unstable_cache } = require('next/cache')
    const getCachedBlogs = unstable_cache(
      async () => await prisma.blog.findMany({
        where: { isPublished: true },
        select: { title: true, slug: true, category: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
      }),
      ['sitemap-html-blogs'],
      { tags: ['blogs'] }
    )
    blogs = await getCachedBlogs()
  } catch (e) {
    console.warn('Could not fetch blogs for HTML sitemap:', e.message)
  }

  const stats = {
    totalServices: services.length,
    totalLocations: locations.length,
    totalLocationPages: services.length * locations.length,
    totalBlogs: blogs.length,
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-black uppercase tracking-wider mb-4 border border-blue-200 shadow-xs">
            <Compass size={14} className="text-blue-600 animate-spin-slow" />
            Top-Level Master Directory
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sitemap & Index</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-3xl leading-relaxed">
            Welcome to the master directory of Suhana Service Center. Navigate through all 114 government services, 17 regional location hubs, instant print delivery points, and official step-by-step guides.
          </p>
        </div>

        {/* Live Stat Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-black">
              <Layers size={24} />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">{stats.totalServices}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Government Services</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 font-black">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">{stats.totalLocations}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Regional Hubs</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-black">
              <Printer size={24} />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">2,100+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Indexed Pages</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 font-black">
              <BookOpen size={24} />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">{stats.totalBlogs}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Guides</div>
            </div>
          </div>
        </div>

        {/* Quick Main Links Section */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm mb-12">
          <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-blue-600 rounded-full inline-block"></span>
            Primary Navigation Pages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { name: 'Home Page', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'All Services Catalog', href: '/services' },
              { name: 'Location Hubs', href: '/locations' },
              { name: 'Xerox & Print Delivery', href: '/xerox-delivery' },
              { name: 'Blog & Articles', href: '/blog' },
              { name: 'Gallery & Media', href: '/gallery' },
              { name: 'Contact & Support', href: '/contact' },
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/70 hover:border-blue-300 text-slate-700 hover:text-blue-700 font-bold text-xs flex items-center gap-2 transition-all"
              >
                <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                <span className="truncate">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Client-Side Interactive Explorer */}
        <SitemapExplorer
          services={services}
          locations={locations}
          categories={categories}
          blogs={blogs}
        />

      </div>
    </div>
  )
}
