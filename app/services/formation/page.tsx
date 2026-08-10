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
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Formation IA pour Entreprises | Smart Training | Smart Impulsion",
  description:
    "Formation IA pour PME et ETI : de la sensibilisation à la maîtrise opérationnelle. 20 à 40% de gain de temps sur les tâches ciblées.",
  alternates: {
    canonical: "https://www.smart-impulsion.com/services/formation",
  },
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
      "Concevoir des solutions IA sur mesure et piloter un projet IA de bout en bout, du cadrage à la mise en production.",
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

// Les angles morts du dirigeant, dans ses mots. La constante ("Je ne sais pas")
// est le sujet de la page : c'est elle qui fait le probleme, pas la variable.
const anglesMorts = [
  "qui utilise l'IA chez moi, ni pour quoi faire.",
  "combien d'abonnements on paie, ni s'ils servent à quelque chose.",
  "ce que mes équipes mettent dedans comme informations.",
  "ce que fait celui qui s'en sert le mieux, ni ce qu'il en restera le jour où il partira.",
  "si ça nous fait gagner du temps, ou si ça nous en fait perdre.",
]

// Les trois promesses qui tiennent quel que soit le programme (§3 de l'argumentaire).
const invariants = [
  {
    titre: "Vos processus, pas un catalogue",
    texte:
      "Le contenu n'est pas connu d'avance parce qu'il se construit à partir de ce que vos équipes font réellement. Un organisme vend le même module à tout le monde, c'est son modèle économique. Ce n'est pas le nôtre.",
  },
  {
    titre: "Le point de mesure est choisi avant",
    texte:
      "On décide avec vous, avant de démarrer, ce qu'on regardera à la fin : un délai, un volume traité, un taux d'erreur, un temps de production. Pas une promesse de pourcentage, un accord écrit sur ce qu'on observe.",
  },
  {
    titre: "Ce qui reste, c'est une pratique",
    texte:
      "L'objectif n'est pas que vos équipes aient assisté, mais que la manière de faire du meilleur devienne celle de tout le monde. Une attestation prouve une présence. Une pratique se voit dans les résultats.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart Training - Formation IA sur mesure",
  "description": "Formations IA personnalisées pour les équipes de PME et ETI. 20 à 40% de gain de temps constaté.",
  "provider": { "@type": "Organization", "name": "Smart Impulsion" },
  "serviceType": "Formation en intelligence artificielle",
  "areaServed": { "@type": "Country", "name": "France" },
  "url": "https://www.smart-impulsion.com/services/formation"
}

export default function FormationPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
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
                Vos équipes utilisent déjà l'IA.
                <br />
                <span className="text-orange-400">Nous, on la rend rentable.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                La question n'est plus de savoir si l'IA entre dans votre entreprise. Elle y est déjà, souvent sur des
                comptes personnels, sans méthode partagée et sans personne pour en mesurer le rendement. Ce n'est pas un
                problème de compétence, c'est un problème de pilotage.
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
                  <div className="text-4xl font-bold text-orange-700 mb-2">{item.chiffre}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Le probleme de pilotage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                L'IA est déjà entrée chez vous. Elle n'est pilotée par personne.
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Voici ce qu'un dirigeant nous dit, presque mot pour mot, quand on lui demande où en est l'IA dans son
                entreprise.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-black rounded-2xl p-6 sm:p-10">
                <ul className="space-y-5">
                  {anglesMorts.map((item, index) => (
                    <li key={index} className="border-l-2 border-orange-500 pl-5 sm:pl-6">
                      <span className="block text-sm uppercase tracking-widest text-gray-500 mb-1">Je ne sais pas</span>
                      <span className="block text-lg sm:text-xl text-white leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="mt-10 border-t-2 border-orange-500 pt-8">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                  Ce n'est pas un problème de compétence. C'est un problème de pilotage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Un problème de compétence se règle avec un tutoriel gratuit. Un problème de pilotage se règle avec une
                  méthode, et c'est exactement ce qu'on installe.
                </p>
                <p className="text-base text-gray-500 italic">
                  La première question qu'on vous posera : combien de vos collaborateurs utilisent l'IA dans leur
                  travail, et pour quoi faire ?
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Ce qui ne change pas d'un client a l'autre */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Le contenu change à chaque entreprise. Trois choses, jamais.
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Le programme se construit sur votre métier, donc il n'est pas dans un catalogue. Ces trois engagements,
                eux, valent pour toutes nos missions de formation.
              </p>
            </AnimateOnScroll>

            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {invariants.map((item, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-8">
                    <h3 className="text-lg font-bold text-gray-900 md:col-span-1">{item.titre}</h3>
                    <p className="text-gray-600 md:col-span-2">{item.texte}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
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
                    <item.icon className="h-6 w-6 text-orange-700" />
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
                      <span className="text-xs font-medium uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1 rounded-full">
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
                    <item.icon className="h-6 w-6 text-orange-700" />
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

      {/* Qualiopi / OPCO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <BadgeCheck className="h-8 w-8 text-orange-700 flex-shrink-0" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-orange-700">
                    Organisme certifié Qualiopi
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                  Votre formation peut passer par votre OPCO.
                </h2>

                <p className="text-lg text-gray-700 mb-4">
                  L'article L.6316-1 du code du travail réserve les financements des opérateurs de compétences (OPCO),
                  de l'État, des régions, de la Caisse des dépôts, de France Travail et de l'Agefiph aux prestataires
                  certifiés. Smart Impulsion l'est.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Concrètement, notre facture est présentable à votre OPCO. Celle d'un consultant ou d'un cabinet non
                  certifié ne l'est pas, et ce n'est pas une question de négociation.
                </p>

                <div className="bg-white rounded-xl border border-orange-100 p-5 sm:p-6 mb-6">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Ce qu'on ne vous annoncera pas</h3>
                  <p className="text-gray-600">
                    Un taux de prise en charge. Ce que votre OPCO finance, et à quelle hauteur, dépend de votre branche,
                    de votre effectif, du dispositif mobilisé et des budgets disponibles. C'est lui qui le dit, pas
                    nous. Ce qu'on garantit de notre côté, c'est que le dossier est finançable.
                  </p>
                </div>

                <p className="text-lg font-semibold text-gray-900 mb-4">Vous dépendez de quel OPCO ?</p>

                <a
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048600506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 underline underline-offset-4 hover:text-orange-700 transition-colors"
                >
                  Source : article L.6316-1 du code du travail, Légifrance
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Combien vous coûte ce que vous ne pilotez pas ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Vingt minutes suffisent pour poser les cinq chiffres de votre entreprise et voir ce qui est en jeu. Ce
                sont vos chiffres, pas les nôtres.
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
