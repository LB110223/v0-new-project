import type { Metadata } from "next"
import Link from "next/link"
import {
  LineChart,
  Clock,
  ArrowRight,
  Search,
  Shield,
  Zap,
  Calendar,
  Euro,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Audit IA Express — diagnostic chiffré en 0,5 à 1 jour | Smart Impulsion",
  description:
    "Audit IA Express : 0,5 à 1 jour, 1 000 à 2 000 € HT, un seul processus, une réponse chiffrée. Le diagnostic qui vérifie si votre hypothèse de gain IA tient.",
  alternates: {
    canonical: "https://www.smart-impulsion.com/services/audit",
  },
  openGraph: {
    title: "Audit IA Express — diagnostic chiffré en 0,5 à 1 jour | Smart Impulsion",
    description:
      "Un seul processus, une seule question : est-ce que la cible chiffrée tient ? Réponse en 0,5 à 1 jour, pour 1 000 à 2 000 € HT.",
    type: "website",
    locale: "fr_FR",
  },
}

const parcours = [
  {
    icon: Calendar,
    etape: "Rendez-vous découverte",
    statut: "Gratuit, sans engagement",
    description:
      "Vous posez un enjeu chiffré avec le simulateur de ROI : par exemple, combien représenterait le passage d'un processus de 45 à 30 minutes.",
  },
  {
    icon: Euro,
    etape: "Audit IA Express",
    statut: "Payant, 1 000 à 2 000 € HT",
    description:
      "L'hypothèse posée au rendez-vous est vérifiée sur le terrain, sur un seul processus, en 0,5 à 1 jour.",
  },
  {
    icon: TrendingUp,
    etape: "Accompagnement",
    statut: "Chiffré sur une cible vérifiée",
    description:
      "Si la cible tient, la suite (Smart Training notamment) se chiffre sur un résultat vérifié — pas sur une estimation.",
  },
]

const etapesAudit = [
  {
    numero: "01",
    titre: "Vérification terrain",
    duree: "0,5 jour",
    description:
      "Mesure des temps, volumes et coûts réels sur le processus ciblé — pas une estimation théorique.",
  },
  {
    numero: "02",
    titre: "Calcul chiffré",
    duree: "0,5 jour",
    description:
      "Le calcul de l'hypothèse est refait sur vos données réelles : la cible tient, ou elle ne tient pas — et voici pourquoi.",
  },
  {
    numero: "03",
    titre: "Réponse et décision",
    duree: "Immédiat",
    description:
      "Un livrable unique : la réponse chiffrée sur votre processus, de quoi décider la suite en connaissance de cause.",
  },
]

const pourquoi = [
  {
    icon: Search,
    titre: "Une hypothèse, pas une liste",
    desc: "Vous arrivez avec un chiffre posé au rendez-vous découverte. L'audit le vérifie sur le terrain — pas sur une liste de cas d'usage à défricher.",
  },
  {
    icon: Shield,
    titre: "Une réponse franche",
    desc: "Si la cible ne tient pas, vous le saurez, avec le calcul refait. L'audit n'a aucune raison de vous dire oui par principe.",
  },
  {
    icon: Zap,
    titre: "Une journée, pas un trimestre",
    desc: "0,5 à 1 jour pour trancher. De quoi décider la suite sur du vérifié, pas sur une intuition.",
  },
]

const benefices = [
  { chiffre: "0,5-1", description: "jour de diagnostic, sur un seul processus" },
  { chiffre: "1 000-2 000 €", description: "HT, tarif fixe — un audit payant" },
  { chiffre: "50%", description: "éligible au financement BPI (sous conditions)" },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Audit IA Express",
  "description":
    "Diagnostic payant d'un seul processus métier : vérification chiffrée d'une hypothèse de gain, en 0,5 à 1 jour.",
  "provider": { "@type": "Organization", "name": "Smart Impulsion" },
  "serviceType": "Audit en intelligence artificielle",
  "areaServed": { "@type": "Country", "name": "France" },
  "url": "https://www.smart-impulsion.com/services/audit",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 1000,
      "maxPrice": 2000,
      "priceCurrency": "EUR"
    }
  }
}

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment se déroule un Audit IA Express",
  "description": "0,5 à 1 jour pour vérifier si l'hypothèse de gain posée sur un processus tient, avec un calcul chiffré.",
  "totalTime": "P1D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "minValue": "1000",
    "maxValue": "2000"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Vérification terrain",
      "text": "Mesure des temps, volumes et coûts réels sur le processus ciblé — pas une estimation théorique.",
      "url": "https://www.smart-impulsion.com/services/audit#methodologie"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Calcul chiffré",
      "text": "Le calcul de l'hypothèse posée au rendez-vous découverte est refait sur les données réelles du processus.",
      "url": "https://www.smart-impulsion.com/services/audit#methodologie"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Réponse et décision",
      "text": "Livrable unique : la réponse chiffrée sur le processus analysé, pour décider la suite en connaissance de cause.",
      "url": "https://www.smart-impulsion.com/services/audit#methodologie"
    }
  ]
}

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <LineChart className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Audit IA Express</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Une hypothèse de gain.
                <br />
                <span className="text-orange-400">Une réponse chiffrée.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                L'Audit IA Express vérifie, sur un seul processus de votre entreprise, si le gain estimé au
                rendez-vous découverte se confirme — calcul refait sur vos données réelles, en 0,5 à 1 jour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/contact">
                    Réserver un rendez-vous découverte
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href="#methodologie">Voir le déroulé</Link>
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
                  <div className="text-4xl font-bold text-orange-700 mb-2">{item.chiffre}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi un Audit IA Express */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi un audit sur un seul processus ?
              </h2>
              <p className="text-lg text-gray-600">
                L'Audit IA Express n'a pas vocation à cartographier toute votre entreprise. Il répond à une seule
                question, sur le processus que vous aurez choisi.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pourquoi.map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 hover-lift border border-gray-200 h-full">
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

      {/* Parcours en 3 temps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Le parcours en 3 temps</h2>
              <p className="text-lg text-gray-600">
                L'Audit IA Express n'est ni le premier contact, ni la fin du chemin : c'est l'étape qui vérifie.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px bg-orange-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {parcours.map((étape, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                  <div className="relative flex md:flex-col md:items-center md:text-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-orange-500 text-orange-700 flex items-center justify-center relative z-10">
                      <étape.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{étape.etape}</h3>
                      <p className="text-sm font-medium text-orange-700 mb-2">{étape.statut}</p>
                      <p className="text-gray-600 text-sm">{étape.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section id="methodologie" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Le déroulé de l'audit, en 0,5 à 1 jour
              </h2>
              <p className="text-lg text-gray-600">
                Un seul processus analysé. Un seul livrable produit : la réponse chiffrée sur votre hypothèse.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8 max-w-4xl mx-auto">
            {etapesAudit.map((etape, index) => (
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
                      <p className="text-gray-600">{etape.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fade-up">
            <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
              Le livrable est un document court avec la réponse chiffrée — pas un rapport de 200 pages.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pourquoi c'est payant */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
                « Un audit offert est un argumentaire de vente. Un audit payé est un diagnostic : nous n'avons
                aucune raison de vous dire oui si la réponse est non. »
              </p>
              <p className="text-gray-400">
                C'est pour cela que l'Audit IA Express n'est jamais offert. Le prix fait partie de la réponse.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Financement BPI */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Shield className="h-8 w-8 text-orange-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Financement possible jusqu'à 50%</h2>
              <p className="text-lg text-gray-600 mb-6">
                Dans le cadre du programme "IA Booster France 2030", la BPI peut prendre en charge jusqu'à 50% du
                coût de l'Audit IA Express. Nous vous accompagnons dans les démarches d'éligibilité.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à vérifier votre hypothèse ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Commencez par le rendez-vous découverte, gratuit et sans engagement, pour poser votre premier
                chiffre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/contact">
                    Réserver un rendez-vous découverte
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
