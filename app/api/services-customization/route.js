import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { unstable_cache, revalidateTag } from 'next/cache'

export async function GET() {
  try {
    const getCustomizations = unstable_cache(
      async () => await prisma.serviceCustomization.findMany(),
      ['api-customizations'],
      { tags: ['customizations'] }
    )
    const customizations = await getCustomizations()
    // Return as a map { serviceId -> customization }
    const map = {}
    for (const c of customizations) {
      map[c.serviceId] = c
    }
    return NextResponse.json(map)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch customizations' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const { serviceId, iconOverride, imageOverride, dummyImageOverride, imageAltText, dummyImageAltText } = await req.json()

    const result = await prisma.serviceCustomization.upsert({
      where: { serviceId },
      update: { iconOverride, imageOverride, dummyImageOverride, imageAltText, dummyImageAltText },
      create: { serviceId, iconOverride, imageOverride, dummyImageOverride, imageAltText, dummyImageAltText },
    })

    revalidateTag('customizations')
    return NextResponse.json(result)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to save customization' }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    const { serviceId } = await req.json()
    await prisma.serviceCustomization.delete({ where: { serviceId } })
    revalidateTag('customizations')
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete customization' }, { status: 500 })
  }
}
