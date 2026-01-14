"use client"

import { Filter } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { stage: "Sent", count: 5000, percentage: 100 },
  { stage: "Opened", count: 1200, percentage: 24 },
  { stage: "Clicked", count: 480, percentage: 9.6 },
  { stage: "Engaged", count: 240, percentage: 4.8 },
  { stage: "Converted", count: 120, percentage: 2.4 },
]

const CHART_CONFIG = {
  count: {
    label: "Count",
    color: "#14b8a6",
  },
} satisfies ChartConfig

export function MarketingEngagementChart() {
  return (
    <div className="rounded-[4rem] border border-slate-50 bg-white p-12 shadow-xl">
      <div className="mb-12 flex items-center justify-between text-xs font-black tracking-widest uppercase">
        <span>Campaign Engagement Funnel</span>
        <Filter className="text-emerald-500" size={20} />
      </div>
      <ChartContainer id="marketing-engagement" config={CHART_CONFIG} className="h-[400px] w-full">
        <BarChart
          data={CHART_DATA}
          layout="vertical"
          margin={{ left: 30 }}
        >
          <CartesianGrid horizontal={false} stroke="#f8fafc" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="stage"
            type="category"
            tickLine={false}
            tickMargin={15}
            axisLine={false}
            tick={{ fill: "#475569", fontSize: 13, fontWeight: 900 }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="rounded-2xl bg-slate-950 text-white"
                formatter={(val, name, entry) => (
                  <div>
                    <div className="font-black text-teal-400">
                      {entry.payload.count.toLocaleString()} recipients
                    </div>
                    <div className="text-sm text-slate-300">
                      {entry.payload.percentage}% of sent
                    </div>
                  </div>
                )}
              />
            }
          />
          <Bar
            dataKey="count"
            fill="#14b8a6"
            radius={[0, 12, 12, 0]}
            barSize={50}
            activeBar={{ fill: "#10b981" }}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
