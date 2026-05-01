'use client'

import { useRouter } from 'next/navigation'

export default function CategoryLink({ catId, children, className }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/services?cat=${catId}`)
  }

  return (
    <a href="/services" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
