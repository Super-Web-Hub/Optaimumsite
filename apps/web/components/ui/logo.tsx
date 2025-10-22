'use client'

import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {/* Gradient head silhouette with circuit pattern */}
      <div className="relative w-10 h-10">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="33%" stopColor="#ec4899" />
              <stop offset="66%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <mask id="headMask">
              <path
                d="M20 5C15 5 11 9 11 14C11 16 11.5 17.5 12 18.5C12 19 12 19.5 12 20C12 24 14 27 17 29C17 31 17 33 18 35H22C23 33 23 31 23 29C26 27 28 24 28 20C28 19.5 28 19 28 18.5C28.5 17.5 29 16 29 14C29 9 25 5 20 5Z"
                fill="white"
              />
            </mask>
          </defs>

          {/* Head silhouette with gradient */}
          <path
            d="M20 5C15 5 11 9 11 14C11 16 11.5 17.5 12 18.5C12 19 12 19.5 12 20C12 24 14 27 17 29C17 31 17 33 18 35H22C23 33 23 31 23 29C26 27 28 24 28 20C28 19.5 28 19 28 18.5C28.5 17.5 29 16 29 14C29 9 25 5 20 5Z"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            fill="none"
          />

          {/* Circuit pattern inside */}
          <g mask="url(#headMask)">
            {/* Circuit lines */}
            <path
              d="M15 12L20 15L25 12M15 18L20 21L25 18"
              stroke="url(#logoGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Circuit nodes */}
            <circle cx="15" cy="12" r="1.5" fill="url(#logoGradient)" opacity="0.9" />
            <circle cx="20" cy="15" r="1.5" fill="url(#logoGradient)" opacity="0.9" />
            <circle cx="25" cy="12" r="1.5" fill="url(#logoGradient)" opacity="0.9" />
            <circle cx="15" cy="18" r="1.5" fill="url(#logoGradient)" opacity="0.9" />
            <circle cx="20" cy="21" r="1.5" fill="url(#logoGradient)" opacity="0.9" />
            <circle cx="25" cy="18" r="1.5" fill="url(#logoGradient)" opacity="0.9" />
          </g>
        </svg>
      </div>

      {showText && (
        <span className="text-2xl font-bold text-[#3b82f6]">
          Optaimum
        </span>
      )}
    </Link>
  )
}