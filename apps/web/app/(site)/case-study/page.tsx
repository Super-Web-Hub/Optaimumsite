'use client'

import Link from 'next/link'
import { CalendlyButton } from '@/components/CalendlyButton'
import { Copy } from '@/content/copy'
import { ArrowRight, TrendingUp, Users, Zap, BarChart3, Clock, DollarSign, AlertCircle, CheckCircle, Target, Shield } from 'lucide-react'

export default function CaseStudyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - SMB Focused */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 mb-4">
              Industry Research
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Why SMBs Can't Afford to Wait:
              <span className="block gradient-text mt-2">The Real Cost of Manual Processes</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              While McKinsey charges Fortune 500s millions for digital transformation,
              we're helping real businesses automate for a fraction of the cost—with the same results.
            </p>
            <div className="mt-6 p-4 bg-blue-50 rounded-xl inline-block">
              <p className="text-sm font-semibold text-blue-900">
                {Copy.caseStudy.differentiator}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics - SMB Reality Check */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-6">THE HARSH REALITY FOR SMBS</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">$77k/yr</p>
              <p className="mt-2 text-sm text-gray-600">lost to inefficiency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">23%</p>
              <p className="mt-2 text-sm text-gray-600">of time on data entry</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">14 hrs</p>
              <p className="mt-2 text-sm text-gray-600">avg response time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">70%</p>
              <p className="mt-2 text-sm text-gray-600">haven't automated</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Plain English */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Your Team is Drowning in Busy Work</h2>
            <p className="mt-4 text-lg text-gray-600">
              And big consultancies won't help unless you have a million-dollar budget
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <div className="bg-gray-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="font-semibold text-gray-900 mb-2">The McKinsey Paradox:</p>
              <p className="text-gray-700">
                McKinsey's research proves SMBs need automation to survive. But their solutions
                start at $500k. That's like telling someone drowning they need swimming lessons—at
                country club prices.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What's Actually Happening in Your Business</h3>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Your front desk spends 3 hours daily on scheduling</p>
                  <p className="text-gray-600 mt-1">
                    Playing phone tag, sending reminders, updating calendars. Meanwhile,
                    customers wait and competitors with online booking steal your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Leads sit in your inbox for hours (or days)</p>
                  <p className="text-gray-600 mt-1">
                    By the time someone responds, that hot lead went cold—and probably
                    went to whoever answered first. Studies show 78% of customers buy from
                    the first responder.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Your best people do admin work</p>
                  <p className="text-gray-600 mt-1">
                    Skilled employees waste 20+ hours weekly on repetitive tasks. That's
                    half their week not selling, not serving customers, not growing your business.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Most SMBs Stay Stuck</h3>

            <div className="grid gap-6 mb-8">
              <div className="border rounded-lg p-6 bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🚫 Big Tech Solutions = Big Tech Problems
                </h4>
                <p className="text-gray-700">
                  Enterprise software needs IT teams you don't have. Six-month implementations
                  for problems you need solved this month. Training so complex your team gives up.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🚫 DIY Tools = Death by 1000 Apps
                </h4>
                <p className="text-gray-700">
                  Zapier, IFTTT, Make.com—great if you have time to become a automation expert.
                  Most SMBs end up with 15 half-working automations that break constantly.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🚫 Consultants = Boardroom Prices
                </h4>
                <p className="text-gray-700">
                  McKinsey, Accenture, Deloitte—they'll gladly help. For $50k/month minimum.
                  Plus travel. Plus expenses. Plus a 40-page report you'll never implement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - OptAImum Way */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              There's a Better Way (And It's Affordable)
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple automations. Full training. Fraction of the price.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The OptAImum Difference</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">We speak SMB, not MBA</p>
                  <p className="text-gray-600 mt-1">
                    No jargon. No 40-page reports. Just "here's the problem, here's the fix,
                    here's how to use it." Your team gets it on day one.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Training until they're confident</p>
                  <p className="text-gray-600 mt-1">
                    SOPs, Loom videos, live office hours. We don't disappear after deployment.
                    We stick around until every team member is comfortable. That's the hand-holding
                    you actually need.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Built for budgets that matter</p>
                  <p className="text-gray-600 mt-1">
                    Start at $3k. See results in 30 days. Scale when ready. No lock-ins,
                    no surprises, no "scope creep" that doubles your bill.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-center font-bold text-blue-900">
                {Copy.footer.note}
              </p>
            </div>
          </div>

          {/* Real Results */}
          <div className="grid gap-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Real SMBs, Real Results, Real Fast
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 bg-white text-center">
                <p className="text-sm font-semibold text-gray-500 mb-2">DENTAL PRACTICE</p>
                <p className="text-3xl font-bold text-green-600">32%</p>
                <p className="text-sm text-gray-600 mt-1">fewer no-shows</p>
                <p className="text-xs text-gray-500 mt-2">in 3 weeks</p>
              </div>

              <div className="border rounded-lg p-6 bg-white text-center">
                <p className="text-sm font-semibold text-gray-500 mb-2">HOME SERVICES</p>
                <p className="text-3xl font-bold text-blue-600">47min</p>
                <p className="text-sm text-gray-600 mt-1">lead response</p>
                <p className="text-xs text-gray-500 mt-2">down from 14hrs</p>
              </div>

              <div className="border rounded-lg p-6 bg-white text-center">
                <p className="text-sm font-semibold text-gray-500 mb-2">LAW FIRM</p>
                <p className="text-3xl font-bold text-purple-600">25hrs</p>
                <p className="text-sm text-gray-600 mt-1">saved weekly</p>
                <p className="text-xs text-gray-500 mt-2">on intake alone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              How We Actually Get You Results
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No 6-month roadmaps. No analysis paralysis. Just action.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Week 1-2: We Find Your Biggest Time-Wasters
                </h3>
                <p className="text-gray-600">
                  Not a 200-page audit. We shadow your team for a few days, spot the obvious
                  problems (there's always 2-3 big ones), and show you exactly how much they cost.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Week 3-4: We Build & Test Simple Fixes
                </h3>
                <p className="text-gray-600">
                  Start with one workflow. Make it bulletproof. Test with your actual team,
                  not in a lab. Fix what breaks. No "beta testing" on your dime.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Week 5-6: We Train Until They're Confident
                </h3>
                <p className="text-gray-600">
                  Not a one-hour Zoom and goodbye. Real training with real scenarios.
                  SOPs they'll actually use. Videos they can rewatch. Office hours when they're stuck.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Month 2+: We Stay Close & Scale Smart
                </h3>
                <p className="text-gray-600">
                  Weekly check-ins. Quick fixes. New automations when you're ready.
                  No disappearing act. No "that's out of scope." Just continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Warning */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-red-200">
            <div className="text-center">
              <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Every Month You Wait Costs You Money
              </h2>
              <div className="space-y-3 text-left max-w-2xl mx-auto">
                <p className="text-gray-700">
                  <strong>Right now:</strong> Your competitors are automating. They're responding
                  to leads in minutes while you take hours. They're reducing no-shows while you
                  eat the cost.
                </p>
                <p className="text-gray-700">
                  <strong>Next month:</strong> You'll lose another $6,400 to inefficiency
                  (that's $77k/year ÷ 12). Another 100+ hours of busy work. Another stack of
                  leads that went cold.
                </p>
                <p className="text-gray-700">
                  <strong>Six months from now:</strong> The gap between you and automated
                  competitors will be a canyon. They'll have refined their systems, captured
                  more market share, and locked in customer habits.
                </p>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-xl">
                <p className="text-red-900 font-semibold">
                  The best time to automate was last year. The second best time is today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Strong Close */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Stop Reading. Start Automating.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            30-minute call. We'll identify your biggest time-waster and show you
            exactly how to fix it. No consultant speak. No massive proposal. Just solutions.
          </p>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl inline-block">
            <p className="text-gray-700 mb-2">What you'll get in 30 minutes:</p>
            <ul className="text-left text-sm text-gray-600 space-y-1 max-w-md">
              <li>✓ Your #1 automation opportunity identified</li>
              <li>✓ Real examples from similar businesses</li>
              <li>✓ Ballpark ROI and timeline</li>
              <li>✓ Clear next steps (with or without us)</li>
            </ul>
          </div>

          <div className="mt-8">
            <CalendlyButton
              size="lg"
              className="gradient-brand text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Book Your Free 30-Minute Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </CalendlyButton>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            No sales pressure. If we can't help, we'll tell you straight up.
          </p>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm font-semibold text-blue-900">
              {Copy.footer.note}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}