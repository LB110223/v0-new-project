"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, AlertCircle } from "lucide-react"

// Types pour les informations générales
interface GeneralInfo {
  siteTitle: string
  siteDescription: string
  contactEmail: string
  phoneNumber: string
  address: string
  roiAverage: string
  footerText: string
}

// Informations générales par défaut
const defaultGeneralInfo: GeneralInfo = {
  siteTitle: "Smart Impulsion | IA à ROI mesurable pour entreprises françaises",
  siteDescription:
    "Smart Impulsion transforme votre entreprise avec des solutions d'intelligence artificielle garantissant un retour sur investissement mesurable.",
  contactEmail: "contact@smart-impulsion.com",
  phoneNumber: "",
  address: "Paris, France",
  roiAverage: "+285%",
  footerText: "Transformez votre entreprise avec l'IA et un ROI mesurable.",
}

export default function AdminGeneral() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>(defaultGeneralInfo)
  const [originalInfo, setOriginalInfo] = useState<GeneralInfo>(defaultGeneralInfo)
  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    // Charger les informations générales existantes
    const savedInfo = localStorage.getItem("general_info")
    if (savedInfo) {
      const parsedInfo = JSON.parse(savedInfo)
      setGeneralInfo(parsedInfo)
      setOriginalInfo(parsedInfo)
    } else {
      // Utiliser les informations par défaut
      setGeneralInfo(defaultGeneralInfo)
      setOriginalInfo(defaultGeneralInfo)
    }
  }, [])

  useEffect(() => {
    // Vérifier s'il y a des changements
    setHasChanges(JSON.stringify(generalInfo) !== JSON.stringify(originalInfo))
  }, [generalInfo, originalInfo])

  const handleChange = (field: keyof GeneralInfo, value: string) => {
    setGeneralInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    localStorage.setItem("general_info", JSON.stringify(generalInfo))
    setOriginalInfo({ ...generalInfo })
    setIsSaved(true)
    setHasChanges(false)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setGeneralInfo({ ...originalInfo })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Informations générales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="siteTitle" className="text-sm font-medium">
                Titre du site
              </label>
              <Input
                id="siteTitle"
                value={generalInfo.siteTitle}
                onChange={(e) => handleChange("siteTitle", e.target.value)}
                placeholder="Titre du site"
              />
              <p className="text-xs text-gray-500">Ce titre apparaît dans l'onglet du navigateur</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="siteDescription" className="text-sm font-medium">
                Description du site
              </label>
              <Textarea
                id="siteDescription"
                value={generalInfo.siteDescription}
                onChange={(e) => handleChange("siteDescription", e.target.value)}
                placeholder="Description du site"
                rows={3}
              />
              <p className="text-xs text-gray-500">Cette description est utilisée pour le référencement (SEO)</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="contactEmail" className="text-sm font-medium">
                  Email de contact
                </label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={generalInfo.contactEmail}
                  onChange={(e) => handleChange("contactEmail", e.target.value)}
                  placeholder="contact@exemple.fr"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                  Numéro de téléphone
                </label>
                <Input
                  id="phoneNumber"
                  value={generalInfo.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  placeholder="01 23 45 67 89"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium">
                Adresse
              </label>
              <Input
                id="address"
                value={generalInfo.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Adresse de l'entreprise"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="roiAverage" className="text-sm font-medium">
                ROI moyen
              </label>
              <Input
                id="roiAverage"
                value={generalInfo.roiAverage}
                onChange={(e) => handleChange("roiAverage", e.target.value)}
                placeholder="+X%"
              />
              <p className="text-xs text-gray-500">Ce pourcentage est affiché dans plusieurs sections du site</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="footerText" className="text-sm font-medium">
                Texte du pied de page
              </label>
              <Input
                id="footerText"
                value={generalInfo.footerText}
                onChange={(e) => handleChange("footerText", e.target.value)}
                placeholder="Texte du pied de page"
              />
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
                  Ces informations sont utilisées à différents endroits du site. Certaines modifications peuvent
                  nécessiter un rafraîchissement de la page pour être visibles.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
