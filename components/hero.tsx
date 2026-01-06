"use client"

import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { heroContent as staticHeroContent } from "@/lib/site-data"

export function Hero() {
  const heroContent = staticHeroContent

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 button-pulse"
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
