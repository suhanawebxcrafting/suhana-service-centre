import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .substring(0, 80)
    + '-' + Date.now().toString(36)
}

export async function POST(req) {
  try {
    // 1. Check Rate Limit (Max 5 per day)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const generatedCount = await prisma.blog.count({
      where: {
        author: 'Suhana AI',
        createdAt: {
          gte: today
        }
      }
    });

    if (generatedCount >= 5) {
      return NextResponse.json({
        error: 'Daily limit reached. You can only generate 5 AI blogs per day. Please try again tomorrow.'
      }, { status: 429 });
    }

    // 2. Setup OpenRouter API Key
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

    let jsonStr = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
    // Replace literal newlines with escaped newlines so JSON.parse doesn't break
    jsonStr = jsonStr.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
    // Sometimes it creates double-escaped newlines like \\\\n, let's just make it robust
    // Actually, a safer way to clean bad control characters:
    jsonStr = jsonStr.replace(/[\u0000-\u001F\u007F-\u009F]/g, function (c) {
      return '\\u' + ('000' + c.charCodeAt(0).toString(16)).slice(-4);
    });

    let blogData;
    try {
      blogData = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error('Failed to parse JSON. Raw AI response was:', responseText);
      throw new Error('AI returned invalid JSON format. Please try again.');
    }

    // 5. Save to Database as Draft
    const newBlog = await prisma.blog.create({
      data: {
        title: blogData.title,
        slug: generateSlug(blogData.title),
        excerpt: blogData.excerpt,
        content: blogData.content,
        category: blogData.category,
        author: 'Suhana AI',
        isPublished: false, // Save as draft
        scheduledAt: null,
      }
    });

    const { revalidateTag } = require('next/cache')
    revalidateTag('blogs')
    
    return NextResponse.json({
      success: true,
      message: 'AI Blog successfully generated and saved as draft.',
      blog: newBlog
    });

  } catch (error) {
    console.error('Error generating AI blog:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
