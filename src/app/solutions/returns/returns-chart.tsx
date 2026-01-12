"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", transactions: 8500 },
  { month: "Feb", transactions: 6200 },
  { month: "Apr", transactions: 15000 },
  { month: "May", transactions: 11000 },
]

const chartConfig = {
  transactions: {
    label: "Returns",
    color: "#14b8a6",
  },
} satisfies ChartConfig

export function ReturnsChart() {
  return (
    <div className="rounded-[3.5rem] border border-slate-800 bg-slate-950 p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:p-12">
      <div className="mb-10 flex items-center justify-between">
        <h4 className="text-xs font-black tracking-widest text-white uppercase">
          Returns / Monthly
        </h4>
        <span className="font-mono text-xs text-teal-400">
          Peak: 15.0K
        </span>
      </div>
      <ChartContainer config={chartConfig} className="h-[320px] w-full">
        <BarChart data={chartData}>
          <CartesianGrid
            vertical={false}
            stroke="#1e293b"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={12}
            axisLine={false}
            tick={{ fill: "#64748b", fontSize: 12, fontWeight: 800 }}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="rounded-xl border-teal-500/50 bg-slate-900 text-white"
                formatter={(value) => (
                  <span className="font-black text-teal-400">
                    {Number(value).toLocaleString()} UNITS
                  </span>
                )}
              />
            }
          />
          <Bar
            dataKey="transactions"
            fill="#14b8a6"
            radius={[10, 10, 0, 0]}
            activeBar={{ fill: "#2dd4bf", fillOpacity: 1 }}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
