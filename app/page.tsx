import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import Founder from "@/components/founder"
import { ExpertsNetwork } from "@/components/experts-network"

export default function Home() {
  return (
    <main>
      <Hero />
      <Founder />
      <Services />
      <Results />
      <ExpertsNetwork />
      <Testimonials />
      <Contact />
    </main>
  )
}
