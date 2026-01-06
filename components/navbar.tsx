"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    if (isHomePage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = `/#${id}`
    }
  }

  const services = [
    { name: "Formation IA", href: "/services/formation" },
    { name: "Audit IA", href: "/services/audit" },
    { name: "Accompagnement opérationnel", href: "/services/accompagnement" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo variant="navbar" className="cursor-pointer" />
            </Link>
          </div>

          {/* Navigation centrée */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Accueil
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  Nos Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
                    isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/blog" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Blog
              </Link>
            </div>
          </nav>

          {/* Bouton Contact à droite */}
          <div className="hidden md:block flex-shrink-0">
            {isHomePage ? (
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 rounded-md px-5 py-2 transition-all duration-200"
              >
                Contact
              </Button>
            ) : (
              <Link href="/#contact">
                <Button className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 rounded-md px-5 py-2 transition-all duration-200">
                  Contact
                </Button>
              </Link>
            )}
          </div>

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

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-3 text-center border-b border-gray-100"
          >
            Accueil
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-center gap-1 w-full text-gray-700 hover:text-orange-500 font-medium transition-colors py-3"
            >
              Nos Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                isMobileServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsMobileServicesOpen(false)
                  }}
                  className="block py-2 px-4 text-gray-600 hover:text-orange-500 text-sm transition-colors text-center"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-3 text-center border-b border-gray-100"
          >
            Blog
          </Link>

          {isHomePage ? (
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 w-full rounded-md mt-2"
            >
              Contact
            </Button>
          ) : (
            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 w-full rounded-md mt-2">
                Contact
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
