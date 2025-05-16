import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="aspect-square max-w-md rounded-lg overflow-hidden shadow-xl">
                <img src="/about-og-image.png" alt="Our team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">10+ Years</p>
                <p className="text-sm text-slate-600">of experience</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
            <p className="text-lg text-slate-600 mb-6">
              Founded in 2013, we've been at the forefront of web development innovation. Our mission is to make
              beautiful, functional websites accessible to everyone.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Our team of experts combines technical excellence with creative design to deliver exceptional digital
              experiences that help our clients succeed online.
            </p>
            <Button size="lg">Learn Our Story</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
