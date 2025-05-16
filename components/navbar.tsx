"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = ["hero", "services", "results", "testimonials", "team", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant="navbar" className="cursor-pointer" onClick={() => scrollToSection("hero")} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { id: "services", label: "Services" },
              { id: "results", label: "Résultats" },
              { id: "testimonials", label: "Témoignages" },
              { id: "team", label: "Équipe" },
              { id: "contact", label: "Contact", isButton: true },
            ].map((item) =>
              item.isButton ? (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 rounded-md px-5 py-2 transition-all duration-200"
                >
                  {item.label}
                </Button>
              ) : (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors relative ${
                      activeSection === item.id ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 transition-all duration-300"></span>
                  )}
                </div>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {[
            { id: "services", label: "Services" },
            { id: "results", label: "Résultats" },
            { id: "testimonials", label: "Témoignages" },
            { id: "team", label: "Équipe" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`py-2 text-left text-sm font-medium transition-colors ${
                activeSection === item.id ? "text-black" : "text-gray-600"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="ml-2 inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
              )}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 w-full rounded-md mt-2"
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </header>
  )
}
