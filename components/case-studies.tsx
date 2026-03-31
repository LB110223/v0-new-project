"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useState } from "react"

// Types pour les études de cas
interface CaseStudy {
  id: string
  title: string
  client: string
  description: string
  tags: string[]
  metric: string
  metricLabel: string
  gradient: string
}

// Études de cas réelles — source : DNA.md
const defaultCaseStudies: CaseStudy[] = [
  {
    id: "case-lyko",
    title: "Automatisation outbound & contenu",
    client: "Lyko",
    description:
      "Automatisation de la prospection outbound (vélocité x3, +12% de RDV obtenus) et de la production de contenu blog (vélocité x5). Un gain de productivité massif sur deux fronts stratégiques.",
    tags: ["Smart Analyse", "Smart Action"],
    metric: "x3 à x5",
    metricLabel: "Vélocité",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: "case-symbiozai",
    title: "AI Workforce complète",
    client: "SymbiozAI",
    description:
      "Conception et mise en place d'une AI Workforce complète : agents IA spécialisés par verticale (marketing, sales, tech) pour industrialiser les opérations et scaler sans masse salariale.",
    tags: ["Smart Training", "Smart Action"],
    metric: "AI Workforce",
    metricLabel: "Déployée",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    id: "case-biopropreté",
    title: "Outbound & agent IA doléances",
    client: "Bio Propreté Services",
    description:
      "Automatisation de la prospection outbound (vélocité x4) et développement d'un MVP d'agent IA pour la gestion des doléances clients. Résultat : gain de temps opérationnel et meilleure réactivité.",
    tags: ["Smart Analyse", "Smart Action"],
    metric: "x4",
    metricLabel: "Vélocité",
    gradient: "from-orange-600 to-orange-700",
  },
]

export function CaseStudies() {
  const [caseStudies] = useState(defaultCaseStudies)

  return (
    <section id="etudes-de-cas" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-100 rounded-full opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        <AnimateOnScroll variant="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-3 shadow-sm">
              Résultats Prouvés
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600">Des ROI mesurables et vérifiables</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Découvrez comment nous avons transformé des entreprises françaises avec des résultats concrets et
              mesurables.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <AnimateOnScroll key={study.id} variant="fade-up" delay={index * 200}>
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className={`p-6 bg-gradient-to-br ${study.gradient} relative`}>
                  <div className="absolute top-4 right-4 bg-white text-orange-600 font-bold px-3 py-2 rounded-full flex items-center shadow-lg">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>{study.metric}</span>
                  </div>
                  <div className="pt-2 pb-4">
                    <p className="text-white/80 text-sm font-medium uppercase tracking-wide">{study.metricLabel}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{study.title}</h3>
                    <p className="text-white/90 font-medium mt-1">{study.client}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-slate-700">{study.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variant="fade-up" delay={600}>
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-orange-600 mb-4">Nos résultats mesurés chez nos clients</p>
            <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white px-8 py-5 rounded-2xl shadow-2xl">
              <div className="text-center">
                <span className="block text-3xl font-bold text-orange-600">-32%</span>
                <span className="text-sm text-slate-600">Temps opérationnel</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-orange-600">+18%</span>
                <span className="text-sm text-slate-600">Perf. commerciale</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-orange-600">24%</span>
                <span className="text-sm text-slate-600">ROI moyen</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
