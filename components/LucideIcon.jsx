'use client'
import * as LucideIcons from 'lucide-react'

export default function LucideIcon({ name, size = 24, className = '', ...props }) {
  const Icon = LucideIcons[name]

  if (!Icon) {
    // Fallback Icon (Help Circle) if name is invalid
    const Fallback = LucideIcons.HelpCircle
    return <Fallback size={size} className={className} {...props} />
  }

  return <Icon size={size} className={className} {...props} />
}

