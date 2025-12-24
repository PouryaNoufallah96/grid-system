import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { GridCross } from "@/components/grid/grid-cross";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    stat: "37%",
    description: "increases conversions by",
    company: "DESENIO",
  },
  {
    stat: "87%",
    description: "decrease in build times",
    company: "reMarkable",
  },
  {
    stat: null,
    description: "manages custom domains and SSL certificates",
    company: "Mintlify",
  },
  {
    quote:
      "Now we can invest in building new features instead of managing infrastructure.",
    company: "neo",
  },
  {
    quote:
      "By far my favorite Vercel feature is the ability to connect as many domains as I need to a single project.",
    company: "super",
  },
  {
    quote:
      "As soon as we looked into Vercel, it was a no-brainer. These guys invented Next.js—they know what they're doing.",
    company: "Andersen",
  },
  {
    stat: null,
    description: "iterate faster with Incremental Static Regeneration",
    company: "HashiCorp",
  },
  {
    stat: "7x",
    description: "reduces build times by up to",
    company: "MOTORTREND",
  },
  {
    stat: "6M+",
    description: "monthly views and 80% faster docs",
    company: "fern",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-black text-white">
      <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
        <Container size="xl">
          <Grid columns={3} rows={3}>
            {/* Section marker - top left */}
            <GridCross column={1} row={1} size={24} position="top-left" />

            {testimonials.map((item, index) => {
              const col = (index % 3) + 1;
              const row = Math.floor(index / 3) + 1;

              return (
                <GridCell
                  key={item.company}
                  column={col}
                  row={row}
                  className="p-8 group hover:bg-white/5 transition-colors"
                >
                  {item.quote ? (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      &quot;{item.quote}&quot;
                    </p>
                  ) : (
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.company}{" "}
                      <span className="text-white font-medium">
                        {item.stat
                          ? `${item.description} ${item.stat}`
                          : item.description}
                      </span>{" "}
                      with Vercel.
                    </p>
                  )}

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-lg font-bold tracking-tight text-white">
                      {item.company}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </GridCell>
              );
            })}

            {/* Section marker - bottom right */}
            <GridCross column={3} row={3} size={24} position="bottom-right" />
          </Grid>
        </Container>
      </GridSystem>
    </section>
  );
}
