"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useEffect, useState } from "react"

// Types pour les études de cas
interface CaseStudy {
  id: string
  title: string
  client: string
  description: string
  tags: string[]
  roi: string
  image: string
  gradient: string
}

// Études de cas par défaut
const defaultCaseStudies = [
  {
    id: "case-1",
    title: "Optimisation de la chaîne logistique",
    client: "Distributeur national",
    description:
      "Mise en place d'un système prédictif pour optimiser les stocks et la distribution. ROI de 320% sur 18 mois avec une réduction des coûts logistiques de 28%.",
    tags: ["Smart Analyse", "Smart Action"],
    roi: "+320%",
    image: "/placeholder.svg?key=552rf",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: "case-2",
    title: "Automatisation du service client",
    client: "Banque française",
    description:
      "Développement d'un assistant virtuel intelligent pour le service client. ROI de 215% sur 12 mois avec une réduction du temps de traitement de 65%.",
    tags: ["Smart Training", "Smart Action"],
    roi: "+215%",
    image: "/placeholder.svg?key=yonaq",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    id: "case-3",
    title: "Détection de fraude en temps réel",
    client: "Assureur national",
    description:
      "Implémentation d'un système de détection de fraude basé sur l'IA. ROI de 450% sur 24 mois avec 32% de cas frauduleux supplémentaires identifiés.",
    tags: ["Smart Analyse", "Smart Action"],
    roi: "+450%",
    image: "/placeholder.svg?key=66c2t",
    gradient: "from-orange-600 to-orange-700",
  },
]

export function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState(defaultCaseStudies)
  const [roiAverage, setRoiAverage] = useState("+285%")

  // Charger les études de cas depuis localStorage
  useEffect(() => {
    try {
      const savedCaseStudies = localStorage.getItem("case_studies")
      if (savedCaseStudies) {
        setCaseStudies(JSON.parse(savedCaseStudies))
      }

      // Charger également les informations générales pour le ROI moyen
      const savedGeneralInfo = localStorage.getItem("general_info")
      if (savedGeneralInfo) {
        const generalInfo = JSON.parse(savedGeneralInfo)
        if (generalInfo.roiAverage) {
          setRoiAverage(generalInfo.roiAverage)
        }
      }
    } catch (error) {
      console.error("Erreur lors du chargement des études de cas:", error)
    }
  }, [])

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">Des ROI mesurables et vérifiables</h2>
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
                <div className="aspect-video overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}
                  ></div>
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                    onError={(e) => {
                      // Fallback en cas d'erreur de chargement de l'image
                      e.currentTarget.src = "/placeholder.svg?key=case"
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white text-orange-600 font-bold px-3 py-2 rounded-full flex items-center shadow-lg">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>{study.roi}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-white/90 font-medium">{study.client}</p>
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
            <p className="text-lg font-medium text-orange-600 mb-4">Nous nous engageons sur des résultats mesurables</p>
            <div className="inline-flex items-center justify-center bg-white px-8 py-5 rounded-2xl shadow-2xl">
              <span className="text-2xl font-bold text-slate-800 mr-3">ROI moyen de nos projets:</span>
              <span className="text-4xl font-bold text-orange-500">{roiAverage}</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
