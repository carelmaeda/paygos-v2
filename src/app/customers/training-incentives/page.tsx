import type { Metadata } from "next"
import Image from "next/image"
import { TrendingUp, ThumbsUp, Percent } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDiagonal, PatternDots } from "@/components/ui/patterns"

export const metadata: Metadata = {
  title: "Training Incentive Programs Case Study | Paygos",
  description:
    "Discover how a major pharma brand achieved 20% more sales visits and 10% increase in product recommendations through Paygos training incentive management.",
}

export default function TrainingIncentives() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex bg-cyan-950 pt-24 pb-16"
        data-navbar-theme="dark"
      >
        <PatternDots />
        <div className="text-hero">
          <small className="text-teal-400">
            Training Management • Sales Acceleration • Automation
          </small>
          <h1>
            Training {""}
            <span className="text-highlight">Incentives</span>
            <br />
          </h1>
        </div>
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
              label: "Increase in Sales Visits",
              value: "20%",
              icon: TrendingUp,
              color: "text-emerald-600",
            },
            {
              label: "Increase in Recommendations",
              value: "10%",
              icon: ThumbsUp,
              color: "text-blue-600",
            },
            {
              label: "Reduction in Payments",
              value: "18%",
              icon: Percent,
              color: "text-teal-600",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <stat.icon className={`mb-3 h-8 w-8 ${stat.color}`} />
              <span className="text-3xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Section */}
      <section
        className="section-container mx-auto px-6 pb-16"
        data-navbar-theme="light"
      >
        <div className="mx-auto max-w-3xl text-center">
          <small className="text-green-700">The Challenge</small>
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Manual Processes Limiting Growth
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-600">
            A major pharma industry brand faced challenges with its medical
            device training and education program for pharmacies. Program
            adherence was inconsistent, and sales representatives were
            frustrated by manual documentation and results processing. Sales
            reps lost valuable relationship-building opportunities due to time
            spent manually calculating and documenting trainings and credit
            payments during visits.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative bg-slate-900 py-16" data-navbar-theme="dark">
        <PatternDiagonal />
        <div className="section-container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-highlight mb-6 text-center">
              The Paygos Solution
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">01.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Geolocation Store Identification
                  </h4>
                  <p className="text-slate-300">
                    Automatically identified stores visited through geolocation,
                    eliminating manual check-ins and streamlining the visit
                    process.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">02.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Automated Data Access
                  </h4>
                  <p className="text-slate-300">
                    Automatically accessed store-level data history, giving reps
                    instant visibility into program progress and completion
                    status.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">03.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Seamless Payment Processing
                  </h4>
                  <p className="text-slate-300">
                    Handled credit payment calculations and session
                    documentation across thousands of locations seamlessly,
                    eliminating administrative overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        className="section-container mx-auto px-6 py-16"
        data-navbar-theme="light"
      >
        <div className="mx-auto max-w-3xl text-center">
          <small className="text-green-700">The Impact</small>
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Cross-Departmental Efficiency Gains
          </h2>
          <p className="mb-12 text-gray-600">
            Sales, marketing, and finance teams regained valuable time. Sales
            and Marketing achieved increased program adherence and consistency,
            resulting in a <strong>20% increase in sales visits</strong> and a{" "}
            <strong>10% increase in product recommendations</strong> by
            pharmacies. The Finance department gained greater control over
            payment capture validation and payment release, resulting in an{" "}
            <strong>18% reduction in payments issued per month</strong>.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
            alt="Pharmacy Training Program"
            width={800}
            height={400}
            className="mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="bg-gray-100 py-16" data-navbar-theme="light">
        <h2 className="mb-8 text-center">Conclusion</h2>
        <div className="section-container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-700">
              The implementation of the Paygos Training Management Platform
              improved cross-departmental efficiency, accuracy, and overall
              effectiveness of the pharmacy medical device training program.
              This white-labeled, turnkey technology solution eliminated all
              training program pain points, delivered a better experience to
              pharmacy customers, and enabled reps to engage more meaningfully
              during visits.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
