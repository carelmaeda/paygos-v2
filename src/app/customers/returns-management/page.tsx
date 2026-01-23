"use client"

import Image from "next/image"
import { Users, ClipboardList, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDiagonal, PatternDots } from "@/components/ui/patterns"
import { MotionSection } from "@/components/motion"

export default function ReturnsManagement() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-sm bg-cyan-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">
            Returns Management • Automation • Compliance
          </small>
          <h1>
            Returns {""}
            <span className="text-highlight">Management</span>
          </h1>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Key Metrics Section */}
      <section
        className="section-container mx-auto px-6 py-16"
        data-navbar-theme="light"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              label: "Decrease in Support Staff",
              value: "50%",
              icon: Users,
              color: "text-emerald-600",
            },
            {
              label: "Reduction in Admin Tasks",
              value: "20%",
              icon: ClipboardList,
              color: "text-blue-600",
            },
            {
              label: "Sales Rep Time Reclaimed",
              value: "15%",
              icon: Clock,
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
      <section
        className="section-container mx-auto px-6 pb-16"
        data-navbar-theme="light"
      >
        <MotionSection as="div" variant="slideUp" className="mx-auto max-w-3xl text-center">
          <small className="text-green-700">The Challenge</small>
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Managing Returns at Scale
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-600">
            A major consumer packaged goods brand faced challenges efficiently
            managing returns from thousands of independent customers. Manual
            validation, frequent errors, and disbursement processes consumed
            significant time and resources, negatively impacting operational
            efficiency and customer satisfaction. Additionally, ensuring
            compliance with regulatory and corporate standards added another
            layer of complexity to the returns management process.
          </p>
        </MotionSection>
      </section>

      {/* Solution Section */}
      <section className="relative bg-slate-900 py-16" data-navbar-theme="dark">
        <PatternDiagonal />
        <div className="section-container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <MotionSection as="h2" variant="slideUp" className="text-highlight mb-6 text-center">
              The Paygos Solution
            </MotionSection>

            <div className="space-y-8">
              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">01.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Seamless System Integration
                  </h4>
                  <p className="text-slate-300">
                    Paygos seamlessly integrated with the brand&apos;s existing
                    systems, including ERP platforms, national carriers and
                    transporters, warehouses, and disposal partners.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">02.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Automated Validation
                  </h4>
                  <p className="text-slate-300">
                    The solution eliminated sales rep involvement, automated
                    manual steps, and delivered validation with image capture
                    for accurate returns processing.
                  </p>
                </div>
              </MotionSection>

              <MotionSection as="div" variant="slideUp" className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">03.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Turnkey Disbursement & Compliance
                  </h4>
                  <p className="text-slate-300">
                    Paygos deployed turnkey disbursement, ensured regulatory
                    compliance, and fundamentally transformed the brand&apos;s
                    returns management process.
                  </p>
                </div>
              </MotionSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        className="section-container mx-auto px-6 py-16"
        data-navbar-theme="light"
      >
        <MotionSection as="div" variant="slideUp" className="mx-auto max-w-3xl text-center">
          <small className="text-green-700">The Impact</small>
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Operational Excellence Achieved
          </h2>
          <p className="mb-12 text-gray-600">
            The major consumer packaged goods brand achieved a{" "}
            <strong>50% decrease in support staff</strong>, a{" "}
            <strong>20% reduction in administrative tasks</strong>, and{" "}
            <strong>15% of sales rep time reclaimed</strong>. With streamlined
            processes and access to comprehensive returns data and analytics,
            the brand gained valuable insights into customer behavior, return
            patterns, and product quality issues.
          </p>
        </MotionSection>
        <MotionSection as="div" variant="scaleIn" className="mx-auto max-w-3xl">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Returns Management Analytics"
            width={800}
            height={400}
            className="mx-auto rounded-2xl shadow-lg"
          />
        </MotionSection>
      </section>

      {/* Conclusion Section */}
      <section className="bg-gray-100 py-16" data-navbar-theme="light">
        <MotionSection as="h2" variant="slideUp" className="mb-8 text-center">
          Conclusion
        </MotionSection>
        <div className="section-container mx-auto px-6">
          <MotionSection as="div" variant="fadeIn" className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-700">
              The implementation of the Paygos Returns Management Solution
              transformed returns operations, driving measurable operational
              efficiencies while reinforcing a strong commitment to customer
              satisfaction and regulatory compliance. By leveraging Paygos, the
              organization optimized returns processing while maintaining its
              commitment to product quality, freshness, and customer
              satisfaction.
            </p>
          </MotionSection>
        </div>
      </section>

      <CTA />
    </main>
  )
}
