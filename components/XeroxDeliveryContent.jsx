'use client'

import { useState, useEffect } from 'react'
import { Upload, MapPin, Phone, User, FileText, CheckCircle2, AlertCircle, Loader2, X, ChevronRight } from 'lucide-react'
import LucideIcon from '@/components/LucideIcon'
import Link from 'next/link'

export const printServices = [
  { title: 'Color Printing', slug: 'color-printing', desc: 'Vibrant colour prints for presentations, brochures, posters and project work.', badge: 'Available Now', icon: 'Printer' },
  { title: 'Black & White Printing', slug: 'bw-printing', desc: 'Sharp monochrome prints for forms, assignments, reports and office documents.', badge: 'Available Now', icon: 'FileText' },
  { title: 'Blackbook Printing', slug: 'blackbook-printing', desc: 'Clear and durable blackbook print service for projects, records, and submissions.', badge: 'High Demand', icon: 'BookOpen' },
  { title: 'Jumbo Xerox', slug: 'jumbo-xerox', desc: 'Large-size xerox and copy solutions available in A3, A2, A1, A0, A00 for drawings, plans, posters, and charts.', badge: 'High Demand', icon: 'Maximize2' },
  { title: 'Visiting Card', slug: 'visiting-card-printing', desc: 'Neat visiting card printing with quality finish for personal and business use.', badge: 'Available Now', icon: 'CreditCard' },
  { title: 'All Size Scanning', slug: 'all-size-scanning', desc: 'Document scanning support in multiple sizes for records, forms, and submissions.', badge: 'High Demand', icon: 'Scan' },
  { title: 'Smart Card', slug: 'smart-card-printing', desc: 'Smart card printing for ID cards, membership cards, office cards and custom cards. Starting from ₹80.', badge: 'Available Now', icon: 'CreditCard' },
  { title: 'Letterhead Print', slug: 'letterhead-print', desc: 'Professional letterhead printing for offices, shops, and local business branding.', badge: 'Available Now', icon: 'FileBadge' },
  { title: 'Passport Photos', slug: 'passport-photos', desc: 'Quick passport-size photo prints with clean framing and fast delivery.', badge: 'High Demand', icon: 'Image' },
  { title: 'Project Printing', slug: 'project-printing', desc: 'Complete support for school and college projects with print and finishing options.', badge: 'Available Now', icon: 'GraduationCap' },
  { title: 'Billbook Print', slug: 'billbook-print', desc: 'Custom billbook printing for daily billing, invoicing, and store operations.', badge: 'Available Now', icon: 'Receipt' },
  { title: 'Cartridge Refilling', slug: 'cartridge-refilling', desc: 'Reliable ink and toner cartridge refilling for regular office and home printing.', badge: 'Available Now', icon: 'Droplet' },
  { title: 'Computer Accessories', slug: 'computer-accessories', desc: 'Essential computer accessories including cables, peripherals, and daily-use items.', badge: 'Available Now', icon: 'Mouse' },
  { title: 'Custom Rubber Stamps', slug: 'custom-rubber-stamps', desc: 'Quick manufacturing of self-inking, pre-inked, and traditional rubber stamps for official business use.', badge: 'Available Now', icon: 'CheckSquare' },
  { title: 'Stationery Products', slug: 'stationery-products', desc: 'Daily-use stationery, notebooks, pens, files, and office essentials in one place.', badge: 'Busy - Slight Delay', icon: 'PenTool' },
  { title: 'Spiral Binding', slug: 'spiral-binding', desc: 'Professional binding for project reports, files and presentations.', badge: 'Available Now', icon: 'Book' },
  { title: 'Lamination', slug: 'lamination', desc: 'Protect important certificates, ID cards and documents with durable lamination.', badge: 'Busy - Slight Delay', icon: 'Layers' },
  { title: 'Xerox / Photocopy', slug: 'photocopy-xerox', desc: 'Affordable photocopying for books, forms, IDs and daily office needs.', badge: 'Available Now', icon: 'Copy' },
  { title: 'Sticker & Label Printing', slug: 'sticker-label-printing', desc: 'Product labels, MRP & barcode labels, name stickers — custom sizes, same day.', badge: 'Available Now', icon: 'Tag' },
  { title: 'Cartridge Refill & Ink', slug: 'cartridge-refilling', desc: 'HP, Canon & Epson cartridge refills with test print. Ink bottles in stock.', badge: 'Available Now', icon: 'Droplets' },
  { title: 'Aadhaar & PAN Card Print', slug: 'aadhaar-pan-print', desc: 'PVC card-size prints from your e-Aadhaar, ID xerox for forms, lamination.', badge: 'High Demand', icon: 'IdCard' },
]

export default function XeroxDeliveryContent({ location }) {
  const locName = location?.name || 'Virar'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    distance: 0,
    serviceNeeded: 'General Print & Copy',
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [selectedServiceModal, setSelectedServiceModal] = useState(null)

  useEffect(() => {
    if (selectedServiceModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedServiceModal])

  const deliveryCharge = formData.distance > 4 ? 50 : 0

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size should be less than 10MB')
        return
      }
      setFile(selectedFile)
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (!file) throw new Error('Please upload a document')

      const submitData = new FormData()
      submitData.append('file', file)
      submitData.append('name', formData.name)
      submitData.append('phone', formData.phone)
      submitData.append('address', formData.address)
      submitData.append('distance', formData.distance)
      submitData.append('charge', deliveryCharge)
      submitData.append('serviceRequested', formData.serviceNeeded) 
      submitData.append('location', locName)

      const res = await fetch('/api/xerox', {
        method: 'POST',
        body: submitData,
      })

      if (!res.ok) throw new Error('Failed to submit order')

      setSuccess(true)
      setSelectedServiceModal(null) 
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const openServiceModal = (service) => {
    setFormData(prev => ({ ...prev, serviceNeeded: service.title }))
    setSelectedServiceModal(service)
  }

  if (success) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600 w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Published!</h2>
          <p className="text-gray-600 mb-8">
            Your {formData.serviceNeeded} request has been received. Our team will contact you shortly for confirmation.
          </p>
          <button
            onClick={() => { setSuccess(false); setFile(null); }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  const renderForm = (isModal = false) => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
            <User size={16} className="text-blue-600" /> Full Name
          </label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
            <Phone size={16} className="text-blue-600" /> Phone Number
          </label>
          <input
            required
            type="tel"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="99999 99999"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
          <LucideIcon name="Layers" size={16} className="text-blue-600" /> Service Required
        </label>
        <select
          value={formData.serviceNeeded}
          onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none font-medium text-gray-800"
          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
        >
          <option value="General Print & Copy">General Print & Copy</option>
          {printServices.map((s, i) => (
            <option key={i} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
          <MapPin size={16} className="text-blue-600" /> Delivery Address
        </label>
        <textarea
          required
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
          placeholder="Street, Building, Landmark, Pincode"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Approx. Distance from center (Virar E)</label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Within 4 km', value: 3, charge: 'Free Delivery' },
            { label: 'Beyond 4 km', value: 5, charge: '₹50 - ₹100' },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFormData({ ...formData, distance: opt.value })}
              className={`p-3 rounded-xl border transition-all text-left ${formData.distance === opt.value ? 'border-blue-600 bg-blue-50/50 shadow-md shadow-blue-500/10' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}
            >
              <div className={`font-bold text-sm ${formData.distance === opt.value ? 'text-blue-700' : 'text-gray-700'}`}>{opt.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{opt.charge}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
          <FileText size={16} className="text-blue-600" /> Upload Documents
        </label>
        <div className="relative group">
          <input type="file" className="hidden" id={`file-upload-${isModal ? 'modal' : 'main'}`} accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileUpload} />
          <label htmlFor={`file-upload-${isModal ? 'modal' : 'main'}`} className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-6 transition-all cursor-pointer ${file ? 'border-green-400 bg-green-50' : 'border-gray-300 bg-gray-50 group-hover:bg-gray-100 group-hover:border-blue-400'}`}>
            <Upload size={24} className={`mb-2 ${file ? 'text-green-500' : 'text-gray-400 group-hover:text-blue-500 transition-colors'}`} />
            <span className="font-bold text-gray-700 text-sm text-center">{file ? file.name : 'Click to upload or drag and drop'}</span>
            <span className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</span>
          </label>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
          <AlertCircle size={18} /> {error}
        </div>
      )}

      <button disabled={loading} className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
        {loading ? <><Loader2 className="animate-spin" /> Processing Order...</> : <>Place Order Now</>}
      </button>
    </form>
  )

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/30 backdrop-blur-sm animate-fade-up">
            <LucideIcon name="Printer" size={14} /> Xerox &amp; Printing Solutions in {locName}
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Fast Print &amp; <span className="text-orange-400">Doorstep Delivery</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl font-medium max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            From standard A4 photocopies to Jumbo A0 prints, blackbook printing, and smart cards. High-quality prints delivered right to your home in {locName}.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#upload-section" className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 shadow-xl shadow-black/10">
              <Upload size={20} /> Upload Documents
            </a>
            <a href="https://wa.me/917709709243?text=Hello,%20I%20need%20General%20Print%20%26%20Copy%20services." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-xl shadow-green-500/20">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Send on WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="#f9fafb"><path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" /></svg>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 pattern-bg opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-blue-950 mb-4 tracking-tight">Transparent <span className="text-blue-600">Pricing</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto font-medium">Best rates in {locName} for high-quality printing. No hidden charges.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { size: 'A4', type: 'B&W', price: '1.5', icon: 'FileText', color: 'slate', desc: 'Standard forms & docs' },
              { size: 'A4', type: 'Color', price: '9', icon: 'Palette', color: 'blue', desc: 'Vibrant presentations' },
              { size: 'A3', type: 'B&W', price: '3', icon: 'Copy', color: 'slate', desc: 'Large plans & charts' },
              { size: 'A3', type: 'Color', price: '18', icon: 'Image', color: 'orange', desc: 'Posters & high quality' },
            ].map((p, i) => (
              <div key={i} className={`relative bg-white rounded-3xl p-5 lg:p-6 text-center border transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgb(0,0,0,0.1)] overflow-hidden group cursor-pointer ${
                  p.color === 'blue' ? 'border-blue-100 shadow-blue-500/10' :
                  p.color === 'orange' ? 'border-orange-100 shadow-orange-500/10' :
                  'border-slate-100 shadow-slate-500/5'
                }`}>
                
                <div className={`absolute top-0 left-0 w-full h-1.5 transition-all duration-500 group-hover:h-2 ${
                  p.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                  p.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                  'bg-gradient-to-r from-slate-400 to-slate-600'
                }`}></div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-sm ${
                  p.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600' :
                  p.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100/50 text-orange-600' :
                  'bg-gradient-to-br from-slate-50 to-slate-100/50 text-slate-600'
                }`}>
                  <LucideIcon name={p.icon} size={26} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <div className="flex items-center justify-center gap-2.5 mb-4">
                  <span className={`text-[11px] font-black px-3 py-1 rounded-md shadow-sm tracking-wide ${
                    p.color === 'blue' ? 'bg-blue-600 text-white' :
                    p.color === 'orange' ? 'bg-orange-500 text-white' :
                    'bg-slate-700 text-white'
                  }`}>{p.size}</span>
                  <span className={`text-[15px] font-extrabold ${
                    p.color === 'blue' ? 'text-blue-700' :
                    p.color === 'orange' ? 'text-orange-700' :
                    'text-slate-700'
                  }`}>{p.type}</span>
                </div>
                
                <div className={`text-4xl lg:text-[44px] font-black mb-1 flex items-start justify-center transition-all duration-300 group-hover:scale-105 ${
                  p.color === 'blue' ? 'text-blue-950' :
                  p.color === 'orange' ? 'text-orange-950' :
                  'text-slate-900'
                }`}>
                  <span className="text-xl lg:text-2xl mt-1.5 text-gray-400 font-extrabold mr-1">₹</span>{p.price}
                </div>
                <div className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-4">Per Page</div>
                
                <p className="text-xs text-gray-500 font-semibold leading-relaxed px-2">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-blue-950 mb-4 tracking-tight">
              Our Complete <span className="text-blue-600">Print &amp; Copy Solutions</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              We offer a wide variety of printing, scanning, and stationery services to meet all your personal, academic, and business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printServices.map((service, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-7 lg:p-8 border-[2px] border-blue-400 lg:border-gray-200 lg:hover:border-blue-400 shadow-[0_4px_25px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-bl-[100px] -z-10 scale-110 lg:scale-100 lg:group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 text-white lg:from-blue-50 lg:to-blue-100 lg:text-blue-600 lg:group-hover:from-blue-600 lg:group-hover:to-blue-700 lg:group-hover:text-white transition-all duration-300 shadow-sm">
                    <LucideIcon name={service.icon} size={30} />
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm ${service.badge.includes('High') ? 'bg-orange-50 text-orange-600 border border-orange-100' : service.badge.includes('Delay') ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-blue-700 lg:text-gray-950 text-[20px] mb-3 tracking-tight lg:group-hover:text-blue-700 transition-colors">{service.title}</h3>
                
                <p className="text-gray-700 text-[15px] leading-relaxed flex-1 mb-8 font-semibold">{service.desc}</p>
                
                <div className="flex-1"></div>
                
                <div className="grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-gray-100/80">
                  <button onClick={() => openServiceModal(service)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 text-[14px] shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30">
                    Order Now <ChevronRight size={16} className="opacity-80" />
                  </button>
                  {service.slug && (
                    <Link href={`/locations/${location?.slug || 'virar-east'}/${service.slug}`} className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center text-[14px] border border-gray-200 hover:border-gray-300 shadow-sm">
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-orange-500"></div>
              <h3 className="text-2xl font-black text-blue-950 mb-6">Quick Upload &amp; Delivery</h3>
              {renderForm(false)}
            </div>

            <div className="space-y-6 lg:pt-10">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  Prefer WhatsApp?
                </h3>
                <p className="text-green-100 font-medium mb-6">
                  Skip the form! Just send us your documents and delivery address directly on WhatsApp.
                </p>
                <a href={`https://wa.me/917709709243?text=Hello,%20I%20want%20to%20order%20${encodeURIComponent(formData.serviceNeeded)}`} target="_blank" rel="noopener noreferrer" 
                   className="bg-white text-green-600 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-105 w-full">
                  Send Documents on WhatsApp
                </a>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <LucideIcon name="Info" size={20} className="text-blue-600" /> Important Guidelines
                </h3>
                <ul className="space-y-4">
                  {[
                    'Ensure PDFs are not password protected.',
                    'Specify color or B&W requirements clearly.',
                    'For Jumbo Xerox or bulk orders, please mention dimensions.',
                    'Delivery within 4km is absolutely FREE.',
                  ].map((note, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedServiceModal(null)}></div>
          
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-up">
            <div className="sticky top-0 bg-white/90 backdrop-blur-md p-4 sm:p-6 border-b border-gray-100 flex items-start sm:items-center justify-between z-20 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <LucideIcon name={selectedServiceModal.icon} size={24} />
                </div>
                <h3 className="font-black text-xl sm:text-2xl text-gray-900 leading-tight">Order {selectedServiceModal.title}</h3>
              </div>
              <button onClick={() => setSelectedServiceModal(null)} className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
              
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{selectedServiceModal.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100/50 text-blue-700 rounded-lg text-xs font-bold border border-blue-100">
                    <LucideIcon name="CheckCircle2" size={14} /> Premium Quality
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100/50 text-green-700 rounded-lg text-xs font-bold border border-green-100">
                    <LucideIcon name="Truck" size={14} /> Fast Delivery
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100/50 text-orange-700 rounded-lg text-xs font-bold border border-orange-100">
                    <LucideIcon name="ThumbsUp" size={14} /> Best Price
                  </span>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 sm:p-6 border border-green-100 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between text-center sm:text-left">
                <div>
                  <h4 className="font-bold text-green-900 mb-1 flex items-center justify-center sm:justify-start gap-2">
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" className="text-green-600" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                    </svg> Fast Track via WhatsApp
                  </h4>
                  <p className="text-sm text-green-800">Skip the form, send docs directly.</p>
                </div>
                <a href={`https://wa.me/917709709243?text=Hello,%20I%20want%20to%20order%20${encodeURIComponent(selectedServiceModal.title)}.`} target="_blank" rel="noopener noreferrer" 
                   className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-green-500/20 text-sm w-full sm:w-auto text-center flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  Order on WhatsApp
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-sm font-medium text-gray-500">OR fill the form below</span>
                </div>
              </div>

              {renderForm(true)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
