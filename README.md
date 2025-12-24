This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Grid System

A professional, reusable CSS Grid system inspired by Vercel's design language, built with React, TypeScript, and Tailwind CSS. The grid system implements the `display: contents` pattern from Vercel's documentation for automatic grid guide rendering.

### Features

- ✅ **Automatic Grid Guides** - Visual grid lines rendered automatically using `display: contents`
- ✅ **Responsive Support** - Breakpoint-aware columns and rows (sm, md, lg)
- ✅ **TypeScript First** - Fully typed with template literal types for grid positions
- ✅ **Performance Optimized** - Memoized rendering, minimal re-renders
- ✅ **Accessible** - ARIA attributes on decorative elements
- ✅ **Swiss Design Inspired** - Clean, modular aesthetic following Vercel patterns
- ✅ **Server-Side Compatible** - No client-side APIs required for initial render

### Quick Start

```tsx
import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { GridCross } from "@/components/grid/grid-cross";

export default function MyPage() {
  return (
    <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
      <Grid columns={3} rows={3}>
        <GridCross column={1} row={1} size={24} position="top-left" />
        <GridCross column={3} row={3} size={24} position="bottom-right" />

        <GridCell column={1} row={1}>
          Cell 1
        </GridCell>
        <GridCell column={2} row={2} solid>
          Solid Cell
        </GridCell>
        <GridCell column="1/4" row={3}>
          Spanning Cell
        </GridCell>
      </Grid>
    </GridSystem>
  );
}
```

### Component API

#### GridSystem

Root wrapper that provides grid styling context to all nested Grid components.

```tsx
interface GridSystemProps {
  children: ReactNode;
  guideWidth?: number; // Default: 1 (px)
  guideColor?: string; // Default: "rgba(255, 255, 255, 0.1)"
  debug?: boolean; // Default: false
  className?: string;
}
```

**Example:**

```tsx
<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  {/* Grid components */}
</GridSystem>
```

#### Grid

CSS Grid container that automatically renders grid guides for all cell positions.

```tsx
interface GridProps {
  children?: ReactNode;
  columns: ResponsiveValue<number>; // Required
  rows?: ResponsiveValue<number | "auto">; // Default: "auto"
  gap?: number | string;
  height?: "auto" | "preserve-aspect-ratio"; // Default: "auto"
  hideGuides?: "row" | "column" | "all" | boolean;
  className?: string;
  style?: CSSProperties;
}
```

**Examples:**

```tsx
// Simple grid
<Grid columns={3} rows={3}>
  {/* cells */}
</Grid>

// Responsive grid
<Grid columns={{ sm: 1, md: 2, lg: 3 }} rows={{ sm: 6, md: 3, lg: 2 }}>
  {/* cells adapt to viewport */}
</Grid>

// Hide specific guides
<Grid columns={12} rows={3} hideGuides="row">
  {/* only vertical guides visible */}
</Grid>

// Preserve aspect ratio
<Grid columns={12} rows={4} height="preserve-aspect-ratio">
  {/* maintains aspect ratio */}
</Grid>
```

#### GridCell

Content container positioned within the grid. Supports spanning multiple columns/rows.

```tsx
interface GridCellProps {
  children?: ReactNode;
  column?: ResponsiveValue<GridPosition>; // number | "auto" | "1/3" | "1/-1"
  row?: ResponsiveValue<GridPosition>;
  solid?: boolean; // Occludes guides, adds background
  className?: string;
  style?: CSSProperties;
}
```

**Examples:**

```tsx
// Simple positioning
<GridCell column={1} row={1}>Content</GridCell>

// Spanning columns and rows
<GridCell column="1/3" row="2/4">Spans 2 cols, 2 rows</GridCell>

// Spanning to end
<GridCell column="1/-1" row={1}>Full width</GridCell>

// Solid cell (occludes guides) - use opaque background!
<GridCell column={2} row={2} solid className="bg-blue-600 text-white">
  Solid background
</GridCell>

// Responsive positioning
<GridCell column={{ sm: "1", md: "1/3", lg: "2/4" }} row={1}>
  Responsive span
</GridCell>
```

#### GridCross

Decorative "+" marker at grid intersections (Vercel design pattern).

```tsx
interface GridCrossProps {
  column: number; // Required, 1-indexed
  row: number; // Required, 1-indexed
  size?: number; // Default: 20 (px)
  position?:
    | "top-left"
    | "top-right" // Default: "top-left"
    | "bottom-left"
    | "bottom-right"
    | "center";
  className?: string;
}
```

**Examples:**

```tsx
// Corner crosses
<GridCross column={1} row={1} size={24} position="top-left" />
<GridCross column={12} row={4} size={24} position="bottom-right" />

// Center cross
<GridCross column={6} row={2} size={32} position="center" />
```

### Responsive Behavior

The grid system uses a 3-breakpoint system matching Tailwind CSS:

- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up

On mobile (< 768px), grid guides and crosses are automatically hidden via CSS.

```tsx
<Grid columns={{ sm: 1, md: 2, lg: 3 }} rows={{ sm: 6, md: 3, lg: 2 }}>
  <GridCell
    column={{ sm: "1", md: "1/3", lg: "2/3" }}
    row={{ sm: "1/3", md: 1 }}
  >
    Responsive cell
  </GridCell>
</Grid>
```

### Advanced Usage

#### Z-Index Layering

```
GridGuides:     z-index: 0  (bottom)
GridCell:       z-index: 1  (middle)
GridCell solid: z-index: 2  (top - occludes guides)
GridCross:      z-index: 10 (decorative)
```

#### Hiding Guides Selectively

```tsx
<Grid columns={12} rows={3} hideGuides="row" />       // Only vertical guides
<Grid columns={12} rows={3} hideGuides="column" />    // Only horizontal guides
<Grid columns={12} rows={3} hideGuides="all" />       // No guides
```

#### Overlapping Cells

Cells can overlap - z-index determines stacking order:

```tsx
<Grid columns={12} rows={3}>
  <GridCell column="1/3" row="1/3" solid className="bg-red-600 text-white">
    First (bottom)
  </GridCell>
  <GridCell column="2/4" row="2/4" solid className="bg-blue-600 text-white">
    Second (overlaps, on top)
  </GridCell>
</Grid>
```

### Best Practices

1. **Always wrap grids in GridSystem** - Provides consistent guide styling
2. **Use solid for spanning cells** - Prevents guides from showing through backgrounds
   - ⚠️ **IMPORTANT**: Use **opaque backgrounds** (e.g., `bg-blue-600`) NOT transparent ones (`bg-blue-600/20`)
   - Transparent backgrounds don't fully occlude the grid guides underneath
   - Example: `<GridCell column="1/3" solid className="bg-blue-600 text-white">...</GridCell>`
3. **Leverage responsive props** - Better than hiding/showing different layouts
4. **Use Container component** - Maintains max-width consistency (1152px at xl)
5. **Follow the 12-column convention** - Most flexible for complex layouts
6. **Position crosses at intersections** - Top-left and bottom-right for subtle framing

### Architecture

The grid system uses a two-level context architecture:

1. **GridSystemContext** - Global styling (guide width, color, debug mode)
2. **GridContext** - Per-grid configuration (columns, rows, hideGuides)

Grid guides use the `display: contents` CSS pattern, which allows guide cells to participate in the parent's grid layout without creating an extra wrapper layer.

### Demo

Visit [http://localhost:3000/demo](http://localhost:3000/demo) to see a comprehensive showcase with 10 interactive examples covering all grid features.

### Files

```
components/grid/
├── index.ts              # Public exports
├── types.ts              # TypeScript type definitions
├── grid-context.tsx      # React Context providers
├── grid-system.tsx       # Root wrapper component
├── grid.tsx              # CSS Grid container
├── grid-cell.tsx         # Content cells
├── grid-cross.tsx        # Decorative crosses
└── grid-guides.tsx       # Auto-rendered guide lines
```

### Inspiration

This grid system is based on Vercel's grid pattern, documented in:

- `docs/grid.md` - Vercel's design philosophy and implementation details
- `docs/gesit-grid.md` - Geist Grid component API reference

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
