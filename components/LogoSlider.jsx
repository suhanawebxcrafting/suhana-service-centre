'use client'

import Image from 'next/image'

const logos = [
  { name: 'CSC', img: '/logoslider/csc.png' },
  { name: 'Digital India', img: '/logoslider/digital-india.png' },
  { name: 'Aadhaar', img: '/logoslider/Aadhaar.png' },
  { name: 'PAN Card', img: '/logoslider/pan-card.png' },
  { name: 'Aaple Sarkar', img: '/logoslider/aaple-sarkar.png' },
  { name: 'Maha Seva Kendra', img: '/logoslider/Maha-Seva-Kendra.png' },
  { name: 'Voter ID', img: '/logoslider/voter-id.png' },
  { name: 'Online Payment', img: '/logoslider/online-payment.png' },
]

export default function LogoSlider() {
  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-5">
        <p className="text-center text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
          Trusted Government & Digital Partners
        </p>
      </div>
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Triple the logos for seamless infinite scroll on all screen sizes */}
        <div className="flex w-max  animate-scroll-logos-fast">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-6 flex flex-col items-center gap-2 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-gray-100 flex items-center justify-center p-3 group-hover:scale-110 shadow-sm group-hover:shadow-md transition-all relative overflow-hidden">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain mix-blend-multiply"
                  style={{ filter: 'contrast(1.1)' }}
                  loading="eager"
                />
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
