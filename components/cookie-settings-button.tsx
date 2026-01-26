"use client"

import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    openAxeptioCookies?: (settings?: object) => void
    _axcb?: Array<(sdk: { openCookies: (settings?: object) => void }) => void>
    axeptioSDK?: {
      openCookies: (settings?: object) => void
    }
  }
}

interface CookieSettingsButtonProps {
  className?: string
}

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  const openAxeptioSettings = () => {
    if (typeof window === "undefined") return

    // Méthode 1: via openAxeptioCookies (fonction globale créée par Axeptio)
    if (typeof window.openAxeptioCookies === "function") {
      window.openAxeptioCookies()
      return
    }

    // Méthode 2: via axeptioSDK.openCookies
    if (window.axeptioSDK && typeof window.axeptioSDK.openCookies === "function") {
      window.axeptioSDK.openCookies()
      return
    }

    // Méthode 3: via callback _axcb si SDK pas encore prêt
    window._axcb = window._axcb || []
    window._axcb.push((sdk) => {
      sdk.openCookies()
    })
  }

  return (
    <Button variant="outline" onClick={openAxeptioSettings} className={className}>
      Paramètres des cookies
    </Button>
  )
}
