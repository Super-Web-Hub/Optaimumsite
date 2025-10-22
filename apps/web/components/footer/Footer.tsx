'use client'

import Link from 'next/link'
import { useState } from 'react'

const footerNavigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Documentation', href: '/docs' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'DPA', href: '/dpa' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/optaimum' },
    { name: 'Twitter', href: 'https://twitter.com/optaimum' },
    { name: 'GitHub', href: 'https://github.com/optaimum' },
  ],
}

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-gray-200 py-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Stay updated with AI insights
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Get weekly tips on AI automation and system design
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="mt-6 sm:mt-0 sm:ml-8 sm:flex">
              <input
                type="email"
                name="email"
                id="newsletter-email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm placeholder-gray-500 focus:border-optaimum-blue focus:outline-none focus:ring-1 focus:ring-optaimum-blue sm:w-64"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-optaimum-blue px-4 py-2 text-sm font-semibold text-white hover:bg-optaimum-blue-dark transition-colors sm:mt-0 sm:ml-3 sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-12 md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                Connect
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">OptAImum Consulting</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 md:mt-0">
              © {new Date().getFullYear()} OptAImum Consulting. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>1100 S Miami Ave</p>
            <p>Miami, FL 33130</p>
            <p>optaimum@gmail.com • (202) 320-1890</p>
          </div>
        </div>
      </div>
    </footer>
  )
}