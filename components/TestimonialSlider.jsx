'use client'
import { useState, useEffect, useCallback } from 'react'
import LucideIcon from './LucideIcon'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => {
        // Show only featured testimonials on frontend
        setTestimonials(data.filter(t => t.isFeatured))
      })
      .catch(err => console.error(err))
  }, [])

  const nextSlide = useCallback(() => {
    if (isAnimating || testimonials.length === 0) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  const prevSlide = useCallback(() => {
    if (isAnimating || testimonials.length === 0) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, testimonials.length])

  if (testimonials.length === 0) return null;


  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      <div className="overflow-hidden relative min-h-[400px] flex items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute w-full px-4 transition-all duration-500 ease-in-out transform ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-blue-50 relative">
              {/* Quote marks background */}
              <div className="absolute top-6 right-8 text-blue-50">
                <LucideIcon name="Quote" size={80} />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <LucideIcon
                      key={i}
                      name="Star"
                      size={18}
                      className={i < testimonial.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-200'}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                  "{testimonial.feedback}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm bg-gray-100 flex items-center justify-center font-bold text-gray-400">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      testimonial.name.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div>
                    <h4 className="text-blue-900 font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm font-semibold">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white"
          aria-label="Previous testimonial"
        >
          <LucideIcon name="ChevronLeft" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white"
          aria-label="Next testimonial"
        >
          <LucideIcon name="ChevronRight" size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentIndex(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-blue-200 hover:bg-blue-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

