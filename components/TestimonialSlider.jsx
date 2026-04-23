'use client'
import { useState, useEffect, useRef } from 'react'
import LucideIcon from './LucideIcon'

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([])
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => {
        setTestimonials(data.filter(t => t.isFeatured))
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    if (!scrollRef.current || isPaused || testimonials.length === 0) return
    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollRef.current.scrollBy({ left: 1, behavior: 'auto' })
      }
    }, 40)
    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])

  if (testimonials.length === 0) return null

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      {/* Manual Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-12 pt-4 px-4 sm:px-8 snap-x snap-mandatory scrollbar-hide gap-6"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-[85vw] sm:w-[450px] snap-center"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-blue-50 relative h-full flex flex-col transition-all hover:shadow-2xl hover:shadow-blue-500/10">
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-6 text-blue-50 pointer-events-none select-none">
                <LucideIcon name="Quote" size={60} />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <LucideIcon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < testimonial.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-200'}
                    />
                  ))}
                </div>

                {/* Feedback text */}
                <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed mb-6 italic flex-grow">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm bg-gray-100 flex items-center justify-center font-bold text-gray-400 flex-shrink-0">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
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

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
