"use client"

import type React from "react"
import type { GridCrossProps } from "./types"
import { cn } from "@/lib/utils"
import { useGridSystem } from "./grid-context"

/**
 * GridCross renders a + marker at grid intersections
 * Uses CSS Grid positioning to place the cross at the specified column/row intersection
 * The cross is absolutely positioned within its grid cell to appear at the intersection point
 */
export function GridCross({ column, row, size = 20, position = "top-left", className }: GridCrossProps) {
  const { guideColor } = useGridSystem()

  // Calculate position offset based on position prop
  const getPositionOffset = (): React.CSSProperties => {
    const halfSize = size / 2

    switch (position) {
      case "top-left":
        return { top: -halfSize, left: -halfSize }
      case "top-right":
        return { top: -halfSize, right: -halfSize }
      case "bottom-left":
        return { bottom: -halfSize, left: -halfSize }
      case "bottom-right":
        return { bottom: -halfSize, right: -halfSize }
      case "center":
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
      default:
        return { top: -halfSize, left: -halfSize }
    }
  }

  return (
    <div
      className={cn("geist-grid-cross", className)}
      style={
        {
          gridColumn: column,
          gridRow: row,
          position: "relative",
          width: 0,
          height: 0,
          pointerEvents: "none",
          zIndex: 10,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          ...getPositionOffset(),
        }}
      >
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <line x1="0" y1="10" x2="20" y2="10" stroke={guideColor} strokeWidth="1" />
          <line x1="10" y1="0" x2="10" y2="20" stroke={guideColor} strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}
