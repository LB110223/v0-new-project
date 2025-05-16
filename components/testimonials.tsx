const testimonials = [
  {
    quote:
      "Smart Impulsion a transformé notre approche de l'IA. Leur focus sur le ROI nous a permis de justifier chaque euro investi avec des résultats concrets.",
    author: "Marie Dupont",
    position: "Directrice de l'Innovation, Groupe Retail",
    image: "/placeholder.svg?key=person1",
  },
  {
    quote:
      "L'approche méthodique de Smart Impulsion nous a permis d'identifier les opportunités d'IA à fort impact et de les déployer rapidement.",
    author: "Jean Martin",
    position: "DSI, Secteur Bancaire",
    image: "/placeholder.svg?key=person2",
  },
  {
    quote:
      "La formation Smart Training a permis à nos équipes de monter en compétence rapidement et d'être autonomes sur nos projets d'IA.",
    author: "Sophie Legrand",
    position: "DRH, Industrie Manufacturière",
    image: "/placeholder.svg?key=person3",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Ce que disent nos clients</h2>
          <p className="text-lg text-gray-600">
            Des témoignages de clients qui ont transformé leur entreprise avec Smart Impulsion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-300"
                >
                  <path
                    d="M11.0001 16.5C11.0001 18.9853 8.98539 21 6.50006 21C4.01473 21 2.00006 18.9853 2.00006 16.5C2.00006 14.0147 4.01473 12 6.50006 12C6.67166 12 6.84125 12.0116 7.00812 12.0342C7.00273 11.8889 7.00003 11.7424 7.00003 11.5948C7.00003 7.21678 10.5453 3.67154 14.9233 3.67154C19.3013 3.67154 22.8466 7.21678 22.8466 11.5948C22.8466 12.3757 22.7222 13.1309 22.4907 13.8407"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.0001 16.5C22.0001 18.9853 19.9854 21 17.5001 21C15.0147 21 13.0001 18.9853 13.0001 16.5C13.0001 14.0147 15.0147 12 17.5001 12C17.6717 12 17.8413 12.0116 18.0081 12.0342"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-bold text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
