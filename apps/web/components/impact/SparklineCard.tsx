'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { TrendingUp, TrendingDown, Activity } from 'lucide-react'
import type { ChartData } from '@/content/impact'

interface SparklineCardProps {
  chart: ChartData
  index?: number
  variant?: 'default' | 'compact'
}

export default function SparklineCard({ chart, index = 0, variant = 'default' }: SparklineCardProps) {
  const isSparkline = chart.type === 'sparkline'
  const isBar = chart.type === 'bar'

  // Calculate trend for sparklines
  const calculateTrend = () => {
    if (!isSparkline || !Array.isArray(chart.data)) return 0
    const firstValue = chart.data[0]
    const lastValue = chart.data[chart.data.length - 1]
    return ((lastValue - firstValue) / firstValue) * 100
  }

  const trend = calculateTrend()
  const TrendIcon = trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Activity

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

  // Format data for sparkline
  const sparklineData = isSparkline && Array.isArray(chart.data)
    ? chart.data.map((value, idx) => ({ value, index: idx }))
    : []

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg">
          {isBar ? (
            <>
              <p className="font-semibold">{payload[0].payload.category}</p>
              <p>{payload[0].value} {payload[0].payload.percentage && `(${payload[0].payload.percentage}%)`}</p>
            </>
          ) : isSparkline ? (
            <p className="font-semibold">{payload[0].value}</p>
          ) : (
            <>
              <p className="font-semibold">{payload[0].payload.year || payload[0].payload.category}</p>
              <p>{payload[0].value}{payload[0].payload.adoption ? '%' : ''}</p>
            </>
          )}
        </div>
      )
    }
    return null
  }

  if (variant === 'compact') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-700">{chart.title}</h3>
          {isSparkline && (
            <div className={`flex items-center gap-1 text-xs font-medium
              ${trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-600'}`}>
              <TrendIcon className="h-3 w-3" />
              {Math.abs(trend).toFixed(1)}%
            </div>
          )}
        </div>
        <div className="h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
              <Tooltip content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{chart.title}</h3>
          {isSparkline && (
            <div className={`flex items-center gap-1 mt-1 text-sm font-medium
              ${trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-600'}`}>
              <TrendIcon className="h-4 w-4" />
              {trend > 0 ? '+' : ''}{trend.toFixed(1)}% trend
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          {isBar ? (
            <BarChart data={chart.data} margin={{ top: 10, right: 10, bottom: 30, left: 0 }}>
              <XAxis
                dataKey="category"
                tick={{ fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="hours"
                fill="url(#barGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.6} />
                </linearGradient>
              </defs>
            </BarChart>
          ) : chart.type === 'line' ? (
            <LineChart data={chart.data} margin={{ top: 10, right: 10, bottom: 30, left: 0 }}>
              <XAxis
                dataKey="year"
                tick={{ fontSize: 11 }}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="adoption"
                stroke="url(#lineGradient)"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </LineChart>
          ) : (
            <LineChart data={sparklineData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#sparkGradient)"
                strokeWidth={3}
                dot={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="sparkGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Footer note */}
      {chart.sourceIds.length > 0 && (
        <p className="mt-4 text-xs text-gray-500">
          Source data from {chart.sourceIds.length} research {chart.sourceIds.length > 1 ? 'studies' : 'study'}
        </p>
      )}
    </motion.div>
  )
}