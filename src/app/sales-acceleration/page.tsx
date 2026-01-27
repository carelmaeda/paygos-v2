import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingUp, Zap } from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { IndustryBadge } from "@/components/sections/solutions/IndustryBadge"
import { SALES_ACCELERATION_TOOLS } from "./data/tools"
import {
  PatternCircuit,
  PatternDots,
  PatternWaves,
} from "@/components/ui/patterns"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

export const metadata: Metadata = {
  title: "Sales Acceleration Tools | Paygos",
  description:
    "Accelerate your sales performance with Paygos suite of integrated tools: Optimized Ordering, Rebates, Training Management, Returns, Payments, and Marketing.",
  keywords: [
    "sales acceleration",
    "sales tools",
    "order management",
    "rebates",
    "training management",
    "returns management",
    "payment processing",
    "marketing automation",
  ],
  openGraph: {
    title: "Sales Acceleration Tools | Paygos",
    description:
      "Accelerate your sales performance with Paygos suite of integrated tools: Optimized Ordering, Rebates, Training Management, Returns, Payments, and Marketing.",
    url: "https://www.paygos.ca/sales-acceleration",
    siteName: "Paygos",
    images: [
      {
        url: "/paygos/logo-full.webp",
        width: 1200,
        height: 630,
        alt: "Paygos Sales Acceleration Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Acceleration Tools | Paygos",
    description:
      "Accelerate your sales performance with Paygos suite of integrated tools: Optimized Ordering, Rebates, Training Management, Returns, Payments, and Marketing.",
    images: ["/paygos/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.paygos.ca/sales-acceleration",
  },
}

export default function SalesAccelerationPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="hero-sm bg-sky-950" data-navbar-theme="dark">
        <PatternCircuit />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">
            Integrated • Powerful • Scalable
          </small>
          <h1>
            Accelerate Your {""}
            <span className="text-highlight">Sales</span>
          </h1>
          <p>
            A complete suite of tools designed to streamline operations,
            maximize efficiency, and drive revenue growth across your sales
            organization.
          </p>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* SECTION: Introduction */}
      <section
        data-navbar-theme="light"
        className="section-container mx-auto px-6 py-12"
      >
        <MotionSection
          as="div"
          variant="slideUp"
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-4xl font-black text-slate-900 md:text-5xl">
            Everything You Need to Win
          </h2>
          <p className="text-xl leading-relaxed text-slate-600">
            Paygos brings together the essential tools your sales team needs to
            succeed. From optimizing orders to managing payments, our integrated
            platform eliminates complexity and empowers your team to focus on
            what matters most: growing revenue.
          </p>
        </MotionSection>
      </section>

      <IndustryBadge />

      {/* SECTION: Tools Grid */}
      <section
        data-navbar-theme="light"
        className="relative mx-auto bg-stone-100 px-6 py-12"
      >
        <PatternDots />
        <MotionSection as="h2" variant="slideUp" className="mb-6 text-center">
          Our Sales Acceleration Tools
        </MotionSection>

        {/* Grid */}
        <div className="section-container grid grid-cols-1 gap-4 md:grid-cols-2 md:px-32 lg:grid-cols-3 lg:px-48">
          {SALES_ACCELERATION_TOOLS.map((tool, index) => (
            <MotionSection
              as="div"
              key={tool.href}
              variant="scaleIn"
              delay={0.1 + index * 0.05}
            >
              <Link
                href={tool.href}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg bg-black/10 backdrop-blur-xl transition-all duration-500"
              >
                {/* 1. Content Area (Frosted Top) */}
                <div className="relative z-10 space-y-1 px-6 pt-6 pb-1">
                  <h3 className="">{tool.title}</h3>
                  <p className="text-sm font-extralight">{tool.description}</p>

                  <Button variant="link" size="default" className="p-0!">
                    <div className="inline-flex items-center gap-2 text-black group-hover:underline">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform" />
                    </div>
                  </Button>
                </div>

                {/* 2. Image Area  */}
                <div className="relative h-32 w-full md:h-50">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* SECTION: Why Sales Acceleration */}
      <section data-navbar-theme="light" className="bg-slate-50 py-12">
        <div className="section-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <MotionSection as="div" variant="slideUp" className="space-y-12">
              <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase md:text-7xl">
                Why <span className="text-highlight">Sales Acceleration?</span>
              </h2>
              <div className="space-y-10">
                <div className="group flex items-start gap-8">
                  <div className="shrink-0 rounded-lg bg-teal-50 p-5 transition-colors duration-300 group-hover:bg-teal-500">
                    <Zap
                      size={28}
                      className="text-teal-600 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 text-2xl font-black tracking-tight text-slate-900 uppercase">
                      Unified Platform
                    </h4>
                    <p className="text-lg leading-relaxed font-medium text-slate-500">
                      All your sales tools in one place. No more juggling
                      multiple systems or struggling with data silos.
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
                      Measurable Results
                    </h4>
                    <p className="text-lg leading-relaxed font-medium text-slate-500">
                      Track performance, optimize processes, and demonstrate ROI
                      with comprehensive analytics and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </MotionSection>
            <MotionSection as="div" variant="scaleIn" className="relative">
              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-2xl">
                <Zap className="mx-auto mb-6 text-teal-500" size={48} />
                <h3 className="mb-8 text-center text-3xl font-black text-slate-900">
                  The Paygos Advantage
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                    <p className="text-lg text-slate-700">
                      <strong className="text-slate-900">
                        Seamless Integration
                      </strong>{" "}
                      across all sales acceleration tools
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                    <p className="text-lg text-slate-700">
                      <strong className="text-slate-900">
                        Real-Time Insights
                      </strong>{" "}
                      to make data-driven decisions
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                    <p className="text-lg text-slate-700">
                      <strong className="text-slate-900">
                        Mobile-First Design
                      </strong>{" "}
                      for field teams on the go
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
                    <p className="text-lg text-slate-700">
                      <strong className="text-slate-900">Proven ROI</strong>{" "}
                      with measurable impact on revenue
                    </p>
                  </li>
                </ul>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* SECTION: ROI */}
      <section
        data-navbar-theme="dark"
        className="relative mx-auto bg-teal-950 py-12 text-white"
        role="region"
        aria-labelledby="roi-heading"
      >
        <PatternWaves />
        <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <MotionSection as="div" variant="slideUp">
            <h2
              id="roi-heading"
              className="mb-8 text-4xl font-black md:text-6xl"
            >
              Proven Impact <br />
              <span className="text-teal-500">
                Across Your Sales Organization
              </span>
            </h2>
            <ul className="mb-10 space-y-6">
              <li className="flex items-start gap-4">
                <TrendingUp aria-hidden="true" className="mt-1 text-teal-500" />
                <p className="text-lg text-slate-300">
                  Increase sales productivity by{" "}
                  <strong className="text-white">up to 25%</strong> with
                  streamlined workflows and automation.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <CheckCircle
                  aria-hidden="true"
                  className="mt-1 text-teal-500"
                />
                <p className="text-lg text-slate-300">
                  Reduce administrative overhead by{" "}
                  <strong className="text-white">40%</strong>, giving your team
                  more time to sell.
                </p>
              </li>

              <li className="flex items-start gap-4">
                <CheckCircle
                  aria-hidden="true"
                  className="mt-1 text-teal-500"
                />
                <p className="text-lg text-slate-300">
                  Improve customer satisfaction with{" "}
                  <strong className="text-white">faster response times</strong>{" "}
                  and better service.
                </p>
              </li>
            </ul>
            <Button variant="secondary" size="lg">
              <Link href="/roi" className="flex items-center gap-2">
                Calculate Your ROI <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </MotionSection>

          {/* ROI Stats */}
          <MotionSection
            as="aside"
            variant="scaleIn"
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
                25%
              </h3>
              <p className="text-sm font-bold tracking-[0.2em] text-teal-400 uppercase">
                Productivity Increase
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                  <h4 className="text-3xl font-black">40%</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    Less Admin Work
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-black">6</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    Integrated Tools
                  </p>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* SECTION: Final CTA */}
      <CTA />
    </main>
  )
}
