import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Smart Impulsion - Conseil en Intelligence Artificielle",
  description:
    "Contactez Smart Impulsion pour transformer votre entreprise grâce à l'IA. Premier rendez-vous gratuit pour évaluer vos opportunités et leviers de performance.",
  openGraph: {
    title: "Contact | Smart Impulsion",
    description: "Échangeons lors d'un premier rendez-vous gratuit pour évaluer vos opportunités IA.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-black pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fadeIn">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-orange-500 font-medium mb-4">Parlons de votre projet</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à transformer votre entreprise avec l'IA ?
              </h1>
              <p className="text-xl text-gray-300">
                Échangeons lors d'un premier rendez-vous gratuit pour évaluer vos opportunités et vos leviers de
                performance.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Informations de contact */}
            <div className="lg:col-span-1">
              <AnimateOnScroll animation="fadeIn">
                <h2 className="text-2xl font-bold text-black mb-6">Nos coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Email</h3>
                      <a
                        href="mailto:contact@smart-impulsion.com"
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        contact@smart-impulsion.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Disponibilité</h3>
                      <p className="text-gray-600">Lun - Ven : 9h00 - 18h00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-2">Réponse rapide garantie</h3>
                  <p className="text-gray-600 text-sm">
                    Notre équipe s'engage à vous répondre sous 24 heures ouvrées avec une proposition personnalisée.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <AnimateOnScroll animation="fadeIn" delay={100}>
                <ContactForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
