'use client'

import React from 'react'
import { FileText } from 'lucide-react'

export default function CertificateSlider({ certificates }) {
  if (!certificates || certificates.length === 0) return null

  // Duplicate the array to create a seamless infinite scroll effect
  const sliderItems = [...certificates, ...certificates, ...certificates]

  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden border-t border-gray-100 relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #e2e8f0 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Trust & Excellence
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
          Our Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Certifications</span>
        </h2>
        <p className="text-gray-500 font-bold max-w-2xl mx-auto text-sm md:text-base">
          We take pride in our certified expertise and government-approved service standards.
        </p>
      </div>
      
      <div className="relative w-full">
        {/* Left and Right Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-64 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-64 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll-certs hover:animation-pause">
          {sliderItems.map((cert, index) => (
            <div 
              key={`${cert.id}-${index}`} 
              className="flex-shrink-0 mx-4 w-72 md:w-[400px] group cursor-pointer"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-8 border border-white transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.15)] group-hover:border-blue-200 group-hover:-translate-y-3 h-full flex flex-col relative overflow-hidden">
                
                {/* Decorative background glow */}
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-blue-50 rounded-full blur-[80px] group-hover:bg-blue-100 transition-colors"></div>

                <div className="relative z-10 w-full h-52 md:h-64 flex items-center justify-center mb-8 overflow-hidden rounded-3xl bg-gray-50/50 p-6 border border-gray-100 group-hover:bg-white transition-all duration-500 group-hover:shadow-inner">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {cert.fileUrl && (
                    <a 
                      href={cert.fileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors flex items-center justify-center"
                    >
                      <div className="bg-gray-900 text-white px-6 py-2.5 rounded-2xl font-black text-[10px] shadow-2xl scale-0 group-hover:scale-100 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest">
                        <FileText size={14} /> View Full PDF
                      </div>
                    </a>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                    <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase">Verified Award</span>
                  </div>
                  <h3 className="text-base md:text-xl font-black text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Bottom detail */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Suhana Service Centre</span>
                  <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                    <FileText size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollCerts {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333333%)); }
        }
        .animate-scroll-certs {
          animation: scrollCerts 35s linear infinite;
          width: max-content;
        }
        .hover\\:animation-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
