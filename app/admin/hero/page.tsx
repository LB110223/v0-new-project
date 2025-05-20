"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, AlertCircle } from "lucide-react"

export default function AdminHero() {
  const [heroContent, setHeroContent] = useState({
    title: "",
    highlightedText: "",
    description: "",
    ctaText: "",
  })

  const [originalContent, setOriginalContent] = useState({
    title: "",
    highlightedText: "",
    description: "",
    ctaText: "",
  })

  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    // Charger le contenu existant
    const savedContent = localStorage.getItem("hero_content")
    if (savedContent) {
      const parsedContent = JSON.parse(savedContent)
      setHeroContent(parsedContent)
      setOriginalContent(parsedContent)
    } else {
      // Valeurs par défaut
      const defaultContent = {
        title: "L'IA au service de votre performance.",
        highlightedText: "Avec des résultats mesurables.",
        description:
          "Smart Impulsion ne se contente pas de vous digitaliser. Nous alignons chaque décision technologique sur vos objectifs business, avec un seul critère de succès : un retour sur investissement mesurable, ou rien.",
        ctaText: "Demander une évaluation gratuite",
      }
      setHeroContent(defaultContent)
      setOriginalContent(defaultContent)
    }
  }, [])

  useEffect(() => {
    // Vérifier s'il y a des changements
    setHasChanges(JSON.stringify(heroContent) !== JSON.stringify(originalContent))
  }, [heroContent, originalContent])

  const handleChange = (field: string, value: string) => {
    setHeroContent((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    localStorage.setItem("hero_content", JSON.stringify(heroContent))
    setOriginalContent(heroContent)
    setIsSaved(true)
    setHasChanges(false)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setHeroContent(originalContent)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Modifier la section Hero</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Titre principal
              </label>
              <Input
                id="title"
                value={heroContent.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Titre principal"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="highlightedText" className="text-sm font-medium">
                Texte mis en évidence
              </label>
              <Input
                id="highlightedText"
                value={heroContent.highlightedText}
                onChange={(e) => handleChange("highlightedText", e.target.value)}
                placeholder="Texte mis en évidence (en orange)"
              />
              <p className="text-xs text-gray-500">Ce texte apparaîtra en orange dans le titre</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                value={heroContent.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description de la section hero"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="ctaText" className="text-sm font-medium">
                Texte du bouton d'action
              </label>
              <Input
                id="ctaText"
                value={heroContent.ctaText}
                onChange={(e) => handleChange("ctaText", e.target.value)}
                placeholder="Texte du bouton d'action"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-medium text-blue-800 mb-2">Aperçu</h3>
              <div className="bg-white p-6 rounded-md border border-blue-100">
                <h1 className="text-2xl font-bold mb-2">
                  {heroContent.title} <span className="text-orange-500">{heroContent.highlightedText}</span>
                </h1>
                <p className="text-gray-600 mb-4">{heroContent.description}</p>
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-md font-medium">{heroContent.ctaText}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleReset} disabled={!hasChanges}>
              Réinitialiser
            </Button>
            <div className="flex items-center gap-4">
              {isSaved && (
                <span className="text-green-600 text-sm flex items-center">
                  <Check className="h-4 w-4 mr-1" /> Enregistré
                </span>
              )}
              <Button onClick={handleSave} disabled={!hasChanges}>
                Enregistrer les modifications
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">
                    Les modifications apportées ici seront visibles sur la page d'accueil après avoir enregistré et
                    rafraîchi la page. Le contenu est stocké localement dans votre navigateur.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
