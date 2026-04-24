import Link from 'next/link'
import { categoryColors, getCategoryById } from '@/data/services'
import LucideIcon from '@/components/LucideIcon'

export default function ServiceCard({ service, compact = false, customization = null, isLoading = false }) {
  const cat = getCategoryById(service.category)
  const colors = categoryColors[service.category] || categoryColors.other

  // Merge customization overrides
  const effectiveIcon = customization?.iconOverride || service.icon || 'Wrench'
  const effectiveImage = customization?.imageOverride || service.image || null
  const effectiveImageAlt = customization?.imageAltText || `${service.name} logo`
  const effectiveDummy = customization?.dummyImageOverride || service.dummyImage || null
  const effectiveDummyAlt = customization?.dummyImageAltText || `${service.name} service illustration`

  // WhatsApp Message
  const whatsappUrl = `https://wa.me/917709709243?text=Hello%21+I%27m+interested+in+the+${encodeURIComponent(service.name)}+service.`

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 h-full flex flex-col p-5 animate-pulse">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-14 h-14 bg-gray-100 rounded-2xl flex-shrink-0"></div>
          <div className="flex-1 space-y-3 min-w-0">
            <div className="h-3 bg-gray-100 rounded-lg w-1/3"></div>
            <div className="h-6 bg-gray-100 rounded-lg w-3/4"></div>
          </div>
        </div>
        <div className="mb-5 rounded-2xl bg-gray-50 aspect-[4/3] md:aspect-[16/9] w-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-100 rounded-lg w-full"></div>
          <div className="h-3 bg-gray-100 rounded-lg w-5/6"></div>
          <div className="h-3 bg-gray-100 rounded-lg w-4/6"></div>
        </div>
        <div className="mt-5 pt-4 border-t border-gray-50 flex justify-between items-center">
          <div className="h-3 bg-gray-100 rounded w-20"></div>
          <div className="h-6 w-6 rounded-full bg-gray-100"></div>
        </div>
      </div>
    )
  }

  if (compact) {
    return (
      <div className="group relative h-full">
        <Link href={`/services/${service.slug}`} className="block h-full">
          <div className={`relative bg-white rounded-2xl border border-gray-100 h-full transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 group-hover:border-${service.category === 'banking' ? 'green' : 'blue'}-200 p-5 overflow-hidden`}>
            {/* Background Image Layer */}
            {cat?.bgImage && (
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.bgImage}
                  alt={cat.label}
                  className="w-full h-full object-cover opacity-[0.05] blur-[15px] group-hover:scale-125 group-hover:opacity-[0.12] transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-transparent"></div>
              </div>
            )}

            <div className="relative z-10">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${colors.bg} mb-4 group-hover:scale-110 transition-all duration-500 shadow-inner`}>
                {effectiveImage ? (
                  <img
                    src={effectiveImage}
                    alt={effectiveImageAlt}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <LucideIcon name={effectiveIcon} size={20} className={colors.text} />
                )}
              </div>
              <h3 className="font-black text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors mb-2">
                {service.name}
              </h3>
              <span className={`cat-badge ${colors.badge} text-[10px] flex items-center gap-1.5 w-fit px-2.5 py-1 font-bold`}>
                <LucideIcon name={cat?.icon} size={10} /> {cat?.label}
              </span>
            </div>
          </div>
        </Link>
        {/* Floating Quick Actions for Compact */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-20">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all" title="WhatsApp Us">
            <LucideIcon name="MessageCircle" size={14} />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative h-full">
      <Link href={`/services/${service.slug}`} className="block h-full">
        <div className="bg-white rounded-2xl border border-gray-100 h-full flex flex-col transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 group-hover:-translate-y-1 overflow-hidden relative group-hover:border-blue-200">
          {/* Background Image Layer */}
          {cat?.bgImage && (
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={cat.bgImage}
                alt={cat.label}
                className="w-full h-full object-cover opacity-[0.06] blur-[20px] group-hover:scale-110 group-hover:opacity-[0.12] transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-transparent"></div>
            </div>
          )}

          {/* Animated background glow */}
          <div className={`absolute -right-8 -top-8 w-28 h-28 rounded-full ${colors.bg} opacity-10 blur-3xl group-hover:opacity-30 group-hover:scale-150 transition-all duration-1000 z-0 pointer-events-none`}></div>

          <div className="relative flex-1 p-5 z-10 flex flex-col">
            {/* Header: Logo + Title */}
            <div className="flex items-start gap-4 mb-5 min-h-[72px]">
              {/* Logo/Icon */}
              <div className="flex-shrink-0">
                {effectiveImage ? (
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-premium group-hover:scale-105 transition-all duration-300 flex items-center justify-center border border-gray-100">
                    <img
                      src={effectiveImage}
                      alt={effectiveImageAlt}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                ) : (
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${colors.bg} shadow-premium group-hover:scale-105 transition-all duration-300 border border-white/50`}>
                    <LucideIcon name={effectiveIcon} size={28} className={colors.text} />
                  </div>
                )}
              </div>

              {/* Title + badge */}
              <div className="flex-1 min-w-0">
                <div className="mb-1.5">
                  <span className={`cat-badge ${colors.badge} text-[10px] inline-flex items-center gap-1.5 px-2.5 py-0.5 font-black tracking-widest uppercase rounded-lg`}>
                    <LucideIcon name={cat?.icon} size={10} /> {cat?.label}
                  </span>
                </div>
                <h3 className="font-black text-blue-950 text-base md:text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                  {service.name}
                </h3>
              </div>
            </div>

            {/* Card / Dummy Image */}
            {effectiveDummy && (
              <div className="mb-5 rounded-2xl overflow-hidden h-36 md:h-44 w-full shadow-inner-lg relative flex-shrink-0 border border-gray-100/50">
                <img
                  src={effectiveDummy}
                  alt={effectiveDummyAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            )}

            {/* Description */}
            <div className="flex-1 flex flex-col justify-start">
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium">
                {service.description}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="relative flex items-center justify-between px-5 pb-5 pt-3 border-t border-gray-50 z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                <LucideIcon name="Clock" size={11} className="text-blue-500" />
              </div>
              <span className="text-[9px] font-black text-gray-400 tracking-tight uppercase">
                {service.processingTime}
              </span>
            </div>
            <div className="flex items-center gap-1 text-blue-600 text-[10px] font-black group-hover:gap-2 transition-all uppercase tracking-widest">
              <span>Explore</span>
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LucideIcon name="ChevronRight" size={12} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Floating Action Buttons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-20">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
          className="w-8 h-8 rounded-xl bg-white text-green-500 flex items-center justify-center shadow-lg hover:bg-green-500 hover:text-white transition-all border border-gray-100" title="WhatsApp Instant Query">
          <LucideIcon name="MessageCircle" size={16} />
        </a>
        <a href="tel:7709709243"
          className="w-8 h-8 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-all border border-gray-100" title="Call Us Directly">
          <LucideIcon name="Phone" size={16} />
        </a>
      </div>
    </div>
  )
}
