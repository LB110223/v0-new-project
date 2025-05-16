const teamMembers = [
  {
    name: "Sophie Moreau",
    role: "Directrice Smart Training",
    bio: "Experte en pédagogie et en IA avec 12 ans d'expérience dans la formation de cadres dirigeants aux nouvelles technologies.",
    image: "/placeholder.svg?key=w11i3",
  },
  {
    name: "Thomas Dubois",
    role: "Directeur Smart Analyse",
    bio: "Ancien consultant en stratégie, spécialiste de l'analyse de données et de l'optimisation des processus métier par l'IA.",
    image: "/placeholder.svg?key=vwwzg",
  },
  {
    name: "Camille Laurent",
    role: "Directrice Smart Action",
    bio: "Ingénieure en IA avec une expertise dans l'implémentation de solutions concrètes et la mesure précise du ROI.",
    image: "/placeholder.svg?key=aarn6",
  },
  {
    name: "Alexandre Martin",
    role: "Directeur Général",
    bio: "Entrepreneur et visionnaire, avec un parcours dans les plus grandes entreprises technologiques françaises et internationales.",
    image: "/placeholder.svg?key=63wpy",
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Notre Équipe</h2>
          <p className="text-lg text-gray-600">Des experts passionnés par l'IA et le ROI mesurable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-black">{member.name}</h3>
                <p className="text-gray-500 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
