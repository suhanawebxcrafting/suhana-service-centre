'use client'

import { useState } from 'react'
import { Upload, MapPin, Phone, User, FileText, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react'
import LucideIcon from '@/components/LucideIcon'

export default function StandalonePrintForm({ serviceName, locationName }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    distance: 3,
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
      if (!file) throw new Error('Please upload a document to proceed.')

      const submitData = new FormData()
      submitData.append('file', file)
      submitData.append('name', formData.name)
      submitData.append('phone', formData.phone)
      submitData.append('address', formData.address)
      submitData.append('distance', formData.distance)
      submitData.append('charge', deliveryCharge)
      submitData.append('serviceRequested', serviceName) 
      submitData.append('location', locationName)

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
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100 max-w-3xl mx-auto my-8">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
          <CheckCircle2 className="text-green-500 w-12 h-12 relative z-10" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-3">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Your request for <strong className="text-gray-900">{serviceName}</strong> has been received.<br/> Our team will contact you shortly to confirm the delivery in <strong>{locationName}</strong>.
        </p>
        <button
          onClick={() => { setSuccess(false); setFile(null); }}
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-gray-900/20"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden relative my-10">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400"></div>
      
      <div className="p-7 md:p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-1.5 flex items-center gap-2">
            <Sparkles className="text-orange-500" size={24} /> Fast Track Order
          </h2>
          <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
            Upload your documents directly to order <strong className="text-gray-900 font-extrabold">{serviceName}</strong> in <strong className="text-gray-900 font-extrabold">{locationName}</strong>.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Left Column: Form Details */}
            <div className="lg:col-span-3 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      required
                      type="text"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none font-medium text-gray-800 placeholder:text-gray-400"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone size={16} className="text-gray-400" />
                    </div>
                    <input
                      required
                      type="tel"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none font-medium text-gray-800 placeholder:text-gray-400"
                      placeholder="99999 99999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                   Delivery Address in {locationName}
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MapPin size={16} className="text-gray-400" />
                  </div>
                  <textarea
                    required
                    rows={2}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none resize-none font-medium text-gray-800 placeholder:text-gray-400"
                    placeholder="Street, Building, Landmark, Pincode"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">Approx. Distance from our center</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Within 4 km', value: 3, charge: 'Free Delivery', icon: 'Bike' },
                    { label: 'Beyond 4 km', value: 5, charge: '₹50 - ₹100', icon: 'Truck' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, distance: opt.value })}
                      className={`relative p-4 rounded-2xl border-2 transition-all text-left flex items-start gap-3 overflow-hidden group ${
                        formData.distance === opt.value 
                        ? 'border-blue-600 bg-blue-50/50 shadow-sm' 
                        : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {formData.distance === opt.value && (
                        <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 rounded-bl-2xl flex items-center justify-center">
                          <CheckCircle2 size={16} className="text-white" />
                        </div>
                      )}
                      <div className={`p-2 rounded-xl flex-shrink-0 transition-colors ${
                        formData.distance === opt.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                      }`}>
                        <LucideIcon name={opt.icon} size={20} />
                      </div>
                      <div>
                        <div className={`font-bold text-sm mb-0.5 ${formData.distance === opt.value ? 'text-blue-900' : 'text-gray-700'}`}>
                          {opt.label}
                        </div>
                        <div className={`text-xs font-semibold ${formData.distance === opt.value ? 'text-blue-600' : 'text-gray-500'}`}>
                          {opt.charge}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Upload & Submit */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-200 p-1">
                <div className="relative h-full min-h-[200px]">
                  <input type="file" className="hidden" id="file-upload-standalone" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileUpload} />
                  <label 
                    htmlFor="file-upload-standalone" 
                    className={`absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed rounded-xl transition-all cursor-pointer ${
                      file 
                      ? 'border-green-400 bg-green-50/80' 
                      : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/50'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors ${
                      file ? 'bg-green-200 text-green-700' : 'bg-white text-gray-400 shadow-sm'
                    }`}>
                      <Upload size={28} className={file ? '' : 'group-hover:text-blue-500 transition-colors'} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm text-center px-4">
                      {file ? file.name : 'Click to select your files'}
                    </span>
                    <span className="text-xs font-medium text-gray-500 mt-2">PDF, JPG, PNG (Max 10MB)</span>
                  </label>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-semibold border border-red-100">
                  <AlertCircle size={18} /> {error}
                </div>
              )}

              <button 
                disabled={loading} 
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black py-4 px-6 rounded-2xl shadow-[0_8px_20px_rgb(79,70,229,0.3)] transition-all flex items-center justify-center gap-3 text-[16px] tracking-wide ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-[0_10px_25px_rgb(79,70,229,0.4)]'
                }`}
              >
                {loading ? <><Loader2 className="animate-spin" /> Processing...</> : <>Place Order Now</>}
              </button>
              
              <p className="text-center text-xs font-semibold text-gray-400">
                Secured via Suhana Service Center
              </p>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
