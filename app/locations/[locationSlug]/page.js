import Link from 'next/link'
import { notFound } from 'next/navigation'
import { locations, getLocationBySlug } from '@/data/locations'
import { services, categories } from '@/data/services'
import LucideIcon from '@/components/LucideIcon'

export async function generateStaticParams() {
  return locations.map(loc => ({ locationSlug: loc.slug }))
}

const SITE_URL = 'https://suhanaservicecentre.in'

export async function generateMetadata({ params }) {
  const location = getLocationBySlug(params.locationSlug)
  if (!location) return { title: 'Location Not Found' }

  const loc = location.name
  const locLower = loc.toLowerCase()
  const subLocs = location.subLocations || []

  return {
    title: `#1 CSC Service Center in ${loc} | 70+ Govt Services`,
    description: `Looking for the best CSC & Aaple Sarkar service center in ${loc}? Fast doorstep assistance for Aadhaar, PAN, Passport, Certificates & Xerox. Call 7709709243.`,
    keywords: [
      `csc center ${locLower}`,
      `service center ${locLower}`,
      `service centre ${locLower}`,
      `maha e seva kendra ${locLower}`,
      `setu kendra ${locLower}`,
      `aaple sarkar ${locLower}`,
      `aadhaar card ${locLower}`,
      `pan card agent ${locLower}`,
      `passport agent ${locLower}`,
      `xerox shop ${locLower}`,
      `suhana service center ${locLower}`,
      ...subLocs.slice(0, 10).map(s => `service center in ${s.toLowerCase()}`),
    ],
    alternates: {
      canonical: `/locations/${params.locationSlug}`,
    },
    openGraph: {
      title: `#1 CSC Service Center in ${loc} | Suhana Service Center`,
      description: `Trusted government & digital service provider in ${loc}. 70+ services with doorstep support. Call 7709709243.`,
    },
  }
}

export default function LocationHubPage({ params }) {
  const location = getLocationBySlug(params.locationSlug)
  if (!location) notFound()

  const subLocs = location.subLocations || []

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Suhana Service Center - ${location.name}`,
    image: `${SITE_URL}/logo.png`,
    telephone: '+917709709243',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road',
      addressLocality: location.name,
      addressRegion: 'Maharashtra',
      postalCode: '401305',
      addressCountry: 'IN',
    },
    priceRange: '₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '584',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: [
      { '@type': 'City', name: location.name },
      ...subLocs.map(sub => ({ '@type': 'Place', name: sub }))
    ],
    url: `${SITE_URL}/locations/${location.slug}`,
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` },
      { '@type': 'ListItem', position: 3, name: location.name, item: `${SITE_URL}/locations/${location.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="breadcrumb flex items-center gap-2 text-sm mb-5 text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>›</span>
            <span className="text-white font-bold">{location.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/15 mb-3">
                <LucideIcon name="Award" size={14} /> #1 Rated CSC Center in {location.name}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Government & Digital Services in <span className="text-yellow-300">{location.name}</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg max-w-2xl mt-3 font-medium">
                Complete online portal assistance, doorstep document pickup, and Aaple Sarkar services for all residents across {location.name}.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 flex-shrink-0">
              <a
                href="tel:7709709243"
                className="bg-white hover:bg-blue-50 text-blue-900 font-extrabold px-5 py-3 rounded-2xl shadow-lg transition-all flex items-center gap-2 text-sm"
              >
                <LucideIcon name="PhoneCall" size={18} className="text-blue-600" />
                Call 7709709243
              </a>
              <a
                href={`https://wa.me/917709709243?text=Hello%21+I+need+service+assistance+in+${encodeURIComponent(location.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-5 py-3 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 text-sm"
              >
                <LucideIcon name="MessageCircle" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="#f8fafc"><path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" /></svg>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Sub-Locations Strip */}
          {subLocs.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h2 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
                <LucideIcon name="MapPin" size={20} className="text-orange-500" />
                Areas & Neighborhoods We Serve in {location.name}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium mb-4">
                We offer doorstep document pickup and delivery across every society and street in:
              </p>
              <div className="flex flex-wrap gap-2">
                {subLocs.map((sub, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 px-3.5 py-1.5 rounded-full border border-slate-200/60 transition-colors"
                  >
                    📍 {sub}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Xerox & Print Banner */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                Instant Doorstep Print Delivery
              </span>
              <h3 className="text-2xl font-black">Need Xerox or Large Prints in {location.name}?</h3>
              <p className="text-emerald-100 text-sm max-w-xl">
                Send your files on WhatsApp. We deliver A4, Jumbo A0, blackbook project binding, and color prints directly to your home in {location.name}.
              </p>
            </div>
            <Link
              href={`/xerox-delivery/${location.slug}`}
              className="bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold px-6 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2 text-sm flex-shrink-0"
            >
              <LucideIcon name="Printer" size={18} className="text-emerald-600" />
              Order Xerox in {location.name}
            </Link>
          </div>

          {/* Services Catalog for this location */}
          <div>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  All Services Available in <span className="text-blue-600">{location.name}</span>
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Click any service below to view specific requirements, fees, and apply online with doorstep assistance.
                </p>
              </div>
              <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">
                {services.length} Services Active
              </span>
            </div>

            {/* Services by Category */}
            <div className="space-y-10">
              {categories.map((cat) => {
                const catServices = services.filter(s => s.category === cat.id)
                if (catServices.length === 0) return null
                return (
                  <div key={cat.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-5 flex items-center gap-2.5 border-b border-slate-100 pb-3">
                      <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
                      {cat.label} in {location.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {catServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/locations/${location.slug}/${service.slug}`}
                          className="group p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between"
                        >
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0 shadow-xs">
                              <LucideIcon name={service.icon || 'FileText'} size={18} />
                            </div>
                            <span className="font-bold text-slate-800 group-hover:text-blue-600 text-sm line-clamp-2 leading-tight">
                              {service.name}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold text-blue-600 pt-2 flex items-center justify-between border-t border-slate-100">
                            Apply in {location.name} <span>&rarr;</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Other Regional Hubs */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <LucideIcon name="Compass" size={22} className="text-blue-600" />
              Other Nearby Locations We Serve
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Need service in a neighboring area? Check our other regional hubs across the belt:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {locations.filter(l => l.slug !== location.slug).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-blue-600 font-bold text-xs text-center transition-colors truncate"
                >
                  📍 {loc.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
