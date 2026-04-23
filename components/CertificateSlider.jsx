'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FileText, X, ZoomIn } from 'lucide-react'

export default function CertificateSlider({ certificates }) {
  const [selectedCert, setSelectedCert] = useState(null)

  if (!certificates || certificates.length === 0) return null

  const sliderItems = [...certificates, ...certificates]

  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden border-t border-gray-100 relative">
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
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-64 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-64 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-hidden pb-12 pt-4">
          <div className="flex w-max gap-6 animate-scroll-certificates px-6 md:px-24">
            {sliderItems.map((cert, index) => (
            <div 
              key={`${cert.id}-${index}`} 
              className="flex-shrink-0 w-[85vw] sm:w-80 md:w-[400px] group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-8 border border-white transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.15)] group-hover:border-blue-200 group-hover:-translate-y-3 h-full flex flex-col relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-blue-50 rounded-full blur-[80px] group-hover:bg-blue-100 transition-colors"></div>

                <div className="relative z-10 w-full h-64 md:h-80 flex items-center justify-center mb-8 overflow-hidden rounded-3xl bg-gray-50/50 border border-gray-100 group-hover:bg-white transition-all duration-500 group-hover:shadow-inner">
                  <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                    <div className="bg-white text-blue-600 p-4 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                    <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase">Verified Award</span>
                  </div>
                  <h3 className="text-base md:text-xl font-black text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">{cert.title}</h3>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Suhana Service Centre</span>
                  {cert.fileUrl && (
                    <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <FileText size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors">
              <X size={24} />
            </button>
            <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
              <img src={selectedCert.imageUrl} alt={selectedCert.title} className="max-w-full max-h-[80vh] object-contain" />
            </div>
            <div className="p-6 bg-white border-t border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-black text-gray-900">{selectedCert.title}</h3>
              {selectedCert.fileUrl && (
                <a href={selectedCert.fileUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2 rounded-xl flex items-center gap-2 text-sm">
                  <FileText size={18} /> View PDF
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
