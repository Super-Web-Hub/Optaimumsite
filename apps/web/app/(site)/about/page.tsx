import Link from 'next/link'
import { Users, Target, Award, Zap } from 'lucide-react'

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    bio: 'Former Google AI researcher. Built ML systems at scale for Fortune 500s.',
    image: '/team/alex.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: '15+ years architecting enterprise systems. Ex-AWS Solutions Architect.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'Michael Park',
    role: 'Head of AI Engineering',
    bio: 'Led AI transformation at 3 unicorns. Published researcher in NLP.',
    image: '/team/michael.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Client Success',
    bio: 'Delivered 50+ successful AI implementations. RevOps expert.',
    image: '/team/emily.jpg',
  },
]

const values = [
  {
    icon: Users,
    title: 'Client-First',
    description: 'Your success is our success. We only win when your KPIs improve.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'No PowerPoints. We ship production code that moves your P&L.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hire the best and hold ourselves to the highest standards.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: '30-day sprints. Rapid iteration. Time to value measured in weeks.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              We Ship AI That Works
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              OptAImum was founded with a simple mission: help companies actually ship AI systems
              that deliver measurable business value, not just impressive demos.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              After years of watching companies struggle with AI initiatives that never made it to
              production, we founded OptAImum with a different approach.
            </p>
            <p>
              We saw brilliant teams stuck in endless POCs, vendors pushing solutions that didn't
              fit, and millions spent on AI that never moved the needle.
            </p>
            <p>
              So we built a company that ships. Fast. We focus on proven patterns, practical
              applications, and production-ready systems. No research projects, no moonshots—just
              AI that works, delivered in weeks, not years.
            </p>
            <p>
              Today, we've helped dozens of companies automate their operations, scale their
              customer support, and build data pipelines that actually deliver insights. Our
              clients see ROI in 30 days because we focus on what matters: shipping systems that
              move the P&L.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-optaimum-blue/10">
                    <Icon className="h-8 w-8 text-optaimum-blue" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ex-FAANG engineers and operators who've been there, done that
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                  {/* Replace with actual images */}
                  <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-optaimum-blue">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-optaimum-blue py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="mt-2 text-white/80">Successful Implementations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">95%</p>
              <p className="mt-2 text-white/80">Client Retention</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">30 days</p>
              <p className="mt-2 text-white/80">Average Time to Value</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">3-5x</p>
              <p className="mt-2 text-white/80">Average ROI Year 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Ship AI That Actually Works?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join the companies that are moving their P&L with AI
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-optaimum-blue px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-optaimum-blue-dark transition-colors"
            >
              Book Your Assessment
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}