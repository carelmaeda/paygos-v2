import type { Metadata } from "next"
import React from "react"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Database,
  FileSearch,
  AlertTriangle,
  FileX,
  TrendingDown,
  DollarSign,
  Layout,
  FileOutput,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { BookCallButton } from "@/components/sections/cta/BookCallButton"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { AnalyticsMetricsChart } from "./analytics-metrics-chart"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "Data & Analytics | Paygos",
  description:
    "Transform data into strategy with Paygos analytics for CPG brands in independent retail. Real-time dashboards, sales insights, inventory tracking, and customer analytics.",
  keywords: [
    "sales analytics",
    "data analytics",
    "CPG analytics",
    "retail insights",
    "sales dashboards",
    "inventory tracking",
    "customer analytics",
    "business intelligence",
  ],
  openGraph: {
    title: "Data & Analytics | Paygos",
    description:
      "Transform data into strategy with Paygos analytics for CPG brands in independent retail. Real-time dashboards, sales insights, inventory tracking, and customer analytics.",
    url: "https://www.paygos.ca/analytics",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Data & Analytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data & Analytics | Paygos",
    description:
      "Transform data into strategy with Paygos analytics for CPG brands in independent retail. Real-time dashboards, sales insights, inventory tracking, and customer analytics.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/analytics",
  },
}

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-teal-950" data-navbar-theme="dark">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Analytics Dashboard"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-black tracking-[0.2em] text-emerald-300 uppercase backdrop-blur-md">
              Real-Time Insights • Data-Driven Decisions
            </div>
            <h1 className="mb-10 text-6xl leading-[0.9] font-black tracking-tighter text-white md:text-9xl">
              TURN DATA <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                INTO DECISIONS.
              </span>
            </h1>
            <p className="mb-12 max-w-2xl text-xl leading-relaxed font-medium text-slate-300 md:text-2xl">
              Paygos consolidates fragmented retail data into actionable
              insights that drive sales, reduce waste, and prove ROI.
            </p>
            <BookCallButton />
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* Challenges */}
      <section
        className="container mx-auto px-6 py-24"
        data-navbar-theme="light"
      >
        <h2 className="mb-12 text-center text-3xl font-black text-slate-900">
          Common Analytics Challenges
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Challenge 1 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Execution Hard to Confirm
            </h3>
            <p className="text-gray-600">
              Without photo proof and real-time data, validating field execution
              is guesswork
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <FileX className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Returns Lack Clarity
            </h3>
            <p className="text-gray-600">
              Return data sits in spreadsheets, making it impossible to spot
              trends or root causes
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <Database className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Data Inputs Inconsistent
            </h3>
            <p className="text-gray-600">
              Different systems and manual entry create conflicting data across
              the business
            </p>
          </div>

          {/* Challenge 4 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Incentive Budgets Hard to Track
            </h3>
            <p className="text-gray-600">
              Promotional spend is scattered, making ROI analysis nearly
              impossible
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Capabilities - Bento Grid */}
      <section
        className="mx-auto mb-24 max-w-5xl px-4"
        role="region"
        aria-labelledby="analytics-capabilities"
        data-navbar-theme="light"
      >
        <h2 id="analytics-capabilities" className="sr-only">
          Analytics & Reporting Capabilities
        </h2>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Unified Dashboard */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="unified-dashboard"
            aria-describedby="unified-dashboard-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Unified analytics dashboard"
              fill
            />
            <div>
              <Layout size={32} aria-hidden="true" />
              <h3 id="unified-dashboard" className="md:text-3xl">
                Unified Dashboard
              </h3>
              <p id="unified-dashboard-desc" className="md:max-w-lg md:text-lg">
                Single view of sales, returns, payments, and field activity
                across all retailers in one platform.
              </p>
            </div>
          </article>

          {/* Card 2 - Custom Reports */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="custom-reports"
            aria-describedby="custom-reports-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Custom reporting tools"
              fill
            />
            <div>
              <FileSearch size={32} aria-hidden="true" />
              <h3 id="custom-reports">Custom Reports</h3>
              <p id="custom-reports-desc">
                Build reports your way with drag-and-drop filtering and custom
                date ranges.
              </p>
            </div>
          </article>

          {/* Card 3 - SKU-Level Tracking */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="sku-tracking"
            aria-describedby="sku-tracking-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="SKU-level tracking"
              fill
            />
            <div>
              <BarChart3 size={32} aria-hidden="true" />
              <h3 id="sku-tracking">SKU-Level Insights</h3>
              <p id="sku-tracking-desc">
                Monitor product performance down to individual stores and track
                velocity.
              </p>
            </div>
          </article>

          {/* Card 4 - Territory Analytics */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="territory-analytics"
            aria-describedby="territory-analytics-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt="Territory analytics"
              fill
            />
            <div>
              <MapPin size={32} aria-hidden="true" />
              <h3 id="territory-analytics">Territory Analytics</h3>
              <p id="territory-analytics-desc">
                Compare rep performance and regional trends side-by-side.
              </p>
            </div>
          </article>

          {/* Card 5 - Predictive Insights */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="predictive-insights"
            aria-describedby="predictive-insights-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Predictive analytics"
              fill
            />
            <div>
              <Sparkles size={32} aria-hidden="true" />
              <h3 id="predictive-insights">Predictive Insights</h3>
              <p id="predictive-insights-desc">
                AI-powered forecasting for inventory and promotion planning.
              </p>
            </div>
          </article>

          {/* Card 6 - Export & Integrations */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="export-integrations"
            aria-describedby="export-integrations-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Export and integrations"
              fill
            />
            <div>
              <FileOutput size={32} aria-hidden="true" />
              <h3 id="export-integrations" className="md:text-3xl">
                Export & Integrations
              </h3>
              <p
                id="export-integrations-desc"
                className="md:max-w-lg md:text-lg"
              >
                Connect to your BI tools or export data for deeper analysis—CSV,
                Excel, API access.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Chart Section */}
      <section
        className="container mx-auto px-6 py-40"
        data-navbar-theme="light"
      >
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <AnalyticsMetricsChart />
          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Insights <br />
              <span className="text-teal-600 underline decoration-teal-200 underline-offset-[12px]">
                That Drive Action.
              </span>
            </h2>
            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <BarChart3
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Monitor Key Metrics
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Track data quality, execution compliance, returns
                    visibility, and ROI transparency in real-time.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <Zap
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Act on Insights
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Turn analytics into action with automated alerts and
                    actionable recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryBadge />

      {/* ROI */}
      <section
        className="mx-auto"
        role="region"
        aria-labelledby="roi-heading"
        data-navbar-theme="dark"
      >
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="roi-heading"
                className="mb-8 text-4xl font-black md:text-6xl"
              >
                Proven Impact <br />
                <span className="text-teal-500">
                  Where Data Drives Strategy
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Generate reports{" "}
                    <strong className="text-white">60% faster</strong> with
                    automated data consolidation and pre-built dashboards.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Improve execution visibility by{" "}
                    <strong className="text-white">40%</strong> with real-time
                    photo validation and field activity tracking.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <DollarSign
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Reduce returns waste by{" "}
                    <strong className="text-white">25%</strong> by identifying
                    patterns and addressing root causes faster.
                  </p>
                </li>
              </ul>

              <a href="/roi" className="btn btn-secondary text-white!">
                Calculate Your ROI <ArrowRight aria-hidden="true" />
              </a>
            </div>

            {/* ROI Stats */}
            <aside
              className="relative"
              role="group"
              aria-labelledby="roi-stats"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md">
                <TrendingUp
                  className="mx-auto mb-6 text-teal-500"
                  size={48}
                  aria-hidden="true"
                />

                <h3
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-8xl"
                >
                  60%
                </h3>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Faster Insights
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">Real-Time</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Data Updates
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">100%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Data Accuracy
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
