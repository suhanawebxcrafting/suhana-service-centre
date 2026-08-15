const { PrismaClient } = require('@prisma/client')
const fs = require('fs')

const prisma = new PrismaClient()

async function main() {
  const contentPath = 'C:\\Users\\Administrator\\.gemini\\antigravity-ide\\brain\\7dbd40ef-2422-4bd6-8733-00c530fd72fc\\blog_pan_card.md';
  const content = fs.readFileSync(contentPath, 'utf8');

  try {
    const newBlog = await prisma.blog.upsert({
      where: { slug: "pan-card-apply-online-2025-new-pan-correction-e-pan-guide" },
      update: {
        title: "PAN Card Apply Online 2025 – New PAN, Correction & e-PAN Guide",
        excerpt: "Looking to apply for a new PAN card, e-PAN, or make corrections in 2025? Here is your ultimate guide, along with how Suhana Service Centre in Virar can help you get it done quickly.",
        content: content,
        category: "Government Documents",
        author: "Suhana Team",
        isPublished: true,
      },
      create: {
        title: "PAN Card Apply Online 2025 – New PAN, Correction & e-PAN Guide",
        slug: "pan-card-apply-online-2025-new-pan-correction-e-pan-guide",
        excerpt: "Looking to apply for a new PAN card, e-PAN, or make corrections in 2025? Here is your ultimate guide, along with how Suhana Service Centre in Virar can help you get it done quickly.",
        content: content,
        category: "Government Documents",
        author: "Suhana Team",
        isPublished: true,
      }
    })
    console.log("Successfully seeded blog:", newBlog.title)
  } catch (error) {
    console.error("Error seeding blog:", error.message)
  } finally {
    await prisma.$disconnect()
  }
}

main()
