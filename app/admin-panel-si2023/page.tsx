"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, AlertCircle } from "lucide-react"
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

  const [imageStatus, setImageStatus] = useState({
    laurent: { loaded: false, error: false },
    mohammad: { loaded: false, error: false },
  })

  const [debugMode, setDebugMode] = useState(false)

  // Charger les URLs sauvegardées au chargement de la page
  useEffect(() => {
    try {
      const saved = localStorage.getItem("teamImages")
      if (saved) {
        const parsed = JSON.parse(saved)
        setImageUrls(parsed)
        setSavedUrls(parsed)
        console.log("Images chargées depuis localStorage:", parsed)
      }
    } catch (error) {
      console.error("Erreur lors du chargement des images:", error)
    }
  }, [])

  const handleChange = (person: "laurent" | "mohammad", value: string) => {
    setImageUrls((prev) => ({
      ...prev,
      [person]: value,
    }))
    // Réinitialiser le statut de l'image quand l'URL change
    setImageStatus((prev) => ({
      ...prev,
      [person]: { loaded: false, error: false },
    }))
  }

  const handleImageLoad = (person: "laurent" | "mohammad") => {
    setImageStatus((prev) => ({
      ...prev,
      [person]: { loaded: true, error: false },
    }))
  }

  const handleImageError = (person: "laurent" | "mohammad") => {
    setImageStatus((prev) => ({
      ...prev,
      [person]: { loaded: false, error: true },
    }))
  }

  const saveUrls = () => {
    try {
      // Sauvegarder les URLs dans le localStorage
      localStorage.setItem("teamImages", JSON.stringify(imageUrls))
      setSavedUrls(imageUrls)

      // Afficher les données sauvegardées pour le débogage
      if (debugMode) {
        console.log("Images sauvegardées dans localStorage:", imageUrls)
        const saved = localStorage.getItem("teamImages")
        console.log("Vérification après sauvegarde:", saved)
      }

      alert(
        "Les URLs des images ont été sauvegardées avec succès ! Rafraîchissez la page d'accueil pour voir les changements.",
      )
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des images:", error)
      alert("Erreur lors de la sauvegarde des images. Veuillez consulter la console pour plus de détails.")
    }
  }

  const toggleDebugMode = () => {
    setDebugMode(!debugMode)
  }

  const testLocalStorage = () => {
    try {
      localStorage.setItem("test", "test")
      const test = localStorage.getItem("test")
      if (test === "test") {
        alert("LocalStorage fonctionne correctement !")
        localStorage.removeItem("test")
      } else {
        alert("LocalStorage ne fonctionne pas correctement.")
      }
    } catch (error) {
      alert("Erreur lors du test de localStorage: " + error)
    }
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
              <h2 className="text-xl font-bold mb-4">Gestion des photos des co-fondateurs</h2>
              <p className="text-gray-600 mb-4">
                Entrez simplement les URLs des images pour chaque co-fondateur et cliquez sur "Enregistrer".
                <Link href="/guide-images" className="ml-2 text-blue-600 hover:underline">
                  Voir le guide pour héberger des images
                </Link>
              </p>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-700 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-2">Problèmes courants avec les URLs d'images</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        <strong>Utilisez des URLs directes vers l'image</strong> - L'URL doit se terminer par .jpg,
                        .png, .webp, etc.
                      </li>
                      <li>
                        <strong>Évitez les services qui bloquent le partage</strong> - Certains services comme Google
                        Photos peuvent bloquer l'affichage sur d'autres sites
                      </li>
                      <li>
                        <strong>Services recommandés</strong> - Utilisez des services comme Imgur, Postimages, ou ImgBB
                        qui sont conçus pour le partage d'images
                      </li>
                      <li>
                        <strong>Après avoir sauvegardé</strong> - Rafraîchissez la page d'accueil pour voir les
                        changements
                      </li>
                    </ol>
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
                    onLoad={() => handleImageLoad("laurent")}
                    onError={() => handleImageError("laurent")}
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
                    className={`w-full ${imageStatus.laurent.error ? "border-red-500" : ""}`}
                  />
                  {imageStatus.laurent.error && (
                    <p className="text-red-500 text-sm mt-1">Cette image ne peut pas être chargée. Vérifiez l'URL.</p>
                  )}
                  {imageStatus.laurent.loaded && (
                    <p className="text-green-500 text-sm mt-1 flex items-center">
                      <Check className="h-4 w-4 mr-1" /> Image chargée avec succès
                    </p>
                  )}
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
                    onLoad={() => handleImageLoad("mohammad")}
                    onError={() => handleImageError("mohammad")}
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
                    className={`w-full ${imageStatus.mohammad.error ? "border-red-500" : ""}`}
                  />
                  {imageStatus.mohammad.error && (
                    <p className="text-red-500 text-sm mt-1">Cette image ne peut pas être chargée. Vérifiez l'URL.</p>
                  )}
                  {imageStatus.mohammad.loaded && (
                    <p className="text-green-500 text-sm mt-1 flex items-center">
                      <Check className="h-4 w-4 mr-1" /> Image chargée avec succès
                    </p>
                  )}
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
                  <p className="mt-2 text-sm">
                    N'oubliez pas de rafraîchir la page d'accueil pour voir les changements.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="font-medium mb-4">Outils de dépannage</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={testLocalStorage} size="sm">
                  Tester le localStorage
                </Button>
                <Button variant="outline" onClick={toggleDebugMode} size="sm">
                  {debugMode ? "Désactiver" : "Activer"} le mode débogage
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    localStorage.removeItem("teamImages")
                    setImageUrls({ laurent: "", mohammad: "" })
                    setSavedUrls({ laurent: "", mohammad: "" })
                    alert("Images réinitialisées !")
                  }}
                >
                  Réinitialiser les images
                </Button>
              </div>

              {debugMode && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <h4 className="font-medium mb-2">Informations de débogage</h4>
                  <pre className="text-xs overflow-auto max-h-40 p-2 bg-gray-800 text-white rounded">
                    {JSON.stringify(
                      {
                        currentUrls: imageUrls,
                        savedUrls: savedUrls,
                        imageStatus: imageStatus,
                        localStorageContent: typeof window !== "undefined" ? localStorage.getItem("teamImages") : null,
                      },
                      null,
                      2,
                    )}
                  </pre>
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
