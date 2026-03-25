import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LyonFaq } from "./lyon-faq"

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Smart Impulsion - Agence IA Lyon",
  description:
    "Agence de conseil en intelligence artificielle pour PME et ETI à Lyon. Audit IA, formation IA, déploiement IA avec ROI mesurable.",
  url: "https://www.smart-impulsion.com/presence-locale/lyon",
  email: "contact@smart-impulsion.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.764043,
    longitude: 4.835659,
  },
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Laurent Bouzon",
    jobTitle: "Fondateur & CEO",
  },
  areaServed: [
    { "@type": "City", name: "Lyon" },
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
  ],
  serviceType: [
    "Conseil en intelligence artificielle",
    "Audit IA",
    "Formation IA",
    "Déploiement IA",
  ],
}

const lyonFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Smart Impulsion intervient-il uniquement à Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. On intervient dans toute la France, avec une priorité sur la région Auvergne-Rhône-Alpes et l'Île-de-France. Mais Lyon est notre base — c'est là où on est le plus réactif, où notre réseau est le plus dense, et où on peut intervenir en présentiel sans délai. Pour les entreprises lyonnaises, c'est un avantage concret : un audit IA démarre en quelques jours, pas en quelques semaines.",
      },
    },
    {
      "@type": "Question",
      name: "Existe-t-il des aides pour financer un projet IA à Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le programme Diag Data IA de BPI France permet de cofinancer un diagnostic IA. La Région Auvergne-Rhône-Alpes propose également des dispositifs d'aide à l'innovation pour les PME. On vous aide à identifier les financements disponibles dès l'audit — c'est inclus dans notre accompagnement.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types d'entreprises lyonnaises accompagnez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Des PME et ETI de 10 à 5 000 salariés, dans tous les secteurs. Industrie, distribution, services, finance, santé — les processus répétitifs à automatiser existent partout. Ce qui compte, c'est la volonté d'agir et un minimum de maturité opérationnelle.",
      },
    },
    {
      "@type": "Question",
      name: "Comment prendre rendez-vous pour un audit IA à Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un call découverte de 20 minutes suffit pour qualifier le potentiel. Contactez-nous directement via le site (smart-impulsion.com/contact) ou sur LinkedIn. Si le potentiel est là, l'Audit IA Express peut démarrer sous une semaine.",
      },
    },
  ],
}

export function LyonEnriched() {
  return (
    <div className="bg-white">
      {/* NOTE: dangerouslySetInnerHTML used here with trusted, hardcoded JSON-LD structured data only — no user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lyonFaqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l&apos;accueil
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Agence IA à Lyon
              <br />
              <span className="text-orange-400">pour PME et ETI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Smart Impulsion accompagne les PME et ETI lyonnaises dans le déploiement de
              l&apos;intelligence artificielle avec un objectif unique : un ROI mesurable. Pas de
              grandes théories. Des résultats en 4 semaines.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { chiffre: "-32%", label: "de temps opérationnel" },
              { chiffre: "+18%", label: "de performance commerciale" },
              { chiffre: "24%", label: "de ROI moyen" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{item.chiffre}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Impulsion à Lyon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Smart Impulsion, votre agence IA à Lyon
            </h2>
            <p className="text-gray-600">
              Lyon n&apos;est pas un choix de circonstance. C&apos;est là où Smart Impulsion est
              né, là où Laurent Bouzon a passé 9 ans à construire des produits tech chez Lyko,
              et là où il a co-fondé SymbiozAI. C&apos;est aussi là où il siège au board de la
              French Tech Lyon. Quand on parle de conseil IA à Lyon, on parle d&apos;un ancrage
              réel — pas d&apos;une adresse sur une page web.
            </p>
            <p className="text-gray-600">
              On connaît le tissu économique lyonnais. On connaît ses décideurs. Et on sait que
              les PME de la région n&apos;ont ni le budget des grands groupes parisiens ni le
              temps d&apos;attendre 6 mois un premier résultat.
            </p>
          </div>
        </div>
      </section>

      {/* Écosystème IA lyonnais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              L&apos;écosystème IA lyonnais : pourquoi Lyon est une place forte
            </h2>
            <p className="text-gray-600 mb-8">
              Lyon est devenu en quelques années l&apos;un des hubs IA les plus dynamiques de
              France, juste derrière Paris. Quelques raisons concrètes :
            </p>

            <div className="space-y-6">
              {[
                {
                  titre: "La French Tech Lyon",
                  desc: "L'écosystème French Tech Lyon-Saint-Étienne regroupe plus de 2 000 startups et entreprises tech. L'IA y est un axe stratégique majeur, avec des événements réguliers, des meetups, et un réseau de décideurs connectés. Smart Impulsion y est implanté via le board de la French Tech Lyon — ce n'est pas un label, c'est un réseau actif qu'on mobilise pour nos clients.",
                },
                {
                  titre: "Un tissu industriel dense",
                  desc: "La région Auvergne-Rhône-Alpes représente le deuxième bassin industriel de France. Les ETI industrielles lyonnaises (chimie, pharmacie, agroalimentaire, mécanique) sont exactement le profil d'entreprises où l'IA génère le plus de valeur : processus répétitifs, volumes importants, marges à optimiser.",
                },
                {
                  titre: "Des talents disponibles",
                  desc: "Avec l'École Normale Supérieure de Lyon, l'INSA, Centrale Lyon et l'Université Lyon 1, la région forme chaque année des centaines de profils data et IA. Les PME lyonnaises ont accès à un vivier de compétences que beaucoup de régions envient.",
                },
                {
                  titre: "Des entreprises qui bougent",
                  desc: "Des boîtes comme Lyko, Esker, Ivalua, Visiativ ou Cegid montrent que Lyon sait produire des entreprises tech de rang mondial. L'IA n'est pas réservée à la Silicon Valley ni à La Défense. Elle se déploie ici, maintenant, dans des entreprises de toutes tailles.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services IA à Lyon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Nos services IA à Lyon
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Smart Training",
                  desc: "On forme vos équipes à utiliser l'IA concrètement, sur VOTRE métier. Les sessions se font en présentiel à Lyon ou dans vos locaux.",
                  prix: "3 000 à 8 000 euros",
                  duree: "1 à 2 semaines",
                },
                {
                  name: "Smart Analyse",
                  desc: "L'Audit IA Express, c'est 2-3 jours pour identifier vos 3 meilleurs leviers IA et chiffrer le ROI de chacun. On vient dans vos locaux.",
                  prix: "Gratuit à 15 000 euros",
                  duree: "2-3 jours à 2 semaines",
                },
                {
                  name: "Smart Action",
                  desc: "Implémentation concrète : automatisation de vos processus, intégration d'outils IA, déploiement et formation. L'avantage d'une agence IA locale.",
                  prix: "10 000 à 30 000 euros",
                  duree: "4 à 8 semaines",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-orange-500 font-medium">{service.prix}</p>
                    <p className="text-gray-400">{service.duree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cas client */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Cas client dans la région : Lyko, Lyon
            </h2>
            <p className="text-gray-600 mb-6">
              Lyko est une entreprise tech lyonnaise où Laurent Bouzon a passé 9 ans en tant que
              co-fondateur et directeur produit. C&apos;est là que la méthodologie Smart
              Impulsion est née — sur le terrain, pas en théorie.
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Les résultats mesurés :
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { chiffre: "-32%", label: "de temps opérationnel" },
                  { chiffre: "+18%", label: "de performance commerciale" },
                  { chiffre: "24%", label: "de ROI moyen" },
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">{item.chiffre}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <p className="text-gray-700">
                <strong>Ce que ça prouve pour les PME lyonnaises :</strong> les méthodes qui
                fonctionnent dans une entreprise tech de 50 personnes à Lyon fonctionnent aussi
                dans une PME industrielle de 100 personnes à Villeurbanne. Le processus est le
                même : identifier les tâches répétitives, chiffrer le gain, automatiser, mesurer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi une agence IA locale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Pourquoi choisir une agence IA locale à Lyon
            </h2>

            <div className="space-y-6">
              {[
                {
                  titre: "La proximité change tout",
                  desc: "Un consultant IA qui vient dans vos locaux voit des choses qu'un audit à distance ne détecte pas. Les post-it sur l'écran avec les procédures manuelles. L'Excel de 47 onglets qui fait tourner la logistique. Ces détails, on ne les voit que sur le terrain.",
                },
                {
                  titre: "Le réseau local est un accélérateur",
                  desc: "Quand on identifie un besoin spécifique chez un client lyonnais, on peut mobiliser le réseau French Tech Lyon en 48 heures. Pas besoin de chercher sur Google. C'est l'avantage de 9 ans d'écosystème tech lyonnais.",
                },
                {
                  titre: "Le suivi est réel",
                  desc: "Après la mission, on ne disparaît pas. On est à 20 minutes de vos locaux. Le point de suivi à 1 mois, c'est un café dans vos bureaux, pas un call Zoom de 15 minutes.",
                },
                {
                  titre: "Le coût est maîtrisé",
                  desc: "Pas de frais de déplacement depuis Paris. Pas de TJM gonflé pour couvrir les charges d'un bureau à La Défense. Smart Impulsion opère avec l'agilité d'un entrepreneur et la capacité d'une équipe grâce à son AI workforce interne.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="bg-orange-100 text-orange-800 p-1 rounded-full mt-1 flex-shrink-0">
                    &#10003;
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.titre}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ locale */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes — Conseil IA à Lyon
            </h2>
            <LyonFaq />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rencontrons-nous à Lyon
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Un call découverte de 20 minutes suffit pour qualifier le potentiel. L&apos;Audit
              IA Express peut démarrer sous une semaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                Demander un audit IA à Lyon
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white border border-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 text-center">
            Smart Impulsion - Agence d&apos;intelligence artificielle à Lyon - Conseil IA pour PME et ETI - Solutions IA à ROI mesurable
          </p>
        </div>
      </div>
    </div>
  )
}
