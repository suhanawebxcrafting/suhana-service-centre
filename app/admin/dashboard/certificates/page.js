'use client'

import { useState, useEffect } from 'react'
import { Loader2, Plus, Edit2, Trash2, Image as ImageIcon, FileText, Upload, X } from 'lucide-react'

export default function CertificatesDashboard() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingCert, setEditingCert] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [uploadingPdf, setUploadingPdf] = useState(false)

  const [form, setForm] = useState({ title: '', imageUrl: '', fileUrl: '', pageImages: '', isActive: true, sortOrder: 0 })

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

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploadingImage(true)
    const fd = new FormData()
    fd.append('file', file)

    try {
      const res = await fetch('/api/upload-image', { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok) {
        setForm({ ...form, imageUrl: data.url })
      } else {
        alert(data.error || 'Image upload failed')
      }
    } catch (error) {
      alert('Image upload failed')
    } finally {
      setUploadingImage(false)
    }
  }

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Check if it's a PDF
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file')
      return
    }

    setUploadingPdf(true)
    const fd = new FormData()
    fd.append('file', file)

    try {
      const res = await fetch('/api/upload-pdf', { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok) {
        // Set the first page as the display image if no image is set
        const newForm = {
          ...form,
          fileUrl: data.fileUrl || data.url,
          pageImages: JSON.stringify(data.pageUrls || [data.url])
        }
        if (!form.imageUrl) {
          newForm.imageUrl = data.url
        }
        setForm(newForm)
      } else {
        alert(data.error || 'PDF upload failed')
      }
    } catch (error) {
      alert('PDF upload failed')
    } finally {
      setUploadingPdf(false)
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
        setForm({ title: '', imageUrl: '', fileUrl: '', pageImages: '', isActive: true, sortOrder: 0 })
        fetchCerts()
      } else {
        const errData = await res.json()
        alert(errData.error || 'Failed to save certificate')
      }
    } catch (error) {
      console.error(error)
      alert('Failed to save certificate')
    }
  }

  const editCert = (cert) => {
    setEditingCert(cert)
    setForm({
      title: cert.title || '',
      imageUrl: cert.imageUrl || '',
      fileUrl: cert.fileUrl || '',
      pageImages: cert.pageImages || '',
      isActive: cert.isActive ?? true,
      sortOrder: cert.sortOrder || 0
    })
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

  const getPageCount = (cert) => {
    try {
      const pages = JSON.parse(cert.pageImages || '[]')
      return pages.length
    } catch {
      return 0
    }
  }

  return (
    <>
      <header className="bg-white border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Certificates & Awards</h1>
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

              {/* PDF Upload - Primary */}
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Upload Certificate (PDF)
                </label>
                <div className="space-y-3">
                  {form.fileUrl && (
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
                      <FileText className="text-green-600 flex-shrink-0" size={20} />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-green-700 block">PDF Uploaded Successfully</span>
                        {form.pageImages && (
                          <span className="text-[10px] font-semibold text-green-500">
                            {(() => { try { return JSON.parse(form.pageImages).length } catch { return 0 } })()} page(s) detected
                          </span>
                        )}
                      </div>
                      <button type="button" onClick={() => setForm({...form, fileUrl: '', pageImages: '', imageUrl: form.imageUrl === form.fileUrl ? '' : form.imageUrl})} className="text-red-500 hover:text-red-600 flex-shrink-0">
                        <X size={16} />
                      </button>
                    </div>
                  )}
                  <label className={`cursor-pointer flex items-center justify-center gap-3 border-2 border-dashed rounded-2xl p-6 hover:bg-blue-50 transition-all group ${uploadingPdf ? 'bg-blue-50/50 border-blue-200' : 'bg-gray-50/50 border-gray-200'}`}>
                    {uploadingPdf ? (
                      <>
                        <Loader2 size={20} className="animate-spin text-blue-500" />
                        <span className="text-sm font-bold text-blue-600">Processing PDF...</span>
                      </>
                    ) : (
                      <>
                        <Upload size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold text-blue-600">Upload PDF Certificate</span>
                      </>
                    )}
                    <input type="file" className="hidden" accept=".pdf,application/pdf" onChange={handlePdfUpload} disabled={uploadingPdf} />
                  </label>
                </div>
              </div>

              {/* Image Upload - Alternate */}
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Display Image (Optional Override)</label>
                <div className="space-y-3">
                  {form.imageUrl && (
                    <div className="relative w-full h-28 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <img src={form.imageUrl} alt="preview" className="w-full h-full object-cover" />
                      <button type="button" onClick={() => setForm({...form, imageUrl: ''})} className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg">
                        <Trash2 size={12} />
                      </button>
                    </div>
                  )}
                  <label className="cursor-pointer flex items-center justify-center gap-3 bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-2xl p-4 hover:bg-gray-100 transition-all group">
                    {uploadingImage ? <Loader2 size={18} className="animate-spin text-blue-500" /> : <ImageIcon size={18} className="text-gray-400 group-hover:scale-110 transition-transform" />}
                    <span className="text-xs font-bold text-gray-500">{uploadingImage ? 'Uploading...' : 'Upload Image Instead'}</span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
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
                  disabled={uploadingImage || uploadingPdf || !form.imageUrl}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                >
                  {editingCert ? 'Update Credential' : 'Save Credential'}
                </button>
                {editingCert && (
                  <button 
                    type="button" 
                    onClick={() => { setEditingCert(null); setForm({ title: '', imageUrl: '', fileUrl: '', pageImages: '', isActive: true, sortOrder: 0 }) }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {certs.map(cert => (
                <div key={cert.id} className="group bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative overflow-hidden">
                  <div className="relative h-40 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 mb-4 flex items-center justify-center">
                    <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500" />
                    {!cert.isActive && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-gray-900 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">Hidden</span>
                      </div>
                    )}
                    {getPageCount(cert) > 1 && (
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                        {getPageCount(cert)} pages
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">#{cert.sortOrder}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">{cert.title}</h3>
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <button onClick={() => editCert(cert)} className="p-2 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => deleteCert(cert.id)} className="p-2 bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {certs.length === 0 && (
                <div className="col-span-full p-16 text-center bg-white rounded-[2rem] border-2 border-dashed border-gray-100">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-300">
                    <ImageIcon size={32} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">No Certificates Yet</h3>
                  <p className="text-gray-400 font-bold max-w-xs mx-auto text-sm">Upload your first certificate or award to showcase on the homepage.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
