import Link from 'next/link'
import { categoryColors, getCategoryById } from '@/data/services'
import LucideIcon from '@/components/LucideIcon'

export default function ServiceCard({ service, compact = false }) {
  const cat = getCategoryById(service.category)
  const colors = categoryColors[service.category] || categoryColors.other

  // WhatsApp Message
  const whatsappUrl = `https://wa.me/919619439243?text=Hello%21+I%27m+interested+in+the+${encodeURIComponent(service.name)}+service.`

  if (compact) {
    return (
      <div className="group relative h-full">
        <Link href={`/services/${service.slug}`} className="block h-full">
          <div className={`relative bg-white rounded-2xl border border-gray-100 h-full transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 group-hover:border-${service.category === 'banking' ? 'green' : 'blue'}-200 p-5 overflow-hidden`}>
            {/* Elite Background Image Layer */}
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
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4 group-hover:scale-110 transition-all duration-500 shadow-inner`}>
                <LucideIcon name={service.icon} size={24} className={colors.text} />
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
        <div className="bg-white rounded-2xl border border-gray-100 h-full flex flex-col transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 group-hover:-translate-y-2 overflow-hidden relative group-hover:border-blue-200">
          {/* Elite Background Image Layer */}
          {cat?.bgImage && (
            <div className="absolute inset-0 z-0">
              <img 
                src={cat.bgImage} 
                alt={cat.label} 
                className="w-full h-full object-cover opacity-[0.08] blur-[20px] group-hover:scale-125 group-hover:opacity-[0.15] transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/40 to-transparent"></div>
            </div>
          )}

          {/* Elite Animated background decoration */}
          <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${colors.bg} opacity-10 blur-3xl group-hover:opacity-40 group-hover:scale-150 transition-all duration-1000 z-0`}></div>
          
          <div className="relative flex-1 p-6 z-10">
            <div className="flex items-start gap-4 mb-5">
              <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-white/50 backdrop-blur-sm`}>
                <LucideIcon name={service.icon} size={32} className={colors.text} />
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <span className={`cat-badge ${colors.badge} text-[10px] mb-2.5 flex items-center gap-1.5 w-fit px-2.5 py-1 font-black tracking-widest uppercase shadow-sm`}>
                  <LucideIcon name={cat?.icon} size={10} /> {cat?.label}
                </span>
                <h3 className="font-black text-blue-950 text-base leading-tight group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-6 font-medium">
              {service.description}
            </p>
          </div>

          <div className="relative flex items-center justify-between mt-auto px-6 pb-6 pt-5 border-t border-gray-50 z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                <LucideIcon name="Clock" size={13} className="text-blue-500" />
              </div>
              <span className="text-[10px] font-black text-gray-400 tracking-tight uppercase">
                {service.processingTime}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-600 text-[11px] font-black group-hover:gap-2.5 transition-all uppercase tracking-widest">
              <span>EXPLORE</span>
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LucideIcon name="ChevronRight" size={14} strokeWidth={4} />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Elite Floating Action Buttons (Visible on Hover Only) */}
      <div className="absolute top-4 right-4 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 z-20">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" 
          className="w-10 h-10 rounded-xl bg-white text-green-500 flex items-center justify-center shadow-xl hover:bg-green-500 hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-gray-100" title="WhatsApp Instant Query">
          <LucideIcon name="MessageCircle" size={20} />
        </a>
        <a href="tel:9619439243" 
          className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-gray-100" title="Call Us Directly">
          <LucideIcon name="Phone" size={20} />
        </a>
      </div>
    </div>
  )
}
