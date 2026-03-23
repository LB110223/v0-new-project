import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import Founder from "@/components/founder"
import { ExpertsNetwork } from "@/components/experts-network"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un audit IA pour PME ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un audit IA est une analyse de vos processus et données pour identifier les opportunités d'automatisation et d'optimisation par l'intelligence artificielle, avec une projection de ROI chiffrée."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte une mission de conseil IA ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos missions varient de 3 000\u20ac pour une formation à 30 000\u20ac+ pour un accompagnement complet. L'audit IA Express est proposé à partir de 2 000\u20ac avec un ROI projeté avant de démarrer."
      }
    },
    {
      "@type": "Question",
      "name": "Quel ROI attendre d'un projet IA ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos clients constatent en moyenne -32% de temps opérationnel sur les processus automatisés, +18% d'amélioration de performance commerciale, et un ROI de 24% sur les initiatives déployées."
      }
    },
    {
      "@type": "Question",
      "name": "Smart Impulsion travaille-t-il avec des PME ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous accompagnons spécifiquement les PME (10-250 salariés) et ETI (250-5000 salariés) françaises dans leur adoption de l'IA, avec des solutions adaptées à leur taille et budget."
      }
    },
    {
      "@type": "Question",
      "name": "Dans quels secteurs intervenez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous intervenons dans plus de 15 secteurs : industrie, retail, finance, services, conseil, et plus. Notre approche ROI-first s'adapte à chaque secteur."
      }
    }
  ]
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Founder />
      <Services />
      <Results />
      <ExpertsNetwork />
      <Testimonials />
      <Contact />
    </main>
  )
}
