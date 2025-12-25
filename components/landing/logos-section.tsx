import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function LogosSection() {
  return (
    <section className="bg-black text-white">
      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-16 text-center">
        <p className="text-2xl font-bold tracking-tight leading-tight text-white">
          The teams we empower.
        </p>
        <Button className="mt-6 rounded-full bg-white text-black hover:bg-gray-100 px-6 h-12 text-base w-full">
          Get a Demo
        </Button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
          <Container size="xl">
            <div className="w-full overflow-hidden relative">
              <Grid columns={3} rows={5} className="w-full">
                {/* Section marker - top left */}

                {/* Row 1 - empty top spacing */}
                <GridCell
                  column="1/4"
                  row={1}
                  solid
                  className="h-20 bg-black"
                />

                {/* Row 2 - Main heading with button, solid across full width */}
                <GridCell
                  column="1/4"
                  row={2}
                  solid
                  className="py-12 flex items-center justify-center gap-4 flex-wrap bg-black"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                    The teams we empower.
                  </h2>
                  <Button className="rounded-full bg-white text-black hover:bg-gray-100 px-6 h-12 text-base">
                    Get a Demo
                  </Button>
                </GridCell>

                {/* Row 3 - empty bottom spacing */}
                <GridCell
                  column="1/4"
                  row={3}
                  solid
                  className="h-20 bg-black"
                />

                {/* Row 4 - Trusted by section */}
                <GridCell
                  column="1/4"
                  row={4}
                  solid
                  className="border-t border-white/10 py-12 bg-black"
                >
                  <p className="text-center text-gray-400 mb-8 text-sm">
                    Trusted by the{" "}
                    <span className="text-white font-medium">
                      largest Next.js companies
                    </span>
                    .
                  </p>
                  <div className="flex items-center justify-center gap-x-8 gap-y-4 flex-wrap opacity-70">
                    {[
                      "Johnson & Johnson",
                      "Wayfair",
                      "Under Armour",
                      "Stripe",
                      "Unity",
                      "Washington Post",
                      "Guinness",
                    ].map((logo) => (
                      <span
                        key={logo}
                        className="text-sm font-semibold text-white whitespace-nowrap"
                      >
                        {logo}
                      </span>
                    ))}
                  </div>
                </GridCell>

                {/* Row 5 - very short for the marker */}
                <GridCell column="1/4" row={5} solid className="h-4 bg-black" />
              </Grid>
            </div>
          </Container>
        </GridSystem>
      </div>
    </section>
  );
}
