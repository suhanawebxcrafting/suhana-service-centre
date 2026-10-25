'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { services, categories, categoryColors, getCategoryById } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'
import LucideIcon from '@/components/LucideIcon'
import FAQSection from '@/components/FAQSection'

const serviceFaqs = [
  {
    q: 'What government and online services are available at Suhana Service Center?',
    a: 'We offer over 114+ services including Aadhaar card update, PAN card new/correction, Passport applications (Normal & Tatkal), Voter ID, Domicile/Income/Caste certificates, Gazette name change, Udyam registration, Shop Act licenses, FSSAI registration, and doorstep Xerox & printing delivery across Vasai-Virar.'
  },
  {
    q: 'How can I apply for a service online without visiting the center in person?',
    a: 'You can easily apply online by selecting your required service on this page and clicking "Apply via WhatsApp" or calling +91 7709709243. You can securely send required documents over WhatsApp, and our team will process your application.'
  },
  {
    q: 'What documents are required for government certificate applications?',
    a: 'Standard documents include Proof of Identity (Aadhaar/Voter ID), Proof of Address (Electricity bill/Ration card), passport-size photographs, and relevant income proofs or affidavits. Each service card links to an exact document checklist.'
  },
  {
    q: 'Do you offer urgent or Tatkal service processing?',
    a: 'Yes, we provide expedited Tatkal assistance for urgent Passport appointments, PAN cards, Gazette notifications, and rush document printing/Xerox.'
  },
  {
    q: 'Is Suhana Service Center an authorized Aaple Sarkar & CSC Kendra?',
    a: 'Yes, Suhana Service Center operates as a recognized digital seva provider assisting citizens across Virar, Vasai, Nalasopara, and Naigaon with transparent government portal submissions and verified acknowledgments.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all standard digital payment modes including UPI (Google Pay, PhonePe, Paytm), net banking, debit/credit cards, and cash at our center.'
  }
]

function ServicesContent() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [customizationsMap, setCustomizationsMap] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/services-customization')
      .then(res => res.json())
      .then(data => {
        setCustomizationsMap(data)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const filtered = services.filter(s => {
    const matchesCat = activeCategory === 'all' || s.category === activeCategory
    const matchesSearch = !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  const activeCat = getCategoryById(activeCategory)

  return (
    <>
      {/* Search Bar - integrated smoothly below title */}
      <div className="hero-gradient pt-2 pb-8 sm:pb-10 relative">
        <div className="relative max-w-xl mx-auto px-4">
          <div className="relative flex items-center bg-white rounded-full pl-3 pr-2 py-1.5 sm:py-2 shadow-lg shadow-blue-950/20 border border-white/60 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
              <LucideIcon name="Search" size={16} />
            </div>
            <input
              type="text"
              placeholder="Search services... (e.g. Aadhaar, PAN, Passport)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-transparent px-3 py-1.5 text-gray-800 text-sm sm:text-base font-medium placeholder-gray-400 outline-none border-0"
            />
            {search && (
              <button 
                onClick={() => setSearch('')} 
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors mr-1"
                title="Clear search"
              >
                <LucideIcon name="X" size={14} />
              </button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 20" fill="white" className="w-full h-3 sm:h-5"><path d="M0,0 C480,20 960,20 1440,0 L1440,20 L0,20 Z" /></svg>
        </div>
      </div>

      <section className="py-3 sm:py-3.5 bg-white/95 backdrop-blur-md sticky top-16 z-30 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide items-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
            >
              <LucideIcon name="LayoutGrid" size={14} /> All ({services.length})
            </button>
            {categories.map(cat => {
              const count = services.filter(s => s.category === cat.id).length
              const colors = categoryColors[cat.id] || categoryColors.other
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : `${colors.bg} ${colors.text} hover:opacity-80`
                    }`}
                >
                  <LucideIcon name={cat.icon} size={14} /> {cat.label} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 pattern-bg min-h-[70vh] relative overflow-hidden">
        {/* Elite background lighting */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results header - Elite Refinement */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-blue-600/5 text-blue-700 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] mb-4 border border-blue-100/50 backdrop-blur-sm">
                <LucideIcon name="ShieldCheck" size={14} className="text-blue-600" /> Professional Service Directory
              </div>
              <h2 className="font-black text-blue-950 text-3xl lg:text-4xl flex items-center gap-3 tracking-tight">
                {activeCategory !== 'all' && activeCat ? (
                  <>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                      <LucideIcon name={activeCat.icon} size={28} className="text-blue-600" />
                    </div>
                    {activeCat.label}
                  </>
                ) : 'All Online Services'}
              </h2>
              <p className="text-gray-500 text-base font-medium mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Showing {filtered.length} elite services available for instant processing
                {search && <span className="text-blue-600 font-bold italic"> — matching "{search}"</span>}
              </p>
            </div>
            {(search || activeCategory !== 'all') && (
              <button
                onClick={() => { setSearch(''); setActiveCategory('all') }}
                className="text-[11px] text-orange-600 hover:text-white font-black uppercase tracking-widest flex items-center gap-2 bg-orange-50 hover:bg-orange-500 px-5 py-3 rounded-xl transition-all shadow-sm active:scale-95 border border-orange-100"
              >
                <LucideIcon name="RotateCcw" size={14} /> Reset Directory
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-32 bg-white/40 backdrop-blur-md rounded-[40px] border border-gray-100 shadow-xl border-dashed relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6 text-blue-200">
                  <LucideIcon name="SearchX" size={100} strokeWidth={0.5} className="animate-bounce" />
                </div>
                <h3 className="text-gray-900 font-black text-2xl mb-3">No Results Found</h3>
                <p className="text-gray-500 text-base mb-8 max-w-sm mx-auto font-medium">We couldn't find any services matching your inquiry. Try adjusting your search or category filters.</p>
                <button onClick={() => { setSearch(''); setActiveCategory('all') }}
                  className="group btn-primary text-sm px-10 py-4 rounded-2xl shadow-2xl shadow-blue-500/30 flex items-center gap-2 mx-auto">
                  <LucideIcon name="LayoutGrid" size={18} /> BACK TO FULL DIRECTORY
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtered.map((service, index) => (
                <div key={service.id} className="animate-fade-up h-full" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ServiceCard service={service} customization={customizationsMap[service.id] || null} isLoading={isLoading} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services FAQ Section with FAQPage Schema */}
      <FAQSection
        faqs={serviceFaqs}
        title="Frequently Asked Questions about Our Services"
        highlight="Questions"
        subtitle="Clear answers on application processes, required documents, processing times, and doorstep support."
        badge="Services Helpdesk"
      />

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Can't Find Your Service?</h2>
          <p className="text-blue-200 text-sm mb-5">Contact us directly — we may still be able to help you!</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:7709709243" className="btn-accent text-sm px-6 py-3 flex items-center gap-2">
              <LucideIcon name="Phone" size={16} /> Call Now
            </a>
            <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
              </svg> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero - rendered outside Suspense so H1 is always visible to crawlers */}
      <section className="hero-gradient pt-24 sm:pt-28 pb-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/15 text-white/95 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-white/20 backdrop-blur-md shadow-sm">
            <LucideIcon name="Layers" size={13} className="text-orange-300" /> Digital &amp; CSC Services
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white mb-2 tracking-tight leading-tight">
            {services.length}+ Services <span className="text-orange-400">Available</span>
          </h1>
          <p className="text-blue-100/90 text-xs sm:text-sm font-medium max-w-lg mx-auto">
            Search, filter and find any government, financial, or printing service instantly
          </p>
        </div>
      </section>
      <Suspense fallback={
        <div className="min-h-[40vh] flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      }>
        <ServicesContent />
      </Suspense>
    </>
  )
}
