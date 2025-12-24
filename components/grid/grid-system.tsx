"use client";
import type React from "react";
import { GridSystemContext } from "./grid-context";
import type { GridSystemProps } from "./types";
import { cn } from "@/lib/utils";

export function GridSystem({
  children,
  guideWidth = 1,
  guideColor = "rgba(255, 255, 255, 0.1)",
  debug = false,
  className,
}: GridSystemProps) {
  return (
    <GridSystemContext.Provider value={{ guideWidth, guideColor, debug }}>
      <div
        className={cn("geist-grid-system w-full", className)}
        style={
          {
            "--geist-grid-guide-width": `${guideWidth}px`,
            "--geist-grid-guide-color": guideColor,
          } as React.CSSProperties
        }
      >
        {children}
        {debug && (
          <div className="fixed top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded z-9999 font-mono">
            Grid Debug
          </div>
        )}
      </div>
    </GridSystemContext.Provider>
  );
}
