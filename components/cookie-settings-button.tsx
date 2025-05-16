"use client"

import { Button } from "@/components/ui/button"

interface CookieSettingsButtonProps {
  className?: string
}

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  const openAxeptioSettings = () => {
    if (typeof window !== "undefined" && window._axcb) {
      window._axcb.push((axeptio) => {
        if (typeof axeptio.showCookies === "function") {
          axeptio.showCookies()
        }
      })
    }
  }

  return (
    <Button variant="outline" onClick={openAxeptioSettings} className={className}>
      Paramètres des cookies
    </Button>
  )
}
