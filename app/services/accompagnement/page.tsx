import type { Metadata } from "next"
import Link from "next/link"
import {
  Cog,
  CheckCircle,
  Users,
  Target,
  ArrowRight,
  Rocket,
  Settings,
  Shield,
  BarChart3,
  Zap,
  HeadphonesIcon,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Accompagnement Opérationnel IA | Smart Action | Smart Impulsion",
  description:
    "Mise en œuvre de solutions IA sur mesure avec accompagnement complet. Du développement au déploiement, nous pilotons vos projets IA avec un suivi du ROI à chaque étape.",
  openGraph: {
    title: "Accompagnement Opérationnel IA | Smart Action | Smart Impulsion",
    description:
      "Mise en œuvre de solutions IA sur mesure avec accompagnement complet. Du développement au déploiement.",
    type: "website",
    locale: "fr_FR",
  },
}

const services = [
  {
    icon: Settings,
    titre: "Automatisation des processus",
    description:
      "Identifiez et automatisez les tâches répétitives pour libérer du temps sur les activités à forte valeur ajoutée.",
    exemples: [
      "Traitement automatique des factures",
      "Classification des emails",
      "Génération de rapports",
      "Extraction de données",
    ],
  },
  {
    icon: HeadphonesIcon,
    titre: "Chatbots & assistants IA",
    description:
      "Déployez des agents conversationnels pour améliorer l'expérience client et décharger vos équipes support.",
    exemples: ["Chatbot service client", "Assistant commercial", "FAQ intelligente", "Qualification de leads"],
  },
  {
    icon: BarChart3,
    titre: "Analyse prédictive",
    description: "Exploitez vos données pour anticiper les tendances, optimiser vos décisions et réduire les risques.",
    exemples: ["Prévision des ventes", "Détection de fraude", "Maintenance prédictive", "Scoring client"],
  },
  {
    icon: Zap,
    titre: "IA générative métier",
    description: "Intégrez les LLM dans vos workflows pour augmenter la productivité de vos équipes au quotidien.",
    exemples: ["Rédaction assistée", "Synthèse de documents", "Traduction automatique", "Création de contenus"],
  },
]

const etapes = [
  { numero: "01", titre: "Cadrage", desc: "Définition des objectifs, KPIs et périmètre du projet." },
  { numero: "02", titre: "Conception", desc: "Architecture technique et spécifications fonctionnelles." },
  { numero: "03", titre: "Développement", desc: "Implémentation itérative avec validations régulières." },
  { numero: "04", titre: "Déploiement", desc: "Mise en production, formation et conduite du changement." },
  { numero: "05", titre: "Optimisation", desc: "Suivi des KPIs, ajustements et amélioration continue." },
]

const engagements = [
  {
    icon: Target,
    titre: "ROI mesuré",
    desc: "Chaque projet est piloté par des indicateurs de performance clairs et mesurables.",
  },
  {
    icon: Shield,
    titre: "Risques maîtrisés",
    desc: "Approche itérative avec POC pour valider la valeur avant de passer à l'échelle.",
  },
  {
    icon: Users,
    titre: "Transfert de compétences",
    desc: "Vos équipes sont formées pour être autonomes sur les solutions déployées.",
  },
  {
    icon: RefreshCw,
    titre: "Support continu",
    desc: "Accompagnement post-déploiement pour garantir la pérennité des résultats.",
  },
]

const resultats = [
  { chiffre: "–32%", description: "de temps opérationnel en moyenne" },
  { chiffre: "3-6", description: "mois pour un déploiement complet" },
  { chiffre: "+24%", description: "de ROI sur les périmètres déployés" },
]

export default function AccompagnementPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <Cog className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Smart Action</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Déployez des solutions IA
                <br />
                <span className="text-orange-400">avec un impact réel</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                De la conception au déploiement, nous vous accompagnons dans la mise en œuvre opérationnelle de
                solutions IA sur mesure, avec un suivi rigoureux du ROI à chaque étape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/#contact">
                    Démarrer un projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="#services">Nos domaines d'expertise</Link>
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

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos domaines d'intervention</h2>
              <p className="text-lg text-gray-600">
                Des solutions IA concrètes pour transformer vos opérations et générer de la valeur rapidement.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 hover-lift h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.titre}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Exemples de cas d'usage :</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.exemples.map((exemple, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full"
                            >
                              {exemple}
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

      {/* Méthodologie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre méthodologie projet</h2>
              <p className="text-lg text-gray-600">
                Une approche itérative et pragmatique pour des résultats rapides et durables.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne de connexion */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden md:block" />

              <div className="space-y-6">
                {etapes.map((etape, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                    <div className="flex gap-6 items-start">
                      <div className="relative z-10 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {etape.numero}
                      </div>
                      <div className="bg-white rounded-xl p-5 border border-gray-200 flex-grow hover-lift">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{etape.titre}</h3>
                        <p className="text-gray-600 text-sm">{etape.desc}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos engagements</h2>
              <p className="text-lg text-gray-600">
                Une approche orientée résultats, avec des garanties concrètes pour votre projet.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover-lift">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Approche POC */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4">
                    <Rocket className="h-7 w-7 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Commencez par un POC</h2>
                  <p className="text-gray-600 mb-6">
                    Avant tout investissement majeur, nous vous proposons de valider la valeur de l'IA sur un périmètre
                    restreint. Un Proof of Concept de 4 à 8 semaines vous permet de mesurer concrètement l'impact avant
                    de passer à l'échelle.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Validation rapide de la faisabilité",
                      "Mesure du ROI sur cas réel",
                      "Réduction des risques projet",
                      "Base solide pour le déploiement",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Un POC type inclut :</h3>
                  <ul className="space-y-3">
                    {[
                      "Cadrage du cas d'usage prioritaire",
                      "Développement d'un prototype fonctionnel",
                      "Test sur données réelles",
                      "Mesure des premiers résultats",
                      "Recommandations pour le passage à l'échelle",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Durée moyenne</span>
                      <span className="font-semibold text-gray-900">4 à 8 semaines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à passer à l'action ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Discutons de votre projet pour définir ensemble la meilleure approche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/#contact">
                    Planifier un échange
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
