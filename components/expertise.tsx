import { CheckCircle } from "lucide-react"

const expertiseAreas = [
  "Intelligence Artificielle Générative",
  "Machine Learning & Deep Learning",
  "Traitement du Langage Naturel (NLP)",
  "Vision par Ordinateur",
  "Automatisation des Processus",
  "Analyse de Données Massives",
]

export function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="aspect-square max-w-md rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?key=567i2"
                  alt="Expertise en intelligence artificielle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">10+ ans</p>
                <p className="text-sm text-slate-600">d'expertise en IA</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Expertise</h2>
            <p className="text-lg text-slate-600 mb-6">
              Notre équipe est composée d'experts en intelligence artificielle formés dans les meilleures écoles
              françaises et internationales, avec une expérience concrète dans le déploiement de solutions IA pour des
              entreprises de toutes tailles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-slate-600">
              Nous restons constamment à la pointe des dernières avancées technologiques pour vous offrir les solutions
              les plus innovantes et efficaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
