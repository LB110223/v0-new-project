"use client"

import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    openAxeptioCookies?: () => void
    _axcb?: Array<(sdk: { openCookies: () => void }) => void>
  }
}

interface CookieSettingsButtonProps {
  className?: string
}

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  const openAxeptioSettings = () => {
    if (typeof window === "undefined") return

    console.log("[v0] Opening Axeptio settings...")
    console.log("[v0] openAxeptioCookies available:", typeof window.openAxeptioCookies)
    console.log("[v0] _axcb available:", Array.isArray(window._axcb))

    // Méthode recommandée par Axeptio: utiliser _axcb
    // Cette méthode fonctionne que le SDK soit chargé ou non
    window._axcb = window._axcb || []
    window._axcb.push((sdk) => {
      console.log("[v0] Axeptio SDK callback triggered, opening cookies panel")
      sdk.openCookies()
    })
  }

  return (
    <Button variant="outline" onClick={openAxeptioSettings} className={className}>
      Paramètres des cookies
    </Button>
  )
}
