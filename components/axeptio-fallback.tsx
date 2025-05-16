"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function AxeptioFallback() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Vérifier si c'est la première visite
    const isFirstVisit = !localStorage.getItem("axeptio_seen")

    if (isFirstVisit) {
      // Attendre pour voir si le bandeau Axeptio s'ouvre automatiquement
      const timer = setTimeout(() => {
        // Vérifier si un élément Axeptio est visible dans le DOM
        const axeptioElements = document.querySelectorAll('[id^="axeptio"], [class^="axeptio"]')
        const isAxeptioVisible = Array.from(axeptioElements).some((el) => {
          const style = window.getComputedStyle(el)
          return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"
        })

        // Si aucun élément Axeptio n'est visible, afficher notre bandeau de secours
        if (!isAxeptioVisible) {
          setVisible(true)
        }
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("axeptio_seen", "true")
    if (window._axcb) {
      window._axcb.push((axeptio) => {
        if (typeof axeptio.acceptAllCookies === "function") {
          axeptio.acceptAllCookies()
        }
      })
    }
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("axeptio_seen", "true")
    if (window._axcb) {
      window._axcb.push((axeptio) => {
        if (typeof axeptio.rejectAllCookies === "function") {
          axeptio.rejectAllCookies()
        }
      })
    }
    setVisible(false)
  }

  const handleCustomize = () => {
    if (window._axcb) {
      window._axcb.push((axeptio) => {
        if (typeof axeptio.showCookies === "function") {
          axeptio.showCookies()
          setVisible(false)
        }
      })
    }
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            Nous utilisons des cookies pour améliorer votre expérience. En continuant à naviguer sur ce site, vous
            acceptez notre utilisation des cookies.
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleReject}>
              Refuser
            </Button>
            <Button variant="outline" size="sm" onClick={handleCustomize}>
              Personnaliser
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" onClick={handleAccept}>
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
