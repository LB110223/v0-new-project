import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Notre présence locale | Smart Impulsion - IA à ROI mesurable",
  description:
    "Smart Impulsion accompagne les entreprises partout en France dans leur transformation par l'IA avec un ROI mesurable. Découvrez notre présence locale.",
  keywords:
    "intelligence artificielle, IA, ROI mesurable, transformation digitale, machine learning, France, Lyon, Paris, Marseille, Bordeaux, Nantes",
}

const villes = [
  {
    nom: "Lyon",
    slug: "lyon",
    description:
      "Smart Impulsion accompagne les entreprises lyonnaises dans leur transformation par l'IA avec un ROI mesurable.",
    region: "Auvergne-Rhône-Alpes",
  },
  {
    nom: "Paris",
    slug: "paris",
    description: "Smart Impulsion transforme les entreprises parisiennes grâce à des solutions d'IA à ROI mesurable.",
    region: "Île-de-France",
  },
  {
    nom: "Marseille",
    slug: "marseille",
    description:
      "Smart Impulsion accompagne les entreprises marseillaises dans leur transformation numérique par l'IA à ROI mesurable.",
    region: "Provence-Alpes-Côte d'Azur",
  },
  {
    nom: "Bordeaux",
    slug: "bordeaux",
    description:
      "Smart Impulsion propose aux entreprises bordelaises des solutions d'IA avec un retour sur investissement mesurable.",
    region: "Nouvelle-Aquitaine",
  },
  {
    nom: "Nantes",
    slug: "nantes",
    description:
      "Smart Impulsion accompagne les entreprises nantaises dans leur transformation par l'IA avec un ROI mesurable et rapide.",
    region: "Pays de la Loire",
  },
]

export default function PresenceLocale() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Notre présence locale</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <p className="text-xl text-gray-700 mb-6">
              Smart Impulsion accompagne les entreprises partout en France dans leur transformation par l'intelligence
              artificielle, avec une approche unique centrée sur un ROI rapide et mesurable.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Une expertise locale, une vision globale</h2>
              <p>
                Nous comprenons que chaque région a ses spécificités économiques et ses défis propres. C'est pourquoi
                nous avons développé une expertise locale dans les principales villes françaises, tout en maintenant une
                vision globale des meilleures pratiques en matière d'IA.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos implantations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {villes.map((ville, index) => (
                <Link
                  key={index}
                  href={`/presence-locale/${ville.slug}`}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start mb-2">
                    <MapPin className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">{ville.nom}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{ville.description}</p>
                  <p className="text-sm text-gray-500">Région : {ville.region}</p>
                  <p className="mt-4 text-orange-500 font-medium group-hover:underline">
                    Découvrir notre expertise à {ville.nom} →
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Une approche adaptée à votre contexte local</h2>
            <p>
              Quelle que soit votre localisation en France, nous adaptons notre approche à votre contexte local tout en
              garantissant un ROI mesurable sur vos projets d'IA.
            </p>

            <div className="mt-6">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
              >
                Demander une évaluation gratuite
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
