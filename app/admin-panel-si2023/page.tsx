"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Upload, Check, Info } from "lucide-react"
import Link from "next/link"

export default function AdminPanel() {
  const [selectedFiles, setSelectedFiles] = useState<{
    laurent: File | null
    mohammad: File | null
  }>({
    laurent: null,
    mohammad: null,
  })

  const [previews, setPreviews] = useState<{
    laurent: string | null
    mohammad: string | null
  }>({
    laurent: null,
    mohammad: null,
  })

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>, person: "laurent" | "mohammad") => {
    const file = event.target.files?.[0]
    if (!file) return

    // Vérifier le type de fichier
    if (!file.type.startsWith("image/")) {
      alert("Veuillez télécharger uniquement des fichiers image.")
      return
    }

    // Vérifier la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("La taille du fichier ne doit pas dépasser 5MB.")
      return
    }

    // Créer une URL pour la prévisualisation
    const previewUrl = URL.createObjectURL(file)

    setSelectedFiles((prev) => ({ ...prev, [person]: file }))
    setPreviews((prev) => ({ ...prev, [person]: previewUrl }))
  }

  // Fonction pour copier les instructions
  const copyInstructions = () => {
    const instructions = `
Instructions pour mettre à jour les photos des co-fondateurs:

1. Créez un dossier "team" dans le dossier "public" de votre projet
2. Ajoutez les photos des co-fondateurs avec les noms exacts suivants:
   - laurent-bouzon.png pour Laurent Bouzon
   - mohammad-ali-bacha.png pour Mohammad-Ali Bacha
3. Assurez-vous que les photos sont au format carré pour un meilleur rendu
4. Redéployez votre site pour que les changements prennent effet

Note: Les photos doivent être optimisées pour le web (taille recommandée: 500x500 pixels)
    `.trim()

    navigator.clipboard
      .writeText(instructions)
      .then(() => alert("Instructions copiées dans le presse-papiers!"))
      .catch((err) => console.error("Erreur lors de la copie:", err))
  }

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
              <h2 className="text-xl font-bold mb-4">Prévisualiser les photos des co-fondateurs</h2>
              <p className="text-gray-600 mb-4">
                Sélectionnez les photos pour les prévisualiser. Pour les mettre en ligne, suivez les instructions
                ci-dessous.
              </p>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-700 mb-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-2">Note importante</p>
                    <p className="mb-2">
                      Dans cet environnement de prévisualisation, vous ne pouvez pas télécharger directement les
                      fichiers sur le serveur. Veuillez suivre les instructions manuelles pour mettre à jour les photos.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-700 border-blue-300 hover:bg-blue-100"
                      onClick={copyInstructions}
                    >
                      Copier les instructions
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Laurent Bouzon */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Laurent Bouzon</h3>
                <div className="mb-4 aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={previews.laurent || "/team/laurent-bouzon.png"}
                    alt="Laurent Bouzon"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/diverse-group.png"
                    }}
                  />
                </div>
                <div className="relative">
                  <input
                    type="file"
                    id="laurent-photo"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileSelect(e, "laurent")}
                  />
                  <Button className="w-full flex items-center justify-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Sélectionner une photo
                  </Button>
                </div>
                {selectedFiles.laurent && (
                  <p className="mt-2 text-sm text-green-600">
                    <Check className="h-4 w-4 inline mr-1" />
                    {selectedFiles.laurent.name} sélectionné
                  </p>
                )}
              </div>

              {/* Mohammad-Ali Bacha */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium mb-2">Mohammad-Ali Bacha</h3>
                <div className="mb-4 aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={previews.mohammad || "/team/mohammad-ali-bacha.png"}
                    alt="Mohammad-Ali Bacha"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/diverse-group.png"
                    }}
                  />
                </div>
                <div className="relative">
                  <input
                    type="file"
                    id="mohammad-photo"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => handleFileSelect(e, "mohammad")}
                  />
                  <Button className="w-full flex items-center justify-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Sélectionner une photo
                  </Button>
                </div>
                {selectedFiles.mohammad && (
                  <p className="mt-2 text-sm text-green-600">
                    <Check className="h-4 w-4 inline mr-1" />
                    {selectedFiles.mohammad.name} sélectionné
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-md text-orange-700">
              <h3 className="font-medium mb-2">Instructions pour la mise en ligne</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Créez un dossier <code className="bg-orange-100 px-1 rounded">team</code> dans le dossier{" "}
                  <code className="bg-orange-100 px-1 rounded">public</code> de votre projet
                </li>
                <li>
                  Ajoutez les photos des co-fondateurs avec les noms exacts suivants:
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      <code className="bg-orange-100 px-1 rounded">laurent-bouzon.png</code> pour Laurent Bouzon
                    </li>
                    <li>
                      <code className="bg-orange-100 px-1 rounded">mohammad-ali-bacha.png</code> pour Mohammad-Ali Bacha
                    </li>
                  </ul>
                </li>
                <li>Assurez-vous que les photos sont au format carré pour un meilleur rendu</li>
                <li>Redéployez votre site pour que les changements prennent effet</li>
              </ol>
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
