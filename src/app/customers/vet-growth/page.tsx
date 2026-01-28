"use client"

import Image from "next/image"
import { Rocket, Users, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDiagonal, PatternDots } from "@/components/ui/patterns"
import { MotionSection } from "@/components/motion"

export default function VetGrowth() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="hero-sm bg-emerald-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">
            Sales Acceleration • Automation • Analytics
          </small>
          <h1>
            Vet {""}
            <span className="text-highlight">Growth</span>
          </h1>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Key Metrics Section */}
      <section className="section-container py-12" data-navbar-theme="light">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "YoY Sales Increase",
              value: "19%",
              icon: TrendingUp,
              color: "text-emerald-600",
            },
            {
              label: "Active Account Growth",
              value: "25%",
              icon: Users,
              color: "text-blue-600",
            },
            {
              label: "Staff Feeding Growth",
              value: "151%",
              icon: Rocket,
              color: "text-teal-600",
            },
          ].map((stat, i) => (
            <MotionSection
              as="div"
              key={i}
              variant="scaleIn"
              className="flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <stat.icon className={`mb-3 h-8 w-8 ${stat.color}`} />
              <span className="text-3xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                {stat.label}
              </span>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-container pb-16" data-navbar-theme="light">
        <MotionSection
          as="div"
          variant="slideUp"
          className="mx-auto max-w-3xl text-center"
        >
          <small className="text-green-700">The Challenge</small>
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Scaling Reach in a Competitive Market
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-600">
            Operating in a highly competitive pet food market, a global pet food
            leader needed to expand its footprint while strengthening long-term
            customer loyalty. Many accounts were incremental or inactive, and
            manual sales processes limited visibility, efficiency, and growth.
          </p>
        </MotionSection>
      </section>

      {/* Solution Section */}
      <section className="relative bg-slate-900 py-12" data-navbar-theme="dark">
        <PatternDiagonal />
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <MotionSection
              as="h2"
              variant="slideUp"
              className="text-highlight mb-6 text-center"
            >
              The Paygos Solution
            </MotionSection>

            <div className="space-y-8">
              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">01.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Incentivized Loyalty
                  </h4>
                  <p className="text-slate-300">
                    Strategic staff feeding and loyalty programs activated
                    incremental locations and strengthened engagement.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">02.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Sales Automation
                  </h4>
                  <p className="text-slate-300">
                    Deal management and manual tasks were automated, freeing
                    sales teams to expand coverage and reduce back-office
                    workload.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">03.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Actionable Data
                  </h4>
                  <p className="text-slate-300">
                    Real-time analytics delivered visibility across service,
                    fulfillment, and brand performance.
                  </p>
                </div>
              </MotionSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-container py-12" data-navbar-theme="light">
        <MotionSection
          as="div"
          variant="slideUp"
          className="mx-auto max-w-3xl text-center"
        >
          <small className="text-green-700">The Impact</small>
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Measurable, Scalable Growth
          </h2>
          <p className="mb-12 text-gray-600">
            By reactivating 30% of previously inactive accounts, the company
            achieved a <strong>25% increase</strong> in active accounts. Staff
            feeding programs grew by <strong>151%</strong>, while automation
            enabled a <strong>19%</strong> year-over-year increase in sales.
          </p>
        </MotionSection>
        <MotionSection as="div" variant="scaleIn" className="mx-auto max-w-3xl">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
            alt="Sales Data Analytics Chart"
            width={800}
            height={400}
            className="mx-auto rounded-2xl shadow-lg"
          />
        </MotionSection>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-12" data-navbar-theme="light">
        <MotionSection as="h2" variant="slideUp" className="mb-8 text-center">
          Customer Testimonial
        </MotionSection>
        <div className="section-container">
          <MotionSection
            as="div"
            variant="fadeIn"
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-8 italic">
              &quot;Paygos has been an exceptional partner in helping us drive
              efficiency and innovation across our business. Since 2020 their
              platform has streamlined our rebate management and ordering
              processes, allowing us to focus on what matters most—delivering
              value to our customers.
              <br />
              <br />
              The Paygos team is extraordinary, consistently going above and
              beyond to service our unique needs with a personal touch. Their
              ability to customize solutions specifically for our business has
              made a world of difference, enabling us to operate with greater
              speed and precision. We couldn&apos;t ask for a better partner in
              our journey toward growth and success.&quot;
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-200">
                <Users className="h-6 w-6 text-teal-700" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">
                  Global Pet Food Client
                </p>
                <p className="text-xs font-medium text-teal-700 uppercase">
                  Marketing Director
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <CTA />
    </main>
  )
}
