"use client"

import Link from "next/link"
import Image from "next/image"
import { PatternDots } from "@/components/ui/patterns"
import {
  ArrowRight,
  ShieldCheck,
  PieChart,
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
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CTA } from "@/components/sections/cta/CTA"
import { Button } from "@/components/ui/button"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

// --- Constants & Configuration ---

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

// --- Main Page Component ---

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
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18"
              alt="Automated payment validation"
              fill
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
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
              alt="Budget control and spending limits"
              fill
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Real-time payment tracking"
              fill
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
            className="bento-card md:col-span-4"
            role="group"
            aria-labelledby="mobile-validation"
            aria-describedby="mobile-validation-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8"
              alt="Mobile payment validation"
              fill
            />
            <div>
              <Smartphone
                size={32}
                aria-hidden="true"
                className="text-cyan-400"
              />
              <h3 id="mobile-validation" className="md:text-3xl">
                Mobile-First Validation
              </h3>
              <p id="mobile-validation-desc" className="md:max-w-lg md:text-lg">
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
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="compliance-audit"
            aria-describedby="compliance-audit-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              alt="Compliance and audit trails"
              fill
            />
            <div>
              <Shield size={32} aria-hidden="true" className="text-cyan-400" />
              <h3 id="compliance-audit" className="md:text-2xl">
                Complete Audit Trails
              </h3>
              <p id="compliance-audit-desc" className="md:text-base">
                Every payment logged with timestamps, approvals, and supporting
                documentation for compliance.
              </p>
            </div>
          </MotionSection>

          {/* Card 6 - Payment Distribution */}
          <MotionSection
            as="article"
            variant="scaleIn"
            delay={0.35}
            viewport={{ once: true }}
            className="bento-card md:col-span-3"
            role="group"
            aria-labelledby="payment-distribution"
            aria-describedby="payment-distribution-desc"
          >
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Payment distribution analytics"
              fill
            />
            <div>
              <PieChart
                size={32}
                aria-hidden="true"
                className="text-cyan-400"
              />
              <h3 id="payment-distribution" className="md:text-2xl">
                Payment Analytics
              </h3>
              <p id="payment-distribution-desc" className="md:text-base">
                Analyze payment patterns by type, region, and retailer to
                optimize incentive programs.
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
          <div className="rounded-[4rem] border border-slate-50 bg-white p-12 shadow-xl">
            <div className="mb-12 flex items-center justify-between text-xs font-black tracking-widest uppercase">
              <span>Payment Distribution</span>
              <PieChart className="text-emerald-500" size={20} />
            </div>
            <ChartContainer
              id="payment-distribution-page"
              config={CHART_CONFIG}
              className="h-[400px] w-full"
            >
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
                      className="rounded-lg bg-slate-950 text-white"
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
