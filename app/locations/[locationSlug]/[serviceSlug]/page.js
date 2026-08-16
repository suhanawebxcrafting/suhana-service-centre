import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getCategoryById, categoryColors, services } from '@/data/services'
import { getLocationBySlug, locations } from '@/data/locations'
import LucideIcon from '@/components/LucideIcon'
import ServiceCard from '@/components/ServiceCard'
import CategoryLink from '@/components/CategoryLink'
import StandalonePrintForm from '@/components/StandalonePrintForm'

export async function generateStaticParams() {
  const params = []
  for (const location of locations) {
    for (const service of services) {
      params.push({ locationSlug: location.slug, serviceSlug: service.slug })
    }
  }
  return params
}

const SITE_URL = 'https://suhanaservicecentre.in'

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.serviceSlug)
  const location = getLocationBySlug(params.locationSlug)
  if (!service || !location) return { title: 'Not Found' }
  const cat = getCategoryById(service.category)
  return {
    title: `${service.name} in ${location.name}: Best Service Provider | Suhana`,
    description: `Looking for ${service.name} in ${location.name}? Apply fast and securely at Suhana Service Center. Fast, reliable & affordable ${cat?.label || 'services'}.`,
    keywords: [
      ...(service.keywords || []),
      `${service.name.toLowerCase()} in ${location.name.toLowerCase()}`,
      `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
      `best ${service.name.toLowerCase()} agent in ${location.name.toLowerCase()}`,
      `urgent ${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
      `apply ${service.name.toLowerCase()} online ${location.name.toLowerCase()}`,
      `fast ${service.name.toLowerCase()} service ${location.name.toLowerCase()}`,
      `${service.name.toLowerCase()} consultant ${location.name.toLowerCase()}`,
      `${cat?.label?.toLowerCase() || 'services'} near me ${location.name.toLowerCase()}`,
      `suhana service center ${location.name.toLowerCase()}`
    ],
    alternates: {
      canonical: `/locations/${params.locationSlug}/${params.serviceSlug}`,
    },
    openGraph: {
      title: `${service.name} in ${location.name} — Suhana Service Center`,
      description: `Get ${service.name} at Suhana Service Center in ${location.name}. Fast, reliable & affordable.`,
    },
  }
}

export default async function LocationServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.serviceSlug)
  const location = getLocationBySlug(params.locationSlug)
  
  if (!service || !location) notFound()

  const cat = getCategoryById(service.category)
  const colors = categoryColors[service.category] || categoryColors.other

  // Related services in the SAME location
  const related = services.filter(s => s.category === service.category && s.id !== service.id).slice(0, 4)

  // Fetch customizations for related services
  let customizationsMap = {}
  try {
    const { prisma } = require('@/lib/prisma')
    const { unstable_cache } = require('next/cache')
    const getCustomizations = unstable_cache(
      async () => await prisma.serviceCustomization.findMany({
        where: { serviceId: { in: related.map(s => s.id) } }
      }),
      [`locations-customizations-${service.category}`],
      { tags: ['customizations'] }
    )
    const customizationsRaw = await getCustomizations()
    for (const c of customizationsRaw) {
      customizationsMap[c.serviceId] = c
    }
  } catch (e) {
    console.warn('serviceCustomization not available in detail page')
  }

  // JSON-LD for this service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${location.name}`,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Suhana Service Center',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road',
        addressLocality: 'Virar East',
        addressRegion: 'Maharashtra',
        postalCode: '401305',
        addressCountry: 'IN',
      },
      telephone: '+917709709243',
    },
    areaServed: [location.city],
    url: `${SITE_URL}/locations/${location.slug}/${service.slug}`,
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` },
      { '@type': 'ListItem', position: 3, name: location.name, item: `${SITE_URL}/locations/${location.slug}` },
      { '@type': 'ListItem', position: 4, name: service.name, item: `${SITE_URL}/locations/${location.slug}/${service.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="breadcrumb flex items-center gap-2 text-sm mb-5 flex-wrap">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <span className="text-blue-300">›</span>
            <span className="text-blue-200">{location.name}</span>
            <span className="text-blue-300">›</span>
            <span className="text-white font-medium truncate max-w-xs">{service.name}</span>
          </nav>

          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20`}>
              <LucideIcon name={service.icon} size={32} className={colors.text} />
            </div>
            <div>
              <span className={`cat-badge ${colors.badge} text-xs mb-2 flex items-center gap-1.5 w-fit`}>
                <LucideIcon name={cat?.icon} size={12} /> {cat?.label} in {location.name}
              </span>
              <h1 className="text-2xl lg:text-4xl font-black text-white leading-tight">
                {service.name} in <span className="text-yellow-300">{location.name}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white"><path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" /></svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Main Details */}
            <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm">
                <h3 className="text-blue-900 font-bold text-lg mb-2 flex items-center gap-2">
                  📍 Verified {service.name} Services in {location.name}
                </h3>
                <p className="text-blue-800 font-medium leading-relaxed text-[15px]">
                  Looking for reliable help with <strong>{service.name}</strong> in the <strong>{location.name}</strong> area? 
                  Suhana Service Center provides end-to-end assistance, ensuring fast processing and accurate documentation for all local residents. 
                  Save your time and avoid multiple trips to government offices by letting our {cat?.label} experts in {location.name} handle it for you.
                </p>
              </div>

              {/* Description */}
              <div className="bg-white rounded-3xl p-7 lg:p-8 border border-gray-100 shadow-[0_2px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <h2 className="font-extrabold text-gray-900 text-[19px] mb-4 flex items-center gap-2">
                  <LucideIcon name="Info" size={22} className="text-blue-600" /> About {service.name} in {location.name}
                </h2>
                <p className="text-gray-700 font-medium leading-relaxed text-[15px]">{service.description}</p>
              </div>

              {/* Eligibility */}
              {service.eligibility && (
                <div className="bg-green-50 rounded-3xl p-7 lg:p-8 border border-green-100/60 shadow-[0_2px_20px_rgb(0,0,0,0.02)]">
                  <h2 className="font-extrabold text-green-900 text-[19px] mb-4 flex items-center gap-2">
                    <LucideIcon name="CheckCircle2" size={22} className="text-green-600" /> Eligibility
                  </h2>
                  <p className="text-gray-700 font-medium text-[15px] leading-relaxed">{service.eligibility}</p>
                </div>
              )}

              {/* Documents Required */}
              <div className="bg-white rounded-3xl p-7 lg:p-8 border border-gray-100 shadow-[0_2px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <h2 className="font-extrabold text-gray-900 text-[19px] mb-5 flex items-center gap-2">
                  <LucideIcon name="FolderOpen" size={22} className="text-blue-600" /> Documents Required
                </h2>
                <ul className="space-y-3.5">
                  {service.documentsRequired.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-[15px] font-medium text-gray-700">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-[11px] flex-shrink-0 mt-0.5 shadow-sm">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Steps */}
              <div className="bg-white rounded-3xl p-7 lg:p-8 border border-gray-100 shadow-[0_2px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <h2 className="font-extrabold text-gray-900 text-[19px] mb-6 flex items-center gap-2">
                  <LucideIcon name="RefreshCw" size={22} className="text-blue-600" /> Step-by-Step Process
                </h2>
                <div className="space-y-0">
                  {service.processSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[13px] shadow-md shadow-blue-500/20 mt-1">{i + 1}</div>
                      <div className="flex-1 pb-6 relative">
                        <p className="text-gray-700 font-medium text-[15px] leading-relaxed pt-1.5">{step}</p>
                        {i < service.processSteps.length - 1 && (
                          <div className="absolute left-[-26px] top-10 bottom-2 w-[2px] bg-blue-100 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="bg-amber-50 rounded-3xl p-7 lg:p-8 border border-amber-200/60 shadow-[0_2px_20px_rgb(0,0,0,0.02)]">
                <h2 className="font-extrabold text-amber-900 text-[19px] mb-4 flex items-center gap-2">
                  <LucideIcon name="AlertTriangle" size={22} className="text-amber-600" /> Important Notes
                </h2>
                <p className="text-amber-800 font-medium text-[15px] leading-relaxed">{service.notes}</p>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-5">
              {/* Quick Info Card */}
              <div className="bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 rounded-3xl p-7 text-white shadow-xl">
                <h3 className="font-extrabold text-[19px] mb-5 flex items-center gap-2">
                  <LucideIcon name="BarChart4" size={22} className="text-orange-400" /> Quick Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-blue-800">
                    <span className="text-blue-200 text-xs uppercase tracking-wider font-semibold">Location</span>
                    <span className="text-white font-bold text-[14px] text-right">{location.name}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-800">
                    <span className="text-blue-200 text-xs uppercase tracking-wider font-semibold">Time</span>
                    <span className="text-white font-bold text-[14px] text-right max-w-[55%]">{service.processingTime}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-800">
                    <span className="text-blue-200 text-xs uppercase tracking-wider font-semibold">Charges</span>
                    <span className="text-orange-400 font-bold text-[14px]">Contact Us</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-blue-200 text-xs uppercase tracking-wider font-semibold">Category</span>
                    <span className="text-white font-bold text-[14px] flex items-center gap-1.5">
                      <LucideIcon name={cat?.icon} size={14} /> {cat?.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_4px_25px_rgb(0,0,0,0.04)] space-y-4">
                <h3 className="font-extrabold text-gray-900 text-[18px] mb-5 flex items-center gap-2">
                  🚀 Get This Service
                </h3>
                <a href="tel:7709709243"
                   className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm shadow-md shadow-blue-500/20">
                  <LucideIcon name="Phone" size={16} /> Call Now: 7709709243
                </a>
                <a href={`https://wa.me/917709709243?text=Hello%2C%20I%20need%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(location.name)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm shadow-md shadow-green-500/20">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> WhatsApp Now
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold py-3.5 rounded-xl transition-all text-sm border border-orange-200">
                  <LucideIcon name="MapPin" size={16} /> Visit Our Office
                </Link>
              </div>

              {/* Office Info */}
              <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100/80 shadow-[0_2px_15px_rgb(0,0,0,0.02)]">
                <h3 className="font-extrabold text-gray-800 text-[16px] mb-3 flex items-center gap-2">
                  <LucideIcon name="MapPin" size={18} className="text-orange-500" /> Our Office
                </h3>
                <p className="text-gray-600 font-medium text-[13.5px] leading-relaxed mb-4">
                  Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305
                </p>
                <div className="flex items-center gap-2 text-gray-600 text-[13.5px] font-bold bg-white w-fit px-3 py-1.5 rounded-lg border border-gray-100">
                  <LucideIcon name="Clock" size={15} className="text-blue-600" /> Mon–Sat: 9:00 AM – 8:00 PM
                </div>
              </div>
            </div>

            {/* Render Print Form for printing category at the bottom of left col, on small screens it stacks naturally */}
            {service.category === 'printing' && (
              <div className="lg:col-span-3 mt-4">
                <StandalonePrintForm serviceName={service.name} locationName={location.name} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services in Location */}
      {related.length > 0 && (
        <section className="py-16 pattern-bg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-extrabold text-blue-900 text-2xl mb-8 flex items-center gap-2">
              <LucideIcon name="Layers" size={24} className="text-orange-500" /> Other {cat?.label} Services in {location.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {related.map(s => {
                return <ServiceCard key={s.id} service={s} locationSlug={location.slug} customization={customizationsMap[s.id] || null} compact />
              })}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic SEO FAQ Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm font-medium">Common questions about our {service.name} services in {location.name}.</p>
          </div>
          <div className="space-y-3">
            {[
              ...(service.faqs || []),
              {
                q: `Where can I apply for ${service.name} in ${location.name}?`,
                a: `Suhana Service Center is your trusted ${service.name.toLowerCase()} agent in ${location.name}. You can visit our office or apply online through us for fast processing.`
              },
              {
                q: `Is there an urgent ${service.name} service available?`,
                a: `Yes, we provide urgent ${service.name.toLowerCase()} assistance. As an experienced consultant in ${location.name}, we ensure your application is processed with priority.`
              },
              {
                q: `Do I need to visit multiple offices for ${service.name}?`,
                a: `No, not at all! As a premier ${cat?.label} provider for ${location.name} residents, we handle all the documentation and submission steps on your behalf.`
              },
              {
                q: `What is the fastest way to get ${service.name} done?`,
                a: `The fastest way is to contact us directly. We offer a fast ${service.name.toLowerCase()} service in ${location.name} with transparent pricing and complete guidance on required documents.`
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50/50 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100 group-hover:border-blue-600">
                      <LucideIcon name="HelpCircle" size={18} />
                    </div>
                    <span className="font-bold text-gray-800 text-[15px] pr-4 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 flex-shrink-0 transition-transform duration-500 group-open:rotate-180 group-open:bg-blue-50 group-open:text-blue-600 border border-slate-100">
                    <LucideIcon name="ChevronDown" size={16} />
                  </span>
                </summary>
                <div className="px-4 pb-4 pl-[64px] text-gray-600 text-[14px] leading-relaxed animate-fade-in">
                  <div className="w-full h-px bg-slate-100 mb-3"></div>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
