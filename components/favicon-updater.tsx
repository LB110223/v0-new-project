"use client"

import { useEffect } from "react"

export function FaviconUpdater() {
  useEffect(() => {
    // Fonction pour forcer le remplacement du favicon
    const replaceFavicon = () => {
      // Supprimer tous les favicons existants
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
      existingFavicons.forEach((favicon) => {
        if (favicon.parentNode) {
          favicon.parentNode.removeChild(favicon)
        }
      })

      // Créer un nouveau favicon
      const newFavicon = document.createElement("link")
      newFavicon.rel = "icon"
      newFavicon.href =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjk3MzE2Ii8+CjxwYXRoIGQ9Ik02NSAzNUw0NSA1NUw2NSA3NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
      newFavicon.type = "image/svg+xml"

      // Ajouter le nouveau favicon au document
      document.head.appendChild(newFavicon)
    }

    // Exécuter immédiatement
    replaceFavicon()

    // Exécuter à nouveau après un court délai
    const timeoutId = setTimeout(replaceFavicon, 500)

    // Nettoyer
    return () => clearTimeout(timeoutId)
  }, [])

  return null
}
