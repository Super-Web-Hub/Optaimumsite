export const metadata = {
  title: 'Terms of Service | OptAImum Consulting',
  description: 'Terms of Service for OptAImum Consulting services and website usage.',
}

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-gray-600">Effective Date: January 1, 2024</p>

        <div className="mt-8 prose prose-gray max-w-none">
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">1. Agreement to Terms</h2>
            <p className="mt-4 text-gray-600">
              By accessing or using OptAImum Consulting's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">2. Services Description</h2>
            <p className="mt-4 text-gray-600">
              OptAImum Consulting provides AI consulting, development, and implementation services including:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>AI workflow automation</li>
              <li>Custom AI system development</li>
              <li>Data pipeline implementation</li>
              <li>AI integration services</li>
              <li>Consulting and advisory services</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">3. Service Agreements</h2>
            <p className="mt-4 text-gray-600">
              Specific services are governed by separate agreements:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Discovery Phase: Fixed-fee engagement with defined deliverables</li>
              <li>Pilot Phase: Scope-limited implementation with success metrics</li>
              <li>Scale Phase: Ongoing engagement with custom terms</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">4. Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">4.1 Client Property</h3>
            <p className="mt-4 text-gray-600">
              Clients retain ownership of their data, content, and pre-existing intellectual property.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">4.2 OptAImum Property</h3>
            <p className="mt-4 text-gray-600">
              OptAImum retains ownership of:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Pre-existing methodologies and frameworks</li>
              <li>Generic code libraries and tools</li>
              <li>Non-confidential learnings and improvements</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">4.3 Work Product</h3>
            <p className="mt-4 text-gray-600">
              Custom work product developed for clients becomes client property upon full payment.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">5. Payment Terms</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Discovery: 100% upfront payment</li>
              <li>Pilot: 50% upfront, 50% on completion</li>
              <li>Scale: Monthly in advance or as agreed</li>
              <li>Late payments subject to 1.5% monthly interest</li>
              <li>All fees are non-refundable except as specified</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">6. Confidentiality</h2>
            <p className="mt-4 text-gray-600">
              Both parties agree to maintain confidentiality of proprietary information. This obligation survives termination for 5 years.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">7. Warranties & Disclaimers</h2>
            <p className="mt-4 text-gray-600">
              Services are provided "as is" with no implied warranties. OptAImum warrants:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Services will be performed professionally</li>
              <li>Deliverables will substantially conform to specifications</li>
              <li>We have the right to provide the services</li>
            </ul>
            <p className="mt-4 text-gray-600">
              OptAImum does not guarantee specific business outcomes or ROI except as explicitly agreed in writing.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">8. Limitation of Liability</h2>
            <p className="mt-4 text-gray-600">
              OptAImum's total liability shall not exceed the fees paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">9. Indemnification</h2>
            <p className="mt-4 text-gray-600">
              Each party agrees to indemnify the other against claims arising from their breach of this agreement or violation of applicable laws.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">10. Termination</h2>
            <p className="mt-4 text-gray-600">
              Either party may terminate:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>For convenience with 30 days written notice</li>
              <li>Immediately for material breach</li>
              <li>Upon completion of services</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">11. Data Protection</h2>
            <p className="mt-4 text-gray-600">
              We comply with applicable data protection laws including GDPR and CCPA. See our Privacy Policy for details.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">12. Acceptable Use</h2>
            <p className="mt-4 text-gray-600">
              You agree not to use our services for:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Illegal or fraudulent purposes</li>
              <li>Violating intellectual property rights</li>
              <li>Distributing harmful content</li>
              <li>Attempting to breach security measures</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">13. Governing Law</h2>
            <p className="mt-4 text-gray-600">
              These terms are governed by the laws of Florida, USA. Disputes shall be resolved through binding arbitration in Miami, Florida.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">14. Amendments</h2>
            <p className="mt-4 text-gray-600">
              We may update these terms periodically. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">15. Contact Information</h2>
            <div className="mt-4 text-gray-600">
              <p>OptAImum Consulting</p>
              <p>Email: optaimum@gmail.com</p>
              <p>Phone: (202) 320-1890</p>
              <p>Address: 1100 S Miami Ave, Miami, FL 33130</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}