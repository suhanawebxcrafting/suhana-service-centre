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
    const prompt = `You are an expert SEO copywriter for "Suhana Service center", a government and digital services provider located in Virar East (Maharashtra, India).
Write a comprehensive, unique, and highly SEO-optimized blog post for our website to attract local traffic. 

TARGET WORD COUNT: 1200 - 2000 words. This MUST be a long-form, detailed guide.

Topics could include: Aadhaar updates, PAN Card applications, Passport processes, Xerox/Printing services, Income/Domicile Certificates, MSME registration, or Voter ID. Pick one relevant topic and write an exhaustive guide.

STRUCTURE REQUIREMENTS:
1. Engaging Introduction: Hook the reader and explain the importance of the topic in Virar.
2. Detailed Overview: What is this service/document? Why is it needed?
3. Step-by-Step Process: A very detailed, numbered guide on how to apply or update.
4. Documents Checklist: A comprehensive list of every document required.
5. Common Mistakes to Avoid: Help the reader avoid rejections.
6. Why Visit Suhana Service center in Virar: Mention our expertise, fast service, and customer support.
7. FAQs Section: Include at least 5-8 frequently asked questions and detailed answers.
8. Conclusion & Call to Action: Final thoughts and an invitation to visit us.

IMPORTANT FORMATTING RULES:
- Use ## for main section headings (H2) — Use at least 6-8 H2 headings.
- Use ### for sub-section headings (H3) to break down complex parts.
- Use numbered lists (1. 2. 3.) for processes.
- Use bullet lists (- item) for document lists.
- Use > for important tips, warnings, or expert notes.
- Write professional yet easy-to-read paragraphs.
- DO NOT use ** around headings.
- DO NOT use excessive asterisks or decorative symbols.
- Naturally mention "Suhana Service center" and "Virar" throughout the text.
- Make it genuinely helpful and authoritative.

Return ONLY valid JSON with no markdown formatting around the JSON block. Do not include \`\`\`json. The JSON must match this structure exactly:
{
  "title": "A catchy, SEO-friendly title (e.g. The Ultimate Guide to Aadhaar Card Updates in Virar East 2025)",
  "excerpt": "A compelling 2-3 sentence meta description that includes keywords.",
  "content": "The full long-form blog post content in clean Markdown format following the structure above.",
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
