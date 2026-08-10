'use client'
import { useState, useEffect, useRef } from 'react'
import LucideIcon from './LucideIcon'

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data.filter(t => t.isFeatured)))
      .catch(err => console.error(err))
  }, [])

  if (testimonials.length === 0) return null

  const sliderItems = [...testimonials, ...testimonials]

  return (
    <div className="relative w-full">
      <div className="overflow-hidden pb-12 pt-4">
        <div className="flex w-max gap-6 animate-scroll-testimonials px-4 sm:px-8">
          {sliderItems.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-[85vw] sm:w-[350px]">
              <div className="bg-white rounded-[1.5rem] p-5 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative h-full flex flex-col transition-all duration-300 hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] hover:-translate-y-1">
                <div className="absolute top-4 right-5 text-blue-50 pointer-events-none select-none">
                  <LucideIcon name="Quote" size={40} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <LucideIcon key={i} name="Star" size={14} className={i < testimonial.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-200'} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-5 italic flex-grow">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-100 shadow-sm bg-blue-50 flex items-center justify-center font-bold text-blue-400 flex-shrink-0">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-lg">{testimonial.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-blue-900 font-bold text-sm leading-tight">{testimonial.name}</h4>
                      <p className="text-blue-500 text-[11px] font-bold uppercase tracking-wide mt-0.5">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
