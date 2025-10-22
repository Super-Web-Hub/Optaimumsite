'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight, TrendingUp } from 'lucide-react'
import type { BeforeAfter } from '@/content/impact'

interface BeforeAfterCardProps {
  scenario: BeforeAfter
  className?: string
  animate?: boolean
  delay?: number
}

export function BeforeAfterCard({
  scenario,
  className,
  animate = true,
  delay = 0
}: BeforeAfterCardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white dark:bg-gray-900',
        'border border-gray-200 dark:border-gray-800',
        'rounded-xl p-6',
        'transition-all duration-300',
        'hover:shadow-xl hover:scale-[1.02]',
        'hover:border-optaimum-blue/30',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {scenario.title}
      </h3>

      {/* Before/After Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
        {/* Before State */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Before
            </span>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mt-2">
              {scenario.before.metric}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {scenario.before.description}
            </p>
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.4, type: 'spring', stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-optaimum-blue to-optaimum-blue-light text-white rounded-full p-3">
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Mobile Arrow */}
        <motion.div
          className="md:hidden flex items-center justify-center my-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.4, type: 'spring', stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-optaimum-blue to-optaimum-blue-light text-white rounded-full p-2 rotate-90">
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* After State */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.3 }}
        >
          <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-4 border border-success/20">
            <span className="text-xs font-medium text-success-dark uppercase tracking-wider">
              After
            </span>
            <p className="text-2xl font-bold text-success-dark mt-2">
              {scenario.after.metric}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {scenario.after.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Improvement Badge */}
      <motion.div
        className="mt-6 flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.5 }}
      >
        <div className="inline-flex items-center gap-2 bg-success/10 text-success-dark px-4 py-2 rounded-full">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">
            {scenario.improvement}
          </span>
        </div>
      </motion.div>

      {/* Sources */}
      {scenario.sourceIds.length > 0 && (
        <motion.div
          className="mt-4 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.6 }}
        >
          <span className="text-2xs text-gray-500 dark:text-gray-500">
            Source
          </span>
          {scenario.sourceIds.map((id, idx) => (
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
    </motion.div>
  )
}

interface BeforeAfterGridProps {
  scenarios: BeforeAfter[]
  className?: string
  animate?: boolean
}

export function BeforeAfterGrid({
  scenarios,
  className,
  animate = true
}: BeforeAfterGridProps) {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-6', className)}>
      {scenarios.map((scenario, index) => (
        <BeforeAfterCard
          key={scenario.id}
          scenario={scenario}
          animate={animate}
          delay={index * 0.1}
        />
      ))}
    </div>
  )
}