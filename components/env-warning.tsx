"use client"

import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"

export function EnvWarning() {
  const [showWarning, setShowWarning] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const checkEnv = async () => {
      try {
        const response = await fetch("/api/check-env")
        const data = await response.json()

        if (!data.success) {
          setErrorMessage(data.message)
          setShowWarning(true)
        }
      } catch (error) {
        setErrorMessage("Impossible de vérifier les variables d'environnement")
        setShowWarning(true)
      }
    }

    checkEnv()
  }, [])

  if (!showWarning) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-4">
      <div className="container mx-auto flex items-center gap-2">
        <AlertCircle className="h-5 w-5" />
        <p>
          <strong>Configuration incomplète :</strong> {errorMessage}
        </p>
      </div>
    </div>
  )
}
