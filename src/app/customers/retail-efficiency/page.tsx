"use client"

import Image from "next/image"
import { BarChart3, Package, Workflow, Users } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDiagonal, PatternDots } from "@/components/ui/patterns"
import { MotionSection } from "@/components/motion"

export default function RetailEfficiency() {
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
            Paygos 360 • Retail Operations • Analytics
          </small>
          <h1>
            Retail {""}
            <span className="text-highlight">Efficiency</span>
          </h1>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Key Metrics Section */}
      <section className="section-container py-12" data-navbar-theme="light">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            {
              label: "Enhanced Forecasting",
              value: "",
              icon: BarChart3,
              color: "text-blue-600",
            },
            {
              label: "Dynamic Inventory",
              value: "",
              icon: Package,
              color: "text-teal-600",
            },
            {
              label: "Streamlined Processes",
              value: "",
              icon: Workflow,
              color: "text-purple-600",
            },
            {
              label: "Improved Productivity",
              value: "",
              icon: Users,
              color: "text-orange-600",
            },
          ].map((stat, i) => (
            <MotionSection
              as="div"
              key={i}
              variant="scaleIn"
              className="flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <stat.icon className={`mb-3 h-8 w-8 ${stat.color}`} />
              {stat.value && (
                <span className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </span>
              )}
              <span className="text-center text-sm font-medium tracking-wider text-gray-500 uppercase">
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
            Launching a New Retail Concept
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-600">
            A major national retail brand with a long-standing presence in the
            Canadian marketplace embarked on the launch of a new retail concept
            store. Its primary goals included improving operational efficiency,
            optimizing end-to-end supply chain flow, and seamlessly managing
            inventory and ordering processes. To support these objectives, the
            brand required a modern, data-driven technology solution capable of
            delivering real-time visibility and automation across retail
            operations.
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
                    Dynamic Analytics
                  </h4>
                  <p className="text-slate-300">
                    Paygos implemented a bespoke technology solution with
                    dynamic analytics to provide real-time, actionable insights
                    across retail operations.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">02.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Predictive Replenishment
                  </h4>
                  <p className="text-slate-300">
                    Enabled automated ordering through predictive replenishment
                    logic, reducing stockouts and overstock while improving
                    inventory demand planning.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">03.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Proactive Operations
                  </h4>
                  <p className="text-slate-300">
                    Shifted operations from reactive to proactive, leveraging
                    live data to improve decision-making while field reps saved
                    time managing inventory and processing orders.
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
            Measurable Operational Gains
          </h2>
          <p className="mb-12 text-gray-600">
            By leveraging Paygos, the major national retail brand achieved a{" "}
            <strong>10% increase in operational efficiency</strong> and
            measurable gains in execution. Improved forecasting, inventory
            management, and streamlined workflows enabled the organization to
            operate more effectively while supporting the successful rollout of
            its new retail concept.
          </p>
        </MotionSection>
        <MotionSection as="div" variant="scaleIn" className="mx-auto max-w-3xl">
          <Image
            src="/customers/retail-efficiency.webp"
            alt="Retail Store Operations"
            width={800}
            height={400}
            className="mx-auto rounded-2xl shadow-lg"
          />
        </MotionSection>
      </section>

      {/* Conclusion Section */}
      <section className="bg-gray-100 py-12" data-navbar-theme="light">
        <MotionSection as="h2" variant="slideUp" className="mb-8 text-center">
          Conclusion
        </MotionSection>
        <div className="section-container">
          <MotionSection
            as="div"
            variant="fadeIn"
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-lg text-gray-700">
              The implementation of Field Sales Automation provided the major
              national retail brand with the visibility, automation, and
              analytics required to modernize retail operations. The solution
              delivered tangible efficiency gains, improved productivity, and
              strengthened inventory and supply chain management, positioning
              the brand for continued retail innovation and growth.
            </p>
          </MotionSection>
        </div>
      </section>

      <CTA />
    </main>
  )
}
