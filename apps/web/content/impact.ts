export interface Source {
  id: string
  label: string
  url: string
  lastChecked: string
}

export interface Metric {
  id: string
  label: string
  value?: number
  valueRange?: [number, number]
  unit: string
  sourceIds: string[]
  description?: string
  trend?: 'up' | 'down' | 'stable'
  icon?: string
}

export interface ChartData {
  title: string
  type: 'bar' | 'line' | 'sparkline'
  data: any[]
  sourceIds: string[]
}

export interface BeforeAfter {
  id: string
  title: string
  before: {
    metric: string
    description: string
  }
  after: {
    metric: string
    description: string
  }
  improvement: string
  sourceIds: string[]
}

// Research sources with timestamps
export const sources: Source[] = [
  {
    id: 'mckinsey2023',
    label: 'McKinsey (2023)',
    url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier',
    lastChecked: '2025-10-13'
  },
  {
    id: 'mckinsey2024',
    label: 'McKinsey (2024)',
    url: 'https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai-and-raise-skills-in-europe-and-beyond',
    lastChecked: '2025-10-13'
  },
  {
    id: 'salesforce2024',
    label: 'Salesforce SMBs (2024)',
    url: 'https://www.salesforce.com/news/stories/smbs-ai-trends-2025/',
    lastChecked: '2025-10-13'
  },
  {
    id: 'sbe2023',
    label: 'SBE Council (2023)',
    url: 'https://sbecouncil.org/wp-content/uploads/2023/10/SBE-Small-Business-AI-Survey-Oct-2023-FINAL.pdf',
    lastChecked: '2025-10-13'
  },
  {
    id: 'intuit2024',
    label: 'Intuit QuickBooks (2024)',
    url: 'https://quickbooks.intuit.com/r/enterprise/business-solutions-survey-2024/',
    lastChecked: '2025-10-13'
  },
  {
    id: 'reuters2025',
    label: 'Reuters/Qonto SMEs (2025)',
    url: 'https://www.reuters.com/business/european-small-businesses-rush-into-ai-without-basic-digital-tools-study-shows-2025-10-08/',
    lastChecked: '2025-10-13'
  }
]

// Key metrics from research
export const metrics: Metric[] = [
  {
    id: 'hoursSaved',
    label: 'Hours saved per week',
    valueRange: [13, 25],
    unit: 'hrs',
    sourceIds: ['sbe2023', 'intuit2024'],
    description: 'Time saved through AI automation, reallocated to growth tasks',
    trend: 'up',
    icon: 'Clock'
  },
  {
    id: 'revenueLift',
    label: 'SMBs reporting revenue lift',
    value: 91,
    unit: '%',
    sourceIds: ['salesforce2024'],
    description: 'Percentage of SMBs using AI that report revenue increases',
    trend: 'up',
    icon: 'TrendingUp'
  },
  {
    id: 'automatableTime',
    label: 'Work time automatable',
    valueRange: [60, 70],
    unit: '%',
    sourceIds: ['mckinsey2023', 'mckinsey2024'],
    description: 'Portion of employee time that can be automated with current technology',
    trend: 'up',
    icon: 'Zap'
  },
  {
    id: 'fteReplacement',
    label: 'FTE equivalent saved',
    valueRange: [1, 2],
    unit: 'employees',
    sourceIds: ['sbe2023'],
    description: 'Full-time employee equivalents replaced by AI tools',
    trend: 'stable',
    icon: 'Users'
  },
  {
    id: 'adoptionRate',
    label: 'SMBs adopting AI',
    value: 73,
    unit: '%',
    sourceIds: ['salesforce2024'],
    description: 'Percentage of small businesses actively using AI tools',
    trend: 'up',
    icon: 'Rocket'
  },
  {
    id: 'roiTimeframe',
    label: 'Time to positive ROI',
    valueRange: [30, 90],
    unit: 'days',
    sourceIds: ['sbe2023', 'intuit2024'],
    description: 'Average time for SMBs to see positive returns from AI investment',
    trend: 'down',
    icon: 'DollarSign'
  }
]

// Chart data for visualizations
export const timeSavingsChart: ChartData = {
  title: 'Where SMBs Save Time with AI',
  type: 'bar',
  data: [
    { category: 'Customer Intake', hours: 6, percentage: 24 },
    { category: 'Scheduling', hours: 5, percentage: 20 },
    { category: 'Email & Inbox', hours: 7, percentage: 28 },
    { category: 'Reporting', hours: 4, percentage: 16 },
    { category: 'Data Entry', hours: 3, percentage: 12 }
  ],
  sourceIds: ['sbe2023', 'intuit2024']
}

export const adoptionTrendChart: ChartData = {
  title: 'AI Adoption Trend Among SMBs',
  type: 'line',
  data: [
    { year: '2021', adoption: 28 },
    { year: '2022', adoption: 42 },
    { year: '2023', adoption: 58 },
    { year: '2024', adoption: 73 },
    { year: '2025 (projected)', adoption: 85 }
  ],
  sourceIds: ['salesforce2024', 'mckinsey2024']
}

export const revenueImpactChart: ChartData = {
  title: 'Revenue Impact Distribution',
  type: 'sparkline',
  data: [2, 3, 5, 8, 12, 15, 18, 22, 25, 28, 32, 35],
  sourceIds: ['salesforce2024']
}

// Before/After scenarios
export const beforeAfterScenarios: BeforeAfter[] = [
  {
    id: 'noshow',
    title: 'Appointment No-Shows',
    before: {
      metric: '18-32%',
      description: 'No-show rate without reminders'
    },
    after: {
      metric: '5-8%',
      description: 'With AI-powered multi-channel reminders'
    },
    improvement: '75% reduction',
    sourceIds: ['intuit2024']
  },
  {
    id: 'leadresponse',
    title: 'Lead Response Time',
    before: {
      metric: '24-48 hrs',
      description: 'Manual lead assignment and follow-up'
    },
    after: {
      metric: '<1 hour',
      description: 'Automated routing and initial response'
    },
    improvement: '95% faster',
    sourceIds: ['salesforce2024']
  },
  {
    id: 'reporting',
    title: 'Monthly Reporting',
    before: {
      metric: '2-3 days',
      description: 'Manual data compilation and analysis'
    },
    after: {
      metric: '< 1 hour',
      description: 'Automated dashboards and insights'
    },
    improvement: '90% time saved',
    sourceIds: ['intuit2024', 'sbe2023']
  }
]

// Key insights and caveats
export const insights = {
  primaryBenefit: 'SMBs using AI report an average of 20 hours per week saved, allowing focus on growth and customer relationships.',
  implementation: 'Success requires proper training and gradual implementation. Start with one high-impact workflow.',
  caveat: 'Many SMBs rush to adopt AI without basic digital infrastructure in place, reducing effectiveness.',
  caveatSource: 'reuters2025'
}