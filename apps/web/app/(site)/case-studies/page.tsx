import Link from 'next/link'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import caseStudiesData from '@/content/case-studies.json'

export const metadata = {
  title: 'Case Studies | OptAImum Consulting',
  description: 'Real results from real clients. See how OptAImum has helped companies automate operations and accelerate growth with AI.',
}

export default function CaseStudiesPage() {
  const { caseStudies } = caseStudiesData

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Real Results, Real ROI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              See how we've helped companies across industries ship AI systems that actually move the P&L.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold text-optaimum-blue">50+</p>
                <p className="mt-1 text-sm text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-optaimum-blue">95%</p>
                <p className="mt-1 text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-optaimum-blue">3-5x</p>
                <p className="mt-1 text-sm text-gray-600">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-optaimum-blue">30 days</p>
                <p className="mt-1 text-sm text-gray-600">Time to Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((study) => {
              // Find the most impressive metric to highlight
              const highlightMetric = study.metrics.roi || study.metrics.revenue || Object.values(study.metrics)[0]

              return (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block"
                >
                  <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-optaimum-blue/50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="font-semibold">{study.client}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-optaimum-blue transition-colors">
                          {study.title}
                        </h2>
                        <p className="mt-3 text-gray-600">
                          {study.summary}
                        </p>

                        {/* Key Metrics */}
                        <div className="mt-6 flex flex-wrap gap-4">
                          {Object.entries(study.metrics).slice(0, 3).map(([key, metric]: [string, any]) => (
                            <div key={key} className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              <span className="text-sm font-semibold text-gray-900">
                                {metric.improvement}
                              </span>
                              <span className="text-sm text-gray-600">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center text-optaimum-blue font-medium">
                          Read full case study
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>

                      {/* Highlight Metric */}
                      <div className="mt-6 lg:mt-0 lg:ml-8 text-center lg:text-right">
                        <p className="text-4xl font-bold text-optaimum-blue">
                          {highlightMetric.value}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {highlightMetric.label}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {highlightMetric.timeframe}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-optaimum-blue py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to be our next success story?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Let's discuss how AI can transform your operations
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-optaimum-blue shadow-sm hover:bg-gray-100 transition-colors"
            >
              Book Your Assessment
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}