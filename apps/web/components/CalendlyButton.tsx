'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    Calendly: any
  }
}

interface CalendlyButtonProps {
  url?: string
  text?: string
  className?: string
  children?: React.ReactNode
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function CalendlyButton({
  url = 'https://calendly.com/jack-gewirz/30min', // Your Calendly link
  text = 'Book Free Assessment',
  className = '',
  children,
  size = 'default',
  variant = 'default'
}: CalendlyButtonProps) {

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault()

    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: url,
        parentElement: document.body,
        prefill: {},
        utm: {
          utmSource: 'website',
          utmMedium: 'button',
          utmCampaign: 'assessment'
        }
      })
    } else {
      // Fallback to opening in new tab if widget doesn't load
      window.open(url, '_blank')
    }
  }

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Button
        onClick={openCalendly}
        className={className}
        size={size}
        variant={variant}
      >
        {children || text}
      </Button>
    </>
  )
}