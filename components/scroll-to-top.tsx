"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Force le scroll en haut de page à chaque changement de route
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return null
}
