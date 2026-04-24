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
          // Do not specify format: 'jpg' here, otherwise it only saves the first page and discards the rest
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    const totalPages = uploadResponse.pages || 1;
    
    // original secure_url might end in .pdf since we uploaded a pdf
    const originalUrl = uploadResponse.secure_url;
    // convert extension to .jpg so it renders as an image
    const baseImageUrl = originalUrl.replace(/\.pdf$/i, '.jpg');

    // Generate URLs for all pages
    const pageUrls = [];
    for (let i = 1; i <= totalPages; i++) {
      // Insert page transformation into URL
      // Pattern: .../upload/v1234... -> .../upload/pg_X/v1234...
      const url = baseImageUrl.replace('/upload/', `/upload/pg_${i}/`);
      pageUrls.push(url);
    }

    // Use the explicit first page URL for the cover image
    const firstPageUrl = pageUrls[0] || baseImageUrl;

    return NextResponse.json({ 
      url: firstPageUrl,
      fileUrl: originalUrl,
      pageUrls: pageUrls,
      totalPages: totalPages,
      publicId: uploadResponse.public_id
    });
  } catch (error) {
    console.error('PDF upload error:', error);
    return NextResponse.json({ error: error.message || 'PDF upload failed' }, { status: 500 });
  }
}
