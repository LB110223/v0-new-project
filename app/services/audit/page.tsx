import type { Metadata } from "next"
import Link from "next/link"
import {
  LineChart,
  Users,
  Clock,
  Target,
  ArrowRight,
  Search,
  FileText,
  Lightbulb,
  TrendingUp,
  Settings,
  Shield,
  BarChart3,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Audit IA & Diagnostic | Smart Analyse | Smart Impulsion",
  description:
    "Audit et diagnostic IA pour identifier vos opportunités d'optimisation. Analyse de maturité, cartographie des cas d'usage et roadmap stratégique avec estimation du ROI.",
  openGraph: {
    title: "Audit IA & Diagnostic | Smart Analyse | Smart Impulsion",
    description:
      "Audit et diagnostic IA pour identifier vos opportunités d'optimisation. Analyse de maturité, cartographie des cas d'usage et roadmap stratégique.",
    type: "website",
    locale: "fr_FR",
  },
}

const etapes = [
  {
    numero: "01",
    titre: "Acculturation & cadrage",
    duree: "1/2 journée",
    description:
      "Session de sensibilisation pour aligner tous les acteurs clés sur les fondamentaux de l'IA, ses opportunités et ses limites dans votre contexte.",
    livrables: [
      "Compréhension partagée de l'IA",
      "Identification des parties prenantes",
      "Définition du périmètre d'audit",
    ],
  },
  {
    numero: "02",
    titre: "Diagnostic & interviews",
    duree: "2-3 jours",
    description:
      "Analyse approfondie de vos processus métier via des ateliers et interviews avec chaque département pour identifier les irritants et opportunités.",
    livrables: ["Cartographie des processus", "Identification des pain points", "Liste des cas d'usage potentiels"],
  },
  {
    numero: "03",
    titre: "Analyse & priorisation",
    duree: "2-3 jours",
    description:
      "Évaluation de chaque cas d'usage selon son impact business, sa faisabilité technique et son alignement stratégique pour construire votre roadmap.",
    livrables: ["Scoring des use cases", "Estimation du ROI par projet", "Matrice impact/effort"],
  },
  {
    numero: "04",
    titre: "Roadmap & restitution",
    duree: "1/2 journée",
    description:
      "Présentation de la feuille de route IA avec les projets prioritaires, le planning de mise en œuvre et les ressources nécessaires.",
    livrables: ["Roadmap IA détaillée", "Business cases chiffrés", "Plan d'action opérationnel"],
  },
]

const dimensions = [
  {
    icon: Target,
    titre: "Stratégie",
    desc: "Alignement de l'IA avec vos objectifs business et votre vision d'entreprise.",
  },
  {
    icon: FileText,
    titre: "Données",
    desc: "Qualité, disponibilité et gouvernance des données nécessaires aux projets IA.",
  },
  {
    icon: Settings,
    titre: "Technologie",
    desc: "Maturité de votre infrastructure et capacité à supporter des solutions IA.",
  },
  {
    icon: Users,
    titre: "Organisation",
    desc: "Compétences internes, culture de l'innovation et ouverture au changement.",
  },
]

const benefices = [
  { chiffre: "5-10", description: "cas d'usage identifiés en moyenne" },
  { chiffre: "3-6", description: "semaines de diagnostic complet" },
  { chiffre: "50%", description: "éligible au financement BPI (sous conditions)" },
]

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <LineChart className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Smart Analyse</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Identifiez vos opportunités IA
                <br />
                <span className="text-orange-400">avec un ROI estimé</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Notre audit IA analyse vos processus, vos données et votre organisation pour identifier les projets à
                fort impact et construire une roadmap pragmatique alignée sur vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/#contact">
                    Demander un audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="#methodologie">Découvrir notre méthodologie</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefices.map((item, index) => (
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

      {/* Pourquoi un audit IA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi réaliser un audit IA ?</h2>
              <p className="text-lg text-gray-600">
                L'IA offre d'immenses opportunités, mais aussi des risques si elle est mal déployée. Un audit vous
                permet d'investir au bon endroit, au bon moment.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                titre: "Identifier les opportunités",
                desc: "Cartographiez tous les cas d'usage IA pertinents pour votre activité et votre secteur.",
              },
              {
                icon: TrendingUp,
                titre: "Estimer le ROI",
                desc: "Chiffrez les gains potentiels de chaque projet pour prioriser vos investissements.",
              },
              {
                icon: Shield,
                titre: "Réduire les risques",
                desc: "Anticipez les défis techniques, organisationnels et éthiques avant de vous lancer.",
              },
              {
                icon: Zap,
                titre: "Accélérer la mise en œuvre",
                desc: "Gagnez du temps avec une feuille de route claire et des quick wins identifiés.",
              },
              {
                icon: BarChart3,
                titre: "Aligner la stratégie",
                desc: "Assurez-vous que vos projets IA servent vos objectifs business à court et long terme.",
              },
              {
                icon: Lightbulb,
                titre: "Embarquer les équipes",
                desc: "Créez une vision partagée de l'IA et mobilisez vos collaborateurs autour des projets.",
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

      {/* Dimensions analysées */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Les 4 dimensions de notre analyse</h2>
              <p className="text-lg text-gray-600">
                Une évaluation à 360° de votre maturité IA pour des recommandations pertinentes.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map((dim, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover-lift">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <dim.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{dim.titre}</h3>
                  <p className="text-gray-600 text-sm">{dim.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section id="methodologie" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre méthodologie en 4 étapes</h2>
              <p className="text-lg text-gray-600">
                Un processus structuré et éprouvé pour des résultats concrets en 3 à 6 semaines.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8 max-w-4xl mx-auto">
            {etapes.map((etape, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 hover-lift">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                        {etape.numero}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{etape.titre}</h3>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {etape.duree}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{etape.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Livrables :</h4>
                        <div className="flex flex-wrap gap-2">
                          {etape.livrables.map((livrable, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full"
                            >
                              {livrable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Financement BPI */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Financement possible jusqu'à 50%</h2>
              <p className="text-lg text-gray-600 mb-6">
                Dans le cadre du programme "IA Booster France 2030", la BPI peut prendre en charge jusqu'à 50% du coût
                de votre diagnostic IA. Nous vous accompagnons dans les démarches d'éligibilité.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/#contact">
                  Vérifier mon éligibilité
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à identifier vos opportunités IA ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Échangeons sur vos enjeux pour vous proposer un diagnostic adapté à votre contexte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/#contact">
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
