import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogArticles } from "@/lib/blog-data"
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react"

const baseUrl = "https://www.smart-impulsion.fr"

export const metadata: Metadata = {
  title: "Blog | Smart Impulsion - Actualités IA et Transformation Digitale",
  description:
    "Découvrez nos articles sur l'intelligence artificielle, le ROI, l'automatisation et la transformation digitale des entreprises françaises.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "Blog | Smart Impulsion - Actualités IA et Transformation Digitale",
    description:
      "Analyses approfondies, retours d'expérience et conseils pratiques pour réussir votre transformation IA.",
    type: "website",
    url: `${baseUrl}/blog`,
    siteName: "Smart Impulsion",
    locale: "fr_FR",
    images: [
      {
        url: `${baseUrl}/ai-business-concept.png`,
        width: 1200,
        height: 630,
        alt: "Blog Smart Impulsion - IA pour les entreprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Smart Impulsion",
    description:
      "Analyses approfondies, retours d'expérience et conseils pratiques pour réussir votre transformation IA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BlogPage() {
  const featuredArticle = blogArticles[0]
  const otherArticles = blogArticles.slice(1)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Smart Impulsion",
    description: "Actualités et conseils sur l'IA pour les entreprises françaises",
    url: `${baseUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Smart Impulsion",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.dateISO,
      author: {
        "@type": "Person",
        name: article.author,
      },
      url: `${baseUrl}/blog/${article.slug}`,
      image: article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-sm font-medium tracking-widest text-orange-500 uppercase mb-4">Le Blog</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Insights & Expertises
                <br />
                <span className="text-muted-foreground">sur l'IA en entreprise</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Analyses approfondies, retours d'expérience et conseils pratiques pour réussir votre transformation IA.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredArticle.slug}`} className="group block">
              <article className="relative rounded-2xl overflow-hidden bg-foreground">
                <div className="grid lg:grid-cols-2 min-h-[500px]">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent lg:bg-gradient-to-r" />
                  </div>
                  {/* Content */}
                  <div className="relative p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        À la une
                      </span>
                      <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-white/70 text-lg mb-8 line-clamp-3">{featuredArticle.excerpt}</p>
                    <div className="flex items-center gap-6 text-white/60 text-sm">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={featuredArticle.dateISO}>{featuredArticle.date}</time>
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <div className="mt-8">
                      <span className="inline-flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-4 transition-all">
                        Lire l'article
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Divider */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <div className="h-px bg-border flex-1" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Tous les articles
              </span>
              <div className="h-px bg-border flex-1" />
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {otherArticles.map((article, index) => (
                <article key={article.slug} className="group">
                  <Link href={`/blog/${article.slug}`} className="block">
                    {/* Image */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                          {article.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <span className="inline-flex items-center gap-1 text-orange-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          Lire
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 uppercase tracking-widest mb-4">
                    <TrendingUp className="w-4 h-4" />
                    Restez informé
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ne manquez aucun article</h2>
                  <p className="text-muted-foreground text-lg">
                    Recevez nos analyses et conseils directement dans votre boîte mail. Pas de spam, uniquement du
                    contenu de qualité.
                  </p>
                </div>
                <div>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors whitespace-nowrap"
                    >
                      S'abonner
                    </button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-3">
                    En vous inscrivant, vous acceptez notre politique de confidentialité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">Prêt à passer à l'action ?</h2>
              <p className="text-lg text-background/70 mb-8">
                Discutons de vos projets IA et identifions ensemble les opportunités de croissance pour votre
                entreprise.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Demander une évaluation gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
