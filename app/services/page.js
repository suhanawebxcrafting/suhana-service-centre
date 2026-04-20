'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { services, categories, categoryColors, getCategoryById } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'
import LucideIcon from '@/components/LucideIcon'

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

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
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 mx-auto w-fit border border-white/10">
            <LucideIcon name="Layers" size={16} /> All Services
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            {services.length}+ Services
            <span className="text-orange-400"> Available</span>
          </h1>
          <p className="text-blue-200 text-base mb-7">Search, filter and find any service instantly</p>
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <LucideIcon name="Search" size={20} />
            </span>
            <input
              type="text"
              placeholder="Search services... (e.g. Aadhaar, PAN, Passport)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 text-base font-medium shadow-xl outline-none focus:ring-2 focus:ring-orange-400 border-0"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl">×</button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"/>
          </svg>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-16 lg:top-20 z-40 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
            >
              <LucideIcon name="LayoutGrid" size={16} /> All ({services.length})
            </button>
            {categories.map(cat => {
              const count = services.filter(s => s.category === cat.id).length
              const colors = categoryColors[cat.id] || categoryColors.other
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : `${colors.bg} ${colors.text} hover:opacity-80`
                  }`}
                >
                  <LucideIcon name={cat.icon} size={16} /> {cat.label} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 pattern-bg min-h-[70vh] relative overflow-hidden">
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
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Can't Find Your Service?</h2>
          <p className="text-blue-200 text-sm mb-5">Contact us directly — we may still be able to help you!</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:9619439243" className="btn-accent text-sm px-6 py-3 flex items-center gap-2">
              <LucideIcon name="Phone" size={16} /> Call Now
            </a>
            <a href="https://wa.me/919619439243" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <LucideIcon name="MessageCircle" size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
