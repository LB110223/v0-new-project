import { CheckCircle, Zap, Shield, BarChart } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring your website loads quickly and efficiently.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure by Default",
    description: "Built-in security features protect your site and users from common threats and vulnerabilities.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Easy to Use",
    description: "Intuitive interface and tools make building and managing your website simple and straightforward.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Analytics Built-in",
    description: "Understand your audience with comprehensive analytics and insights about your visitors.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to create stunning websites that perform well and look great on any device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
