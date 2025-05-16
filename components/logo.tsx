import { ArrowUpRight } from "lucide-react"

interface LogoProps {
  className?: string
  variant?: "default" | "footer" | "navbar"
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
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
    <div className={`flex items-center ${className}`}>
      <div className="relative font-bold flex items-center">
        <span className={`${textSize} text-black`}>Smart</span>
        <div className="relative">
          <span className={`${textSize} text-orange-500 ml-1.5`}>Impulsion</span>
          <ArrowUpRight className={`${iconSize} text-orange-500 absolute -top-1 -right-3`} />
        </div>
      </div>
    </div>
  )
}
