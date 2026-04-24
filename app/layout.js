import './globals.css'
import Providers from '@/components/Providers'
import LayoutShell from '@/components/LayoutShell'

const SITE_URL = 'https://suhanaservicecentre.in'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Suhana Service centre — Aadhaar, PAN, Passport & 70+ Services in Virar',
    template: '%s | Suhana Service centre Virar',
  },
  description: 'Suhana Service centre in Virar (East) offers Aadhaar card, PAN card, Passport, Voter ID, Birth & Death Certificate, Income Certificate, Domicile, Caste Certificate, Banking, Xerox Delivery & 70+ government and digital services. Trusted by thousands in Virar, Vasai & Nalasopara. आपकी सेवा, हमारा संकल्प',
  keywords: [
    'service centre virar', 'aadhaar card virar', 'aadhaar update virar', 'pan card virar',
    'passport agent virar', 'voter id virar', 'birth certificate virar', 'death certificate virar',
    'income certificate virar', 'domicile certificate virar', 'caste certificate virar',
    'online services virar', 'government services virar', 'xerox delivery virar',
    'service centre virar east', 'suhana service centre', 'digital services virar',
    'certificate attestation virar', 'smart card virar', 'banking services virar',
    'service centre vasai', 'service centre nalasopara', 'all services under one roof virar',
    'CSC centre virar', 'Aaple Sarkar centre virar', 'document services virar',
  ],
  authors: [{ name: 'Suhana Service centre', url: SITE_URL }],
  creator: 'Suhana Service centre',
  publisher: 'Suhana Service centre',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Suhana Service centre — All Online Services Under One Roof | Virar',
    description: 'Trusted service centre in Virar East for Aadhaar, PAN, Passport, Certificates, Banking & 70+ government services. Fast, reliable & affordable. Call 7709709243.',
    url: SITE_URL,
    siteName: 'Suhana Service centre',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Suhana Service centre Virar Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhana Service centre — 70+ Services in Virar',
    description: 'Your trusted one-stop service centre in Virar for all government & digital services.',
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
      name: 'Suhana Service centre',
      alternateName: 'CSC Aaple Sarkar centre Virar',
      description: 'Trusted service centre in Virar East offering Aadhaar, PAN, Passport, Certificates, Banking & 70+ government and digital services under one roof.',
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
        { '@type': 'City', name: 'Virar' },
        { '@type': 'City', name: 'Vasai' },
        { '@type': 'City', name: 'Nalasopara' },
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
      name: 'Suhana Service centre',
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
