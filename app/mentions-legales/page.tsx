import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Mentions Légales | Smart Impulsion",
  description:
    "Mentions légales et informations juridiques de Smart Impulsion, cabinet de conseil en intelligence artificielle.",
}

export default function MentionsLegales() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Mentions Légales</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informations légales</h2>
            <p>
              Le site Smart Impulsion est édité par la société Smart Impulsion, société par actions simplifiée (SAS) au
              capital de [montant du capital] euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous
              le numéro [numéro RCS], dont le siège social est situé à [adresse du siège social].
            </p>
            <p>
              <strong>Numéro de TVA intracommunautaire :</strong> [numéro TVA]
              <br />
              <strong>Directeur de la publication :</strong> Laurent Bouzon et Mohammad-Ali Bacha, Co-fondateurs
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
            <p>
              Le site Smart Impulsion est hébergé par la société Vercel Inc., dont le siège social est situé au 340 S
              Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
            <p>
              <strong>Contact :</strong>{" "}
              <a href="https://vercel.com/contact" className="text-orange-500 hover:underline">
                https://vercel.com/contact
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site Smart Impulsion (structure, textes, logos, images, vidéos, graphiques, etc.)
              est la propriété exclusive de Smart Impulsion ou de ses partenaires. Ce contenu est protégé par les lois
              françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou
              partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
              l'autorisation écrite préalable de Smart Impulsion.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une
              contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la
              Propriété Intellectuelle.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des données personnelles</h2>
            <p>
              Smart Impulsion s'engage à respecter la confidentialité des données personnelles communiquées par les
              utilisateurs de son site internet. Les informations recueillies font l'objet d'un traitement informatique
              destiné à répondre aux demandes des utilisateurs et à les informer sur les services proposés par Smart
              Impulsion.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et
              Libertés, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation, de
              portabilité et d'opposition aux données vous concernant. Vous pouvez exercer ces droits en nous contactant
              à l'adresse email suivante :{" "}
              <a href="mailto:contact@smart-impulsion.fr" className="text-orange-500 hover:underline">
                contact@smart-impulsion.fr
              </a>
              .
            </p>
            <p>
              Pour plus d'informations sur la façon dont nous traitons vos données, veuillez consulter notre{" "}
              <Link href="/politique-de-confidentialite" className="text-orange-500 hover:underline">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p>
              Le site Smart Impulsion utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
              Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous permettent de vous offrir
              une expérience personnalisée.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être informé lorsqu'un
              cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si
              les cookies sont désactivés.
            </p>
            <p>
              Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre{" "}
              <Link href="/politique-de-confidentialite" className="text-orange-500 hover:underline">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liens hypertextes</h2>
            <p>
              Le site Smart Impulsion peut contenir des liens hypertextes vers d'autres sites internet. Smart Impulsion
              n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation de responsabilité</h2>
            <p>
              Smart Impulsion s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des
              informations diffusées sur son site. Cependant, Smart Impulsion ne peut garantir l'exactitude, la
              précision ou l'exhaustivité des informations mises à disposition sur son site.
            </p>
            <p>
              En conséquence, Smart Impulsion décline toute responsabilité pour toute imprécision, inexactitude ou
              omission portant sur des informations disponibles sur son site, ainsi que pour tous dommages résultant
              d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à
              disposition sur le site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales ou à l'utilisation du site Smart Impulsion,
              vous pouvez nous contacter à l'adresse email suivante :{" "}
              <a href="mailto:contact@smart-impulsion.fr" className="text-orange-500 hover:underline">
                contact@smart-impulsion.fr
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  )
}
