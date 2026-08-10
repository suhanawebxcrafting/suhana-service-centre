import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { prisma } from '@/lib/prisma'

const SITE_URL = 'https://suhanaservicecentre.in'

// Fixed date for truly static pages — update this when you actually modify them
const STATIC_LAST_MOD = '2026-04-30T00:00:00.000Z'

export const revalidate = 3600 // ISR: revalidate at most once per hour

export default async function sitemap() {
  // Static Service Pages from data/services.js
  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: STATIC_LAST_MOD,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Dynamic Location Service Pages
  const locationPages = []
  for (const location of locations) {
    for (const service of services) {
      locationPages.push({
        url: `${SITE_URL}/locations/${location.slug}/${service.slug}`,
        lastModified: STATIC_LAST_MOD,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  // Dynamic Xerox Location Pages
  const xeroxLocationPages = locations.map((location) => ({
    url: `${SITE_URL}/xerox-delivery/${location.slug}`,
    lastModified: STATIC_LAST_MOD,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Dynamic Blog Pages from Database
  let blogPages = []
  try {
    const blogs = await prisma.blog.findMany({
      where: { isPublished: true },
      select: { slug: true, updatedAt: true }
    })
    blogPages = blogs.map((blog) => ({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: blog.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/xerox-delivery`,
      lastModified: STATIC_LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...servicePages,
    ...locationPages,
    ...xeroxLocationPages,
    ...blogPages,
  ]
}

