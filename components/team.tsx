"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

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
const defaultTeamMembers = [
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

export function Team() {
  const [teamMembers, setTeamMembers] = useState(defaultTeamMembers)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Charger les membres de l'équipe depuis localStorage
  useEffect(() => {
    try {
      // Essayer d'abord de charger depuis le nouveau format
      const savedTeamMembers = localStorage.getItem("team_members")
      if (savedTeamMembers) {
        setTeamMembers(JSON.parse(savedTeamMembers))
      } else {
        // Sinon, essayer de charger depuis l'ancien format
        const savedImages = localStorage.getItem("teamImages")
        if (savedImages) {
          const images = JSON.parse(savedImages)
          console.log("Team component: Images chargées depuis localStorage", images)

          if (images.laurent || images.mohammad) {
            setTeamMembers([
              {
                ...defaultTeamMembers[0],
                image: images.laurent && images.laurent.trim() !== "" ? images.laurent : defaultTeamMembers[0].image,
              },
              {
                ...defaultTeamMembers[1],
                image: images.mohammad && images.mohammad.trim() !== "" ? images.mohammad : defaultTeamMembers[1].image,
              },
            ])
          }
        }
      }
    } catch (error) {
      console.error("Team component: Erreur lors du chargement des données de l'équipe:", error)
    }
  }, [])

  const handleImageError = (id: string) => {
    console.log(`Team component: Erreur de chargement de l'image pour le membre ${id}`)

    // Mettre à jour l'état des erreurs
    setImageErrors((prev) => ({ ...prev, [id]: true }))

    // Trouver l'index du membre
    const index = teamMembers.findIndex((member) => member.id === id)
    if (index !== -1) {
      // Revenir à l'image par défaut
      setTeamMembers((prev) => {
        const updated = [...prev]
        updated[index] = { ...updated[index], image: defaultTeamMembers[index % defaultTeamMembers.length].image }
        return updated
      })
    }
  }

  return (
    <section id="team" className="py-20 bg-white section-transition">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up" threshold={0.01}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Notre Équipe</h2>
            <p className="text-lg text-gray-600">Des experts passionnés par l'IA et le ROI mesurable</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member) => (
            <AnimateOnScroll key={member.id} variant="fade-up" delay={100} duration={600} threshold={0.01}>
              <div className="bg-gray-50 rounded-lg overflow-hidden hover-lift">
                <div className="aspect-square overflow-hidden image-scale">
                  <img
                    src={member.image || "/placeholder.svg?key=person"}
                    alt={`Photo de ${member.name}`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(member.id)}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-black">{member.name}</h3>
                      <p className="text-gray-500 font-medium">{member.role}</p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
