"use client"

import Image from "next/image"
import { ClipboardList, Clock, DollarSign } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDiagonal, PatternDots } from "@/components/ui/patterns"
import { MotionSection } from "@/components/motion"

export default function RebateManagement() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="hero-sm bg-green-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">
            Rebate Management • Sales Acceleration • Automation
          </small>
          <h1>
            Rebate {""}
            <span className="text-highlight">Management</span>
          </h1>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Key Metrics Section */}
      <section className="section-container py-12" data-navbar-theme="light">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "Reduction in Admin Overheads",
              value: "40%",
              icon: ClipboardList,
              color: "text-emerald-600",
            },
            {
              label: "Faster Rebate Fulfillment",
              value: "30%",
              icon: Clock,
              color: "text-blue-600",
            },
            {
              label: "Decrease in Finance Costs",
              value: "25%",
              icon: DollarSign,
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
      <section className="section-container pb-12" data-navbar-theme="light">
        <MotionSection
          as="div"
          variant="slideUp"
          className="mx-auto max-w-3xl text-center"
        >
          <small className="text-green-700">The Challenge</small>
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Manual Rebate Processes Slowing Growth
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-600">
            A major pet nutrition industry brand struggled with manual rebate
            management processes that placed a heavy administrative burden on
            sales and finance teams. Excessive manual tasks, operational
            inefficiencies, and delayed reward payments led to internal friction
            and customer frustration, negatively impacting both team
            productivity and customer satisfaction.
          </p>
        </MotionSection>
      </section>

      {/* Solution Section */}
      <section className="relative bg-slate-900 py-12" data-navbar-theme="dark">
        <PatternDiagonal />
        <div className="section-container mx-auto px-6">
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
                    Seamless Automation
                  </h4>
                  <p className="text-slate-300">
                    The Paygos Sales Acceleration Rebate Solution transformed
                    the brand&apos;s rebate management approach by eliminating
                    manual processes and streamlining rebate workflows.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">02.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Reduced Administrative Effort
                  </h4>
                  <p className="text-slate-300">
                    Significant reductions in administrative effort and lower
                    finance operating costs through automated calculations and
                    approvals.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">03.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Faster Fulfillment
                  </h4>
                  <p className="text-slate-300">
                    Faster and more reliable rebate fulfillment, improving
                    customer satisfaction and strengthening partner
                    relationships.
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
            Strategic Focus Restored
          </h2>
          <p className="mb-12 text-gray-600">
            With the Paygos Sales Acceleration Rebate Solution in place, sales
            and finance teams achieved a{" "}
            <strong>40% reduction in administrative overheads</strong>, a{" "}
            <strong>30% reduction in time spent on rebate fulfillment</strong>,
            and a <strong>25% decrease in finance operating costs</strong>.
            Teams were able to shift focus toward strategic initiatives and
            meaningful customer engagement rather than managing rebate-related
            inefficiencies.
          </p>
        </MotionSection>
        <MotionSection as="div" variant="scaleIn" className="mx-auto max-w-3xl">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Rebate Management Analytics"
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
              The implementation of the Paygos Sales Acceleration Rebate
              Solution demonstrated the transformative impact of automation on
              rebate management. By simplifying volume incentive program
              management, the major pet nutrition industry brand improved
              efficiency, reduced costs, and created a smoother experience for
              both internal teams and customers.
            </p>
          </MotionSection>
        </div>
      </section>

      <CTA />
    </main>
  )
}
