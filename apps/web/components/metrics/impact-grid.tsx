'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Metric } from '@/content/impact'
import { MetricCard } from './metric-card'

interface ImpactGridProps {
  metrics: Metric[]
  className?: string
  columns?: 2 | 3 | 4
  featured?: string[] // IDs of metrics to feature prominently
  animate?: boolean
}

export function ImpactGrid({
  metrics,
  className,
  columns = 3,
  featured = [],
  animate = true
}: ImpactGridProps) {
  // Separate featured and regular metrics
  const featuredMetrics = metrics.filter(m => featured.includes(m.id))
  const regularMetrics = metrics.filter(m => !featured.includes(m.id))

  // Reorder: featured first, then regular
  const orderedMetrics = [...featuredMetrics, ...regularMetrics]

  // Determine grid columns based on prop
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <motion.div
      className={cn(
        'grid gap-6',
        gridCols[columns],
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {orderedMetrics.map((metric, index) => {
        const isFeatured = featured.includes(metric.id)

        return (
          <div
            key={metric.id}
            className={cn(
              // Featured metrics can span 2 columns on larger screens
              isFeatured && columns >= 3 && 'md:col-span-2 lg:col-span-1',
              // First featured metric could be larger
              isFeatured && index === 0 && columns >= 3 && 'lg:col-span-2 lg:row-span-2'
            )}
          >
            <MetricCard
              metric={metric}
              animate={animate}
              delay={index * 0.1}
              showDescription={isFeatured || columns <= 2}
              className={cn(
                isFeatured && index === 0 && 'lg:h-full',
                isFeatured && 'border-optaimum-blue/20 bg-gradient-to-br from-optaimum-blue/5 to-transparent'
              )}
            />
          </div>
        )
      })}
    </motion.div>
  )
}