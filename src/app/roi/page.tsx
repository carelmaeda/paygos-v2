"use client"

import { RoiCalculator } from "@/components/roi/RoiCalculator"
import { PatternDots } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { MotionSection } from "@/components/motion"

export default function RoiPage() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-100">
      {/* Hero */}
      <section className="hero-sm bg-emerald-950" data-navbar-theme="dark">
        <PatternDots />
        <MotionSection
          as="div"
          variant="slideUp"
          className="text-hero"
          viewport={{ once: true }}
        >
          <small className="text-teal-400">Measure Your Investment</small>
          <h1>
            Calculate {""}
            <span className="text-highlight">Your ROI</span>
          </h1>
          <p>
            See the real impact of Paygos on your business. Enter your metrics
            to uncover potential savings, efficiency gains, and growth
            opportunities.
          </p>
        </MotionSection>
      </section>

      <Breadcrumbs />

      {/* Calculator Section */}
      <section className="section-container py-16" data-navbar-theme="light">
        <MotionSection as="h3" variant="slideUp" className="mb-6 text-center">
          Select the ideal solutions and enter your business metrics to see
          potential returns.
        </MotionSection>
        <MotionSection as="div" variant="fadeIn">
          <RoiCalculator />
        </MotionSection>
      </section>
    </main>
  )
}
