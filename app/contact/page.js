'use client'
import { useState } from 'react'
import LucideIcon from '@/components/LucideIcon'
import { services } from '@/data/services'

// ─── Field wrapper — MUST be outside component to avoid re-mount on each render ───
function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 text-xs font-semibold mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-[11px] mt-1 font-semibold flex items-center gap-1">
          <LucideIcon name="AlertCircle" size={11} />
          {error}
        </p>
      )}
    </div>
  )
}

// Build a flat list of all service names for the dropdown
const SERVICE_OPTIONS = services.map(s => s.name).sort((a, b) => a.localeCompare(b))

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [saveFailed, setSaveFailed] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required.'
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      errs.phone = 'Phone number must be exactly 10 digits.'
    }
    if (!form.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    return errs
  }

  const clearFieldError = (field) => setErrors(prev => { const n = { ...prev }; delete n[field]; return n })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSaveFailed(false)
    setSubmitting(true)

    // Save to admin DB
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('API error')
    } catch (err) {
      console.error('Failed to save message to admin:', err)
      setSaveFailed(true)
    }

    setSubmitting(false)
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setSaveFailed(false) }, 5000)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <>
      {/* Premium Hero */}
      <section className="hero-gradient relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500 rounded-full blur-[100px] opacity-30 mix-blend-screen pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <LucideIcon name="Headphones" size={16} className="text-orange-400" /> We are Online
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Talk</span>
          </h1>
          <p className="text-blue-100/90 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Have a question about Aadhaar, PAN, Passport, or any of our 70+ services? We're just a message away.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.26,192.39,102.53Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            
            {/* Contact Info Cards (Left Column) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-blue-950 mb-3 tracking-tight">Get in Touch</h2>
                <p className="text-gray-500 font-medium leading-relaxed">Reach out to us directly through any of these channels. We usually respond within minutes during working hours.</p>
              </div>

              {/* Office Card */}
              <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:-translate-y-1 transition-transform">
                    <LucideIcon name="MapPin" size={26} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Our Office</div>
                    <p className="text-gray-700 font-semibold text-[15px] leading-relaxed">
                      Office No- 04, Raipada,<br />
                      Nr. Anand Gaushalla,<br />
                      Chandansar Road,<br />
                      Virar (E) - 401305
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Row (Phone & Email) */}
              <div className="space-y-6">
                <a href="tel:7709709243" className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-orange-200 transition-all duration-300 flex items-center gap-5 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:-translate-y-1 transition-transform">
                    <LucideIcon name="Phone" size={26} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-gray-700 font-bold text-lg leading-relaxed">7709709243</div>
                  </div>
                </a>

                <a href="mailto:suhanaservicec@gmail.com" className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-all duration-300 flex items-center gap-5 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:-translate-y-1 transition-transform">
                    <LucideIcon name="Mail" size={26} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-gray-700 font-bold text-lg leading-relaxed">suhanaservicec@gmail.com</div>
                  </div>
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
                className="group relative bg-[#25D366] rounded-3xl p-6 flex items-center justify-between shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/80 text-[10px] font-black uppercase tracking-widest mb-1">Instant Reply</div>
                    <div className="text-white font-black text-xl">Chat on WhatsApp</div>
                  </div>
                </div>
                <LucideIcon name="ArrowRight" size={24} className="text-white opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all relative z-10" />
              </a>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-orange-50 rounded-bl-[4rem] rounded-tr-[2.5rem] -z-10"></div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Send a Message</h3>
                  <p className="text-gray-500 text-sm font-medium">Fill out the form below and we will get back to you shortly.</p>
                </div>

                {/* Success/Error Banners */}
                {submitted && !saveFailed && (
                  <div className="bg-green-50/80 backdrop-blur-sm border border-green-200 rounded-2xl p-4 mb-8 text-green-700 text-sm font-bold flex items-center gap-3 animate-fade-in shadow-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><LucideIcon name="Check" size={16} /></div>
                    Message sent successfully! We'll contact you soon.
                  </div>
                )}
                {submitted && saveFailed && (
                  <div className="bg-orange-50/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-4 mb-8 text-orange-700 text-sm font-bold flex items-center gap-3 animate-fade-in shadow-sm">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"><LucideIcon name="AlertTriangle" size={16} /></div>
                    Failed to send message. Please call us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field id="name" label="Full Name" error={errors.name}>
                      <input id="name" type="text" placeholder="John Doe" value={form.name} onChange={e => { setForm(p => ({ ...p, name: e.target.value })); clearFieldError('name') }}
                        className={`w-full bg-slate-50 border rounded-xl px-5 py-4 text-[15px] font-medium outline-none focus:bg-white transition-all ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'}`} />
                    </Field>

                    <Field id="phone" label="Phone Number" error={errors.phone}>
                      <input id="phone" type="tel" placeholder="10-digit number" maxLength={10} value={form.phone} onChange={e => { const val = e.target.value.replace(/\D/g, '').slice(0, 10); setForm(p => ({ ...p, phone: val })); clearFieldError('phone') }}
                        className={`w-full bg-slate-50 border rounded-xl px-5 py-4 text-[15px] font-medium outline-none focus:bg-white transition-all ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'}`} />
                    </Field>
                  </div>

                  <Field id="email" label="Email Address" error={errors.email}>
                    <input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={e => { setForm(p => ({ ...p, email: e.target.value })); clearFieldError('email') }}
                      className={`w-full bg-slate-50 border rounded-xl px-5 py-4 text-[15px] font-medium outline-none focus:bg-white transition-all ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'}`} />
                  </Field>

                  <Field id="service" label="Service Needed (Optional)" error={errors.service}>
                    <div className="relative">
                      <select id="service" value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[15px] font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-gray-700 cursor-pointer">
                        <option value="">— Select a service —</option>
                        {SERVICE_OPTIONS.map(name => <option key={name} value={name}>{name}</option>)}
                      </select>
                      <LucideIcon name="ChevronDown" size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </Field>

                  <Field id="message" label="How can we help?" error={errors.message}>
                    <textarea id="message" rows="4" placeholder="Describe your requirement..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[15px] font-medium outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none" />
                  </Field>

                  <button type="submit" disabled={submitting}
                    className="w-full group bg-blue-950 hover:bg-blue-900 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_20px_rgba(23,37,84,0.15)] hover:shadow-[0_15px_30px_rgba(23,37,84,0.25)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed mt-4">
                    {submitting ? (
                      <><LucideIcon name="Loader2" size={22} className="animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <LucideIcon name="Send" size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Full-width Map Section */}
      <section className="relative flex flex-col lg:block w-full">
        {/* Map Container */}
        <div className="relative h-[300px] sm:h-[350px] lg:h-[450px] w-full bg-gray-200 order-1 lg:order-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.6891620490587!2d72.8584376!3d19.4689641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a91c7e33401b%3A0xe87dadf916305583!2sCSC%20AAPLE%20SARKAR%20centre!5e0!3m2!1sen!2sin!4v1776927631048!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Suhana Service Center Location"
          ></iframe>
        </div>
        
        {/* Map Card */}
        <div className="lg:absolute lg:inset-0 pointer-events-none flex items-center justify-center lg:justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0 order-2 lg:order-none bg-gray-50 lg:bg-transparent">
           <div className="bg-white lg:bg-white/90 lg:backdrop-blur-xl p-8 rounded-3xl shadow-sm lg:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 lg:border-white w-full max-w-sm pointer-events-auto lg:hover:-translate-y-2 transition-transform duration-500">
             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-5">
               <LucideIcon name="MapPin" size={24} />
             </div>
             <h3 className="text-xl font-black text-gray-900 mb-2">Visit Our Center</h3>
             <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
               Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305
             </p>
             <a href="https://maps.app.goo.gl/Tix69F2kF7B8L6nS8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-lg shadow-blue-600/20 group">
                <LucideIcon name="Navigation" size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Get Directions
             </a>
           </div>
        </div>
      </section>

      {/* Global Toast Popup */}
      {submitted && !saveFailed && (
        <div className="fixed bottom-10 right-10 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 animate-fade-up border border-gray-800">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
            <LucideIcon name="Check" size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
            <p className="text-gray-400 text-xs font-medium mt-0.5">We will reach out to you shortly.</p>
          </div>
        </div>
      )}
    </>
  )
}
