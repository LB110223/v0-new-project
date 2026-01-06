import { Users, Briefcase, Award, Globe } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const expertises = [
  {
    icon: Briefcase,
    title: "Industrie & Manufacturing",
    description: "Maintenance prédictive, optimisation de production, contrôle qualité",
  },
  {
    icon: Users,
    title: "Commerce & Retail",
    description: "Prévision des ventes, personnalisation client, gestion des stocks",
  },
  {
    icon: Award,
    title: "Finance & Assurance",
    description: "Détection de fraude, scoring crédit, automatisation des processus",
  },
  {
    icon: Globe,
    title: "Services & Conseil",
    description: "Analyse documentaire, chatbots métier, automatisation RH",
  },
]

export function ExpertsNetwork() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-black">Un réseau de plus de 30 experts IA</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre force réside dans notre réseau de spécialistes IA couvrant l'ensemble des secteurs d'activité.
                Quelle que soit votre industrie ou vos enjeux métier, nous mobilisons les compétences adaptées pour
                répondre à vos besoins spécifiques.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {expertises.map((expertise, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-black p-5 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 h-full flex flex-col">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-3 flex-shrink-0">
                    <expertise.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1 flex-shrink-0">{expertise.title}</h3>
                  <p className="text-sm text-gray-400 flex-grow">{expertise.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Barre de stats en bas */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-500">30+</div>
                  <div className="text-sm text-gray-600">Experts IA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">15+</div>
                  <div className="text-sm text-gray-600">Secteurs couverts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">100%</div>
                  <div className="text-sm text-gray-600">Solutions sur-mesure</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">48h</div>
                  <div className="text-sm text-gray-600">Mobilisation équipe</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
