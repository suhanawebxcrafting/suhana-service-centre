// lib/email-templates.js

const BRAND_COLOR = "#ea580c"; // Orange-600
const SECONDARY_COLOR = "#1e3a8a"; // Blue-900

const baseTemplate = (title, content) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
  .header { background-color: #ffffff; border-bottom: 4px solid ${BRAND_COLOR}; padding: 30px 40px; text-align: center; }
  .header img { max-height: 60px; margin-bottom: 15px; }
  .header h1 { color: ${SECONDARY_COLOR}; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; }
  .header p { color: #64748b; margin: 5px 0 0 0; font-size: 13px; }
  .content { padding: 40px; color: #334155; line-height: 1.6; }
  .footer { background-color: #f8fafc; padding: 25px 20px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0; }
  .footer a { color: ${BRAND_COLOR}; text-decoration: none; font-weight: 600; margin: 0 10px; }
  .btn { display: inline-block; background-color: ${BRAND_COLOR}; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; margin-top: 20px; }
  .info-box { background-color: #f8fafc; border-left: 4px solid ${BRAND_COLOR}; padding: 15px 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; font-weight: bold; margin-bottom: 2px; }
  .value { font-size: 15px; color: #0f172a; font-weight: 600; margin-bottom: 12px; }
  .divider { height: 1px; background-color: #e2e8f0; margin: 25px 0; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://suhanaservicecentre.in/logo.png" alt="Suhana Service Centre Logo" />
      <h1>Suhana Service Centre</h1>
      <p>Print & Xerox Delivery • Virar East</p>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <div style="margin-bottom: 15px;">
        <a href="https://suhanaservicecentre.in">Visit Website</a> | 
        <a href="https://suhanaservicecentre.in/contact">Contact Us</a> | 
        <a href="https://suhanaservicecentre.in/services">Our Services</a>
      </div>
      &copy; ${new Date().getFullYear()} Suhana Service Centre. All rights reserved.<br>
      Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305<br>
      Contact: +91 77097 09243
    </div>
  </div>
</body>
</html>
`;

export const getContactAdminTemplate = (data) => {
  const content = `
    <h2 style="color: ${SECONDARY_COLOR}; margin-top: 0;">New Inquiry Received</h2>
    <p>A new message has been submitted through the contact form.</p>
    
    <div class="info-box">
      <div class="label">Name</div>
      <div class="value">${data.name}</div>
      
      <div class="label">Email Address</div>
      <div class="value"><a href="mailto:${data.email}" style="color: ${BRAND_COLOR};">${data.email}</a></div>
      
      <div class="label">Phone Number</div>
      <div class="value">${data.phone || 'N/A'}</div>
      
      <div class="label">Service Category</div>
      <div class="value">${data.service || 'General Inquiry'}</div>
    </div>
    
    <div class="label">Message</div>
    <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; font-style: italic; color: #475569;">
      "${data.message || 'No message provided.'}"
    </div>
  `;
  return baseTemplate('New Contact Inquiry', content);
};

export const getContactCustomerTemplate = (data) => {
  const content = `
    <h2 style="color: ${SECONDARY_COLOR}; margin-top: 0;">Hello ${data.name},</h2>
    <p>Thank you for reaching out to <strong>Suhana Service Centre</strong>. We have successfully received your inquiry regarding <strong>${data.service || 'our services'}</strong>.</p>
    
    <div class="divider"></div>
    
    <h3 style="color: ${SECONDARY_COLOR}; font-size: 16px;">What happens next?</h3>
    <p>Our team is reviewing your message and will get back to you shortly, usually within a few working hours.</p>
    
    <div style="background: #fff7ed; border: 1px solid #fed7aa; padding: 15px; border-radius: 8px; margin-top: 25px;">
      <p style="margin: 0; color: #9a3412; font-size: 14px;"><strong>Need immediate assistance?</strong><br> Feel free to call or WhatsApp us directly at <a href="https://wa.me/917709709243" style="color: ${BRAND_COLOR}; text-decoration: none; font-weight: bold;">+91 77097 09243</a>.</p>
    </div>
  `;
  return baseTemplate('Thank you for contacting us', content);
};

export const getXeroxAdminTemplate = (data) => {
  const content = `
    <h2 style="color: ${SECONDARY_COLOR}; margin-top: 0;">New Delivery Order 🎉</h2>
    <p>A new print/xerox delivery order has been placed.</p>
    
    <div class="info-box">
      <div class="label">Customer Name</div>
      <div class="value">${data.name}</div>
      
      <div class="label">Phone Number</div>
      <div class="value">${data.phone}</div>
      
      <div class="label">Email Address</div>
      <div class="value">${data.email || 'N/A'}</div>
      
      <div class="label">Service Requested</div>
      <div class="value" style="color: ${BRAND_COLOR};">${data.serviceRequested}</div>
      
      <div class="label">Delivery Address</div>
      <div class="value">${data.address}</div>
      
      <div class="label">Distance & Charge</div>
      <div class="value">${data.distance} km (₹${data.deliveryCharge})</div>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      ${(data.documentUrls || []).map((url, index) => `
        <a href="${url}" class="btn" style="margin: 5px;">View Document ${index + 1}</a>
      `).join('')}
      ${data.documentUrl ? `<a href="${data.documentUrl}" class="btn" style="margin: 5px;">View Document</a>` : ''}
    </div>
  `;
  return baseTemplate('New Xerox Order', content);
};

export const getXeroxCustomerTemplate = (data) => {
  const content = `
    <h2 style="color: ${SECONDARY_COLOR}; margin-top: 0;">Order Confirmed, ${data.name}!</h2>
    <p>Thank you for choosing <strong>Suhana Service Centre</strong>. We have successfully received your document for <strong>${data.serviceRequested}</strong>.</p>
    
    <div class="info-box">
      <div class="label">Order Details</div>
      <div class="value">Service: ${data.serviceRequested}</div>
      <div class="label">Delivery Location</div>
      <div class="value">${data.address}</div>
    </div>
    
    <div class="divider"></div>
    
    <h3 style="color: ${SECONDARY_COLOR}; font-size: 16px;">What happens next?</h3>
    <ol style="padding-left: 20px; margin-bottom: 25px;">
      <li style="margin-bottom: 10px;">Our team will review your uploaded document.</li>
      <li style="margin-bottom: 10px;">We will call you at <strong>${data.phone}</strong> to confirm the exact pricing based on pages/color.</li>
      <li style="margin-bottom: 10px;">Once confirmed, we will print and deliver it to your doorstep!</li>
    </ol>
    
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 8px;">
      <p style="margin: 0; color: #166534; font-size: 14px;"><strong>Need to make changes?</strong><br> If you uploaded the wrong file or need to add instructions, quickly WhatsApp us at <a href="https://wa.me/917709709243" style="color: #15803d; text-decoration: none; font-weight: bold;">+91 77097 09243</a>.</p>
    </div>
  `;
  return baseTemplate('Your Order is Confirmed', content);
};
