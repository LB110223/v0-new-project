"use client"

import Link from "next/link"
import { GraduationCap, LineChart, Cog, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { services as staticServices } from "@/lib/site-data"

export function Services() {
  const services = staticServices

  const serviceLinks: Record<string, string> = {
    "service-1": "/services/formation",
    "service-2": "/services/audit",
    "service-3": "/services/accompagnement",
  }

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-white" />
      case "LineChart":
        return <LineChart className="h-6 w-6 text-white" />
      case "Cog":
        return <Cog className="h-6 w-6 text-white" />
      default:
        return <Cog className="h-6 w-6 text-white" />
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50 section-transition">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up" threshold={0.01}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Nos Services</h2>
            <p className="text-lg text-gray-600">
              Nous accompagnons les entreprises dans leur transformation par l'intelligence artificielle avec une
              approche orientée résultats et un retour sur investissement mesurable à chaque étape. De la formation à
              l'audit jusqu'à la mise en œuvre opérationnelle, nos services allient expertise technologique et impact
              business concret.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.id} variant="fade-up" delay={index * 100} duration={600} threshold={0.01}>
              <Link href={serviceLinks[service.id] || "#"} className="block h-full group">
                <div className="bg-black p-8 rounded-lg border border-gray-800 hover-lift h-full transition-all duration-300 group-hover:border-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/10">
                  <div className="mb-4 bg-gray-800 p-3 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    {renderIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{service.title}</h3>
                  <p className="text-gray-400 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center text-orange-500 font-medium text-sm group-hover:text-orange-400 transition-colors">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
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
