"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function OldAdminPanel() {
  const router = useRouter()

  useEffect(() => {
    // Rediriger vers la nouvelle page d'administration
    router.push("/admin/team")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirection en cours...</h1>
        <p className="text-gray-600">Vous êtes redirigé vers le nouveau panneau d'administration.</p>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}
