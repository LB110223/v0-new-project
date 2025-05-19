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
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FaviconUpdater />
      <Navbar />
      <main>
        <Hero />

        <AnimateOnScroll variant="fade-up">
          <Services />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up">
          <Results />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up">
          <Testimonials />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up">
          <Team />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up">
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
      <AxeptioFallback />
    </div>
  )
}
