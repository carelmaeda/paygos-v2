import type { Metadata } from "next"
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
  Calculator,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { Button } from "@/components/ui/button"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { ReturnsTrendChart } from "./returns-trend-chart"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

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
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-green-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-green-400">Validated Returns Processing</small>
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
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Challenges */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Common Returns Challenges
        </MotionSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Unclear Return Reasons",
              desc: "Returns lack standardized categorization, making it hard to identify root causes",
              Icon: AlertTriangle,
              delay: 0.1,
            },
            {
              title: "Processing Delays",
              desc: "Manual return validation causes 7-10 day processing delays",
              Icon: Clock,
              delay: 0.15,
            },
            {
              title: "Lost Margin",
              desc: "Unvalidated returns erode margin by 5-8% annually",
              Icon: DollarSign,
              delay: 0.2,
            },
            {
              title: "Replacement Gaps",
              desc: "Bad goods lead to out-of-stocks instead of automatic replacements",
              Icon: PackageX,
              delay: 0.25,
            },
          ].map(({ title, desc, Icon, delay }) => (
            <MotionSection
              key={title}
              as="div"
              variant="scaleIn"
              delay={delay}
              viewport={{ once: true }}
              className="rounded-lg border border-gray-100 bg-white p-5 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-green-100">
                <Icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* Returns Capabilities */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
        role="region"
        aria-labelledby="returns-capabilities"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          id="returns-capabilities"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Our Solution
        </MotionSection>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Validated Returns */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.1}
            viewport={{ once: true }}
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
              <Search size={32} aria-hidden="true" className="text-green-400" />
              <h3 id="validated-returns" className="md:text-3xl">
                Validated Returns
              </h3>
              <p id="validated-returns-desc" className="md:max-w-lg md:text-lg">
                Using image capture and scanning tech, returns are logged and
                verified at the store level. No forms. No calls. Your reps stay
                focused on growth.
              </p>
            </div>
          </MotionSection>

          {/* Card 2 - Replacement Orders */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.15}
            viewport={{ once: true }}
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
              <RefreshCcw
                size={32}
                aria-hidden="true"
                className="text-green-400"
              />
              <h3 id="replacement-orders">Replacement—Not Just Credit</h3>
              <p id="replacement-orders-desc">
                Bad goods don&apos;t mean lost sales. Request replacements
                alongside returns—retaining shelf space.
              </p>
            </div>
          </MotionSection>

          {/* Card 3 - Analytics by SKU */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.2}
            viewport={{ once: true }}
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
              <BarChart3
                size={32}
                aria-hidden="true"
                className="text-green-400"
              />
              <h3 id="returns-analytics">Data That Pays You Back</h3>
              <p id="returns-analytics-desc">
                Analyze return rates by SKU, region, or retailer. Identify
                damage tied to shipping.
              </p>
            </div>
          </MotionSection>

          {/* Card 4 - Real-Time Tracking */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.25}
            viewport={{ once: true }}
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
              <Package
                size={32}
                aria-hidden="true"
                className="text-green-400"
              />
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
          </MotionSection>
        </div>
      </section>

      <IndustryBadge />

      {/* Chart Section */}
      <section data-navbar-theme="light" className="mx-auto bg-slate-200 py-12">
        <div className="section-container grid items-center gap-32 lg:grid-cols-2">
          {/* Keep chart stable (no animation) */}
          <ReturnsTrendChart />

          {/* Animate copy only */}
          <MotionSection
            as="div"
            variant="slideUp"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Visibility <br />
              <span className="text-highlight">That Pays Off.</span>
            </h2>

            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-green-50 p-5 transition-colors duration-300 group-hover:bg-green-500">
                  <BarChart3
                    size={28}
                    className="text-green-600 group-hover:text-white"
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
                <div className="shrink-0 rounded-lg bg-green-50 p-5 transition-colors duration-300 group-hover:bg-green-500">
                  <TrendingUp
                    size={28}
                    className="text-green-600 group-hover:text-white"
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
          </MotionSection>
        </div>
      </section>

      {/* ROI */}
      <section
        data-navbar-theme="dark"
        className="mx-auto"
        role="region"
        aria-labelledby="roi-heading"
      >
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Animate ROI copy separately */}
            <MotionSection as="div" variant="slideUp" viewport={{ once: true }}>
              <h2 id="roi-heading" className="pb-8 text-4xl md:text-8xl">
                Proven Impact <br />
                <span className="text-green-500">
                  Where Returns Drive Efficiency
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-green-500"
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
                    className="mt-1 text-green-500"
                  />
                  <p className="text-lg text-slate-300">
                    Stores process returns{" "}
                    <strong className="text-white">
                      on-site in under 5 minutes
                    </strong>
                    —no phone calls or paperwork required.
                  </p>
                </li>
              </ul>

              {/* Fix: avoid nested interactive elements */}
              <Button asChild variant="secondary" size="lg">
                <Link href="/roi" className="flex items-center gap-2">
                  Calculate Your ROI <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </MotionSection>

            {/* ROI Stats */}
            <MotionSection
              as="aside"
              variant="scaleIn"
              delay={0.15}
              viewport={{ once: true }}
              className="relative"
              role="group"
              aria-labelledby="roi-stats"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md">
                <Calculator
                  className="mx-auto mb-6 text-green-500"
                  size={48}
                  aria-hidden="true"
                />

                <div
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-6xl"
                >
                  60%
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-green-400 uppercase">
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
                      Validated &amp; Tracked
                    </p>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
