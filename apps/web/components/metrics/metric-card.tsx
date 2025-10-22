'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Clock, TrendingUp, Zap, Users, Rocket, DollarSign, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Metric } from '@/content/impact'

// Icon mapping for metrics
const iconMap: Record<string, LucideIcon> = {
  Clock,
  TrendingUp,
  Zap,
  Users,
  Rocket,
  DollarSign,
}

interface MetricCardProps {
  metric: Metric
  className?: string
  showDescription?: boolean
  animate?: boolean
  delay?: number
}

export function MetricCard({
  metric,
  className,
  showDescription = true,
  animate: shouldAnimate = true,
  delay = 0
}: MetricCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  const Icon = metric.icon ? iconMap[metric.icon] : null

  // Animated counter
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (metric.value) {
      return Math.round(latest)
    }
    if (metric.valueRange) {
      // For ranges, animate to the midpoint
      const mid = (metric.valueRange[0] + metric.valueRange[1]) / 2
      return Math.round(latest)
    }
    return 0
  })

  // Format the display value
  const formatValue = () => {
    if (metric.value) {
      return metric.value
    }
    if (metric.valueRange) {
      return `${metric.valueRange[0]}-${metric.valueRange[1]}`
    }
    return '—'
  }

  // Animate counter when in view
  useEffect(() => {
    if (!shouldAnimate || hasAnimated || !isInView) return

    setHasAnimated(true)

    if (metric.value) {
      const controls = animate(count, metric.value, {
        duration: 1.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      })
      return controls.stop
    } else if (metric.valueRange) {
      // Animate to midpoint for ranges
      const mid = (metric.valueRange[0] + metric.valueRange[1]) / 2
      const controls = animate(count, mid, {
        duration: 1.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      })
      return controls.stop
    }
  }, [isInView, hasAnimated, shouldAnimate, metric, count, delay])

  // Determine trend color
  const getTrendColor = () => {
    switch (metric.trend) {
      case 'up':
        return 'text-success'
      case 'down':
        return 'text-warning'
      default:
        return 'text-info'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative group',
        'bg-white dark:bg-gray-900',
        'border border-gray-200 dark:border-gray-800',
        'rounded-xl p-6',
        'transition-all duration-300',
        'hover:shadow-xl hover:scale-[1.02]',
        'hover:border-optaimum-blue/30',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-optaimum-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <motion.div
                className={cn(
                  'p-2 rounded-lg',
                  'bg-optaimum-blue/10 dark:bg-optaimum-blue/20',
                  getTrendColor()
                )}
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            )}
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {metric.label}
            </h3>
          </div>

          {/* Trend indicator */}
          {metric.trend && (
            <motion.div
              className={cn('text-xs font-medium', getTrendColor())}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.3 }}
            >
              {metric.trend === 'up' && '↑'}
              {metric.trend === 'down' && '↓'}
              {metric.trend === 'stable' && '→'}
            </motion.div>
          )}
        </div>

        {/* Metric value */}
        <div className="mb-2">
          <div className="flex items-baseline gap-2">
            {shouldAnimate && isInView && metric.value ? (
              <motion.span className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                {rounded}
              </motion.span>
            ) : (
              <span className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                {formatValue()}
              </span>
            )}
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
              {metric.unit}
            </span>
          </div>
        </div>

        {/* Description */}
        {showDescription && metric.description && (
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
          >
            {metric.description}
          </motion.p>
        )}

        {/* Source indicator (superscript style) */}
        {metric.sourceIds.length > 0 && (
          <motion.div
            className="mt-3 flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
          >
            <span className="text-2xs text-gray-500 dark:text-gray-500">
              Source
            </span>
            {metric.sourceIds.map((id, idx) => (
              <span
                key={id}
                className="text-2xs text-optaimum-blue hover:text-optaimum-blue-dark cursor-pointer"
                title={`View source ${idx + 1}`}
              >
                [{idx + 1}]
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}