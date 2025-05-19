"use client"

import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useEffect, useRef } from "react"

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Référence pour l'animation des lettres (Option 5)
  const textRef = useRef<HTMLSpanElement>(null)

  // Effet pour animer les lettres individuellement
  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current
      const content = textRef.current.textContent || ""
      text.textContent = ""

      // Créer un span pour chaque lettre
      content.split("").forEach((letter, index) => {
        const span = document.createElement("span")
        span.textContent = letter
        span.style.animationDelay = `${0.05 * index}s`
        text.appendChild(span)
      })
    }
  }, [])

  return (
    <section id="hero" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll variant="fade-down" duration={800}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
              L'IA au service de votre performance.{" "}
              <span className="text-orange-500">Avec des résultats mesurables.</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={300} duration={800}>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Smart Impulsion ne se contente pas de vous digitaliser. Nous alignons chaque décision technologique sur
              vos objectifs business, avec un seul critère de succès : un retour sur investissement mesurable, ou rien.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="zoom-in" delay={600} duration={800}>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gray-50 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md px-6 py-6 text-base button-pulse"
                onClick={scrollToContact}
              >
                Demander une évaluation gratuite
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
