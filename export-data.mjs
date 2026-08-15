import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  console.log("Starting data export...");
  try {
    const data = {
      xeroxOrders: await prisma.xeroxOrder.findMany(),
      blogs: await prisma.blog.findMany(),
      testimonials: await prisma.testimonial.findMany(),
      contactMessages: await prisma.contactMessage.findMany(),
      serviceCustomizations: await prisma.serviceCustomization.findMany(),
      videoCards: await prisma.videoCard.findMany(),
      certificates: await prisma.certificate.findMany(),
      systemSettings: await prisma.systemSetting.findMany(),
    };
    
    fs.writeFileSync('database-export.json', JSON.stringify(data, null, 2));
    console.log("Data successfully exported to database-export.json!");
  } catch (error) {
    console.error("Export Failed. Error details:");
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
