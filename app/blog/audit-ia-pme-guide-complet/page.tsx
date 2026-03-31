import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, BookOpen, Linkedin, Twitter, Share2, CheckCircle2, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const baseUrl = "https://www.smart-impulsion.com"

export const metadata: Metadata = {
  title: "Audit IA pour PME : guide complet 2026 | Smart Impulsion",
  description: "Comment réaliser un audit IA en PME ? Étapes, coûts, résultats attendus et erreurs à éviter. Diagnostic en 3 jours, premiers gains en 4 semaines.",
  authors: [{ name: "Laurent Bouzon" }],
  alternates: { canonical: `${baseUrl}/blog/audit-ia-pme-guide-complet` },
  openGraph: {
    title: "Audit IA pour PME : méthodologie, coûts et résultats (Guide 2026)",
    description: "Tout ce qu'un dirigeant de PME doit savoir sur l'audit IA : étapes, coûts (5K-15K), subventions BPI, résultats concrets et erreurs à éviter.",
    type: "article", publishedTime: "2026-03-23", authors: ["Laurent Bouzon"],
    images: [{ url: `${baseUrl}/audit-ia-pme-hero.png`, width: 1200, height: 630, alt: "Audit IA pour PME" }],
    siteName: "Smart Impulsion", locale: "fr_FR",
  },
  twitter: { card: "summary_large_image", title: "Audit IA pour PME : guide complet 2026", description: "Étapes, coûts, résultats attendus et erreurs à éviter. Diagnostic en 3 jours.", images: [`${baseUrl}/audit-ia-pme-hero.png`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

function SchemaScript({ data }: { data: object }) {
  const jsonString = JSON.stringify(data)
  return <script type="application/ld+json" suppressHydrationWarning>{jsonString}</script>
}

export default function AuditIAPMEGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Audit IA pour PME : le guide complet pour diagnostiquer et accélérer votre transformation",
    description: "Comment réaliser un audit IA en PME ? Étapes, coûts, résultats attendus et erreurs à éviter.",
    image: `${baseUrl}/audit-ia-pme-hero.png`, datePublished: "2026-03-23", dateModified: "2026-03-23",
    author: { "@type": "Person", name: "Laurent Bouzon", url: `${baseUrl}/a-propos` },
    publisher: { "@type": "Organization", name: "Smart Impulsion", logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/blog/audit-ia-pme-guide-complet` },
    articleSection: "Guide / Méthodologie", wordCount: 2900, timeRequired: "PT14M",
  }
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Combien de temps dure un audit IA ?", acceptedAnswer: { "@type": "Answer", text: "Un Audit IA Express prend 2 à 3 jours. Un diagnostic IA complet dure 2 à 4 semaines selon le périmètre. Le programme Diag Data IA de BPI France prend généralement 6 à 10 jours." } },
      { "@type": "Question", name: "Faut-il des données pour faire un audit IA ?", acceptedAnswer: { "@type": "Answer", text: "Non, il ne faut pas de base de données propre pour démarrer. 80% des PME ont déjà les données nécessaires sans le savoir : emails, CRM, fichiers Excel, ERP, bons de commande." } },
      { "@type": "Question", name: "L'audit IA est-il subventionné ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Le programme Diag Data IA de BPI France prend en charge 25% du coût en 2026 pour les PME éligibles. Les OPCO peuvent financer la partie formation." } },
      { "@type": "Question", name: "Que se passe-t-il après l'audit ?", acceptedAnswer: { "@type": "Answer", text: "Vous avez un plan d'action chiffré. Trois options : déployer en interne, faire appel à Smart Impulsion pour l'implémentation (Smart Action), ou décider de ne pas y aller." } },
      { "@type": "Question", name: "Mon secteur est-il compatible avec l'IA ?", acceptedAnswer: { "@type": "Answer", text: "Oui. L'IA n'est pas un secteur, c'est un levier. On mesure des résultats chez des industriels, des distributeurs, des sociétés de services, des entreprises de nettoyage." } },
    ],
  }
  const howToJsonLd = {
    "@context": "https://schema.org", "@type": "HowTo",
    name: "Les 5 étapes d'un audit IA en PME",
    description: "Méthodologie complète pour réaliser un diagnostic IA en entreprise.",
    totalTime: "P4W",
    step: [
      { "@type": "HowToStep", position: 1, name: "Cartographie des processus opérationnels", text: "Interviews par service, analyse des workflows. Comprendre où va le temps humain. Durée : 0,5-1 jour." },
      { "@type": "HowToStep", position: 2, name: "Identification des cas d'usage IA", text: "Critères : répétitivité, volume, coût humain, données. Priorisation impact/effort. Durée : 0,5-1 jour." },
      { "@type": "HowToStep", position: 3, name: "Évaluation de la faisabilité technique", text: "Vérifier : données existantes, outils adaptés, capacité d'adoption. Durée : 0,5 jour." },
      { "@type": "HowToStep", position: 4, name: "Chiffrage du ROI par cas d'usage", text: "Coût de déploiement vs gains projetés. Approche conservatrice à 50%. Durée : 0,5-1 jour." },
      { "@type": "HowToStep", position: 5, name: "Livraison de la roadmap IA", text: "Plan d'action : par quoi commencer, budget, planning, go/no-go." },
    ],
  }
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "Audit IA pour PME", item: `${baseUrl}/blog/audit-ia-pme-guide-complet` },
    ],
  }

  const tocItems = [
    { id: "definition", title: "Qu'est-ce qu'un audit IA ?" },
    { id: "enjeux-2026", title: "Pourquoi en 2026 ?" },
    { id: "cinq-etapes", title: "Les 5 étapes" },
    { id: "couts", title: "Combien ça coûte ?" },
    { id: "resultats", title: "Quels résultats attendre ?" },
    { id: "erreurs", title: "Les 5 erreurs fatales" },
    { id: "smart-impulsion", title: "L'approche Smart Impulsion" },
    { id: "faq", title: "FAQ" },
  ]

  // Serialize all JSON-LD as a combined script to avoid dangerouslySetInnerHTML
  const allJsonLd = [articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd]

  return (
    <>
      {allJsonLd.map((data, i) => (
        <SchemaScript key={i} data={data} />
      ))}

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-24 pb-12 bg-foreground"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-8"><ol className="flex items-center gap-2 text-sm text-background/50"><li><Link href="/" className="hover:text-orange-400 transition-colors">Accueil</Link></li><li>/</li><li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li><li>/</li><li className="text-background/80">Audit IA PME</li></ol></nav>
          <div className="flex items-center gap-3 mb-6"><span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">Guide complet</span><span className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full">14 min de lecture</span></div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-[1.1] tracking-tight">Audit IA pour PME :<br /><span className="text-orange-400">le guide complet 2026</span></h1>
          <p className="text-xl text-background/70 mb-8 leading-relaxed max-w-3xl">Étapes, coûts, résultats attendus et erreurs à éviter. Comment passer de &quot;je devrais faire de l&apos;IA&quot; à &quot;voici exactement ce que l&apos;IA me rapporte&quot;.</p>
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">L</div><div><p className="font-semibold text-background">Laurent Bouzon</p><p className="text-sm text-background/50">Fondateur & CEO</p></div></div>
            <div className="flex items-center gap-2 text-sm text-background/50"><Calendar className="w-4 h-4" /><time dateTime="2026-03-23">23 mars 2026</time></div>
          </div>
        </div></div></section>

        {/* Stats */}
        <section className="py-8 bg-muted/50 border-b border-border"><div className="container mx-auto px-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div><p className="text-2xl md:text-3xl font-bold text-orange-700">2-3 jours</p><p className="text-sm text-muted-foreground mt-1">Audit IA Express</p></div>
          <div><p className="text-2xl md:text-3xl font-bold text-orange-700">3-5</p><p className="text-sm text-muted-foreground mt-1">Quick wins identifiés</p></div>
          <div><p className="text-2xl md:text-3xl font-bold text-foreground">4 sem.</p><p className="text-sm text-muted-foreground mt-1">Premier gain mesurable</p></div>
          <div><p className="text-2xl md:text-3xl font-bold text-foreground">5-15K</p><p className="text-sm text-muted-foreground mt-1">Budget audit complet</p></div>
        </div></div></section>

        {/* Hero Image */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[40/21] w-full overflow-hidden rounded-xl mb-8">
                <Image
                  src="/audit-ia-pme-hero.png"
                  alt="Infographie : méthodologie d'audit IA pour PME - checklist et progression en 5 étapes"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12"><div className="container mx-auto px-4"><div className="max-w-7xl mx-auto"><div className="grid lg:grid-cols-[1fr_280px] gap-12 xl:gap-16">
          <article className="min-w-0"><div className="max-w-[720px]">
            <div className="text-lg leading-[1.8] text-muted-foreground mb-12 space-y-4">
              <p>Vous savez que l&apos;intelligence artificielle peut vous faire gagner du temps et de l&apos;argent. Le problème, ce n&apos;est pas la prise de conscience. <strong className="text-foreground">C&apos;est la première étape.</strong></p>
              <p>Par où commencer ? Combien investir ? Quel retour attendre ? La réponse : <strong className="text-foreground">audit IA</strong>. Un diagnostic structuré qui identifie les processus les plus rentables à automatiser et chiffre le ROI avant de dépenser un seul euro.</p>
              <p>90% des projets IA en PME échouent — pas à cause de la technologie, à cause du cadrage. L&apos;audit IA existe pour ça : poser les bonnes questions avant de foncer sur les mauvaises réponses.</p>
            </div>

            <h2 id="definition" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">Qu&apos;est-ce qu&apos;un audit IA ? Définition et cadrage</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <p className="text-base leading-[1.7] text-muted-foreground mb-4">Un audit IA — aussi appelé diagnostic IA ou évaluation de maturité IA — est une analyse structurée des processus d&apos;une entreprise.</p>
            <div className="bg-foreground text-background p-6 rounded-xl my-6 text-center"><p className="text-lg font-bold">Où l&apos;IA peut-elle me faire gagner du temps et de l&apos;argent, et combien ?</p></div>
            <p className="text-base leading-[1.7] text-muted-foreground mb-4">Ce n&apos;est PAS un audit technique (pas besoin de data scientist). Ce n&apos;est PAS une étude théorique (le livrable est un plan d&apos;action chiffré).</p>
            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Ce que contient un audit IA</h3>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">Cartographie des processus</strong> à fort potentiel d&apos;automatisation</p></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">3 à 5 cas d&apos;usage</strong> les plus rentables identifiés</p></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">ROI projeté</strong> pour chaque cas d&apos;usage, en euros</p></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">Roadmap prioritisée</strong> : quick win d&apos;abord, le reste ensuite</p></li>
            </ul>

            <h2 id="enjeux-2026" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">Pourquoi faire un audit IA en 2026 ?</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <p className="text-base leading-[1.7] text-muted-foreground mb-4">En 2026, les outils sont accessibles (20-200 euros/mois). Ce qui manque : le cadrage. Les PME qui l&apos;ont fait mesurent <strong className="text-foreground">-32% de temps opérationnel</strong> et <strong className="text-foreground">+18% de performance commerciale</strong>.</p>
            <p className="text-base leading-[1.7] text-muted-foreground mb-4">Le <strong className="text-foreground">Diag Data IA de BPI France</strong> cofinance 25% du diagnostic IA pour les PME éligibles. Le taux baisse (il était de 50% avant) — ce qui rend l&apos;action urgente.</p>
            <div className="bg-muted/50 border border-border rounded-xl p-6 my-6"><p className="font-semibold text-foreground mb-2">Le coût de l&apos;inaction</p><p className="text-sm text-muted-foreground">Chaque mois sans automatisation, c&apos;est de la marge sur la table. Si vos équipes passent 40% de leur temps sur des tâches répétitives, c&apos;est du temps payé cher qui ne crée pas de valeur.</p></div>

            <h2 id="cinq-etapes" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">Les 5 étapes d&apos;un audit IA en PME</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <div className="space-y-8 my-8">
              <div className="relative pl-8 border-l-2 border-orange-500/30">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cartographie des processus opérationnels</h3>
                <p className="text-base leading-[1.7] text-muted-foreground mb-3">Objectif : comprendre où va le temps humain. Interviews de 1-2h par service.</p>
                <div className="overflow-x-auto my-4"><table className="w-full text-sm border-collapse min-w-[500px]"><thead><tr className="border-b-2 border-orange-500"><th className="text-left py-2 px-3 font-semibold text-foreground">Processus</th><th className="text-left py-2 px-3 font-semibold text-foreground">Volume/mois</th><th className="text-left py-2 px-3 font-semibold text-foreground">Temps/unité</th><th className="text-left py-2 px-3 font-semibold text-foreground">Coût annuel</th></tr></thead><tbody className="divide-y divide-border"><tr className="hover:bg-muted/50"><td className="py-2 px-3 text-muted-foreground">Saisie commandes</td><td className="py-2 px-3 text-muted-foreground">500</td><td className="py-2 px-3 text-muted-foreground">15 min</td><td className="py-2 px-3 text-orange-700 font-semibold">75 000 euros</td></tr><tr className="hover:bg-muted/50"><td className="py-2 px-3 text-muted-foreground">Relances clients</td><td className="py-2 px-3 text-muted-foreground">200</td><td className="py-2 px-3 text-muted-foreground">20 min</td><td className="py-2 px-3 text-orange-700 font-semibold">40 000 euros</td></tr><tr className="hover:bg-muted/50"><td className="py-2 px-3 text-muted-foreground">Reporting hebdo</td><td className="py-2 px-3 text-muted-foreground">4</td><td className="py-2 px-3 text-muted-foreground">3h</td><td className="py-2 px-3 text-orange-700 font-semibold">15 000 euros</td></tr></tbody></table></div>
                <p className="text-sm text-muted-foreground">Durée : 0,5 à 1 jour.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-orange-500/30"><div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">2</div><h3 className="text-lg font-semibold text-foreground mb-2">Identification des cas d&apos;usage IA</h3><p className="text-base leading-[1.7] text-muted-foreground">4 critères : répétitivité, volume, coût humain, données disponibles. Priorisation par matrice impact/effort. 3 à 5 cas d&apos;usage identifiés. Durée : 0,5 à 1 jour.</p></div>
              <div className="relative pl-8 border-l-2 border-orange-500/30"><div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">3</div><h3 className="text-lg font-semibold text-foreground mb-2">Évaluation de la faisabilité technique</h3><p className="text-base leading-[1.7] text-muted-foreground">Les données existent-elles ? (80% du temps, oui). Les outils sont-ils disponibles ? (quasi systématiquement en 2026). L&apos;équipe peut-elle adopter le changement ? (le vrai sujet). Durée : 0,5 jour.</p></div>
              <div className="relative pl-8 border-l-2 border-orange-500/30"><div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">4</div><h3 className="text-lg font-semibold text-foreground mb-2">Chiffrage du ROI par cas d&apos;usage</h3><p className="text-base leading-[1.7] text-muted-foreground mb-2">L&apos;étape qui fait la différence.</p><div className="bg-muted/50 border border-border rounded-xl p-4 my-3 text-sm text-muted-foreground"><p><strong className="text-foreground">Coût :</strong> outils IA + accompagnement + formation</p><p><strong className="text-foreground">Gains :</strong> temps économisé x coût horaire + erreurs évitées + valeur réaffectée</p><p><strong className="text-foreground">ROI :</strong> (Gains - Coût) / Coût x 100</p></div><p className="text-sm text-muted-foreground">Approche conservatrice : 50% du potentiel théorique. Méthodologie détaillée dans le <Link href="/blog/roi-intelligence-artificielle-entreprise" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30">guide ROI de l&apos;IA</Link>. Durée : 0,5-1 jour.</p></div>
              <div className="relative pl-8 border-l-2 border-orange-500/30"><div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">5</div><h3 className="text-lg font-semibold text-foreground mb-2">Livraison de la roadmap IA</h3><p className="text-base leading-[1.7] text-muted-foreground">Plan d&apos;action en 10-15 pages : <strong className="text-foreground">par quoi commencer</strong> (quick win à plus fort ROI), <strong className="text-foreground">avec quel budget</strong>, <strong className="text-foreground">en combien de temps</strong>, et <strong className="text-foreground">go ou no-go</strong>. Si le ROI ne tient pas, on ne lance pas.</p></div>
            </div>

            <div className="my-12 p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl"><p className="font-bold text-foreground text-lg mb-2">Identifiez vos 3 quick wins IA en 3 jours</p><p className="text-muted-foreground mb-4">Audit IA Express — gratuit si le potentiel est là.</p><Link href="/services/audit" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm">Demander mon audit <ArrowRight className="w-4 h-4" /></Link></div>

            <h2 id="couts" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">Combien coûte un audit IA en PME ?</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <div className="overflow-x-auto -mx-4 px-4 my-8"><table className="w-full text-sm border-collapse min-w-[600px]"><thead><tr className="border-b-2 border-orange-500"><th className="text-left py-3 px-4 font-semibold text-foreground">Format</th><th className="text-left py-3 px-4 font-semibold text-foreground">Durée</th><th className="text-left py-3 px-4 font-semibold text-foreground">Coût</th><th className="text-left py-3 px-4 font-semibold text-foreground">Pour qui</th></tr></thead><tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Audit IA Express</td><td className="py-3 px-4 text-muted-foreground">2-3 jours</td><td className="py-3 px-4 text-orange-700 font-semibold">Gratuit à 2 000 euros</td><td className="py-3 px-4 text-muted-foreground">PME qui veut aller vite</td></tr>
              <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Smart Analyse (complet)</td><td className="py-3 px-4 text-muted-foreground">2-4 semaines</td><td className="py-3 px-4 text-orange-700 font-semibold">5 000 - 15 000 euros</td><td className="py-3 px-4 text-muted-foreground">PME/ETI périmètre large</td></tr>
              <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Diag Data IA BPI</td><td className="py-3 px-4 text-muted-foreground">6-10 jours</td><td className="py-3 px-4 text-orange-700 font-semibold">10-15K (25% pris en charge)</td><td className="py-3 px-4 text-muted-foreground">PME éligibles BPI</td></tr>
              <tr className="hover:bg-muted/50"><td className="py-3 px-4 text-foreground font-medium">Grand cabinet</td><td className="py-3 px-4 text-muted-foreground">3-6 mois</td><td className="py-3 px-4 text-muted-foreground">50 000 - 200 000+ euros</td><td className="py-3 px-4 text-muted-foreground">ETI / grands groupes</td></tr>
            </tbody></table></div>
            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Les subventions disponibles</h3>
            <div className="bg-muted/50 border border-border rounded-xl p-6 my-6"><ul className="space-y-3"><li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground text-sm"><strong className="text-foreground">Diag Data IA BPI :</strong> 25% pris en charge (le taux baisse — agir maintenant)</p></li><li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground text-sm"><strong className="text-foreground">OPCO :</strong> prise en charge formation</p></li><li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" /><p className="text-muted-foreground text-sm"><strong className="text-foreground">CIR :</strong> si composante R&D</p></li></ul></div>

            <h2 id="resultats" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">Quels résultats attendre d&apos;un audit IA ?</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="bg-foreground text-background p-6 rounded-xl text-center"><p className="text-3xl md:text-4xl font-bold text-orange-400">3-5</p><p className="text-sm text-background/60 mt-2">Cas d&apos;usage identifiés</p></div>
              <div className="bg-foreground text-background p-6 rounded-xl text-center"><p className="text-3xl md:text-4xl font-bold text-green-400">-32%</p><p className="text-sm text-background/60 mt-2">Temps opérationnel</p></div>
              <div className="bg-foreground text-background p-6 rounded-xl text-center"><p className="text-3xl md:text-4xl font-bold text-orange-400">+18%</p><p className="text-sm text-background/60 mt-2">Performance commerciale</p></div>
              <div className="bg-foreground text-background p-6 rounded-xl text-center"><p className="text-3xl md:text-4xl font-bold text-background">4 sem.</p><p className="text-sm text-background/60 mt-2">Quick win déployable</p></div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Cas concret : Bio Propreté Services</h3>
            <div className="border-l-4 border-orange-500 pl-6 py-4 my-6 bg-orange-50/50 rounded-r-lg"><p className="text-sm font-semibold text-foreground mb-2">PME de nettoyage industriel. Pas de développeurs.</p><ul className="space-y-2 text-sm text-muted-foreground"><li>2 cas d&apos;usage identifiés par l&apos;audit</li><li>Prospection : <strong className="text-foreground">vélocité x4</strong></li><li>Réclamations : <strong className="text-foreground">zéro perte d&apos;information</strong></li></ul></div>
            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Cas concret : Lyko</h3>
            <div className="border-l-4 border-orange-500 pl-6 py-4 my-6 bg-orange-50/50 rounded-r-lg"><p className="text-sm font-semibold text-foreground mb-2">PME tech. 2 processus ciblés.</p><ul className="space-y-2 text-sm text-muted-foreground"><li>Outbound : <strong className="text-foreground">vélocité x3</strong></li><li>Contenu : <strong className="text-foreground">vélocité x5</strong></li><li>RDV : <strong className="text-foreground">+12%</strong></li></ul></div>

            <h2 id="erreurs" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">Les 5 erreurs fatales dans un audit IA</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <div className="space-y-6 my-8">
              {[
                { title: "Confier l'audit à un prestataire qui vend la solution", desc: "Si le prestataire vend aussi l'outil IA, l'audit est biaisé. Cherchez un partenaire agnostique technologiquement." },
                { title: "Se concentrer sur la technologie avant le processus", desc: "\"On veut implémenter ChatGPT.\" Mauvais point de départ. La question est : quel problème ? 90% des échecs viennent de là." },
                { title: "Ignorer l'adoption par les équipes", desc: "Sans plan d'adoption, le ROI est de zéro. La formation doit être prévue dès le diagnostic." },
                { title: "Viser trop large", desc: "Un audit efficace : 1-3 services, 3-5 processus, 4 semaines pour le premier résultat. Ensuite, on élargit." },
                { title: "Ne pas chiffrer le ROI", desc: "Exigez un ROI projeté en euros. Pas en \"potentiel\". Combien ça coûte, combien ça rapporte, en combien de temps." },
              ].map((error, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border"><div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">{index + 1}</div><div><h3 className="font-semibold text-foreground mb-1">{error.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{error.desc}</p></div></div>
              ))}
            </div>

            <h2 id="smart-impulsion" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">Comment Smart Impulsion réalise un audit IA</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <p className="text-base leading-[1.7] text-muted-foreground mb-6">Deux formats, une même philosophie : ROI projeté avant, mesuré pendant, vérifié après.</p>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><strong className="text-foreground">Audit IA Express :</strong> 2-3 jours, 3 quick wins, ROI projeté. Gratuit si le potentiel le justifie.</p></div>
              <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-700 mt-0.5 flex-shrink-0" /><p className="text-muted-foreground"><Link href="/services/audit" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30 font-semibold">Smart Analyse</Link> : audit complet + roadmap 6-12 mois. 5 000-15 000 euros en forfait.</p></div>
            </div>
            <p className="text-base leading-[1.7] text-muted-foreground mb-4">3 principes : <strong className="text-foreground">ROI d&apos;abord</strong>, <strong className="text-foreground">forfait</strong> (pas TJM), <strong className="text-foreground">go/no-go</strong> honnête. L&apos;expérience derrière : <Link href="/a-propos" className="text-orange-700 hover:text-orange-700 underline underline-offset-4 decoration-orange-500/30">Laurent Bouzon</Link>, 9 ans de terrain chez Lyko, co-fondation SymbiozAI, board French Tech Lyon.</p>

            <h2 id="faq" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-foreground mt-16 mb-2">FAQ — Audit IA pour PME</h2>
            <div className="w-16 h-1 bg-orange-500 mb-8" />
            <Accordion type="single" collapsible className="my-8">
              <AccordionItem value="faq-1" className="border-border"><AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">Combien de temps dure un audit IA ?</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">Audit IA Express : 2-3 jours. Diagnostic complet : 2-4 semaines. Diag BPI : 6-10 jours. Premiers gains déployables en 4 semaines dans tous les cas.</AccordionContent></AccordionItem>
              <AccordionItem value="faq-2" className="border-border"><AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">Faut-il des données pour faire un audit IA ?</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">Non. 80% des PME ont déjà les données nécessaires : emails, CRM, Excel, ERP, bons de commande. L&apos;audit identifie ce qui est exploitable.</AccordionContent></AccordionItem>
              <AccordionItem value="faq-3" className="border-border"><AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">L&apos;audit IA est-il subventionné ?</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">Oui. Diag Data IA BPI France : 25% du coût en 2026. OPCO pour la formation. CIR si dimension R&D.</AccordionContent></AccordionItem>
              <AccordionItem value="faq-4" className="border-border"><AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">Que se passe-t-il après l&apos;audit ?</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">Plan d&apos;action chiffré. 3 options : déployer en interne, passer par <Link href="/services/accompagnement" className="text-orange-700 underline">Smart Action</Link>, ou décider de ne pas y aller — décision éclairée.</AccordionContent></AccordionItem>
              <AccordionItem value="faq-5" className="border-border"><AccordionTrigger className="text-left text-foreground font-semibold hover:text-orange-500 hover:no-underline py-5">Mon secteur est-il compatible avec l&apos;IA ?</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">Oui. L&apos;IA n&apos;est pas un secteur, c&apos;est un levier. Résultats mesurés chez des industriels, distributeurs, sociétés de services, nettoyage industriel. Le point commun : des processus répétitifs. Voir aussi : <Link href="/blog/ia-pour-pme-guide" className="text-orange-700 underline">guide IA pour PME</Link>. <Link href="/faq" className="text-orange-700 underline">Toutes nos FAQ</Link>.</AccordionContent></AccordionItem>
            </Accordion>

            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-lg leading-[1.8] text-muted-foreground mb-4">L&apos;audit IA, c&apos;est le pont entre l&apos;intention et l&apos;action. En 2-3 jours, vous savez où sont vos quick wins. En 4 semaines, vous mesurez les premiers gains.</p>
              <p className="text-lg leading-[1.8] text-muted-foreground"><strong className="text-foreground">Le vrai coût, ce n&apos;est pas celui de l&apos;audit. C&apos;est celui de l&apos;inaction.</strong></p>
            </div>

            <div className="mt-12 pt-8 border-t border-border"><div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div className="flex items-center gap-2 text-muted-foreground"><Share2 className="w-5 h-5" /><span className="font-medium">Partager</span></div><div className="flex items-center gap-3"><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${baseUrl}/blog/audit-ia-pme-guide-complet`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2.5 rounded-lg hover:bg-[#006399] transition-colors text-sm font-medium"><Linkedin className="w-4 h-4" />LinkedIn</a><a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Audit IA pour PME : guide complet 2026")}&url=${encodeURIComponent(`${baseUrl}/blog/audit-ia-pme-guide-complet`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors text-sm font-medium"><Twitter className="w-4 h-4" />Twitter</a></div></div></div>
            <div className="mt-12 p-8 bg-muted/50 rounded-2xl border border-border"><div className="flex flex-col sm:flex-row items-start gap-6"><div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">L</div><div><p className="text-sm font-medium text-orange-700 uppercase tracking-wide mb-1">À propos de l&apos;auteur</p><h3 className="text-xl font-bold text-foreground mb-2">Laurent Bouzon</h3><p className="text-muted-foreground leading-relaxed">Fondateur & CEO de Smart Impulsion. 9 ans chez Lyko, co-fondateur SymbiozAI, board French Tech Lyon. Expert en audit IA et transformation des PME françaises.</p></div></div></div>
          </div></article>

          <aside className="hidden lg:block"><div className="sticky top-24 space-y-8">
            <nav className="p-6 bg-muted/30 rounded-xl border border-border"><div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground uppercase tracking-wide"><BookOpen className="w-4 h-4" />Sommaire</div><ul className="space-y-2">{tocItems.map((item) => (<li key={item.id}><a href={`#${item.id}`} className="block text-sm font-medium text-foreground/80 hover:text-orange-500 transition-colors">{item.title}</a></li>))}</ul></nav>
            <div className="p-6 bg-muted/30 rounded-xl border border-border"><p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Articles liés</p><ul className="space-y-3"><li><Link href="/blog/ia-pour-pme-guide" className="text-sm text-muted-foreground hover:text-orange-500 transition-colors flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />L&apos;IA pour les PME : par où commencer ?</Link></li><li><Link href="/blog/roi-intelligence-artificielle-entreprise" className="text-sm text-muted-foreground hover:text-orange-500 transition-colors flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />ROI de l&apos;IA : guide complet</Link></li></ul></div>
            <div className="p-6 bg-foreground rounded-xl text-background"><h4 className="font-bold text-lg mb-2">Audit IA Express</h4><p className="text-sm text-background/70 mb-4">Vos 3 quick wins en 3 jours. Gratuit si le potentiel est là.</p><Link href="/services/audit" className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors w-full justify-center">Demander mon audit <ArrowRight className="w-4 h-4" /></Link></div>
          </div></aside>
        </div></div></div></section>

        <section className="py-24 bg-foreground"><div className="container mx-auto px-4"><div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-background mb-6">Audit IA Express : vos 3 quick wins en 3 jours</h2>
          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">Gratuit si le potentiel est là. On ne vend pas un projet pour vendre un projet.</p>
          <Link href="/services/audit" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">Demander une évaluation gratuite <ArrowRight className="w-5 h-5" /></Link>
        </div></div></section>
      </main>
    </>
  )
}
