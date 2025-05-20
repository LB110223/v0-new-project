"use client"

import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useEffect, useRef, useState } from "react"

// Types pour le contenu du hero
interface HeroContent {
  title: string
  highlightedText: string
  description: string
  ctaText: string
}

// Contenu par défaut
const defaultHeroContent: HeroContent = {
  title: "L'IA au service de votre performance.",
  highlightedText: "Avec des résultats mesurables.",
  description:
    "Smart Impulsion ne se contente pas de vous digitaliser. Nous alignons chaque décision technologique sur vos objectifs business, avec un seul critère de succès : un retour sur investissement mesurable, ou rien.",
  ctaText: "Demander une évaluation gratuite",
}

export function Hero() {
  const [heroContent, setHeroContent] = useState<HeroContent>(defaultHeroContent)

  // Charger le contenu depuis localStorage
  useEffect(() => {
    try {
      const savedContent = localStorage.getItem("hero_content")
      if (savedContent) {
        setHeroContent(JSON.parse(savedContent))
      }
    } catch (error) {
      console.error("Erreur lors du chargement du contenu hero:", error)
    }
  }, [])

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
          <AnimateOnScroll variant="fade-down" duration={800} threshold={0.01}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
              {heroContent.title} <span className="text-orange-500">{heroContent.highlightedText}</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200} duration={800} threshold={0.01}>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{heroContent.description}</p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="zoom-in" delay={400} duration={800} threshold={0.01}>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gray-50 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md px-6 py-6 text-base button-pulse"
                onClick={scrollToContact}
              >
                {heroContent.ctaText}
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
