'use client'

import { useState, useEffect, useMemo } from 'react'
import { services } from '@/data/services'
import {
  Search, Save, RotateCcw, Image, Sparkles, CheckCircle2, X, ChevronDown, Loader2
} from 'lucide-react'

// ─── Lucide icon name list for the dropdown ───
const ICON_OPTIONS = [
  'Fingerprint', 'CreditCard', 'IdCard', 'Globe', 'Book', 'RefreshCw', 'ShieldCheck',
  'Landmark', 'FileText', 'ArrowLeftRight', 'Link', 'Shield', 'UserPlus', 'Baby', 'FileX',
  'Ring', 'Wallet', 'BadgeCheck', 'Home', 'Newspaper', 'FileSignature', 'ClipboardList',
  'GraduationCap', 'Briefcase', 'Ticket', 'Zap', 'Smartphone', 'Car', 'School', 'Edit3',
  'BarChart', 'Award', 'Printer', 'Copy', 'Scan', 'Image', 'Layers', 'Wrench', 'Phone',
  'Mail', 'Download', 'Upload', 'Star', 'Heart', 'Settings', 'Bell', 'Lock', 'Eye',
  'MapPin', 'Clock', 'Calendar', 'Users', 'MessageCircle', 'Flag', 'Activity',
  'HeartPulse', 'Hammer', 'HardHat', 'Factory', 'Receipt', 'Building2', 'SimCard',
  'Vote', 'ClipboardEdit', 'RefreshCcw', 'Bank', 'Cpu', 'Globe2', 'FileBadge', 'Contact',
  'NotepadText', 'PenLine', 'FileCheck', 'Stamp', 'HandCoins', 'Coins', 'Banknote',
]

// ─── Local service card images from /service-card-images/ ───
const SERVICE_CARD_IMAGES = [
  { id: 1, file: '1.jpeg' },
  { id: 2, file: '2.jpeg' },
  { id: 3, file: '3.jpeg' },
  { id: 4, file: '4.jpeg' },
  { id: 5, file: '5.jpeg' },
  { id: 6, file: '6.jpeg' },
  { id: 7, file: '7.jpeg' },
  { id: 8, file: '8.jpeg' },
  { id: 9, file: '9.jpeg' },
  { id: 10, file: '10.jpeg' },
  { id: 11, file: '11.jpg' },
  { id: 12, file: '12.jpeg' },
  { id: 13, file: '13.jpeg' },
  { id: 14, file: '14.jpeg' },
  { id: 15, file: '15.jpeg' },
  { id: 16, file: '16.jpeg' },
  { id: 17, file: '17.jpeg' },
  { id: 18, file: '18.jpeg' },
  { id: 19, file: '19.jpeg' },
  { id: 20, file: '20.jpeg' },
  { id: 21, file: '21.jpeg' },
  { id: 22, file: '22.jpeg' },
  { id: 23, file: '23.jpeg' },
  { id: 24, file: '24.jpg' },
  { id: 25, file: '25.png' },
  { id: 26, file: '26.webp' },
  { id: 27, file: '27.jpg' },
]

// ─── Local service icon SVGs from /service-icons/ ───
const SERVICE_ICON_SVGS = [
  { label: 'Aadhaar', file: 'Aadhaar_Logo.svg' },
  { label: 'Ayushman Bharat', file: 'Ayushman-Bharat-Color.svg' },
  { label: 'Digital India', file: 'Digital-India-Color.svg' },
  { label: 'GST Network', file: 'Goods-and-Service-Tax-Network-Color.svg' },
  { label: 'Govt. of India', file: 'Government_of_India_logo.svg' },
  { label: 'Income Tax Dept', file: 'Income-Tax-Department-Black.svg' },
  { label: 'CSC', file: 'Logo_of_Common_Service_centers.svg' },
  { label: 'NVSP', file: 'NVSP-Color.svg' },
  { label: 'RBI', file: 'ReserveBankOfIndia_idqucZxAGF_1.svg' },
  { label: 'Credit Card', file: 'credit-card.svg' },
  { label: 'MSME', file: 'msme-seeklogo.svg' },
]

export default function ServicesCustomizationPage() {
  const [customizations, setCustomizations] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(null) // serviceId being saved
  const [saved, setSaved] = useState(null)   // serviceId recently saved
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null) // which service panel is open
  const [localEdits, setLocalEdits] = useState({})  // { [serviceId]: { iconOverride, imageOverride, dummyImageOverride } }
  const [activeTab, setActiveTab] = useState({}) // { [serviceId]: 'icon' | 'image' }

  useEffect(() => {
    fetchCustomizations()
  }, [])

  const fetchCustomizations = async () => {
    try {
      const res = await fetch('/api/services-customization')
      const data = await res.json()
      setCustomizations(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const filteredServices = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return services.filter(s =>
      s.name.toLowerCase().includes(term) ||
      s.category.toLowerCase().includes(term) ||
      s.slug?.toLowerCase().includes(term)
    )
  }, [searchTerm])

  const getEdit = (serviceId) => localEdits[serviceId] || {}

  const updateEdit = (serviceId, key, value) => {
    setLocalEdits(prev => ({
      ...prev,
      [serviceId]: { ...prev[serviceId], [key]: value }
    }))
  }

  const handleSave = async (service) => {
    const id = service.id
    const current = customizations[id] || {}
    const edit = getEdit(id)
    const payload = {
      serviceId: id,
      iconOverride: edit.iconOverride ?? current.iconOverride ?? null,
      imageOverride: edit.imageOverride ?? current.imageOverride ?? null,
      dummyImageOverride: edit.dummyImageOverride ?? current.dummyImageOverride ?? null,
      imageAltText: edit.imageAltText ?? current.imageAltText ?? null,
      dummyImageAltText: edit.dummyImageAltText ?? current.dummyImageAltText ?? null,
    }

    setSaving(id)
    try {
      const res = await fetch('/api/services-customization', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setCustomizations(prev => ({ ...prev, [id]: data }))
      setLocalEdits(prev => { const n = { ...prev }; delete n[id]; return n })
      setSaved(id)
      setTimeout(() => setSaved(null), 2500)
    } catch (e) {
      alert('Failed to save')
    } finally {
      setSaving(null)
    }
  }

  const handleReset = async (service) => {
    if (!confirm('Reset customizations for this service?')) return
    const id = service.id
    try {
      await fetch('/api/services-customization', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serviceId: id }),
      })
      setCustomizations(prev => { const n = { ...prev }; delete n[id]; return n })
      setLocalEdits(prev => { const n = { ...prev }; delete n[id]; return n })
    } catch {
      alert('Failed to reset')
    }
  }

  const getEffective = (service) => {
    const c = customizations[service.id] || {}
    const e = getEdit(service.id)
    return {
      icon: e.iconOverride ?? c.iconOverride ?? service.icon ?? 'Wrench',
      image: e.imageOverride ?? c.imageOverride ?? service.image ?? null,
      dummy: e.dummyImageOverride ?? c.dummyImageOverride ?? service.dummyImage ?? null,
      imageAlt: e.imageAltText ?? c.imageAltText ?? null,
      dummyAlt: e.dummyImageAltText ?? c.dummyImageAltText ?? null,
    }
  }

  const hasUnsavedChanges = (serviceId) => Object.keys(localEdits[serviceId] || {}).length > 0
  const hasCustomization = (serviceId) => !!customizations[serviceId]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <Sparkles className="text-orange-500 w-5 h-5" /> Services Customization
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-0.5">
            Manage logos &amp; images for featured service cards
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Legend */}
        <div className="flex items-center gap-6 mb-6 text-xs text-gray-500 font-bold">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block"></span> Customized
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200 inline-block"></span> Default (from data file)
          </span>
          <span className="text-gray-400 font-medium normal-case">{filteredServices.length} services</span>
        </div>

        <div className="space-y-3">
          {filteredServices.map(service => {
            const effective = getEffective(service)
            const isOpen = editingId === service.id
            const unsaved = hasUnsavedChanges(service.id)
            const customized = hasCustomization(service.id)
            const tab = activeTab[service.id] || 'icon'

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border transition-all shadow-sm ${customized ? 'border-orange-200' : 'border-gray-100'} ${isOpen ? 'shadow-lg' : ''}`}
              >
                {/* Row summary */}
                <button
                  onClick={() => setEditingId(isOpen ? null : service.id)}
                  className="w-full flex items-center gap-4 p-4 text-left group"
                >
                  {/* Logo preview */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {effective.image ? (
                      <img src={effective.image} alt={service.name} className="w-full h-full object-contain p-1" />
                    ) : (
                      <span className="text-blue-600 text-xs font-black">{service.icon?.slice(0, 3)}</span>
                    )}
                  </div>

                  {/* Dummy image preview (small) */}
                  {effective.dummy && (
                    <div className="w-16 h-10 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                      <img src={effective.dummy} alt="card" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 text-sm leading-tight">{service.name}</div>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {service.category} · ID {service.id}
                      {customized && <span className="ml-2 text-orange-500">● Customized</span>}
                      {unsaved && <span className="ml-2 text-blue-500">● Unsaved changes</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {saved === service.id && (
                      <span className="flex items-center gap-1 text-green-600 text-xs font-bold">
                        <CheckCircle2 size={14} /> Saved!
                      </span>
                    )}
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Expanded editor */}
                {isOpen && (
                  <div className="border-t border-gray-50 p-5">
                    {/* Tab switcher */}
                    <div className="flex gap-2 mb-5">
                      {[
                        { id: 'icon', label: 'Logo / Icon' },
                        { id: 'card', label: 'Card Image' },
                      ].map(t => (
                        <button
                          key={t.id}
                          onClick={() => setActiveTab(prev => ({ ...prev, [service.id]: t.id }))}
                          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tab === t.id
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    {/* TAB: Logo / Icon */}
                    {tab === 'icon' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">
                            Lucide Icon Name <span className="text-gray-400 font-normal normal-case">(appears as icon badge on card)</span>
                          </label>
                          <div className="relative">
                            <select
                              value={getEdit(service.id).iconOverride ?? customizations[service.id]?.iconOverride ?? service.icon ?? ''}
                              onChange={e => updateEdit(service.id, 'iconOverride', e.target.value || null)}
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 appearance-none bg-white"
                            >
                              <option value="">— Default ({service.icon}) —</option>
                              {ICON_OPTIONS.map(icon => (
                                <option key={icon} value={icon}>{icon}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                          </div>
                          <p className="text-gray-400 text-[10px] mt-1">
                            Current icon: <strong>{getEdit(service.id).iconOverride ?? customizations[service.id]?.iconOverride ?? service.icon}</strong>
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">
                            Logo Image URL <span className="text-gray-400 font-normal normal-case">(shown instead of icon when set)</span>
                          </label>
                          <input
                            type="url"
                            placeholder="https://example.com/logo.png"
                            value={getEdit(service.id).imageOverride ?? customizations[service.id]?.imageOverride ?? service.image ?? ''}
                            onChange={e => updateEdit(service.id, 'imageOverride', e.target.value || null)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">
                            Logo Alt Text <span className="text-gray-400 font-normal normal-case">(for accessibility/SEO)</span>
                          </label>
                          <input
                            type="text"
                            placeholder={`e.g. Official logo of ${service.name}`}
                            value={getEdit(service.id).imageAltText ?? customizations[service.id]?.imageAltText ?? ''}
                            onChange={e => updateEdit(service.id, 'imageAltText', e.target.value || null)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
                          />
                        </div>

                        {/* Local service icon SVGs */}
                        <div>
                          <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">
                            Or choose from local service icons
                          </label>
                          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-[240px] overflow-y-auto p-1">
                            {SERVICE_ICON_SVGS.map(icon => {
                              const iconUrl = `/service-icons/${icon.file}`
                              const isSelected = (getEdit(service.id).imageOverride ?? customizations[service.id]?.imageOverride) === iconUrl
                              return (
                                <button
                                  key={icon.label}
                                  onClick={() => updateEdit(service.id, 'imageOverride', iconUrl)}
                                  title={icon.label}
                                  className={`flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition-all ${isSelected
                                      ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200'
                                      : 'border-gray-200 hover:border-blue-300 bg-white'
                                    }`}
                                >
                                  <div className="w-10 h-10 flex items-center justify-center">
                                    <img src={iconUrl} alt={icon.label} className="max-w-full max-h-full object-contain" />
                                  </div>
                                  <span className="text-[8px] font-bold text-gray-500 leading-tight text-center truncate w-full">{icon.label}</span>
                                  {isSelected && (
                                    <CheckCircle2 size={12} className="text-blue-600" />
                                  )}
                                </button>
                              )
                            })}
                            <button
                              onClick={() => updateEdit(service.id, 'imageOverride', null)}
                              className="flex flex-col items-center gap-1 p-2 rounded-xl border-2 border-dashed border-gray-300 text-gray-400 hover:border-red-400 hover:text-red-400 transition-all"
                              title="Clear logo"
                            >
                              <div className="w-10 h-10 flex items-center justify-center">
                                <X size={18} />
                              </div>
                              <span className="text-[8px] font-bold">Clear</span>
                            </button>
                          </div>
                        </div>

                        {/* Live preview */}
                        {(getEdit(service.id).imageOverride ?? customizations[service.id]?.imageOverride) && (
                          <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Logo Preview</p>
                            <div className="w-16 h-16 rounded-xl border border-gray-200 bg-white overflow-hidden">
                              <img
                                src={getEdit(service.id).imageOverride ?? customizations[service.id]?.imageOverride}
                                alt="preview"
                                className="w-full h-full object-contain p-1"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* TAB: Card Image */}
                    {tab === 'card' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">
                            Card (Dummy) Image URL <span className="text-gray-400 font-normal normal-case">(banner strip on the card)</span>
                          </label>
                          <input
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            value={getEdit(service.id).dummyImageOverride ?? customizations[service.id]?.dummyImageOverride ?? service.dummyImage ?? ''}
                            onChange={e => updateEdit(service.id, 'dummyImageOverride', e.target.value || null)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">
                            Card Image Alt Text <span className="text-gray-400 font-normal normal-case">(for accessibility/SEO)</span>
                          </label>
                          <input
                            type="text"
                            placeholder={`e.g. Visual illustration of ${service.name}`}
                            value={getEdit(service.id).dummyImageAltText ?? customizations[service.id]?.dummyImageAltText ?? ''}
                            onChange={e => updateEdit(service.id, 'dummyImageAltText', e.target.value || null)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
                          />
                        </div>

                        {/* Local service card images */}
                        <div>
                          <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">
                            Or choose from local card images
                          </label>
                          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 max-h-[320px] overflow-y-auto p-1">
                            {SERVICE_CARD_IMAGES.map(img => {
                              const imgUrl = `/service-card-images/${img.file}`
                              const isSelected = (getEdit(service.id).dummyImageOverride ?? customizations[service.id]?.dummyImageOverride) === imgUrl
                              return (
                                <button
                                  key={img.id}
                                  onClick={() => updateEdit(service.id, 'dummyImageOverride', imgUrl)}
                                  title={`Image ${img.id}`}
                                  className={`relative rounded-xl overflow-hidden border-2 transition-all h-20 ${isSelected
                                      ? 'border-blue-500 shadow-md ring-2 ring-blue-200'
                                      : 'border-gray-200 hover:border-blue-300'
                                    }`}
                                >
                                  <img src={imgUrl} alt={`Card image ${img.id}`} className="w-full h-full object-cover" />
                                  {isSelected && (
                                    <div className="absolute top-1 right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                      <CheckCircle2 size={12} />
                                    </div>
                                  )}
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[9px] font-bold text-center py-0.5">
                                    {img.id}
                                  </div>
                                </button>
                              )
                            })}
                            <button
                              onClick={() => updateEdit(service.id, 'dummyImageOverride', null)}
                              className="rounded-xl border-2 border-dashed border-gray-300 text-gray-400 hover:border-red-400 hover:text-red-400 transition-all flex items-center justify-center h-20 text-xs font-bold flex-col gap-1"
                            >
                              <X size={16} />
                              <span>Clear</span>
                            </button>
                          </div>
                        </div>

                        {/* Live preview */}
                        {(getEdit(service.id).dummyImageOverride ?? customizations[service.id]?.dummyImageOverride ?? service.dummyImage) && (
                          <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Card Image Preview</p>
                            <div className="h-28 rounded-xl overflow-hidden border border-gray-200">
                              <img
                                src={getEdit(service.id).dummyImageOverride ?? customizations[service.id]?.dummyImageOverride ?? service.dummyImage}
                                alt="preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-50">
                      <button
                        onClick={() => handleSave(service)}
                        disabled={saving === service.id}
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-black hover:bg-blue-700 transition-all disabled:opacity-60 shadow-sm"
                      >
                        {saving === service.id ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        Save Changes
                      </button>

                      {customized && (
                        <button
                          onClick={() => handleReset(service)}
                          className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-bold hover:bg-red-100 transition-all"
                        >
                          <RotateCcw size={14} /> Reset to Default
                        </button>
                      )}

                      {unsaved && (
                        <button
                          onClick={() => setLocalEdits(prev => { const n = { ...prev }; delete n[service.id]; return n })}
                          className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-500 rounded-xl text-sm font-bold hover:bg-gray-100 transition-all"
                        >
                          <X size={14} /> Discard
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Global Toast Popup */}
      {saved && (
        <div className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-fade-up">
          <CheckCircle2 size={24} />
          <div>
            <h4 className="font-bold text-sm">Successfully Saved!</h4>
            <p className="text-xs opacity-90">Your changes are now live on the website.</p>
          </div>
        </div>
      )}
    </>
  )
}
