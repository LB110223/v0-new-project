import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Testimonials } from "@/components/testimonials"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { AxeptioFallback } from "@/components/axeptio-fallback"
import { FaviconUpdater } from "@/components/favicon-updater"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FaviconUpdater />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <AxeptioFallback />
    </div>
  )
}
