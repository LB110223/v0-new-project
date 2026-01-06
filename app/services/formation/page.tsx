import type { Metadata } from "next"
import Link from "next/link"
import {
  GraduationCap,
  CheckCircle,
  Users,
  Clock,
  Target,
  ArrowRight,
  Brain,
  Lightbulb,
  TrendingUp,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Formation IA pour Entreprises | Smart Training | Smart Impulsion",
  description:
    "Programmes de formation Intelligence Artificielle personnalisés pour vos équipes. De la sensibilisation à la maîtrise opérationnelle, formez vos collaborateurs à l'IA avec un ROI mesurable.",
  openGraph: {
    title: "Formation IA pour Entreprises | Smart Training | Smart Impulsion",
    description:
      "Programmes de formation Intelligence Artificielle personnalisés pour vos équipes. De la sensibilisation à la maîtrise opérationnelle.",
    type: "website",
    locale: "fr_FR",
  },
}

const formations = [
  {
    niveau: "Découverte",
    titre: "Sensibilisation IA",
    duree: "1/2 journée",
    description:
      "Comprendre l'IA, ses opportunités et ses limites pour identifier les premiers cas d'usage pertinents.",
    objectifs: [
      "Démystifier l'intelligence artificielle",
      "Comprendre les différents types d'IA (ML, Deep Learning, IA Générative)",
      "Identifier les opportunités dans votre secteur",
      "Connaître les limites et risques de l'IA",
    ],
    public: "Dirigeants, managers, équipes métiers",
  },
  {
    niveau: "Opérationnel",
    titre: "Maîtrise des outils IA",
    duree: "1 à 2 jours",
    description:
      "Prendre en main les outils IA du quotidien et développer des usages concrets pour gagner en productivité.",
    objectifs: [
      "Maîtriser ChatGPT, Claude, Copilot et autres LLM",
      "Créer des prompts efficaces (prompt engineering)",
      "Automatiser les tâches répétitives",
      "Intégrer l'IA dans les workflows existants",
    ],
    public: "Équipes opérationnelles, assistants, commerciaux, marketing",
  },
  {
    niveau: "Expert",
    titre: "IA avancée & sur mesure",
    duree: "3 à 5 jours",
    description:
      "Développer des solutions IA personnalisées et piloter des projets de transformation par l'intelligence artificielle.",
    objectifs: [
      "Concevoir des agents IA personnalisés",
      "Intégrer l'IA via API dans vos outils",
      "Piloter un projet IA de A à Z",
      "Mesurer et optimiser le ROI des solutions IA",
    ],
    public: "DSI, chefs de projet, équipes techniques",
  },
]

const resultats = [
  { chiffre: "20-40%", description: "de gain de temps sur les tâches ciblées" },
  { chiffre: "1 semaine", description: "pour voir les premiers résultats" },
  { chiffre: "100%", description: "de nos formations sont personnalisées" },
]

const outils = ["ChatGPT", "Claude", "Copilot", "Gemini", "Mistral", "Midjourney", "Notion AI", "Zapier AI"]

export default function FormationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Smart Training</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Formez vos équipes à l'IA
                <br />
                <span className="text-orange-400">avec un impact mesurable</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Des programmes de formation personnalisés pour transformer l'IA en avantage compétitif concret. De la
                sensibilisation à la maîtrise opérationnelle, nous accompagnons vos collaborateurs vers l'autonomie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/contact">
                    Demander un programme sur mesure
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="#programmes">Voir nos programmes</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resultats.map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">{item.chiffre}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi former vos équipes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi former vos équipes à l'IA ?
              </h2>
              <p className="text-lg text-gray-600">
                En 2025, 26% des TPE/PME françaises utilisent l'IA. Les entreprises formées constatent en moyenne une
                augmentation de 33% de leur productivité sur les tâches automatisées.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                titre: "Productivité",
                desc: "Automatisez les tâches répétitives et libérez du temps pour les missions à forte valeur ajoutée.",
              },
              {
                icon: Target,
                titre: "Compétitivité",
                desc: "Ne laissez pas vos concurrents prendre l'avantage. L'IA est un levier de différenciation majeur.",
              },
              {
                icon: Users,
                titre: "Engagement",
                desc: "Des équipes formées sont 1,9x plus susceptibles de générer une valeur business tangible.",
              },
              {
                icon: Brain,
                titre: "Innovation",
                desc: "Développez une culture de l'innovation et identifiez de nouvelles opportunités business.",
              },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 hover-lift border border-gray-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes de formation */}
      <section id="programmes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos programmes de formation</h2>
              <p className="text-lg text-gray-600">
                Trois niveaux de formation adaptés à vos objectifs et au niveau de maturité de vos équipes.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover-lift h-full flex flex-col">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                        {formation.niveau}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {formation.duree}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{formation.titre}</h3>
                    <p className="text-gray-600 text-sm">{formation.description}</p>
                  </div>
                  <div className="p-6 flex-grow">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Objectifs pédagogiques</h4>
                    <ul className="space-y-2 mb-6">
                      {formation.objectifs.map((objectif, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {objectif}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{formation.public}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Outils couverts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Outils IA couverts dans nos formations
              </h2>
              <p className="text-gray-600">
                Nous adaptons notre sélection d'outils à vos besoins et assurons une veille continue.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-4">
            {outils.map((outil, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{outil}</span>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre approche pédagogique</h2>
              <p className="text-lg text-gray-600">Une formation 100% pratique, orientée métier et résultats.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Lightbulb,
                titre: "Cas pratiques métier",
                desc: "Chaque formation inclut des exercices basés sur vos problématiques réelles et vos données.",
              },
              {
                icon: BookOpen,
                titre: "Supports personnalisés",
                desc: "Documentation sur mesure, fiches pratiques et accès à nos ressources après la formation.",
              },
              {
                icon: Calendar,
                titre: "Formats flexibles",
                desc: "Présentiel, distanciel ou hybride. Sessions de 2h à plusieurs jours selon vos contraintes.",
              },
              {
                icon: Award,
                titre: "Suivi post-formation",
                desc: "Sessions de Q&A et accompagnement pour ancrer les acquis dans la durée.",
              },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.titre}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à former vos équipes ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Échangeons sur vos besoins pour construire un programme de formation sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="/">Retour à l'accueil</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  )
}
