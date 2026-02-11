import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { PatternDots } from "@/components/ui/patterns"
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  History,
  CheckCircle,
  Smartphone,
  AlertCircle,
  TrendingDown,
  FileSearch,
  Shield,
  TrendingUp,
  Calculator,
  PieChart,
} from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { Button } from "@/components/ui/button"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

// Dynamic import chart to reduce initial bundle - Recharts is heavy (~40KB)
const PaymentDistributionChart = dynamic(
  () =>
    import("./payment-distribution-chart").then(
      (mod) => mod.PaymentDistributionChart
    ),
  {
    ssr: true,
    loading: () => (
      <div className="h-[400px] animate-pulse rounded-lg bg-slate-200" />
    ),
  }
)

export const metadata: Metadata = {
  title: "Payment Solutions | Paygos",
  description:
    "Modern tools to validate incentives, manage budgets, and ensure compliance. Automate payment validation and EFT processing in one unified platform.",
  keywords: [
    "payment automation",
    "incentive validation",
    "EFT payments",
    "budget management",
    "payment compliance",
    "trade payments",
    "retailer payments",
  ],
  openGraph: {
    title: "Payment Solutions | Paygos",
    description:
      "Modern tools to validate incentives, manage budgets, and ensure compliance. Automate payment validation and EFT processing in one unified platform.",
    url: "https://www.paygos.ca/sales-acceleration/payments",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Payment Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Solutions | Paygos",
    description:
      "Modern tools to validate incentives, manage budgets, and ensure compliance. Automate payment validation and EFT processing in one unified platform.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration/payments",
  },
}

export default function PaymentsPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* SECTION: Hero & Background */}
      <section className="hero-sm bg-cyan-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-cyan-400">
            Reliable Results • Real-Time Insights
          </small>
          <h1>
            Rethink <span className="text-highlight">Payments</span>
          </h1>
          <p>
            Modern tools to validate incentives, manage budgets, and ensure
            compliance in one unified platform.
          </p>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* SECTION: Challenges */}
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
          Common Payment Challenges
        </MotionSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Manual Payment Processing",
              desc: "Validating incentive execution requires manual verification, leading to delays and errors",
              Icon: AlertCircle,
              delay: 0.1,
            },
            {
              title: "Budget Overruns",
              desc: "Without spending limits, promotional budgets frequently exceed allocation",
              Icon: TrendingDown,
              delay: 0.15,
            },
            {
              title: "Payment Reconciliation",
              desc: "Tracking EFT payments across multiple retailers creates reconciliation nightmares",
              Icon: FileSearch,
              delay: 0.2,
            },
            {
              title: "Compliance Issues",
              desc: "Audit trails are incomplete, making compliance verification difficult",
              Icon: Shield,
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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-100">
                <Icon className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* SECTION: Payment Capabilities - Bento Grid */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto py-12"
        role="region"
        aria-labelledby="payment-capabilities"
      >
        <MotionSection
          as="h2"
          variant="slideUp"
          id="payment-capabilities"
          className="mb-6 text-center"
          viewport={{ once: true }}
        >
          Our Solution
        </MotionSection>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-2 md:grid-cols-6">
          {/* Card 1 - Automated Validation */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.1}
            viewport={{ once: true }}
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="automated-validation"
            aria-describedby="automated-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=75"
              alt="Automated payment validation"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div>
              <ShieldCheck
                size={32}
                aria-hidden="true"
                className="text-cyan-400"
              />
              <h3 id="automated-validation" className="md:text-3xl">
                Automated Validation
              </h3>
              <p
                id="automated-validation-desc"
                className="md:max-w-lg md:text-lg"
              >
                Upload proof of execution via mobile, trigger automated
                validation, and approve EFT payments instantly.
              </p>
            </div>
          </MotionSection>

          {/* Card 2 - Budget Control */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.15}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="budget-control"
            aria-describedby="budget-control-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=75"
              alt="Budget control and spending limits"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div>
              <Wallet size={32} aria-hidden="true" className="text-cyan-400" />
              <h3 id="budget-control">Spending Limits</h3>
              <p id="budget-control-desc">
                Set promotional budgets and approval thresholds to prevent
                overruns.
              </p>
            </div>
          </MotionSection>

          {/* Card 3 - Real-Time Tracking */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.2}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="real-time-tracking"
            aria-describedby="real-time-tracking-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75"
              alt="Real-time payment tracking"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div>
              <History size={32} aria-hidden="true" className="text-cyan-400" />
              <h3 id="real-time-tracking">Real-Time Activity</h3>
              <p id="real-time-tracking-desc">
                Track all payments from submission to EFT processing with
                complete transparency.
              </p>
            </div>
          </MotionSection>

          {/* Card 4 - Mobile Validation */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.25}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="mobile-validation"
            aria-describedby="mobile-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=75"
              alt="Mobile payment validation"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div>
              <Smartphone
                size={32}
                aria-hidden="true"
                className="text-cyan-400"
              />
              <h3 id="mobile-validation">Mobile Validation</h3>
              <p id="mobile-validation-desc">
                Field reps capture execution proof on their phones, triggering
                instant payment workflows.
              </p>
            </div>
          </MotionSection>

          {/* Card 5 - Compliance & Audit */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.3}
            viewport={{ once: true }}
            className="bento-card md:col-span-2"
            role="group"
            aria-labelledby="compliance-audit"
            aria-describedby="compliance-audit-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=75"
              alt="Compliance and audit trails"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div>
              <Shield size={32} aria-hidden="true" className="text-cyan-400" />
              <h3 id="compliance-audit">Audit Trails</h3>
              <p id="compliance-audit-desc">
                Every payment logged with timestamps, approvals, and supporting
                documentation.
              </p>
            </div>
          </MotionSection>

          {/* Card 6 - Payment Analytics */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.35}
            viewport={{ once: true }}
            className="bento-card md:col-span-6"
            role="group"
            aria-labelledby="payment-analytics"
            aria-describedby="payment-analytics-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75"
              alt="Payment distribution analytics"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div>
              <PieChart
                size={32}
                aria-hidden="true"
                className="text-cyan-400"
              />
              <h3 id="payment-analytics" className="md:text-3xl">
                Payment Analytics
              </h3>
              <p id="payment-analytics-desc" className="md:max-w-lg md:text-lg">
                Analyze payment patterns by type, region, and retailer to
                optimize incentive programs and track ROI.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      <IndustryBadge />

      {/* SECTION: Analytics & Chart */}
      <section data-navbar-theme="light" className="mx-auto bg-slate-200 py-12">
        <div className="section-container grid items-center gap-32 lg:grid-cols-2">
          {/* Keep the chart stable (no motion) to avoid jank */}
          <div className="chart-grid-cell">
            <PaymentDistributionChart />
          </div>

          {/* Animate the copy only */}
          <MotionSection
            as="div"
            variant="slideUp"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
              Transparency <br />
              <span className="text-highlight">At Every Level.</span>
            </h2>

            <div className="space-y-10">
              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-cyan-50 p-5 transition-colors duration-300 group-hover:bg-cyan-500">
                  <ShieldCheck
                    size={28}
                    className="text-cyan-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Compliance &amp; Control
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Set spending limits and approval workflows to prevent budget
                    overruns before they happen.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-8">
                <div className="shrink-0 rounded-lg bg-cyan-50 p-5 transition-colors duration-300 group-hover:bg-cyan-500">
                  <Smartphone
                    size={28}
                    className="text-cyan-600 group-hover:text-white"
                  />
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                    Validation via Mobile
                  </h4>
                  <p className="text-lg leading-relaxed font-medium text-slate-500">
                    Upload images directly to validate incentive execution and
                    trigger EFT payments instantly.
                  </p>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* SECTION: ROI */}
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
                <span className="text-cyan-500">
                  Where Payments Drive Accountability
                </span>
              </h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <TrendingUp
                    aria-hidden="true"
                    className="mt-1 text-cyan-500"
                  />
                  <p className="text-lg text-slate-300">
                    Process payments{" "}
                    <strong className="text-white">
                      75% faster with automated validation
                    </strong>{" "}
                    and instant EFT capabilities.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-1 text-cyan-500"
                  />
                  <p className="text-lg text-slate-300">
                    Reduce budget overruns by{" "}
                    <strong className="text-white">90%</strong> with spending
                    limits and approval workflows.
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
                  className="mx-auto mb-6 text-cyan-500"
                  size={48}
                  aria-hidden="true"
                />

                <div
                  id="roi-stats"
                  className="mb-2 text-5xl font-black md:text-6xl"
                >
                  75%
                </div>
                <p className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase">
                  Faster Processing
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h4 className="text-3xl font-black">2 days</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Average Payment Time
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">100%</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Validated
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
