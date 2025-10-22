'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'
import type { ChartData } from '@/content/impact'

interface SparklineCardProps {
  chart: ChartData
  className?: string
  height?: number
  showAxis?: boolean
  animate?: boolean
  delay?: number
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg p-3">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {label}
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm text-gray-600 dark:text-gray-400">
            {entry.name}: <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function SparklineCard({
  chart,
  className,
  height = 200,
  showAxis = false,
  animate = true,
  delay = 0
}: SparklineCardProps) {
  const renderChart = () => {
    switch (chart.type) {
      case 'sparkline':
        // Simple sparkline without axes
        return (
          <ResponsiveContainer width="100%" height={100}>
            <AreaChart data={chart.data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0066FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey={Object.keys(chart.data[0])[0]}
                stroke="#0066FF"
                strokeWidth={2}
                fill="url(#sparkGradient)"
                animationDuration={animate ? 1500 : 0}
                animationBegin={delay * 1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        )

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={chart.data} margin={{ top: 20, right: 20, bottom: 20, left: showAxis ? 40 : 0 }}>
              {showAxis && (
                <>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
                  <XAxis
                    dataKey={Object.keys(chart.data[0])[0]}
                    className="text-xs text-gray-600 dark:text-gray-400"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    className="text-xs text-gray-600 dark:text-gray-400"
                    tick={{ fontSize: 12 }}
                  />
                </>
              )}
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey={Object.keys(chart.data[0])[1]}
                fill="#0066FF"
                radius={[8, 8, 0, 0]}
                animationDuration={animate ? 1500 : 0}
                animationBegin={delay * 1000}
              />
              {Object.keys(chart.data[0]).length > 2 && (
                <Bar
                  dataKey={Object.keys(chart.data[0])[2]}
                  fill="#3385FF"
                  radius={[8, 8, 0, 0]}
                  animationDuration={animate ? 1500 : 0}
                  animationBegin={delay * 1000}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        )

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={chart.data} margin={{ top: 20, right: 20, bottom: 20, left: showAxis ? 40 : 0 }}>
              {showAxis && (
                <>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
                  <XAxis
                    dataKey={Object.keys(chart.data[0])[0]}
                    className="text-xs text-gray-600 dark:text-gray-400"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    className="text-xs text-gray-600 dark:text-gray-400"
                    tick={{ fontSize: 12 }}
                  />
                </>
              )}
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey={Object.keys(chart.data[0])[1]}
                stroke="#0066FF"
                strokeWidth={3}
                dot={{ fill: '#0066FF', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
                animationDuration={animate ? 1500 : 0}
                animationBegin={delay * 1000}
              />
            </LineChart>
          </ResponsiveContainer>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      className={cn(
        'bg-white dark:bg-gray-900',
        'border border-gray-200 dark:border-gray-800',
        'rounded-xl p-6',
        'transition-all duration-300',
        'hover:shadow-xl',
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
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {chart.title}
      </h3>

      {/* Chart */}
      <div className="w-full">
        {renderChart()}
      </div>

      {/* Sources */}
      {chart.sourceIds.length > 0 && (
        <div className="mt-4 flex items-center gap-1">
          <span className="text-2xs text-gray-500 dark:text-gray-500">
            Source
          </span>
          {chart.sourceIds.map((id, idx) => (
            <span
              key={id}
              className="text-2xs text-optaimum-blue hover:text-optaimum-blue-dark cursor-pointer"
              title={`View source ${idx + 1}`}
            >
              [{idx + 1}]
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}