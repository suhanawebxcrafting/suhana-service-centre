import Link from 'next/link'
import { services, categories, categoryColors } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'
import LucideIcon from '@/components/LucideIcon'
import TestimonialSlider from '@/components/TestimonialSlider'
import BlogCard from '@/components/BlogCard'
import LogoSlider from '@/components/LogoSlider'
import CertificateSlider from '@/components/CertificateSlider'
import VideoCarousel from '@/components/VideoCarousel'
import { prisma } from '@/lib/prisma'

export const revalidate = 60

const faqs = [
  { q: 'What documents do I need for Aadhaar card update?', a: 'You need your original Aadhaar card and a supporting document for the field being updated (e.g., utility bill for address, gazette for name change). Visit us with originals.' },
  { q: 'How long does PAN card processing take?', a: 'A new PAN card typically takes 15–20 working days for delivery. Instant e-PAN can be obtained on the same day if you have Aadhaar with a registered mobile number.' },
  { q: 'Can I apply for passport at your centre?', a: 'Yes! We assist with the complete passport application process including form filling, document verification, and appointment booking at the Passport Seva Kendra.' },
  { q: 'Do you offer same-day services?', a: 'Many services like printing, photocopies, e-Aadhaar download, mobile recharge, and bill payments are done on the same day. Government document services may take longer.' },
  { q: 'What are your working hours?', a: 'We are open Monday to Saturday, 9:00 AM to 8:00 PM. For urgent queries, you can reach us on WhatsApp anytime.' },
]

const whyUs = [
  { icon: 'Zap', title: 'Fast Service', desc: 'Most services completed quickly with no unnecessary delays. We respect your time.' },
  { icon: 'Handshake', title: 'Expert Guidance', desc: 'Our experienced team provides accurate guidance for all government and digital services.' },
  { icon: 'CircleDollarSign', title: 'Affordable Rates', desc: 'Transparent and reasonable pricing. No hidden charges. We\'re here to help, not profit excessively.' },
  { icon: 'Lock', title: 'Secure & Private', desc: 'Your documents and data are handled with utmost care and confidentiality.' },
  { icon: 'LayoutGrid', title: 'All Under One Roof', desc: '70+ services available at a single location. No need to run to multiple offices.' },
  { icon: 'Headset', title: 'Post-Service Support', desc: 'We stay with you even after service delivery. Follow-up support on WhatsApp and phone.' },
]

export const metadata = {
  title: 'Suhana Service centre — Aadhaar, PAN, Passport & 70+ Online Services in Virar East',
  description: 'Suhana Service centre in Virar East — your trusted one-stop centre for Aadhaar card, PAN card, Passport, Voter ID, Birth Certificate, Income Certificate, Domicile, Banking & 70+ government services. Serving Virar, Vasai & Nalasopara. Call 7709709243.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Suhana Service centre — All Online Services Under One Roof | Virar East',
    description: 'Trusted by thousands in Virar for Aadhaar, PAN, Passport, Certificates & 70+ government services. Fast, reliable & affordable.',
  },
}

export default async function HomePage() {
  const blogs = await prisma.blog.findMany({
    where: {
      isPublished: true,
      OR: [
        { scheduledAt: null },
        { scheduledAt: { lte: new Date() } }
      ]
    },
    orderBy: { createdAt: 'desc' },
    take: 3
  })

  // Fetch active video cards for carousel
  let videos = []
  try {
    videos = await prisma.videoCard.findMany({
      where: { isActive: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    })
  } catch (e) {
    console.warn('videoCard not available yet:', e.message)
  }

  // Fetch active certificates
  let certificates = []
  try {
    certificates = await prisma.certificate.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    })
  } catch (e) {
    console.warn('certificates not available yet:', e.message)
  }

  // Fetch admin-set logo/image customizations for featured service cards
  let customizationsMap = {}
  try {
    const customizationsRaw = await prisma.serviceCustomization.findMany()
    for (const c of customizationsRaw) {
      customizationsMap[c.serviceId] = c
    }
  } catch (e) {
    // Prisma client may not have the new model yet — safe to ignore
    console.warn('serviceCustomization not available:', e.message)
  }

  const featuredIds = [1, 4, 7, 73, 75, 76, 77, 79, 80, 81, 82, 83] // Curated popular services
  const featuredServices = services.filter(s => featuredIds.includes(s.id))
  const totalServices = services.length

  // FAQ Schema for Google rich results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ─── Hero Section ─── */}
      <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-up">
              <div className="tag mb-5 inline-block">🏆 Virar's Trusted Service centre</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
                Suhana<br />
                <span className="text-orange-400">Service centre</span>
              </h1>
              <p className="text-2xl text-white/80 font-medium mb-2">आपकी सेवा, हमारा संकल्प</p>
              <p className="text-blue-200 text-lg mb-6">All Online Services Under One Roof</p>
              <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-lg">
                Your one-stop destination for <strong className="text-white">{totalServices}+ government and digital services</strong> — from Aadhaar & PAN to passports, certificates, smart cards, and more.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/services" className="btn-accent text-base px-7 py-3.5 flex items-center gap-2">
                  <LucideIcon name="Wrench" size={20} /> View All Services
                </Link>
                <a href="tel:7709709243" className="btn-outline text-base px-7 py-3.5 flex items-center gap-2">
                  <LucideIcon name="Phone" size={20} /> Call Now
                </a>
                <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-green-500/20">
                  <svg width="25" height="25" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                  </svg> WhatsApp
                </a>
              </div>
            </div>

            {/* Hero card */}
            <div className="hidden lg:flex flex-col gap-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <LucideIcon name="BarChart3" size={20} className="text-orange-400" /> Our Services at a Glance
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {categories.map(cat => (
                    <Link key={cat.id} href={`/services?cat=${cat.id}`}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-3 text-center transition-all hover:-translate-y-0.5 cursor-pointer border border-white/5 group">
                      <div className="mb-2 flex justify-center">
                        <LucideIcon name={cat.icon} size={24} className="text-white group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-white text-[10px] font-semibold leading-tight uppercase tracking-wider">{cat.label}</div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Quick info */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: `${totalServices}+`, l: 'Services' },
                  { n: '5000+', l: 'Customers Served' },
                  { n: '10+', l: 'Years Experience' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/15">
                    <div className="text-2xl font-black text-orange-400">{s.n}</div>
                    <div className="text-blue-200 text-xs font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'Wrench', n: `${totalServices}+`, l: 'Total Services', color: 'text-blue-600' },
              { icon: 'Users', n: '5000+', l: 'Happy Customers', color: 'text-green-600' },
              { icon: 'Zap', n: 'Same Day', l: 'Quick Services', color: 'text-orange-600' },
              { icon: 'MapPin', n: 'Virar (E)', l: 'Our Location', color: 'text-red-600' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <LucideIcon name={s.icon} size={24} className={s.color} />
                </div>
                <div>
                  <div className="font-extrabold text-lg text-blue-900">{s.n}</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner Logos Slider ─── */}
      <LogoSlider />


      {/* ─── Featured Services ─── */}
      <section id="featured-services" className="py-20 lg:py-28 pattern-bg relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-blue-200/50 shadow-sm animate-fade-in">
              <LucideIcon name="Sparkles" size={14} className="text-orange-500" /> Most Popular Services
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tight leading-tight">
              Featured <span className="text-blue-600">Services</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg font-medium">
              Quick access to our most frequently used services for your essential government and digital needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard service={service} customization={customizationsMap[service.id] || null} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="group btn-primary text-base px-10 py-4.5 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center gap-3 mx-auto w-fit">
              <span className="font-extrabold tracking-tight">EXPLORE ALL {totalServices}+ SERVICES</span>
              <LucideIcon name="ArrowRight" size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Categories Section ─── */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-orange-100 shadow-sm">
              <LucideIcon name="Layers" size={14} className="text-blue-600" /> Browse by Category
            </div>
            <h2 className="section-title mb-3">Service Categories</h2>
            <p className="section-subtitle">Everything you need, organized for easy discovery</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map(cat => {
              const colors = categoryColors[cat.id] || categoryColors.other
              const count = services.filter(s => s.category === cat.id).length
              return (
                <Link key={cat.id} href={`/services?cat=${cat.id}`}
                  className={`${colors.bg} border ${colors.border} rounded-2xl p-6 text-center card-hover cursor-pointer group block shadow-sm hover:shadow-md transition-all`}>
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colors.bg} border ${colors.border} group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm bg-white/50 backdrop-blur-sm`}>
                      <LucideIcon name={cat.icon} size={36} className={colors.text} />
                    </div>
                  </div>
                  <div className={`font-black text-sm ${colors.text} leading-tight mb-2 uppercase tracking-tight`}>{cat.label}</div>
                  <div className="inline-block bg-white/60 px-3 py-1 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest border border-white/20">
                    {count} services
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Certificates Slider ─── */}
      {certificates.length > 0 && <CertificateSlider certificates={certificates} />}


      {/* ─── Why Choose Us ─── */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              💪 Why Choose Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Why Suhana Service centre?
            </h2>
            <p className="text-blue-200 text-base max-w-xl mx-auto">
              Trusted by thousands of residents in Virar for reliable, fast, and affordable services
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/12 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                  <LucideIcon name={item.icon} size={24} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pattern-bg opacity-40 -z-10"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-blue-100 shadow-sm">
              <LucideIcon name="MessageSquare" size={14} className="text-orange-500" /> Testimonials
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tight">
              What Our <span className="text-blue-600">Customers Say</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-6"></div>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* ─── About Preview ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="tag mb-4">🏢 About Us</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4 leading-tight">
                Virar's Most Trusted<br />Service centre
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suhana Service centre has been serving the residents of Virar and surrounding areas with dedication and expertise. We offer a comprehensive range of government and digital services under one roof, ensuring our customers don't have to travel to multiple offices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our experienced team provides accurate guidance, fast processing, and complete support from application to delivery. We are committed to making government services accessible and hassle-free for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: 'MapPin', text: 'Virar (E) - 401305' },
                  { icon: 'Phone', text: '7709709243' },
                  { icon: 'Clock', text: 'Mon–Sat: 9 AM – 8 PM' },
                  { icon: 'CheckCircle2', text: `${totalServices}+ Services Available` }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-blue-50 rounded-lg p-3">
                    <LucideIcon name={item.icon} size={18} className="text-blue-600" /> {item.text}
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary text-sm px-6 py-3">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map(cat => {
                const colors = categoryColors[cat.id] || categoryColors.other
                const count = services.filter(s => s.category === cat.id).length
                return (
                  <div key={cat.id} className={`${colors.bg} border ${colors.border} rounded-2xl p-5 shadow-sm`}>
                    <div className="mb-2">
                      <LucideIcon name={cat.icon} size={28} className={colors.text} />
                    </div>
                    <div className={`font-black text-2xl ${colors.text}`}>{count}</div>
                    <div className="text-gray-700 text-xs font-bold uppercase tracking-wider">{cat.label}</div>
                    <div className="text-gray-400 text-[10px] font-medium">services available</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Latest Blog Section ─── */}
      <section className="py-20 lg:py-28 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-orange-100 shadow-sm">
                <LucideIcon name="Newspaper" size={14} className="text-blue-600" /> Latest Updates
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-blue-950 mb-0 tracking-tight">
                From Our <span className="text-blue-600">Blog</span>
              </h2>
            </div>
            <Link href="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap">
              View All Posts <LucideIcon name="ArrowRight" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, index) => (
              <div key={blog.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Video Carousel Section ─── */}
      {videos.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-blue-100 shadow-sm">
                  <LucideIcon name="PlayCircle" size={14} className="text-orange-500" /> Video Guide
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
                  Watch &amp; <span className="text-blue-600">Learn</span>
                </h2>
                <p className="text-gray-500 text-sm mt-2">Step-by-step video guides for our most popular services</p>
              </div>
            </div>
            <VideoCarousel videos={videos} />
          </div>
        </section>
      )}

      {/* ─── FAQ Section ─── */}
      <section className="py-16 pattern-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="tag mb-3">❓ FAQ</div>
            <h2 className="section-title mb-3">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer">
                  <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
                  <span className="text-blue-600 flex-shrink-0 text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-14 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Need Any Service Today?
          </h2>
          <p className="text-orange-100 text-base mb-7 max-w-xl mx-auto">
            Visit us at Virar (E) or contact us on phone/WhatsApp. We're here to help you with all government and digital services.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:7709709243" className="bg-white text-orange-600 font-bold px-7 py-3.5 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2 text-sm shadow-lg shadow-black/5">
              <LucideIcon name="Phone" size={18} /> Call 7709709243
            </a>
            <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-lg transition-colors flex items-center gap-2 text-sm shadow-lg shadow-black/5">
              <svg width="25" height="25" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
              </svg>     WhatsApp Now
            </a>
            <Link href="/contact" className="bg-white/20 hover:bg-white/30 text-white font-bold px-7 py-3.5 rounded-lg transition-colors flex items-center gap-2 text-sm border border-white/30 backdrop-blur-sm">
              <LucideIcon name="MapPin" size={18} /> Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

