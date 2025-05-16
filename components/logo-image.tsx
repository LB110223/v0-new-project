"use client"

import Image from "next/image"

interface LogoImageProps {
  variant?: "default" | "white"
  className?: string
  width?: number
  height?: number
  onClick?: () => void
}

export function LogoImage({ variant = "default", className = "", width = 150, height = 40, onClick }: LogoImageProps) {
  const src = variant === "white" ? "/smart-impulsion-logo-white.png" : "/smart-impulsion-logo.png"

  return (
    <div className={`${className} ${onClick ? "cursor-pointer" : ""}`} onClick={onClick}>
      <Image src={src || "/placeholder.svg"} alt="Smart Impulsion Logo" width={width} height={height} priority />
    </div>
  )
}
