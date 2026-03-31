"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile"
import type { ContactFormData } from "@/lib/types"

export function ContactForm() {
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
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileInstance>(null)
  const [formTimestamp] = useState<number>(() => Date.now())

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
        body: JSON.stringify({
          ...formState,
          turnstileToken,
          _timestamp: formTimestamp,
        }),
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
        setTurnstileToken(null)
        turnstileRef.current?.reset()
      } else {
        setError(data.message || "Une erreur est survenue. Veuillez réessayer.")
        turnstileRef.current?.reset()
      }
    } catch (err) {
      setError("Une erreur de connexion est survenue. Veuillez réessayer.")
      console.error("Erreur lors de la soumission du formulaire:", err)
      turnstileRef.current?.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600"
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
        <h3 className="text-2xl font-bold mb-3 text-black">Message envoye avec succes !</h3>
        <p className="text-gray-600 mb-8">
          Merci de nous avoir contactes. Notre equipe vous repondra dans les 24 heures avec une proposition d'evaluation
          personnalisee.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-black hover:bg-gray-800 text-white rounded-md px-6 py-3"
        >
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-black mb-6">Envoyez-nous un message</h2>

      {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">{error}</div>}

      {/* Honeypot field - invisible to users, attractive to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formState.website || ""}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom et Prenom *
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="Jean Dupont"
            className="border-gray-300 focus:border-black focus:ring-black rounded-md h-12"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Professionnel *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="jean.dupont@entreprise.fr"
            className="border-gray-300 focus:border-black focus:ring-black rounded-md h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Entreprise *
          </label>
          <Input
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            required
            placeholder="Nom de votre entreprise"
            className="border-gray-300 focus:border-black focus:ring-black rounded-md h-12"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service d'interet
          </label>
          <Select value={formState.service} onValueChange={handleSelectChange}>
            <SelectTrigger id="service" className="border-gray-300 focus:border-black focus:ring-black rounded-md h-12">
              <SelectValue placeholder="Selectionnez un service" />
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
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Votre message *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          placeholder="Decrivez votre projet, vos besoins ou vos questions..."
          rows={5}
          className="border-gray-300 focus:border-black focus:ring-black rounded-md"
        />
      </div>

      {/* Cloudflare Turnstile widget */}
      <div className="mb-6 flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey="0x4AAAAAACvXdvead-GXXOkU"
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
          options={{ theme: "light", size: "flexible", appearance: "interaction-only", execution: "execute" }}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !turnstileToken}
        className="w-full bg-black hover:bg-gray-800 text-white rounded-md py-6 text-base font-medium"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            Envoi en cours...
          </div>
        ) : (
          "Demander une evaluation gratuite"
        )}
      </Button>

      <p className="text-sm text-gray-500 mt-4 text-center">
        En soumettant ce formulaire, vous acceptez notre politique de confidentialite.
      </p>
    </form>
  )
}
