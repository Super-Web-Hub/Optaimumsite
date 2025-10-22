import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, Clock, DollarSign, Users, Zap } from 'lucide-react'
import caseStudiesData from '@/content/case-studies.json'

const _iconMap: { [key: string]: any } = {
  revenue: DollarSign,
  time: Clock,
  users: Users,
  performance: Zap,
  default: TrendingUp,
}

export async function generateStaticParams() {
  return caseStudiesData.caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudiesData.caseStudies.find((s) => s.slug === params.slug)

  if (!study) return {}

  return {
    title: `${study.title} | Case Study | OptAImum Consulting`,
    description: study.summary,
  }
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudiesData.caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="font-semibold text-lg">{study.client}</span>
              <span>•</span>
              <span>{study.industry}</span>
              <span>•</span>
              <span>{study.timeline}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {study.title}
            </h1>

            <p className="mt-6 text-xl text-gray-600">
              {study.summary}
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-optaimum-blue/10 px-3 py-1 text-sm font-medium text-optaimum-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Results</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(study.metrics).map(([key, metric]: [string, any]) => {
              // Check if metric has improvement field (before/after metrics) or value field (summary metrics)
              const hasImprovement = metric.improvement !== undefined
              const isPositive = hasImprovement && metric.improvement && (
                metric.improvement.includes('+') ||
                metric.improvement.includes('x') ||
                !metric.improvement.includes('-')
              )

              return (
                <div key={key} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                    <TrendingUp className={`h-5 w-5 ${isPositive ? 'text-green-500' : 'text-blue-500'}`} />
                  </div>
                  {hasImprovement ? (
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-gray-500">Before:</span>
                        <span className="text-sm font-medium text-gray-700">{metric.before}</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-gray-500">After:</span>
                        <span className="text-sm font-medium text-gray-900">{metric.after}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <p className={`text-2xl font-bold ${isPositive ? 'text-green-600' : 'text-blue-600'}`}>
                          {metric.improvement}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="pt-2">
                        <p className="text-3xl font-bold text-optaimum-blue">
                          {metric.value}
                        </p>
                      </div>
                      {metric.timeframe && (
                        <p className="text-sm text-gray-600">
                          {metric.timeframe}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <div className="rounded-lg bg-red-50 p-6">
                <p className="text-gray-700">{study.challenge}</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <div className="rounded-lg bg-green-50 p-6">
                <p className="text-gray-700">{study.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact</h2>
              <ul className="space-y-3">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="ml-3 text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-gray-300">&ldquo;</div>
              <blockquote className="relative z-10">
                <p className="text-xl text-gray-700 italic">
                  {study.testimonial.quote}
                </p>
                <footer className="mt-6">
                  <p className="text-base font-semibold text-gray-900">
                    {study.testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {study.testimonial.title}, {study.testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Next Steps CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-optaimum-blue to-blue-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready for Similar Results?
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Let&rsquo;s discuss how we can help you achieve similar transformations in your organization.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-optaimum-blue shadow-sm hover:bg-gray-100 transition-colors"
              >
                Schedule Your Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}