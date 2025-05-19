import Head from "next/head"

interface SeoMetaProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: string
}

export function SeoMeta({
  title = "Smart Impulsion | IA à ROI mesurable pour entreprises françaises",
  description = "Smart Impulsion transforme votre entreprise avec des solutions d'intelligence artificielle garantissant un retour sur investissement mesurable.",
  keywords = "intelligence artificielle, IA, ROI mesurable, transformation digitale, machine learning",
  ogImage = "/og-image.png",
  ogUrl = "https://www.smart-impulsion.fr",
  twitterCard = "summary_large_image",
}: SeoMetaProps) {
  return (
    <Head>
      {/* Balises meta de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Autres balises meta importantes */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Smart Impulsion" />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Head>
  )
}
