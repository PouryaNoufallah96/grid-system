"use client";

import type React from "react";
import type { GridCrossProps } from "./types";
import { cn } from "@/lib/utils";
import { useGridSystem } from "./grid-context";

/**
 * GridCross renders a + marker at grid intersections
 * Uses CSS Grid positioning to place the cross at the specified column/row intersection
 * The cross is absolutely positioned within its grid cell to appear at the intersection point
 */
export function GridCross({
  column,
  row,
  size = 20,
  position = "top-left",
  className,
}: GridCrossProps) {
  const { guideColor } = useGridSystem();

  // Calculate position offset based on position prop
  const getPositionOffset = (): React.CSSProperties => {
    const halfSize = size / 2;

    switch (position) {
      case "top-left":
        return { top: -halfSize, left: -halfSize };
      case "top-right":
        return { top: -halfSize, right: -halfSize };
      case "bottom-left":
        return { bottom: -halfSize, left: -halfSize };
      case "bottom-right":
        return { bottom: -halfSize, right: -halfSize };
      case "center":
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
      default:
        return { top: -halfSize, left: -halfSize };
    }
  };

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
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
        >
          <line
            x1="0"
            y1={size / 2}
            x2={size}
            y2={size / 2}
            stroke={guideColor}
            strokeWidth="1"
          />
          <line
            x1={size / 2}
            y1="0"
            x2={size / 2}
            y2={size}
            stroke={guideColor}
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
