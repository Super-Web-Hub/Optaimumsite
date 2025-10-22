export const metadata = {
  title: 'Data Processing Agreement | OptAImum Consulting',
  description: 'Data Processing Agreement for OptAImum Consulting services.',
}

export default function DPAPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Data Processing Agreement</h1>
        <p className="mt-4 text-sm text-gray-600">Effective Date: January 1, 2024</p>

        <div className="mt-8 prose prose-gray max-w-none">
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">1. Definitions</h2>
            <p className="mt-4 text-gray-600">
              In this Data Processing Agreement ("DPA"):
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li><strong>"Controller"</strong> means the Client who determines the purposes and means of processing Personal Data</li>
              <li><strong>"Processor"</strong> means OptAImum Consulting, processing Personal Data on behalf of the Controller</li>
              <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person</li>
              <li><strong>"GDPR"</strong> means the EU General Data Protection Regulation</li>
              <li><strong>"Services"</strong> means the services provided by OptAImum under the main agreement</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">2. Processing of Personal Data</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">2.1 Processor Obligations</h3>
            <p className="mt-4 text-gray-600">OptAImum shall:</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Process Personal Data only on documented instructions from the Controller</li>
              <li>Ensure persons authorized to process Personal Data are subject to confidentiality</li>
              <li>Implement appropriate technical and organizational measures</li>
              <li>Assist the Controller in responding to data subject requests</li>
              <li>Delete or return all Personal Data after Services end</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">2.2 Purpose and Scope</h3>
            <p className="mt-4 text-gray-600">
              Personal Data will be processed for the purpose of providing AI consulting and implementation services as defined in the main agreement.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">3. Types of Personal Data</h2>
            <p className="mt-4 text-gray-600">
              The following types of Personal Data may be processed:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Contact information (names, emails, phone numbers)</li>
              <li>Business information (company, role, department)</li>
              <li>Usage data and analytics</li>
              <li>Communication records</li>
              <li>Any data provided for AI training or processing</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">4. Security Measures</h2>
            <p className="mt-4 text-gray-600">
              OptAImum implements the following security measures:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Incident response procedures</li>
              <li>Employee training on data protection</li>
              <li>Physical security of data centers</li>
              <li>Regular backups and disaster recovery</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">5. Sub-processors</h2>
            <p className="mt-4 text-gray-600">
              OptAImum may engage sub-processors for specific services:
            </p>
            <table className="mt-4 min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Sub-processor</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Service</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Location</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">Amazon Web Services</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Cloud Infrastructure</td>
                  <td className="px-4 py-2 text-sm text-gray-600">USA/EU</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">Google Cloud Platform</td>
                  <td className="px-4 py-2 text-sm text-gray-600">AI/ML Services</td>
                  <td className="px-4 py-2 text-sm text-gray-600">USA/EU</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">OpenAI</td>
                  <td className="px-4 py-2 text-sm text-gray-600">AI Processing</td>
                  <td className="px-4 py-2 text-sm text-gray-600">USA</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-gray-600">
              Controller agrees to the use of these sub-processors. OptAImum will notify Controller of any changes.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">6. International Transfers</h2>
            <p className="mt-4 text-gray-600">
              When transferring Personal Data internationally, OptAImum ensures:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Use of Standard Contractual Clauses where required</li>
              <li>Adequacy decisions are respected</li>
              <li>Appropriate safeguards are implemented</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">7. Data Subject Rights</h2>
            <p className="mt-4 text-gray-600">
              OptAImum will assist Controller in fulfilling obligations regarding:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Access requests</li>
              <li>Rectification</li>
              <li>Erasure ("right to be forgotten")</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
              <li>Restriction of processing</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">8. Data Breach Notification</h2>
            <p className="mt-4 text-gray-600">
              In the event of a Personal Data breach, OptAImum will:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Notify Controller without undue delay</li>
              <li>Provide details of the breach</li>
              <li>Describe likely consequences</li>
              <li>Propose mitigation measures</li>
              <li>Cooperate with investigation and remediation</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">9. Audit Rights</h2>
            <p className="mt-4 text-gray-600">
              Controller has the right to:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Request information about processing activities</li>
              <li>Conduct audits with reasonable notice</li>
              <li>Review security certifications and reports</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">10. Data Retention and Deletion</h2>
            <p className="mt-4 text-gray-600">
              Upon termination of Services:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Personal Data will be deleted or returned within 30 days</li>
              <li>Existing backups will be deleted according to retention schedule</li>
              <li>Certificate of deletion will be provided upon request</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">11. Liability</h2>
            <p className="mt-4 text-gray-600">
              Each party shall be liable for damages caused by processing that infringes applicable data protection laws.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">12. Term and Termination</h2>
            <p className="mt-4 text-gray-600">
              This DPA remains in effect for the duration of the main Services agreement and any processing of Personal Data thereunder.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">13. Contact Information</h2>
            <p className="mt-4 text-gray-600">
              For data protection inquiries:
            </p>
            <div className="mt-4 text-gray-600">
              <p>Data Protection Officer</p>
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