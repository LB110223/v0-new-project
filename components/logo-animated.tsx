"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

interface LogoAnimatedProps {
  className?: string
  variant?: "default" | "footer" | "navbar"
  onClick?: () => void
}

export function LogoAnimated({ className = "", variant = "default", onClick }: LogoAnimatedProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Déterminer les tailles en fonction de la variante
  let textSize = "text-xl"
  let iconSize = "h-4 w-4"

  if (variant === "navbar") {
    textSize = "text-xl"
    iconSize = "h-4 w-4"
  } else if (variant === "footer") {
    textSize = "text-lg"
    iconSize = "h-3.5 w-3.5"
  }

  return (
    <div
      className={`flex items-center ${className} ${onClick ? "cursor-pointer" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative font-bold flex items-center">
        <span
          className={`${textSize} text-black transition-transform duration-300 ${isHovered ? "transform -translate-y-0.5" : ""}`}
        >
          Smart
        </span>
        <div className="relative">
          <span
            className={`${textSize} text-orange-500 ml-1.5 transition-all duration-300 ${isHovered ? "transform translate-y-0.5" : ""}`}
          >
            Impulsion
          </span>
          <ArrowUpRight
            className={`${iconSize} text-orange-500 absolute -top-1 -right-3 transition-all duration-300 ${
              isHovered ? "transform translate-x-0.5 -translate-y-0.5" : ""
            }`}
          />
        </div>
      </div>
    </div>
  )
}
