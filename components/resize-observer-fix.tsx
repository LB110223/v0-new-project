"use client"

import { useEffect } from "react"

export function ResizeObserverFix() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message === "ResizeObserver loop completed with undelivered notifications.") {
        event.stopImmediatePropagation()
        event.preventDefault()
      }
    }

    window.addEventListener("error", handleError)

    return () => {
      window.removeEventListener("error", handleError)
    }
  }, [])

  return null
}
