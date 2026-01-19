import type { Metadata } from "next"
import Image from "next/image"
import { ClipboardList, Clock, DollarSign } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDiagonal, PatternDots } from "@/components/ui/patterns"

export const metadata: Metadata = {
  title: "Rebate Management Case Study | Paygos",
  description:
    "Discover how a major pet nutrition brand achieved 40% reduction in administrative overheads and 25% decrease in finance operating costs through Paygos rebate automation.",
}

export default function RebateManagement() {
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
            Rebate Management • Sales Acceleration • Automation
          </small>
          <h1>
            Rebate {""}
            <span className="text-highlight">Management</span>
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
                    Seamless Automation
                  </h4>
                  <p className="text-slate-300">
                    The Paygos Sales Acceleration Rebate Solution transformed
                    the brand&apos;s rebate management approach by eliminating
                    manual processes and streamlining rebate workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
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
              </div>

              <div className="flex gap-6">
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
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Rebate Management Analytics"
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
              The implementation of the Paygos Sales Acceleration Rebate
              Solution demonstrated the transformative impact of automation on
              rebate management. By simplifying volume incentive program
              management, the major pet nutrition industry brand improved
              efficiency, reduced costs, and created a smoother experience for
              both internal teams and customers.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
