"use client"

import Image from "next/image"
import {
  Activity,
  FileText,
  BarChart3,
  ArrowUpRight,
  BrainCircuit,
  Users,
  Smartphone,
} from "lucide-react"
import { MotionSection } from "@/components/motion"

const ANALYTICS_FEATURES = [
  {
    title: "Live Operations",
    subtitle: "Real-time field activity tracking and instant status updates.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a",
    slug: "live-ops",
    className: "md:col-span-2 md:row-span-1 min-h-[180px]",
  },
  {
    title: "Predictive Trends",
    subtitle: "AI-driven forecasting to anticipate market shifts.",
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1739036868260-c26b292cd85d",
    slug: "predictive",
    className: "md:col-span-2 md:row-span-1 min-h-[180px]",
  },
  {
    title: "Performance History",
    subtitle:
      "Comprehensive archival data to track long-term growth and seasonal patterns.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1590098563176-07884b06d7f7",
    slug: "history",
    className: "md:col-span-1 md:row-span-2 min-h-[380px]",
  },
  {
    title: "Market Intelligence",
    subtitle: "Core competitive analysis and territory mapping.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1599202889720-cd3c0833efa1",
    slug: "market-intel",
    className: "md:col-span-2 md:row-span-1 min-h-[200px]",
  },
  {
    title: "Team Productivity",
    subtitle: "KPI tracking for individual and group performance.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    slug: "productivity",
    className: "md:col-span-1 md:row-span-1 min-h-[200px]",
  },
  {
    title: "Unified Reporting",
    subtitle:
      "Consolidated data views accessible from any device, anywhere in the world.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
    slug: "reporting",
    className: "md:col-span-3 md:row-span-1 min-h-[180px]",
  },
]

export function DataAnalytics() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section-container">
        <MotionSection
          as="header"
          variant="slideUp"
          className="mb-16 flex flex-col items-center gap-2 text-center"
        >
          <small className="text-teal-600 uppercase">Data & Analytics</small>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            Insights that drive decisions
          </h2>
        </MotionSection>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 lg:gap-2">
          {ANALYTICS_FEATURES.map((item) => {
            const Icon = item.icon
            return (
              <MotionSection
                as="article"
                key={item.slug}
                variant="scaleIn"
                className={`group relative flex flex-col justify-end overflow-hidden rounded-lg p-6 transition-all duration-500 hover:shadow-2xl ${item.className}`}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {/* Fixed Gradient: Darker on mobile, dynamic on desktop hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent transition-opacity duration-300 group-hover:via-slate-950/70" />
                </div>

                {/* Content Area */}
                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors group-hover:border-teal-500 group-hover:bg-teal-500">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                    {item.title}
                    <ArrowUpRight className="h-4 w-4 opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 md:opacity-0 md:group-hover:opacity-100" />
                  </h3>

                  {/* Subtitle: Visible on mobile, hover-only on desktop for cleaner look */}
                  <p className="mt-1 text-sm text-slate-200 opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
                    {item.subtitle}
                  </p>
                </div>
              </MotionSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
