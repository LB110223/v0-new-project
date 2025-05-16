import { TrendingUp } from "lucide-react"

const results = [
  {
    metric: "+320%",
    title: "ROI Logistique",
    description: "Optimisation de la chaîne logistique pour un distributeur national",
    timeframe: "18 mois",
  },
  {
    metric: "+215%",
    title: "ROI Service Client",
    description: "Automatisation du service client pour une banque française",
    timeframe: "12 mois",
  },
  {
    metric: "+450%",
    title: "ROI Détection Fraude",
    description: "Système de détection de fraude pour un assureur national",
    timeframe: "24 mois",
  },
]

export function Results() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Résultats Prouvés</h2>
          <p className="text-lg text-gray-600">Des ROI mesurables et vérifiables pour nos clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-black mr-2" />
                <span className="text-3xl font-bold text-black">{result.metric}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{result.title}</h3>
              <p className="text-gray-600 mb-4">{result.description}</p>
              <p className="text-sm text-gray-500">Période: {result.timeframe}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">ROI moyen de nos projets</h3>
              <p className="text-gray-500">Basé sur l'ensemble de nos interventions</p>
            </div>
            <div className="text-5xl font-bold mt-4 md:mt-0 text-orange-500">+285%</div>
          </div>
        </div>
      </div>
    </section>
  )
}
