import type { MetadataRoute } from "next"
import { blogArticles } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.smart-impulsion.com"

  // Dates fixes pour éviter que Google voie toutes les pages comme "modifiées aujourd'hui"
  const datePillar = new Date("2026-03-24") // Pages piliers et pages modifiées SEO v2
  const dateModified = new Date("2026-03-23") // Pages existantes modifiées lors du SEO P1/P2
  const dateStatic = new Date("2026-03-01") // Pages statiques rarement modifiées

  // Liste des villes pour les pages de présence locale
  const villes = ["lyon", "paris", "marseille", "bordeaux", "nantes"]

  // Pages principales
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: datePillar,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: dateStatic,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: dateStatic,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified: dateStatic,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/presence-locale`,
      lastModified: dateModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: datePillar,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: dateModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: dateModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const servicesPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services/formation`,
      lastModified: dateModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/audit`,
      lastModified: dateModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/accompagnement`,
      lastModified: dateModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  // Pages de présence locale
  const villesPages: MetadataRoute.Sitemap = villes.map((ville) => ({
    url: `${baseUrl}/presence-locale/${ville}`,
    lastModified: datePillar,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // Pillar pages get higher priority
  const pillarSlugs = ["ia-pour-pme-guide", "roi-intelligence-artificielle-entreprise", "audit-ia-pme-guide-complet"]

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.dateISO || "2026-03-23"),
    changeFrequency: "monthly" as const,
    priority: pillarSlugs.includes(article.slug) ? 0.9 : 0.8,
  }))

  return [...mainPages, ...servicesPages, ...villesPages, ...blogPages]
}
