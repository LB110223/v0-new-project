"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, AlertCircle, Trash, Plus } from "lucide-react"

// Types pour les témoignages
interface Testimonial {
  id: string
  quote: string
  author: string
  position: string
  image: string
}

// Témoignages par défaut
const defaultTestimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Smart Impulsion a transformé notre approche de l'IA. Leur focus sur le ROI nous a permis de justifier chaque euro investi avec des résultats concrets.",
    author: "Marie Dupont",
    position: "Directrice de l'Innovation, Groupe Retail",
    image: "/placeholder.svg?key=person1",
  },
  {
    id: "testimonial-2",
    quote:
      "L'approche méthodique de Smart Impulsion nous a permis d'identifier les opportunités d'IA à fort impact et de les déployer rapidement.",
    author: "Jean Martin",
    position: "DSI, Secteur Bancaire",
    image: "/placeholder.svg?key=person2",
  },
  {
    id: "testimonial-3",
    quote:
      "La formation Smart Training a permis à nos équipes de monter en compétence rapidement et d'être autonomes sur nos projets d'IA.",
    author: "Sophie Legrand",
    position: "DRH, Industrie Manufacturière",
    image: "/placeholder.svg?key=person3",
  },
]

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [originalTestimonials, setOriginalTestimonials] = useState<Testimonial[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [imageStatus, setImageStatus] = useState<Record<string, { loaded: boolean; error: boolean }>>({})

  useEffect(() => {
    // Charger les témoignages existants
    const savedTestimonials = localStorage.getItem("testimonials_content")
    if (savedTestimonials) {
      const parsedTestimonials = JSON.parse(savedTestimonials)
      setTestimonials(parsedTestimonials)
      setOriginalTestimonials(parsedTestimonials)
    } else {
      // Utiliser les témoignages par défaut
      setTestimonials(defaultTestimonials)
      setOriginalTestimonials(defaultTestimonials)
    }
  }, [])

  useEffect(() => {
    // Vérifier s'il y a des changements
    setHasChanges(JSON.stringify(testimonials) !== JSON.stringify(originalTestimonials))
  }, [testimonials, originalTestimonials])

  const handleTestimonialChange = (index: number, field: keyof Testimonial, value: string) => {
    const updatedTestimonials = [...testimonials]
    updatedTestimonials[index] = { ...updatedTestimonials[index], [field]: value }
    setTestimonials(updatedTestimonials)

    // Réinitialiser le statut de l'image si l'URL change
    if (field === "image") {
      setImageStatus((prev) => ({
        ...prev,
        [updatedTestimonials[index].id]: { loaded: false, error: false },
      }))
    }
  }

  const handleAddTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: `testimonial-${Date.now()}`,
      quote: "Nouveau témoignage client",
      author: "Nom du client",
      position: "Poste, Entreprise",
      image: "/placeholder.svg?key=person-new",
    }
    setTestimonials([...testimonials, newTestimonial])
  }

  const handleRemoveTestimonial = (index: number) => {
    const updatedTestimonials = [...testimonials]
    updatedTestimonials.splice(index, 1)
    setTestimonials(updatedTestimonials)
  }

  const handleSave = () => {
    localStorage.setItem("testimonials_content", JSON.stringify(testimonials))
    setOriginalTestimonials([...testimonials])
    setIsSaved(true)
    setHasChanges(false)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setTestimonials([...originalTestimonials])
  }

  const handleImageLoad = (id: string) => {
    setImageStatus((prev) => ({
      ...prev,
      [id]: { loaded: true, error: false },
    }))
  }

  const handleImageError = (id: string) => {
    setImageStatus((prev) => ({
      ...prev,
      [id]: { loaded: false, error: true },
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gérer les témoignages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.id} className="border border-gray-200">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">Témoignage {index + 1}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveTestimonial(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Citation</label>
                      <Textarea
                        value={testimonial.quote}
                        onChange={(e) => handleTestimonialChange(index, "quote", e.target.value)}
                        placeholder="Citation du client"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nom</label>
                        <Input
                          value={testimonial.author}
                          onChange={(e) => handleTestimonialChange(index, "author", e.target.value)}
                          placeholder="Nom du client"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Poste</label>
                        <Input
                          value={testimonial.position}
                          onChange={(e) => handleTestimonialChange(index, "position", e.target.value)}
                          placeholder="Poste, Entreprise"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL de l'image</label>
                      <Input
                        value={testimonial.image}
                        onChange={(e) => handleTestimonialChange(index, "image", e.target.value)}
                        placeholder="https://exemple.com/image.jpg"
                        className={imageStatus[testimonial.id]?.error ? "border-red-500" : ""}
                      />
                      {imageStatus[testimonial.id]?.error && (
                        <p className="text-red-500 text-sm">Cette image ne peut pas être chargée. Vérifiez l'URL.</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                        <img
                          src={testimonial.image || "/placeholder.svg?key=person"}
                          alt={`Photo de ${testimonial.author}`}
                          className="w-full h-full object-cover"
                          onLoad={() => handleImageLoad(testimonial.id)}
                          onError={() => handleImageError(testimonial.id)}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button onClick={handleAddTestimonial} className="w-full" variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Ajouter un témoignage
              </Button>
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

        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">
                  Vous pouvez ajouter, modifier ou supprimer des témoignages. Pour les images, utilisez des URLs
                  directes vers des images (format .jpg, .png, etc.). Consultez le guide des images pour plus
                  d'informations.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <a href="/admin/media" className="text-blue-500 hover:underline">
                    Voir le guide des images
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
