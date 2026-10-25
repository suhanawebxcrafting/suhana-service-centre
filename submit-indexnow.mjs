// Script to submit all sitemap URLs to IndexNow (Bing, Yandex, etc.)
import { services } from './data/services.js'
import { locations } from './data/locations.js'

const HOST = 'suhanaservicecentre.in'
const INDEXNOW_KEY = 'f6c91a340b1e4fa8b29c54641e7d8901'
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`

async function main() {
  console.log('Generating URL list for IndexNow...')

  const urls = [
    `https://${HOST}/`,
    `https://${HOST}/services`,
    `https://${HOST}/xerox-delivery`,
    `https://${HOST}/about`,
    `https://${HOST}/contact`,
    `https://${HOST}/gallery`,
    `https://${HOST}/blog`,
    `https://${HOST}/sitemap`,
    `https://${HOST}/locations`,
  ]

  // Add all location hub pages
  for (const l of locations) {
    urls.push(`https://${HOST}/locations/${l.slug}`)
  }

  // Add all static service pages
  for (const s of services) {
    urls.push(`https://${HOST}/services/${s.slug}`)
  }

  // Add all xerox delivery location pages
  for (const l of locations) {
    urls.push(`https://${HOST}/xerox-delivery/${l.slug}`)
  }

  // Add location-service combinations
  for (const l of locations) {
    for (const s of services) {
      urls.push(`https://${HOST}/locations/${l.slug}/${s.slug}`)
    }
  }

  // Add published blogs from database
  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    const blogs = await prisma.blog.findMany({
      where: { isPublished: true },
      select: { slug: true },
    })
    for (const b of blogs) {
      urls.push(`https://${HOST}/blog/${b.slug}`)
    }
    await prisma.$disconnect()
  } catch (err) {
    console.warn('Could not fetch blogs for IndexNow:', err.message)
  }

  console.log(`Total URLs to submit: ${urls.length}`)

  // Submit in batches of 500
  const BATCH_SIZE = 500
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE)
    console.log(`Submitting batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} URLs)...`)

    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: KEY_LOCATION,
          urlList: batch,
        }),
      })

      console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1} status: ${res.status}`)
    } catch (err) {
      console.error(`Batch ${Math.floor(i / BATCH_SIZE) + 1} failed:`, err.message)
    }
  }

  console.log('IndexNow submission finished!')
}

main()
