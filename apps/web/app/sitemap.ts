import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.optaimum.com'
  const lastModified = new Date()

  const routes = [
    '',
    '/solutions',
    '/pricing',
    '/contact',
    '/about',
    '/case-study',
    '/case-studies',
    '/book',
  ]

  const mainRoutes = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Legal pages with lower priority
  const legalRoutes = [
    '/privacy',
    '/terms',
    '/cookies',
    '/dpa',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  // Add dynamic routes if needed (e.g., solution pages, case studies)
  // These would typically come from a database or CMS
  const dynamicRoutes: MetadataRoute.Sitemap = []

  return [...mainRoutes, ...legalRoutes, ...dynamicRoutes]
}