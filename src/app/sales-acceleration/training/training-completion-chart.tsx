"use client"

import { GraduationCap } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const CHART_DATA = [
  { module: "Product Basics", notStarted: 45, inProgress: 28, completed: 127 },
  {
    module: "Safety & Compliance",
    notStarted: 38,
    inProgress: 35,
    completed: 127,
  },
  {
    module: "Sales Techniques",
    notStarted: 52,
    inProgress: 25,
    completed: 123,
  },
  {
    module: "Customer Service",
    notStarted: 41,
    inProgress: 32,
    completed: 127,
  },
  {
    module: "Advanced Product",
    notStarted: 68,
    inProgress: 22,
    completed: 110,
  },
]

const CHART_CONFIG = {
  notStarted: {
    label: "Not Started",
    color: "#e2e8f0",
  },
  inProgress: {
    label: "In Progress",
    color: "#fbbf24",
  },
  completed: {
    label: "Completed",
    color: "#10b981",
  },
} satisfies ChartConfig

export function TrainingCompletionChart() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-50 bg-white p-6 shadow-xl md:rounded-[4rem] md:p-12">
      <div className="mb-8 flex items-center justify-between text-xs font-black tracking-widest uppercase md:mb-12">
        <span>Training Module Completion</span>
        <GraduationCap className="text-emerald-500" size={20} />
      </div>
      <ChartContainer
        id="training-completion"
        config={CHART_CONFIG}
        className="h-[280px] w-full min-w-0 md:h-[400px]"
      >
        <BarChart
          data={CHART_DATA}
          margin={{ left: 12, right: 12, top: 12, bottom: 12 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f1f5f9"
            vertical={false}
          />
          <XAxis
            dataKey="module"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={{ fill: "#475569", fontSize: 11, fontWeight: 900 }}
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "#475569", fontSize: 13, fontWeight: 900 }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="rounded-lg bg-slate-950 text-white"
                formatter={(val, name) => (
                  <span className="font-black text-teal-400">
                    {val} participants
                  </span>
                )}
              />
            }
          />
          <Bar
            dataKey="notStarted"
            stackId="a"
            fill="#e2e8f0"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="inProgress"
            stackId="a"
            fill="#fbbf24"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="completed"
            stackId="a"
            fill="#10b981"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
