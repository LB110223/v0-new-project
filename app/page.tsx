import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import Founder from "@/components/founder"

export default function Home() {
  return (
    <main>
      <Hero />
      <Founder />
      <Services />
      <Results />
      <Testimonials />
      <Contact />
    </main>
  )
}
