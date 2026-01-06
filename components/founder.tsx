"use client"

import Image from "next/image"
import { Briefcase, Award, Quote } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const experiences = [
  {
    period: "Depuis 2025",
    role: "Co-fondateur & CEO",
    company: "Smart Impulsion",
  },
  {
    period: "Depuis 2024",
    role: "Fondateur & CEO",
    company: "SymbiozAI",
  },
  {
    period: "2019 - 2022",
    role: "Board Member",
    company: "French Tech Lyon St Etienne",
  },
  {
    period: "2016 - 2025",
    role: "Co-fondateur & CEO",
    company: "Lyko",
  },
]

export default function Founder() {
  return (
    <section className="py-20 bg-gray-50 section-transition">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Carte CV - Gauche */}
          <AnimateOnScroll variant="fade-up" delay={0} duration={600} threshold={0.01}>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover-lift h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black">Laurent Bouzon</h3>
                  <p className="text-sm text-gray-500">Parcours</p>
                </div>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative pl-4 ${index !== experiences.length - 1 ? "pb-4 border-l-2 border-gray-200" : "border-l-2 border-orange-500"}`}
                  >
                    <div
                      className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${index === 0 ? "bg-orange-500" : "bg-gray-300"}`}
                    />
                    <p className="text-xs text-gray-500 font-medium">{exp.period}</p>
                    <p className="text-sm font-semibold text-black">{exp.role}</p>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">+10 ans d'entrepreneuriat tech</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Photo - Centre */}
          <AnimateOnScroll variant="fade-up" delay={100} duration={600} threshold={0.01}>
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover-lift h-full flex items-center justify-center">
              <div className="relative w-full aspect-[3/4] max-w-[260px] rounded-lg overflow-hidden">
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
            <div className="bg-black text-white rounded-lg p-8 hover-lift h-full flex flex-col justify-center relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/10" />

              <blockquote className="relative z-10">
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                  "L'IA ne remplace pas l'humain, elle amplifie son potentiel. Notre mission : transformer cette
                  promesse en résultats concrets et mesurables pour chaque entreprise."
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-orange-500"></div>
                  <div>
                    <p className="font-semibold text-white">Laurent Bouzon</p>
                    <p className="text-sm text-gray-400">Co-fondateur & CEO</p>
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
