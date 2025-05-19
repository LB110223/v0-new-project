"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-down"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function AnimateOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.05, // Réduit de 0.1 à 0.05 pour déclencher plus tôt
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        // Augmenter la marge pour déclencher l'animation avant que l'élément soit visible
        rootMargin: "0px 0px -10% 0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once, hasAnimated])

  // Définir les classes d'animation en fonction de la variante
  const getAnimationClasses = () => {
    const baseClasses = "transition-all will-change-transform"
    const durationClass = `duration-${duration}`
    const delayClass = delay > 0 ? `delay-${delay}` : ""

    const initialClasses: Record<AnimationVariant, string> = {
      "fade-up": "translate-y-8 opacity-0",
      "fade-down": "translate-y-[-2rem] opacity-0",
      "fade-left": "translate-x-[-2rem] opacity-0",
      "fade-right": "translate-x-8 opacity-0",
      "zoom-in": "scale-95 opacity-0",
      "zoom-out": "scale-105 opacity-0",
      "flip-up": "rotateX(-10deg) perspective-[800px] opacity-0 origin-bottom",
      "flip-down": "rotateX(10deg) perspective-[800px] opacity-0 origin-top",
    }

    const visibleClass = "translate-y-0 translate-x-0 scale-100 rotate-0 rotateX-0 opacity-100"

    return {
      base: `${baseClasses} ${durationClass} ${delayClass}`,
      initial: initialClasses[variant],
      visible: visibleClass,
    }
  }

  const { base, initial, visible } = getAnimationClasses()

  return (
    <div
      ref={ref}
      className={cn(base, isVisible ? visible : initial, className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
