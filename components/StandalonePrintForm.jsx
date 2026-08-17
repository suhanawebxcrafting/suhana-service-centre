'use client'

import { useState } from 'react'
import { Upload, MapPin, Phone, User, FileText, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react'
import LucideIcon from '@/components/LucideIcon'

export default function StandalonePrintForm({ serviceName, locationName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    distance: 3,
    serviceNeeded: serviceName || 'General Print & Copy',
  })
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const deliveryCharge = formData.distance > 4 ? 50 : 0

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files)
    if (selectedFiles.length > 0) {
      const validFiles = selectedFiles.filter(f => f.size <= 10 * 1024 * 1024)
      if (validFiles.length !== selectedFiles.length) {
        setError('Some files were ignored because they exceed 10MB limit')
      } else {
        setError('')
      }
      setFiles(prev => [...prev, ...validFiles])
    }
  }

  const removeFile = (indexToRemove) => {
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (formData.name.trim().length < 2) throw new Error('Please enter a valid full name (minimum 2 characters)')
      
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
         throw new Error('Please enter a valid 10-digit Indian mobile number')
      }

      if (formData.address.trim().length < 10) throw new Error('Please enter a detailed delivery address (minimum 10 characters)')

      if (files.length === 0) throw new Error('Please upload at least one document')

      const submitData = new FormData()
      files.forEach(f => submitData.append('files', f))
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('address', formData.address)
      submitData.append('distance', formData.distance)
      submitData.append('charge', deliveryCharge)
      submitData.append('serviceRequested', formData.serviceNeeded) 
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
    <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden relative my-10 max-w-3xl mx-auto">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400"></div>
      
      <div className="p-6 md:p-8 md:pb-2 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <Sparkles className="text-orange-500" size={24} /> Fast Track Order
          </h2>
          <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
            Upload your documents directly to order <strong className="text-gray-900 font-extrabold">{serviceName}</strong> in <strong className="text-gray-900 font-extrabold">{locationName}</strong>.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 pt-4 md:pt-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <User size={16} className="text-blue-600" /> Full Name <span className="text-red-500 ml-1">*</span>
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
                <Phone size={16} className="text-blue-600" /> Phone Number <span className="text-red-500 ml-1">*</span>
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
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address (for order confirmation) <span className="text-red-500 ml-1">*</span></label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              <option value="Color Printing">Color Printing</option>
              <option value="Black & White Printing">Black & White Printing</option>
              <option value="Blackbook Printing">Blackbook Printing</option>
              <option value="Jumbo Xerox">Jumbo Xerox</option>
              <option value="Visiting Card">Visiting Card</option>
              <option value="All Size Scanning">All Size Scanning</option>
              <option value="Smart Card">Smart Card</option>
              <option value="Letterhead Print">Letterhead Print</option>
              <option value="Passport Photos">Passport Photos</option>
              <option value="Project Printing">Project Printing</option>
              <option value="Billbook Print">Billbook Print</option>
              <option value="Cartridge Refilling">Cartridge Refilling</option>
              <option value="Computer Accessories">Computer Accessories</option>
              <option value="Custom Rubber Stamps">Custom Rubber Stamps</option>
              <option value="Stationery Products">Stationery Products</option>
              <option value="Spiral Binding">Spiral Binding</option>
              <option value="Lamination">Lamination</option>
              <option value="Xerox / Photocopy">Xerox / Photocopy</option>
              <option value="Sticker & Label Printing">Sticker & Label Printing</option>
              <option value="Cartridge Refill & Ink">Cartridge Refill & Ink</option>
              <option value="Aadhaar & PAN Card Print">Aadhaar & PAN Card Print</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" /> Delivery Address <span className="text-red-500 ml-1">*</span>
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
              <FileText size={16} className="text-blue-600" /> Upload Documents <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="relative group">
              <input type="file" multiple className="hidden" id="file-upload-standalone" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileUpload} />
              <label htmlFor="file-upload-standalone" className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-6 transition-all cursor-pointer ${files.length > 0 ? 'border-blue-400 bg-blue-50' : 'border-gray-300 bg-gray-50 group-hover:bg-gray-100 group-hover:border-blue-400'}`}>
                <Upload size={24} className={`mb-2 ${files.length > 0 ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500 transition-colors'}`} />
                <span className="font-bold text-gray-700 text-sm text-center">Click to add files or drag and drop</span>
                <span className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</span>
              </label>
            </div>
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center justify-between bg-white border border-gray-100 shadow-sm p-3 rounded-xl">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText size={14} />
                      </div>
                      <span className="text-sm font-bold text-gray-700 truncate">{f.name}</span>
                    </div>
                    <button type="button" onClick={() => removeFile(i)} className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors flex-shrink-0">
                      <LucideIcon name="X" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
      </div>
    </div>
  )
}
