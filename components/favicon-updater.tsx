"use client"

import { useEffect } from "react"

export function FaviconUpdater() {
  useEffect(() => {
    const replaceFavicon = () => {
      try {
        // Supprimer tous les favicons existants avec la méthode remove() plus sûre
        const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
        existingFavicons.forEach((favicon) => {
          try {
            favicon.remove()
          } catch (e) {
            // Ignorer les erreurs silencieusement
          }
        })

        // Créer un nouveau favicon
        const newFavicon = document.createElement("link")
        newFavicon.rel = "icon"
        newFavicon.href =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjk3MzE2Ii8+CjxwYXRoIGQ9Ik02NSAzNUw0NSA1NUw2NSA3NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
        newFavicon.type = "image/svg+xml"

        // Ajouter le nouveau favicon au document
        if (document.head) {
          document.head.appendChild(newFavicon)
        }
      } catch (e) {
        // Ignorer les erreurs silencieusement
      }
    }

    // Exécuter après que le DOM soit prêt
    if (document.readyState === "complete") {
      replaceFavicon()
    } else {
      window.addEventListener("load", replaceFavicon)
    }

    // Nettoyer
    return () => {
      window.removeEventListener("load", replaceFavicon)
    }
  }, [])

  return null
}
