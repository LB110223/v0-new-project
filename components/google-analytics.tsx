"use client"

import { useEffect } from "react"

export function GoogleAnalytics() {
  useEffect(() => {
    const loadGTM = () => {
      // Inject the GTM script tag
      const script = document.createElement("script")
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-GL950W65YF"
      script.async = true
      document.head.appendChild(script)

      // Initialize gtag after the script loads
      script.onload = () => {
        window.dataLayer = window.dataLayer || []
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args)
        }
        gtag("js", new Date())
        gtag("config", "G-GL950W65YF")
      }
    }

    // Delay GTM loading by 3 seconds after page load to not block FCP/LCP
    const timeoutId = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadGTM)
      } else {
        loadGTM()
      }
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return null
}

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}
