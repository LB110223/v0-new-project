import { CheckCircle, TrendingUp, BarChart3, Target } from "lucide-react"

export function Approach() {
  return (
    <section id="approche" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm"></div>
              <div className="aspect-square max-w-md rounded-lg overflow-hidden shadow-2xl relative z-10 bg-white">
                <img
                  src="/placeholder.svg?key=0qo1z"
                  alt="Approche ROI mesurable"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  +35%
                </p>
                <p className="text-sm text-slate-600">ROI moyen</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-3 shadow-sm">
              Notre Approche
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              L'IA avec un ROI mesurable
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Notre mission première est de ne proposer que des solutions et transformations avec un retour sur
              investissement clairement mesurable. Nous nous engageons sur des résultats concrets.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start transform hover:translate-x-2 transition-transform">
                <div className="mr-4 bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Objectifs précis</h3>
                  <p className="text-slate-700">
                    Définition d'indicateurs de performance clairs et mesurables dès le début du projet.
                  </p>
                </div>
              </div>

              <div className="flex items-start transform hover:translate-x-2 transition-transform">
                <div className="mr-4 bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Mesure continue</h3>
                  <p className="text-slate-700">
                    Suivi en temps réel des performances et ajustements pour maximiser le ROI.
                  </p>
                </div>
              </div>

              <div className="flex items-start transform hover:translate-x-2 transition-transform">
                <div className="mr-4 bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Optimisation continue</h3>
                  <p className="text-slate-700">
                    Amélioration constante des solutions pour augmenter le retour sur investissement.
                  </p>
                </div>
              </div>

              <div className="flex items-start transform hover:translate-x-2 transition-transform">
                <div className="mr-4 bg-gradient-to-br from-pink-500 to-red-600 p-3 rounded-xl shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Garantie de résultats</h3>
                  <p className="text-slate-700">
                    Engagement contractuel sur l'atteinte des objectifs définis ensemble.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
