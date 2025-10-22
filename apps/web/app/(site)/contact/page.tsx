'use client'

import { useEffect } from 'react'
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react'
import { CalendlyButton } from '@/components/CalendlyButton'

export default function ContactPage() {
  useEffect(() => {
    // Load Calendly widget script for embedded widget
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Let's Build Something Great
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Schedule a free consultation to discuss how AI can transform your business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Meeting Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get Your Free Assessment</h2>
              <p className="mt-4 text-gray-600">
                Book a 30-minute consultation to explore how we can help you save 20+ hours per week with practical AI automation.
              </p>

              {/* What to Expect */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      <strong>Quick Discovery (10 min):</strong> We'll understand your current challenges and workflow bottlenecks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      <strong>Solution Mapping (15 min):</strong> We'll identify 2-3 high-impact automation opportunities specific to your business
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      <strong>ROI Projection (5 min):</strong> We'll estimate potential time and cost savings from implementing AI solutions
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Other Ways to Connect</h3>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900">Email</p>
                    <a href="mailto:optaimum@gmail.com" className="mt-1 text-sm text-gray-600 hover:text-blue-600">
                      optaimum@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900">Phone</p>
                    <a href="tel:+12023201890" className="mt-1 text-sm text-gray-600 hover:text-blue-600">
                      (202) 320-1890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900">Office</p>
                    <p className="mt-1 text-sm text-gray-600">
                      1100 S Miami Ave<br />
                      Miami, FL 33130
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Quick Response</p>
                  <p className="text-sm text-gray-600">
                    We typically respond within 2 hours during PST business days
                  </p>
                </div>
              </div>

              {/* Mobile Calendly Button - shown only on mobile */}
              <div className="mt-8 lg:hidden">
                <CalendlyButton
                  className="w-full gradient-brand text-white hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Free Assessment
                </CalendlyButton>
              </div>
            </div>

            {/* Right Column - Embedded Calendly Widget */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="rounded-xl border border-gray-200 shadow-lg overflow-hidden bg-white">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Your Free 30-Minute Assessment
                    </h3>
                  </div>
                  {/* Calendly Inline Widget */}
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/jack-gewirz/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                    style={{ minWidth: '320px', height: '650px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-t border-gray-100 py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Why Teams Choose OptAImum Consulting</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <p className="mt-2 text-sm text-gray-600">ROI Guarantee</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">&lt;30</div>
              <p className="mt-2 text-sm text-gray-600">Days to Deploy</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">20+</div>
              <p className="mt-2 text-sm text-gray-600">Hours Saved Weekly</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">4.9/5</div>
              <p className="mt-2 text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Save 20+ Hours Per Week?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join hundreds of businesses automating their operations with practical AI
          </p>
          <div className="mt-8">
            <CalendlyButton
              size="lg"
              className="gradient-brand text-white hover:opacity-90 transition-opacity"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Assessment Now
            </CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  )
}