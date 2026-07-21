import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Notice de prospection commerciale | Smart Impulsion",
  description:
    "Notice d'information (article 14 RGPD) sur le traitement de vos données personnelles dans le cadre de la prospection commerciale B2B menée sous le nom Smart Impulsion par ADM HOLDING.",
  alternates: {
    canonical: "https://www.smart-impulsion.com/notice-prospection",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Notice de prospection commerciale | Smart Impulsion",
    description:
      "Notice d'information (article 14 RGPD) sur le traitement de vos données personnelles dans le cadre de la prospection commerciale B2B menée sous le nom Smart Impulsion.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.smart-impulsion.com/notice-prospection",
  },
}

const sommaire = [
  { id: "responsable", label: "1. Responsable de traitement" },
  { id: "finalite", label: "2. Finalité et base légale" },
  { id: "donnees", label: "3. Catégories de données traitées" },
  { id: "source", label: "4. Source des données" },
  { id: "conservation", label: "5. Durée de conservation" },
  { id: "droits", label: "6. Vos droits" },
  { id: "destinataires", label: "7. Destinataires de vos données" },
  { id: "transferts", label: "8. Transferts hors Union européenne" },
]

export default function NoticeProspection() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>

        <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">Article 14 RGPD</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Notice d'information — Prospection commerciale (Smart Impulsion)
        </h1>

        <p className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 mb-8">
          Dernière mise à jour : 21 juillet 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <p>
              La présente notice a pour objet d'informer les personnes qui reçoivent un message de prospection
              commerciale émis sous le nom « Smart Impulsion » de la manière dont leurs données personnelles sont
              traitées. Elle est établie conformément à l'
              <strong>article 14 du Règlement général sur la protection des données (RGPD)</strong>, qui s'applique
              lorsque les données n'ont pas été collectées directement auprès de la personne concernée.
            </p>
          </section>

          <nav aria-label="Sommaire" className="not-prose mb-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Sommaire</h2>
            <ol className="grid gap-2 sm:grid-cols-2">
              {sommaire.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-gray-700 hover:text-orange-500 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="responsable" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable de traitement</h2>
            <p>Le responsable du traitement est :</p>
            <p>
              <strong>ADM HOLDING</strong> — société par actions simplifiée (SAS)
              <br />
              SIREN 933 805 855 — SIRET du siège 933 805 855 00014
              <br />
              Siège social : 60 rue François Ier, 75008 Paris
              <br />
              Représentée par son Président, Laurent Bouzon.
            </p>
            <p>
              « Smart Impulsion » est le nom sous lequel ADM HOLDING exploite l'activité au titre de laquelle la
              prospection est réalisée ; l'entité juridique responsable du traitement demeure <strong>ADM HOLDING</strong>
              .
            </p>
            <p>
              Pour toute question relative à la protection de vos données, pour exercer vos droits ou pour vous
              désinscrire :{" "}
              <a href="mailto:laurent@smart-impulsion.com" className="text-orange-700 hover:underline">
                <strong>laurent@smart-impulsion.com</strong>
              </a>
              .
            </p>
          </section>

          <section id="finalite" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalité et base légale</h2>
            <p>
              <strong>Finalité.</strong> Vos données sont traitées à des fins de{" "}
              <strong>prospection commerciale entre professionnels (B2B)</strong> : vous adresser, sur votre adresse
              professionnelle, une proposition en lien avec votre fonction concernant l'offre Smart Impulsion, et assurer
              le suivi de cet échange. La prospection est réalisée{" "}
              <strong>exclusivement sur des adresses email professionnelles</strong> :{" "}
              <strong>aucune adresse email personnelle n'est utilisée pour l'envoi</strong>.
            </p>
            <p>
              <strong>Base légale : l'intérêt légitime</strong> (article 6.1.f du RGPD). L'intérêt poursuivi est le{" "}
              <strong>
                développement commercial d'ADM HOLDING pour son activité exploitée sous le nom Smart Impulsion
              </strong>
              , par la prise de contact avec des professionnels dont la fonction présente un lien avec l'offre proposée.
              Ce traitement s'inscrit dans un cadre strictement professionnel (adresse professionnelle, objet en rapport
              avec votre fonction) et s'accompagne d'un droit d'opposition simple et gratuit, exercé sans délai (voir §6),
              de sorte que son incidence sur votre vie privée demeure limitée.
            </p>
            <p>
              <strong>Transparence sur le suivi d'ouverture et de clic.</strong> Dans le cadre de ce traitement,{" "}
              <strong>un suivi d'ouverture des emails (pixel) et un suivi des clics sont réalisés</strong> ; à cette fin,{" "}
              <strong>l'ensemble des liens contenus dans les messages est réécrit</strong> pour passer par un dispositif
              de mesure. Ces données alimentent nos <strong>analyses</strong>, la production de <strong>signaux</strong>{" "}
              commerciaux et l'<strong>accélération des séquences</strong> de prospection (voir §3). Nous vous en informons
              en toute transparence : ce{" "}
              <strong>traçage individuel n'est pas nécessaire à la finalité de prise de contact</strong> et,{" "}
              <strong>mis en œuvre sans votre consentement, il constitue un point de non-conformité</strong> au regard de
              la réglementation « vie privée et communications électroniques » (ePrivacy).{" "}
              <strong>ADM HOLDING assume ce choix</strong> en connaissance de cause et l'a intégré comme{" "}
              <strong>facteur pesant défavorablement</strong> dans son analyse de mise en balance des intérêts. Ce suivi{" "}
              <strong>ne fonde aucune décision produisant des effets juridiques</strong> à votre égard. Si vous exercez
              votre droit d'opposition, <strong>les envois futurs et le traitement de vos données cessent</strong> ;
              toutefois, les emails <strong>déjà reçus</strong> peuvent continuer à enregistrer des ouvertures ou des
              clics, le mécanisme s'exécutant sur votre terminal, hors de notre contrôle technique (voir §6).
            </p>
          </section>

          <section id="donnees" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Catégories de données traitées</h2>
            <p>
              Sont traitées des <strong>données professionnelles</strong> vous concernant, dans le cadre de la prospection
              et de son suivi. La prospection est réalisée{" "}
              <strong>exclusivement sur des adresses email professionnelles</strong> :{" "}
              <strong>aucune adresse email personnelle n'est utilisée pour vous adresser un message</strong>. Une ou
              plusieurs <strong>adresses email personnelles peuvent néanmoins être collectées et conservées</strong> par
              l'enrichissement de nos données (via d'autres flux que le ciblage de prospection) ; elles ne servent jamais
              à l'envoi et sont conservées au seul titre de l'historique d'enrichissement.
            </p>

            <p className="font-semibold text-gray-900">Identité et coordonnées professionnelles</p>
            <ul className="list-disc pl-6 mb-4">
              <li>identité professionnelle : nom, prénom ;</li>
              <li>fonction / intitulé de poste et, le cas échéant, titre professionnel affiché (« headline ») ;</li>
              <li>photographie professionnelle, lorsqu'elle figure sur un profil professionnel public ;</li>
              <li>
                <strong>adresse email professionnelle</strong> et indicateur technique de délivrabilité de cette adresse
                (statut de validité) ;
              </li>
              <li>le cas échéant, téléphone professionnel.</li>
            </ul>

            <p className="font-semibold text-gray-900">Présence et parcours professionnels</p>
            <ul className="list-disc pl-6 mb-4">
              <li>adresses de profils professionnels en ligne (par exemple LinkedIn, Twitter/X) ;</li>
              <li>
                localisation professionnelle : ville, région, pays et, le cas échéant, fuseau horaire (utilisés pour
                déterminer le périmètre géographique autorisé et le moment d'envoi) ;
              </li>
              <li>
                éléments de parcours et de profil professionnel issus de sources professionnelles publiques : niveau de
                séniorité, département / service, historique et expériences professionnels, formation, compétences,
                langues et certifications, ainsi que des éléments publics de votre activité professionnelle (par exemple
                publications, prises de parole ou engagements associatifs professionnels) lorsqu'ils figurent sur vos
                profils professionnels publics.
              </li>
            </ul>

            <p className="font-semibold text-gray-900">Données de votre entreprise</p>
            <ul className="list-disc pl-6 mb-4">
              <li>nom, secteur d'activité, taille, site web et éléments d'identification de votre entreprise.</li>
            </ul>

            <p className="font-semibold text-gray-900">Données liées au déroulement de la prospection</p>
            <ul className="list-disc pl-6 mb-4">
              <li>historique des échanges avec vous (messages envoyés, réponses reçues) ;</li>
              <li>statut de la prospection (par exemple : contact en cours, réponse reçue, séquence arrêtée) ;</li>
              <li>
                données d'opposition / de désinscription (le fait que vous ayez exercé votre droit d'opposition) ;
              </li>
              <li>
                des données d'engagement email : un <strong>suivi d'ouverture des emails</strong> (pixel) et un{" "}
                <strong>suivi des clics</strong> — <strong>l'ensemble des liens contenus dans les messages est réécrit</strong>{" "}
                pour permettre ce suivi. Ces données alimentent nos <strong>analyses</strong>, la production de{" "}
                <strong>signaux</strong> commerciaux et l'<strong>accélération des séquences</strong> de prospection ;
              </li>
              <li>
                le cas échéant, des <strong>données déduites</strong> destinées à personnaliser ou prioriser la prise de
                contact (par exemple un indicateur de pertinence commerciale, ou un style de communication supposé,
                déduits de vos données professionnelles publiques). Ces éléments déduits ne servent qu'à adapter la
                démarche commerciale et ne produisent aucun effet juridique à votre égard.
              </li>
            </ul>

            <p>
              <strong>Aucune donnée sensible au sens de l'article 9 du RGPD</strong> (origine raciale ou ethnique,
              opinions politiques, convictions religieuses ou philosophiques, appartenance syndicale, données de santé,
              vie ou orientation sexuelle, etc.){" "}
              <strong>
                n'est recherchée, sélectionnée ni utilisée comme critère de prospection ou de personnalisation.
              </strong>{" "}
              Notre ciblage repose exclusivement sur des données professionnelles.
            </p>

            <p>
              <strong>Absence de décision automatisée au sens de l'article 22.</strong> La supervision humaine se situe à
              la <strong>configuration de la campagne</strong> : une personne{" "}
              <strong>configure et valide l'ensemble de la séquence de messages avant son lancement</strong>. Les envois
              s'effectuent ensuite <strong>automatiquement</strong>, selon la planification définie, sans validation
              message par message. L'envoi d'un email de prospection{" "}
              <strong>ne produit pas d'effet juridique à votre égard et ne vous affecte pas de manière significative</strong>{" "}
              au sens de l'article 22 du RGPD ; les éléments déduits de personnalisation ou de priorisation évoqués
              ci-dessus n'emportent, eux non plus, aucune décision de cette nature.
            </p>
          </section>

          <section id="source" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Source des données</h2>
            <p>Vos coordonnées professionnelles n'ont pas été collectées directement auprès de vous. Elles proviennent :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                de <strong>fournisseurs de données professionnelles B2B</strong>, notamment <strong>Apollo.io</strong> ;
              </li>
              <li>
                d'un <strong>enrichissement à partir de sources professionnelles accessibles en ligne</strong> (sites
                d'entreprise, annuaires et profils professionnels publics).
              </li>
            </ul>
            <p>
              Les fournisseurs de données professionnelles B2B (dont Apollo.io) constituent et exploitent leur propre base
              de données pour leur compte : à ce titre ils agissent en tant que{" "}
              <strong>responsables de traitement autonomes</strong> (voir §7), et non comme prestataires d'ADM HOLDING.
            </p>
          </section>

          <section id="conservation" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durée de conservation</h2>
            <p>
              Vos données de prospection sont conservées pendant une durée maximale de{" "}
              <strong>trois (3) ans à compter de leur collecte ou du dernier contact émanant de vous</strong> (par exemple
              une réponse, un clic ou toute autre interaction de votre part). Au-delà, elles sont supprimées ou
              anonymisées.
            </p>
            <p>
              En cas d'opposition de votre part, vos coordonnées sont retirées de la prospection et inscrites sur une{" "}
              <strong>liste d'opposition</strong> (« liste repoussoir ») à seule fin de ne plus vous solliciter.
              Conformément à la recommandation de la CNIL, cette inscription est conservée{" "}
              <strong>pendant au moins trois (3) ans</strong>, sous une forme minimisée (empreinte de votre adresse), et
              n'est utilisée qu'à cette seule fin.
            </p>
          </section>

          <section id="droits" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vos droits</h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez, dans les conditions prévues par la
              réglementation, des droits suivants sur vos données :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>droit d'<strong>accès</strong> ;</li>
              <li>droit de <strong>rectification</strong> ;</li>
              <li>droit à l'<strong>effacement</strong>, dans les conditions prévues par la réglementation ;</li>
              <li>
                droit d'<strong>opposition</strong> au traitement — en particulier, vous pouvez{" "}
                <strong>vous opposer à tout moment à la prospection</strong> en utilisant le{" "}
                <strong>lien de désinscription</strong> présent dans chaque email, ou en écrivant à l'adresse ci-dessous ;
                votre demande est prise en compte sans délai : elle{" "}
                <strong>met fin aux envois futurs et au traitement de vos données de prospection</strong>. Les emails{" "}
                <strong>déjà reçus</strong> peuvent toutefois continuer à enregistrer des ouvertures ou des clics, le
                mécanisme de suivi s'exécutant sur votre terminal (voir §2) ;
              </li>
              <li>droit à la <strong>limitation</strong> du traitement, dans les conditions prévues par la réglementation ;</li>
              <li>droit de définir des <strong>directives</strong> relatives au sort de vos données après votre décès.</li>
            </ul>
            <p>
              Pour exercer ces droits, écrivez à{" "}
              <a href="mailto:laurent@smart-impulsion.com" className="text-orange-700 hover:underline">
                <strong>laurent@smart-impulsion.com</strong>
              </a>
              . Vous disposez également du droit d'introduire une <strong>réclamation auprès de la CNIL</strong>{" "}
              (Commission nationale de l'informatique et des libertés — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex
              07 — www.cnil.fr).
            </p>
          </section>

          <section id="destinataires" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Destinataires de vos données</h2>
            <p>
              <strong>Sous-traitants d'ADM HOLDING.</strong> Vos données sont accessibles au personnel habilité d'ADM
              HOLDING (activité Smart Impulsion) ainsi qu'à des prestataires techniques agissant en qualité de{" "}
              <strong>sous-traitants</strong> pour son compte, dans le seul but de fournir leur service :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                la <strong>solution CRM éditée par SymbiozAI</strong>, qui assure la gestion de la relation commerciale et
                l'automatisation des envois ;
              </li>
              <li>
                <strong>DigitalOcean</strong>, prestataire d'<strong>hébergement</strong> de l'infrastructure
                (infrastructure localisée dans l'Union européenne — voir §8) ;
              </li>
              <li>
                <strong>Anthropic</strong> (service « Claude »), prestataire d'
                <strong>analyse par intelligence artificielle</strong>.
              </li>
            </ul>
            <p>
              Ces sous-traitants sont liés par un contrat de sous-traitance (article 28 du RGPD) et ne traitent vos
              données que sur instruction d'ADM HOLDING, pour la fourniture de leur service, à l'exclusion de toute autre
              finalité. En particulier, <strong>Anthropic</strong>, conformément à ses conditions contractuelles
              commerciales, <strong>ne réutilise pas vos données pour entraîner ses modèles par défaut</strong> — hors
              opt-in de notre part ou signalement explicite (par exemple un retour signalant un contenu).
            </p>
            <p>
              <strong>Fournisseurs de données professionnelles B2B — responsables autonomes.</strong> Les fournisseurs de
              données auprès desquels vos coordonnées ont été obtenues (notamment <strong>Apollo.io</strong>) agissent en
              tant que <strong>responsables de traitement autonomes</strong> (indépendants) : ils déterminent leurs
              propres finalités et modalités pour la constitution et l'enrichissement de leur base de données
              professionnelle, ce qui peut inclure des opérations de profilage et d'enrichissement pour leur compte
              propre. Ces traitements sont régis par <strong>leur propre politique de confidentialité</strong> et
              échappent au contrôle d'ADM HOLDING. Pour toute demande relative à ces traitements, vous pouvez vous
              adresser directement au fournisseur concerné (Apollo.io : voir sa politique de confidentialité et ses
              modalités d'opposition).
            </p>
          </section>

          <section id="transferts" className="mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transferts hors Union européenne</h2>
            <p>
              Certains acteurs mentionnés au §7 sont établis en dehors de l'Union européenne, notamment aux{" "}
              <strong>États-Unis</strong>. Il n'existe pas de décision d'adéquation générale pour les États-Unis : une
              protection reconnue adéquate ne vaut que pour les organismes{" "}
              <strong>
                certifiés au cadre de protection des données UE–États-Unis (EU-U.S. Data Privacy Framework, « DPF »)
              </strong>
              . À défaut, les transferts sont encadrés par les{" "}
              <strong>clauses contractuelles types (CCT)</strong> de la Commission européenne (article 46 du RGPD).
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Apollo.io</strong> (fournisseur de données, <strong>responsable de traitement autonome</strong>,
                États-Unis) : cet acteur déclare <strong>adhérer au Data Privacy Framework UE–États-Unis</strong> et
                recourir, à défaut, aux <strong>clauses contractuelles types</strong>. S'agissant d'un responsable
                autonome, ces transferts relèvent de <strong>sa propre politique</strong> ; vous pouvez vous adresser
                directement à Apollo.io pour obtenir des informations sur ses garanties.
              </li>
              <li>
                <strong>Anthropic</strong> (analyse par intelligence artificielle, <strong>sous-traitant</strong> d'ADM
                HOLDING, États-Unis) : les transferts sont encadrés par un{" "}
                <strong>accord de traitement des données (DPA) intégrant les clauses contractuelles types</strong> de la
                Commission européenne (article 46.2.c du RGPD, module « responsable du traitement → sous-traitant »,
                décision d'exécution (UE) 2021/914). Anthropic déclare par ailleurs{" "}
                <strong>participer au Data Privacy Framework</strong> ; la garantie effectivement mobilisée demeure les
                clauses contractuelles types intégrées au DPA.
              </li>
              <li>
                <strong>DigitalOcean</strong> (hébergement, <strong>sous-traitant</strong> d'ADM HOLDING) :
                l'infrastructure est{" "}
                <strong>hébergée dans l'Union européenne (centre de données de Francfort, Allemagne)</strong> ; les
                données hébergées ne font donc pas l'objet d'un transfert hors UE dans le cours normal du service.
                DigitalOcean étant un prestataire établi aux États-Unis, tout{" "}
                <strong>accès administratif résiduel</strong> depuis les États-Unis est encadré par un{" "}
                <strong>DPA intégrant les clauses contractuelles types</strong> de la Commission européenne (article 46 du
                RGPD).
              </li>
            </ul>
            <p>
              Pour les <strong>sous-traitants d'ADM HOLDING</strong> (Anthropic, DigitalOcean), vous pouvez obtenir une{" "}
              <strong>copie des garanties appropriées</strong> (clauses contractuelles types applicables, et attestation
              DPF le cas échéant) en écrivant à{" "}
              <a href="mailto:laurent@smart-impulsion.com" className="text-orange-700 hover:underline">
                laurent@smart-impulsion.com
              </a>
              . Pour <strong>Apollo.io</strong> (responsable de traitement autonome), ces garanties relèvent de sa propre
              documentation, accessible via sa politique de confidentialité.
            </p>
          </section>

          <section className="not-prose border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 italic">
              La présente notice est accessible en permanence depuis le lien figurant en pied de chaque email de
              prospection. Chaque email identifie l'émetteur — « Smart Impulsion, activité exploitée par ADM HOLDING » —
              et comporte un moyen de désinscription simple et gratuit. La présente notice est susceptible d'être mise à
              jour ; la date de dernière mise à jour figure en tête de ce document.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
