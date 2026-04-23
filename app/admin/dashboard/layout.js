'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { 
  BarChart3, Package, FileText, MessageSquare, Mail, LogOut, Sparkles, Video
} from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status])

  if (status === 'loading' || status === 'unauthenticated') {
    return null;
  }

  const navLinks = [
    { name: 'Xerox Orders', path: '/admin/dashboard', icon: Package },
    { name: 'Services', path: '/admin/dashboard/services', icon: Sparkles },
    { name: 'Certificates', path: '/admin/dashboard/certificates', icon: FileText },
    { name: 'Blogs', path: '/admin/dashboard/blogs', icon: FileText },
    { name: 'Video Cards', path: '/admin/dashboard/videos', icon: Video },
    { name: 'Testimonials', path: '/admin/dashboard/testimonials', icon: MessageSquare },
    { name: 'Contact Messages', path: '/admin/dashboard/messages', icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-950 text-white hidden lg:flex flex-col justify-between h-screen sticky top-0">
        <div className="p-6">
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
            {navLinks.map(link => {
              const Icon = link.icon
              const isActive = pathname === link.path
              return (
                <Link key={link.path} href={link.path}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl font-bold text-sm transition-all border ${
                    isActive 
                      ? 'bg-blue-600/20 text-blue-300 border-blue-600/20' 
                      : 'text-gray-400 border-transparent hover:bg-white/5 hover:text-gray-200'
                  }`}>
                  <Icon size={18} /> {link.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="p-6">
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full flex items-center gap-3 hover:bg-red-500/10 text-red-400 p-3 rounded-xl font-bold text-sm transition-all border border-transparent hover:border-red-500/10"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
