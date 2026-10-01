import XeroxDeliveryContent from '@/components/XeroxDeliveryContent'
import { getLocationBySlug, locations } from '@/data/locations'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import LucideIcon from '@/components/LucideIcon'

export function generateStaticParams() {
  return locations.map((location) => ({
    locationSlug: location.slug,
  }))
}

export function generateMetadata({ params }) {
  const location = getLocationBySlug(params.locationSlug)
  
  if (!location) {
    return { title: 'Location Not Found' }
  }

  const loc = location.name
  const locLower = loc.toLowerCase()
  const subLocs = location.subLocations || []

  // Clean, curated 50 keywords — Google ignores meta keywords tag but Bing still reads them
  const keywords = [
    `xerox in ${locLower}`, `xerox ${locLower}`, `xerox shop ${locLower}`,
    `print shop ${locLower}`, `cheapest xerox ${locLower}`, `color xerox ${locLower}`,
    `xerox delivery ${locLower}`, `doorstep xerox ${locLower}`,
    `A4 xerox ${locLower}`, `jumbo xerox ${locLower}`, `A3 print ${locLower}`,
    `blackbook printing ${locLower}`, `spiral binding ${locLower}`, `lamination ${locLower}`,
    `school document print ${locLower}`, `affordable printing ${locLower}`,
    `student xerox ${locLower}`, `college project print ${locLower}`,
    `pvc card printing ${locLower}`, `visiting card ${locLower}`,
    `suhana service center ${locLower}`,
    'xerox near me', 'xerox shop near me', 'print shop near me',
    'cheapest xerox near me', 'color xerox near me', 'xerox delivery',
    'doorstep xerox delivery', 'home delivery printing', 'whatsapp print order',
    'same day print delivery', 'online print order', 'affordable printing',
    'school document print', 'homework print near me', 'tc print near me',
    'blackbook printing', 'lamination near me', 'sasta xerox',
    'student xerox near me', 'admit card print near me',
    ...subLocs.slice(0, 10).map(s => `xerox in ${s.toLowerCase()}`),
  ]

  return {
    title: `Top 1 Xerox & Printing Shop in ${loc} | Doorstep Delivery`,
    description: `Looking for the cheapest & best Xerox shop in ${loc}? Get A4, Jumbo, color prints, lamination, and blackbook binding with doorstep delivery across ${loc}.`,
    keywords: keywords,
    openGraph: {
      title: `No. 1 Xerox & Print Delivery in ${loc}`,
      description: `Fast print and doorstep delivery for A4, A3, Jumbo A0, blackbook, and smart cards in ${loc}.`,
    },
    alternates: {
      canonical: `https://suhanaservicecentre.in/xerox-delivery/${location.slug}`,
    }
  }
}

export default function LocalXeroxPage({ params }) {
  const location = getLocationBySlug(params.locationSlug)

  if (!location) {
    notFound()
  }

  // Generate LocalBusiness Schema specific to this location
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Suhana Service Centre - Print & Xerox in ${location.name}`,
    image: 'https://suhanaservicecentre.in/og-image.jpg',
    telephone: '+917709709243',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
      postalCode: '401305',
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
    priceRange: '₹',
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Printing and Document Delivery Services'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <XeroxDeliveryContent location={location} />
      
      {/* Areas We Serve - Local SEO Footer */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <LucideIcon name="Map" size={14} /> Local Coverage
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">Print Delivery Across <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vasai-Virar</span></h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Find our specialized print & copy services in your local area with guaranteed fast delivery.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {locations.map((loc) => (
              <Link 
                key={loc.slug} 
                href={`/xerox-delivery/${loc.slug}`}
                className={`group flex items-center justify-between p-5 rounded-3xl bg-white border transition-all duration-300 ${
                  loc.slug === location.slug 
                  ? 'border-blue-600 shadow-[0_8px_30px_rgb(59,130,246,0.15)] ring-4 ring-blue-600/10 pointer-events-none scale-105 z-10' 
                  : 'border-gray-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    loc.slug === location.slug ? 'bg-blue-600 text-white' : 'bg-blue-50/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <LucideIcon name="MapPin" size={20} className={loc.slug !== location.slug ? 'group-hover:scale-110 transition-transform duration-300' : ''} />
                  </div>
                  <span className={`text-sm transition-colors ${
                    loc.slug === location.slug ? 'font-black text-blue-900' : 'font-extrabold text-gray-700 group-hover:text-blue-950'
                  }`}>{loc.name}</span>
                </div>
                {loc.slug === location.slug ? (
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></div>
                ) : (
                  <LucideIcon name="ChevronRight" size={20} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
