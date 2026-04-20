'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  BarChart3, 
  Package, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  LogOut, 
  ExternalLink,
  Phone,
  Search,
  ChevronRight,
  Loader2
} from 'lucide-react'
import LucideIcon from '@/components/LucideIcon'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      fetchOrders()
    }
  }, [status])

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      setOrders(data)
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, newStatus) => {
    try {
      await fetch('/api/orders', {
        method: 'PATCH',
        body: JSON.stringify({ id, status: newStatus }),
      })
      fetchOrders()
    } catch (error) {
      alert('Failed to update status')
    }
  }

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'ALL' || order.status === filter
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.phoneNumber.includes(searchTerm)
    return matchesFilter && matchesSearch
  })

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'PENDING').length,
    processing: orders.filter(o => o.status === 'PROCESSING').length,
    completed: orders.filter(o => o.status === 'COMPLETED').length,
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-white hidden lg:flex flex-col">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <BarChart3 size={20} />
            </div>
            <div>
              <div className="text-sm font-black tracking-tight leading-none">SUHANA</div>
              <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">Admin Panel</div>
            </div>
          </div>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 bg-blue-600/20 text-blue-400 p-3 rounded-xl font-bold text-sm border border-blue-600/20">
              <Package size={18} /> Orders
            </button>
            <button 
              onClick={() => signOut()}
              className="w-full flex items-center gap-3 hover:bg-white/5 text-gray-400 hover:text-white p-3 rounded-xl font-bold text-sm transition-all"
            >
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Order Management</h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-0.5">Xerox Delivery Service</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text"
                placeholder="Search orders..."
                className="bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => signOut()}
              className="lg:hidden p-3 bg-red-50 text-red-600 rounded-xl"
            >
              <LogOut size={20} />
            </button>
          </div>
        </header>

        <div className="p-6 max-w-7xl mx-auto">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Orders', value: stats.total, icon: Package, color: 'bg-blue-600' },
              { label: 'Pending', value: stats.pending, icon: Clock, color: 'bg-orange-500' },
              { label: 'Processing', value: stats.processing, icon: Loader2, color: 'bg-indigo-500' },
              { label: 'Completed', value: stats.completed, icon: CheckCircle2, color: 'bg-green-500' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    <s.icon size={20} className={s.icon === Loader2 ? 'animate-spin' : ''} />
                  </div>
                  <div className="text-2xl font-black text-gray-900">{s.value}</div>
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
            {['ALL', 'PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-xs font-black tracking-widest transition-all whitespace-nowrap ${
                  filter === f 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Orders Table/List */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-50">
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Customer</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Contact</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery Details</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Document</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-400 font-medium">
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/30 transition-all group">
                        <td className="px-6 py-6">
                          <div className="font-bold text-gray-900">{order.customerName}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5">{new Date(order.createdAt).toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-6 font-medium text-gray-600">
                          <a href={`tel:${order.phoneNumber}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Phone size={14} className="text-gray-400" /> {order.phoneNumber}
                          </a>
                        </td>
                        <td className="px-6 py-6">
                          <div className="text-xs text-gray-600 max-w-[200px] truncate" title={order.address}>{order.address}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-black uppercase text-blue-600">Dist: {order.distance}km</span>
                            <span className={`text-[10px] font-black uppercase ${order.deliveryCharge > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                              Charge: ₹{order.deliveryCharge}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <a 
                            href={order.documentUrl} 
                            target="_blank" 
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all"
                          >
                            View File <ExternalLink size={12} />
                          </a>
                        </td>
                        <td className="px-6 py-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                            order.status === 'PENDING' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                            order.status === 'PROCESSING' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                            order.status === 'COMPLETED' ? 'bg-green-50 text-green-600 border-green-100' :
                            'bg-red-50 text-red-600 border-red-100'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-6">
                          <select
                            value={order.status}
                            onChange={(e) => updateStatus(order.id, e.target.value)}
                            className="bg-white border border-gray-200 rounded-lg text-xs font-bold p-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="PROCESSING">PROCESSING</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELLED">CANCELLED</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
