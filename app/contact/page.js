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

    // Also open WhatsApp
    const msg = `Hello Suhana Service Centre!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService Needed: ${form.service}%0AMessage: ${form.message}`
    window.open(`https://wa.me/917709709243?text=${msg}`, '_blank')

    setSubmitting(false)
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setSaveFailed(false) }, 7000)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/10 mx-auto w-fit">
            <LucideIcon name="Phone" size={16} /> Contact Us
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            Get in <span className="text-orange-400">Touch</span>
          </h1>
          <p className="text-blue-200 text-base">We&apos;re here to help you with all your service needs</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white"><path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" /></svg>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info Column */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                  <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <LucideIcon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">Office Address</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Office No- 04, Raipada,<br />
                      Nr. Anand Gaushalla,<br />
                      Chandansar Road,<br />
                      Virar (E) - 401305
                    </p>
                  </div>
                </div>

                {/* Phone & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone — all content INSIDE the <a> tag */}
                  <a
                    href="tel:7709709243"
                    className="flex items-center gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow group"
                  >
                    <div className="w-11 h-11 bg-orange-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      <LucideIcon name="Phone" size={22} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Primary Phone</div>
                      <div className="font-bold text-gray-800 text-sm">7709709243</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:suhanaservicec@gmail.com" className="flex items-center gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow group">
                    <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      <LucideIcon name="Mail" size={22} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Email Address</div>
                      <div className="font-bold text-gray-800 text-xs break-all">suhanaservicec@gmail.com</div>
                    </div>
                  </a>
                </div>

                {/* WhatsApp */}
                <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-green-50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow group">
                  <div className="w-11 h-11 bg-[#25D366] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <LucideIcon name="MessageCircle" size={22} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">WhatsApp</div>
                    <div className="font-bold text-gray-800 text-sm">Chat on WhatsApp</div>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-11 h-11 bg-gray-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <LucideIcon name="Clock" size={22} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-0.5">Working Hours</div>
                    <div className="font-bold text-gray-800 text-sm italic">Monday – Saturday: 9 AM – 8 PM</div>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a href="tel:7709709243" className="btn-primary text-sm py-3 justify-center text-center rounded-xl flex items-center gap-2">
                  <LucideIcon name="Phone" size={18} /> Call Now
                </a>
                <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <LucideIcon name="MessageCircle" size={18} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-blue-900 mb-1">Send us a Message</h2>
                <p className="text-gray-400 text-xs mb-5">Your message is saved to our system &amp; sent on WhatsApp.</p>

                {/* Success banner */}
                {submitted && !saveFailed && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-5 text-green-700 text-sm font-medium flex items-center gap-2">
                    <LucideIcon name="CheckCircle2" size={18} />
                    Message sent &amp; saved! We&apos;ll respond on WhatsApp soon.
                  </div>
                )}
                {submitted && saveFailed && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-5 text-orange-700 text-sm font-medium flex items-center gap-2">
                    <LucideIcon name="AlertCircle" size={18} />
                    WhatsApp opened — but saving to system failed. Please call us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field id="name" label="Full Name *" error={errors.name}>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => { setForm(p => ({ ...p, name: e.target.value })); clearFieldError('name') }}
                        className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-50' : 'border-gray-200 focus:border-blue-400 focus:ring-blue-50'}`}
                      />
                    </Field>

                    <Field id="phone" label="Phone Number *" error={errors.phone}>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        value={form.phone}
                        onChange={e => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 10)
                          setForm(p => ({ ...p, phone: val }))
                          clearFieldError('phone')
                        }}
                        className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-300 focus:border-red-400 focus:ring-red-50' : 'border-gray-200 focus:border-blue-400 focus:ring-blue-50'}`}
                      />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field id="email" label="Email Address *" error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => { setForm(p => ({ ...p, email: e.target.value })); clearFieldError('email') }}
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-50' : 'border-gray-200 focus:border-blue-400 focus:ring-blue-50'}`}
                    />
                  </Field>

                  {/* Service Needed — dropdown of all services */}
                  <Field id="service" label="Service Needed" error={errors.service}>
                    <div className="relative">
                      <select
                        id="service"
                        value={form.service}
                        onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all appearance-none bg-white text-gray-700"
                      >
                        <option value="">— Select a service —</option>
                        {SERVICE_OPTIONS.map(name => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                      </select>
                      <LucideIcon name="ChevronDown" size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </Field>

                  {/* Message */}
                  <Field id="message" label="Additional Message" error={errors.message}>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Describe your requirement or any additional details..."
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary py-3.5 justify-center text-base rounded-xl flex items-center gap-2 hover:-translate-y-1 transition-all shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <><LucideIcon name="Loader2" size={20} className="animate-spin" /> Saving &amp; Sending...</>
                    ) : (
                      <><LucideIcon name="Send" size={20} /> Send Message</>
                    )}
                  </button>
                  <p className="text-gray-400 text-[10px] text-center font-bold uppercase tracking-widest mt-2">
                    Saved to our system · Sent via WhatsApp
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-bold text-blue-900 mb-5 text-center flex items-center justify-center gap-2">
            <LucideIcon name="MapPin" size={24} className="text-orange-500" /> Find Us on Map
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.234141893842!2d72.82!3d19.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI3JzM2LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1000000000000&q=Chandansar+Road+Virar+East+401305"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suhana Service Centre Location - Virar East"
            ></iframe>
          </div>
          <p className="text-center text-gray-500 text-xs mt-3">
            Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305
          </p>
        </div>
      </section>
    </>
  )
}
