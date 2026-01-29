"use client"

import { PieChart as PaymentsIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useMediaQuery } from "@/hooks/use-media-query"

// amounts in dollars
const CHART_DATA = [
  { month: "Jan", y2025: 219_800, y2026: 265_000 },
  { month: "Feb", y2025: 145_170, y2026: 110_000 },
  { month: "Mar", y2025: 49_840, y2026: 90_000 },
  { month: "Apr", y2025: 103_230, y2026: 60_000 },
]

const CHART_CONFIG = {
  y2025: { label: "2025", color: "#14b8a6" }, // teal-500
  y2026: { label: "2026", color: "#2563eb" }, // blue-600
} satisfies ChartConfig

function formatK(value: number) {
  if (!value) return ""
  return `${(value / 1000).toFixed(2)}K`
}

export function PaymentDistributionChart() {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className="chart-container">
      <div className="mb-6 flex items-center justify-between text-xs font-bold uppercase sm:mb-8">
        <span>Payments per Month</span>
        <PaymentsIcon className="text-emerald-500" size={isMobile ? 16 : 20} />
      </div>

      {/* Legend (matches screenshot style) */}
      <div className="mb-4 flex items-center gap-3 text-xs font-bold">
        <span className="text-slate-700">Year</span>
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: CHART_CONFIG.y2025.color }}
          />
          <span className="text-slate-700">2025</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: CHART_CONFIG.y2026.color }}
          />
          <span className="text-slate-700">2026</span>
        </div>
      </div>

      <ChartContainer
        id="payments-per-month"
        config={CHART_CONFIG}
        className="h-[240px] w-full min-w-0 sm:h-[280px] md:h-[400px]"
      >
        <BarChart
          data={CHART_DATA}
          margin={{
            left: isMobile ? 6 : 12,
            right: isMobile ? 6 : 12,
            top: isMobile ? 10 : 14,
            bottom: 0,
          }}
          barCategoryGap={isMobile ? 12 : 18}
          barGap={isMobile ? 3 : 6}
        >
          <CartesianGrid
            vertical={false}
            stroke="#e2e8f0"
            strokeDasharray="2 6"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{
              fill: "#475569",
              fontSize: isMobile ? 11 : 13,
              fontWeight: 900,
            }}
          />

          <YAxis
            width={isMobile ? 44 : 52}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tick={{
              fill: "#475569",
              fontSize: isMobile ? 11 : 13,
              fontWeight: 900,
            }}
            domain={[0, 400_000]}
            ticks={[0, 200_000, 400_000]}
            tickFormatter={(v) => `${(v / 1_000_000).toFixed(1)}M`}
          />

          <ChartTooltip
            cursor={{ fill: "rgba(2,6,23,0.04)" }}
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                formatter={(val, name) => {
                  const label = name === "y2025" ? "2025" : "2026"
                  return (
                    <span className="font-bold text-emerald-400">
                      {label}: ${Number(val).toLocaleString()}
                    </span>
                  )
                }}
              />
            }
          />

          <Bar
            dataKey="y2025"
            fill={CHART_CONFIG.y2025.color}
            radius={[6, 6, 0, 0]}
            barSize={isMobile ? 10 : 14}
          >
            <LabelList
              dataKey="y2025"
              position="top"
              offset={6}
              formatter={(v: number) => formatK(v)}
              style={{
                fill: "#0f172a",
                fontWeight: 900,
                fontSize: isMobile ? 10 : 12,
              }}
            />
          </Bar>

          <Bar
            dataKey="y2026"
            fill={CHART_CONFIG.y2026.color}
            radius={[6, 6, 0, 0]}
            barSize={isMobile ? 10 : 14}
          >
            <LabelList
              dataKey="y2026"
              position="top"
              offset={6}
              formatter={(v: number) => formatK(v)}
              style={{
                fill: "#0f172a",
                fontWeight: 900,
                fontSize: isMobile ? 10 : 12,
              }}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  )
}
