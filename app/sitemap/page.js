import Link from 'next/link'
import { locations } from '@/data/locations'
import { categories, services } from '@/data/services'
import { CheckCircle2, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Sitemap | Suhana Service center',
  description: 'Complete sitemap of Suhana Service center. Find all our online services, print services, and location-based delivery options in Virar and Vasai.',
}

export default function SitemapPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-blue-950 mb-4 tracking-tight">
            HTML <span className="text-blue-600">Sitemap</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium max-w-2xl">
            Quickly navigate to any page or service on our website. This sitemap is designed to help you find what you need instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Main Pages */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_25px_rgb(0,0,0,0.03)]">
            <h2 className="text-2xl font-extrabold text-blue-950 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-400 rounded-full inline-block"></span> Main Pages
            </h2>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'All Services', path: '/services' },
                { name: 'Xerox & Print Delivery', path: '/xerox-delivery' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map(page => (
                <li key={page.path}>
                  <Link href={page.path} className="text-gray-700 hover:text-blue-600 font-semibold text-[15px] flex items-center gap-2 transition-colors">
                    <CheckCircle2 size={16} className="text-blue-500" /> {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories */}
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_25px_rgb(0,0,0,0.03)]">
            <h2 className="text-2xl font-extrabold text-blue-950 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span> Service Categories
            </h2>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat.id}>
                  <Link href="/services" className="text-gray-700 hover:text-blue-600 font-semibold text-[15px] flex items-center gap-2 transition-colors">
                    <CheckCircle2 size={16} className="text-blue-500" /> {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Location Based Services */}
        <div className="mt-12 bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-100 shadow-[0_4px_25px_rgb(0,0,0,0.03)]">
          <h2 className="text-2xl font-extrabold text-blue-950 mb-2 flex items-center gap-2">
            <span className="w-2 h-6 bg-green-500 rounded-full inline-block"></span> Local SEO Pages (Service by Location)
          </h2>
          <p className="text-gray-500 text-sm mb-8 font-medium">Explore specific services tailored for your exact location in Virar, Vasai & Nalasopara.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {locations.map(loc => (
              <div key={loc.slug}>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-1.5 text-[17px] border-b border-gray-100 pb-2">
                  <MapPin size={18} className="text-orange-500" /> {loc.name}
                </h3>
                <ul className="space-y-2.5">
                  {services.slice(0, 15).map(service => (
                    <li key={service.slug}>
                      <Link href={`/locations/${loc.slug}/${service.slug}`} className="text-gray-500 hover:text-blue-600 font-medium text-sm transition-colors line-clamp-1" title={`${service.name} in ${loc.name}`}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                  {services.length > 15 && (
                    <li className="text-xs text-gray-400 font-semibold italic pt-2">
                      + {services.length - 15} more services
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
