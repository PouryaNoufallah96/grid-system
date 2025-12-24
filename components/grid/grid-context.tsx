"use client";

import { createContext, useContext } from "react";
import type { GridSystemContextValue, GridContextValue } from "./types";

export const GridSystemContext = createContext<GridSystemContextValue>({
  guideWidth: 1,
  guideColor: "rgba(255, 255, 255, 0.1)",
  debug: false,
});

export const GridContext = createContext<GridContextValue>({
  columns: 1,
  rows: 1,
  guideWidth: 1,
  guideColor: "rgba(255, 255, 255, 0.1)",
});

export const useGridSystem = () => useContext(GridSystemContext);
export const useGrid = () => useContext(GridContext);
