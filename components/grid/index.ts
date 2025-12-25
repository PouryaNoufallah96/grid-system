// Separate exports (for tree-shaking and explicit imports)
export { GridSystem } from "./grid-system";
export { GridCell } from "./grid-cell";
export { GridCross } from "./grid-cross";
// GridGuides is internal-only, not exported publicly
export {
  GridContext,
  GridSystemContext,
  useGrid,
  useGridSystem,
} from "./grid-context";

// Types
export type {
  GridSystemProps,
  GridProps,
  GridCellProps,
  GridCrossProps,
  ResponsiveValue,
  GridPosition,
  GridSystemContextValue,
  GridContextValue,
} from "./types";

// Compound component pattern (nested namespace) - Geist/Vercel style
// Usage: import { Grid } from '@/components/grid'; <Grid.System><Grid><Grid.Cell /></Grid></Grid.System>
import { GridSystem } from "./grid-system";
import { Grid as GridComponent } from "./grid";
import { GridCell } from "./grid-cell";
import { GridCross } from "./grid-cross";

// Type for compound Grid component
type GridCompoundComponent = typeof GridComponent & {
  System: typeof GridSystem;
  Cell: typeof GridCell;
  Cross: typeof GridCross;
};

// Attach sub-components to Grid for nested pattern
// This allows: <Grid.System>, <Grid.Cell>, <Grid.Cross>
// Also exports Grid as standalone component
const GridWithNamespace = Object.assign(GridComponent, {
  System: GridSystem,
  Cell: GridCell,
  Cross: GridCross,
}) as GridCompoundComponent;

export { GridWithNamespace as Grid };
