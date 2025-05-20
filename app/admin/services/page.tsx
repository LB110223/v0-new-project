"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, AlertCircle, Trash, Plus, GraduationCap, LineChart, Cog } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Types pour les services
interface Service {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
}

// Icônes disponibles
const availableIcons = [
  { value: "GraduationCap", label: "Graduation Cap", component: <GraduationCap className="h-5 w-5" /> },
  { value: "LineChart", label: "Line Chart", component: <LineChart className="h-5 w-5" /> },
  { value: "Cog", label: "Cog/Gear", component: <Cog className="h-5 w-5" /> },
]

// Services par défaut
const defaultServices: Service[] = [
  {
    id: "service-1",
    icon: "GraduationCap",
    title: "Smart Training",
    subtitle: "Formation",
    description:
      "Programmes de formation personnalisés pour vos équipes sur les technologies d'IA, adaptés à vos besoins spécifiques et orientés vers des résultats concrets.",
  },
  {
    id: "service-2",
    icon: "LineChart",
    title: "Smart Analyse",
    subtitle: "Audit",
    description:
      "Analyse approfondie de vos processus et données pour identifier les opportunités d'optimisation par l'IA avec estimation précise du ROI potentiel.",
  },
  {
    id: "service-3",
    icon: "Cog",
    title: "Smart Action",
    subtitle: "Accompagnement opérationnel",
    description:
      "Mise en œuvre des solutions préconisées avec un accompagnement complet, du développement au déploiement, en mesurant précisément les résultats obtenus.",
  },
]

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([])
  const [originalServices, setOriginalServices] = useState<Service[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    // Charger les services existants
    const savedServices = localStorage.getItem("services_content")
    if (savedServices) {
      const parsedServices = JSON.parse(savedServices)
      setServices(parsedServices)
      setOriginalServices(parsedServices)
    } else {
      // Utiliser les services par défaut
      setServices(defaultServices)
      setOriginalServices(defaultServices)
    }
  }, [])

  useEffect(() => {
    // Vérifier s'il y a des changements
    setHasChanges(JSON.stringify(services) !== JSON.stringify(originalServices))
  }, [services, originalServices])

  const handleServiceChange = (index: number, field: keyof Service, value: string) => {
    const updatedServices = [...services]
    updatedServices[index] = { ...updatedServices[index], [field]: value }
    setServices(updatedServices)
  }

  const handleAddService = () => {
    const newService: Service = {
      id: `service-${Date.now()}`,
      icon: "Cog",
      title: "Nouveau Service",
      subtitle: "Sous-titre",
      description: "Description du nouveau service",
    }
    setServices([...services, newService])
  }

  const handleRemoveService = (index: number) => {
    const updatedServices = [...services]
    updatedServices.splice(index, 1)
    setServices(updatedServices)
  }

  const handleSave = () => {
    localStorage.setItem("services_content", JSON.stringify(services))
    setOriginalServices([...services])
    setIsSaved(true)
    setHasChanges(false)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setServices([...originalServices])
  }

  const renderIconPreview = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5" />
      case "LineChart":
        return <LineChart className="h-5 w-5" />
      case "Cog":
        return <Cog className="h-5 w-5" />
      default:
        return <Cog className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gérer les services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={service.id} className="border border-gray-200">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">Service {index + 1}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveService(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Icône</label>
                        <Select
                          value={service.icon}
                          onValueChange={(value) => handleServiceChange(index, "icon", value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Sélectionner une icône" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableIcons.map((icon) => (
                              <SelectItem key={icon.value} value={icon.value}>
                                <div className="flex items-center gap-2">
                                  {icon.component}
                                  <span>{icon.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Aperçu</label>
                        <div className="h-10 flex items-center">
                          <div className="bg-gray-100 p-2 rounded-full">{renderIconPreview(service.icon)}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Titre</label>
                      <Input
                        value={service.title}
                        onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                        placeholder="Titre du service"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Sous-titre</label>
                      <Input
                        value={service.subtitle}
                        onChange={(e) => handleServiceChange(index, "subtitle", e.target.value)}
                        placeholder="Sous-titre du service"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea
                        value={service.description}
                        onChange={(e) => handleServiceChange(index, "description", e.target.value)}
                        placeholder="Description du service"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button onClick={handleAddService} className="w-full" variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Ajouter un service
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
                  Vous pouvez ajouter, modifier ou supprimer des services. Les modifications seront visibles sur la page
                  d'accueil après avoir enregistré et rafraîchi la page.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
