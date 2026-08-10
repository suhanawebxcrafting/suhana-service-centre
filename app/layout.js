import './globals.css'
import Providers from '@/components/Providers'
import LayoutShell from '@/components/LayoutShell'

const SITE_URL = 'https://suhanaservicecentre.in'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Suhana Service Center — 70+ Govt Services Virar | 🎁 10% OFF',
    template: '%s | Suhana Service Center',
  },
  description: 'Suhana Service Center Virar East — Aadhaar, PAN, Passport, Voter ID, Certificates & 70+ government services. 🎁 Get Flat 10% OFF on your first order. Call 7709709243.',
  keywords: [
    'service center virar', 'service centre virar', 'aadhaar card virar', 'aadhaar update virar', 'pan card virar',
    'passport agent virar', 'voter id virar', 'birth certificate virar', 'death certificate virar',
    'income certificate virar', 'domicile certificate virar', 'caste certificate virar',
    'online services virar', 'government services virar', 'xerox delivery virar',
    'service center virar east', 'suhana service center', 'suhana service centre', 'digital services virar',
    'certificate attestation virar', 'smart card virar', 'banking services virar',
    'service center vasai', 'service center nalasopara', 'all services under one roof virar',
    'CSC center virar', 'Aaple Sarkar center virar', 'document services virar',
  ],
  authors: [{ name: 'Suhana Service Center', url: SITE_URL }],
  creator: 'Suhana Service Center',
  publisher: 'Suhana Service Center',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Suhana Service Center — All Online Services Under One Roof | Virar',
    description: 'Trusted service center in Virar East for Aadhaar, PAN, Passport, Certificates, Banking & 70+ government services. Fast, reliable & affordable. Call 7709709243.',
    url: SITE_URL,
    siteName: 'Suhana Service Center',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Suhana Service Center Virar Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhana Service Center — 70+ Services in Virar',
    description: 'Your trusted one-stop service center in Virar for all government & digital services.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Replace with your actual Google Search Console verification code
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  // },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Suhana Service Center',
      alternateName: 'CSC Aaple Sarkar Center Virar',
      description: 'Trusted service center in Virar East offering Aadhaar, PAN, Passport, Certificates, Banking & 70+ government and digital services under one roof.',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      telephone: '+917709709243',
      email: 'suhanaservicec@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road',
        addressLocality: 'Virar East',
        addressRegion: 'Maharashtra',
        postalCode: '401305',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.4689641,
        longitude: 72.8584376,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Virar East' },
        { '@type': 'City', name: 'Virar West' },
        { '@type': 'City', name: 'Nalasopara East' },
        { '@type': 'City', name: 'Nalasopara West' },
        { '@type': 'City', name: 'Vasai East' },
        { '@type': 'City', name: 'Vasai West' },
        { '@type': 'City', name: 'Naigaon East' },
        { '@type': 'City', name: 'Naigaon West' },
      ],
      priceRange: '₹',
      sameAs: [
        'https://wa.me/917709709243',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Government & Digital Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aadhaar Card Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PAN Card Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Passport Assistance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Voter ID Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Certificate Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Banking Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Xerox & Printing' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Suhana Service Center',
      publisher: { '@id': `${SITE_URL}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/services?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-poppins">
        <Providers>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  )
}
