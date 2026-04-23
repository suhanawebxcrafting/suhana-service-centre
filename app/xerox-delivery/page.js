'use client'

import { useState } from 'react'
import { Upload, MapPin, Phone, User, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import LucideIcon from '@/components/LucideIcon'

export default function XeroxDeliveryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    distance: 0,
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

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

      // 1. Upload to Cloudinary (Mocking the server-side API call)
      const submitData = new FormData()
      submitData.append('file', file)
      submitData.append('name', formData.name)
      submitData.append('phone', formData.phone)
      submitData.append('address', formData.address)
      submitData.append('distance', formData.distance)
      submitData.append('charge', deliveryCharge)

      const res = await fetch('/api/xerox', {
        method: 'POST',
        body: submitData,
      })

      if (!res.ok) throw new Error('Failed to submit order')

      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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
            Your Xerox delivery request has been received. Our team will contact you shortly for confirmation.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-blue-100 shadow-sm">
            <LucideIcon name="Truck" size={14} className="text-orange-500" /> Doorstep Service
          </div>
          <h1 className="text-3xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tight">
            Xerox <span className="text-blue-600">Delivery</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Upload your documents and get them xeroxed and delivered to your doorstep. <span className="text-blue-600 font-bold">Delivery within 30min to 2hrs!</span> Free delivery within 4km!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <User size={16} className="text-blue-600" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="99999 99999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" /> Delivery Address
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Street, Building, Landmark, Pincode"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              {/* Distance Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Approx. Distance from Centre (Virar E)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Within 4 km', value: 3, charge: 'Free' },
                    { label: 'Beyond 4 km', value: 5, charge: '₹50 - ₹100' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, distance: opt.value })}
                      className={`p-4 rounded-xl border transition-all text-left ${formData.distance === opt.value
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-gray-100 bg-gray-50 hover:bg-gray-100'
                        }`}
                    >
                      <div className={`font-bold ${formData.distance === opt.value ? 'text-blue-700' : 'text-gray-700'}`}>
                        {opt.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Delivery: {opt.charge}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <FileText size={16} className="text-blue-600" /> Upload Documents
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                  />
                  <label
                    htmlFor="file-upload"
                    className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer ${file ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50 group-hover:bg-gray-100'
                      }`}
                  >
                    <Upload size={32} className={`mb-3 ${file ? 'text-green-500' : 'text-gray-400'}`} />
                    <span className="font-bold text-gray-700">{file ? file.name : 'Click to upload or drag and drop'}</span>
                    <span className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</span>
                  </label>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
                  <AlertCircle size={18} /> {error}
                </div>
              )}

              <button
                disabled={loading}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing Order...
                  </>
                ) : (
                  <>Place Order</>
                )}
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <LucideIcon name="Info" size={18} className="text-orange-500" /> Important Notes
              </h3>
              <ul className="space-y-4">
                {[
                  'Orders received after 7 PM will be delivered next day.',
                  'Xerox charges are extra and will be calculated based on pages.',
                  'Confirm your order details when our team calls you.',
                  'Bulk orders (50+ pages) may qualify for additional discounts.',
                ].map((note, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900 rounded-3xl p-6 shadow-lg text-white">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-orange-400">
                <LucideIcon name="HelpCircle" size={18} /> Need Help?
              </h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                If you encounter any issues or have questions about delivery charges, contact us directly.
              </p>
              <div className="space-y-3">
                <a href="tel:7709709243" className="flex items-center gap-3 text-sm font-bold bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all">
                  <Phone size={18} className="text-orange-400" /> 7709709243
                </a>
                <a href="https://wa.me/917709709243" className="flex items-center gap-3 text-sm font-bold bg-green-500/20 hover:bg-green-500/30 p-3 rounded-xl transition-all text-green-400 border border-green-500/20">
                  <svg width="21" height="21" viewBox="0 0 32 32" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                  </svg> WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

