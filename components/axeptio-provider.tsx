"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    axeptioSettings?: {
      clientId: string
      cookiesVersion: string
    }
    openAxeptioCookies?: () => void
  }
}

export function AxeptioProvider() {
  useEffect(() => {
    // Configuration Axeptio
    window.axeptioSettings = {
      clientId: "6819f18c7725ab15cba26463",
      cookiesVersion: "smart impulsion-fr-EU",
    }

    // Vérifier si le script n'est pas déjà chargé
    if (document.querySelector('script[src*="axept.io/sdk.js"]')) {
      return
    }

    // Créer et injecter le script selon la méthode recommandée par Axeptio
    const script = document.createElement("script")
    script.src = "https://static.axept.io/sdk.js"
    script.async = true
    
    // Injecter avant la fermeture du body comme recommandé
    if (document.body) {
      document.body.appendChild(script)
    }

    return () => {
      // Cleanup si nécessaire
    }
  }, [])

  return null
}
