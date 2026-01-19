import type { Metadata } from "next"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  MapPin,
  Camera,
  Activity,
  CloudOff,
  DollarSign,
  FileText,
  Clock,
  Map,
  Timer,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { FsaCoverageChart } from "./fsa-coverage-chart"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { PatternHexagon } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Field Sales Automation | Paygos",
  description:
    "Empower your field team with mobile-first automation. Manage visits, capture photos, track activities, and execute flawlessly with Paygos FSA.",
  keywords: [
    "field sales automation",
    "mobile sales app",
    "field rep tools",
    "visit tracking",
    "territory management",
    "field execution",
    "sales force automation",
  ],
  openGraph: {
    title: "Field Sales Automation | Paygos",
    description:
      "Empower your field team with mobile-first automation. Manage visits, capture photos, track activities, and execute flawlessly with Paygos FSA.",
    url: "https://www.paygos.ca/fsa",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Field Sales Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Sales Automation | Paygos",
    description:
      "Empower your field team with mobile-first automation. Manage visits, capture photos, track activities, and execute flawlessly with Paygos FSA.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/fsa",
  },
}

export default function FsaPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex bg-teal-950 py-24"
        data-navbar-theme="dark"
      >
        <PatternHexagon />
        <div className="text-hero">
          <small className="text-teal-400">
            Mobile-First • Real-Time Execution
          </small>
          <h1>
            Empower Your
            <br />
            <span className="text-highlight">Field Team</span>
          </h1>
          <p>
            Our Field Sales Automation equips Sale Reps with mobile tools to
            manage visits, capture photos, track activities, and execute
            flawlessly—all from their phone.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Challenges */}
      <section
        className="section-container mx-auto px-6 py-16"
        data-navbar-theme="light"
      >
        <h2 className="mb-8 text-center text-3xl font-black text-slate-900 md:text-5xl">
          Common Field Sales Challenges
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Challenge 1 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Paper-Based Chaos
            </h3>
            <p className="text-gray-600">
              Reps waste around 10 hours per week on manual data entry after
              filling out paper forms
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <Camera className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Visit Verification
            </h3>
            <p className="text-gray-600">
              No photo proof means execution claims cannot be validated,
              creating accountability gaps
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <MapPin className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Territory Gaps
            </h3>
            <p className="text-gray-600">
              Managers lack visibility into which stores are being visited and
              when
            </p>
          </div>

          {/* Challenge 4 */}
          <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Delayed Reporting
            </h3>
            <p className="text-gray-600">
              Field data reaches head office 5-7 days late, slowing critical
              decisions
            </p>
          </div>
        </div>
      </section>

      <IndustryBadge />

      {/* FSA Capabilities - Bento Grid */}
      <section
        className="section-container mx-auto px-6 py-24"
        role="region"
        aria-labelledby="fsa-capabilities"
        data-navbar-theme="light"
      >
        <h2
          id="fsa-capabilities"
          className="mb-8 text-center text-4xl font-black md:text-5xl"
        >
          The Paygos Solution
        </h2>

        <div className="grid auto-rows-[350px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Mobile Visit Capture */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="mobile-visit-capture"
            aria-describedby="mobile-visit-capture-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8"
              alt="Mobile visit capture"
              fill
            />
            <div className="p-8">
              <Smartphone size={32} aria-hidden="true" />
              <h3 id="mobile-visit-capture" className="md:text-3xl">
                Mobile Visit Capture
              </h3>
              <p
                id="mobile-visit-capture-desc"
                className="md:max-w-lg md:text-lg"
              >
                Check in at stores, upload photos, log activities—all from one
                app that works seamlessly on any device.
              </p>
            </div>
          </article>

          {/* Card 2 - GPS Route Optimization */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="gps-routes"
            aria-describedby="gps-routes-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83"
              alt="GPS route optimization"
              fill
            />
            <div className="p-8">
              <Map size={32} aria-hidden="true" />
              <h3 id="gps-routes">Route Optimization</h3>
              <p id="gps-routes-desc">
                Plan efficient routes and track mileage automatically for
                expense reporting.
              </p>
            </div>
          </article>

          {/* Card 3 - Real-Time Photo Validation */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="photo-validation"
            aria-describedby="photo-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
              alt="Photo validation"
              fill
            />
            <div className="p-8">
              <Camera size={32} aria-hidden="true" />
              <h3 id="photo-validation">Photo Validation</h3>
              <p id="photo-validation-desc">
                Capture planogram compliance, displays, and stock levels
                instantly with timestamp and GPS.
              </p>
            </div>
          </article>

          {/* Card 4 - Activity Dashboard */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="activity-dashboard"
            aria-describedby="activity-dashboard-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Activity dashboard"
              fill
            />
            <div className="p-8">
              <Activity size={32} aria-hidden="true" />
              <h3 id="activity-dashboard">Live Dashboard</h3>
              <p id="activity-dashboard-desc">
                Managers see visit completions, rep productivity, and coverage
                gaps in real-time.
              </p>
            </div>
          </article>

          {/* Card 5 - Offline Mode */}
          <article
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="offline-mode"
            aria-describedby="offline-mode-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
              alt="Offline mode"
              fill
            />
            <div className="p-8">
              <CloudOff size={32} aria-hidden="true" />
              <h3 id="offline-mode">Offline Mode</h3>
              <p id="offline-mode-desc">
                Work in low-signal areas—data automatically syncs when back
                online.
              </p>
            </div>
          </article>

          {/* Card 6 - Incentive Tie-In */}
          <article
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="incentive-tie-in"
            aria-describedby="incentive-tie-in-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
              alt="Incentive integration"
              fill
            />
            <div className="p-8">
              <DollarSign size={32} aria-hidden="true" />
              <h3 id="incentive-tie-in" className="md:text-3xl">
                Incentive Automation
              </h3>
              <p id="incentive-tie-in-desc" className="md:max-w-lg md:text-lg">
                Link field activities to automatic incentive payouts based on
                validated execution and performance.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Chart Section */}
      <section
        className="section-container mx-auto px-6 py-24"
        data-navbar-theme="light"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FsaCoverageChart />
          <div className="space-y-12">
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Coverage <br />
              <span className="text-highlight">That&apos;s Complete.</span>
            </h2>
            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                  <MapPin
                    size={28}
                    className="text-teal-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Track Territory Coverage
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Monitor visit frequency by territory to identify gaps and
                    optimize rep assignments in real-time.
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
                    Maximize Productivity
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Compare actual vs. target visits to ensure every territory
                    gets the attention it needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section
        className="bg-slate-900 py-24"
        role="region"
        aria-labelledby="roi-heading"
        data-navbar-theme="dark"
      >
        <div className="section-container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2
                id="roi-heading"
                className="mb-8 text-4xl font-black text-white md:text-6xl"
              >
                Proven Impact <br />
                <span className="text-teal-500">
                  Where Field Teams Execute Flawlessly
                </span>
              </h2>

              <ul className="mb-12 space-y-6">
                <li className="flex items-start gap-4">
                  <Timer aria-hidden="true" className="mt-1 text-teal-500" />
                  <p className="text-lg text-slate-300">
                    Reduce admin time by{" "}
                    <strong className="text-white">50%</strong> with mobile
                    capture that eliminates double data entry.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Increase visit validation by{" "}
                    <strong className="text-white">85%</strong> with photo proof
                    and GPS-timestamped check-ins.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-teal-500"
                  />
                  <p className="text-lg text-slate-300">
                    Improve territory coverage by{" "}
                    <strong className="text-white">30%</strong> with optimized
                    routing and real-time dashboards.
                  </p>
                </li>
              </ul>

              <Button variant="secondary" size="lg">
                <Link href="/roi" className="flex items-center gap-2">
                  Calculate Your ROI <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* ROI Stats */}
            <aside
              className="relative"
              role="group"
              aria-labelledby="roi-stats"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md">
                <Timer
                  className="mx-auto mb-6 text-teal-500"
                  size={48}
                  aria-hidden="true"
                />

                <h3
                  id="roi-stats"
                  className="mb-2 text-5xl font-black text-white md:text-8xl"
                >
                  10 hrs
                </h3>
                <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                  Saved Per Rep Per Week
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black text-white">
                      Real-Time
                    </h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Visibility
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black text-white">100%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Photo Validation
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
