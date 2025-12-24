"use client";

import { GridSystem } from "@/components/grid/grid-system";
import { Grid } from "@/components/grid/grid";
import { GridCell } from "@/components/grid/grid-cell";
import { GridCross } from "@/components/grid/grid-cross";
import { Container } from "@/components/ui/container";
import { useState, useEffect } from "react";

export default function DemoPage() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const getBreakpoint = () => {
    if (viewportWidth >= 1024) return "lg (≥1024px)";
    if (viewportWidth >= 768) return "md (≥768px)";
    if (viewportWidth >= 640) return "sm (≥640px)";
    return "xs (<640px)";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Container size="xl" className="py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold">Grid System Demo</h1>
          <p className="text-gray-400">
            Comprehensive showcase of the grid system components and features
          </p>
          {viewportWidth > 0 && (
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
              <span className="text-sm text-gray-400">Current viewport:</span>
              <span className="font-mono text-sm font-medium text-white">
                {viewportWidth}px - {getBreakpoint()}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-24">
          {/* Section 1: Basic Grid */}
          <DemoSection
            title="1. Basic Grid (3×3)"
            description="Simple grid with numbered cells"
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={3} rows={3}>
    <GridCell column={1} row={1}>1</GridCell>
    <GridCell column={2} row={1}>2</GridCell>
    <GridCell column={3} row={1}>3</GridCell>
    <GridCell column={1} row={2}>4</GridCell>
    <GridCell column={2} row={2}>5</GridCell>
    <GridCell column={3} row={2}>6</GridCell>
    <GridCell column={1} row={3}>7</GridCell>
    <GridCell column={2} row={3}>8</GridCell>
    <GridCell column={3} row={3}>9</GridCell>
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={3} rows={3}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => (
                  <GridCell
                    key={n}
                    column={(i % 3) + 1}
                    row={Math.floor(i / 3) + 1}
                  >
                    <div className="flex h-24 items-center justify-center text-2xl font-bold text-gray-400">
                      {n}
                    </div>
                  </GridCell>
                ))}
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 2: 12-Column Grid */}
          <DemoSection
            title="2. 12-Column Grid (Like HeroSection)"
            description="Wider grid with preserve-aspect-ratio height"
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={12} rows={4} height="preserve-aspect-ratio">
    <GridCross column={1} row={1} size={24} position="top-left" />
    <GridCross column={12} row={4} size={24} position="bottom-right" />
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={12} rows={4} height="preserve-aspect-ratio">
                <GridCross column={1} row={1} size={24} position="top-left" />
                <GridCross
                  column={12}
                  row={4}
                  size={24}
                  position="bottom-right"
                />
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 3: Responsive Grid */}
          <DemoSection
            title="3. Responsive Grid"
            description="Columns change based on viewport: sm=1, md=2, lg=3"
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={{ sm: 1, md: 2, lg: 3 }} rows={{ sm: 6, md: 3, lg: 2 }}>
    <GridCell>1</GridCell>
    <GridCell>2</GridCell>
    <GridCell>3</GridCell>
    <GridCell>4</GridCell>
    <GridCell>5</GridCell>
    <GridCell>6</GridCell>
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid
                columns={{ sm: 1, md: 2, lg: 3 }}
                rows={{ sm: 6, md: 3, lg: 2 }}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <GridCell key={n}>
                    <div className="flex h-24 items-center justify-center text-2xl font-bold text-gray-400">
                      {n}
                    </div>
                  </GridCell>
                ))}
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 4: Solid Cells */}
          <DemoSection
            title="4. Solid Cells"
            description="Solid cells occlude underlying grid guides with higher z-index"
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={3} rows={3}>
    <GridCell column={1} row={1} solid className="bg-blue-600/20">
      Solid Cell
    </GridCell>
    <GridCell column={2} row={2} className="bg-transparent">
      Normal Cell
    </GridCell>
    <GridCell column={3} row={3} solid className="bg-green-600/20">
      Solid Cell
    </GridCell>
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={3} rows={3}>
                <GridCell column={1} row={1} solid className="bg-blue-600/20">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Solid Cell
                  </div>
                </GridCell>
                <GridCell column={2} row={2} className="bg-transparent">
                  <div className="flex h-24 items-center justify-center text-sm font-medium text-gray-500">
                    Normal Cell
                  </div>
                </GridCell>
                <GridCell column={3} row={3} solid className="bg-green-600/20">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Solid Cell
                  </div>
                </GridCell>
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 5: Spanning Cells */}
          <DemoSection
            title="5. Spanning Cells"
            description="Cells can span multiple columns and rows. Use 'solid' prop + opaque backgrounds to hide guides inside spanning cells."
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={3} rows={3}>
    <GridCell column="1/3" row={1} solid className="bg-purple-600 text-white">
      Spans 2 columns
    </GridCell>
    <GridCell column={3} row="1/3" solid className="bg-pink-600 text-white">
      Spans 2 rows
    </GridCell>
    <GridCell column="1/4" row={3} solid className="bg-yellow-700 text-white">
      Spans all columns
    </GridCell>
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={3} rows={3}>
                <GridCell
                  column="1/3"
                  row={1}
                  solid
                  className="bg-purple-600 text-white"
                >
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Spans 2 columns
                  </div>
                </GridCell>
                <GridCell
                  column={3}
                  row="1/3"
                  solid
                  className="bg-pink-600 text-white"
                >
                  <div className="flex h-full items-center justify-center text-sm font-medium">
                    Spans 2 rows
                  </div>
                </GridCell>
                <GridCell
                  column="1/4"
                  row={3}
                  solid
                  className="bg-yellow-700 text-white"
                >
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Spans all columns
                  </div>
                </GridCell>
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 6: GridCross Positions */}
          <DemoSection
            title="6. GridCross Positioning"
            description="All 5 position options: top-left, top-right, bottom-left, bottom-right, center"
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={3} rows={3}>
    <GridCross column={1} row={1} size={24} position="top-left" />
    <GridCross column={3} row={1} size={24} position="top-right" />
    <GridCross column={2} row={2} size={32} position="center" />
    <GridCross column={1} row={3} size={24} position="bottom-left" />
    <GridCross column={3} row={3} size={24} position="bottom-right" />
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={3} rows={3} height="preserve-aspect-ratio">
                <GridCross column={1} row={1} size={24} position="top-left" />
                <GridCross column={3} row={1} size={24} position="top-right" />
                <GridCross column={2} row={2} size={32} position="center" />
                <GridCross
                  column={1}
                  row={3}
                  size={24}
                  position="bottom-left"
                />
                <GridCross
                  column={3}
                  row={3}
                  size={24}
                  position="bottom-right"
                />
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 7: Hide Row Guides */}
          <DemoSection
            title="7. Hide Row Guides"
            description='Only vertical guides visible with hideGuides="row"'
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={12} rows={3} hideGuides="row" height="preserve-aspect-ratio" />
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid
                columns={12}
                rows={3}
                hideGuides="row"
                height="preserve-aspect-ratio"
              />
            </GridSystem>
          </DemoSection>

          {/* Section 8: Hide Column Guides */}
          <DemoSection
            title="8. Hide Column Guides"
            description='Only horizontal guides visible with hideGuides="column"'
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={12} rows={3} hideGuides="column" height="preserve-aspect-ratio" />
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid
                columns={12}
                rows={3}
                hideGuides="column"
                height="preserve-aspect-ratio"
              />
            </GridSystem>
          </DemoSection>

          {/* Section 9: Hide All Guides */}
          <DemoSection
            title="9. Hide All Guides"
            description='No guides visible with hideGuides="all"'
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={3} rows={3} hideGuides="all">
    <GridCell column={1} row={1} solid className="bg-orange-600/20">Content</GridCell>
    <GridCell column={2} row={2} solid className="bg-orange-600/20">Content</GridCell>
    <GridCell column={3} row={3} solid className="bg-orange-600/20">Content</GridCell>
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={3} rows={3} hideGuides="all">
                <GridCell column={1} row={1} solid className="bg-orange-600/20">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Content
                  </div>
                </GridCell>
                <GridCell column={2} row={2} solid className="bg-orange-600/20">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Content
                  </div>
                </GridCell>
                <GridCell column={3} row={3} solid className="bg-orange-600/20">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Content
                  </div>
                </GridCell>
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 10: Overlapping Cells */}
          <DemoSection
            title="10. Overlapping Cells"
            description="Cells can overlap - z-index determines stacking order"
            code={`<GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
  <Grid columns={12} rows={3}>
    <GridCell column="1/3" row="1/3" solid className="bg-red-600/30">
      First
    </GridCell>
    <GridCell column="2/4" row="2/4" solid className="bg-blue-600/30">
      Second (overlaps)
    </GridCell>
    <GridCell column="3/10" row="2/4" className="bg-green-600/10">
      Third (behind solid)
    </GridCell>
  </Grid>
</GridSystem>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={12} rows={3}>
                <GridCell
                  column="1/3"
                  row="1/3"
                  solid
                  className="bg-red-600/30"
                >
                  <div className="flex h-full items-center justify-center text-sm font-medium">
                    First
                  </div>
                </GridCell>
                <GridCell
                  column="2/4"
                  row="2/4"
                  solid
                  className="bg-blue-600/30"
                >
                  <div className="flex h-full items-center justify-center text-sm font-medium">
                    Second (overlaps)
                  </div>
                </GridCell>
                <GridCell column="3/10" row="2/4" className="bg-green-600/10">
                  <div className="flex h-full items-center justify-center text-sm font-medium text-gray-500">
                    Third (behind solid)
                  </div>
                </GridCell>
              </Grid>
            </GridSystem>
          </DemoSection>

          {/* Section 11: Mobile Guides (NEW) */}
          <DemoSection
            title="11. Mobile Grid Guides"
            description="Grid guides visible on mobile with showGuidesOnMobile prop (resize to < 768px to see)"
            code={`<GridSystem
  guideWidth={1}
  guideColor="var(--grid-guide-color)"
  showGuidesOnMobile={true}
>
  <Grid columns={3} rows={3}>
    <GridCell column={1} row={1} solid className="bg-blue-600/20">
      Mobile guides enabled!
    </GridCell>
    <GridCell column={2} row={2}>2</GridCell>
    <GridCell column={3} row={3}>3</GridCell>
  </Grid>
</GridSystem>`}
          >
            <GridSystem
              guideWidth={1}
              guideColor="var(--grid-guide-color)"
              showGuidesOnMobile={true}
            >
              <Grid columns={3} rows={3}>
                <GridCell column={1} row={1} solid className="bg-blue-600/20">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Mobile guides enabled!
                  </div>
                </GridCell>
                <GridCell column={2} row={2}>
                  <div className="flex h-24 items-center justify-center text-sm font-medium text-gray-400">
                    2
                  </div>
                </GridCell>
                <GridCell column={3} row={3}>
                  <div className="flex h-24 items-center justify-center text-sm font-medium text-gray-400">
                    3
                  </div>
                </GridCell>
              </Grid>
            </GridSystem>
            <p className="mt-4 text-sm text-gray-500">
              💡 Tip: Resize your browser to &lt; 768px to see grid guides on
              mobile
            </p>
          </DemoSection>

          {/* Section 12: Solid Cells - Transparent vs Opaque Backgrounds */}
          <DemoSection
            title="12. Solid Cells: Background Opacity Matters!"
            description="⚠️ IMPORTANT: When using 'solid' prop on spanning cells, use OPAQUE backgrounds (bg-purple-600) NOT transparent (bg-purple-600/20). Transparent backgrounds don't fully occlude the grid guides underneath."
            code={`// ❌ WRONG - Transparent bg shows guides through
<GridCell column="1/4" row={1} solid className="bg-purple-600/20">
  You'll see vertical lines! ❌
</GridCell>

// ✅ GOOD - Opaque background hides guides
<GridCell column="1/4" row={2} solid className="bg-purple-600 text-white">
  Clean, no guides! ✅
</GridCell>

// ✨ BEST - Layered: Transparent color + No guides
<GridCell column="1/4" row={3} solid>
  <div className="h-full bg-emerald-600/20">
    Transparent color, no guides! ✨
  </div>
</GridCell>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={3} rows={3} gap={16}>
                {/* Row 1: WRONG - Transparent background */}
                <GridCell
                  column="1/4"
                  row={1}
                  solid
                  className="bg-purple-600/20"
                >
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    ❌ Transparent (bg-purple-600/20) - Guides visible through
                    cell
                  </div>
                </GridCell>

                {/* Row 2: CORRECT - Opaque background */}
                <GridCell
                  column="1/4"
                  row={2}
                  solid
                  className="bg-purple-600 text-white"
                >
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    ✅ Opaque (bg-purple-600) - Clean, no guides visible!
                  </div>
                </GridCell>

                {/* Row 3: LAYERED APPROACH - Transparent color WITHOUT guides */}
                <GridCell column="1/4" row={3} solid>
                  <div className="h-24 bg-emerald-600/20 flex items-center justify-center text-sm font-medium">
                    ✨ Transparent (bg-emerald-600/20) on INNER div - No guides
                    visible!
                  </div>
                </GridCell>
              </Grid>
            </GridSystem>
            <p className="mt-4 text-sm text-yellow-500 bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
              <strong>Key Takeaway:</strong> Use{" "}
              <code className="bg-yellow-500/20 px-1 rounded">solid</code> prop
              on GridCell for opaque background. For transparent colors, use{" "}
              <strong>layered approach</strong>: apply transparent background to
              inner div.
            </p>
            <div className="mt-4 p-4 bg-blue-500/10 rounded border border-blue-500/20">
              <p className="text-sm font-medium mb-2 text-blue-400">
                💡 Pro Tip: Three Approaches
              </p>
              <pre className="text-xs bg-black/50 p-3 rounded overflow-x-auto text-gray-300">
                {`// ❌ WRONG - Guides show through
<GridCell solid className="bg-purple-600/20">...</GridCell>

// ✅ GOOD - Opaque, no guides
<GridCell solid className="bg-purple-600 text-white">...</GridCell>

// ✨ BEST - Transparent color + No guides (layered)
<GridCell solid>
  <div className="h-full bg-purple-600/20">...</div>
</GridCell>`}
              </pre>
            </div>
          </DemoSection>

          {/* Section 13: Real-World Example - User's Specific Use Case */}
          <DemoSection
            title="13. Real-World Example: Your Use Case"
            description="Two rows: First row has 3 columns with visible vertical guides between them. Second row has a full-width spanning cell with NO vertical guides inside (using layered approach for transparent color)."
            code={`<Grid columns={3} rows={2} gap={8}>
  {/* Row 1: 3 separate columns (guides visible between) */}
  <GridCell column={1} row={1} solid className="bg-gray-800">
    Column 1
  </GridCell>
  <GridCell column={2} row={1} solid className="bg-gray-800">
    Column 2
  </GridCell>
  <GridCell column={3} row={1} solid className="bg-gray-800">
    Column 3
  </GridCell>

  {/* Row 2: Full-width spanning cell with transparent color (layered) */}
  <GridCell column="1/4" row={2} solid>
    <div className="h-full bg-blue-600/20 p-6">
      Full width content - no vertical guides inside!
    </div>
  </GridCell>
</Grid>`}
          >
            <GridSystem guideWidth={1} guideColor="var(--grid-guide-color)">
              <Grid columns={3} rows={2} gap={8}>
                {/* Row 1: 3 separate columns (guides visible between them) */}
                <GridCell column={1} row={1} solid className="bg-gray-800">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Column 1
                  </div>
                </GridCell>
                <GridCell column={2} row={1} solid className="bg-gray-800">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Column 2
                  </div>
                </GridCell>
                <GridCell column={3} row={1} solid className="bg-gray-800">
                  <div className="flex h-24 items-center justify-center text-sm font-medium">
                    Column 3
                  </div>
                </GridCell>

                {/* Row 2: Full-width spanning cell with transparent color (layered approach) */}
                <GridCell column="1/4" row={2} solid>
                  <div className="h-full bg-blue-600/20 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm font-medium">
                        ✅ Full width spanning cell
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Transparent blue background (bg-blue-600/20) • No
                        vertical guides inside
                      </p>
                    </div>
                  </div>
                </GridCell>
              </Grid>
            </GridSystem>
            <p className="mt-4 text-sm text-green-500 bg-green-500/10 p-3 rounded border border-green-500/20">
              <strong>✅ This is the pattern for your use case:</strong> Row 1
              shows 3 distinct columns with guides between them. Row 2 spans the
              full width with a transparent background and NO guides inside
              (using the layered approach).
            </p>
          </DemoSection>
        </div>
      </Container>
    </div>
  );
}

interface DemoSectionProps {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

function DemoSection({ title, description, code, children }: DemoSectionProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        {children}
      </div>

      <div className="space-y-2">
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          {showCode ? "Hide" : "Show"} code
        </button>

        {showCode && (
          <div className="relative rounded-lg border border-white/10 bg-black p-4">
            <button
              onClick={copyToClipboard}
              className="absolute right-2 top-2 rounded bg-white/10 px-3 py-1 text-xs hover:bg-white/20 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="overflow-x-auto text-xs text-gray-300">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
