"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, AlertCircle, Trash, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Types pour les études de cas
interface CaseStudy {
  id: string
  title: string
  client: string
  description: string
  tags: string[]
  roi: string
  image: string
  gradient: string
}

// Études de cas par défaut
const defaultCaseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Optimisation de la chaîne logistique",
    client: "Distributeur national",
    description:
      "Mise en place d'un système prédictif pour optimiser les stocks et la distribution. ROI de 320% sur 18 mois avec une réduction des coûts logistiques de 28%.",
    tags: ["Smart Analyse", "Smart Action"],
    roi: "+320%",
    image: "/placeholder.svg?key=552rf",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: "case-2",
    title: "Automatisation du service client",
    client: "Banque française",
    description:
      "Développement d'un assistant virtuel intelligent pour le service client. ROI de 215% sur 12 mois avec une réduction du temps de traitement de 65%.",
    tags: ["Smart Training", "Smart Action"],
    roi: "+215%",
    image: "/placeholder.svg?key=yonaq",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    id: "case-3",
    title: "Détection de fraude en temps réel",
    client: "Assureur national",
    description:
      "Implémentation d'un système de détection de fraude basé sur l'IA. ROI de 450% sur 24 mois avec 32% de cas frauduleux supplémentaires identifiés.",
    tags: ["Smart Analyse", "Smart Action"],
    roi: "+450%",
    image: "/placeholder.svg?key=66c2t",
    gradient: "from-orange-600 to-orange-700",
  },
]

// Options de gradient disponibles
const gradientOptions = [
  { value: "from-orange-400 to-orange-500", label: "Orange clair" },
  { value: "from-orange-500 to-orange-600", label: "Orange moyen" },
  { value: "from-orange-600 to-orange-700", label: "Orange foncé" },
  { value: "from-blue-400 to-blue-500", label: "Bleu clair" },
  { value: "from-blue-500 to-blue-600", label: "Bleu moyen" },
  { value: "from-blue-600 to-blue-700", label: "Bleu foncé" },
  { value: "from-green-400 to-green-500", label: "Vert clair" },
  { value: "from-green-500 to-green-600", label: "Vert moyen" },
  { value: "from-green-600 to-green-700", label: "Vert foncé" },
]

// Options de tags disponibles
const tagOptions = ["Smart Training", "Smart Analyse", "Smart Action", "IA Générative", "Machine Learning", "NLP"]

export default function AdminCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [originalCaseStudies, setOriginalCaseStudies] = useState<CaseStudy[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [imageStatus, setImageStatus] = useState<Record<string, { loaded: boolean; error: boolean }>>({})

  useEffect(() => {
    // Charger les études de cas existantes
    const savedCaseStudies = localStorage.getItem("case_studies")
    if (savedCaseStudies) {
      const parsedCaseStudies = JSON.parse(savedCaseStudies)
      setCaseStudies(parsedCaseStudies)
      setOriginalCaseStudies(parsedCaseStudies)
    } else {
      // Utiliser les études de cas par défaut
      setCaseStudies(defaultCaseStudies)
      setOriginalCaseStudies(defaultCaseStudies)
    }
  }, [])

  useEffect(() => {
    // Vérifier s'il y a des changements
    setHasChanges(JSON.stringify(caseStudies) !== JSON.stringify(originalCaseStudies))
  }, [caseStudies, originalCaseStudies])

  const handleCaseStudyChange = (index: number, field: keyof CaseStudy, value: any) => {
    const updatedCaseStudies = [...caseStudies]
    updatedCaseStudies[index] = { ...updatedCaseStudies[index], [field]: value }
    setCaseStudies(updatedCaseStudies)

    // Réinitialiser le statut de l'image si l'URL change
    if (field === "image") {
      setImageStatus((prev) => ({
        ...prev,
        [updatedCaseStudies[index].id]: { loaded: false, error: false },
      }))
    }
  }

  const handleAddTag = (index: number, tag: string) => {
    const updatedCaseStudies = [...caseStudies]
    if (!updatedCaseStudies[index].tags.includes(tag)) {
      updatedCaseStudies[index].tags = [...updatedCaseStudies[index].tags, tag]
      setCaseStudies(updatedCaseStudies)
    }
  }

  const handleRemoveTag = (index: number, tag: string) => {
    const updatedCaseStudies = [...caseStudies]
    updatedCaseStudies[index].tags = updatedCaseStudies[index].tags.filter((t) => t !== tag)
    setCaseStudies(updatedCaseStudies)
  }

  const handleAddCaseStudy = () => {
    const newCaseStudy: CaseStudy = {
      id: `case-${Date.now()}`,
      title: "Nouvelle étude de cas",
      client: "Nom du client",
      description: "Description de l'étude de cas",
      tags: ["Smart Action"],
      roi: "+X%",
      image: "/placeholder.svg?key=new-case",
      gradient: "from-orange-500 to-orange-600",
    }
    setCaseStudies([...caseStudies, newCaseStudy])
  }

  const handleRemoveCaseStudy = (index: number) => {
    const updatedCaseStudies = [...caseStudies]
    updatedCaseStudies.splice(index, 1)
    setCaseStudies(updatedCaseStudies)
  }

  const handleSave = () => {
    localStorage.setItem("case_studies", JSON.stringify(caseStudies))
    setOriginalCaseStudies([...caseStudies])
    setIsSaved(true)
    setHasChanges(false)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setCaseStudies([...originalCaseStudies])
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
            <CardTitle>Gérer les études de cas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {caseStudies.map((caseStudy, index) => (
                <Card key={caseStudy.id} className="border border-gray-200">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">Étude de cas {index + 1}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveCaseStudy(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Titre</label>
                        <Input
                          value={caseStudy.title}
                          onChange={(e) => handleCaseStudyChange(index, "title", e.target.value)}
                          placeholder="Titre de l'étude de cas"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Client</label>
                        <Input
                          value={caseStudy.client}
                          onChange={(e) => handleCaseStudyChange(index, "client", e.target.value)}
                          placeholder="Nom du client"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea
                        value={caseStudy.description}
                        onChange={(e) => handleCaseStudyChange(index, "description", e.target.value)}
                        placeholder="Description de l'étude de cas"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">ROI</label>
                        <Input
                          value={caseStudy.roi}
                          onChange={(e) => handleCaseStudyChange(index, "roi", e.target.value)}
                          placeholder="+X%"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Gradient</label>
                        <Select
                          value={caseStudy.gradient}
                          onValueChange={(value) => handleCaseStudyChange(index, "gradient", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner un gradient" />
                          </SelectTrigger>
                          <SelectContent>
                            {gradientOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag) => (
                          <div
                            key={tag}
                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm flex items-center"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(index, tag)}
                              className="ml-1 text-gray-500 hover:text-red-500"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                        <Select onValueChange={(value) => handleAddTag(index, value)}>
                          <SelectTrigger className="h-8 w-auto">
                            <SelectValue placeholder="+ Ajouter" />
                          </SelectTrigger>
                          <SelectContent>
                            {tagOptions
                              .filter((tag) => !caseStudy.tags.includes(tag))
                              .map((tag) => (
                                <SelectItem key={tag} value={tag}>
                                  {tag}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL de l'image</label>
                      <Input
                        value={caseStudy.image}
                        onChange={(e) => handleCaseStudyChange(index, "image", e.target.value)}
                        placeholder="https://exemple.com/image.jpg"
                        className={imageStatus[caseStudy.id]?.error ? "border-red-500" : ""}
                      />
                      {imageStatus[caseStudy.id]?.error && (
                        <p className="text-red-500 text-sm">Cette image ne peut pas être chargée. Vérifiez l'URL.</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <div className={`h-full w-full bg-gradient-to-br ${caseStudy.gradient} opacity-80`}>
                          <img
                            src={caseStudy.image || "/placeholder.svg?key=case"}
                            alt={caseStudy.title}
                            className="w-full h-full object-cover mix-blend-overlay"
                            onLoad={() => handleImageLoad(caseStudy.id)}
                            onError={() => handleImageError(caseStudy.id)}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{caseStudy.title}</p>
                        <p className="text-sm text-gray-500">{caseStudy.client}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button onClick={handleAddCaseStudy} className="w-full" variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Ajouter une étude de cas
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
                  Vous pouvez ajouter, modifier ou supprimer des études de cas. Pour les images, utilisez des URLs
                  directes vers des images (format .jpg, .png, etc.).
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
