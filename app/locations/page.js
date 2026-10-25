import Link from 'next/link'
import { locations } from '@/data/locations'
import { services } from '@/data/services'
import LucideIcon from '@/components/LucideIcon'
import FAQSection from '@/components/FAQSection'

export const metadata = {
  title: '#1 CSC & Government Service Centers in Vasai-Virar & Palghar',
  description: 'Explore Suhana Service Center hubs across Virar, Vasai, Nalasopara, Palghar, and Mira-Bhayandar. Fast doorstep and online support for Aadhaar, PAN, Passport, Certificates & Xerox.',
  alternates: {
    canonical: '/locations',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LocationsIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Suhana Service Center Locations Directory',
    description: 'Complete directory of Suhana Service Center branches and local service areas in Maharashtra.',
    url: 'https://suhanaservicecentre.in/locations',
    hasPart: locations.map(loc => ({
      '@type': 'LocalBusiness',
      name: `Suhana Service Center ${loc.name}`,
      url: `https://suhanaservicecentre.in/locations/${loc.slug}`,
      areaServed: loc.name,
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-24 sm:pt-28 pb-10 sm:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/95 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20 mb-3 shadow-sm">
            <LucideIcon name="MapPin" size={13} className="text-orange-400" /> 17 Regional Hubs &amp; 120+ Neighborhoods
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white leading-tight mb-3 tracking-tight">
            Our Service Locations Across <span className="text-yellow-300">Vasai-Virar &amp; Palghar</span>
          </h1>
          <p className="text-blue-100/90 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Find verified CSC government services, document pickup, and doorstep Xerox delivery tailored for your exact locality.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 20" fill="#f8fafc" className="w-full h-3 sm:h-5"><path d="M0,0 C480,20 960,20 1440,0 L1440,20 L0,20 Z" /></svg>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-14 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => {
              const subLocs = loc.subLocations || []
              return (
                <div
                  key={loc.slug}
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                          <LucideIcon name="MapPin" size={24} />
                        </div>
                        <div>
                          <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                            {loc.name}
                          </h2>
                          <span className="text-xs font-semibold text-slate-400">
                            {loc.city} District Hub
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-100">
                        Active
                      </span>
                    </div>

                    {/* Sub-locations list */}
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Key Areas Covered ({subLocs.length}):
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {subLocs.slice(0, 6).map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                        >
                          {sub}
                        </span>
                      ))}
                      {subLocs.length > 6 && (
                        <span className="text-[11px] font-bold text-blue-600 px-2 py-0.5">
                          +{subLocs.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="w-full text-center py-2.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      View All Services in {loc.name} <LucideIcon name="ArrowRight" size={16} />
                    </Link>
                    <Link
                      href={`/xerox-delivery/${loc.slug}`}
                      className="w-full text-center py-2 px-4 rounded-xl bg-slate-50 text-emerald-700 hover:bg-emerald-50 font-bold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <LucideIcon name="Printer" size={14} className="text-emerald-600" />
                      Doorstep Xerox Delivery in {loc.name}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black">Need Doorstep Service or Can't Find Your Area?</h3>
              <p className="text-blue-200 text-sm sm:text-base max-w-xl">
                We provide fast doorstep document pickup and delivery across all surrounding areas. Contact us directly on WhatsApp for instant assistance.
              </p>
            </div>
            <a
              href="https://wa.me/917709709243?text=Hello%21+I+need+doorstep+service+assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-black px-7 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-2.5 flex-shrink-0"
            >
              <LucideIcon name="MessageCircle" size={20} />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* Locations Master FAQ Section with FAQPage Schema */}
      <FAQSection
        faqs={[
          {
            q: 'Which areas are covered by Suhana Service Center in Vasai-Virar and Palghar?',
            a: 'We actively serve 17 regional hubs including Virar East, Virar West, Vasai East, Vasai West, Nalasopara East, Nalasopara West, Naigaon, Palghar, Boisar, Safale, Dahanu, Manor, Kelve, Agashi, Bolinj, Arnala, and Mira-Bhayandar with over 120+ local neighborhoods.'
          },
          {
            q: 'Do you offer doorstep document pickup and delivery in my area?',
            a: 'Yes, we provide same-day doorstep document pickup and Xerox delivery across all registered locations in Vasai-Virar. You can also send documents directly over WhatsApp to +91 7709709243.'
          },
          {
            q: 'Can I apply for government services online without visiting the center in person?',
            a: 'Absolutely. Over 90% of our services—including PAN cards, Gazette name change, Income/Domicile certificates, FSSAI, Udyam registration, and Xerox delivery—can be processed smoothly online via WhatsApp.'
          },
          {
            q: 'How fast is print and document delivery to my location?',
            a: 'Standard printouts and Xerox orders are delivered within 2-4 hours locally across Vasai-Virar. Government certificate acknowledgments and physical cards are processed with real-time tracking.'
          },
          {
            q: 'Where is Suhana Service Center main office located?',
            a: 'Our central office is conveniently situated near Virar East station, Maharashtra 401305, open 6 days a week with dedicated customer phone and WhatsApp support.'
          }
        ]}
        title="Frequently Asked Questions • Location Services"
        highlight="Questions"
        subtitle="Common questions about local coverage, doorstep document pickup, and regional seva kendra support."
        badge="Location Coverage FAQs"
      />
    </>
  )
}
