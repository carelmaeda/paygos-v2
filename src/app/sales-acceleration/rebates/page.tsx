import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { CTA } from "@/components/sections/cta/CTA"
import { Button } from "@/components/ui/button"
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
  Calculator,
} from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

// Dynamic import chart to reduce initial bundle - Recharts is heavy (~40KB)
const RebatesPerformanceChart = dynamic(
  () =>
    import("./rebates-performance-chart").then(
      (mod) => mod.RebatesPerformanceChart
    ),
  {
    ssr: true,
    loading: () => (
      <div className="h-[400px] animate-pulse rounded-lg bg-slate-200" />
    ),
  }
)

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
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-sky-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-sky-400">Automated Rebate Management</small>
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
          Common Rebate Challenges
        </MotionSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Spreadsheet Chaos",
              desc: "Tracking rebate tiers across 100+ retailers in Excel leads to calculation errors",
              Icon: FileSpreadsheet,
              delay: 0.1,
            },
            {
              title: "Claim Disputes",
              desc: "Retailers dispute 25% of rebate calculations due to lack of transparency",
              Icon: AlertCircle,
              delay: 0.15,
            },
            {
              title: "Delayed Payouts",
              desc: "Manual validation takes 30-45 days, frustrating partners",
              Icon: Clock,
              delay: 0.2,
            },
            {
              title: "Lost Opportunities",
              desc: "Retailers don&apos;t see progress toward thresholds, missing incremental sales",
              Icon: TrendingDown,
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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-sky-100">
                <Icon className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* Rebate Capabilities */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
        role="region"
        aria-labelledby="rebate-capabilities"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          id="rebate-capabilities"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Our Solution
        </MotionSection>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Smaller left card */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.1}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="automated-tracking"
            aria-describedby="automated-tracking-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75"
              alt="Automated rebate tracking dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div>
              <Sparkles size={32} aria-hidden="true" className="text-sky-400" />
              <h3 id="automated-tracking">Automated Tracking</h3>
              <p id="automated-tracking-desc">
                Eliminate spreadsheets. Capture every purchase, calculate
                rebates instantly.
              </p>
            </div>
          </MotionSection>

          {/* Card 2 - Larger right card */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.15}
            viewport={{ once: true }}
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="program-management"
            aria-describedby="program-management-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75"
              alt="Multi-tier rebate program management interface"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div>
              <Target size={32} aria-hidden="true" className="text-sky-400" />
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
          </MotionSection>

          {/* Card 3 - Medium left */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.2}
            viewport={{ once: true }}
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="real-time-visibility"
            aria-describedby="real-time-visibility-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75"
              alt="Real-time rebate visibility dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div>
              <BarChart3
                size={32}
                aria-hidden="true"
                className="text-sky-400"
              />
              <h3 id="real-time-visibility" className="md:text-2xl">
                Real-Time Visibility
              </h3>
              <p id="real-time-visibility-desc" className="md:text-base">
                Reps and retailers see progress toward rebate goals in
                real-time, driving urgency and incremental sales.
              </p>
            </div>
          </MotionSection>

          {/* Card 4 - Medium right */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.25}
            viewport={{ once: true }}
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="claim-validation"
            aria-describedby="claim-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=75"
              alt="Automated claim validation process"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div>
              <CheckCircle2
                size={32}
                aria-hidden="true"
                className="text-sky-400"
              />
              <h3 id="claim-validation" className="md:text-2xl">
                Automated Claim Validation
              </h3>
              <p id="claim-validation-desc" className="md:text-base">
                Flag exceptions, verify eligibility, and approve payouts
                faster—with audit trails baked in.
              </p>
            </div>
          </MotionSection>

          {/* Card 5 - Smaller left */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.3}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="partner-engagement"
            aria-describedby="partner-engagement-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=75"
              alt="Partner and retailer engagement portal"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div>
              <Users size={32} aria-hidden="true" className="text-sky-400" />
              <h3 id="partner-engagement">Partner Engagement</h3>
              <p id="partner-engagement-desc">
                Self-service portals let retailers track earnings and submit
                claims effortlessly.
              </p>
            </div>
          </MotionSection>

          {/* Card 6 - Larger right */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.35}
            viewport={{ once: true }}
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="payout-reconciliation"
            aria-describedby="payout-reconciliation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=75"
              alt="Automated payout reconciliation system"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div>
              <DollarSign
                size={32}
                aria-hidden="true"
                className="text-sky-400"
              />
              <h3 id="payout-reconciliation" className="md:text-3xl">
                Seamless Payout &amp; Reconciliation
              </h3>
              <p
                id="payout-reconciliation-desc"
                className="md:max-w-lg md:text-lg"
              >
                Integrate with accounting systems for one-click payouts and
                automated GL coding—no manual reconciliation.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      <IndustryBadge />

      {/* Chart Section */}
      <section data-navbar-theme="light" className="mx-auto bg-slate-200 py-12">
        <div className="section-container grid items-center gap-32 lg:grid-cols-2">
          {/* Keep chart stable to avoid jank */}
          <div className="chart-grid-cell">
            <RebatesPerformanceChart />
          </div>

          {/* Animate the content block only */}
          <MotionSection
            as="div"
            variant="slideUp"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Growth <br />
              <span className="text-highlight">That&apos;s Measurable.</span>
            </h2>

            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-sky-50 p-5 transition-colors duration-300 group-hover:bg-sky-500">
                  <TrendingUp
                    size={28}
                    className="text-sky-600 group-hover:text-white"
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
                <div className="shrink-0 rounded-lg bg-sky-50 p-5 transition-colors duration-300 group-hover:bg-sky-500">
                  <Target
                    size={28}
                    className="text-sky-600 group-hover:text-white"
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
          </MotionSection>
        </div>
      </section>

      {/* ROI */}
      <section
        className="mx-auto"
        role="region"
        aria-labelledby="roi-heading"
        data-navbar-theme="dark"
      >
        <div className="relative overflow-hidden bg-slate-900 p-8 text-white md:p-16">
          <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Animate ROI copy separately */}
            <MotionSection as="div" variant="slideUp" viewport={{ once: true }}>
              <h2 id="roi-heading" className="pb-8 text-4xl md:text-8xl">
                Proven Impact <br />
                <span className="text-sky-500">
                  Where Rebates Drive Real Growth
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-sky-500"
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
                    className="mt-1 text-sky-500"
                  />
                  <p className="text-lg text-slate-300">
                    Retailers increase incremental purchases by{" "}
                    <strong className="text-white">20% on average</strong> when
                    they have real-time visibility into rebate progress.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <Rocket aria-hidden="true" className="mt-1 text-sky-500" />
                  <p className="text-lg text-slate-300">
                    Reduce admin workload by{" "}
                    <strong className="text-white">up to 70%</strong>—freeing
                    your team to focus on strategic growth initiatives.
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
                  className="mx-auto mb-6 text-sky-500"
                  size={48}
                  aria-hidden="true"
                />

                <div
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-6xl"
                >
                  30%
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-sky-400 uppercase">
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
            </MotionSection>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
