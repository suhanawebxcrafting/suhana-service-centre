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

  const deliveryCharge = formData.distance > 4 ? 30 : 0

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
            Upload your documents and get them xeroxed and delivered to your doorstep. Free delivery within 4km!
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
                    { label: 'Beyond 4 km', value: 5, charge: '₹30' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, distance: opt.value })}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        formData.distance === opt.value
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
                    className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer ${
                      file ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50 group-hover:bg-gray-100'
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
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing Order...
                  </>
                ) : (
                  <>Place Order (Total: ₹{deliveryCharge})</>
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
                <a href="tel:9619439243" className="flex items-center gap-3 text-sm font-bold bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all">
                  <Phone size={18} className="text-orange-400" /> 9619439243
                </a>
                <a href="https://wa.me/919619439243" className="flex items-center gap-3 text-sm font-bold bg-green-500/20 hover:bg-green-500/30 p-3 rounded-xl transition-all text-green-400 border border-green-500/20">
                  <LucideIcon name="MessageCircle" size={18} /> WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
