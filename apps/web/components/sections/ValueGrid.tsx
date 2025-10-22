import { Clock, TrendingUp, Shield, Puzzle } from 'lucide-react'
import homeContent from '@/content/home.json'

const iconMap: { [key: string]: any } = {
  Clock,
  TrendingUp,
  Shield,
  Puzzle
}

export function ValueGrid() {
  const { values } = homeContent

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon] || Clock
            return (
              <div key={index} className="relative rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-optaimum-blue/10">
                  <Icon className="h-6 w-6 text-optaimum-blue" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}