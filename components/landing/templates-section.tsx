import { GridSystem } from "@/components/grid/grid-system"
import { Grid } from "@/components/grid/grid"
import { GridCell } from "@/components/grid/grid-cell"
import { GridCross } from "@/components/grid/grid-cross"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Link, Package, Eye, Lock } from "lucide-react"

const templates = [
  { name: "Next.js Templates", letter: "N", bgClass: "bg-zinc-800", textColor: "text-white" },
  { name: "Svelte Templates", letter: "S", bgClass: "bg-orange-600", textColor: "text-white" },
  { name: "React Templates", icon: "react", bgClass: "bg-cyan-600", textColor: "text-white" },
  { name: "Nuxt Templates", letter: "N", bgClass: "bg-emerald-600", textColor: "text-white" },
  { name: "Astro Templates", letter: "A", bgClass: "bg-purple-600", textColor: "text-white" },
  { name: "Python Templates", icon: "python", bgClass: "bg-yellow-600", textColor: "text-black" },
]

export function TemplatesSection() {
  return (
    <section className="bg-black text-white">
      <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
        <Container size="xl">
        <Grid columns={3} rows={5}>
          <GridCross column={1} row={1} size={24} position="top-left" />

          <GridCell column={1} row="1/5" solid className="p-8 bg-black">
            <h2 className="text-3xl font-bold tracking-tight leading-tight text-white text-balance">
              Deploy your
              <br />
              first app
              <br />
              in seconds.
            </h2>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Link className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Deploy automatically <span className="text-white font-medium">from git</span> or with{" "}
                  <span className="text-white font-medium">our CLI</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Package className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  <span className="text-white font-medium">Wide range</span> support for the most popular frameworks
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Eye className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  <span className="text-white font-medium">Previews</span> for every push
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Lock className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  <span className="text-white font-medium">Automatic HTTPS</span> for all your domains
                </span>
              </li>
            </ul>
          </GridCell>

          {/* Template cards - columns 2-3, rows 1-3 */}
          {templates.map((template, index) => {
            const col = (index % 2) + 2
            const row = Math.floor(index / 2) + 1
            return (
              <GridCell key={template.name} column={col} row={row} className="p-4">
                <div className="h-full rounded-lg bg-zinc-900/50 border border-white/10 p-6 hover:bg-zinc-900 transition-colors cursor-pointer group">
                  <div
                    className={`w-14 h-14 rounded-xl ${template.bgClass} flex items-center justify-center ${template.textColor} font-bold text-2xl mb-4`}
                  >
                    {template.icon === "react" ? (
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                        <circle cx="12" cy="12" r="2" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" fill="none" strokeWidth="1" />
                        <ellipse
                          cx="12"
                          cy="12"
                          rx="10"
                          ry="4"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1"
                          transform="rotate(60 12 12)"
                        />
                        <ellipse
                          cx="12"
                          cy="12"
                          rx="10"
                          ry="4"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="1"
                          transform="rotate(-60 12 12)"
                        />
                      </svg>
                    ) : template.icon === "python" ? (
                      <span>🐍</span>
                    ) : (
                      template.letter
                    )}
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-gray-200 transition-colors">
                    {template.name}
                  </h3>
                </div>
              </GridCell>
            )
          })}

          {/* Start Deploying CTA - row 4, col 2 */}
          <GridCell column={2} row={4} className="p-4">
            <div className="rounded-full border border-white/20 p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group h-full">
              <span className="text-xl md:text-2xl font-bold text-white">Start Deploying</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </GridCell>

          {/* Buttons - row 4, col 3 */}
          <GridCell column={3} row={4} className="p-4 flex flex-col gap-3 justify-center">
            <Button
              variant="outline"
              className="rounded-full justify-between bg-zinc-900 border-white/10 text-white hover:bg-zinc-800 px-6 py-5"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full justify-between bg-zinc-900 border-white/10 text-white hover:bg-zinc-800 px-6 py-5"
            >
              Get an Enterprise Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
          </GridCell>

          {/* Empty row 5 for spacing */}
          <GridCell column="1/4" row={5} solid className="h-8 bg-black" />

          <GridCross column={3} row={5} size={24} position="bottom-right" />
        </Grid>
        </Container>
      </GridSystem>
    </section>
  )
}
