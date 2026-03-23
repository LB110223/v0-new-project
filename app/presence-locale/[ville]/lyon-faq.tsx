"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const lyonFaqs = [
  {
    question: "Smart Impulsion intervient-il uniquement a Lyon ?",
    answer:
      "Non. On intervient dans toute la France, avec une priorite sur la region Auvergne-Rhone-Alpes et l'Ile-de-France. Mais Lyon est notre base — c'est la ou on est le plus reactif, ou notre reseau est le plus dense, et ou on peut intervenir en presentiel sans delai. Pour les entreprises lyonnaises, c'est un avantage concret : un audit IA demarre en quelques jours, pas en quelques semaines.",
  },
  {
    question: "Existe-t-il des aides pour financer un projet IA a Lyon ?",
    answer:
      "Oui. Le programme Diag Data IA de BPI France permet de cofinancer un diagnostic IA (conditions d'eligibilite a verifier — le programme a evolue en 2026). La Region Auvergne-Rhone-Alpes propose egalement des dispositifs d'aide a l'innovation pour les PME. On vous aide a identifier les financements disponibles des l'audit — c'est inclus dans notre accompagnement. Aucun frais supplementaire.",
  },
  {
    question: "Quels types d'entreprises lyonnaises accompagnez-vous ?",
    answer:
      "Des PME et ETI de 10 a 5 000 salaries, dans tous les secteurs. Industrie, distribution, services, finance, sante — les processus repetitifs a automatiser existent partout. Ce qui compte, c'est la volonte d'agir et un minimum de maturite operationnelle (des processus structures, meme s'ils sont manuels). On ne fait pas de projets \"exploratoires\" sans objectif de resultat.",
  },
  {
    question: "Comment prendre rendez-vous pour un audit IA a Lyon ?",
    answer:
      "Un call decouverte de 20 minutes suffit pour qualifier le potentiel. Contactez-nous directement via le site (smart-impulsion.com/contact) ou sur LinkedIn. Si le potentiel est la, l'Audit IA Express peut demarrer sous une semaine. On se deplace dans vos locaux a Lyon et dans toute la region Auvergne-Rhone-Alpes.",
  },
]

export function LyonFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {lyonFaqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`lyon-faq-${index}`}
          className="border-gray-200"
        >
          <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-900 hover:text-orange-500 hover:no-underline py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base leading-relaxed pr-8">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
