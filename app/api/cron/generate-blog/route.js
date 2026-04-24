import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    // 1. Authorization check
    const authHeader = req.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    
    // In production, require CRON_SECRET to match Authorization Bearer token
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Check if Auto-Blog is enabled in settings
    const setting = await prisma.systemSetting.findUnique({
      where: { key: 'ai_blog_auto_generate' }
    });
    
    if (setting && setting.value === 'false') {
      return NextResponse.json({ message: 'Auto-blog generation is currently disabled in settings.' }, { status: 200 });
    }

    // 3. Setup OpenRouter API Key
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'OPENROUTER_API_KEY is not set in environment variables.' }, { status: 500 });
    }

    // 3. Prompt for SEO Blog
    const prompt = `You are an expert SEO copywriter for "Suhana Service Centre", a government and digital services provider located in Virar East (Maharashtra, India).
Write a new, unique, and highly SEO-optimized blog post for our website to attract local traffic.
Topics could include: Aadhaar updates, PAN Card applications, Passport processes, Xerox/Printing services, Income/Domicile Certificates, MSME registration, or Voter ID. Pick one and write an informative guide.

IMPORTANT FORMATTING RULES:
- Use ## for main section headings (H2) — keep them short and descriptive
- Use ### for sub-section headings (H3) if needed
- Use numbered lists (1. 2. 3.) for step-by-step instructions
- Use bullet lists (- item) for feature lists or requirements
- Use > for important tips or notes
- Write engaging paragraphs of 2-3 sentences each
- DO NOT use ** around headings — just use ## or ###
- DO NOT use excessive asterisks or stars anywhere
- Start with an engaging introduction paragraph (no heading needed for the first paragraph)
- Naturally mention "Suhana Service Centre" and "Virar" 3-5 times throughout
- End with a clear call to action mentioning Suhana Service Centre
- Make it genuinely helpful, not generic or AI-sounding
- Target 600-900 words for good SEO value

Return ONLY valid JSON with no markdown formatting around the JSON block. Do not include \`\`\`json. The JSON must match this structure exactly:
{
  "title": "A catchy, SEO-friendly title targeting local searches (e.g. How to Update Aadhaar in Virar)",
  "excerpt": "A compelling 2-3 sentence meta description for SEO.",
  "content": "The full blog post content in clean Markdown format following the rules above.",
  "category": "One of: 'Aadhaar Services', 'Government Documents', 'Business Services', 'Printing & Xerox'"
}`;

    // 4. Call OpenRouter API using native fetch
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "openrouter/free",
        "messages": [{ "role": "user", "content": prompt }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API Error: ${errorText}`);
    }

    const data = await response.json();
    const responseText = data.choices[0]?.message?.content || '{}';
    
    // Parse the JSON out of the response
    const jsonStr = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
    const blogData = JSON.parse(jsonStr);

    // 5. Calculate Scheduled Date (Tomorrow at 8:00 AM)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(8, 0, 0, 0); // 8:00 AM

    // 6. Save to Database
    const newBlog = await prisma.blog.create({
      data: {
        title: blogData.title,
        slug: generateSlug(blogData.title),
        excerpt: blogData.excerpt,
        content: blogData.content,
        category: blogData.category,
        author: 'Suhana AI',
        isPublished: true,
        scheduledAt: tomorrow,
      }
    });

    return NextResponse.json({
      success: true,
      message: 'AI Blog successfully generated and scheduled',
      blog: newBlog
    });

  } catch (error) {
    console.error('Error generating AI blog:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
