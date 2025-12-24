import { cn } from "@/lib/utils"
import type React from "react"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

/**
 * Container component for consistent layout constraints
 *
 * Provides responsive padding and max-width constraints based on size:
 * - sm: 640px (max-w-screen-sm)
 * - md: 768px (max-w-screen-md)
 * - lg: 1024px (max-w-screen-lg)
 * - xl: 1152px (max-w-6xl) - Vercel-style refined width
 *
 * Includes responsive padding:
 * - Mobile: px-4 (1rem)
 * - Tablet: px-6 (1.5rem)
 * - Desktop: px-8 (2rem)
 */
export function Container({ children, className, size = "xl" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-sm": size === "sm",
          "max-w-screen-md": size === "md",
          "max-w-screen-lg": size === "lg",
          "max-w-6xl": size === "xl",
        },
        className
      )}
    >
      {children}
    </div>
  )
}
