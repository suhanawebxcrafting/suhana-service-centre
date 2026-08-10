import XeroxDeliveryContent from '@/components/XeroxDeliveryContent'
import Link from 'next/link'
import { locations } from '@/data/locations'
import LucideIcon from '@/components/LucideIcon'

export const metadata = {
  title: 'Best Xerox & Document Print Delivery in Virar | Suhana Service Center',
  description: 'Need urgent printing? We offer fast print and doorstep delivery for A4, A3, Jumbo A0, blackbook, and smart cards across Vasai-Virar. Transparent pricing with ₹1.5 per page for B&W.',
  keywords: [
    'xerox shop near me virar',
    'document print delivery virar',
    'online xerox delivery',
    'doorstep printing vasai virar',
    'suhana service center printing',
    'cheap printing virar',
  ],
  alternates: {
    canonical: 'https://suhanaservicecentre.in/xerox-delivery',
  }
}

export default function XeroxDeliveryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suhana Service Centre - Print & Xerox Delivery',
    image: 'https://suhanaservicecentre.in/logo.png',
    telephone: '+917709709243',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Virar East',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
      postalCode: '401305',
    },
    areaServed: [
      { '@type': 'City', name: 'Virar' },
      { '@type': 'City', name: 'Vasai' },
      { '@type': 'City', name: 'Nalasopara' },
    ],
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
      <XeroxDeliveryContent />
      
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
            {locations.map((location) => (
              <Link 
                key={location.slug} 
                href={`/xerox-delivery/${location.slug}`}
                className="group flex items-center justify-between p-5 rounded-3xl bg-white border border-gray-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/80 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <LucideIcon name="MapPin" size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-extrabold text-gray-700 group-hover:text-blue-950 transition-colors text-sm">{location.name}</span>
                </div>
                <LucideIcon name="ChevronRight" size={20} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
