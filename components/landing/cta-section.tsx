import { GridSystem } from "@/components/grid/grid-system"
import { Grid } from "@/components/grid/grid"
import { GridCell } from "@/components/grid/grid-cell"
import { GridCross } from "@/components/grid/grid-cross"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-black text-white">
      <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
        <Container size="xl">
        <Grid columns={3} rows={1}>
          {/* Section marker - top left */}
          <GridCross column={1} row={1} size={24} position="top-left" />

          <GridCell column="1/3" row={1} solid className="p-8 bg-black">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-balance">
              <span className="text-white">Ready to deploy?</span>{" "}
              <span className="text-gray-400">
                Start building with a free account. Speak to an expert for your{" "}
                <span className="text-blue-400 hover:underline cursor-pointer">Pro</span> or{" "}
                <span className="text-purple-400 hover:underline cursor-pointer">Enterprise</span> needs.
              </span>
            </h2>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="rounded-full bg-white text-black hover:bg-gray-100 px-6">Start Deploying</Button>
              <Button
                variant="outline"
                className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent px-6"
              >
                Talk to an Expert
              </Button>
            </div>
          </GridCell>

          {/* Right info */}
          <GridCell column={3} row={1} className="p-8">
            <p className="text-sm text-gray-400 leading-relaxed">
              Take a look around the entire platform, from start to finish. Find out how we can improve your developer
              experience.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all group">
              Tour the Product
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </GridCell>

          {/* Section marker - bottom right */}
          <GridCross column={3} row={1} size={24} position="bottom-right" />
        </Grid>
        </Container>
      </GridSystem>
    </section>
  )
}
