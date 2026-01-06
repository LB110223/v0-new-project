"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Logo variant="navbar" className="cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/blog" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Blog
            </Link>
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
          <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-2 text-center"
          >
            Blog
          </Link>
          {isHomePage ? (
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 w-full rounded-md"
            >
              Contact
            </Button>
          ) : (
            <Link href="/#contact">
              <Button className="bg-white border border-gray-200 hover:border-orange-200 hover:bg-gray-50 text-gray-800 w-full rounded-md">
                Contact
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
