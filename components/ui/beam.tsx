"use client";

import { cn } from "@/lib/utils";

interface BeamProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  duration?: number;
  delay?: number;
}

export function Beam({
  className,
  direction = "horizontal",
  duration = 3,
  delay = 0,
}: BeamProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "absolute pointer-events-none overflow-hidden",
        isHorizontal ? "h-px w-full" : "w-px h-full",
        className,
      )}
    >
      <div
        className={cn(
          "absolute",
          isHorizontal
            ? "h-full w-1/4 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            : "w-full h-1/4 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent",
        )}
        style={{
          animation: `beam-${direction} ${duration}s ease-in-out ${delay}s infinite`,
        }}
      />
    </div>
  );
}

// Animated gradient orb for visual interest
interface GradientOrbProps {
  className?: string;
  size?: number;
  color?: string;
}

export function GradientOrb({
  className,
  size = 400,
  color = "cyan",
}: GradientOrbProps) {
  const colorMap: Record<string, string> = {
    cyan: "from-cyan-500/20",
    blue: "from-blue-500/20",
    purple: "from-purple-500/20",
    teal: "from-teal-500/20",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none",
        `bg-gradient-radial ${colorMap[color] || colorMap.cyan} to-transparent`,
        className,
      )}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
