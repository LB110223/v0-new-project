import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Testimonials } from "@/components/testimonials"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Results />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  )
}
