export const metadata = {
  title: 'Cookie Policy | OptAImum Consulting',
  description: 'Cookie policy for OptAImum Consulting. Learn how we use cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Cookie Policy</h1>
        <p className="mt-4 text-sm text-gray-600">Effective Date: January 1, 2024</p>

        <div className="mt-8 prose prose-gray max-w-none">
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">1. What Are Cookies</h2>
            <p className="mt-4 text-gray-600">
              Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience and understand how you use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">2. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Essential Cookies</h3>
            <p className="mt-4 text-gray-600">Required for the website to function properly.</p>
            <table className="mt-4 min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Cookie</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Purpose</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Duration</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">session_id</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Maintains user session</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Session</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">csrf_token</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Security protection</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Session</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Analytics Cookies</h3>
            <p className="mt-4 text-gray-600">Help us understand how visitors interact with our website.</p>
            <table className="mt-4 min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Cookie</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Purpose</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Duration</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">_ga</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Google Analytics</td>
                  <td className="px-4 py-2 text-sm text-gray-600">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">_gid</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Google Analytics</td>
                  <td className="px-4 py-2 text-sm text-gray-600">24 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">ph_*</td>
                  <td className="px-4 py-2 text-sm text-gray-600">PostHog Analytics</td>
                  <td className="px-4 py-2 text-sm text-gray-600">1 year</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Marketing Cookies</h3>
            <p className="mt-4 text-gray-600">Used to track visitors across websites for marketing purposes.</p>
            <table className="mt-4 min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Cookie</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Purpose</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Duration</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">utm_*</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Campaign tracking</td>
                  <td className="px-4 py-2 text-sm text-gray-600">30 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-600">referrer</td>
                  <td className="px-4 py-2 text-sm text-gray-600">Referral source</td>
                  <td className="px-4 py-2 text-sm text-gray-600">30 days</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">3. Third-Party Cookies</h2>
            <p className="mt-4 text-gray-600">
              We use services that may set their own cookies:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Google Analytics - Website analytics</li>
              <li>PostHog - Product analytics</li>
              <li>Calendly - Appointment scheduling</li>
              <li>HubSpot - CRM and marketing</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">4. How to Control Cookies</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Browser Settings</h3>
            <p className="mt-4 text-gray-600">
              Most browsers allow you to control cookies through their settings:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Chrome: Settings → Privacy and security → Cookies</li>
              <li>Firefox: Settings → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy, search, and services → Cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Opt-Out Links</h3>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-optaimum-blue hover:underline">
                  Google Analytics Opt-out
                </a>
              </li>
              <li>
                <a href="https://www.aboutads.info/choices/" className="text-optaimum-blue hover:underline">
                  Digital Advertising Alliance Opt-out
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">5. Impact of Disabling Cookies</h2>
            <p className="mt-4 text-gray-600">
              Disabling cookies may affect your experience:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Some features may not function properly</li>
              <li>You may need to re-enter information</li>
              <li>Preferences may not be saved</li>
              <li>Analytics will be less accurate</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">6. Cookie Consent</h2>
            <p className="mt-4 text-gray-600">
              By using our website, you consent to our use of cookies as described in this policy. You can withdraw consent at any time by adjusting your browser settings or using our cookie preferences tool.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">7. Do Not Track</h2>
            <p className="mt-4 text-gray-600">
              We respect Do Not Track (DNT) browser settings. When DNT is enabled, we disable non-essential tracking cookies.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">8. Updates to This Policy</h2>
            <p className="mt-4 text-gray-600">
              We may update this Cookie Policy periodically. Changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">9. Contact Us</h2>
            <p className="mt-4 text-gray-600">
              For questions about our use of cookies:
            </p>
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