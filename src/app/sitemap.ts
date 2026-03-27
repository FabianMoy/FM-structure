import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fmstructure.com',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}