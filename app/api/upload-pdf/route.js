import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload the PDF as an image resource type so Cloudinary processes it
    // Cloudinary can convert PDF pages to images automatically
    const uploadResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { 
          resource_type: 'image', 
          folder: 'suhana/certificates',
          format: 'jpg',
          pages: true  // Enable multi-page processing
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    // The first page image URL
    const baseUrl = uploadResponse.secure_url;
    const totalPages = uploadResponse.pages || 1;

    // Generate URLs for all pages
    // Cloudinary pattern: insert /pg_X before the file extension
    const pageUrls = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1) {
        pageUrls.push(baseUrl);
      } else {
        // Insert page transformation into URL
        // Pattern: .../upload/pg_X/...
        const url = baseUrl.replace('/upload/', `/upload/pg_${i}/`);
        pageUrls.push(url);
      }
    }

    return NextResponse.json({ 
      url: baseUrl,
      fileUrl: uploadResponse.secure_url,
      pageUrls: pageUrls,
      totalPages: totalPages,
      publicId: uploadResponse.public_id
    });
  } catch (error) {
    console.error('PDF upload error:', error);
    return NextResponse.json({ error: error.message || 'PDF upload failed' }, { status: 500 });
  }
}
