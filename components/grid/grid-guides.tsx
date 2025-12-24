"use client";

import type React from "react";
import { useMemo } from "react";

interface GridGuidesProps {
  columns: number;
  rows: number;
  hideGuides?: "row" | "column" | "all" | boolean;
  guideWidth: number;
  guideColor: string;
}

/**
 * GridGuides implements the Vercel grid pattern using display: contents.
 *
 * Pattern details:
 * 1. Wrapper div has `display: contents` (via CSS class) - its children render as grid children
 * 2. Guide cells fill every grid position with `position: absolute` + `inset: 0`
 * 3. Each guide cell draws right and bottom borders
 * 4. Parent grid draws top and left borders
 *
 * This ensures:
 * - All grid lines visible regardless of content cell placement
 * - Sparse grids show complete grid structure
 * - Content cells can overlay guides without breaking the visual grid
 * - Solid cells (z-index: 2) appear above guides (z-index: 0)
 */
export function GridGuides({
  columns,
  rows,
  hideGuides,
  guideWidth,
  guideColor,
}: GridGuidesProps) {
  // Don't render if all guides are hidden
  if (hideGuides === "all" || hideGuides === true) {
    return null;
  }

  const showVerticalGuides = hideGuides !== "column";
  const showHorizontalGuides = hideGuides !== "row";

  // Generate rows * columns guide cells to fill every grid position
  // Memoized to prevent recreating array on every render
  const guideCells = useMemo(
    () =>
      Array.from({ length: rows * columns }, (_, index) => {
        const x = (index % columns) + 1;
        const y = Math.floor(index / columns) + 1;

        return (
          <div
            key={`guide-${x}-${y}`}
            className="geist-guide-cell"
            style={
              {
                // Absolutely positioned to fill grid cell without affecting layout
                position: "absolute",
                inset: 0,
                // Position in the CSS Grid
                gridColumnStart: x,
                gridColumnEnd: "span 1",
                gridRowStart: y,
                gridRowEnd: "span 1",
                // Draw right and bottom borders (grid has top and left)
                borderRight: showVerticalGuides
                  ? `${guideWidth}px solid ${guideColor}`
                  : undefined,
                borderBottom: showHorizontalGuides
                  ? `${guideWidth}px solid ${guideColor}`
                  : undefined,
                pointerEvents: "none",
                zIndex: 0, // Below content cells
              } as React.CSSProperties
            }
            aria-hidden="true"
          />
        );
      }),
    [
      rows,
      columns,
      showVerticalGuides,
      showHorizontalGuides,
      guideWidth,
      guideColor,
    ],
  );

  return (
    <div className="geist-grid-guides" aria-hidden="true">
      {guideCells}
    </div>
  );
}
