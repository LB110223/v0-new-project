import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqAccordion } from "./faq-accordion"

export const metadata: Metadata = {
  title: "FAQ IA en entreprise : 20 questions essentielles | Smart Impulsion",
  description:
    "Réponses aux 20 questions fréquentes sur l'IA en PME et ETI : ROI, coûts, mise en œuvre, résultats. Guide complet Smart Impulsion.",
  alternates: {
    canonical: "https://www.smart-impulsion.com/faq",
  },
  openGraph: {
    title: "FAQ IA en entreprise : 20 questions essentielles | Smart Impulsion",
    description:
      "Réponses aux 20 questions fréquentes sur l'IA en PME et ETI : ROI, coûts, mise en œuvre, résultats mesurables.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.smart-impulsion.com/faq",
  },
}

const faqClusters = [
  {
    title: "Comprendre l'IA pour son entreprise",
    questions: [
      {
        question: "Qu'est-ce que l'IA peut concretement apporter a une PME ?",
        answer:
          "L'IA n'est pas reservee aux grands groupes. Pour une PME, les gains les plus immediats sont operationnels : automatiser la saisie de commandes, generer des devis en quelques secondes, trier et router les emails entrants, ou encore fiabiliser le controle qualite. Chez un de nos clients industriels, l'automatisation du traitement des commandes a libere 12 heures par semaine pour l'equipe commerciale — soit l'equivalent d'un mi-temps reaffecte a la vente. L'IA ne remplace pas votre metier. Elle retire les taches repetitives qui freinent votre croissance. Le point de depart, c'est toujours la meme question : quel processus vous coute le plus cher en temps humain ?",
      },
      {
        question: "Par ou commencer avec l'IA dans mon entreprise ?",
        answer:
          "Par le processus qui vous fait perdre le plus de temps et d'argent. Pas par la technologie. La premiere etape, c'est un diagnostic de vos operations : ou sont les taches repetitives ? Ou les erreurs humaines coutent-elles cher ? Un audit IA de 2-3 jours suffit pour identifier vos 3 meilleurs leviers et chiffrer le ROI de chacun. On recommande de commencer par un quick win — un projet a faible investissement et resultat rapide (4 semaines max). C'est comme ca qu'on cree la preuve en interne et qu'on embarque les equipes. Surtout : ne commencez pas par acheter un outil. Commencez par comprendre le probleme.",
      },
      {
        question: "Faut-il des donnees pour utiliser l'IA ?",
        answer:
          "Ca depend du cas d'usage. Pour de l'IA generative (redaction, synthese, chatbot), non — les modeles fonctionnent avec vos documents existants, vos emails, vos procedures. Pour de l'IA predictive (prevision de ventes, detection d'anomalies), oui, il faut des donnees historiques, mais souvent moins qu'on le croit : quelques milliers de lignes dans un Excel peuvent suffire pour un premier modele. Ce qu'on constate chez 80% des PME qu'on accompagne : les donnees existent deja, elles sont juste dispersees entre 4 outils differents. L'audit IA sert aussi a ca — cartographier ce que vous avez avant de decider ce qu'on en fait.",
      },
      {
        question: "L'IA est-elle accessible financierement pour une PME ?",
        answer:
          "Oui, et c'est un changement majeur par rapport a il y a 3 ans. Les outils d'IA generative (ChatGPT, Claude, Mistral) coutent entre 20 et 200 euros par mois par utilisateur. Un projet d'automatisation IA en PME demarre entre 5 000 et 15 000 euros en forfait — pas 200 000 euros comme les grands cabinets le proposent. En face, les gains typiques qu'on mesure : -32% de temps operationnel, soit des dizaines de milliers d'euros par an de capacite recuperee. Le vrai cout pour une PME, c'est pas l'IA. C'est de ne rien faire pendant que vos concurrents automatisent. Et le programme Diag Data IA de BPI France peut cofinancer votre diagnostic.",
      },
      {
        question: "Quelle difference entre l'IA generative et l'IA \"classique\" ?",
        answer:
          "L'IA classique (machine learning) analyse vos donnees pour predire, classer ou detecter : prevision de demande, scoring client, detection de fraude. Elle a besoin de donnees historiques pour apprendre. L'IA generative (ChatGPT, Claude, Mistral) produit du contenu : texte, code, synthese, traduction. Elle fonctionne avec vos instructions et vos documents, sans entrainement specifique. Pour une PME, les deux sont utiles. L'IA generative donne des resultats immediats (des le jour 1). L'IA classique demande plus de preparation mais offre des gains structurels (prevision de ventes avec +18% de precision, par exemple). On recommande de commencer par l'IA generative — c'est le quick win le plus accessible.",
      },
    ],
  },
  {
    title: "L'offre Smart Impulsion",
    questions: [
      {
        question: "Qu'est-ce qu'un audit IA ?",
        answer:
          "Un audit IA, c'est un diagnostic de 2-3 jours qui repond a une seule question : ou l'IA peut-elle vous faire gagner du temps et de l'argent ? Concretement, on analyse vos processus operationnels, on identifie les 3 quick wins les plus rentables, et on chiffre le ROI projete de chacun. Le livrable, c'est un plan d'action, pas un rapport de 200 pages. On vous dit : \"Automatisez ce processus, ca vous coutera X, ca vous rapportera Y en Z semaines.\" C'est notre offre Smart Analyse. L'Audit IA Express est gratuit ou a 2 000 euros maximum — parce qu'on pense que si les chiffres sont la, la mission suivante se vend toute seule.",
      },
      {
        question: "Combien coute une mission de conseil IA chez Smart Impulsion ?",
        answer:
          "On travaille au forfait, pas en TJM. Trois niveaux d'engagement : Smart Training (formation de vos equipes) entre 3 000 et 8 000 euros, Smart Analyse (audit complet et roadmap IA) entre 5 000 et 15 000 euros, Smart Action (implementation et deploiement) entre 10 000 et 30 000 euros. Chaque mission commence par un ROI projete. Si les chiffres ne tiennent pas, on vous le dit — et on ne demarre pas. C'est ca la difference avec un prestataire au temps passe : on s'engage sur un resultat, pas sur des jours factures. Le ticket moyen de nos missions est autour de 10 000 euros, avec un ROI moyen mesure de 24%.",
      },
      {
        question: "Quelle difference entre Smart Impulsion et un grand cabinet de conseil ?",
        answer:
          "Le prix, la vitesse et l'engagement. Un grand cabinet facture 200 000 euros et plus pour un projet IA qui met 3 a 6 mois a produire un livrable — souvent un PowerPoint. Smart Impulsion facture 5 000 a 30 000 euros, livre des resultats mesurables en 4 semaines, et s'engage sur un ROI chiffre avant de demarrer. Autre difference : on execute. Pas juste du conseil, pas juste de la formation — les trois integres. Le fondateur, Laurent Bouzon, a 9 ans de produits tech chez Lyko et a co-fonde SymbiozAI. Il ne vend pas de l'IA theorique — il deploie ce qui rapporte. Et vous parlez directement avec lui, pas avec un consultant junior.",
      },
      {
        question: "Smart Impulsion travaille-t-il dans mon secteur ?",
        answer:
          "On intervient dans tous les secteurs ou il y a des processus repetitifs a optimiser : industrie, distribution, services, finance, sante. On ne se verticalise pas — parce que les gains de l'IA sont transversaux. La saisie de commandes, le traitement d'emails, la generation de rapports, le controle qualite : ces processus existent dans toutes les entreprises. Ce qui compte, c'est la taille de votre entreprise (PME ou ETI, entre 10 et 5 000 salaries) et votre volonte d'agir. Les -32% de temps operationnel qu'on mesure, on les obtient chez des industriels, des distributeurs et des societes de services.",
      },
      {
        question: "Comment se passe une mission type avec Smart Impulsion ?",
        answer:
          "En 4 etapes. Etape 1 : un call decouverte de 20 minutes pour comprendre vos enjeux et qualifier le potentiel. Etape 2 : un Audit IA Express (2-3 jours) qui identifie vos 3 quick wins et chiffre le ROI. Etape 3 : une proposition forfaitaire avec planning, livrables et ROI projete. Etape 4 : execution — formation, deploiement ou les deux, selon le besoin. Les premiers resultats sont mesurables en 4 semaines. On forme vos equipes pour qu'elles soient autonomes — pas de dependance a un prestataire. Un mois apres la fin de la mission, on mesure les resultats reels et on les compare au ROI projete.",
      },
    ],
  },
  {
    title: "ROI et resultats",
    questions: [
      {
        question: "Quel ROI attendre d'un projet IA en PME ?",
        answer:
          "Ca depend du processus automatise, mais pour donner un ordre de grandeur : nos missions affichent un ROI moyen de 24%. En termes operationnels, on mesure en moyenne -32% de temps sur les processus automatises et +18% de performance commerciale quand l'IA est appliquee a la vente ou au marketing. Exemple concret : un client qui traitait ses commandes manuellement a recupere 12 heures par semaine. A 50 euros de l'heure chargee, ca represente plus de 30 000 euros par an de capacite reaffectee. Le ROI n'est pas theorique — on le projette avant de demarrer et on le mesure apres. Si le calcul ne tient pas, on ne lance pas la mission.",
      },
      {
        question: "En combien de temps voit-on des resultats concrets ?",
        answer:
          "4 semaines pour les premiers gains mesurables. C'est notre engagement. L'audit IA se fait en 2-3 jours. La mise en place d'un premier quick win prend 2-3 semaines supplementaires. Pas 6 mois de cadrage, pas 3 mois d'etude prealable. Une PME ne peut pas attendre — on le sait, on a passe 9 ans a construire des produits tech chez Lyko. Si un projet IA met plus de 2 mois a montrer un premier resultat, il y a un probleme de cadrage, pas de technologie. On privilegie les gains rapides et incrementaux : un premier processus automatise qui prouve la valeur, puis on elargit.",
      },
      {
        question: "Comment mesurer le ROI de l'IA dans mon entreprise ?",
        answer:
          "Trois metriques simples. Premierement, le temps economise : combien d'heures par semaine etaient consacrees au processus avant et apres automatisation (on mesure -32% en moyenne). Deuxiemement, les erreurs evitees : quel est le cout des erreurs humaines sur le processus (saisie, oublis, retards). Troisiemement, la valeur reaffectee : qu'est-ce que vos equipes font du temps libere — si elles font plus de commercial, mesurez le chiffre d'affaires additionnel. Chez Smart Impulsion, on pose ces metriques AVANT la mission, on les mesure pendant, et on compare 1 mois apres. Pas de boite noire. Le retour sur investissement de l'IA se calcule comme n'importe quel investissement business : cout vs. gains, sur une periode definie.",
      },
      {
        question: "Les resultats sont-ils garantis ?",
        answer:
          "On ne garantit pas un chiffre — ce serait malhonnete. Mais on s'engage sur une methodologie transparente. Chaque mission commence par un ROI projete detaille : combien ca coute, combien ca rapporte, en combien de temps. Si le ROI projete ne tient pas au stade de l'audit, on vous le dit et on ne demarre pas la mission — vous ne payez rien pour un projet qui ne rapportera rien. C'est la difference avec les prestataires qui vendent du temps sans engagement de resultat. Nos clients mesurent en moyenne 24% de ROI sur les missions. On est suffisamment confiant dans notre methodologie pour conditionner notre business au fait que les chiffres tiennent.",
      },
      {
        question: "L'IA peut-elle reduire mes couts operationnels ?",
        answer:
          "C'est le premier levier qu'on active. Les couts operationnels les plus impactes par l'IA : saisie manuelle de donnees, traitement de documents, reporting, relances clients, controle qualite. Sur ces processus, on mesure en moyenne -32% de temps operationnel. Traduction en euros : si 3 personnes passent 4 heures par jour sur de la saisie, et que l'IA automatise 80% du flux, vous recuperez l'equivalent de 2 postes a temps plein sur des taches a plus forte valeur ajoutee. Ce n'est pas une reduction d'effectif — c'est une reallocation. Vos equipes font du commercial, du service client, de l'innovation. Les taches qui ne creent pas de valeur, l'IA s'en charge.",
      },
    ],
  },
  {
    title: "Pratique et mise en oeuvre",
    questions: [
      {
        question: "Mon equipe va-t-elle resister au changement ?",
        answer:
          "C'est la question qu'on entend le plus. Et la reponse honnete : oui, au debut. La resistance vient presque toujours d'un manque d'explication, pas d'un refus de fond. Quand on montre a un commercial que l'IA lui enleve 2 heures de saisie CRM par jour, la resistance disparait vite. C'est pour ca que la formation est integree dans chaque mission Smart Impulsion. On ne deploie pas un outil et on part — on forme vos equipes, on les rend autonomes, et on s'assure qu'elles comprennent le \"pourquoi\". En pratique, les equipes deviennent les premiers ambassadeurs du projet en 2-3 semaines. La cle : commencer par le processus qui leur fait perdre le plus de temps.",
      },
      {
        question: "L'IA va-t-elle remplacer mes salaries ?",
        answer:
          "Non. Et c'est un point sur lequel on est clair : l'IA ne remplace pas les personnes, elle les libere des taches repetitives. Chez nos clients, aucun poste n'a ete supprime suite a un deploiement IA. Ce qui change : les equipes passent moins de temps sur la saisie, le reporting, le tri de documents — et plus de temps sur le commercial, la relation client, l'innovation. Exemple : une equipe de 3 personnes qui traitait les commandes manuellement passe desormais 60% de son temps sur la prospection, au lieu de 20%. Resultat : +18% de performance commerciale en 3 mois. L'IA est un outil, comme l'email l'etait il y a 20 ans. Personne n'a ete remplace par l'email.",
      },
      {
        question: "Combien de temps dure un projet IA en PME ?",
        answer:
          "De 1 a 8 semaines selon le perimetre. Un Audit IA Express : 2-3 jours. Une formation d'equipe (Smart Training) : 1 a 2 semaines. Un deploiement complet (Smart Action) : 4 a 8 semaines. On ne fait pas de projets a 6 mois. Si un projet IA met plus de 2 mois a livrer un premier resultat, c'est qu'il est mal cadre. Notre approche : un quick win rapide (4 semaines), on mesure, et on decide ensemble s'il faut elargir. Les PME n'ont pas le luxe d'attendre. On le sait parce qu'on a passe 9 ans dans une PME tech (Lyko) — le temps c'est de l'argent, et chaque mois sans action c'est de la marge perdue.",
      },
      {
        question: "Faut-il des competences techniques en interne pour deployer l'IA ?",
        answer:
          "Non. C'est meme l'un des malentendus les plus frequents. Pour 80% des cas d'usage en PME, il ne faut ni data scientist ni developpeur. Les outils d'IA actuels sont accessibles a des profils metier : un commercial peut utiliser l'IA pour rediger ses emails, un comptable pour automatiser ses rapprochements, un RH pour trier des candidatures. Ce qu'il faut, c'est une bonne comprehension de vos processus — et ca, vous l'avez deja. La mission de Smart Impulsion, c'est de faire le pont entre vos besoins metier et les outils IA disponibles. On forme vos equipes en 1 a 2 semaines pour qu'elles soient autonomes. Zero dependance technique.",
      },
      {
        question: "Et si le projet IA ne fonctionne pas ?",
        answer:
          "C'est pour ca que chaque mission commence par un audit avec ROI projete. Si les chiffres ne tiennent pas au stade du diagnostic, on ne lance pas le projet — et vous n'avez rien depense au-dela de l'audit (2 000 euros maximum). Le risque est maitrise par design. Par ailleurs, 90% des echecs de projets IA en entreprise viennent d'un mauvais cadrage, pas d'un probleme technique. C'est exactement ce que l'audit previent : on identifie les bons cas d'usage, on chiffre le potentiel reel, et on ne demarre que si le ROI est solide. Si l'IA n'est pas la bonne reponse a votre probleme, on vous le dit. On ne vend pas un projet pour vendre un projet.",
      },
    ],
  },
]

// Build the full list of all questions for JSON-LD
const allQuestions = faqClusters.flatMap((cluster) => cluster.questions)

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQuestions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-black" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Questions frequentes
              <br />
              <span className="text-orange-400">sur l&apos;IA en entreprise</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              20 reponses concretes aux questions que se posent les dirigeants de PME et ETI
              sur l&apos;intelligence artificielle, le ROI, les couts et la mise en oeuvre.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <FaqAccordion clusters={faqClusters} />

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous avez d&apos;autres questions ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Echangeons 20 minutes pour evaluer le potentiel de l&apos;IA dans votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Demander un audit gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/">Retour a l&apos;accueil</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
