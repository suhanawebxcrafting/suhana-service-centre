import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'

export const metadata = {
  title: 'Suhana Service Centre - All Online Services Under One Roof | Virar',
  description: 'Suhana Service Centre in Virar offers Aadhaar, PAN, Passport, Certificates, Banking, Smart Cards, Printing & 70+ government and digital services. आपकी सेवा, हमारा संकल्प',
  keywords: 'Aadhaar card, PAN card, passport, voter ID, certificates, banking, smart card, Virar, Vasai, online services, government services',
  authors: [{ name: 'Suhana Service Centre' }],
  openGraph: {
    title: 'Suhana Service Centre - Virar',
    description: 'All Online Services Under One Roof in Virar',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
