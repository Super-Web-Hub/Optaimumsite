import Link from 'next/link'
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react'
import { CalendarEmbed } from '@/components/booking/CalendarEmbed'

export default function BookPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Book Your Free Assessment
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              30-minute call to discuss your AI opportunities and get a custom roadmap
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Meeting Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">What to Expect</h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-optaimum-blue flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">30 Minutes</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Quick, focused discussion about your specific challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Video className="h-6 w-6 text-optaimum-blue flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Video Call</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Screen sharing enabled for demos and architecture review
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-optaimum-blue flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">Flexible Scheduling</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Pick a time that works for your schedule
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">We'll Cover:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-sm text-gray-700">Your current challenges & goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-sm text-gray-700">Quick AI opportunity assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-sm text-gray-700">Potential ROI & timeline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-sm text-gray-700">Next steps & Discovery process</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg bg-blue-50 p-6">
                <h3 className="font-semibold text-gray-900">Before the Call:</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Think about your biggest operational pain points and what success looks like for your organization.
                </p>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden p-4">
                <CalendarEmbed
                  calLink="optaimum/discovery-call"
                  config={{
                    layout: 'month_view',
                    theme: 'light'
                  }}
                />

                {/* Note about Cal.com - will be replaced with actual booking link */}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> To enable bookings, sign up for a free Cal.com account and update the
                    calendar link in the CalendarEmbed component with your actual booking URL.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Prefer email?{' '}
                  <Link href="/contact" className="text-optaimum-blue hover:underline">
                    Contact us directly
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Why Teams Trust OptAImum</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-optaimum-blue">95%</p>
              <p className="mt-2 text-sm text-gray-600">Client retention rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-optaimum-blue">30 days</p>
              <p className="mt-2 text-sm text-gray-600">Average time to first value</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-optaimum-blue">3-5x</p>
              <p className="mt-2 text-sm text-gray-600">Average ROI in year one</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-optaimum-blue">Zero</p>
              <p className="mt-2 text-sm text-gray-600">Failed pilots to date</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}