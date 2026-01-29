"use client"

import { ShoppingCart } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useMediaQuery } from "@/hooks/use-media-query"

const CHART_DATA = [
  { month: "January", y2025: 186, y2026: 210 },
  { month: "February", y2025: 205, y2026: 232 },
  { month: "March", y2025: 198, y2026: 255 },
  { month: "April", y2025: 214, y2026: 260 },
  { month: "May", y2025: 226, y2026: 302 },
  { month: "June", y2025: 219, y2026: 300 },
  { month: "July", y2025: 233, y2026: 310 },
]

const CHART_CONFIG = {
  y2025: { label: "2025", color: "#14b8a6" }, // teal-500
  y2026: { label: "2026", color: "#0ea5e9" }, // sky-500
} satisfies ChartConfig

export function OrderingVolumeChart() {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className="chart-container">
      <div className="mb-6 flex items-center justify-between text-xs font-black uppercase sm:mb-8">
        <small className="text-cyan-600">Sales per Month</small>
        <ShoppingCart className="text-cyan-600" size={isMobile ? 16 : 20} />
      </div>

      <ChartContainer
        id="ordering-sales"
        config={CHART_CONFIG}
        className="h-[240px] w-full sm:h-[280px] md:h-[400px]"
      >
        <AreaChart
          accessibilityLayer
          data={CHART_DATA}
          margin={{
            left: isMobile ? 0 : 12,
            right: isMobile ? 4 : 12,
            top: 12,
          }}
        >
          <CartesianGrid vertical={false} stroke="#f8fafc" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={isMobile ? 6 : 8}
            tick={{
              fill: "#475569",
              fontSize: isMobile ? 11 : 13,
              fontWeight: 700,
            }}
            tickFormatter={(value) => value.slice(0, 3)}
            interval={isMobile ? 1 : 0}
          />

          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                indicator="line"
                formatter={(val, name) => (
                  <span className="font-black text-cyan-400">
                    {name === "y2025" ? "2025" : "2026"}:{" "}
                    {Number(val).toLocaleString()}
                  </span>
                )}
              />
            }
          />

          <Area
            dataKey="y2025"
            type="natural"
            fill="var(--color-y2025)"
            fillOpacity={0.35}
            stroke="var(--color-y2025)"
            strokeWidth={2.5}
          />
          <Area
            dataKey="y2026"
            type="natural"
            fill="var(--color-y2026)"
            fillOpacity={0.35}
            stroke="var(--color-y2026)"
            strokeWidth={2.5}
          />

          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
