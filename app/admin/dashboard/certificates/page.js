'use client'

import { useState, useEffect } from 'react'
import { Loader2, Plus, Edit2, Trash2, Image as ImageIcon, FileText } from 'lucide-react'

export default function CertificatesDashboard() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingCert, setEditingCert] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const [form, setForm] = useState({ title: '', imageUrl: '', fileUrl: '', isActive: true, sortOrder: 0 })

  useEffect(() => {
    fetchCerts()
  }, [])

  const fetchCerts = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/certificates')
      const data = await res.json()
      setCerts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0]
    if (!file) return

    setUploadingImage(true)
    const fd = new FormData()
    fd.append('file', file)

    try {
      const endpoint = type === 'image' ? '/api/upload-image' : '/api/upload-video' // upload-video uses resource_type: auto/video
      const res = await fetch(endpoint, { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok) {
        if (type === 'image') setForm({ ...form, imageUrl: data.url })
        else setForm({ ...form, fileUrl: data.url })
      } else {
        alert(data.error || 'Upload failed')
      }
    } catch (error) {
      alert('Upload failed')
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const method = editingCert ? 'PUT' : 'POST'
      const url = editingCert ? `/api/certificates/${editingCert.id}` : '/api/certificates'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (res.ok) {
        setEditingCert(null)
        setForm({ title: '', imageUrl: '', fileUrl: '', isActive: true, sortOrder: 0 })
        fetchCerts()
      }
    } catch (error) {
      console.error(error)
      alert('Failed to save certificate')
    }
  }

  const editCert = (cert) => {
    setEditingCert(cert)
    setForm(cert)
  }

  const deleteCert = async (id) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return
    try {
      await fetch(`/api/certificates/${id}`, { method: 'DELETE' })
      fetchCerts()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <header className="bg-white border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight tracking-tight">Certificates & Awards</h1>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Manage your professional credentials</p>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left: Form */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-premium sticky top-28">
            <h2 className="text-lg font-black text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Plus size={20} />
              </div>
              {editingCert ? 'Edit Certificate' : 'New Certificate'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Certificate Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. ISO 9001:2015 Certified"
                  value={form.title} 
                  onChange={e => setForm({...form, title: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 block p-4 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Display Image (Cloudinary)</label>
                <div className="space-y-3">
                  {form.imageUrl && (
                    <div className="relative w-full h-32 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <img src={form.imageUrl} alt="preview" className="w-full h-full object-cover" />
                      <button type="button" onClick={() => setForm({...form, imageUrl: ''})} className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg">
                        <Trash2 size={12} />
                      </button>
                    </div>
                  )}
                  <label className="cursor-pointer flex items-center justify-center gap-3 bg-blue-50/50 border-2 border-dashed border-blue-100 rounded-2xl p-6 hover:bg-blue-50 transition-all group">
                    {uploadingImage ? <Loader2 size={20} className="animate-spin text-blue-500" /> : <ImageIcon size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />}
                    <span className="text-sm font-bold text-blue-600">{uploadingImage ? 'Uploading...' : 'Upload Image'}</span>
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Certificate File (PDF/Doc)</label>
                <div className="space-y-3">
                  {form.fileUrl && (
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
                      <FileText className="text-green-600" size={20} />
                      <span className="text-xs font-bold text-green-700 truncate flex-1">File Uploaded Successfully</span>
                      <button type="button" onClick={() => setForm({...form, fileUrl: ''})} className="text-red-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                  <label className="cursor-pointer flex items-center justify-center gap-3 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-5 hover:bg-gray-100 transition-all group">
                    <FileText size={20} className="text-gray-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-gray-600">Upload PDF / Document</span>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileUpload(e, 'file')} />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Order</label>
                  <input 
                    type="number" 
                    value={form.sortOrder} 
                    onChange={e => setForm({...form, sortOrder: parseInt(e.target.value)})}
                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 block p-4 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Visibility</label>
                  <label className="flex items-center cursor-pointer mt-2.5">
                    <input type="checkbox" className="sr-only peer" checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-bold text-gray-700">{form.isActive ? 'Active' : 'Hidden'}</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button 
                  type="submit" 
                  disabled={uploadingImage || !form.imageUrl}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                >
                  {editingCert ? 'Update Credential' : 'Save Credential'}
                </button>
                {editingCert && (
                  <button 
                    type="button" 
                    onClick={() => { setEditingCert(null); setForm({ title: '', imageUrl: '', fileUrl: '', isActive: true, sortOrder: 0 }) }}
                    className="w-full py-3 text-gray-500 font-bold hover:text-gray-700 transition-colors"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right: List */}
        <div className="flex-1">
          {loading ? (
            <div className="flex justify-center p-24">
              <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certs.map(cert => (
                <div key={cert.id} className="group bg-white rounded-[2rem] p-6 border border-gray-100 shadow-premium hover:shadow-premium-lg transition-all duration-500 flex flex-col relative overflow-hidden">
                  {/* Decorative background glow */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full blur-[80px] group-hover:bg-blue-100 transition-colors"></div>
                  
                  <div className="relative h-56 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-6 flex items-center justify-center">
                    <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                    {!cert.isActive && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-gray-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">Hidden from Public</span>
                      </div>
                    )}
                    {/* View File Link */}
                    {cert.fileUrl && (
                      <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 p-3 rounded-xl shadow-xl hover:bg-blue-600 hover:text-white transition-all scale-0 group-hover:scale-100">
                        <FileText size={20} />
                      </a>
                    )}
                  </div>
                  
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Credential #{cert.sortOrder}</span>
                      </div>
                      <h3 className="font-black text-gray-900 text-lg leading-tight line-clamp-2">{cert.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => editCert(cert)} className="p-3 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-100 rounded-xl transition-all shadow-sm">
                        <Edit2 size={18} />
                      </button>
                      <button onClick={() => deleteCert(cert.id)} className="p-3 bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-100 rounded-xl transition-all shadow-sm">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {certs.length === 0 && (
                <div className="col-span-full p-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                  <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300">
                    <ImageIcon size={40} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">No Certificates Yet</h3>
                  <p className="text-gray-400 font-bold max-w-xs mx-auto">Upload your first professional certificate or award to showcase them on the homepage.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
