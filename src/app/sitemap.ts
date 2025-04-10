import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kallolsfolio.com'
  
  // Define your routes here
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Additional dynamic routes can be added here
  // For example, portfolio projects, blog posts, etc.
  
  return routes
} 