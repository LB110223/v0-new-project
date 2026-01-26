"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    axeptioSettings?: {
      clientId: string
      cookiesVersion: string
    }
    _axcb?: Array<(sdk: { openCookies: () => void }) => void>
  }
}

// Ce composant n'est plus necessaire car Axeptio est charge directement dans le head du layout
// Il est garde pour compatibilite mais ne fait plus rien
export function AxeptioProvider() {
  useEffect(() => {
    // La configuration Axeptio est maintenant dans le head du layout.tsx
    // Ce composant est garde uniquement pour compatibilite
    console.log("[v0] AxeptioProvider mounted - config is in layout head")
  }, [])

  return null
}
