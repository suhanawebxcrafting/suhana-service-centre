import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { prisma } from '@/lib/prisma'

const SITE_URL = 'https://suhanaservicecentre.in'

// Use current fresh timestamp to signal Googlebot to immediately recrawl and index all updated pages
const FRESH_UPDATE_DATE = '2026-10-25T00:00:00.000Z'

export default async function sitemap() {
  const now = new Date()

  // 1. Static Core Pages
  const corePages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/xerox-delivery`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: FRESH_UPDATE_DATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: FRESH_UPDATE_DATE,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/sitemap`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: FRESH_UPDATE_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: FRESH_UPDATE_DATE,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: FRESH_UPDATE_DATE,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // 2. 17 Regional Location Hub Pages (Top Local Pillar URLs)
  const locationHubPages = locations.map((location) => ({
    url: `${SITE_URL}/locations/${location.slug}`,
    lastModified: FRESH_UPDATE_DATE,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // 3. 17 Xerox Delivery Hub Pages
  const xeroxLocationPages = locations.map((location) => ({
    url: `${SITE_URL}/xerox-delivery/${location.slug}`,
    lastModified: FRESH_UPDATE_DATE,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // 4. 114 Main Service Detail Pages
  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: FRESH_UPDATE_DATE,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // 5. 1,938 Location-Specific Service Pages (Deep Local Target URLs)
  const locationServicePages = []
  for (const location of locations) {
    for (const service of services) {
      locationServicePages.push({
        url: `${SITE_URL}/locations/${location.slug}/${service.slug}`,
        lastModified: FRESH_UPDATE_DATE,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  }

  // 6. Dynamic Published Blog Pages from Database
  let blogPages = []
  try {
    const { unstable_cache } = require('next/cache')
    const getBlogsForSitemap = unstable_cache(
      async () => await prisma.blog.findMany({
        where: { isPublished: true },
        select: { slug: true, updatedAt: true }
      }),
      ['sitemap-blogs-v2'],
      { tags: ['blogs'] }
    )
    const blogs = await getBlogsForSitemap()
    blogPages = blogs.map((blog) => ({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: blog.updatedAt || now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  return [
    ...corePages,
    ...locationHubPages,
    ...xeroxLocationPages,
    ...servicePages,
    ...locationServicePages,
    ...blogPages,
  ]
}
