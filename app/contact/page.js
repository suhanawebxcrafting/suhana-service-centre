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
    const msg = `Hello Suhana Service centre!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService Needed: ${form.service}%0AMessage: ${form.message}`
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
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                    </svg>
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
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                  </svg>WhatsApp
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.6891620490587!2d72.8584376!3d19.4689641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a91c7e33401b%3A0xe87dadf916305583!2sCSC%20AAPLE%20SARKAR%20centre!5e0!3m2!1sen!2sin!4v1776927631048!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suhana Service centre Location - Virar East"
            ></iframe>
          </div>
          <p className="text-center text-gray-500 text-xs mt-3">
            Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305
          </p>
        </div>
      </section>

      {/* Global Toast Popup */}
      {submitted && !saveFailed && (
        <div className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-fade-up">
          <LucideIcon name="CheckCircle2" size={24} />
          <div>
            <h4 className="font-bold text-sm">Message Sent!</h4>
            <p className="text-xs opacity-90">Redirecting to WhatsApp...</p>
          </div>
        </div>
      )}

      {submitted && saveFailed && (
        <div className="fixed bottom-10 right-10 bg-orange-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-fade-up">
          <LucideIcon name="AlertCircle" size={24} />
          <div>
            <h4 className="font-bold text-sm">Action Needs Attention</h4>
            <p className="text-xs opacity-90">Couldn't save to DB. Opening WhatsApp directly.</p>
          </div>
        </div>
      )}
    </>
  )
}
