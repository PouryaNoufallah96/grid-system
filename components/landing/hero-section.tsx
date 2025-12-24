import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { GridCross } from "@/components/grid/grid-cross";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-black text-white">
      <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
        <Container size="xl">
          <Grid columns={12} rows={4} height="preserve-aspect-ratio">
            <GridCross column={1} row={1} size={20} position="top-left" />
            <GridCross column={12} row={4} size={20} position="bottom-right" />

            {/* Row 1 - all 12 cells */}
            {Array.from({ length: 12 }, (_, i) => (
              <GridCell key={`r1-c${i + 1}`} column={i + 1} row={1} />
            ))}

            {/* Left edge cell spanning rows 2-3 */}
            <GridCell column={1} row="2/4" />

            {/* Right edge cell spanning rows 2-3 */}
            <GridCell column={12} row="2/4" />

            {/* Center solid area spanning columns 2-11 and rows 2-3 */}
            <GridCell
              column="2/12"
              row="2/4"
              solid
              className="flex items-center justify-center gap-6 px-6 bg-black"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white whitespace-nowrap">
                The teams we empower.
              </h1>
              <Button
                size="lg"
                className="rounded-full px-8 bg-white text-black hover:bg-gray-100 h-14 text-lg font-medium shrink-0"
              >
                Get a Demo
              </Button>
            </GridCell>

            {/* Row 4 - all 12 cells */}
            {Array.from({ length: 12 }, (_, i) => (
              <GridCell key={`r4-c${i + 1}`} column={i + 1} row={4} />
            ))}
          </Grid>
        </Container>
      </GridSystem>
    </section>
  );
}
