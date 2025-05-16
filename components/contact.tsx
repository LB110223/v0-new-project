"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ContactFormData } from "@/lib/notion"

export function Contact() {
  const [formState, setFormState] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      service: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        })
      } else {
        setError(data.message || "Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (err) {
      setError("Une erreur de connexion est survenue. Veuillez réessayer.")
      console.error("Erreur lors de la soumission du formulaire:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Contactez-nous</h2>
          <p className="text-lg text-gray-600">
            Prêt à transformer votre entreprise avec un ROI mesurable ? Contactez-nous pour une évaluation gratuite.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-500"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Message Envoyé !</h3>
              <p className="text-gray-600 mb-6">
                Merci de nous avoir contactés. Notre équipe vous répondra dans les 24 heures avec une proposition
                d'évaluation gratuite.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-gray-200 text-gray-800 hover:bg-gray-50 rounded-md"
              >
                Envoyer un autre message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200">
              {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">{error}</div>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom et Prénom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="border-gray-300 focus:border-black focus:ring-black rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Professionnel
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="jean.dupont@entreprise.fr"
                    className="border-gray-300 focus:border-black focus:ring-black rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    required
                    placeholder="Nom de votre entreprise"
                    className="border-gray-300 focus:border-black focus:ring-black rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service d'intérêt
                  </label>
                  <Select value={formState.service} onValueChange={handleSelectChange}>
                    <SelectTrigger
                      id="service"
                      className="border-gray-300 focus:border-black focus:ring-black rounded-md"
                    >
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smart-training">Smart Training (Formation)</SelectItem>
                      <SelectItem value="smart-analyse">Smart Analyse (Audit)</SelectItem>
                      <SelectItem value="smart-action">Smart Action (Accompagnement)</SelectItem>
                      <SelectItem value="complet">Accompagnement complet</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet ou vos besoins..."
                  rows={4}
                  className="border-gray-300 focus:border-black focus:ring-black rounded-md"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-50 border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md py-6 text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-gray-500 border-t-transparent rounded-full"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  "Demander une évaluation gratuite"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
