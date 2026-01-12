"use client"

import { PieChart } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { reason: "Display", amount: 1800 },
  { reason: "Incentive", amount: 1200 },
  { reason: "Credit", amount: 600 },
]

const CHART_CONFIG = {
  amount: {
    label: "Payment Amount",
    color: "#10b981",
  },
} satisfies ChartConfig

export function PaymentDistributionChart() {
  return (
    <div className="rounded-[4rem] border border-slate-50 bg-white p-12 shadow-xl">
      <div className="mb-12 flex items-center justify-between text-xs font-black tracking-widest uppercase">
        <span>Payment Distribution</span>
        <PieChart className="text-emerald-500" size={20} />
      </div>
      <ChartContainer config={CHART_CONFIG} className="h-[400px] w-full">
        <BarChart
          data={CHART_DATA}
          layout="vertical"
          margin={{ left: 30 }}
        >
          <CartesianGrid horizontal={false} stroke="#f8fafc" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="reason"
            type="category"
            tickLine={false}
            tickMargin={15}
            axisLine={false}
            tick={{ fill: "#475569", fontSize: 13, fontWeight: 900 }}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="rounded-2xl bg-slate-950 text-white"
                formatter={(val) => (
                  <span className="font-black text-emerald-400">
                    ${Number(val).toLocaleString()}
                  </span>
                )}
              />
            }
          />
          <Bar
            dataKey="amount"
            fill="#10b981"
            radius={[0, 12, 12, 0]}
            barSize={40}
            activeBar={{ fill: "#34d399" }}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
