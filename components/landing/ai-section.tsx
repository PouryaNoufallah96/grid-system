import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { GridCross } from "@/components/grid/grid-cross";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

const aiFeatures = [
  {
    title: "Build with the AI SDK.",
    description:
      "Ship AI products faster with a framework built to eliminate boilerplate code and standardize integrating model providers.",
  },
  {
    title: "Iterate on ideas faster.",
    description:
      "Stay in the flow by managing feature flags and preview comments from within the Vercel Toolbar on preview URLs.",
  },
  {
    title: "Deploy to AI-ready infra.",
    description:
      "Vercel's industry leading managed infrastructure lets you launch performant AI projects at scale instantly.",
  },
];

const sdkFeatures = [
  {
    title: "AI SDK Core",
    description:
      "A unified API for generating text, structured objects, embeddings, and tool calls with LLMs.",
  },
  {
    title: "AI SDK UI",
    description:
      "A set of framework-agnostic hooks for quickly building chat, completion, and assistant frontends.",
  },
  {
    title: "AI SDK RSC",
    description:
      "A library to stream data and generative UI components with React Server Components (RSC).",
  },
];

export function AISection() {
  return (
    <section className="bg-black text-white">
      <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
        <Container size="xl">
          {/* Header - full width SOLID cell to hide guides behind text */}
          <Grid columns={3} rows={1}>
            <GridCross column={1} row={1} size={24} position="top-left" />

            <GridCell
              column="1/4"
              row={1}
              solid
              className="py-12 text-center bg-black"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white text-balance">
                The future of AI frontends is on Vercel.
              </h2>
              <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                Vercel provides the tools and infrastructure to build and deploy
                robust, secure, and performant AI applications quickly.
              </p>
            </GridCell>

            <GridCross column={3} row={1} size={24} position="bottom-right" />
          </Grid>
        </Container>

        <Container size="xl">
          {/* AI Features grid - 3 columns */}
          <Grid columns={3} rows={2}>
            <GridCross column={1} row={1} size={24} position="top-left" />

            {aiFeatures.map((feature, index) => (
              <GridCell
                key={feature.title}
                column={index + 1}
                row="1/3"
                className="p-8 flex flex-col"
              >
                <div className="h-40 rounded-lg bg-zinc-900 border border-white/10 mb-6 flex items-center justify-center overflow-hidden relative">
                  <AIVisual type={index} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <button className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </GridCell>
            ))}

            <GridCross column={3} row={2} size={24} position="bottom-right" />
          </Grid>
        </Container>

        <Container size="xl">
          {/* SDK section */}
          <Grid columns={3} rows={2}>
            <GridCross column={1} row={1} size={24} position="top-left" />

            <GridCell column="1/4" row={1} solid className="p-8 bg-black">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white text-balance max-w-4xl">
                From the creators of Next.js, the Vercel AI SDK gives you the
                tools you need to build AI-powered products.
              </h3>
            </GridCell>

            {sdkFeatures.map((feature, index) => (
              <GridCell
                key={feature.title}
                column={index + 1}
                row={2}
                className="p-8 group hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">{feature.title}</h4>
                  <ArrowRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </GridCell>
            ))}

            <GridCross column={3} row={2} size={24} position="bottom-right" />
          </Grid>
        </Container>
      </GridSystem>
    </section>
  );
}

function AIVisual({ type }: { type: number }) {
  if (type === 0) {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full p-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect
              x={10}
              y={10 + i * 22}
              width={16}
              height={16}
              rx={4}
              fill="rgba(255,255,255,0.2)"
            />
            <path
              d={`M 30 ${18 + i * 22} Q 80 ${18 + i * 22} 100 60`}
              stroke={`hsl(${i * 60}, 70%, 60%)`}
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
          </g>
        ))}
        <circle cx={100} cy={60} r={20} fill="white" />
        <path d="M100 45 L115 75 L85 75 Z" fill="black" />
        {[0, 1, 2].map((i) => (
          <rect
            key={`out-${i}`}
            x={160}
            y={30 + i * 30}
            width={30}
            height={20}
            rx={4}
            fill="rgba(255,255,255,0.2)"
          />
        ))}
      </svg>
    );
  }

  if (type === 1) {
    return (
      <div className="w-full h-full p-4 flex flex-col gap-2">
        <div className="bg-zinc-800 rounded p-2 text-xs text-gray-400 flex items-center gap-2">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search...
        </div>
        <div className="bg-zinc-800 rounded p-2 text-xs text-gray-400">
          monitoring-query-variant
          <span className="ml-2 px-1.5 py-0.5 bg-cyan-600 text-white rounded text-[10px]">
            Query
          </span>
        </div>
        <div className="bg-zinc-800 rounded p-2 text-xs text-gray-400 flex items-center justify-between">
          enable-dashboard-recents
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <ellipse
        cx={100}
        cy={60}
        rx={80}
        ry={50}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        fill="none"
      />
      <ellipse
        cx={100}
        cy={60}
        rx={80}
        ry={30}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        fill="none"
      />
      <ellipse
        cx={100}
        cy={60}
        rx={80}
        ry={10}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        fill="none"
      />
      <line
        x1={20}
        y1={60}
        x2={180}
        y2={60}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      <line
        x1={100}
        y1={10}
        x2={100}
        y2={110}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      {[
        [60, 40],
        [140, 35],
        [80, 80],
        [130, 75],
        [100, 25],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={3}
          fill={i % 2 ? "#22D3EE" : "#A855F7"}
          opacity={0.8}
        />
      ))}
    </svg>
  );
}
