"use client";

import type React from "react";
import { GridContext } from "./grid-context";
import type { GridProps, ResponsiveValue, GridContextValue } from "./types";
import { cn } from "@/lib/utils";
import { useGridSystem } from "./grid-context";
import { GridGuides } from "./grid-guides";

function isResponsiveObject<T>(
  value: ResponsiveValue<T>,
): value is { sm?: T; md?: T; lg?: T } {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getBaseValue<T>(
  value: ResponsiveValue<T> | undefined,
  fallback: T,
): T {
  if (value === undefined) return fallback;
  if (isResponsiveObject(value)) {
    return value.sm ?? value.md ?? value.lg ?? fallback;
  }
  return value as T;
}

function getMaxValue<T extends number>(
  value: ResponsiveValue<T> | undefined,
  fallback: T,
): T {
  if (value === undefined) return fallback;
  if (isResponsiveObject(value)) {
    return Math.max(
      value.sm ?? fallback,
      value.md ?? fallback,
      value.lg ?? fallback,
    ) as T;
  }
  return value as T;
}

export function Grid({
  children,
  columns,
  rows = "auto",
  gap,
  height = "auto",
  hideGuides,
  className,
  style,
}: GridProps) {
  const { guideWidth, guideColor } = useGridSystem();
  const baseColumns = getBaseValue(columns, 1);
  const baseRows = getBaseValue(rows, "auto");
  const numRows = typeof baseRows === "number" ? baseRows : 1;

  // For responsive grids, calculate max columns/rows to render guides for all breakpoints
  const maxColumns = isResponsiveObject(columns)
    ? getMaxValue(columns, baseColumns)
    : baseColumns;
  const maxRows =
    isResponsiveObject(rows) && typeof baseRows === "number"
      ? getMaxValue(rows as ResponsiveValue<number>, baseRows)
      : numRows;

  // Responsive behavior is handled via CSS variables and media queries in globals.css
  // No need for responsive classes since CSS handles it directly

  const cssVars: Record<string, string | number> = {
    "--grid-cols": baseColumns,
    "--grid-rows": typeof baseRows === "number" ? baseRows : 1,
  };

  if (isResponsiveObject(columns)) {
    if (columns.sm) cssVars["--grid-cols-sm"] = columns.sm;
    if (columns.md) cssVars["--grid-cols-md"] = columns.md;
    if (columns.lg) cssVars["--grid-cols-lg"] = columns.lg;
  }

  if (isResponsiveObject(rows)) {
    if (rows.sm) cssVars["--grid-rows-sm"] = rows.sm;
    if (rows.md) cssVars["--grid-rows-md"] = rows.md;
    if (rows.lg) cssVars["--grid-rows-lg"] = rows.lg;
  }

  // Determine which borders to show based on hideGuides
  const showHorizontalBorders =
    hideGuides !== "row" && hideGuides !== "all" && hideGuides !== true;
  const showVerticalBorders =
    hideGuides !== "column" && hideGuides !== "all" && hideGuides !== true;

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(var(--grid-cols, ${baseColumns}), minmax(0, 1fr))`,
    gridTemplateRows:
      baseRows === "auto"
        ? "auto"
        : `repeat(var(--grid-rows, ${baseRows}), ${height === "preserve-aspect-ratio" ? "1fr" : "auto"})`,
    aspectRatio:
      height === "preserve-aspect-ratio" && typeof baseRows === "number"
        ? `var(--grid-cols, ${baseColumns})/var(--grid-rows, ${baseRows})`
        : undefined,
    gap:
      gap !== undefined
        ? typeof gap === "number"
          ? `${gap}px`
          : gap
        : undefined,
    position: "relative",
    // Outer grid borders - all four sides
    // Guide cells only draw internal borders (not on edges)
    borderTop: showHorizontalBorders
      ? `${guideWidth}px solid ${guideColor}`
      : undefined,
    borderLeft: showVerticalBorders
      ? `${guideWidth}px solid ${guideColor}`
      : undefined,
    borderRight: showVerticalBorders
      ? `${guideWidth}px solid ${guideColor}`
      : undefined,
    borderBottom: showHorizontalBorders
      ? `${guideWidth}px solid ${guideColor}`
      : undefined,
    ...cssVars,
    ...style,
  } as React.CSSProperties;

  const contextValue: GridContextValue = {
    columns: baseColumns,
    rows: numRows,
    hideGuides,
    guideWidth,
    guideColor,
  };

  return (
    <GridContext.Provider value={contextValue}>
      <div
        className={cn("geist-grid", className)}
        style={gridStyle}
        data-columns={baseColumns}
        data-rows={numRows}
      >
        <GridGuides
          columns={maxColumns}
          rows={maxRows}
          hideGuides={hideGuides}
          guideWidth={guideWidth}
          guideColor={guideColor}
        />
        {children}
      </div>
    </GridContext.Provider>
  );
}
