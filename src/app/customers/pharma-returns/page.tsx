import type { Metadata } from "next"
import Image from "next/image"
import { TrendingUp, PackageMinus } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDiagonal, PatternDots } from "@/components/ui/patterns"

export const metadata: Metadata = {
  title: "Pharma Returns Management Case Study | Paygos",
  description:
    "Discover how a major global pharmaceutical brand achieved 40% increase in sales visits and 10% reduction in returned goods through Paygos returns management.",
}

export default function PharmaReturns() {
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
            Returns Management • Sales Efficiency • Pharma
          </small>
          <h1>
            Pharma {""}
            <span className="text-highlight">Returns</span>
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-2xl md:mx-auto">
          {[
            {
              label: "Increase in Sales Visits",
              value: "40%",
              icon: TrendingUp,
              color: "text-emerald-600",
            },
            {
              label: "Reduction in Returned Goods",
              value: "10%",
              icon: PackageMinus,
              color: "text-blue-600",
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
            Manual Returns Hindering Sales
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-600">
            A major global pharmaceutical brand encountered challenges caused by
            a manual returns process that forced Territory Managers to spend
            excessive time during sales calls addressing product returns instead
            of generating promotional orders. Manual accounting and paper-based
            documentation led to human error and slow processing. Additionally,
            company policy required specific calculations per product, including
            territorial pricing and percentage deductions, reducing operational
            effectiveness and customer satisfaction.
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
                    Streamlined Data Entry
                  </h4>
                  <p className="text-slate-300">
                    Streamlined product return selection and data entry,
                    eliminating paper-based documentation and reducing manual
                    effort significantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">02.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Approval Workflows
                  </h4>
                  <p className="text-slate-300">
                    Introduced approval workflows for greater control and
                    implemented validation steps to ensure compliance with
                    returns policies.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-2xl font-black text-teal-500">03.</span>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    Automated Calculations
                  </h4>
                  <p className="text-slate-300">
                    Supported percentage deductions and payment controls with
                    automated calculations, improving accuracy and compliance
                    while reducing processing time.
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
            Territory Managers Empowered
          </h2>
          <p className="mb-12 text-gray-600">
            Territory Managers experienced the greatest impact from the Paygos
            solution. Nearly <strong>40% of visit time</strong> shifted from
            return processing to promotional and revenue-generating activities.
            The improved efficiency encouraged the launch of additional
            promotional programs and enabled better targeting of market
            segments. As a result, returned goods were reduced by{" "}
            <strong>10% annually</strong>, and the brand gained better control
            over customer visits.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
            alt="Pharmaceutical Sales Analytics"
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
              The implementation of a digital order and returns management
              system reduced operational pain points and allowed the
              organization to focus on business growth. Improved efficiency,
              accuracy, and customer satisfaction demonstrate how Paygos Returns
              Management Solution helps pharmaceutical companies optimize their
              operational processes.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
