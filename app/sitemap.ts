import type { MetadataRoute } from "next"
import { blogArticles } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.smart-impulsion.fr"

  // Liste des villes pour les pages de présence locale
  const villes = ["lyon", "paris", "marseille", "bordeaux", "nantes"]

  // Pages principales
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/presence-locale`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  // Pages de présence locale
  const villesPages: MetadataRoute.Sitemap = villes.map((ville) => ({
    url: `${baseUrl}/presence-locale/${ville}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.dateISO || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...mainPages, ...villesPages, ...blogPages]
}
