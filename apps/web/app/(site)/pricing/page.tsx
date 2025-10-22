'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, X } from 'lucide-react'

const tiers = [
  {
    name: 'Discovery',
    price: '$3,000',
    duration: 'Fixed fee',
    description: 'Audit your systems and get a custom AI roadmap',
    features: [
      '2-week comprehensive audit',
      'Current state analysis',
      'AI opportunity mapping',
      'Custom implementation roadmap',
      'ROI projections',
      'Technical architecture',
      'Priority recommendations',
      'Exit with all artifacts'
    ],
    limitations: [
      'No implementation',
      'No ongoing support'
    ],
    cta: 'Start Discovery',
    highlighted: false,
  },
  {
    name: 'Pilot',
    price: '$15-40k',
    duration: '4-6 weeks',
    description: 'Prove the ROI with 1-2 high-impact workflows',
    features: [
      'Everything in Discovery',
      '1-2 workflow implementation',
      'Production deployment',
      'Team training',
      'Performance monitoring',
      'KPI measurement',
      '30-day support included',
      'Success guarantee'
    ],
    limitations: [
      'Limited to 2 workflows',
      'No custom ML models'
    ],
    cta: 'Launch Pilot',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    duration: 'Ongoing',
    description: 'Full AI transformation across your organization',
    features: [
      'Everything in Pilot',
      'Unlimited workflows',
      'Custom AI models',
      'API development',
      'System integration',
      'Dedicated success manager',
      'SLA guarantees',
      'Quarterly optimization',
      'Priority support',
      'Custom training programs'
    ],
    limitations: [],
    cta: 'Get Custom Quote',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'Can we start with Discovery and upgrade later?',
    answer: 'Absolutely. Discovery gives you a complete roadmap with no obligation to continue. Many clients use it to build internal buy-in before moving to Pilot.'
  },
  {
    question: "What happens if the Pilot doesn't deliver ROI?",
    answer: 'We guarantee measurable improvement or your money back. We\'ve never had to invoke this because we only take on pilots where we\'re confident in the ROI.'
  },
  {
    question: 'How do you price Scale engagements?',
    answer: 'Scale pricing is based on scope, complexity, and value delivered. Typically ranges from $10-50k/month depending on the number of workflows and level of support.'
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No. Discovery and Pilot are fixed-scope. Scale engagements are month-to-month after the initial 3-month period.'
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We\'re platform-agnostic and work with your existing stack. Common integrations include Salesforce, HubSpot, Slack, Microsoft, Google, and custom APIs.'
  }
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'project' | 'monthly'>('project')

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Transparent, value-based pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Start small, prove ROI, then scale. No long-term contracts, no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl ${
                  tier.highlighted
                    ? 'border-2 border-optaimum-blue shadow-xl'
                    : 'border border-gray-200 shadow-sm'
                } bg-white p-8`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-optaimum-blue px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price}
                    </span>
                    <span className="text-base text-gray-500 ml-2">{tier.duration}</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900">What's included:</h4>
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="ml-3 text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.limitations.length > 0 && (
                    <>
                      <h4 className="mt-8 text-sm font-semibold text-gray-900">Limitations:</h4>
                      <ul className="mt-4 space-y-3">
                        {tier.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start">
                            <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            <span className="ml-3 text-sm text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-8">
                  <Link
                    href="/book"
                    className={`block w-full rounded-md px-6 py-3 text-center text-base font-semibold transition-colors ${
                      tier.highlighted
                        ? 'bg-optaimum-blue text-white hover:bg-optaimum-blue-dark'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our Guarantees
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">ROI or Refund</h3>
              <p className="mt-2 text-sm text-gray-600">
                If your Pilot doesn't deliver measurable ROI, we'll refund your investment
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Fixed Pricing</h3>
              <p className="mt-2 text-sm text-gray-600">
                Discovery and Pilot are fixed-fee. No surprise overages or hidden costs
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Check className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Exit Anytime</h3>
              <p className="mt-2 text-sm text-gray-600">
                Keep all code, documentation, and artifacts. No vendor lock-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Pricing FAQs
          </h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-optaimum-blue py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to see ROI in 30 days?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Start with Discovery. Get your custom AI roadmap in 2 weeks.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-optaimum-blue shadow-sm hover:bg-gray-100 transition-colors"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}