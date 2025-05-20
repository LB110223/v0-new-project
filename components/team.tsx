import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Laurent Bouzon",
    role: "Co-fondateur",
    bio: "Serial entrepreneur orienté impact, ayant structuré ses précédentes entreprises autour de l'IA avec une maîtrise des leviers permettant un ROI rapide et mesurable.",
    image: "/team/laurent-bouzon.png",
    linkedin: "https://www.linkedin.com/in/laurent-bouzon-150237108/",
  },
  {
    name: "Mohammad-Ali Bacha",
    role: "Co-fondateur",
    bio: "Spécialiste en technologies d'IA appliquées aux problématiques business, avec une expertise dans l'implémentation de solutions à forte valeur ajoutée.",
    image: "/team/mohammad-ali-bacha.png",
    linkedin: "https://www.linkedin.com/in/mohammad-ali-bacha/",
  },
]

export function Team() {
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
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={index} variant="fade-up" delay={index * 100} duration={600} threshold={0.01}>
              <div className="bg-gray-50 rounded-lg overflow-hidden hover-lift">
                <div className="aspect-square overflow-hidden image-scale">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`Photo de ${member.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/diverse-group.png"
                    }}
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
