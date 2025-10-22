import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Bot, Headphones, Database, TrendingUp, Sparkles, Check, ArrowRight } from 'lucide-react'
import solutionsData from '@/content/solutions.json'

const iconMap: { [key: string]: any } = {
  Bot,
  Headphones,
  Database,
  TrendingUp,
  Sparkles
}

export async function generateStaticParams() {
  return solutionsData.solutions.map((solution) => ({
    slug: solution.slug,
  }))
}

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const solution = solutionsData.solutions.find((s) => s.slug === params.slug)

  if (!solution) return {}

  const title = `${solution.title} | OptAImum`
  const description = solution.description
  const url = `https://www.optaimum.com/solutions/${params.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: `/solutions/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'OptAImum',
      images: [
        {
          url: `/og/optaimum-og.png`,
          width: 1200,
          height: 630,
          alt: solution.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/optaimum-og.png'],
    },
  }
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutionsData.solutions.find((s) => s.slug === params.slug)

  if (!solution) {
    notFound()
  }

  const Icon = iconMap[solution.icon] || Bot

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-optaimum-blue/10">
                <Icon className="h-8 w-8 text-optaimum-blue" />
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {solution.title}
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                {solution.subtitle}
              </p>
              <p className="mt-6 text-lg text-gray-700">
                {solution.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-md bg-optaimum-blue px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-optaimum-blue-dark transition-colors"
                >
                  {solution.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  View case studies
                </Link>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(solution.metrics).map(([key, value]) => (
                  <div key={key} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-2xl font-bold text-optaimum-blue">{value as string}</p>
                    <p className="mt-1 text-sm text-gray-600">
                      {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Outcome */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-red-50 p-8">
              <h3 className="text-lg font-semibold text-red-900">The Problem</h3>
              <p className="mt-4 text-gray-700">{solution.problem}</p>
            </div>
            <div className="rounded-xl bg-green-50 p-8">
              <h3 className="text-lg font-semibold text-green-900">The Outcome</h3>
              <p className="mt-4 text-gray-700">{solution.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">What's Included</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Common Use Cases</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solution.use_cases.map((useCase, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-gray-700">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Technology Stack</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {solution.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-optaimum-blue/10 px-4 py-2 text-sm font-medium text-optaimum-blue"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-optaimum-blue py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to {solution.title.toLowerCase()}?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Start with a 2-week Discovery. Get architecture, roadmap, and ROI analysis.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-optaimum-blue shadow-sm hover:bg-gray-100 transition-colors"
            >
              Book Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}