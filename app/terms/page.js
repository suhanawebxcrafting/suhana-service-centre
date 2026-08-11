import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Suhana Service Center',
  description: 'Terms and Conditions of Suhana Service Center Virar for using our online form filling, printing, and xerox delivery services.',
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using the services of Suhana Service Center.
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">1. Acceptance of Terms</h2>
            <p className="mb-3">By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">2. Description of Service</h2>
            <p className="mb-3">Suhana Service Center provides various digital and online services including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Online form filling (PAN, Aadhaar, Passport, etc.)</li>
              <li>Document printing and Xerox services</li>
              <li>Money transfer and bill payment services</li>
              <li>Other government and non-government digital services</li>
            </ul>
            <p className="mt-3">We act as a facilitator to help you apply for these services. We are not a government entity.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">3. Accuracy of Information</h2>
            <p className="mb-3">You are entirely responsible for the accuracy of the details and documents provided to us for form filling or application processing. We are not liable for rejections, delays, or issues arising due to incorrect information, typos, or invalid documents provided by you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">4. Payment and Refund Policy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fees charged include government application fees (where applicable) and our service charges.</li>
              <li>Once an application is successfully submitted to the respective authority or a print job is completed, our service charges are non-refundable.</li>
              <li>Refunds will only be considered if we are unable to process your request due to technical issues on our end before the final submission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">5. Delivery and Turnaround Time</h2>
            <p className="mb-3">While we strive to process all applications and print jobs promptly, the final processing time for government applications depends on the respective authorities. Delivery times for physical documents (like Xerox delivery) are estimates and may vary based on location and availability.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">6. Modification of Terms</h2>
            <p className="mb-3">We reserve the right to change these conditions from time to time as we see fit and your continued use of the site will signify your acceptance of any adjustment to these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-orange-500 pl-4">7. Contact Information</h2>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us:</p>
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
