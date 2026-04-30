const SITE_URL = 'https://suhanaservicecentre.in'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/services?*'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
