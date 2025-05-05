"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "none"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  threshold?: number
  once?: boolean
}

export function ScrollAnimation({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
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
  }, [once, threshold])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700"
    const delayClass = delay ? `delay-${delay}` : ""

    if (!isVisible) {
      switch (variant) {
        case "fade-up":
          return "opacity-0 translate-y-10"
        case "fade-down":
          return "opacity-0 -translate-y-10"
        case "fade-left":
          return "opacity-0 translate-x-10"
        case "fade-right":
          return "opacity-0 -translate-x-10"
        case "zoom-in":
          return "opacity-0 scale-95"
        case "none":
          return ""
        default:
          return "opacity-0"
      }
    }

    return `${baseClasses} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}

import { useState } from "react"
