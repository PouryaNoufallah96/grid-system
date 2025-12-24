import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { GridCross } from "@/components/grid/grid-cross";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

export function ProductsSection() {
  return (
    <section className="bg-black text-white">
      <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
        <Container size="xl">
          <Grid columns={3} rows={4}>
          {/* Section marker - top left */}
          <GridCross column={1} row={1} size={24} position="top-left" />

          {/* Section header - spans row 1-2, col 1 only */}
          <GridCell
            column={1}
            row="1/3"
            className="p-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white">
              Your product,
              <br />
              delivered.
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Security, speed, and AI included, so you can focus on your user.
            </p>
          </GridCell>

          {/* Agents card - row 1-2, col 2 */}
          <GridCell column={2} row="1/3" className="p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-white">Agents</h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Deliver more value to users by executing complex workflows.
            </p>
            <button className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-auto pt-8">
              <div className="bg-zinc-900 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400 border-t-transparent animate-spin" />
                  Thinking...
                </div>
                <div className="mt-4 h-10 bg-zinc-800 rounded flex items-center px-3">
                  <div className="w-full h-0.5 bg-linear-to-r from-teal-500 via-teal-400 to-transparent rounded animate-pulse" />
                </div>
              </div>
            </div>
          </GridCell>

          {/* AI Apps card - row 1-2, col 3 */}
          <GridCell column={3} row="1/3" className="p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-white">AI Apps</h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Enrich any product or feature with the latest models and tools.
            </p>
            <button className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-auto pt-8 flex flex-wrap gap-2">
              {[
                "Fluid",
                "AI SDK",
                "AI Gateway",
                "Workflow",
                "Sandbox",
                "BotID",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-full border border-white/20 bg-zinc-900 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GridCell>

          {/* Web Apps card - row 3-4, col 1 */}
          <GridCell column={1} row="3/5" className="p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-white">Web Apps</h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Ship beautiful interfaces that don&apos;t compromise speed or
              functionality.
            </p>
            <button className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-auto pt-8">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="p-4">
                  <div className="text-gray-400 text-sm">
                    What will you create?
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="h-8 w-16 bg-zinc-800 rounded" />
                    <div className="h-8 w-16 bg-zinc-800 rounded" />
                    <div className="h-8 w-16 bg-zinc-800 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </GridCell>

          {/* Composable Commerce card - row 3-4, col 2 */}
          <GridCell column={2} row="3/5" className="p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-white">
              Composable Commerce
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Increase conversion with fast, branded storefronts.
            </p>
            <button className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-auto pt-8">
              <div className="flex gap-3">
                {["Shirt", "Pants", "Shoes"].map((item) => (
                  <div
                    key={item}
                    className="flex-1 bg-zinc-900 rounded-lg p-3 border border-white/10"
                  >
                    <div className="aspect-square bg-zinc-800 rounded mb-2" />
                    <div className="text-xs text-gray-400">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </GridCell>

          {/* Multi-tenant Platform card - row 3-4, col 3 */}
          <GridCell column={3} row="3/5" className="p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-white">
              Multi-tenant Platform
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Serve millions securely across isolated environments.
            </p>
            <button className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-auto pt-8 space-y-2">
              {[
                "joe.domain.com",
                "jane.domain.com",
                "project.domain.com",
                "customer.domain.com",
              ].map((domain, i) => (
                <div
                  key={domain}
                  className="bg-zinc-900 rounded px-3 py-2 text-xs text-gray-400 border border-white/10 flex items-center gap-2"
                  style={{ marginLeft: `${i * 12}px` }}
                >
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-teal-400">🔒</span>
                  {domain}
                </div>
              ))}
            </div>
          </GridCell>

          {/* Section marker - bottom right */}
          <GridCross column={3} row={4} size={24} position="bottom-right" />
        </Grid>
        </Container>

        <Container size="xl">
        {/* Framework infrastructure row */}
        <Grid columns={3} rows={2}>
          <GridCross column={1} row={1} size={24} position="top-left" />

          <GridCell
            column={1}
            row="1/3"
            className="p-8 flex items-center justify-center"
          >
            <div className="relative w-full max-w-xs h-48">
              <FrameworkDiagram />
            </div>
          </GridCell>

          {/* Infrastructure text - spans cols 2-3, SOLID to hide guides */}
          <GridCell
            column="2/4"
            row="1/3"
            solid
            className="p-8 flex flex-col justify-center"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <svg viewBox="0 0 76 65" fill="currentColor" className="w-4 h-4">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              Framework-Defined Infrastructure
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              From code to infrastructure in one git push.{" "}
              <span className="text-gray-400">
                Vercel deeply understands your app to provision the right
                resources and optimize for high-performance apps.
              </span>
            </h3>
          </GridCell>

          <GridCross column={3} row={2} size={24} position="bottom-right" />
        </Grid>
        </Container>

        <Container size="xl">
        {/* Scale your enterprise row */}
        <Grid columns={3} rows={1}>
          <GridCross column={1} row={1} size={24} position="top-left" />

          {/* Full-width centered content, SOLID */}
          <GridCell
            column="1/4"
            row={1}
            solid
            className="py-12 flex items-center justify-center gap-3 flex-wrap"
          >
            <span className="text-xl md:text-2xl font-semibold text-white">
              Scale your
            </span>
            <span className="px-4 py-2 rounded-full border border-white/20 text-white text-sm flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Enterprise
            </span>
            <span className="text-xl md:text-2xl font-semibold text-white">
              without compromising
            </span>
            <span className="px-4 py-2 rounded-full border border-white/20 text-white text-sm flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Security
            </span>
          </GridCell>

          <GridCross column={3} row={1} size={24} position="bottom-right" />
        </Grid>
        </Container>
      </GridSystem>
    </section>
  );
}

function FrameworkDiagram() {
  const frameworks = [
    { color: "#FF3E00", name: "Svelte" },
    { color: "#00DC82", name: "Nuxt" },
    { color: "#FFFFFF", name: "Next.js" },
    { color: "#FF6B6B", name: "Remix" },
    { color: "#0EA5E9", name: "React" },
  ];

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {frameworks.map((_, i) => (
        <path
          key={i}
          d={`M 30 ${20 + i * 22} Q 80 ${20 + i * 22} 100 60`}
          stroke={frameworks[i].color}
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      ))}
      {frameworks.map((fw, i) => (
        <circle
          key={fw.name}
          cx="20"
          cy={20 + i * 22}
          r="8"
          fill={fw.color}
          opacity="0.8"
        />
      ))}
      <circle cx="100" cy="60" r="20" fill="white" />
      <path d="M100 45 L115 75 L85 75 Z" fill="black" />
      {[0, 1, 2].map((i) => (
        <path
          key={`out-${i}`}
          d={`M 120 60 Q 150 ${40 + i * 20} 180 ${40 + i * 20}`}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}
