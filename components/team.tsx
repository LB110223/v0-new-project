import { AnimateOnScroll } from "@/components/animate-on-scroll"

const teamMembers = [
  {
    name: "Laurent Bouzon",
    role: "Co-fondateur",
    bio: "Expert en intelligence artificielle avec une vision stratégique pour transformer les entreprises grâce à des solutions IA à ROI mesurable.",
    image: "/laurent-bouzon.jpg", // Remplacez par le nom exact de votre fichier
  },
  {
    name: "Mohammad-Ali Bacha",
    role: "Co-fondateur",
    bio: "Spécialiste en technologies d'IA appliquées aux problématiques business, avec une expertise dans l'implémentation de solutions à forte valeur ajoutée.",
    image: "/mohammad-ali-bacha.jpg", // Remplacez par le nom exact de votre fichier
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-white section-transition">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Notre Équipe</h2>
            <p className="text-lg text-gray-600">Des experts passionnés par l'IA et le ROI mesurable</p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={index} variant="fade-up" delay={index * 200} duration={800}>
              <div className="bg-gray-50 rounded-lg overflow-hidden hover-lift">
                <div className="aspect-square overflow-hidden image-scale">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`Photo de ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black">{member.name}</h3>
                  <p className="text-gray-500 font-medium mb-2">{member.role}</p>
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
