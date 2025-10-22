import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CalendlyButton } from '@/components/CalendlyButton'
import { ImpactGrid } from '@/components/metrics/impact-grid'
import { SparklineCard } from '@/components/metrics/sparkline-card'
import { BeforeAfterGrid } from '@/components/metrics/before-after'
import {
  metrics,
  sources,
  timeSavingsChart,
  adoptionTrendChart,
  beforeAfterScenarios,
  insights
} from '@/content/impact'
import { ArrowRight, ExternalLink, FileText, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Impact on SMBs | Research & Data | OptAImum',
  description: 'Research-backed data on how AI automation impacts small and medium businesses. See real metrics on time savings, revenue growth, and operational efficiency.',
  openGraph: {
    title: 'The Real Impact of AI on Small Business',
    description: 'SMBs using AI save 20+ hours per week. See the research.',
    type: 'article',
    images: ['/og-impact.png'],
  }
}

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              The <span className="gradient-text">AI Impact</span> on SMBs Is Real
            </h1>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              {insights.primaryBenefit}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Based on research from leading institutions including McKinsey, Salesforce, and Intuit.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <CalendlyButton
                size="lg"
                className="gradient-brand text-white hover:opacity-90 transition-opacity shadow-lg"
              >
                See How This Applies to You
                <ArrowRight className="ml-2 h-4 w-4" />
              </CalendlyButton>
              <Button asChild variant="outline" size="lg">
                <Link href="#sources">
                  View Sources
                  <FileText className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Performance Indicators
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aggregated data from multiple studies shows consistent improvements across all business metrics
            </p>
          </div>

          <ImpactGrid
            metrics={metrics}
            columns={3}
            featured={['hoursSaved', 'revenueLift', 'automatableTime']}
            className="mb-8"
          />

          {/* Implementation Note */}
          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-900 font-medium mb-2">
              ⚠️ Important Context
            </p>
            <p className="text-amber-800">
              {insights.caveat}
            </p>
            <p className="text-sm text-amber-700 mt-2">
              Source: {sources.find(s => s.id === insights.caveatSource)?.label}
            </p>
          </div>
        </div>
      </section>

      {/* Time Savings Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where SMBs Save Time
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Breaking down the 20+ hours saved weekly by automation category
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <SparklineCard
              chart={timeSavingsChart}
              height={300}
              showAxis={true}
              className="lg:col-span-2"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              {insights.implementation}
            </p>
            <CalendlyButton size="lg" variant="outline">
              Get Your Custom Time Audit
              <TrendingUp className="ml-2 h-4 w-4" />
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* Adoption Trend */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Adoption Curve Is Accelerating
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SMB AI adoption has nearly tripled since 2021, with 85% projected by end of 2025
            </p>
          </div>

          <SparklineCard
            chart={adoptionTrendChart}
            height={350}
            showAxis={true}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Before/After Scenarios */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Concrete examples of how AI automation transforms daily operations
            </p>
          </div>

          <BeforeAfterGrid
            scenarios={beforeAfterScenarios}
            className="mb-12"
          />

          <div className="text-center">
            <Button asChild size="lg" className="gradient-brand text-white">
              <Link href="/solutions">
                See Our Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Sources & Methodology
            </h2>
            <p className="text-lg text-gray-600">
              All metrics are based on peer-reviewed research and industry reports from 2023-2025
            </p>
          </div>

          <div className="space-y-4">
            {sources.map((source, idx) => (
              <div
                key={source.id}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-optaimum-blue/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm text-gray-500">
                      [{idx + 1}]
                    </span>
                    <span className="ml-2 font-medium text-gray-900">
                      {source.label}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      Last verified: {source.lastChecked}
                    </p>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-optaimum-blue hover:text-optaimum-blue-dark transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              About Our Research Process
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              We continuously monitor and aggregate data from leading research institutions and industry reports.
              All statistics are verified against multiple sources and updated quarterly. Where ranges are provided,
              they represent the variance across different studies and industries.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="gradient-brand rounded-2xl px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join the 73% of SMBs Already Using AI?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start with a free assessment to identify your highest-impact automation opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                Get Your Free AI Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </CalendlyButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 border-2"
              >
                <Link href="/case-study">
                  Read Customer Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}