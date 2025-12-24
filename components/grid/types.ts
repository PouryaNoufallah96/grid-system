import type { CSSProperties, ReactNode } from "react";

// Responsive value type - allows single value or breakpoint-specific values
export type ResponsiveValue<T> = T | { sm?: T; md?: T; lg?: T };

// Grid position can be a number, "auto", or a span string like "1/3" or "1/-1"
export type GridPosition =
  | number
  | "auto"
  | `${number}/${number}`
  | `${number}/-${number}`
  | string;

// Grid System Props - wraps the entire page with grid context
export interface GridSystemProps {
  children: ReactNode;
  /** Width of grid guide lines in pixels */
  guideWidth?: number;
  /** Color of grid guide lines */
  guideColor?: string;
  /** Show debug overlay with grid info */
  debug?: boolean;
  /** Show grid guides on mobile (< 768px). Default: false */
  showGuidesOnMobile?: boolean;
  /** Custom class name */
  className?: string;
}

// Grid Props - the actual CSS Grid container
export interface GridProps {
  children?: ReactNode;
  /** Number of columns - can be responsive */
  columns: ResponsiveValue<number>;
  /** Number of rows - can be responsive or "auto" for auto-fill */
  rows?: ResponsiveValue<number | "auto">;
  /** Gap between cells (in px or CSS value) */
  gap?: number | string;
  /** Height behavior - "auto" or "preserve-aspect-ratio" for square cells */
  height?: "auto" | "preserve-aspect-ratio";
  /** Hide specific guides - "row", "column", or "all" */
  hideGuides?: "row" | "column" | "all" | boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  style?: CSSProperties;
}

// Grid Cell Props
export interface GridCellProps {
  children?: ReactNode;
  /** Column position/span - number or "1/3" syntax */
  column?: ResponsiveValue<GridPosition>;
  /** Row position/span - number or "1/3" syntax */
  row?: ResponsiveValue<GridPosition>;
  /** Whether this cell should occlude underlying guides (has background) */
  solid?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  style?: CSSProperties;
}

export interface GridCrossProps {
  /** Column position for the cross (1-indexed) */
  column: number;
  /** Row position for the cross (1-indexed) */
  row: number;
  /** Size of the cross in pixels */
  size?: number;
  /** Position relative to grid intersection */
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  /** Custom class name */
  className?: string;
}

// Grid Guides Props (internal)
// GridGuidesProps moved to grid-guides.tsx to avoid module resolution issues
// export interface GridGuidesProps {
//   columns: number
//   rows: number
//   hideGuides?: "row" | "column" | "all" | boolean
//   guideWidth: number
//   guideColor: string
// }

// Context types
export interface GridSystemContextValue {
  guideWidth: number;
  guideColor: string;
  debug: boolean;
}

export type HideGuides = "row" | "column" | "all" | boolean;

export interface GridContextValue {
  columns: number;
  rows: number;
  hideGuides?: HideGuides;
  guideWidth: number;
  guideColor: string;
}
