'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, Printer, BookOpen, Layers, X, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react'

export default function SitemapExplorer({ services, locations, categories, blogs }) {
  const [activeTab, setActiveTab] = useState('locations') // 'locations' | 'services' | 'xerox' | 'blogs'
  const [selectedLocation, setSelectedLocation] = useState(locations[0]?.slug || 'virar-east')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filtered Services for selected location or all
  const filteredServices = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return services.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      const matchesSearch = !q ||
        service.name.toLowerCase().includes(q) ||
        service.slug.toLowerCase().includes(q) ||
        (service.keywords && service.keywords.some(k => k.toLowerCase().includes(q)))
      return matchesCategory && matchesSearch
    })
  }, [services, selectedCategory, searchQuery])

  // Filtered Blogs
  const filteredBlogs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return blogs.filter(blog => {
      return !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.category.toLowerCase().includes(q)
    })
  }, [blogs, searchQuery])

  const currentLocation = locations.find(l => l.slug === selectedLocation) || locations[0]

  return (
    <div className="space-y-8">
      
      {/* Interactive Controls Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any service, location, or guide (e.g. Aadhaar, Pan Card, Gazette, Xerox, Virar)..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-semibold text-slate-900 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Directory View Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 scrollbar-none">
          <button
            onClick={() => setActiveTab('locations')}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'locations'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MapPin size={15} />
            Local Area Services ({locations.length} Locations)
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'services'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers size={15} />
            Service Categories ({services.length} Services)
          </button>

          <button
            onClick={() => setActiveTab('xerox')}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'xerox'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Printer size={15} />
            Xerox Delivery Hubs ({locations.length} Hubs)
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'blogs'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen size={15} />
            Official Guides & Blogs ({blogs.length} Articles)
          </button>
        </div>

      </div>

      {/* TAB 1: LOCATIONS EXPLORER */}
      {activeTab === 'locations' && (
        <div className="space-y-6">
          {/* Location Selector Pills */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                Select Locality Hub:
              </span>
              <Link
                href={`/locations/${currentLocation.slug}`}
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                Open {currentLocation.name} Pillar Page <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc.slug}
                  onClick={() => setSelectedLocation(loc.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedLocation === loc.slug
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-blue-50 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <MapPin size={13} className={selectedLocation === loc.slug ? 'text-white' : 'text-orange-500'} />
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Location Banner */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Viewing Local Catalog
              </span>
              <h3 className="text-2xl font-black mt-2">
                All Services in <span className="text-yellow-300">{currentLocation.name}</span>
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-xl">
                Displaying {filteredServices.length} direct application pages tailored for {currentLocation.name} residents with doorstep pickup.
              </p>
            </div>
            <Link
              href={`/xerox-delivery/${currentLocation.slug}`}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <Printer size={15} />
              Xerox Delivery in {currentLocation.name}
            </Link>
          </div>

          {/* Grid of 114 services for selected location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${currentLocation.slug}/${service.slug}`}
                className="group p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {service.category}
                  </span>
                  <h4 className="font-extrabold text-slate-900 group-hover:text-blue-600 text-sm leading-snug line-clamp-2">
                    {service.name}
                  </h4>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600">
                  <span>Apply in {currentLocation.name}</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: SERVICES CATEGORIES */}
      {activeTab === 'services' && (
        <div className="space-y-6">
          {/* Category filter pills */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}
            >
              All Categories ({services.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                }`}
              >
                {cat.label} ({services.filter(s => s.category === cat.id).length})
              </button>
            ))}
          </div>

          {/* Grid of services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {service.category}
                  </span>
                  <h4 className="font-extrabold text-slate-900 group-hover:text-blue-600 text-sm leading-snug line-clamp-2">
                    {service.name}
                  </h4>
                  <p className="text-slate-500 text-xs mt-2 line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>View Details & Requirements</span>
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: XEROX HUBS */}
      {activeTab === 'xerox' && (
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
          <div className="mb-6 border-b border-slate-100 pb-4">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Printer size={22} className="text-emerald-600" />
              Doorstep Xerox Delivery Network (17 Regional Areas)
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Select your area to order instant WhatsApp printout delivery, thesis blackbook binding, and jumbo prints.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/xerox-delivery/${loc.slug}`}
                className="group p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-400 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Printer size={18} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 group-hover:text-emerald-700 text-sm">
                      {loc.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-400">Doorstep Delivery</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: BLOGS & GUIDES */}
      {activeTab === 'blogs' && (
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
          <div className="mb-6 border-b border-slate-100 pb-4">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen size={22} className="text-purple-600" />
              Official Government Guides & Articles ({filteredBlogs.length})
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Step-by-step documentation, government portal updates, fee structures, and eligibility guides.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200/80 hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {blog.category}
                  </span>
                  <h4 className="font-extrabold text-slate-900 group-hover:text-purple-700 text-base leading-snug">
                    {blog.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-purple-700">
                  <span>Read Complete Guide & Steps</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
