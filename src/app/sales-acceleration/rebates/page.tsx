import type { Metadata } from "next"
import React from "react"
import Link from "next/link"
import { CTA } from "@/components/sections/cta/CTA"
import Image from "next/image"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { PatternDots } from "@/components/ui/patterns"
import {
  DollarSign,
  Target,
  Sparkles,
  BarChart3,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle,
  Clock,
  TrendingDown,
} from "lucide-react"
import { RebatesPerformanceChart } from "./rebates-performance-chart"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "Rebates & Incentives | Paygos",
  description:
    "Turn rebates into revenue drivers with Paygos. Automate rebate management, track incentive programs, and maximize ROI with real-time validation and reporting.",
  keywords: [
    "rebate management",
    "sales incentives",
    "rebate tracking",
    "incentive programs",
    "rebate automation",
    "promotional rebates",
    "trade promotions",
    "sales promotions",
  ],
  openGraph: {
    title: "Rebates & Incentives | Paygos",
    description:
      "Turn rebates into revenue drivers with Paygos. Automate rebate management, track incentive programs, and maximize ROI with real-time validation and reporting.",
    url: "https://www.paygos.ca/sales-acceleration/rebates",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Rebates & Incentives",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebates & Incentives | Paygos",
    description:
      "Turn rebates into revenue drivers with Paygos. Automate rebate management, track incentive programs, and maximize ROI with real-time validation and reporting.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration/rebates",
  },
}

export default function PaygosRebatesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-teal-950" data-navbar-theme="dark">
        <PatternDots />
        <div className="text-hero">
          <small className="text-teal-400">Automated Rebate Management</small>
          <h1>
            Rebates That
            <br />
            <span className="text-highlight">Drive Loyalty</span>
          </h1>
          <p>
            Paygos automates rebate tracking, claim validation, and payout
            management—giving your team real-time visibility into programs that
            drive loyalty and maximize profitability.
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
          Common Rebate Challenges
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Challenge 1 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <FileSpreadsheet className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Spreadsheet Chaos
            </h3>
            <p className="text-gray-600">
              Tracking rebate tiers across 100+ retailers in Excel leads to
              calculation errors
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Claim Disputes
            </h3>
            <p className="text-gray-600">
              Retailers dispute 25% of rebate calculations due to lack of
              transparency
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Delayed Payouts
            </h3>
            <p className="text-gray-600">
              Manual validation takes 30-45 days, frustrating partners
            </p>
          </div>

          {/* Challenge 4 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Lost Opportunities
            </h3>
            <p className="text-gray-600">
              Retailers don't see progress toward thresholds, missing
              incremental sales
            </p>
          </div>
        </div>
      </section>

      {/* Rebate Capabilities */}
      <section
        className="mx-auto mb-24 max-w-5xl px-4"
        role="region"
        aria-labelledby="rebate-capabilities"
        data-navbar-theme="light"
      >
        <h2 id="rebate-capabilities" className="sr-only">
          Rebate Management Capabilities
        </h2>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Smaller left card */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="automated-tracking"
            aria-describedby="automated-tracking-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Automated rebate tracking dashboard"
              fill
            />
            <div>
              <Sparkles size={32} aria-hidden="true" />
              <h3 id="automated-tracking">Automated Tracking</h3>
              <p id="automated-tracking-desc">
                Eliminate spreadsheets. Capture every purchase, calculate
                rebates instantly.
              </p>
            </div>
          </article>

          {/* Card 2 - Larger right card */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="program-management"
            aria-describedby="program-management-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Multi-tier rebate program management interface"
              fill
            />
            <div>
              <Target size={32} aria-hidden="true" />
              <h3 id="program-management" className="md:text-3xl">
                Multi-Tier Program Management
              </h3>
              <p
                id="program-management-desc"
                className="md:max-w-lg md:text-lg"
              >
                Build volume-based, product-mix, or performance rebates with
                flexible tiers and thresholds—no coding required.
              </p>
            </div>
          </article>

          {/* Card 3 - Medium left */}
          <article
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="real-time-visibility"
            aria-describedby="real-time-visibility-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Real-time rebate visibility dashboard"
              fill
            />
            <div>
              <BarChart3 size={32} aria-hidden="true" />
              <h3 id="real-time-visibility" className="md:text-2xl">
                Real-Time Visibility
              </h3>
              <p id="real-time-visibility-desc" className="md:text-base">
                Reps and retailers see progress toward rebate goals in
                real-time, driving urgency and incremental sales.
              </p>
            </div>
          </article>

          {/* Card 4 - Medium right */}
          <article
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="claim-validation"
            aria-describedby="claim-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="Automated claim validation process"
              fill
            />
            <div>
              <CheckCircle2 size={32} aria-hidden="true" />
              <h3 id="claim-validation" className="md:text-2xl">
                Automated Claim Validation
              </h3>
              <p id="claim-validation-desc" className="md:text-base">
                Flag exceptions, verify eligibility, and approve payouts
                faster—with audit trails baked in.
              </p>
            </div>
          </article>

          {/* Card 5 - Smaller left */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="partner-engagement"
            aria-describedby="partner-engagement-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Partner and retailer engagement portal"
              fill
            />
            <div>
              <Users size={32} aria-hidden="true" />
              <h3 id="partner-engagement">Partner Engagement</h3>
              <p id="partner-engagement-desc">
                Self-service portals let retailers track earnings and submit
                claims effortlessly.
              </p>
            </div>
          </article>

          {/* Card 6 - Larger right */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="payout-reconciliation"
            aria-describedby="payout-reconciliation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
              alt="Automated payout reconciliation system"
              fill
            />
            <div>
              <DollarSign size={32} aria-hidden="true" />
              <h3 id="payout-reconciliation" className="md:text-3xl">
                Seamless Payout & Reconciliation
              </h3>
              <p
                id="payout-reconciliation-desc"
                className="md:max-w-lg md:text-lg"
              >
                Integrate with accounting systems for one-click payouts and
                automated GL coding—no manual reconciliation.
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
          <RebatesPerformanceChart />
          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Growth <br />
              <span className="text-teal-600 underline decoration-teal-200 underline-offset-[12px]">
                That's Measurable.
              </span>
            </h2>
            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <TrendingUp
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Track Program Performance
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Monitor rebate enrollment, claims, and payouts across tiers
                    in real-time to optimize program ROI.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <Target
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Drive Incremental Sales
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Give retailers visibility into their progress toward
                    thresholds to motivate increased purchasing.
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
                  Where Rebates Drive Real Growth
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Customers see{" "}
                    <strong className="text-white">
                      30% faster claim processing
                    </strong>{" "}
                    with automated validation and approval workflows.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Retailers increase incremental purchases by{" "}
                    <strong className="text-white">20% on average</strong> when
                    they have real-time visibility into rebate progress.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <Rocket aria-hidden="true" className="mt-1 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    Reduce admin workload by{" "}
                    <strong className="text-white">up to 70%</strong>—freeing
                    your team to focus on strategic growth initiatives.
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
                  30%
                </h3>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Faster Processing
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">20%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Incremental Sales
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">70%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Less Admin Work
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
