"use client"

import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    openAxeptioCookies?: () => void
    axeptioSDK?: {
      openCookies: () => void
    }
  }
}

interface CookieSettingsButtonProps {
  className?: string
}

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  const openAxeptioSettings = () => {
    if (typeof window !== "undefined") {
      // Méthode 1: via openAxeptioCookies (définie par Axeptio)
      if (typeof window.openAxeptioCookies === "function") {
        window.openAxeptioCookies()
        return
      }
      // Méthode 2: via axeptioSDK
      if (window.axeptioSDK && typeof window.axeptioSDK.openCookies === "function") {
        window.axeptioSDK.openCookies()
        return
      }
      // Méthode 3: via void(0) trick qui déclenche le widget
      const axeptioButton = document.querySelector('[data-axeptio-widget]') as HTMLElement
      if (axeptioButton) {
        axeptioButton.click()
      }
    }
  }

  return (
    <Button variant="outline" onClick={openAxeptioSettings} className={className}>
      Paramètres des cookies
    </Button>
  )
}
