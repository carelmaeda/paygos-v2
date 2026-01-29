"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart, Cell } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useMediaQuery } from "@/hooks/use-media-query"

const CHART_DATA = [
  { region: "North", contracts: 320 },
  { region: "South", contracts: 250 },
  { region: "East", contracts: 210 },
  { region: "West", contracts: 180 },
  { region: "Downtown", contracts: 140 },
]

const CHART_CONFIG = {
  contracts: {
    label: "Active Contracts",
    // shadcn ChartContainer wants a color per key; slices use per-item colors below
    color: "#0ea5e9", // sky-500
  },
} satisfies ChartConfig

// Tailwind palette hex values (no custom colors)
const SLICE_COLORS = [
  "#14b8a6", // teal-500
  "#06b6d4", // cyan-500
  "#0ea5e9", // sky-500
  "#22c55e", // green-500
  "#a3e635", // lime-400
  "#f59e0b", // amber-500
  "#f97316", // orange-500
  "#8b5cf6", // violet-500
]

export function RebatesPerformanceChart() {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className="chart-container">
      <div className="mb-8 flex items-center justify-between text-xs font-black tracking-widest uppercase md:mb-12">
        <span>Top Regions per Number of Active Contracts</span>
        <TrendingUp className="text-sky-600" size={isMobile ? 16 : 20} />
      </div>

      <ChartContainer
        id="top-regions-active-contracts"
        config={CHART_CONFIG}
        className="h-[240px] w-full min-w-0 sm:h-[280px] md:h-[400px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={{ fill: "rgba(2,6,23,0.04)" }}
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                formatter={(val, _name, item) => {
                  const region = item?.payload?.region ?? "Region"
                  return (
                    <span className="font-black text-sky-600">
                      {region}: {Number(val).toLocaleString()}
                    </span>
                  )
                }}
              />
            }
          />

          <Pie
            data={CHART_DATA}
            dataKey="contracts"
            nameKey="region"
            cx="50%"
            cy="50%"
            // ✅ donut
            innerRadius={isMobile ? "52%" : "58%"}
            outerRadius={isMobile ? "78%" : "82%"}
            paddingAngle={2}
            strokeWidth={0}
          >
            {CHART_DATA.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={SLICE_COLORS[index % SLICE_COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  )
}
