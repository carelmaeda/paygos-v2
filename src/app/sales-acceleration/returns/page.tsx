import type { Metadata } from "next"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { PatternDots } from "@/components/ui/patterns"
import {
  RefreshCcw,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Package,
  Search,
  BarChart3,
  AlertTriangle,
  Clock,
  DollarSign,
  PackageX,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { BookCallButton } from "@/components/sections/cta/BookCallButton"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { ReturnsTrendChart } from "./returns-trend-chart"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "Returns Management | Paygos",
  description:
    "Streamline returns processing in convenience, fuel, and pharmacy sectors. Bring structure and visibility to your returns with validated processes and real-time tracking.",
  keywords: [
    "returns management",
    "product returns",
    "returns processing",
    "validated returns",
    "return analytics",
    "inventory returns",
    "replacement orders",
  ],
  openGraph: {
    title: "Returns Management | Paygos",
    description:
      "Streamline returns processing in convenience, fuel, and pharmacy sectors. Bring structure and visibility to your returns with validated processes and real-time tracking.",
    url: "https://www.paygos.ca/sales-acceleration/returns",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Returns Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Returns Management | Paygos",
    description:
      "Streamline returns processing in convenience, fuel, and pharmacy sectors. Bring structure and visibility to your returns with validated processes and real-time tracking.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration/returns",
  },
}

export default function ReturnsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-cyan-950" data-navbar-theme="dark">
        <PatternDots />
        <div className="text-hero">
          <small className="text-teal-400">Validated Returns Processing</small>
          <h1>
            Reclaim Margin
            <br />
            <span className="text-highlight">Redeploy Time</span>
          </h1>
          <p>
            Returns in convenience, fuel, and independent pharmacy are often
            messy. Paygos brings structure and visibility to a part of your
            business long treated as a cost center.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Challenges */}
      <section
        className="container mx-auto px-6 py-24"
        data-navbar-theme="light"
      >
        <h2 className="mb-12 text-center text-3xl font-black text-slate-900">
          Common Returns Challenges
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Challenge 1 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Unclear Return Reasons
            </h3>
            <p className="text-gray-600">
              Returns lack standardized categorization, making it hard to
              identify root causes
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Processing Delays
            </h3>
            <p className="text-gray-600">
              Manual return validation causes 7-10 day processing delays
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <DollarSign className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Lost Margin
            </h3>
            <p className="text-gray-600">
              Unvalidated returns erode margin by 5-8% annually
            </p>
          </div>

          {/* Challenge 4 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <PackageX className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Replacement Gaps
            </h3>
            <p className="text-gray-600">
              Bad goods lead to out-of-stocks instead of automatic replacements
            </p>
          </div>
        </div>
      </section>

      {/* Returns Capabilities */}
      <section
        className="mx-auto mb-24 max-w-5xl px-4"
        role="region"
        aria-labelledby="returns-capabilities"
        data-navbar-theme="light"
      >
        <h2 id="returns-capabilities" className="sr-only">
          Returns Management Capabilities
        </h2>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Validated Returns */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="validated-returns"
            aria-describedby="validated-returns-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="Validated returns processing with image capture"
              fill
            />
            <div>
              <Search size={32} aria-hidden="true" />
              <h3 id="validated-returns" className="md:text-3xl">
                Validated Returns
              </h3>
              <p id="validated-returns-desc" className="md:max-w-lg md:text-lg">
                Using image capture and scanning tech, returns are logged and
                verified at the store level. No forms. No calls. Your reps stay
                focused on growth.
              </p>
            </div>
          </article>

          {/* Card 2 - Replacement Orders */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="replacement-orders"
            aria-describedby="replacement-orders-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1553413077-190dd305871c"
              alt="Replacement order management"
              fill
            />
            <div>
              <RefreshCcw size={32} aria-hidden="true" />
              <h3 id="replacement-orders">Replacement—Not Just Credit</h3>
              <p id="replacement-orders-desc">
                Bad goods don't mean lost sales. Request replacements alongside
                returns—retaining shelf space.
              </p>
            </div>
          </article>

          {/* Card 3 - Analytics by SKU */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="returns-analytics"
            aria-describedby="returns-analytics-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Returns analytics dashboard"
              fill
            />
            <div>
              <BarChart3 size={32} aria-hidden="true" />
              <h3 id="returns-analytics">Data That Pays You Back</h3>
              <p id="returns-analytics-desc">
                Analyze return rates by SKU, region, or retailer. Identify
                damage tied to shipping.
              </p>
            </div>
          </article>

          {/* Card 4 - Real-Time Tracking */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="real-time-tracking"
            aria-describedby="real-time-tracking-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Real-time returns tracking interface"
              fill
            />
            <div>
              <Package size={32} aria-hidden="true" />
              <h3 id="real-time-tracking" className="md:text-3xl">
                Real-Time Visibility
              </h3>
              <p
                id="real-time-tracking-desc"
                className="md:max-w-lg md:text-lg"
              >
                Track all returns from submission to credit processing. Complete
                transparency for reps, retailers, and head office.
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
          <ReturnsTrendChart />
          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Visibility <br />
              <span className="text-teal-600 underline decoration-teal-200 underline-offset-[12px]">
                That Pays Off.
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
                    Identify Patterns
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Analyze returns by category, SKU, region, or retailer to
                    pinpoint damage tied to shipping or quality issues.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <TrendingUp
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Reduce Waste
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Spot trends early and take corrective action before return
                    rates impact your bottom line.
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
                  Where Returns Drive Efficiency
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Reduce returns processing time by{" "}
                    <strong className="text-white">
                      60% with automated validation
                    </strong>{" "}
                    and image capture workflows.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Stores process returns{" "}
                    <strong className="text-white">
                      on-site in under 5 minutes
                    </strong>
                    —no phone calls or paperwork required.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <RefreshCcw
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Replacement orders maintain{" "}
                    <strong className="text-white">
                      shelf presence and revenue
                    </strong>
                    —turning a cost center into a retention tool.
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
                  Faster Processing
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">5 min</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Average Return Time
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">100%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Validated & Tracked
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
