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
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-[85vw] sm:w-[450px]">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-blue-50 relative h-full flex flex-col transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute top-4 right-6 text-blue-50 pointer-events-none select-none">
                  <LucideIcon name="Quote" size={60} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <LucideIcon key={i} name="Star" size={16} className={i < testimonial.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-200'} />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed mb-6 italic flex-grow">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </p>
                  <div className="flex items-centre gap-3 mt-auto pt-6 border-t border-gray-50">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm bg-gray-100 flex items-centre justify-centre font-bold text-gray-400 flex-shrink-0">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-lg">{testimonial.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-blue-900 font-bold text-base leading-tight">{testimonial.name}</h4>
                      <p className="text-blue-500 text-sm font-semibold">{testimonial.service}</p>
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
