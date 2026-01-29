"use client"

import { MapPin } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useMediaQuery } from "@/hooks/use-media-query"

const CHART_DATA = [
  { territory: "North", visited: 120, lapsed: 15 },
  { territory: "South", visited: 100, lapsed: 5 },
  { territory: "East", visited: 110, lapsed: 8 },
  { territory: "West", visited: 90, lapsed: 2 },
  { territory: "Downtown", visited: 105, lapsed: 7 },
]

const CHART_CONFIG = {
  visited: { label: "Locations Visited", color: "#0891b2" },
  lapsed: { label: "Locations Lapsed", color: "#cbd5e1" },
} satisfies ChartConfig

export function FsaCoverageChart() {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className="chart-container">
      <div className="mb-6 flex items-center justify-between text-xs font-black uppercase sm:mb-8">
        <small className="text-cyan-600">Locations Visited vs Lapsed</small>
        <MapPin className="text-cyan-600" size={isMobile ? 16 : 20} />
      </div>

      <ChartContainer
        id="fsa-coverage"
        config={CHART_CONFIG}
        className="h-[240px] w-full sm:h-[280px] md:h-[400px]"
      >
        <BarChart
          data={CHART_DATA}
          layout="vertical"
          margin={{ left: isMobile ? 0 : 30, right: isMobile ? 4 : 12 }}
          barGap={isMobile ? 4 : 6}
          barCategoryGap={isMobile ? 12 : 20}
        >
          <CartesianGrid horizontal={false} stroke="#f8fafc" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="territory"
            type="category"
            tickLine={false}
            tickMargin={isMobile ? 8 : 15}
            axisLine={false}
            width={isMobile ? 48 : 64}
            tick={{
              fill: "#475569",
              fontSize: isMobile ? 11 : 13,
              fontWeight: 700,
            }}
          />

          <ChartTooltip
            cursor={{ fill: "rgba(2,6,23,0.04)" }}
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                formatter={(val, name) => (
                  <span className="font-black text-cyan-400">
                    {val} {name === "visited" ? "Visited" : "Lapsed"}
                  </span>
                )}
              />
            }
          />

          <Bar
            dataKey="visited"
            fill={CHART_CONFIG.visited.color}
            radius={[0, 6, 6, 0]}
            barSize={isMobile ? 16 : 24}
          />
          <Bar
            dataKey="lapsed"
            fill={CHART_CONFIG.lapsed.color}
            radius={[0, 6, 6, 0]}
            barSize={isMobile ? 16 : 24}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
