import { GridSystem } from "@/components/grid/grid-system"
import { Grid } from "@/components/grid/grid"
import { GridCell } from "@/components/grid/grid-cell"
import { GridCross } from "@/components/grid/grid-cross"
import { RefreshCw, Zap } from "lucide-react"

const features = [
  {
    icon: RefreshCw,
    title: "Cache, controlled.",
    description: "Define per-component response revalidation that persists across deploys with Vercel's Data Cache.",
  },
  {
    icon: Zap,
    title: "Fastest Next.js builds.",
    description: "Build, test, iterate, and deploy at record, industry-leading speeds with Vercel's Build Pipeline.",
  },
  {
    icon: TriangleIcon,
    title: "Deploy with zero downtime.",
    description: "Protect against version skew and cache-related downtime with framework-aware infrastructure.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-zinc-950 text-white">
      <GridSystem guideWidth={1} guideColor="rgba(255, 255, 255, 0.1)" className="max-w-[1400px] mx-auto">
        <Grid columns={3} rows={1}>
          <GridCross column={1} row={1} size={24} position="top-left" />

          {features.map((feature, index) => (
            <GridCell key={feature.title} column={index + 1} row={1} className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 mb-8">
                <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-[280px] mx-auto">{feature.description}</p>
            </GridCell>
          ))}

          <GridCross column={3} row={1} size={24} position="bottom-right" />
        </Grid>
      </GridSystem>
    </section>
  )
}

function TriangleIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className}>
      <path d="M12 2L22 22H2L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
