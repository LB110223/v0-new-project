import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LyonFaq } from "./lyon-faq"

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Smart Impulsion - Agence IA Lyon",
  description:
    "Agence de conseil en intelligence artificielle pour PME et ETI a Lyon. Audit IA, formation IA, deploiement IA avec ROI mesurable.",
  url: "https://www.smart-impulsion.com/presence-locale/lyon",
  email: "contact@smart-impulsion.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressRegion: "Auvergne-Rhone-Alpes",
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
    { "@type": "AdministrativeArea", name: "Auvergne-Rhone-Alpes" },
  ],
  serviceType: [
    "Conseil en intelligence artificielle",
    "Audit IA",
    "Formation IA",
    "Deploiement IA",
  ],
}

const lyonFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Smart Impulsion intervient-il uniquement a Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. On intervient dans toute la France, avec une priorite sur la region Auvergne-Rhone-Alpes et l'Ile-de-France. Mais Lyon est notre base — c'est la ou on est le plus reactif, ou notre reseau est le plus dense, et ou on peut intervenir en presentiel sans delai. Pour les entreprises lyonnaises, c'est un avantage concret : un audit IA demarre en quelques jours, pas en quelques semaines.",
      },
    },
    {
      "@type": "Question",
      name: "Existe-t-il des aides pour financer un projet IA a Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le programme Diag Data IA de BPI France permet de cofinancer un diagnostic IA. La Region Auvergne-Rhone-Alpes propose egalement des dispositifs d'aide a l'innovation pour les PME. On vous aide a identifier les financements disponibles des l'audit — c'est inclus dans notre accompagnement.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types d'entreprises lyonnaises accompagnez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Des PME et ETI de 10 a 5 000 salaries, dans tous les secteurs. Industrie, distribution, services, finance, sante — les processus repetitifs a automatiser existent partout. Ce qui compte, c'est la volonte d'agir et un minimum de maturite operationnelle.",
      },
    },
    {
      "@type": "Question",
      name: "Comment prendre rendez-vous pour un audit IA a Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un call decouverte de 20 minutes suffit pour qualifier le potentiel. Contactez-nous directement via le site (smart-impulsion.com/contact) ou sur LinkedIn. Si le potentiel est la, l'Audit IA Express peut demarrer sous une semaine.",
      },
    },
  ],
}

export function LyonEnriched() {
  return (
    <div className="bg-white">
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
            Retour a l&apos;accueil
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Agence IA a Lyon
              <br />
              <span className="text-orange-400">pour PME et ETI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Smart Impulsion accompagne les PME et ETI lyonnaises dans le deploiement de
              l&apos;intelligence artificielle avec un objectif unique : un ROI mesurable. Pas de
              grandes theories. Des resultats en 4 semaines.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres cles */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { chiffre: "-32%", label: "de temps operationnel" },
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

      {/* Smart Impulsion a Lyon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Smart Impulsion, votre agence IA a Lyon
            </h2>
            <p className="text-gray-600">
              Lyon n&apos;est pas un choix de circonstance. C&apos;est la ou Smart Impulsion est
              ne, la ou Laurent Bouzon a passe 9 ans a construire des produits tech chez Lyko,
              et la ou il a co-fonde SymbiozAI. C&apos;est aussi la ou il siege au board de la
              French Tech Lyon. Quand on parle de conseil IA a Lyon, on parle d&apos;un ancrage
              reel — pas d&apos;une adresse sur une page web.
            </p>
            <p className="text-gray-600">
              On connait le tissu economique lyonnais. On connait ses decideurs. Et on sait que
              les PME de la region n&apos;ont ni le budget des grands groupes parisiens ni le
              temps d&apos;attendre 6 mois un premier resultat.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosysteme IA lyonnais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              L&apos;ecosysteme IA lyonnais : pourquoi Lyon est une place forte
            </h2>
            <p className="text-gray-600 mb-8">
              Lyon est devenu en quelques annees l&apos;un des hubs IA les plus dynamiques de
              France, juste derriere Paris. Quelques raisons concretes :
            </p>

            <div className="space-y-6">
              {[
                {
                  titre: "La French Tech Lyon",
                  desc: "L'ecosysteme French Tech Lyon-Saint-Etienne regroupe plus de 2 000 startups et entreprises tech. L'IA y est un axe strategique majeur, avec des evenements reguliers, des meetups, et un reseau de decideurs connectes. Smart Impulsion y est implante via le board de la French Tech Lyon — ce n'est pas un label, c'est un reseau actif qu'on mobilise pour nos clients.",
                },
                {
                  titre: "Un tissu industriel dense",
                  desc: "La region Auvergne-Rhone-Alpes represente le deuxieme bassin industriel de France. Les ETI industrielles lyonnaises (chimie, pharmacie, agroalimentaire, mecanique) sont exactement le profil d'entreprises ou l'IA genere le plus de valeur : processus repetitifs, volumes importants, marges a optimiser.",
                },
                {
                  titre: "Des talents disponibles",
                  desc: "Avec l'Ecole Normale Superieure de Lyon, l'INSA, Centrale Lyon et l'Universite Lyon 1, la region forme chaque annee des centaines de profils data et IA. Les PME lyonnaises ont acces a un vivier de competences que beaucoup de regions envient.",
                },
                {
                  titre: "Des entreprises qui bougent",
                  desc: "Des boites comme Lyko, Esker, Ivalua, Visiativ ou Cegid montrent que Lyon sait produire des entreprises tech de rang mondial. L'IA n'est pas reservee a la Silicon Valley ni a La Defense. Elle se deploie ici, maintenant, dans des entreprises de toutes tailles.",
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

      {/* Services IA a Lyon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Nos services IA a Lyon
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Smart Training",
                  desc: "On forme vos equipes a utiliser l'IA concretement, sur VOTRE metier. Les sessions se font en presentiel a Lyon ou dans vos locaux.",
                  prix: "3 000 a 8 000 euros",
                  duree: "1 a 2 semaines",
                },
                {
                  name: "Smart Analyse",
                  desc: "L'Audit IA Express, c'est 2-3 jours pour identifier vos 3 meilleurs leviers IA et chiffrer le ROI de chacun. On vient dans vos locaux.",
                  prix: "Gratuit a 15 000 euros",
                  duree: "2-3 jours a 2 semaines",
                },
                {
                  name: "Smart Action",
                  desc: "Implementation concrete : automatisation de vos processus, integration d'outils IA, deploiement et formation. L'avantage d'une agence IA locale.",
                  prix: "10 000 a 30 000 euros",
                  duree: "4 a 8 semaines",
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
              Cas client dans la region : Lyko, Lyon
            </h2>
            <p className="text-gray-600 mb-6">
              Lyko est une entreprise tech lyonnaise ou Laurent Bouzon a passe 9 ans en tant que
              co-fondateur et directeur produit. C&apos;est la que la methodologie Smart
              Impulsion est nee — sur le terrain, pas en theorie.
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Les resultats mesures :
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { chiffre: "-32%", label: "de temps operationnel" },
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
                <strong>Ce que ca prouve pour les PME lyonnaises :</strong> les methodes qui
                fonctionnent dans une entreprise tech de 50 personnes a Lyon fonctionnent aussi
                dans une PME industrielle de 100 personnes a Villeurbanne. Le processus est le
                meme : identifier les taches repetitives, chiffrer le gain, automatiser, mesurer.
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
              Pourquoi choisir une agence IA locale a Lyon
            </h2>

            <div className="space-y-6">
              {[
                {
                  titre: "La proximite change tout",
                  desc: "Un consultant IA qui vient dans vos locaux voit des choses qu'un audit a distance ne detecte pas. Les post-it sur l'ecran avec les procedures manuelles. L'Excel de 47 onglets qui fait tourner la logistique. Ces details, on ne les voit que sur le terrain.",
                },
                {
                  titre: "Le reseau local est un accelerateur",
                  desc: "Quand on identifie un besoin specifique chez un client lyonnais, on peut mobiliser le reseau French Tech Lyon en 48 heures. Pas besoin de chercher sur Google. C'est l'avantage de 9 ans d'ecosysteme tech lyonnais.",
                },
                {
                  titre: "Le suivi est reel",
                  desc: "Apres la mission, on ne disparait pas. On est a 20 minutes de vos locaux. Le point de suivi a 1 mois, c'est un cafe dans vos bureaux, pas un call Zoom de 15 minutes.",
                },
                {
                  titre: "Le cout est maitrise",
                  desc: "Pas de frais de deplacement depuis Paris. Pas de TJM gonfle pour couvrir les charges d'un bureau a La Defense. Smart Impulsion opere avec l'agilite d'un entrepreneur et la capacite d'une equipe grace a son AI workforce interne.",
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
              Questions frequentes — Conseil IA a Lyon
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
              Rencontrons-nous a Lyon
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Un call decouverte de 20 minutes suffit pour qualifier le potentiel. L&apos;Audit
              IA Express peut demarrer sous une semaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                Demander un audit IA a Lyon
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white border border-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Retour a l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 text-center">
            Smart Impulsion - Agence d&apos;intelligence artificielle a Lyon - Conseil IA pour PME et ETI - Solutions IA a ROI mesurable
          </p>
        </div>
      </div>
    </div>
  )
}
