'use client'
import React, { useState } from 'react'
import LucideIcon from './LucideIcon'

export default function CertificateSlider({ certificates }) {
  const [selectedCert, setSelectedCert] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  if (!certificates || certificates.length === 0) return null

  const sliderItems = [...certificates, ...certificates]

  const getPageImages = (cert) => {
    try {
      const pages = JSON.parse(cert.pageImages || '[]')
      return pages.length > 0 ? pages : [cert.imageUrl]
    } catch {
      return [cert.imageUrl]
    }
  }

  const openCert = (cert) => {
    setSelectedCert(cert)
    setCurrentPage(0)
  }

  const closeCert = () => {
    setSelectedCert(null)
    setCurrentPage(0)
  }

  const pageImages = selectedCert ? getPageImages(selectedCert) : []

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden border-t border-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #e2e8f0 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
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
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-hidden pb-8 pt-4">
          <div className="flex w-max gap-4 animate-scroll-certificates px-6 md:px-20">
            {sliderItems.map((cert, index) => {
              const pages = getPageImages(cert)
              return (
                <div
                  key={`${cert.id}-${index}`}
                  className="flex-shrink-0 w-[65vw] sm:w-56 md:w-64 group cursor-pointer"
                  onClick={() => openCert(cert)}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-white transition-all duration-500 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] group-hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)] group-hover:border-blue-200 group-hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute -right-16 -top-16 w-36 h-36 bg-blue-50 rounded-full blur-[60px] group-hover:bg-blue-100 transition-colors"></div>

                    <div className="relative z-10 w-full h-40 md:h-48 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50/50 border border-gray-100 group-hover:bg-white transition-all duration-500 group-hover:shadow-inner">
                      <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                        <div className="bg-white text-blue-600 p-3 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-all duration-300">
                          <LucideIcon name="ZoomIn" size={18} />
                        </div>
                      </div>
                      {pages.length > 1 && (
                        <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md">
                          {pages.length} pages
                        </div>
                      )}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="h-[2px] w-6 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                        <span className="text-[9px] font-black text-blue-600 tracking-[0.2em] uppercase">Verified</span>
                      </div>
                      <h3 className="text-xs md:text-sm font-black text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">{cert.title}</h3>
                    </div>

                    <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                      <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Suhana Service center</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Full-screen Modal with Multi-Page Support */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={closeCert}>
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={closeCert} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors">
              <LucideIcon name="X" size={24} />
            </button>

            {/* Page Counter */}
            {pageImages.length > 1 && (
              <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Page {currentPage + 1} of {pageImages.length}
              </div>
            )}

            {/* Image Container */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4 relative min-h-0">
              <img
                src={pageImages[currentPage]}
                alt={`${selectedCert.title} - Page ${currentPage + 1}`}
                className="max-w-full max-h-[70vh] object-contain"
              />

              {/* Navigation Arrows */}
              {pageImages.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <LucideIcon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(pageImages.length - 1, p + 1))}
                    disabled={currentPage === pageImages.length - 1}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <LucideIcon name="ChevronRight" size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Footer with title and page thumbnails */}
            <div className="p-5 bg-white border-t border-gray-100">
              <h3 className="text-lg font-black text-gray-900 mb-3">{selectedCert.title}</h3>

              {/* Page Thumbnails */}
              {pageImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {pageImages.map((pageUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`flex-shrink-0 w-14 h-18 rounded-lg border-2 overflow-hidden transition-all ${currentPage === idx
                        ? 'border-blue-500 shadow-md ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-blue-300 opacity-60 hover:opacity-100'
                        }`}
                    >
                      <img src={pageUrl} alt={`Page ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
