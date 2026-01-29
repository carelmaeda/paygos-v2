"use client"

import { BarChart3 } from "lucide-react"
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { metric: "Data Quality", score: 92, fill: "#14b8a6" },
  { metric: "Execution", score: 85, fill: "#10b981" },
  { metric: "Returns", score: 88, fill: "#0d9488" },
  { metric: "Budget", score: 90, fill: "#0f766e" },
  { metric: "ROI", score: 95, fill: "#115e59" },
]

const CHART_CONFIG = {
  score: {
    label: "Score",
  },
} satisfies ChartConfig

export function AnalyticsMetricsChart() {
  return (
    <div className="chart-container">
      <div className="mb-8 flex items-center justify-between text-xs font-black tracking-widest uppercase md:mb-12">
        <span>Dashboard Metrics Overview</span>
        <BarChart3 className="text-emerald-500" size={20} />
      </div>
      <ChartContainer
        id="analytics-metrics"
        config={CHART_CONFIG}
        className="h-[280px] w-full min-w-0 md:h-[400px]"
      >
        <RadialBarChart
          data={CHART_DATA}
          startAngle={90}
          endAngle={-270}
          innerRadius={30}
          outerRadius={140}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="score"
            cornerRadius={10}
            label={{
              position: "insideStart",
              fill: "#fff",
              fontSize: 14,
              fontWeight: 900,
              formatter: (value: number, entry: { payload?: { metric?: string } }) =>
                entry?.payload?.metric
                  ? `${entry.payload.metric}: ${value}%`
                  : `${value}%`,
            }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                formatter={(val, name, entry) => (
                  <div>
                    <div className="font-black text-teal-400">
                      {entry.payload.metric}
                    </div>
                    <div className="text-white">{val}% Score</div>
                  </div>
                )}
              />
            }
          />
        </RadialBarChart>
      </ChartContainer>
    </div>
  )
}
