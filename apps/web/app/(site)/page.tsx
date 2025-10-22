import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CalendlyButton } from '@/components/CalendlyButton'
import { Copy } from '@/content/copy'
import { metrics } from '@/content/impact'
import { ImpactGrid } from '@/components/metrics/impact-grid'
import {
  Brain,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Sparkles
} from 'lucide-react'

export default function HomePage() {
  const h = Copy.hero
  const s = Copy.solutions

  // JSON-LD structured data for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OptAImum Consulting',
    url: 'https://www.optaimum.com',
    logo: 'https://www.optaimum.com/logo.png',
    description: 'We design small, high-leverage automations that pay for themselves in weeks—not months.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-202-320-1890',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://twitter.com/optaimum',
      'https://linkedin.com/company/optaimum'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1100 S Miami Ave',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      postalCode: '33130',
      addressCountry: 'US'
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OptAImum Consulting',
    url: 'https://www.optaimum.com',
    description: 'Practical AI automation for SMBs',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.optaimum.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="flex flex-col min-h-screen">
      {/* Hero Section - Plain English, Outcome-First */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900">{h.title}</span>
              <span className="block gradient-text mt-2">{h.subtitle}</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              {h.body}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              {h.subBody}
            </p>

            {/* Trust Signal */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl inline-block">
              <p className="text-sm font-semibold text-blue-900">
                ✓ {h.guarantee}
              </p>
              <p className="text-sm text-blue-800 mt-1">
                ✓ {h.pricing}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-4">
              <CalendlyButton
                size="lg"
                className="gradient-brand text-white hover:opacity-90 transition-opacity shadow-lg"
              >
                {h.ctas[0].label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </CalendlyButton>
              <Button asChild variant="outline" size="lg" className="shadow-md">
                <Link href={h.ctas[1].href}>
                  {h.ctas[1].label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Real Numbers */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Copy.trust.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-gray-900">{stat.metric}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AI Impact on SMBs Is Real
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Research shows small businesses using AI save 20+ hours per week.
              Here's what the data tells us about AI automation in practice.
            </p>
          </div>

          {/* Featured Metrics Grid */}
          <ImpactGrid
            metrics={metrics.slice(0, 4)}
            columns={2}
            featured={['hoursSaved', 'revenueLift']}
            className="mb-12"
          />

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Based on research from McKinsey, Salesforce, and Intuit QuickBooks
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/impact">
                View Full Research & Methodology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props - Why OptAImum */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Built for SMBs, Not Boardrooms
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple solutions that your team will actually use—with the support to make it stick
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Copy.valueProps.map((prop, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center mb-4">
                  {idx === 0 && <Target className="h-6 w-6 text-white" />}
                  {idx === 1 && <Users className="h-6 w-6 text-white" />}
                  {idx === 2 && <TrendingUp className="h-6 w-6 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Concrete Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Simple Automations, Real Results
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Each solution includes full setup, team training, and ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* No-Show Reduction */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 mb-4">
                Most Popular
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {s.noShow.heading}
              </h3>
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-900">{s.noShow.metric} reduction</p>
                <p className="text-sm text-blue-700">typical client result</p>
              </div>
              <p className="text-gray-600 mb-4">
                {s.noShow.body}
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-gray-700">
                  ✓ {s.noShow.timeline}
                </p>
                <p className="text-sm text-gray-600">
                  ✓ {s.noShow.pricing} ({s.noShow.detail})
                </p>
              </div>
              <Link href="/solutions#no-show" className="text-blue-600 hover:underline text-sm font-medium">
                Learn more →
              </Link>
            </div>

            {/* Lead Routing */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-800 mb-4">
                Quick Win
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {s.leadRouting.heading}
              </h3>
              <div className="mb-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-900">{s.leadRouting.metric}</p>
                <p className="text-sm text-purple-700">response time</p>
              </div>
              <p className="text-gray-600 mb-4">
                {s.leadRouting.body}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                ✓ {s.leadRouting.enablement}
              </p>
              <Link href="/solutions#lead-routing" className="text-blue-600 hover:underline text-sm font-medium">
                Learn more →
              </Link>
            </div>

            {/* Ops Automation */}
            <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-orange-100 text-orange-800 mb-4">
                Big Impact
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {s.opsAutomation.heading}
              </h3>
              <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-900">{s.opsAutomation.metric}</p>
                <p className="text-sm text-orange-700">freed up for real work</p>
              </div>
              <p className="text-gray-600 mb-4">
                {s.opsAutomation.body}
              </p>
              <p className="text-sm text-gray-600 mb-6">
                ✓ {s.opsAutomation.enablement}
              </p>
              <Link href="/solutions#ops-automation" className="text-blue-600 hover:underline text-sm font-medium">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/solutions">
                See All Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process - Clear Pricing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Simple Process, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start small, prove ROI, then scale. No surprises, no lock-ins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(Copy.process).map((phase, idx) => (
              <div key={idx} className={`rounded-2xl border ${idx === 1 ? 'border-2 border-blue-600 shadow-xl' : 'border-gray-200'} bg-white p-8`}>
                {idx === 1 && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{phase.price}</p>
                  <p className="text-sm text-gray-600">{phase.duration}</p>
                </div>
                <p className="text-gray-600 mb-6">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CalendlyButton
                    className={`w-full ${idx === 1 ? 'gradient-brand text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                    size="lg"
                  >
                    Get Started
                  </CalendlyButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {Copy.caseStudy.headline}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {Copy.caseStudy.subhead}
              </p>
              <div className="p-6 bg-blue-50 rounded-xl mb-6">
                <p className="text-gray-700 mb-2">
                  {Copy.caseStudy.proof}
                </p>
                <p className="text-xl font-bold text-blue-900">
                  {Copy.caseStudy.differentiator}
                </p>
              </div>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-study">
                  Read the Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band - Strong Close */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gradient-brand rounded-2xl px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Stop Wasting Time on Busy Work?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Join hundreds of SMBs automating the boring stuff—affordably.
            </p>
            <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-xl inline-block">
              <p className="text-white font-semibold">
                {Copy.footer.note}
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                Book Your Free Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </CalendlyButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 border-2"
              >
                <Link href="/case-study">
                  See How Others Save 20+ Hours
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}