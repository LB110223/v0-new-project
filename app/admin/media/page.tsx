"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Check, AlertCircle, ExternalLink, Copy, Trash, Plus } from "lucide-react"
import Link from "next/link"

// Types pour les médias
interface Media {
  id: string
  name: string
  url: string
  type: "image" | "logo" | "icon" | "other"
  description: string
}

// Médias par défaut
const defaultMedia: Media[] = [
  {
    id: "media-1",
    name: "Logo principal",
    url: "/smart-impulsion-logo.png",
    type: "logo",
    description: "Logo principal de Smart Impulsion",
  },
  {
    id: "media-2",
    name: "Logo blanc",
    url: "/smart-impulsion-logo-white.png",
    type: "logo",
    description: "Version blanche du logo pour les fonds sombres",
  },
  {
    id: "media-3",
    name: "Image OG",
    url: "/og-image.png",
    type: "image",
    description: "Image pour les partages sur les réseaux sociaux",
  },
]

export default function AdminMedia() {
  const [media, setMedia] = useState<Media[]>([])
  const [originalMedia, setOriginalMedia] = useState<Media[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [imageStatus, setImageStatus] = useState<Record<string, { loaded: boolean; error: boolean }>>({})
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    // Charger les médias existants
    const savedMedia = localStorage.getItem("media_content")
    if (savedMedia) {
      const parsedMedia = JSON.parse(savedMedia)
      setMedia(parsedMedia)
      setOriginalMedia(parsedMedia)
    } else {
      // Utiliser les médias par défaut
      setMedia(defaultMedia)
      setOriginalMedia(defaultMedia)
    }
  }, [])

  useEffect(() => {
    // Vérifier s'il y a des changements
    setHasChanges(JSON.stringify(media) !== JSON.stringify(originalMedia))
  }, [media, originalMedia])

  const handleMediaChange = (index: number, field: keyof Media, value: string) => {
    const updatedMedia = [...media]
    updatedMedia[index] = { ...updatedMedia[index], [field]: value }
    setMedia(updatedMedia)

    // Réinitialiser le statut de l'image si l'URL change
    if (field === "url") {
      setImageStatus((prev) => ({
        ...prev,
        [updatedMedia[index].id]: { loaded: false, error: false },
      }))
    }
  }

  const handleAddMedia = () => {
    const newMedia: Media = {
      id: `media-${Date.now()}`,
      name: "Nouveau média",
      url: "/placeholder.svg?key=new-media",
      type: "image",
      description: "Description du média",
    }
    setMedia([...media, newMedia])
  }

  const handleRemoveMedia = (index: number) => {
    const updatedMedia = [...media]
    updatedMedia.splice(index, 1)
    setMedia(updatedMedia)
  }

  const handleSave = () => {
    localStorage.setItem("media_content", JSON.stringify(media))
    setOriginalMedia([...media])
    setIsSaved(true)
    setHasChanges(false)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setMedia([...originalMedia])
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

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
      },
      (err) => {
        console.error("Erreur lors de la copie:", err)
      },
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Gérer les médias</CardTitle>
            <Link href="/guide-images" target="_blank">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Guide des images
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {media.map((item, index) => (
                <Card key={item.id} className="border border-gray-200">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">{item.name}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveMedia(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nom</label>
                        <Input
                          value={item.name}
                          onChange={(e) => handleMediaChange(index, "name", e.target.value)}
                          placeholder="Nom du média"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Type</label>
                        <select
                          value={item.type}
                          onChange={(e) => handleMediaChange(index, "type", e.target.value as any)}
                          className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="image">Image</option>
                          <option value="logo">Logo</option>
                          <option value="icon">Icône</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL</label>
                      <div className="flex gap-2">
                        <Input
                          value={item.url}
                          onChange={(e) => handleMediaChange(index, "url", e.target.value)}
                          placeholder="https://exemple.com/image.jpg"
                          className={imageStatus[item.id]?.error ? "border-red-500" : ""}
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard(item.url, item.id)}
                          title="Copier l'URL"
                        >
                          {copiedId === item.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      {imageStatus[item.id]?.error && (
                        <p className="text-red-500 text-sm">Cette image ne peut pas être chargée. Vérifiez l'URL.</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Input
                        value={item.description}
                        onChange={(e) => handleMediaChange(index, "description", e.target.value)}
                        placeholder="Description du média"
                      />
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img
                          src={item.url || "/placeholder.svg?key=media"}
                          alt={item.name}
                          className="max-w-full max-h-full object-contain"
                          onLoad={() => handleImageLoad(item.id)}
                          onError={() => handleImageError(item.id)}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.type}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button onClick={handleAddMedia} className="w-full" variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Ajouter un média
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
            <CardTitle>Guide d'utilisation des médias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">
                    Cette section vous permet de gérer les médias utilisés sur votre site. Vous pouvez ajouter, modifier
                    ou supprimer des images, logos et autres médias.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Pour les images, utilisez des URLs directes vers des images (format .jpg, .png, etc.). Consultez le
                    guide des images pour plus d'informations sur l'hébergement d'images.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-md">
                <h3 className="font-medium text-blue-800 mb-2">Services d'hébergement d'images recommandés</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
                  <li>
                    <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" className="underline">
                      ImgBB
                    </a>{" "}
                    - Service gratuit, facile à utiliser
                  </li>
                  <li>
                    <a href="https://imgur.com/" target="_blank" rel="noopener noreferrer" className="underline">
                      Imgur
                    </a>{" "}
                    - Populaire et fiable
                  </li>
                  <li>
                    <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer" className="underline">
                      Postimages
                    </a>{" "}
                    - Ne nécessite pas de compte
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
