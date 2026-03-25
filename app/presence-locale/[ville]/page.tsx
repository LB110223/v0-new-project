import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { LyonEnriched } from "./lyon-enriched"

// Définir les villes où vous avez une présence
const villes = {
  lyon: {
    nom: "Lyon",
    description:
      "Smart Impulsion accompagne les entreprises lyonnaises dans leur transformation par l'IA avec un ROI mesurable.",
    specificites:
      "Lyon, avec son écosystème dynamique de startups et sa French Tech, est un terreau fertile pour l'innovation par l'IA.",
    casEtude:
      "Nous avons notamment accompagné plusieurs entreprises du secteur industriel lyonnais dans l'optimisation de leur chaîne logistique grâce à l'IA prédictive.",
    region: "Auvergne-Rhône-Alpes",
    enriched: true,
  },
  paris: {
    nom: "Paris",
    description: "Smart Impulsion transforme les entreprises parisiennes grâce à des solutions d'IA à ROI mesurable.",
    specificites:
      "Paris, capitale de l'innovation en France, concentre un écosystème riche d'entreprises technologiques et de grands groupes en quête de solutions IA performantes.",
    casEtude:
      "Nos clients — Lyko, SymbiozAI, Bio Propreté Services — mesurent en moyenne -32% de temps opérationnel et +18% de performance commerciale grâce à nos déploiements IA.",
    region: "Île-de-France",
    enriched: false,
  },
  marseille: {
    nom: "Marseille",
    description:
      "Smart Impulsion accompagne les entreprises marseillaises dans leur transformation numérique par l'IA à ROI mesurable.",
    specificites:
      "Marseille, avec son port international et son écosystème méditerranéen, présente des opportunités uniques pour l'application de l'IA dans la logistique, les services et le commerce.",
    casEtude:
      "Nos déploiements chez Lyko (vélocité outbound x3), SymbiozAI (AI Workforce complète) et Bio Propreté Services (vélocité x4) illustrent notre capacité à délivrer des résultats concrets et mesurables.",
    region: "Provence-Alpes-Côte d'Azur",
    enriched: false,
  },
  bordeaux: {
    nom: "Bordeaux",
    description:
      "Smart Impulsion propose aux entreprises bordelaises des solutions d'IA avec un retour sur investissement mesurable.",
    specificites:
      "Bordeaux, avec son dynamisme économique et son écosystème tech en pleine croissance, offre un terrain propice à l'adoption de l'IA dans les PME et ETI.",
    casEtude:
      "Nos résultats chez nos clients — automatisation outbound (vélocité x3 à x4, +12% de RDV), AI Workforce complète, agents IA métier — démontrent notre approche ROI-first.",
    region: "Nouvelle-Aquitaine",
    enriched: false,
  },
  nantes: {
    nom: "Nantes",
    description:
      "Smart Impulsion accompagne les entreprises nantaises dans leur transformation par l'IA avec un ROI mesurable et rapide.",
    specificites:
      "Nantes, reconnue pour son dynamisme numérique et sa qualité de vie, abrite de nombreuses entreprises innovantes en quête de solutions IA pragmatiques.",
    casEtude:
      "Nos résultats mesurés chez nos clients : -32% de temps opérationnel, +18% de performance commerciale, des vélocités multipliées par 3 à 5 sur les processus automatisés.",
    region: "Pays de la Loire",
    enriched: false,
  },
}

export async function generateMetadata({ params }: { params: { ville: string } }): Promise<Metadata> {
  const ville = params.ville.toLowerCase()

  if (!villes[ville as keyof typeof villes]) {
    return {
      title: "Page non trouvée | Smart Impulsion",
      description: "La page que vous recherchez n'existe pas.",
    }
  }

  const villeInfo = villes[ville as keyof typeof villes]

  // Lyon gets enriched metadata
  if (ville === "lyon") {
    return {
      title: "Agence IA à Lyon — Conseil en intelligence artificielle pour PME et ETI | Smart Impulsion",
      description:
        "Smart Impulsion, votre agence IA à Lyon. Conseil, audit et déploiement IA pour PME et ETI lyonnaises. -32% de temps opérationnel, ROI mesurable en 4 semaines. French Tech Lyon.",
      alternates: {
        canonical: "https://www.smart-impulsion.com/presence-locale/lyon",
      },
      openGraph: {
        title: "Agence IA à Lyon — Conseil en intelligence artificielle pour PME et ETI",
        description:
          "Smart Impulsion accompagne les PME et ETI lyonnaises dans le déploiement de l'IA avec un ROI mesurable. -32% de temps opérationnel en 4 semaines.",
        type: "website",
        locale: "fr_FR",
        url: "https://www.smart-impulsion.com/presence-locale/lyon",
      },
      keywords:
        "conseil IA Lyon, agence IA Lyon, audit IA Lyon, consultant IA Lyon, intelligence artificielle Lyon, formation IA Lyon, PME Lyon, ETI Lyon, French Tech Lyon",
    }
  }

  return {
    title: `Agence IA ${villeInfo.nom} | Smart Impulsion - ROI mesurable`,
    description: `${villeInfo.description} Expertise en IA générative, machine learning et NLP pour les entreprises de ${villeInfo.nom} et sa région.`,
    alternates: {
      canonical: `https://www.smart-impulsion.com/presence-locale/${ville}`,
    },
    keywords: `intelligence artificielle ${villeInfo.nom}, IA ${villeInfo.nom}, ROI mesurable, transformation digitale, machine learning, ${villeInfo.region}, agence IA ${villeInfo.nom}`,
  }
}

export async function generateStaticParams() {
  return Object.keys(villes).map((ville) => ({
    ville: ville,
  }))
}

export default function PresenceLocale({ params }: { params: { ville: string } }) {
  const ville = params.ville.toLowerCase()

  // Vérifier si la ville existe dans notre liste
  if (!villes[ville as keyof typeof villes]) {
    notFound()
  }

  const villeInfo = villes[ville as keyof typeof villes]

  // Lyon gets the enriched page
  if (ville === "lyon") {
    return <LyonEnriched />
  }

  // Other cities keep the original template
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Agence IA à {villeInfo.nom} | Solutions d&apos;intelligence artificielle à ROI mesurable
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <p className="text-xl text-gray-700 mb-6">{villeInfo.description}</p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                L&apos;IA à {villeInfo.nom} : une approche orientée résultats
              </h2>
              <p>
                Smart Impulsion accompagne les entreprises de {villeInfo.nom} et sa région dans leur transformation par
                l&apos;intelligence artificielle, avec une approche unique centrée sur un ROI rapide et mesurable.
              </p>
              <p className="mt-4">{villeInfo.specificites}</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos services d&apos;IA à {villeInfo.nom}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Smart Training</h3>
                <p>
                  Formation personnalisée pour vos équipes à {villeInfo.nom} sur les technologies d&apos;IA, adaptée à vos
                  besoins spécifiques.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Smart Analyse</h3>
                <p>
                  Audit approfondi de vos processus et données pour identifier les opportunités d&apos;optimisation par l&apos;IA
                  avec estimation précise du ROI potentiel.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Smart Action</h3>
                <p>
                  Mise en oeuvre des solutions préconisées avec un accompagnement complet, du développement au
                  déploiement à {villeInfo.nom}.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos réalisations à {villeInfo.nom}</h2>
            <p>{villeInfo.casEtude}</p>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 mt-6">
              <p className="text-lg font-medium text-orange-800">
                &quot;Notre approche pragmatique de l&apos;IA a permis à nos clients de {villeInfo.nom} de réduire leur temps
                opérationnel de 32% et d&apos;améliorer leur performance commerciale de 18% grâce à l&apos;intelligence artificielle.&quot;
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Smart Impulsion à {villeInfo.nom} ?
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3 mt-1">&#10003;</span>
                <span>
                  Une expertise locale avec une connaissance approfondie de l&apos;écosystème économique de {villeInfo.nom}
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3 mt-1">&#10003;</span>
                <span>Des solutions d&apos;IA sur mesure adaptées aux spécificités de votre secteur d&apos;activité</span>
              </li>
              <li className="flex items-start">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3 mt-1">&#10003;</span>
                <span>Un engagement sur des résultats concrets et mesurables</span>
              </li>
              <li className="flex items-start">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mr-3 mt-1">&#10003;</span>
                <span>Une approche pragmatique et orientée ROI</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rencontrons-nous à {villeInfo.nom}</h2>
            <p>
              Vous souhaitez discuter de votre projet d&apos;IA à {villeInfo.nom} ? Notre équipe est disponible pour une
              première évaluation gratuite de vos besoins et opportunités.
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

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Smart Impulsion - Agence d&apos;intelligence artificielle à {villeInfo.nom} - Solutions IA à ROI mesurable
          </p>
        </div>
      </div>
    </div>
  )
}
