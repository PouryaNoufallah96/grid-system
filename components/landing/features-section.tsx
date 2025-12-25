import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { Container } from "@/components/ui/container";
import { RefreshCw, Zap } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Cache, controlled.",
    description:
      "Define per-component response revalidation that persists across deploys with Vercel's Data Cache.",
  },
  {
    icon: Zap,
    title: "Fastest Next.js builds.",
    description:
      "Build, test, iterate, and deploy at record, industry-leading speeds with Vercel's Build Pipeline.",
  },
  {
    icon: TriangleIcon,
    title: "Deploy with zero downtime.",
    description:
      "Protect against version skew and cache-related downtime with framework-aware infrastructure.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-black text-white">
      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-12 space-y-10">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black border border-white/10 mb-6">
              <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
          <Container size="xl">
            <Grid columns={3} rows={1}>
              {features.map((feature, index) => (
                <GridCell
                  key={feature.title}
                  column={index + 1}
                  row={1}
                  className="p-10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black border border-white/10 mb-6">
                    <feature.icon
                      className="w-6 h-6 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-[280px] mx-auto">
                    {feature.description}
                  </p>
                </GridCell>
              ))}
            </Grid>
          </Container>
        </GridSystem>
      </div>
    </section>
  );
}

function TriangleIcon({
  className,
  strokeWidth,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        d="M12 2L22 22H2L12 2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
