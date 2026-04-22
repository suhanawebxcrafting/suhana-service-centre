import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file || !file.name) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Ensure /public/images/blogs directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'images', 'blogs')
    await mkdir(uploadDir, { recursive: true })

    // Sanitize filename
    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`
    const filePath = path.join(uploadDir, safeName)

    await writeFile(filePath, buffer)

    return NextResponse.json({ url: `/images/blogs/${safeName}` })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
