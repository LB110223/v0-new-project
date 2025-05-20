"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, AlertCircle, Trash, Plus } from "lucide-react"

// Types pour les membres de l'équipe
interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}

// Membres de l'équipe par défaut
const defaultTeamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Laurent Bouzon",
    role: "Co-fondateur",
    bio: "Serial entrepreneur orienté impact, ayant structuré ses précédentes entreprises autour de l'IA avec une maîtrise des leviers permettant un ROI rapide et mesurable.",
    image: "/diverse-business-person.png",
    linkedin: "https://www.linkedin.com/in/laurent-bouzon-150237108/",
  },
  {
    id: "member-2",
    name: "Mohammad-Ali Bacha",
    role: "Co-fondateur",
    bio: "Spécialiste en technologies d'IA appliquées aux problématiques business, avec une expertise dans l'implémentation de solutions à forte valeur ajoutée.",
    image: "/diverse-business-person.png",
    linkedin: "https://www.linkedin.com/in/mohammad-ali-bacha/",
  },
]

export default function AdminTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [originalTeamMembers, setOriginalTeamMembers] = useState<TeamMember[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [imageStatus, setImageStatus] = useState<Record<string, { loaded: boolean; error: boolean }>>({})

  useEffect(() => {
    // Charger les membres de l'équipe existants
    const savedTeamMembers = localStorage.getItem("team_members")
    if (savedTeamMembers) {
      const parsedTeamMembers = JSON.parse(savedTeamMembers)
      setTeamMembers(parsedTeamMembers)
      setOriginalTeamMembers(parsedTeamMembers)
    } else {
      // Utiliser les membres de l'équipe par défaut
      setTeamMembers(defaultTeamMembers)
      setOriginalTeamMembers(defaultTeamMembers)
    }

    // Charger également les anciennes données de l'équipe (pour la compatibilité)
    const savedImages = localStorage.getItem("teamImages")
    if (savedImages) {
      try {
        const images = JSON.parse(savedImages)
        if (images.laurent || images.mohammad) {
          const updatedMembers = [...(savedTeamMembers ? JSON.parse(savedTeamMembers) : defaultTeamMembers)]

          // Mettre à jour les images si elles existent
          if (images.laurent && updatedMembers[0]) {
            updatedMembers[0].image = images.laurent
          }
          if (images.mohammad && updatedMembers[1]) {
            updatedMembers[1].image = images.mohammad
          }

          setTeamMembers(updatedMembers)
          setOriginalTeamMembers(updatedMembers)
        }
      } catch (error) {
        console.error("Erreur lors du chargement des anciennes images:", error)
      }
    }
  }, [])

  useEffect(() => {
    // Vérifier s'il y a des changements
    setHasChanges(JSON.stringify(teamMembers) !== JSON.stringify(originalTeamMembers))
  }, [teamMembers, originalTeamMembers])

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers]
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setTeamMembers(updatedMembers)

    // Réinitialiser le statut de l'image si l'URL change
    if (field === "image") {
      setImageStatus((prev) => ({
        ...prev,
        [updatedMembers[index].id]: { loaded: false, error: false },
      }))
    }
  }

  const handleAddMember = () => {
    const newMember: TeamMember = {
      id: `member-${Date.now()}`,
      name: "Nouveau membre",
      role: "Poste",
      bio: "Biographie du membre",
      image: "/placeholder.svg?key=person-new",
      linkedin: "",
    }
    setTeamMembers([...teamMembers, newMember])
  }

  const handleRemoveMember = (index: number) => {
    const updatedMembers = [...teamMembers]
    updatedMembers.splice(index, 1)
    setTeamMembers(updatedMembers)
  }

  const handleSave = () => {
    localStorage.setItem("team_members", JSON.stringify(teamMembers))
    setOriginalTeamMembers([...teamMembers])

    // Mettre à jour également l'ancien format pour la compatibilité
    if (teamMembers.length >= 2) {
      const teamImages = {
        laurent: teamMembers[0].image,
        mohammad: teamMembers[1].image,
      }
      localStorage.setItem("teamImages", JSON.stringify(teamImages))
    }

    setIsSaved(true)
    setHasChanges(false)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setTeamMembers([...originalTeamMembers])
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
            <CardTitle>Gérer l'équipe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <Card key={member.id} className="border border-gray-200">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">Membre {index + 1}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveMember(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      disabled={teamMembers.length <= 2} // Empêcher la suppression des deux premiers membres
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nom</label>
                        <Input
                          value={member.name}
                          onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                          placeholder="Nom du membre"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Rôle</label>
                        <Input
                          value={member.role}
                          onChange={(e) => handleMemberChange(index, "role", e.target.value)}
                          placeholder="Rôle dans l'entreprise"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Biographie</label>
                      <Textarea
                        value={member.bio}
                        onChange={(e) => handleMemberChange(index, "bio", e.target.value)}
                        placeholder="Biographie du membre"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL LinkedIn</label>
                      <Input
                        value={member.linkedin}
                        onChange={(e) => handleMemberChange(index, "linkedin", e.target.value)}
                        placeholder="https://www.linkedin.com/in/..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL de l'image</label>
                      <Input
                        value={member.image}
                        onChange={(e) => handleMemberChange(index, "image", e.target.value)}
                        placeholder="https://exemple.com/image.jpg"
                        className={imageStatus[member.id]?.error ? "border-red-500" : ""}
                      />
                      {imageStatus[member.id]?.error && (
                        <p className="text-red-500 text-sm">Cette image ne peut pas être chargée. Vérifiez l'URL.</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={member.image || "/placeholder.svg?key=person"}
                          alt={`Photo de ${member.name}`}
                          className="w-full h-full object-cover"
                          onLoad={() => handleImageLoad(member.id)}
                          onError={() => handleImageError(member.id)}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button onClick={handleAddMember} className="w-full" variant="outline">
                <Plus className="h-4 w-4 mr-2" /> Ajouter un membre
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
                  Vous pouvez ajouter, modifier ou supprimer des membres de l'équipe. Pour les images, utilisez des URLs
                  directes vers des images (format .jpg, .png, etc.). Les deux premiers membres (co-fondateurs) ne
                  peuvent pas être supprimés.
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
