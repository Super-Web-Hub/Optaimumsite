'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

if (typeof window !== 'undefined') {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'

  if (posthogKey && posthogKey !== 'phc_XXXXXX') {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false, // We'll handle this manually
      capture_pageleave: true,
      autocapture: true,
      disable_session_recording: false,
      session_recording: {
        maskAllInputs: true, // Privacy: mask sensitive inputs
        maskTextContent: false,
      },
    })
  }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <PHProvider client={posthog}>{children}</PHProvider>
}

// PostHog page view tracker
export function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + '?' + searchParams.toString()
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Event tracking helper functions
export const PHEvent = {
  // Form events
  formSubmit: (formName: string, properties?: Record<string, any>) => {
    posthog.capture('form_submitted', {
      form_name: formName,
      ...properties,
    })
  },

  // Lead events
  leadCaptured: (source: string, properties?: Record<string, any>) => {
    posthog.capture('lead_captured', {
      source,
      ...properties,
    })
  },

  // Conversion events
  bookingScheduled: (properties?: Record<string, any>) => {
    posthog.capture('consultation_booked', {
      value: 3000,
      currency: 'USD',
      ...properties,
    })
  },

  // Feature engagement
  featureUsed: (featureName: string, properties?: Record<string, any>) => {
    posthog.capture('feature_used', {
      feature_name: featureName,
      ...properties,
    })
  },

  // Content events
  contentViewed: (contentType: string, contentId: string, properties?: Record<string, any>) => {
    posthog.capture('content_viewed', {
      content_type: contentType,
      content_id: contentId,
      ...properties,
    })
  },

  // CTA clicks
  ctaClicked: (ctaName: string, location: string, properties?: Record<string, any>) => {
    posthog.capture('cta_clicked', {
      cta_name: ctaName,
      location,
      ...properties,
    })
  },

  // Solution interest
  solutionViewed: (solutionName: string, properties?: Record<string, any>) => {
    posthog.capture('solution_viewed', {
      solution_name: solutionName,
      ...properties,
    })
  },

  // Pricing interest
  pricingViewed: (tier: string, properties?: Record<string, any>) => {
    posthog.capture('pricing_viewed', {
      pricing_tier: tier,
      ...properties,
    })
  },

  // User identification
  identify: (userId: string, traits?: Record<string, any>) => {
    posthog.identify(userId, traits)
  },

  // User properties
  setUserProperties: (properties: Record<string, any>) => {
    posthog.people.set(properties)
  },
}