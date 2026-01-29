"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useMediaQuery } from "@/hooks/use-media-query"

const CHART_DATA = [
  { banner: "Banner A", returns: 248 },
  { banner: "Banner B", returns: 214 },
  { banner: "Banner C", returns: 187 },
  { banner: "Banner D", returns: 156 },
  { banner: "Banner E", returns: 132 },
]

// Tailwind palette hex values
const CHART_CONFIG = {
  returns: { label: "Submitted Returns", color: "#129755" }, // sky-500
} satisfies ChartConfig

export function ReturnsTrendChart() {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className="chart-container">
      <div className="mb-6 flex items-center justify-between text-xs font-black uppercase sm:mb-8">
        <small className="text-green-600">
          Top 5 Banners Submitted Returns
        </small>
        <TrendingUp className="text-green-600" size={20} />
      </div>

      <ChartContainer
        id="returns-top-banners"
        config={CHART_CONFIG}
        className="h-[240px] w-full sm:h-[280px] md:h-[400px]"
      >
        <BarChart
          data={CHART_DATA}
          layout="vertical"
          margin={{ left: isMobile ? 0 : 0, right: isMobile ? 4 : 6 }}
          barGap={isMobile ? 4 : 8}
          barCategoryGap={isMobile ? 12 : 20}
        >
          <CartesianGrid horizontal={false} stroke="#f8fafc" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="banner"
            type="category"
            tickLine={false}
            tickMargin={isMobile ? 8 : 15}
            axisLine={false}
            width={isMobile ? 80 : 90}
            tick={{
              fill: "#475569",
              fontSize: isMobile ? 11 : 13,
              fontWeight: 500,
            }}
          />

          <ChartTooltip
            cursor={{ fill: "rgba(2,6,23,0.04)" }}
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                formatter={(val) => (
                  <span className="font-black text-green-400">
                    {Number(val).toLocaleString()} returns
                  </span>
                )}
              />
            }
          />

          <Bar
            dataKey="returns"
            fill={CHART_CONFIG.returns.color}
            radius={[0, 6, 6, 0]}
            barSize={isMobile ? 32 : 40}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
