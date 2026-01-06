import { TrendingUp, TrendingDown, Target } from "lucide-react"

const results = [
  {
    metric: "–32%",
    title: "Temps opérationnel",
    description: "Réduction du temps sur les processus automatisés",
    icon: TrendingDown,
    isNegative: true,
  },
  {
    metric: "+18%",
    title: "Performance commerciale",
    description: "Amélioration de la performance en 90 jours",
    icon: TrendingUp,
    isNegative: false,
  },
  {
    metric: "+24%",
    title: "ROI",
    description: "Retour sur investissement sur les périmètres déployés",
    icon: Target,
    isNegative: false,
  },
]

export function Results() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Des résultats concrets, pas des promesses</h2>
          <p className="text-lg text-gray-600">
            Nous livrons des résultats concrets, mesurables et vérifiables. Chaque projet est piloté par des indicateurs
            clairs (temps gagné, coûts réduits, performance améliorée) afin de démontrer un ROI réel, observable et
            directement exploitable par nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <div className="flex items-center justify-center mb-4">
                <result.icon className={`h-6 w-6 mr-2 ${result.isNegative ? "text-green-600" : "text-orange-500"}`} />
                <span className={`text-4xl font-bold ${result.isNegative ? "text-green-600" : "text-orange-500"}`}>
                  {result.metric}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
