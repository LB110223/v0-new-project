"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const experiences = [
  { period: "2025", role: "Fondateur & CEO", company: "Smart Impulsion" },
  { period: "2024", role: "Co-fondateur & CEO", company: "SymbiozAI" },
  { period: "2019-22", role: "Board Member", company: "French Tech Lyon" },
  { period: "2016-25", role: "Co-fondateur & CEO", company: "Lyko" },
]

export default function Founder() {
  return (
    <section className="py-16 bg-gray-50 section-transition">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up" duration={600} threshold={0.01}>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Une approche d'entrepreneur, pour les entrepreneurs
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Carte CV - Gauche */}
          <AnimateOnScroll variant="fade-up" delay={0} duration={600} threshold={0.01}>
            <div className="bg-white rounded-lg border border-gray-200 hover-lift h-80 p-5 flex flex-col justify-center">
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4 items-baseline">
                    <span className="text-xs font-medium text-gray-400 w-16 shrink-0">{exp.period}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-black">{exp.role}</p>
                      <p className="text-xs text-gray-500">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Photo - Centre */}
          <AnimateOnScroll variant="fade-up" delay={100} duration={600} threshold={0.01}>
            <div className="rounded-lg border border-gray-200 hover-lift h-80 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/images/img-0346.jpeg"
                  alt="Laurent Bouzon - Co-fondateur & CEO de Smart Impulsion"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Citation - Droite */}
          <AnimateOnScroll variant="fade-up" delay={200} duration={600} threshold={0.01}>
            <div className="bg-black text-white rounded-lg hover-lift h-80 p-4 flex flex-col justify-center relative overflow-hidden">
              <Quote className="absolute top-3 right-3 w-10 h-10 text-white/10" />

              <blockquote className="relative z-10">
                <p className="text-sm font-medium leading-relaxed mb-4">
                  "L'IA ne remplace pas l'humain, elle amplifie son potentiel. Notre mission : transformer cette
                  promesse en résultats concrets et mesurables."
                </p>
                <footer className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                  <div>
                    <p className="font-semibold text-white text-sm">Laurent Bouzon</p>
                    <p className="text-xs text-gray-400">Fondateur & CEO</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
