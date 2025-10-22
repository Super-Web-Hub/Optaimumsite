'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Clock, TrendingUp, Zap, Users, Rocket, DollarSign, Info } from 'lucide-react'
import type { Metric, Source } from '@/content/impact'

const iconMap: Record<string, any> = {
  Clock,
  TrendingUp,
  Zap,
  Users,
  Rocket,
  DollarSign
}

interface MetricCardProps {
  metric: Metric
  sources: Source[]
  index?: number
}

function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  shouldAnimate: boolean = true
) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const rafRef = useRef<number>()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!shouldAnimate || prefersReducedMotion) {
      setCount(end)
      return
    }

    const startTime = Date.now()
    const startValue = countRef.current

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentCount)
      countRef.current = currentCount

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateCount)
      }
    }

    rafRef.current = requestAnimationFrame(updateCount)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [end, duration, shouldAnimate, prefersReducedMotion])

  return count
}

export default function MetricCard({ metric, sources, index = 0 }: MetricCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showTooltip, setShowTooltip] = useState(false)

  const Icon = iconMap[metric.icon || 'TrendingUp']

  // Calculate display value
  const displayValue = metric.value || (metric.valueRange ?
    (metric.valueRange[0] + metric.valueRange[1]) / 2 : 0)

  const animatedValue = useAnimatedCounter(
    Math.floor(displayValue),
    1500,
    isInView
  )

  // Get source citations
  const metricSources = sources.filter(s => metric.sourceIds.includes(s.id))

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  }

  const formatValue = () => {
    if (metric.valueRange) {
      const [min, max] = metric.valueRange
      if (isInView) {
        // Show animated middle value while counting
        if (animatedValue < max) {
          return `${animatedValue}${metric.unit === '%' ? '%' : ''}`
        }
        // Show range when animation completes
        return `${min}-${max}${metric.unit === '%' ? '%' : ''}`
      }
      return `${min}-${max}${metric.unit === '%' ? '%' : ''}`
    }
    return `${animatedValue}${metric.unit === '%' ? '%' : ''}`
  }

  const getUnitLabel = () => {
    if (metric.unit === '%') return ''
    if (metric.unit === 'hrs') return 'hours'
    if (metric.unit === 'employees') return 'FTEs'
    return metric.unit
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative group"
    >
      <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-gray-300">
        {/* Icon and trend indicator */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          {metric.trend && (
            <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium
              ${metric.trend === 'up' ? 'bg-green-50 text-green-700' :
                metric.trend === 'down' ? 'bg-red-50 text-red-700' :
                'bg-gray-50 text-gray-700'}`}
            >
              {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'}
              {metric.trend}
            </div>
          )}
        </div>

        {/* Metric value */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-gray-900">
              {formatValue()}
            </span>
            {getUnitLabel() && (
              <span className="text-sm font-medium text-gray-500">
                {getUnitLabel()}
              </span>
            )}
          </div>
        </div>

        {/* Label */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          {metric.label}
        </h3>

        {/* Description */}
        {metric.description && (
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            {metric.description}
          </p>
        )}

        {/* Source indicator */}
        <button
          className="group/source flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 transition-colors"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="View sources"
        >
          <Info className="h-3 w-3" />
          <span>{metricSources.length} source{metricSources.length > 1 ? 's' : ''}</span>
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full left-0 right-0 mb-2 z-10"
          >
            <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl">
              <p className="font-semibold mb-2">Sources:</p>
              <ul className="space-y-1">
                {metricSources.map((source, idx) => (
                  <li key={source.id}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      [{idx + 1}] {source.label}
                      <span className="text-[10px] opacity-60">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="border-8 border-transparent border-t-gray-900" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}