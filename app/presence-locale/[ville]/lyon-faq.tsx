"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const lyonFaqs = [
  {
    question: "Smart Impulsion intervient-il uniquement à Lyon ?",
    answer:
      "Non. On intervient dans toute la France, avec une priorité sur la région Auvergne-Rhône-Alpes et l'Île-de-France. Mais Lyon est notre base — c'est là où on est le plus réactif, où notre réseau est le plus dense, et où on peut intervenir en présentiel sans délai. Pour les entreprises lyonnaises, c'est un avantage concret : un audit IA démarre en quelques jours, pas en quelques semaines.",
  },
  {
    question: "Existe-t-il des aides pour financer un projet IA à Lyon ?",
    answer:
      "Oui. Le programme Diag Data IA de BPI France permet de cofinancer un diagnostic IA (conditions d'éligibilité à vérifier — le programme a évolué en 2026). La Région Auvergne-Rhône-Alpes propose également des dispositifs d'aide à l'innovation pour les PME. On vous aide à identifier les financements disponibles dès l'audit — c'est inclus dans notre accompagnement. Aucun frais supplémentaire.",
  },
  {
    question: "Quels types d'entreprises lyonnaises accompagnez-vous ?",
    answer:
      "Des PME et ETI de 10 à 5 000 salariés, dans tous les secteurs. Industrie, distribution, services, finance, santé — les processus répétitifs à automatiser existent partout. Ce qui compte, c'est la volonté d'agir et un minimum de maturité opérationnelle (des processus structurés, même s'ils sont manuels). On ne fait pas de projets \"exploratoires\" sans objectif de résultat.",
  },
  {
    question: "Comment prendre rendez-vous pour un audit IA à Lyon ?",
    answer:
      "Un call découverte de 20 minutes suffit pour qualifier le potentiel. Contactez-nous directement via le site (smart-impulsion.com/contact) ou sur LinkedIn. Si le potentiel est là, l'Audit IA Express peut démarrer sous une semaine. On se déplace dans vos locaux à Lyon et dans toute la région Auvergne-Rhône-Alpes.",
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
