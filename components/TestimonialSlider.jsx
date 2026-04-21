'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import LucideIcon from './LucideIcon'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => {
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
    if (testimonials.length <= 1) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, testimonials.length])

  if (testimonials.length === 0) return null

  const testimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-3xl mx-auto px-4 pb-4">

      {/* Single visible card — no absolute positioning, no fixed height */}
      <div className="relative overflow-hidden">
        <div
          key={currentIndex}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-blue-50 relative animate-fade-in"
          style={{ animation: 'fadeIn 0.4s ease' }}
        >
          {/* Quote mark decoration */}
          <div className="absolute top-4 right-6 text-blue-50 pointer-events-none select-none">
            <LucideIcon name="Quote" size={60} />
          </div>

          <div className="relative z-10">
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
            <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed mb-6 italic">
              &ldquo;{testimonial.feedback}&rdquo;
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3">
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

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white"
          aria-label="Previous testimonial"
        >
          <LucideIcon name="ChevronLeft" size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white"
          aria-label="Next testimonial"
        >
          <LucideIcon name="ChevronRight" size={22} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease both;
        }
      `}</style>
    </div>
  )
}
