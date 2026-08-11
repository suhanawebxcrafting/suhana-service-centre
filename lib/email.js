import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendAdminNotification(subject, htmlBody) {
  if (!process.env.SMTP_EMAIL) {
    console.warn('SMTP_EMAIL not configured, skipping admin notification');
    return;
  }
  
  try {
    const info = await transporter.sendMail({
      from: `"Suhana Service Centre" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL, // Send to self (admin)
      subject: subject,
      html: htmlBody,
    });
    console.log('Admin notification sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    // Don't throw error to prevent breaking the main flow
  }
}

export async function sendCustomerReply(toEmail, subject, htmlBody) {
  if (!process.env.SMTP_EMAIL || !toEmail) {
    console.warn('SMTP_EMAIL or customer email not configured, skipping customer reply');
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"Suhana Service Centre" <${process.env.SMTP_EMAIL}>`,
      to: toEmail,
      subject: subject,
      html: htmlBody,
    });
    console.log('Customer reply sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending customer reply:', error);
    // Don't throw error to prevent breaking the main flow
  }
}
