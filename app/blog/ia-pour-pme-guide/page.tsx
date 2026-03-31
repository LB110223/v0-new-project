import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, BookOpen, Linkedin, Twitter, Share2, CheckCircle2, AlertTriangle, Lightbulb, ChevronRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const baseUrl = "https://www.smart-impulsion.com"

export const metadata: Metadata = {
  title: "IA pour PME : par où commencer ? Guide 2026 | Smart Impulsion",
  description:
    "Comment utiliser l'IA en PME sans équipe technique ? Cas d'usage concrets, budget, ROI attendu et roadmap type. De 0 à vos premiers gains en 4 semaines.",
  authors: [{ name: "Laurent Bouzon" }],
  alternates: {
    canonical: `${baseUrl}/blog/ia-pour-pme-guide`,
  },
  openGraph: {
    title: "L'IA pour les PME : par où commencer ? Guide complet pour dirigeants",
    description:
      "Démystification, cas d'usage par secteur, budget nécessaire, ROI attendu et roadmap type. Tout ce qu'un dirigeant de PME doit savoir pour démarrer avec l'IA.",
    type: "article",
    publishedTime: "2026-03-23",
    authors: ["Laurent Bouzon"],
    images: [
      {
        url: `${baseUrl}/ia-pme-guide-hero.png`,
        width: 1200,
        height: 630,
        alt: "IA pour PME : guide pratique 2026",
      },
    ],
    siteName: "Smart Impulsion",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA pour PME : par où commencer ? Guide pratique 2026",
    description:
      "Cas d'usage concrets, budget, ROI attendu et roadmap type. De 0 à vos premiers gains en 4 semaines.",
    images: [`${baseUrl}/ia-pme-guide-hero.png`],
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

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function IAParPMEGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "L'IA pour les PME : par où commencer ? Le guide pratique pour dirigeants",
    description:
      "Comment utiliser l'IA en PME sans équipe technique ? Cas d'usage concrets, budget, ROI attendu et roadmap type. De 0 à vos premiers gains en 4 semaines.",
    image: `${baseUrl}/ia-pme-guide-hero.png`,
    datePublished: "2026-03-23",
    dateModified: "2026-03-23",
    author: {
      "@type": "Person",
      name: "Laurent Bouzon",
      url: `${baseUrl}/a-propos`,
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
      "@id": `${baseUrl}/blog/ia-pour-pme-guide`,
    },
    articleSection: "Guide / Démarrage",
    wordCount: 2800,
    timeRequired: "PT14M",
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Par où commencer avec l'IA quand on est une PME ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Par le processus qui coûte le plus cher en temps humain. Pas par la technologie. Identifiez la tâche répétitive que vos équipes font à la main chaque jour (saisie, prospection, reporting). Faites un audit IA rapide de 2-3 jours pour chiffrer le ROI des meilleurs leviers. Déployez le premier quick win en 4 semaines. Budget : 5 000 à 15 000 euros pour un premier projet IA en PME.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il des compétences techniques pour utiliser l'IA ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, pour la majorité des cas. En 2026, les outils d'IA générative (ChatGPT, Claude, Mistral) sont accessibles à des profils non techniques pour 20 à 200 euros par mois. Pour 80% des cas d'usage en PME — rédaction, prospection, reporting, tri de documents — aucune compétence de développement n'est nécessaire. Ce qu'il faut : une bonne connaissance de vos processus et une formation de 1 à 2 semaines.",
        },
      },
      {
        "@type": "Question",
        name: "L'IA va-t-elle remplacer mes salariés ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Sur toutes les missions déployées par Smart Impulsion, zéro poste supprimé. L'IA ne remplace pas les gens. Elle libère du temps pour le travail à valeur ajoutée. Un commercial qui passe 2 heures de moins sur de la saisie, c'est 2 heures de plus sur de la relation client. Le résultat : +18% de performance commerciale en moyenne.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le budget minimum pour un premier projet IA en PME ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un premier projet IA en PME démarre entre 5 000 et 15 000 euros en forfait, incluant l'audit, le déploiement d'un premier cas d'usage et la formation de l'équipe. À cela s'ajoutent les outils IA à 20-200 euros par mois par utilisateur. Le programme Diag Data IA de BPI France peut cofinancer 25% du diagnostic.",
        },
      },
      {
        "@type": "Question",
        name: "L'IA est-elle adaptée à mon secteur d'activité ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. L'IA n'est pas un secteur, c'est un levier. On mesure des résultats chez des industriels, des distributeurs, des sociétés de services, du nettoyage industriel. Le point commun : des processus répétitifs que des humains font à la main. Si vous avez des tâches à fort volume qui mangent du temps, l'IA peut les automatiser.",
        },
      },
    ],
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "IA pour PME : guide pratique",
        item: `${baseUrl}/blog/ia-pour-pme-guide`,
      },
    ],
  }

  const tocItems = [
    { id: "demystification", title: "Démystification pour dirigeants", level: 2 },
    { id: "cas-usage-concrets", title: "Cas d'usage concrets par secteur", level: 2 },
    { id: "budget", title: "Quel budget pour commencer ?", level: 2 },
    { id: "roi-attendu", title: "Le ROI attendu", level: 2 },
    { id: "roadmap", title: "La roadmap type", level: 2 },
    { id: "erreurs", title: "Les 6 erreurs à éviter", level: 2 },
    { id: "smart-impulsion", title: "Comment Smart Impulsion accompagne", level: 2 },
    { id: "faq", title: "FAQ", level: 2 },
  ]

  return (
    <>
      <JsonLd data={articleJsonLd as unknown as Record<string, unknown>} />
      <JsonLd data={faqJsonLd as unknown as Record<string, unknown>} />
      <JsonLd data={breadcrumbJsonLd as unknown as Record<string, unknown>} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav aria-label="Fil d'Ariane" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-background/50">
                  <li><Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link></li>
                  <li>/</li>
                  <li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
                  <li>/</li>
                  <li className="text-background/80">IA pour PME</li>
                </ol>
              </nav>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Guide complet
                </span>
                <span className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full">
                  14 min de lecture
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-[1.1] tracking-tight">
                L&apos;IA pour les PME :<br />
                <span className="text-orange-400">par où commencer ?</span>
              </h1>

              <p className="text-xl text-background/70 mb-8 leading-relaxed max-w-3xl">
                Le guide pratique pour dirigeants. Pas de jargon, pas de slides. Des chiffres, des cas concrets, et une roadmap pour obtenir vos premiers résultats en 4 semaines.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    L
                  </div>
                  <div>
                    <p className="font-semibold text-background">Laurent Bouzon</p>
                    <p className="text-sm text-background/50">Fondateur & CEO</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-background/50">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2026-03-23">23 mars 2026</time>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats Bar */}
        <section className="py-8 bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-orange-700">-32%</p>
                <p className="text-sm text-muted-foreground mt-1">Temps opérationnel</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-orange-700">+18%</p>
                <p className="text-sm text-muted-foreground mt-1">Performance commerciale</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">4 sem.</p>
                <p className="text-sm text-muted-foreground mt-1">Premiers résultats</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">80%</p>
                <p className="text-sm text-muted-foreground mt-1">Sans compétence tech</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[40/21] w-full overflow-hidden rounded-xl mb-8">
                <Image
                  src="/ia-pme-guide-hero.png"
                  alt="Infographie : guide IA pour PME en 4 étapes - identifier, tester, déployer, mesurer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content with Sidebar */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_280px] gap-12 xl:gap-16">
                {/* Main Content */}
                <article className="min-w-0">
                  <div className="max-w-[720px]">

                    {/* Introduction */}
                    <div className="text-lg leading-[1.8] text-muted-foreground mb-12 space-y-4">
                      <p>
                        Tout le monde vous parle d&apos;IA. Les conférences, les fournisseurs, les médias. Mais personne ne vous dit concrètement : <strong className="text-foreground">par où commencer quand on est une PME de 30 salariés sans équipe tech ?</strong>
                      </p>
                      <p>
                        On va être direct : le concurrent numéro 1 des PME françaises face à l&apos;intelligence artificielle, ce n&apos;est pas la Chine. Ce n&apos;est pas les GAFAM. <strong className="text-foreground">C&apos;est l&apos;inaction.</strong> Pendant que vous hésitez, vos concurrents automatisent leur prospection, leur saisie de commandes, leur reporting. Et ils prennent de l&apos;avance — pas dans 5 ans, maintenant.
                      </p>
                      <p>
                        La bonne nouvelle ? Vous n&apos;avez pas besoin d&apos;un data scientist. Vous n&apos;avez pas besoin de 200 000 euros. Et vous n&apos;avez pas besoin de tout changer. <strong className="text-foreground">80% des cas d&apos;usage de l&apos;IA en PME ne requièrent ni développeur ni compétence technique particulière.</strong>
                      </p>
                    </div>

                    {/* Section 1 : Démystification */}
                    <h2 id="demystification" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      L&apos;IA en PME : démystification pour dirigeants pressés
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
                      Ce que l&apos;IA fait vraiment (et ce qu&apos;elle ne fait pas)
                    </h3>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      Concrètement, l&apos;intelligence artificielle pour une PME, ça fait trois choses :
                    </p>
                    <ul className="space-y-4 my-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">Automatiser les tâches répétitives.</strong>
                          <span className="text-muted-foreground"> Saisie de commandes, tri de documents, prospection, relances — tout ce que vos équipes font à la main et qui mange des heures chaque semaine.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">Générer du contenu.</strong>
                          <span className="text-muted-foreground"> Articles, emails commerciaux, fiches produit, comptes-rendus. Ce qui prenait une journée prend une heure.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">Analyser des données.</strong>
                          <span className="text-muted-foreground"> Prévisions de ventes, scoring de clients, détection d&apos;anomalies. Des décisions basées sur des chiffres, pas sur des intuitions.</span>
                        </div>
                      </li>
                    </ul>

                    {/* Callout box */}
                    <div className="bg-muted/50 border border-border rounded-xl p-6 my-8">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground mb-1">Ce que l&apos;IA ne fait pas</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Remplacer vos équipes. Sur toutes les missions Smart Impulsion, <strong className="text-foreground">zéro poste supprimé</strong>. L&apos;IA libère du temps pour le travail qui compte. Vos commerciaux passent 2 heures de moins sur de la saisie et 2 heures de plus sur du closing.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
                      Les 3 familles d&apos;IA utiles pour une PME
                    </h3>
                    <div className="space-y-6 my-6">
                      <div className="border border-border rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">1</span>
                          <h4 className="font-semibold text-foreground">L&apos;IA générative (ChatGPT, Claude, Mistral)</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Rédaction, synthèse, chatbot client, aide à la décision. C&apos;est la plus accessible : résultats dès le jour 1, coût de 20 à 30 euros par mois par utilisateur. C&apos;est le quick win le plus immédiat pour toute PME.
                        </p>
                      </div>
                      <div className="border border-border rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">2</span>
                          <h4 className="font-semibold text-foreground">L&apos;IA d&apos;automatisation (agents IA, workflows)</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Prospection automatisée, traitement de commandes, tri de réclamations. C&apos;est là que les gains de temps massifs se produisent : <strong className="text-foreground">-12 heures par semaine</strong> sur la saisie de commandes chez certains de nos clients.
                        </p>
                      </div>
                      <div className="border border-border rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">3</span>
                          <h4 className="font-semibold text-foreground">L&apos;IA prédictive (machine learning)</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Prévision de ventes, scoring crédit, maintenance prédictive. Plus puissante, mais elle demande des données historiques. À déployer en phase 2, une fois que les quick wins sont validés.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
                      Non, vous n&apos;avez pas besoin d&apos;une équipe technique
                    </h3>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      C&apos;est l&apos;objection qu&apos;on entend le plus souvent. &quot;On n&apos;a pas de développeur, on ne peut pas faire de l&apos;IA.&quot; Faux.
                    </p>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      <strong className="text-foreground">80% des cas d&apos;usage de l&apos;IA en PME ne requièrent ni data scientist ni développeur.</strong> Les outils actuels sont conçus pour des profils métier : un commercial peut utiliser l&apos;IA pour prospecter, un comptable pour automatiser du rapprochement, un RH pour trier des candidatures.
                    </p>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      Ce qu&apos;il faut vraiment : comprendre vos processus (quelles tâches mangent le plus de temps), un bon cadrage (identifier les 3 meilleurs leviers), et une <Link href="/services/formation" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30">formation de 1 à 2 semaines</Link> pour vos équipes.
                    </p>

                    {/* Section 2 : Cas d'usage concrets */}
                    <h2 id="cas-usage-concrets" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      Les cas d&apos;usage concrets de l&apos;IA en PME (par secteur)
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Industrie et manufacturing</h3>
                    <ul className="space-y-3 my-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Contrôle qualité automatisé.</strong> Détection de défauts par vision IA. Ce qui était fait à l&apos;oeil humain avec un taux d&apos;erreur de 5-10% passe à un taux de détection quasi parfait.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Maintenance prédictive.</strong> L&apos;IA anticipe les pannes avant qu&apos;elles n&apos;arrêtent la production.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Optimisation supply chain.</strong> +15 à 20% de précision sur les prévisions de ventes.</p>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mb-6">Budget type pour un premier déploiement : <strong className="text-foreground">10 000 à 30 000 euros.</strong></p>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Commerce et distribution</h3>
                    <ul className="space-y-3 my-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Prospection commerciale automatisée.</strong> Vélocité multipliée par 3 à 4. Mesuré chez Lyko et chez Bio Propreté Services.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Gestion des commandes et devis.</strong> Automatisation de la saisie : -12 heures par semaine libérées.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Chatbot service client.</strong> Réponses 24/7 sur les questions fréquentes.</p>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mb-6">Budget type : <strong className="text-foreground">5 000 à 15 000 euros.</strong></p>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Services aux entreprises</h3>
                    <ul className="space-y-3 my-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Génération de contenu marketing.</strong> Vélocité multipliée par 5 — mesuré chez Lyko.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Gestion des réclamations.</strong> Catégorisation automatique, zéro perte d&apos;information.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Reporting et tableaux de bord.</strong> Synthèses automatiques. Fini les 3 heures de consolidation Excel chaque lundi matin.</p>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mb-6">Budget type : <strong className="text-foreground">5 000 à 15 000 euros.</strong></p>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Finance et assurance</h3>
                    <ul className="space-y-3 my-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Rapprochement comptable automatisé.</strong> 2 heures au lieu de 2 jours par mois.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Scoring crédit et détection de fraude.</strong> Décisions plus rapides, moins de risque.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                        <p className="text-muted-foreground"><strong className="text-foreground">Analyse de documents contractuels.</strong> 50 pages de contrat synthétisées en 3 minutes.</p>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mb-8">Budget type : <strong className="text-foreground">10 000 à 20 000 euros.</strong></p>

                    {/* Tableau récapitulatif */}
                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">
                      Tableau récapitulatif — Les cas d&apos;usage les plus rentables en PME
                    </h3>
                    <div className="overflow-x-auto -mx-4 px-4 my-6">
                      <table className="w-full text-sm border-collapse min-w-[600px]">
                        <thead>
                          <tr className="border-b-2 border-orange-500">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Cas d&apos;usage</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Secteurs</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Gain typique</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Budget</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Complexité</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-4 text-foreground font-medium">Prospection outbound</td>
                            <td className="py-3 px-4 text-muted-foreground">Tous</td>
                            <td className="py-3 px-4 text-orange-700 font-semibold">Vélocité x3-4</td>
                            <td className="py-3 px-4 text-muted-foreground">5-15K</td>
                            <td className="py-3 px-4"><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Faible</span></td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-4 text-foreground font-medium">Saisie commandes</td>
                            <td className="py-3 px-4 text-muted-foreground">Commerce, industrie</td>
                            <td className="py-3 px-4 text-orange-700 font-semibold">-12h/semaine</td>
                            <td className="py-3 px-4 text-muted-foreground">5-10K</td>
                            <td className="py-3 px-4"><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Faible</span></td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-4 text-foreground font-medium">Création de contenu</td>
                            <td className="py-3 px-4 text-muted-foreground">Tous</td>
                            <td className="py-3 px-4 text-orange-700 font-semibold">Vélocité x5</td>
                            <td className="py-3 px-4 text-muted-foreground">3-8K</td>
                            <td className="py-3 px-4"><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Faible</span></td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-4 text-foreground font-medium">Gestion réclamations</td>
                            <td className="py-3 px-4 text-muted-foreground">Services</td>
                            <td className="py-3 px-4 text-orange-700 font-semibold">Zéro perte info</td>
                            <td className="py-3 px-4 text-muted-foreground">5-15K</td>
                            <td className="py-3 px-4"><span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Moyenne</span></td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-4 text-foreground font-medium">Contrôle qualité</td>
                            <td className="py-3 px-4 text-muted-foreground">Industrie</td>
                            <td className="py-3 px-4 text-orange-700 font-semibold">Détection auto</td>
                            <td className="py-3 px-4 text-muted-foreground">10-30K</td>
                            <td className="py-3 px-4"><span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Moyenne</span></td>
                          </tr>
                          <tr className="hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-4 text-foreground font-medium">Prévision de ventes</td>
                            <td className="py-3 px-4 text-muted-foreground">Commerce, industrie</td>
                            <td className="py-3 px-4 text-orange-700 font-semibold">+15-20% précision</td>
                            <td className="py-3 px-4 text-muted-foreground">10-20K</td>
                            <td className="py-3 px-4"><span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Élevée</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Mid-article CTA */}
                    <div className="my-12 p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl">
                      <p className="font-bold text-foreground text-lg mb-2">Découvrez les 3 quick wins IA de votre entreprise</p>
                      <p className="text-muted-foreground mb-4">Évaluation gratuite en 3 jours. On identifie les leviers les plus rentables pour votre PME.</p>
                      <Link
                        href="/services/audit"
                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm"
                      >
                        Demander mon évaluation gratuite
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Section 3 : Budget */}
                    <h2 id="budget" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      Quel budget pour commencer avec l&apos;IA en PME ?
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Les outils IA : 20 à 200 euros par mois par utilisateur</h3>
                    <ul className="space-y-2 my-4">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">ChatGPT Team</strong> : environ 25 euros/mois/utilisateur</p></li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">Claude Business</strong> : 25 à 30 euros/mois/utilisateur</p></li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">Outils d&apos;automatisation</strong> (Make, Zapier) : 20 à 100 euros/mois</p></li>
                    </ul>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-6">
                      Pour une équipe de 5 personnes, comptez 150 à 500 euros par mois en licences. C&apos;est le coût d&apos;un logiciel classique.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">L&apos;accompagnement : 5 000 à 30 000 euros en forfait</h3>
                    <ul className="space-y-2 my-4">
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground"><Link href="/services/audit" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30 font-semibold">Audit IA Express</Link> : gratuit à 2 000 euros (2-3 jours). Le point de départ.</p></li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground"><Link href="/services/formation" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30 font-semibold">Smart Training</Link> (formation équipe) : 3 000 à 8 000 euros.</p></li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">Smart Analyse</strong> (audit complet + roadmap IA) : 5 000 à 15 000 euros.</p></li>
                      <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground"><Link href="/services/accompagnement" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30 font-semibold">Smart Action</Link> (déploiement) : 10 000 à 30 000 euros.</p></li>
                    </ul>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-6">
                      Forfait, pas du TJM opaque. Vous savez ce que ça coûte avant de démarrer.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Les aides et subventions</h3>
                    <div className="bg-muted/50 border border-border rounded-xl p-6 my-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground text-sm"><strong className="text-foreground">Diag Data IA de BPI France</strong> : prise en charge de 25% du diagnostic IA.</p></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground text-sm"><strong className="text-foreground">OPCO</strong> : votre organisme de formation peut financer les formations IA.</p></li>
                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground text-sm"><strong className="text-foreground">Crédit d&apos;impôt recherche</strong> : si votre projet comporte une composante R&D.</p></li>
                      </ul>
                    </div>

                    {/* Comparatif PME vs Grand groupe */}
                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Le comparatif honnête : PME vs. grand groupe</h3>
                    <div className="overflow-x-auto -mx-4 px-4 my-6">
                      <table className="w-full text-sm border-collapse min-w-[500px]">
                        <thead>
                          <tr className="border-b-2 border-orange-500">
                            <th className="text-left py-3 px-4 font-semibold text-foreground"></th>
                            <th className="text-left py-3 px-4 font-semibold text-orange-700">PME (Smart Impulsion)</th>
                            <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Grand groupe (grand cabinet)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Budget premier projet</td><td className="py-3 px-4 text-foreground">5 000 - 15 000 euros</td><td className="py-3 px-4 text-muted-foreground">200 000 - 500 000 euros</td></tr>
                          <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Durée</td><td className="py-3 px-4 text-foreground">4 à 8 semaines</td><td className="py-3 px-4 text-muted-foreground">3 à 6 mois</td></tr>
                          <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Time-to-value</td><td className="py-3 px-4 text-foreground">4 semaines</td><td className="py-3 px-4 text-muted-foreground">3 à 6 mois</td></tr>
                          <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Équipe nécessaire</td><td className="py-3 px-4 text-foreground">0 recrutement</td><td className="py-3 px-4 text-muted-foreground">Data scientist + chef de projet</td></tr>
                          <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Risque</td><td className="py-3 px-4 text-foreground">Audit à 2K max si pas de ROI</td><td className="py-3 px-4 text-muted-foreground">50K - 200K avant résultats</td></tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Section 4 : ROI */}
                    <h2 id="roi-attendu" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      Le ROI attendu de l&apos;IA pour une PME
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Les chiffres réels (pas du marketing)</h3>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-6">
                      On ne va pas vous donner des projections PowerPoint. Voici ce qu&apos;on mesure sur le terrain :
                    </p>

                    {/* Big Stats */}
                    <div className="grid grid-cols-2 gap-4 my-8">
                      <div className="bg-foreground text-background p-6 rounded-xl text-center">
                        <p className="text-3xl md:text-4xl font-bold text-green-400">-32%</p>
                        <p className="text-sm text-background/60 mt-2">Temps opérationnel en moyenne</p>
                      </div>
                      <div className="bg-foreground text-background p-6 rounded-xl text-center">
                        <p className="text-3xl md:text-4xl font-bold text-orange-400">+18%</p>
                        <p className="text-sm text-background/60 mt-2">Performance commerciale</p>
                      </div>
                      <div className="bg-foreground text-background p-6 rounded-xl text-center">
                        <p className="text-3xl md:text-4xl font-bold text-orange-400">24%</p>
                        <p className="text-sm text-background/60 mt-2">ROI moyen des missions</p>
                      </div>
                      <div className="bg-foreground text-background p-6 rounded-xl text-center">
                        <p className="text-3xl md:text-4xl font-bold text-background">4 sem.</p>
                        <p className="text-sm text-background/60 mt-2">Time-to-value</p>
                      </div>
                    </div>

                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      Ces chiffres ne sont pas théoriques. Ils sont mesurés avant/après, sur des processus réels, chez des PME réelles.
                    </p>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      Pour approfondir la méthodologie de calcul du ROI, consultez notre guide <Link href="/blog/roi-intelligence-artificielle-entreprise" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30">mesurer le ROI de l&apos;IA en entreprise</Link>.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Exemple concret : Bio Propreté Services</h3>
                    <div className="border-l-4 border-orange-500 pl-6 py-4 my-6 bg-orange-50/50 rounded-r-lg">
                      <p className="text-sm font-semibold text-foreground mb-2">PME de nettoyage industriel. Zéro équipe tech.</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Prospection commerciale : <strong className="text-foreground">vélocité multipliée par 4</strong></li>
                        <li>Gestion des réclamations : <strong className="text-foreground">zéro perte d&apos;information</strong></li>
                        <li>Budget : un forfait PME, pas un projet à 200 000 euros</li>
                        <li>Déploiement : en semaines, pas en mois</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Exemple concret : Lyko</h3>
                    <div className="border-l-4 border-orange-500 pl-6 py-4 my-6 bg-orange-50/50 rounded-r-lg">
                      <p className="text-sm font-semibold text-foreground mb-2">PME tech. 9 ans d&apos;expérience de terrain.</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Outbound : <strong className="text-foreground">vélocité multipliée par 3</strong></li>
                        <li>Création de contenu : <strong className="text-foreground">vélocité multipliée par 5</strong></li>
                        <li>RDV décrochés : <strong className="text-foreground">+12%</strong></li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-3">La clé du succès ? Avoir choisi 2 processus ciblés, pas 20.</p>
                    </div>

                    {/* Section 5 : Roadmap */}
                    <h2 id="roadmap" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      La roadmap type pour démarrer avec l&apos;IA en PME
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <p className="text-base leading-[1.7] text-muted-foreground mb-8">
                      Vous voulez passer à l&apos;action ? Voici le chemin, étape par étape.
                    </p>

                    {/* Timeline steps */}
                    <div className="space-y-8 my-8">
                      <div className="relative pl-8 border-l-2 border-orange-500/30">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Semaine 1-2 : l&apos;audit</h3>
                        <p className="text-base leading-[1.7] text-muted-foreground">
                          Un <Link href="/blog/audit-ia-pme-guide-complet" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30">audit IA pour PME</Link> de 2-3 jours suffit. Le livrable : vos 3 quick wins identifiés avec ROI projeté pour chacun. Pas un rapport de 200 pages. Un plan d&apos;action chiffré.
                        </p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-orange-500/30">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Semaine 3-6 : le premier quick win</h3>
                        <p className="text-base leading-[1.7] text-muted-foreground">
                          On déploie le cas d&apos;usage numéro 1 — celui qui a le meilleur ROI projeté. En parallèle, on forme l&apos;équipe concernée (1 à 2 semaines). Au bout de 4 semaines, les premiers résultats sont mesurables.
                        </p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-orange-500/30">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">3</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Mois 2-3 : élargir</h3>
                        <p className="text-base leading-[1.7] text-muted-foreground">
                          Le premier quick win a fait ses preuves ? On passe au cas d&apos;usage numéro 2. Les équipes qui ont vu les résultats sont demandeuses. L&apos;adoption est naturelle.
                        </p>
                      </div>
                      <div className="relative pl-8 border-l-2 border-orange-500/30">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">4</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Mois 4-6 : structurer</h3>
                        <p className="text-base leading-[1.7] text-muted-foreground">
                          Roadmap IA sur 12 à 18 mois. Budget annuel IA intégré au plan d&apos;entreprise. Équipe interne formée et autonome. À ce stade, vous n&apos;avez plus besoin d&apos;un prestataire pour chaque nouveau projet.
                        </p>
                      </div>
                    </div>

                    {/* CTA mid-article */}
                    <div className="my-12 p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl text-center">
                      <p className="font-bold text-foreground text-lg mb-2">Votre roadmap IA en 3 jours</p>
                      <p className="text-muted-foreground mb-4">Gratuit si le potentiel est là.</p>
                      <Link
                        href="/services/audit"
                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm"
                      >
                        Demander mon audit IA
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Section 6 : Erreurs */}
                    <h2 id="erreurs" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      Les 6 erreurs qui font échouer 90% des projets IA en PME
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <div className="space-y-6 my-8">
                      {[
                        { title: "Attendre d'avoir une \"stratégie IA\" pour agir", desc: "\"On va d'abord définir notre stratégie IA.\" Traduction : on ne fera rien pendant 6 mois. La meilleure stratégie, c'est un quick win qui prouve la valeur. Le reste se construit en marchant." },
                        { title: "Acheter un outil avant de comprendre le problème", desc: "\"On a acheté un CRM avec de l'IA intégrée. Personne ne l'utilise.\" Classique. L'outil vient en dernier. Le processus vient en premier." },
                        { title: "Vouloir tout automatiser d'un coup", desc: "1 processus. 4 semaines. Mesurer. Puis élargir. Les PME qui veulent tout faire en même temps ne font rien correctement." },
                        { title: "Ne pas former les équipes", desc: "Déployer un outil sans former les gens qui l'utilisent, c'est comme acheter une machine sans le mode d'emploi. La formation est un investissement, pas un coût." },
                        { title: "Confier le projet à quelqu'un qui ne connaît pas les PME", desc: "Les grands cabinets pensent \"grand groupe\" : budgets de 200 000 euros, timelines de 6 mois. Il faut un partenaire qui pense PME : ticket adapté, vitesse d'exécution, engagement sur le résultat." },
                        { title: "Ne pas mesurer le ROI", desc: "Si personne ne chiffre le \"avant\" et le \"après\", impossible de justifier l'investissement. Posez les métriques AVANT de démarrer." },
                      ].map((error, index) => (
                        <div key={index} className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{error.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{error.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Section 7 : Smart Impulsion */}
                    <h2 id="smart-impulsion" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      Comment Smart Impulsion accompagne les PME dans l&apos;IA
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <p className="text-base leading-[1.7] text-muted-foreground mb-6">
                      On ne vend pas de la théorie. On déploie ce qui rapporte. Smart Impulsion propose 3 offres, pensées pour les PME :
                    </p>
                    <ul className="space-y-3 my-6">
                      <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><Link href="/services/formation" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30 font-semibold">Smart Training</Link> : formation de vos équipes à l&apos;IA appliquée à leur métier. 3 000 à 8 000 euros.</p></li>
                      <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><Link href="/services/audit" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30 font-semibold">Smart Analyse</Link> : audit complet de vos processus + roadmap IA avec ROI projeté. 5 000 à 15 000 euros.</p></li>
                      <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><Link href="/services/accompagnement" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30 font-semibold">Smart Action</Link> : déploiement concret du cas d&apos;usage, de A à Z. 10 000 à 30 000 euros.</p></li>
                    </ul>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      Ce qui fait la différence : on ne vend pas du temps. On s&apos;engage sur des résultats mesurables. Forfait, pas TJM. ROI projeté avant de démarrer. Si les chiffres ne tiennent pas, on ne lance pas.
                    </p>
                    <p className="text-base leading-[1.7] text-muted-foreground mb-4">
                      Derrière Smart Impulsion, il y a <Link href="/a-propos" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30">Laurent Bouzon</Link>. 9 ans de construction de produits tech chez Lyko, co-fondateur de SymbiozAI, board French Tech Lyon. Pas un théoricien — un opérationnel qui a déployé l&apos;IA sur le terrain.
                    </p>

                    {/* Section 8 : FAQ */}
                    <h2 id="faq" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2 leading-tight">
                      FAQ — L&apos;IA pour les PME
                    </h2>
                    <div className="w-16 h-1 bg-orange-500 mb-8" />

                    <Accordion type="single" collapsible className="my-8">
                      <AccordionItem value="faq-1" className="border-border">
                        <AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">
                          Par où commencer avec l&apos;IA quand on est une PME ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          Par le processus qui coûte le plus cher en temps humain. Pas par la technologie. Identifiez la tâche répétitive que vos équipes font à la main chaque jour (saisie, prospection, reporting). Faites un audit IA rapide de 2-3 jours pour chiffrer le ROI des meilleurs leviers. Déployez le premier quick win en 4 semaines. Budget : 5 000 à 15 000 euros pour un premier projet IA en PME.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="faq-2" className="border-border">
                        <AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">
                          Faut-il des compétences techniques pour utiliser l&apos;IA ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          Non, pour la majorité des cas. En 2026, les outils d&apos;IA générative (ChatGPT, Claude, Mistral) sont accessibles à des profils non techniques pour 20 à 200 euros par mois. Pour 80% des cas d&apos;usage en PME — rédaction, prospection, reporting, tri de documents — aucune compétence de développement n&apos;est nécessaire. Ce qu&apos;il faut : une bonne connaissance de vos processus et une formation de 1 à 2 semaines.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="faq-3" className="border-border">
                        <AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">
                          L&apos;IA va-t-elle remplacer mes salariés ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          Non. Sur toutes les missions déployées par Smart Impulsion, zéro poste supprimé. L&apos;IA ne remplace pas les gens. Elle libère du temps pour le travail à valeur ajoutée. Un commercial qui passe 2 heures de moins sur de la saisie, c&apos;est 2 heures de plus sur de la relation client. Le résultat : +18% de performance commerciale en moyenne.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="faq-4" className="border-border">
                        <AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">
                          Quel est le budget minimum pour un premier projet IA en PME ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          Un premier projet IA en PME démarre entre 5 000 et 15 000 euros en forfait, incluant l&apos;audit, le déploiement d&apos;un premier cas d&apos;usage et la formation de l&apos;équipe. À cela s&apos;ajoutent les outils IA à 20-200 euros par mois par utilisateur. Le programme Diag Data IA de BPI France peut cofinancer 25% du diagnostic. À titre de comparaison, les grands cabinets facturent 200 000 euros et plus pour des projets équivalents.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="faq-5" className="border-border">
                        <AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">
                          L&apos;IA est-elle adaptée à mon secteur d&apos;activité ?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          Oui. L&apos;IA n&apos;est pas un secteur, c&apos;est un levier. On mesure des résultats chez des industriels, des distributeurs, des sociétés de services, du nettoyage industriel. Le point commun : des processus répétitifs que des humains font à la main. Si vous avez des tâches à fort volume qui mangent du temps, l&apos;IA peut les automatiser. Bio Propreté Services — une PME de nettoyage industriel sans équipe tech — a déployé l&apos;IA avec une vélocité de prospection multipliée par 4.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Conclusion */}
                    <div className="mt-16 pt-8 border-t border-border">
                      <p className="text-lg leading-[1.8] text-muted-foreground mb-4">
                        L&apos;IA n&apos;est pas un sujet tech. C&apos;est un sujet business. La question n&apos;est pas &quot;est-ce que l&apos;intelligence artificielle s&apos;applique à mon entreprise ?&quot;. La question, c&apos;est : <strong className="text-foreground">quel processus vous coûte le plus cher en temps humain ?</strong>
                      </p>
                      <p className="text-lg leading-[1.8] text-muted-foreground mb-4">
                        Chaque mois sans IA, ce sont des heures et de la marge que vous laissez sur la table. Les PME qui passent à l&apos;action mesurent <strong className="text-foreground">-32% de temps opérationnel</strong> et <strong className="text-foreground">+18% de performance commerciale</strong>. Pas dans 18 mois. En 4 semaines.
                      </p>
                    </div>

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t border-border">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Share2 className="w-5 h-5" />
                          <span className="font-medium">Partager cet article</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${baseUrl}/blog/ia-pour-pme-guide`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2.5 rounded-lg hover:bg-[#006399] transition-colors text-sm font-medium">
                            <Linkedin className="w-4 h-4" />LinkedIn
                          </a>
                          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("L'IA pour les PME : par où commencer ?")}&url=${encodeURIComponent(`${baseUrl}/blog/ia-pour-pme-guide`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors text-sm font-medium">
                            <Twitter className="w-4 h-4" />Twitter
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Author Box */}
                    <div className="mt-12 p-8 bg-muted/50 rounded-2xl border border-border">
                      <div className="flex flex-col sm:flex-row items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">L</div>
                        <div>
                          <p className="text-sm font-medium text-orange-700 uppercase tracking-wide mb-1">À propos de l&apos;auteur</p>
                          <h3 className="text-xl font-bold text-foreground mb-2">Laurent Bouzon</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            Fondateur & CEO de Smart Impulsion. 9 ans de construction de produits tech chez Lyko, co-fondateur de SymbiozAI, board French Tech Lyon. Pas un théoricien — un opérationnel qui a déployé l&apos;IA sur le terrain, dans des entreprises réelles, avec des résultats mesurables.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block">
                  <div className="sticky top-24 space-y-8">
                    {/* Table of Contents */}
                    <nav className="p-6 bg-muted/30 rounded-xl border border-border">
                      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground uppercase tracking-wide">
                        <BookOpen className="w-4 h-4" />
                        Sommaire
                      </div>
                      <ul className="space-y-2">
                        {tocItems.map((item) => (
                          <li key={item.id}>
                            <a href={`#${item.id}`} className="block text-sm font-medium text-foreground/80 transition-colors hover:text-orange-500">
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    {/* Related Articles */}
                    <div className="p-6 bg-muted/30 rounded-xl border border-border">
                      <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Articles liés</p>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/blog/roi-intelligence-artificielle-entreprise" className="text-sm text-muted-foreground hover:text-orange-500 transition-colors flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            ROI de l&apos;IA en entreprise : guide complet
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog/audit-ia-pme-guide-complet" className="text-sm text-muted-foreground hover:text-orange-500 transition-colors flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            Audit IA pour PME : guide complet
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* CTA Box */}
                    <div className="p-6 bg-foreground rounded-xl text-background">
                      <h4 className="font-bold text-lg mb-2">Prêt à passer à l&apos;action ?</h4>
                      <p className="text-sm text-background/70 mb-4">
                        Identifiez vos 3 quick wins IA en 3 jours. Évaluation gratuite.
                      </p>
                      <Link
                        href="/services/audit"
                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors w-full justify-center"
                      >
                        Demander mon audit
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">
                Découvrez ce que l&apos;IA peut faire pour votre entreprise
              </h2>
              <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
                Évaluation gratuite en 3 jours. L&apos;IA n&apos;attend pas. Vos concurrents non plus.
              </p>
              <Link
                href="/services/audit"
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
