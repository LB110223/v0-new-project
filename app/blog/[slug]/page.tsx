import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogArticles, getArticleBySlug, getAllArticleSlugs } from "@/lib/blog-data"
import { ArrowRight, Calendar, Clock, Linkedin, Twitter, Share2, BookOpen } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article non trouvé | Smart Impulsion",
    }
  }

  const baseUrl = "https://www.smart-impulsion.fr"

  return {
    title: `${article.title} | Smart Impulsion`,
    description: article.excerpt,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `${baseUrl}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.dateISO,
      authors: [article.author],
      images: [
        {
          url: article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      siteName: "Smart Impulsion",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`],
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
}

// Fonction pour extraire les titres de sections du contenu
function extractTableOfContents(content: string): { id: string; title: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const toc: { id: string; title: string; level: number }[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const title = match[2].trim()
    const id = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    toc.push({ id, title, level })
  }

  return toc
}

// Fonction pour formater le contenu avec des IDs pour les ancres
function formatContent(content: string): string {
  let formatted = content
    // Ajouter des IDs aux titres H2
    .replace(/^## (.+)$/gm, (_, title) => {
      const id = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      return `<h2 id="${id}" class="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-6 pb-3 border-b border-border">${title}</h2>`
    })
    // Ajouter des IDs aux titres H3
    .replace(/^### (.+)$/gm, (_, title) => {
      const id = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      return `<h3 id="${id}" class="scroll-mt-24 text-xl font-semibold text-foreground mt-10 mb-4">${title}</h3>`
    })
    // Citations en bloc (lignes commençant par >)
    .replace(
      /^> (.+)$/gm,
      '<blockquote class="border-l-4 border-orange-500 pl-6 py-4 my-8 bg-orange-50/50 rounded-r-lg italic text-lg text-foreground/80">$1</blockquote>',
    )
    // Gras
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    // Paragraphes
    .replace(/\n\n(?!<)/g, '</p><p class="text-lg leading-relaxed text-muted-foreground mb-6">')
    // Listes à puces
    .replace(
      /^- (.+)$/gm,
      '<li class="flex items-start gap-3 mb-3"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0"></span><span>$1</span></li>',
    )

  // Envelopper les listes
  formatted = formatted.replace(/(<li[^>]*>.*?<\/li>\n?)+/gs, (match) => {
    return `<ul class="my-6 space-y-1">${match}</ul>`
  })

  return `<p class="text-lg leading-relaxed text-muted-foreground mb-6">${formatted}</p>`
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const toc = extractTableOfContents(article.content)
  const formattedContent = formatContent(article.content)

  // Get related articles (same category, excluding current)
  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2)

  // Si pas assez d'articles de la même catégorie, prendre d'autres articles
  if (relatedArticles.length < 2) {
    const additionalArticles = blogArticles
      .filter((a) => a.slug !== article.slug && !relatedArticles.includes(a))
      .slice(0, 2 - relatedArticles.length)
    relatedArticles.push(...additionalArticles)
  }

  const baseUrl = "https://www.smart-impulsion.fr"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Person",
      name: article.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Smart Impulsion",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${article.slug}`,
    },
    articleSection: article.category,
    wordCount: article.content.split(/\s+/).length,
    timeRequired: `PT${Number.parseInt(article.readTime)}M`,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${baseUrl}/blog/${article.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav aria-label="Fil d'Ariane" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/" className="hover:text-orange-500 transition-colors">
                      Accueil
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/blog" className="hover:text-orange-500 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-foreground font-medium truncate max-w-[200px]">{article.title}</li>
                </ol>
              </nav>

              {/* Category & Reading Time */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <time dateTime={`PT${Number.parseInt(article.readTime)}M`}>{article.readTime}</time>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight text-balance">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">{article.excerpt}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{article.author}</p>
                    <p className="text-sm text-muted-foreground">Co-fondateur</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.dateISO}>Publié le {article.date}</time>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content with Sidebar */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_280px] gap-12 xl:gap-16">
                {/* Main Content */}
                <article className="min-w-0">
                  <div className="prose-custom" dangerouslySetInnerHTML={{ __html: formattedContent }} />

                  {/* Share Section */}
                  <div className="mt-16 pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Share2 className="w-5 h-5" />
                        <span className="font-medium">Partager cet article</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.smart-impulsion.fr/blog/${article.slug}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2.5 rounded-lg hover:bg-[#006399] transition-colors text-sm font-medium"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.smart-impulsion.fr/blog/${article.slug}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors text-sm font-medium"
                        >
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Author Box */}
                  <div className="mt-12 p-8 bg-muted/50 rounded-2xl border border-border">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-1">
                          À propos de l'auteur
                        </p>
                        <h3 className="text-xl font-bold text-foreground mb-2">{article.author}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Co-fondateur de Smart Impulsion, expert en intelligence artificielle et transformation
                          digitale. Passionné par l'accompagnement des PME françaises dans leur adoption de l'IA avec un
                          focus sur le ROI mesurable.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block">
                  <div className="sticky top-24 space-y-8">
                    {/* Table of Contents */}
                    {toc.length > 0 && (
                      <nav className="p-6 bg-muted/30 rounded-xl border border-border">
                        <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground uppercase tracking-wide">
                          <BookOpen className="w-4 h-4" />
                          Sommaire
                        </div>
                        <ul className="space-y-2">
                          {toc.map((item, index) => (
                            <li key={index}>
                              <a
                                href={`#${item.id}`}
                                className={`block text-sm transition-colors hover:text-orange-500 ${
                                  item.level === 3 ? "pl-4 text-muted-foreground" : "font-medium text-foreground/80"
                                }`}
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    )}

                    {/* CTA Box */}
                    <div className="p-6 bg-foreground rounded-xl text-background">
                      <h4 className="font-bold text-lg mb-2">Besoin d'accompagnement ?</h4>
                      <p className="text-sm text-background/70 mb-4">
                        Discutons de vos projets IA et identifions les opportunités pour votre entreprise.
                      </p>
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors w-full justify-center"
                      >
                        Nous contacter
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-2">
                      Continuer la lecture
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Articles similaires</h2>
                  </div>
                  <Link
                    href="/blog"
                    className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-orange-500 transition-colors"
                  >
                    Voir tous les articles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {relatedArticles.map((relatedArticle) => (
                    <Link key={relatedArticle.slug} href={`/blog/${relatedArticle.slug}`} className="group block">
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                          {relatedArticle.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{relatedArticle.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-orange-500 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="sm:hidden inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-orange-500 transition-colors mt-8"
                >
                  Voir tous les articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Transformez votre entreprise avec l'IA
              </h2>
              <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
                Obtenez une évaluation gratuite de vos opportunités et découvrez comment l'IA peut générer un ROI
                concret pour votre activité.
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
