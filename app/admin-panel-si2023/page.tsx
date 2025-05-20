"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Info } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function AdminPanel() {
  const [imageUrls, setImageUrls] = useState({
    laurent: "",
    mohammad: "",
  })

  const [savedUrls, setSavedUrls] = useState({
    laurent: "",
    mohammad: "",
  })

  const handleChange = (person: "laurent" | "mohammad", value: string) => {
    setImageUrls((prev) => ({
      ...prev,
      [person]: value,
    }))
  }

  const saveUrls = () => {
    // Sauvegarder les URLs dans le localStorage
    localStorage.setItem("teamImages", JSON.stringify(imageUrls))
    setSavedUrls(imageUrls)
    alert("Les URLs des images ont été sauvegardées avec succès !")
  }

  // Charger les URLs sauvegardées au chargement de la page
  useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("teamImages")
      if (saved) {
        const parsed = JSON.parse(saved)
        setImageUrls(parsed)
        setSavedUrls(parsed)
      }
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 bg-gray-800 text-white">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Panneau d'administration - Smart Impulsion</h1>
              <Link href="/" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Gestion des photos des co-fondateurs</h2>
              <p className="text-gray-600 mb-4">
                Entrez simplement les URLs des images pour chaque co-fondateur et cliquez sur "Enregistrer".
              </p>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-700 mb-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-2">Comment ça marche</p>
                    <p className="mb-2">
                      1. Téléchargez vos images sur un service comme Google Photos, Imgur, ou tout autre service
                      d'hébergement d'images
                      <br />
                      2. Copiez l'URL de l'image (clic droit sur l'image → "Copier l'adresse de l'image")
                      <br />
                      3. Collez l'URL dans le champ correspondant ci-dessous
                      <br />
                      4. Cliquez sur "Enregistrer les images"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Laurent Bouzon */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Laurent Bouzon</h3>
                <div className="mb-4 aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={imageUrls.laurent || "/placeholder.svg?height=300&width=300&query=person"}
                    alt="Laurent Bouzon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="laurent-url" className="block text-sm font-medium text-gray-700">
                    URL de l'image
                  </label>
                  <Input
                    id="laurent-url"
                    value={imageUrls.laurent}
                    onChange={(e) => handleChange("laurent", e.target.value)}
                    placeholder="https://exemple.com/image.jpg"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Mohammad-Ali Bacha */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Mohammad-Ali Bacha</h3>
                <div className="mb-4 aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={imageUrls.mohammad || "/placeholder.svg?height=300&width=300&query=person"}
                    alt="Mohammad-Ali Bacha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mohammad-url" className="block text-sm font-medium text-gray-700">
                    URL de l'image
                  </label>
                  <Input
                    id="mohammad-url"
                    value={imageUrls.mohammad}
                    onChange={(e) => handleChange("mohammad", e.target.value)}
                    placeholder="https://exemple.com/image.jpg"
                    className="w-full"
                  />
                </div>
              </div>

              <Button onClick={saveUrls} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Enregistrer les images
              </Button>

              {(savedUrls.laurent || savedUrls.mohammad) && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                  <p className="flex items-center font-medium">
                    <Check className="h-5 w-5 mr-2" />
                    Images sauvegardées avec succès !
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Cette page est privée et ne doit être accessible qu'aux administrateurs du site. Ne partagez pas cette
              URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
