import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Target,
  Clock,
  Zap,
  CheckCircle,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "A propos — Smart Impulsion | Conseil IA pour PME et ETI",
  description:
    "Decouvrez Smart Impulsion : notre mission, notre approche ROI-first, et le parcours de Laurent Bouzon, fondateur. 9 ans chez Lyko, co-fondateur SymbiozAI, board French Tech Lyon.",
  alternates: {
    canonical: "https://www.smart-impulsion.com/a-propos",
  },
  openGraph: {
    title: "A propos — Smart Impulsion | Conseil IA pour PME et ETI",
    description:
      "Smart Impulsion rend l'IA rentable pour les PME et ETI francaises. -32% de temps operationnel, +18% de performance commerciale, 24% de ROI moyen.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.smart-impulsion.com/a-propos",
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Smart Impulsion",
    description:
      "Smart Impulsion rend l'IA rentable pour les PME et ETI francaises avec un ROI mesurable.",
    url: "https://www.smart-impulsion.com",
    founder: {
      "@type": "Person",
      name: "Laurent Bouzon",
      jobTitle: "Fondateur & CEO",
      description:
        "9 ans chez Lyko (co-fondateur), co-fondateur SymbiozAI, board member French Tech Lyon.",
      sameAs: "https://www.linkedin.com/in/laurent-bouzon-150237108/",
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  },
}

const resultats = [
  {
    metric: "-32%",
    title: "Temps operationnel",
    description: "En moyenne sur les processus automatises",
    icon: TrendingDown,
    isNegative: true,
  },
  {
    metric: "+18%",
    title: "Performance commerciale",
    description: "Mesuree chez nos clients",
    icon: TrendingUp,
    isNegative: false,
  },
  {
    metric: "24%",
    title: "ROI moyen",
    description: "Sur les missions Smart Impulsion",
    icon: Target,
    isNegative: false,
  },
]

const experiences = [
  { period: "2025", role: "Fondateur & CEO", company: "Smart Impulsion" },
  { period: "2024", role: "Co-fondateur & CEO", company: "SymbiozAI" },
  { period: "2019-22", role: "Board Member", company: "French Tech Lyon" },
  { period: "2016-25", role: "Co-fondateur & CEO", company: "Lyko" },
]

const valeurs = [
  {
    titre: "Chiffre ou tais-toi",
    description:
      "Chaque affirmation est appuyee par un fait, un chiffre ou un exemple. On ne dit pas \"l'IA va transformer votre entreprise\". On dit \"-32% de temps operationnel en 6 semaines, voici comment.\" Si on ne peut pas le prouver, on ne le dit pas.",
  },
  {
    titre: "L'inaction est le vrai risque",
    description:
      "Le concurrent numero 1 des PME francaises face a l'IA, ce n'est pas la Chine ni les GAFAM. C'est l'immobilisme. Chaque mois sans IA, ce sont des heures et de la marge laissees sur la table. On aide nos clients a passer a l'action — pas dans 6 mois, maintenant.",
  },
  {
    titre: "Pas de dependance",
    description:
      "On forme vos equipes pour qu'elles soient autonomes. On ne cree pas de dependance a un prestataire. Si vous n'avez plus besoin de nous apres la mission, c'est qu'on a bien fait notre travail.",
  },
  {
    titre: "Resultats d'abord, facture ensuite",
    description:
      "On travaille au forfait avec ROI projete. Pas au temps passe, pas en TJM opaque. Si les chiffres ne tiennent pas, on ne demarre pas. Notre business model repose sur le fait que nos clients obtiennent des resultats.",
  },
]

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                L&apos;IA qui compte.
                <br />
                <span className="text-orange-400">En euros.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                On rend l&apos;IA rentable pour les PME et ETI francaises. Pas l&apos;IA des
                conferences et des PowerPoints — l&apos;IA qui se mesure en euros gagnes, en
                heures recuperees, et en marge amelioree.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Le probleme qu'on resout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Le probleme qu&apos;on resout
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Les dirigeants de PME et ETI savent qu&apos;ils &quot;devraient faire de
                l&apos;IA&quot;. Ils le lisent partout, on leur en parle dans chaque evenement,
                leurs concurrents commencent a bouger. Mais ils sont bloques.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    titre: "Bloques par le flou",
                    desc: "\"Par ou commencer ? Quel processus automatiser en premier ? Combien investir ?\" Les reponses en ligne sont trop techniques, trop vagues ou orientees.",
                  },
                  {
                    titre: "Bloques par le cout",
                    desc: "Les grands cabinets proposent des projets a 200 000 euros et plus, avec 3 a 6 mois de cadrage. Pour une PME, c'est hors de portee.",
                  },
                  {
                    titre: "Bloques par la peur",
                    desc: "\"Mon equipe ne suivra pas\", \"On n'a pas les donnees\", \"C'est un gadget\". Des objections legitimes mais des malentendus.",
                  },
                ].map((item, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.titre}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <p className="text-lg text-gray-700 mt-8 font-medium">
                Resultat : 90% des PME francaises n&apos;ont pas encore engage de projet IA
                concret. Le vrai concurrent de Smart Impulsion, ce n&apos;est pas un autre
                cabinet. C&apos;est l&apos;inaction.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre approche
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <strong>ROI d&apos;abord, technologie ensuite.</strong> Chaque mission commence
                par un chiffre : combien ca coute, combien ca rapporte, en combien de temps. Si
                le ROI projete ne tient pas, on ne demarre pas.
              </p>

              <div className="space-y-6 mb-10">
                <h3 className="text-xl font-bold text-gray-900">
                  3 offres, un seul objectif : des resultats.
                </h3>
                {[
                  {
                    name: "Smart Training",
                    desc: "On forme vos equipes a l'IA appliquee a leur metier. Pas un cours theorique. Des ateliers pratiques avec resultats immediats.",
                    prix: "3 000 a 8 000 euros",
                  },
                  {
                    name: "Smart Analyse",
                    desc: "On audite vos processus, on identifie vos 3 quick wins IA, on chiffre le ROI. Le plan d'action, pas le rapport de 200 pages.",
                    prix: "5 000 a 15 000 euros",
                  },
                  {
                    name: "Smart Action",
                    desc: "On deploie. Automatisation, integration, mise en production. Les premiers gains se mesurent en 4 semaines.",
                    prix: "10 000 a 30 000 euros",
                  },
                ].map((offre, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{offre.name}</h4>
                        <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                          {offre.prix}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{offre.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-6 border border-orange-100">
                <Zap className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <strong>Des resultats en semaines, pas en mois.</strong> L&apos;Audit IA
                  Express prend 2-3 jours. Le premier quick win est en production en 4 semaines.
                  Parce qu&apos;une PME ne peut pas attendre.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Le fondateur */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                Le fondateur
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {/* CV */}
              <AnimateOnScroll animation="fade-up" delay={0}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 h-80 flex flex-col justify-center">
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <div key={index} className="flex gap-4 items-baseline">
                        <span className="text-xs font-medium text-gray-400 w-16 shrink-0">
                          {exp.period}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-black">{exp.role}</p>
                          <p className="text-xs text-gray-500">{exp.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Photo */}
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="rounded-xl border border-gray-200 h-80 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/img-0346.jpeg"
                      alt="Laurent Bouzon - Fondateur & CEO de Smart Impulsion"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Citation */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="bg-black text-white rounded-xl h-80 p-6 flex flex-col justify-center relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-white/10" />
                  <blockquote className="relative z-10">
                    <p className="text-sm font-medium leading-relaxed mb-4">
                      &quot;J&apos;ai cree Smart Impulsion parce que je voyais un vide : entre
                      les grands cabinets trop chers et trop lents, et les freelances sans
                      capacite d&apos;execution, il n&apos;y avait personne pour aider les PME
                      a obtenir un ROI concret avec l&apos;IA.&quot;
                    </p>
                    <footer className="flex items-center gap-2">
                      <div className="w-6 h-0.5 bg-orange-500"></div>
                      <div>
                        <p className="font-semibold text-white text-sm">Laurent Bouzon</p>
                        <p className="text-xs text-gray-400">Fondateur & CEO</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
                <p>
                  Je suis Laurent Bouzon. J&apos;ai passe 9 ans chez Lyko, une entreprise tech
                  lyonnaise que j&apos;ai co-fondee et ou j&apos;ai dirige le produit et la
                  technologie. J&apos;ai ensuite co-fonde SymbiozAI, une startup specialisee
                  dans l&apos;IA appliquee. Je siege au board de la French Tech Lyon.
                </p>
                <p>Ce parcours m&apos;a appris trois choses.</p>
                <div className="space-y-4">
                  {[
                    {
                      titre: "L'IA ne vaut rien sans un probleme business clair.",
                      desc: "Chez Lyko, les deploiements IA qui ont marche etaient ceux qui repondaient a une question simple : \"quel processus nous coute le plus cher ?\" Les autres ont tous fini dans un tiroir.",
                    },
                    {
                      titre: "Les PME ont besoin de vitesse.",
                      desc: "En 9 ans de PME tech, j'ai vu ce que c'est que de piloter avec des budgets serres et un besoin de resultats immediats. Les cycles de 6 mois, c'est un luxe que les PME n'ont pas.",
                    },
                    {
                      titre: "Le conseil sans execution ne sert a rien.",
                      desc: "Un plan d'action qui reste dans un PowerPoint, c'est zero valeur. C'est pour ca que Smart Impulsion forme, analyse ET deploie. De A a Z.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.titre}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Nos resultats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos resultats
              </h2>
              <p className="text-lg text-gray-600">
                Les chiffres parlent mieux que les promesses. Ces chiffres viennent de
                deploiements reels, chez des entreprises reelles.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            {resultats.map((result, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-black p-8 rounded-lg border border-gray-800 text-center transition-all duration-300 hover:border-orange-500">
                  <div className="flex items-center justify-center mb-4">
                    <result.icon
                      className={`h-6 w-6 mr-2 ${result.isNegative ? "text-green-500" : "text-orange-500"}`}
                    />
                    <span
                      className={`text-4xl font-bold ${result.isNegative ? "text-green-500" : "text-orange-500"}`}
                    >
                      {result.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{result.title}</h3>
                  <p className="text-gray-400">{result.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up">
            <div className="flex justify-center gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-900">4 semaines</span>
                </div>
                <p className="text-sm text-gray-600">Premiers resultats mesurables</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Zap className="h-5 w-5 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-900">2-3 jours</span>
                </div>
                <p className="text-sm text-gray-600">Audit IA Express complet</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos valeurs
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {valeurs.map((valeur, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{valeur.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{valeur.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pret a passer a l&apos;action ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Echangeons 20 minutes pour evaluer le potentiel de l&apos;IA dans votre
                entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Link href="/contact">
                    Demander un audit gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="/">Retour a l&apos;accueil</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  )
}
