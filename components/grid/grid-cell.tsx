"use client";

import type React from "react";
import type { GridCellProps, GridPosition, ResponsiveValue } from "./types";
import { cn } from "@/lib/utils";
import { useGrid } from "./grid-context";

function parseGridPosition(pos: GridPosition | undefined): string | undefined {
  if (pos === undefined || pos === "auto") return undefined;
  if (typeof pos === "number") return String(pos);
  return pos;
}

function isResponsiveObject<T>(
  value: ResponsiveValue<T> | undefined,
): value is { sm?: T; md?: T; lg?: T } {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getBasePosition(
  value: ResponsiveValue<GridPosition> | undefined,
): string | undefined {
  if (value === undefined) return undefined;
  if (isResponsiveObject(value)) {
    const base = value.sm ?? value.md ?? value.lg;
    return parseGridPosition(base);
  }
  return parseGridPosition(value as GridPosition);
}

function getResponsivePositionVars(
  value: ResponsiveValue<GridPosition> | undefined,
  prefix: "col" | "row",
): Record<string, string> {
  const vars: Record<string, string> = {};
  if (!isResponsiveObject(value)) return vars;

  if (value.sm)
    vars[`--cell-${prefix}-sm`] = parseGridPosition(value.sm) || "auto";
  if (value.md)
    vars[`--cell-${prefix}-md`] = parseGridPosition(value.md) || "auto";
  if (value.lg)
    vars[`--cell-${prefix}-lg`] = parseGridPosition(value.lg) || "auto";

  return vars;
}

export function GridCell({
  children,
  column,
  row,
  solid = false,
  className,
  style,
}: GridCellProps) {
  const gridColumn = getBasePosition(column);
  const gridRow = getBasePosition(row);

  const responsiveVars = {
    ...getResponsivePositionVars(column, "col"),
    ...getResponsivePositionVars(row, "row"),
  };

  const cellStyle: React.CSSProperties = {
    gridColumn,
    gridRow,
    position: "relative",
    zIndex: solid ? 2 : 1,
    ...responsiveVars,
    ...style,
  };

  const hasResponsiveColumn = isResponsiveObject(column);
  const hasResponsiveRow = isResponsiveObject(row);

  return (
    <div
      className={cn(
        "geist-grid-cell",
        solid && "geist-grid-cell-solid",
        hasResponsiveColumn && "geist-grid-cell-responsive-col",
        hasResponsiveRow && "geist-grid-cell-responsive-row",
        className,
      )}
      style={cellStyle}
      data-solid={solid || undefined}
    >
      {children}
    </div>
  );
}
