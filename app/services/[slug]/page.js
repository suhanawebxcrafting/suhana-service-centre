import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getCategoryById, categoryColors, services } from '@/data/services'
import LucideIcon from '@/components/LucideIcon'
import ServiceCard from '@/components/ServiceCard'

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.name} | Suhana Service Centre Virar`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const cat = getCategoryById(service.category)
  const colors = categoryColors[service.category] || categoryColors.other

  // Related services (same category, different service)
  const related = services.filter(s => s.category === service.category && s.id !== service.id).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="breadcrumb flex items-center gap-2 text-sm mb-5">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <span className="text-blue-300">›</span>
            <Link href="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link>
            <span className="text-blue-300">›</span>
            <Link href={`/services?cat=${service.category}`} className="text-blue-200 hover:text-white transition-colors">
              {cat?.label}
            </Link>
            <span className="text-blue-300">›</span>
            <span className="text-white font-medium truncate max-w-xs">{service.name}</span>
          </nav>

          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20`}>
              <LucideIcon name={service.icon} size={32} className={colors.text} />
            </div>
            <div>
              <span className={`cat-badge ${colors.badge} text-xs mb-2 flex items-center gap-1.5 w-fit`}>
                <LucideIcon name={cat?.icon} size={12} /> {cat?.label}
              </span>
              <h1 className="text-2xl lg:text-4xl font-black text-white leading-tight">
                {service.name}
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white"><path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"/></svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Main Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h2 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
                  <LucideIcon name="Info" size={20} className="text-blue-600" /> About This Service
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm">{service.description}</p>
              </div>

              {/* Eligibility */}
              {service.eligibility && (
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <h2 className="font-bold text-green-900 text-base mb-3 flex items-center gap-2">
                    <LucideIcon name="CheckCircle2" size={18} className="text-green-600" /> Eligibility
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.eligibility}</p>
                </div>
              )}

              {/* Documents Required */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                  <LucideIcon name="FolderOpen" size={18} className="text-blue-600" /> Documents Required
                </h2>
                <ul className="space-y-2.5">
                  {service.documentsRequired.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Steps */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                  <LucideIcon name="RefreshCw" size={18} className="text-blue-600" /> Step-by-Step Process
                </h2>
                <div className="space-y-4">
                  {service.processSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="step-dot flex-shrink-0">{i + 1}</div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                        {i < service.processSteps.length - 1 && (
                          <div className="ml-4 mt-2 h-4 w-px bg-blue-200"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h2 className="font-bold text-amber-900 text-base mb-3 flex items-center gap-2">
                  <LucideIcon name="AlertTriangle" size={18} className="text-amber-600" /> Important Notes
                </h2>
                <p className="text-amber-800 text-sm leading-relaxed">{service.notes}</p>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-5">
              {/* Quick Info Card */}
               <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 text-white shadow-xl">
                <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                   <LucideIcon name="BarChart4" size={18} className="text-orange-400" /> Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-blue-700">
                    <span className="text-blue-200 text-xs">Processing Time</span>
                    <span className="text-white font-semibold text-xs text-right max-w-[55%]">{service.processingTime}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-700">
                    <span className="text-blue-200 text-xs">Service Charges</span>
                    <span className="text-orange-400 font-semibold text-xs">Contact Us</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-blue-200 text-xs">Category</span>
                    <span className="text-white font-semibold text-xs flex items-center gap-1">
                      <LucideIcon name={cat?.icon} size={12} /> {cat?.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card space-y-3">
                <h3 className="font-bold text-gray-900 text-base mb-4">🚀 Get This Service</h3>
                <a href="tel:7709709243"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm shadow-md">
                  <LucideIcon name="Phone" size={16} /> Call Now: 7709709243
                </a>
                <a href="https://wa.me/917709709243?text=Hello%2C%20I%20need%20help%20with%20" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm shadow-md shadow-green-500/20">
                  <LucideIcon name="MessageCircle" size={16} /> WhatsApp Now
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-orange-50 hover:bg-orange-100 text-orange-700 font-semibold py-3.5 rounded-xl transition-all text-sm border border-orange-200">
                  <LucideIcon name="MapPin" size={16} /> Visit Our Office
                </Link>
              </div>

              {/* Office Info */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
                  <LucideIcon name="MapPin" size={16} className="text-orange-500" /> Our Office
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                   <LucideIcon name="Clock" size={14} className="text-blue-500" /> Mon–Sat: 9:00 AM – 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 pattern-bg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-extrabold text-blue-900 text-2xl mb-8 flex items-center gap-2">
              <LucideIcon name="Layers" size={24} className="text-orange-500" /> Related Services in {cat?.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {related.map(s => (
                <ServiceCard key={s.id} service={s} compact />
              ))}
            </div>
            <Link href={`/services?cat=${service.category}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg transition-colors">
              View All {cat?.label} Services <LucideIcon name="ArrowRight" size={14} />
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
