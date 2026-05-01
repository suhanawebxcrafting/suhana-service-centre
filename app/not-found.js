import Link from 'next/link'
import LucideIcon from '@/components/LucideIcon'

export const metadata = {
  title: 'Page Not Found — Suhana Service Center',
  description: 'The page you are looking for does not exist. Visit Suhana Service Center for 70+ government & digital services in Virar.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Big 404 */}
        <div className="relative mb-8">
          <div className="text-[160px] sm:text-[200px] font-black text-blue-100 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/20 animate-bounce">
              <LucideIcon name="SearchX" size={48} className="text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-blue-950 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved. 
          Let us help you find what you need.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 flex items-center gap-2"
          >
            <LucideIcon name="Home" size={18} />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-7 py-3.5 rounded-xl transition-all border border-blue-200 flex items-center gap-2"
          >
            <LucideIcon name="Wrench" size={18} />
            Browse Services
          </Link>
          <a
            href="https://wa.me/917709709243"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2"
          >
            <LucideIcon name="MessageCircle" size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
