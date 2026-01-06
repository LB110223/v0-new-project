"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Linkedin } from "lucide-react"
import { teamMembers as staticTeamMembers } from "@/lib/site-data"

export function Team() {
  const teamMembers = staticTeamMembers

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
                    src={member.image || "/placeholder.svg?height=400&width=400&query=person"}
                    alt={`Photo de ${member.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/diverse-group.png"
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
