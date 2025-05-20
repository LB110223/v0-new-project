"use client"

import { GraduationCap, LineChart, Cog } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useEffect, useState } from "react"

// Types pour les services
interface Service {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
}

// Services par défaut
const defaultServices = [
  {
    id: "service-1",
    icon: "GraduationCap",
    title: "Smart Training",
    subtitle: "Formation",
    description:
      "Programmes de formation personnalisés pour vos équipes sur les technologies d'IA, adaptés à vos besoins spécifiques et orientés vers des résultats concrets.",
  },
  {
    id: "service-2",
    icon: "LineChart",
    title: "Smart Analyse",
    subtitle: "Audit",
    description:
      "Analyse approfondie de vos processus et données pour identifier les opportunités d'optimisation par l'IA avec estimation précise du ROI potentiel.",
  },
  {
    id: "service-3",
    icon: "Cog",
    title: "Smart Action",
    subtitle: "Accompagnement opérationnel",
    description:
      "Mise en œuvre des solutions préconisées avec un accompagnement complet, du développement au déploiement, en mesurant précisément les résultats obtenus.",
  },
]

export function Services() {
  const [services, setServices] = useState(defaultServices)

  // Charger les services depuis localStorage
  useEffect(() => {
    try {
      const savedServices = localStorage.getItem("services_content")
      if (savedServices) {
        setServices(JSON.parse(savedServices))
      }
    } catch (error) {
      console.error("Erreur lors du chargement des services:", error)
    }
  }, [])

  // Fonction pour rendre l'icône en fonction du nom
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-black" />
      case "LineChart":
        return <LineChart className="h-6 w-6 text-black" />
      case "Cog":
        return <Cog className="h-6 w-6 text-black" />
      default:
        return <Cog className="h-6 w-6 text-black" />
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50 section-transition">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up" threshold={0.01}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Nos Services</h2>
            <p className="text-lg text-gray-600">Une approche complète de l'IA avec un ROI mesurable à chaque étape</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.id} variant="fade-up" delay={index * 100} duration={600} threshold={0.01}>
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover-lift h-full">
                <div className="mb-4 bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-gray-500 font-medium mb-4">{service.subtitle}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variant="fade-up" delay={300} threshold={0.01}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-2">Notre mission première</p>
            <p className="text-xl font-medium text-black max-w-2xl mx-auto">
              "Notre approche est basée sur des <span className="text-orange-500">indicateurs de performance</span>{" "}
              concrets."
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
