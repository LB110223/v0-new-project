"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
            Transformez votre entreprise avec l'IA à <span className="text-orange-500">ROI mesurable</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Smart Impulsion ne se contente pas de vous digitaliser. Nous alignons chaque décision technologique sur vos
            objectifs business, avec un seul critère de succès : un retour sur investissement mesurable, ou rien.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gray-50 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md px-6 py-6 text-base"
              onClick={scrollToContact}
            >
              Demander une évaluation gratuite
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
