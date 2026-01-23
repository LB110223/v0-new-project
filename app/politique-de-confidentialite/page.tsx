import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Smart Impulsion",
  description:
    "Politique de confidentialité et informations sur la protection des données personnelles de Smart Impulsion.",
}

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Politique de Confidentialité</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <p className="text-gray-600 italic">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p>
              La présente politique de confidentialité décrit comment Smart Impulsion collecte, utilise et protège les
              informations personnelles que vous nous fournissez lorsque vous utilisez notre site web ou nos services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collecte des informations</h2>
            <p>Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Remplissez un formulaire de contact sur notre site</li>
              <li>Vous inscrivez à notre newsletter</li>
              <li>Demandez une évaluation gratuite</li>
              <li>Utilisez nos services</li>
            </ul>
            <p>Les informations personnelles que nous pouvons collecter incluent :</p>
            <ul className="list-disc pl-6">
              <li>Votre nom et prénom</li>
              <li>Votre adresse email professionnelle</li>
              <li>Le nom de votre entreprise</li>
              <li>Votre fonction</li>
              <li>Vos besoins et intérêts en matière d'intelligence artificielle</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Utilisation des informations</h2>
            <p>Nous utilisons les informations que nous collectons pour :</p>
            <ul className="list-disc pl-6">
              <li>Répondre à vos demandes et vous fournir les informations ou services que vous avez demandés</li>
              <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
              <li>Améliorer notre site web et nos services</li>
              <li>
                Vous envoyer des emails concernant nos services, des événements ou d'autres informations qui pourraient
                vous intéresser
              </li>
              <li>Vous contacter à des fins de marketing, mais uniquement si vous avez donné votre consentement</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protection des informations</h2>
            <p>
              Nous mettons en œuvre une variété de mesures de sécurité pour protéger vos informations personnelles. Nous
              utilisons des technologies de cryptage avancées et des pratiques sécurisées pour protéger vos informations
              contre tout accès, utilisation ou divulgation non autorisés.
            </p>
            <p>
              Vos informations personnelles sont conservées sur des serveurs sécurisés, accessibles uniquement par un
              nombre limité de personnes ayant des droits d'accès spéciaux à ces systèmes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies et technologies similaires</h2>
            <p>
              Notre site utilise des cookies et des technologies similaires pour améliorer votre expérience, analyser le
              trafic et personnaliser le contenu. Vous pouvez contrôler l'utilisation des cookies au niveau de votre
              navigateur.
            </p>
            <p>Nous utilisons les types de cookies suivants :</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site
              </li>
              <li>
                <strong>Cookies de performance :</strong> pour analyser comment les visiteurs utilisent notre site
              </li>
              <li>
                <strong>Cookies de fonctionnalité :</strong> pour mémoriser vos préférences
              </li>
              <li>
                <strong>Cookies de ciblage :</strong> pour vous montrer du contenu pertinent
              </li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences en matière de cookies à tout moment en cliquant sur "Paramètres des
              cookies" en bas de notre site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partage des informations</h2>
            <p>
              Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre
              consentement, sauf dans les cas suivants :
            </p>
            <ul className="list-disc pl-6">
              <li>Lorsque cela est nécessaire pour fournir un service que vous avez demandé</li>
              <li>Pour nous conformer à une obligation légale</li>
              <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
              <li>
                Avec des prestataires de services qui nous aident à exploiter notre site et à vous fournir nos services,
                sous réserve d'obligations de confidentialité
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants
              concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante :{" "}
              <a href="mailto:contact@smart-impulsion.com" className="text-orange-500 hover:underline">
                contact@smart-impulsion.com
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Conservation des données</h2>
            <p>
              Nous conservons vos informations personnelles aussi longtemps que nécessaire pour atteindre les finalités
              pour lesquelles nous les avons collectées, y compris pour satisfaire à toute exigence légale, comptable ou
              de déclaration.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liens vers des sites tiers</h2>
            <p>
              Notre site peut contenir des liens vers des sites web tiers. Nous n'avons aucun contrôle sur le contenu et
              les pratiques de ces sites et ne pouvons accepter aucune responsabilité pour leurs politiques de
              confidentialité respectives. Nous vous encourageons à lire les politiques de confidentialité de chaque
              site que vous visitez.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Modifications de notre politique de confidentialité
            </h2>
            <p>
              Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Toutes les modifications
              seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter
              régulièrement cette page pour rester informé des changements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à
              l'adresse email suivante :{" "}
              <a href="mailto:contact@smart-impulsion.com" className="text-orange-500 hover:underline">
                contact@smart-impulsion.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
