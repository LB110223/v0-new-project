"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Vérifier si l'utilisateur est authentifié
    const authStatus = localStorage.getItem("admin_authenticated")
    setIsAuthenticated(authStatus === "true")
    setIsLoading(false)

    // Rediriger vers la page de connexion si non authentifié
    if (authStatus !== "true" && pathname !== "/admin") {
      router.push("/admin")
    }
  }, [router, pathname])

  // Afficher un écran de chargement pendant la vérification
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Si c'est la page d'accueil admin ou si l'utilisateur est authentifié, afficher le contenu
  if (pathname === "/admin" || isAuthenticated) {
    return (
      <>
        {pathname !== "/admin" && (
          <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/admin">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Admin
                  </Button>
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-sm font-medium">
                  {pathname.split("/").pop()?.charAt(0).toUpperCase() + pathname.split("/").pop()?.slice(1)}
                </span>
              </div>
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour au site
                </Button>
              </Link>
            </div>
          </div>
        )}
        {children}
      </>
    )
  }

  // Sinon, ne rien afficher (la redirection sera effectuée)
  return null
}
