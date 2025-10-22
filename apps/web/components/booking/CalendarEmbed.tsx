'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

interface CalendarEmbedProps {
  calLink?: string
  config?: any
}

export function CalendarEmbed({
  calLink = 'optaimum/discovery-call',
  config = {}
}: CalendarEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: '#0066FF'
          }
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <div className="w-full h-full min-h-[600px] rounded-lg overflow-hidden">
      <Cal
        calLink={calLink}
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{
          layout: 'month_view',
          ...config
        }}
      />
    </div>
  )
}

// Alternative inline booking button component
export function BookingButton({
  text = 'Schedule a Call',
  className = ''
}: {
  text?: string
  className?: string
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: '#0066FF'
          }
        },
      })
    })()
  }, [])

  return (
    <button
      data-cal-link="optaimum/discovery-call"
      data-cal-config='{"layout":"month_view"}'
      className={`inline-flex items-center justify-center rounded-md bg-optaimum-blue px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors ${className}`}
    >
      {text}
    </button>
  )
}