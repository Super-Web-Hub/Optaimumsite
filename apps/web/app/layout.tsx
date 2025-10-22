import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/footer/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { PostHogProvider, PostHogPageView } from '@/components/analytics/PostHogProvider'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#667eea',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.optaimum.com'),
  title: {
    default: 'OptAImum — Practical AI, Real-World Results',
    template: '%s | OptAImum'
  },
  description: 'We design small, high-leverage automations that pay for themselves in weeks—not months.',
  keywords: ['AI automation', 'workflow automation', 'SMB AI', 'process optimization', 'OptAImum', 'consulting'],
  applicationName: 'OptAImum',
  authors: [{ name: 'OptAImum' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'OptAImum',
  publisher: 'OptAImum',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'OptAImum',
    title: 'OptAImum — Practical AI, Real-World Results',
    description: 'We design small, high-leverage automations that pay for themselves in weeks—not months.',
    url: 'https://www.optaimum.com',
    images: [
      {
        url: '/og/optaimum-og.png',
        width: 1200,
        height: 630,
        alt: 'OptAImum - Practical AI for SMBs',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@optaimum',
    creator: '@optaimum',
    title: 'OptAImum — Practical AI, Real-World Results',
    description: 'We design small, high-leverage automations that pay for themselves in weeks—not months.',
    images: ['/og/optaimum-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: undefined, // Add your Google verification code when available
    yandex: undefined,
    yahoo: undefined,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen-safe bg-white font-sans antialiased">
        <PostHogProvider>
          <GoogleAnalytics />
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <div className="flex min-h-screen-safe flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PostHogProvider>
      </body>
    </html>
  )
}