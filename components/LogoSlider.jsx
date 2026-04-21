'use client'

import { useEffect, useRef } from 'react'

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
    <section className="py-6 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          Trusted Government & Digital Partners
        </p>
      </div>
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-scroll-logos">
          {/* Double the logos for infinite scroll effect */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center p-2 group-hover:scale-110 shadow-sm group-hover:shadow-md transition-all relative overflow-hidden">
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="w-full h-full object-contain mix-blend-multiply"
                  style={{ filter: 'contrast(1.1)' }}
                  loading="lazy"
                />
              </div>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
