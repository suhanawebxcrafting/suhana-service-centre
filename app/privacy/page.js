import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Suhana Service Center',
  description: 'Privacy Policy of Suhana Service Center Virar. We value your privacy and security when handling documents, forms, and digital services.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Your privacy is our priority. This document outlines how Suhana Service Center collects, uses, and protects your information.
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">1. Information We Collect</h2>
            <p className="mb-3">When you use our services (Aadhaar, PAN Card, Printing, Form Filling), we may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Details:</strong> Name, Email Address, Phone Number, Date of Birth.</li>
              <li><strong>Documents:</strong> Aadhaar Cards, PAN Cards, PDF files for printing, photos, and other government-issued documents sent via WhatsApp or uploaded.</li>
              <li><strong>Usage Data:</strong> Information about how you navigate and use our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">2. How We Use Your Information</h2>
            <p className="mb-3">The information we collect is strictly used to process your service requests. Specifically, we use it to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process your government form applications accurately.</li>
              <li>Print your documents (Xerox delivery).</li>
              <li>Communicate with you regarding the status of your order via WhatsApp or Phone.</li>
              <li>Improve our website and customer service experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">3. Data Security & Document Handling</h2>
            <p className="mb-3">We take document security extremely seriously, especially because we handle sensitive personal identification documents:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Permanent Storage:</strong> Once your printout is delivered or your online form application is fully processed, we delete your sensitive PDF documents and ID proofs from our active local systems.</li>
              <li><strong>Confidentiality:</strong> Your documents are never shared with third parties or used for marketing purposes.</li>
              <li><strong>WhatsApp Security:</strong> Documents sent to us via WhatsApp are protected by WhatsApp's End-to-End Encryption during transit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">4. Third-Party Links</h2>
            <p>Our website may contain links to official government websites (like UIDAI, NSDL, etc.) for your convenience. We are not responsible for the privacy practices of these external sites. Please review their respective privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">5. Cookies</h2>
            <p>Our website uses basic cookies to enhance user experience and analyze website traffic. By using our website, you consent to our use of cookies in accordance with standard web practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">6. Compliance with DPDP Act, 2023</h2>
            <p className="mb-3">We strictly adhere to the Digital Personal Data Protection (DPDP) Act, 2023 of India. In compliance with the law:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Consent:</strong> Your personal data is collected and processed only with your explicit consent for the specific purpose of providing our services.</li>
              <li><strong>Right to Erasure:</strong> You have the right to request the deletion of your personal data and documents from our records at any time.</li>
              <li><strong>Data Minimization:</strong> We only collect information that is strictly necessary for your document processing or printing requests.</li>
              <li><strong>Grievance Redressal:</strong> Any concerns regarding your data privacy can be directed to our contact email below, and we commit to resolving them promptly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">7. Changes to this Privacy Policy</h2>
            <p>We may update this privacy policy from time to time to reflect changes in our services or legal obligations. We encourage you to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or how your documents are handled, please contact us:</p>
            <div className="bg-gray-50 p-4 rounded-xl mt-4 border border-gray-100">
              <p className="mb-1"><strong>Suhana Service Center</strong></p>
              <p className="mb-1">Office No- 04, Raipada, Nr. Anand Gaushalla, Chandansar Road, Virar (E) - 401305</p>
              <p className="mb-1"><strong>Phone / WhatsApp:</strong> <a href="tel:7709709243" className="text-blue-600 font-bold hover:underline">7709709243</a></p>
              <p><strong>Email:</strong> <a href="mailto:suhanaservicec@gmail.com" className="text-blue-600 font-bold hover:underline">suhanaservicec@gmail.com</a></p>
            </div>
          </section>

        </div>

      </div>
    </main>
  )
}
