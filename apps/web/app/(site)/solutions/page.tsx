'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  MessageSquare,
  Users,
  Workflow,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Bell,
  BarChart,
  FileText
} from 'lucide-react'

const solutions = [
  {
    id: 'no-show',
    name: 'No-Show Reduction',
    icon: Bell,
    tagline: 'Cut appointment no-shows by 40%+',
    problems: [
      'Losing $100k+ annually to missed appointments',
      'Staff time wasted on manual reminder calls',
      'No way to predict high-risk bookings',
    ],
    solution: 'Intelligent reminder system with 2-way SMS, risk scoring based on patient history, and optimal timing algorithms. Integrates with your existing scheduling system.',
    outcomes: [
      '40-60% reduction in no-shows',
      'Save 15+ staff hours per week',
      'ROI positive in 30 days',
    ],
    features: [
      'Smart reminder timing',
      'Risk-based outreach',
      '2-way SMS confirmation',
      'Automated rescheduling',
      'Multi-language support',
      'Real-time dashboard',
    ],
  },
  {
    id: 'lead-triage',
    name: 'Lead Handling & Triage',
    icon: Users,
    tagline: 'Never miss a hot lead again',
    problems: [
      'Leads go cold waiting for response',
      'No visibility into lead quality',
      'Manual data entry into CRM',
    ],
    solution: 'AI-powered lead response that instantly engages, qualifies, and routes leads to the right team member. Full CRM integration with enriched data.',
    outcomes: [
      '5-minute response time 24/7',
      '3x improvement in lead conversion',
      'Zero manual data entry',
    ],
    features: [
      'Instant AI response',
      'Lead scoring & qualification',
      'CRM auto-population',
      'Smart routing rules',
      'Lead enrichment',
      'Conversion tracking',
    ],
  },
  {
    id: 'ops-automation',
    name: 'Operations Automation',
    icon: Workflow,
    tagline: 'End-to-end workflow automation',
    problems: [
      'Manual handoffs causing delays',
      'No visibility into process bottlenecks',
      'Inconsistent execution across team',
    ],
    solution: 'Complete workflow automation from intake to completion. Auto-routing, status updates, and full audit trail with zero manual intervention.',
    outcomes: [
      '75% reduction in process time',
      'Complete audit trail',
      '100% consistent execution',
    ],
    features: [
      'Visual workflow builder',
      'Conditional routing',
      'Auto-escalation',
      'SLA tracking',
      'Audit logging',
      'API integrations',
    ],
  },
]

export default function SolutionsPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('no-show')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && solutions.find(s => s.id === hash)) {
      setActiveTab(hash)
    }
  }, [])

  const activeSolution = solutions.find(s => s.id === activeTab)!

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="block">Automation Solutions</span>
              <span className="block gradient-text mt-2">That Actually Work</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Pre-built workflows proven to cut costs and lift revenue. Deploy in weeks, not months.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(solution.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === solution.id
                      ? 'gradient-brand text-white'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {solution.name}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Problem & Solution */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeSolution.name}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {activeSolution.tagline}
                </p>
              </div>

              {/* Problems */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Common Problems
                </h3>
                <ul className="space-y-3">
                  {activeSolution.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✕</span>
                      <span className="text-gray-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Our Solution
                </h3>
                <p className="text-gray-700">
                  {activeSolution.solution}
                </p>
              </div>

              {/* Outcomes */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {activeSolution.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Features & CTA */}
            <div className="space-y-8">
              {/* Process Diagram Placeholder */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Process Flow Diagram</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {activeSolution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">
                    Typical Implementation
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-900">2-4 weeks</span>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full gradient-brand text-white hover:opacity-90"
                >
                  <Link href="/contact">
                    Get Started with {activeSolution.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/pricing">
                    View Pricing Options
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Works With Your Existing Tools
            </h2>
            <p className="mt-2 text-gray-600">
              Seamless integration with the platforms you already use
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {['Zapier', 'n8n', 'HubSpot', 'Slack', 'Teams', 'Salesforce'].map((tool) => (
              <div key={tool} className="text-lg font-semibold text-gray-400">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gradient-brand rounded-2xl px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">
              See What We Can Automate for You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Free assessment to identify your highest-ROI automation opportunities
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/contact">
                  Book Your Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}