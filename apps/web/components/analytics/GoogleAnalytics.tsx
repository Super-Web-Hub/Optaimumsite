import Script from 'next/script'

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTM_ID || 'G-XXXXXXXXXX'

  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    // Don't load GA if no ID is configured
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Event tracking helper functions
export const GAEvent = {
  // Form events
  formSubmit: (formName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formName,
      })
    }
  },

  // Lead events
  leadGenerated: (source: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: source,
        value: value,
        currency: 'USD',
      })
    }
  },

  // Click events
  buttonClick: (buttonName: string, location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: buttonName,
        event_value: location,
      })
    }
  },

  // Page view (for client-side navigation)
  pageView: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GTM_ID, {
        page_path: url,
      })
    }
  },

  // Conversion events
  bookingScheduled: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'schedule_consultation', {
        event_category: 'conversion',
        event_label: 'calendly',
        value: 3000, // Discovery value
        currency: 'USD',
      })
    }
  },

  // Content engagement
  contentEngagement: (contentType: string, contentId: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'content_engagement', {
        event_category: 'engagement',
        content_type: contentType,
        content_id: contentId,
      })
    }
  },
}

// TypeScript declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}