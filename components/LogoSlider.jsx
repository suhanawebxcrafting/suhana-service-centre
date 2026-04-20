'use client'

import { useEffect, useRef } from 'react'

const logos = [
  { name: 'CSC', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/CSC_Logo.svg/512px-CSC_Logo.svg.png' },
  { name: 'Digital India', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Digital_India_logo.svg/512px-Digital_India_logo.svg.png' },
  { name: 'Aadhaar', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/512px-Aadhaar_Logo.svg.png' },
  { name: 'PAN Card', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_India.svg/512px-Flag_of_India.svg.png' },
  { name: 'Aaple Sarkar', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Seal_of_Maharashtra.svg/512px-Seal_of_Maharashtra.svg.png' },
  { name: 'Maha Seva Kendra', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Seal_of_Maharashtra.svg/512px-Seal_of_Maharashtra.svg.png' },
  { name: 'Voter ID', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Election_Commission_of_India_Logo.svg/512px-Election_Commission_of_India_Logo.svg.png' },
  { name: 'Online Payment', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png' },
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
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:shadow-md transition-all">
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="w-full h-full object-contain"
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
