import type { Metadata } from "next"
import Image from "next/image"
import { Rocket, Users, CheckCircle2, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternDots } from "@/components/ui/patterns"

export const metadata: Metadata = {
  title: "Pet Food Leader Case Study: Driving Scalable Growth | Paygos",
  description:
    "Discover how a global pet food leader achieved a 19% YoY sales increase and 25% account growth through Paygos automation.",
}

export default function VetGrowth() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex bg-teal-950" data-navbar-theme="dark">
        <PatternDots />

        <div className="text-hero relative z-10 flex flex-col justify-center py-32 text-white">
          <small className="text-teal-400">
            Sales Acceleration • Automation • Analytics
          </small>

          <h1>
            How a Global
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Pet Food Leader
            </span>{" "}
            <br />
            Unlocked Scalable Growth
          </h1>

          <p>
            By automating loyalty programs, ordering, and sales execution, this
            Global Pet Food Brand increased revenue, reactivated accounts, and
            empowered sales teams with real-time visibility.
          </p>
        </div>
      </section>

      <Breadcrumbs />
      <div className="section-container pt-16 pb-16 md:pb-24">
        {/* Key Metrics Grid */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
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
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md"
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

        {/* Story Content Layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <article className="prose prose-lg max-w-none text-gray-600">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                The Challenge: Scaling Reach in a Competitive Market
              </h2>

              <p className="mb-6 leading-relaxed">
                Operating in a highly competitive pet food market, a global pet
                food leader needed to expand its footprint while strengthening
                long-term customer loyalty. Many accounts were incremental or
                inactive, and manual sales processes limited visibility,
                efficiency, and growth.
              </p>

              <div className="my-10 rounded-2xl bg-slate-900 p-8 text-white">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-teal-400">
                  <CheckCircle2 className="h-5 w-5" /> The Paygos Solution
                </h3>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-bold text-teal-500">01.</span>
                    <span>
                      <strong>Incentivized Loyalty:</strong> Strategic staff
                      feeding and loyalty programs activated incremental
                      locations and strengthened engagement.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-teal-500">02.</span>
                    <span>
                      <strong>Sales Automation:</strong> Deal management and
                      manual tasks were automated, freeing sales teams to expand
                      coverage and reduce back-office workload.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-teal-500">03.</span>
                    <span>
                      <strong>Actionable Data:</strong> Real-time analytics
                      delivered visibility across service, fulfillment, and
                      brand performance.
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                The Impact: Measurable, Scalable Growth
              </h2>

              <p className="mb-8 leading-relaxed">
                By reactivating 30% of previously inactive accounts, the company
                achieved a 25% increase in active accounts. Staff feeding
                programs grew by 151%, while automation enabled a 19%
                year-over-year increase in sales.
              </p>

              <Image
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
                alt="Sales Data Analytics Chart"
                width={800}
                height={400}
                className="mb-8 rounded-2xl shadow-lg"
              />
            </article>
          </div>

          {/* Sidebar / Testimonial */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-2xl border border-teal-100 bg-teal-50 p-8">
                <p className="mb-6 text-lg text-teal-900 italic">
                  &quot;Paygos has been an exceptional partner in helping us
                  drive efficiency and innovation across our business. Since
                  2020 their platform has streamlined our rebate management and
                  ordering processes, allowing us to focus on what matters
                  most—delivering value to our customers.
                  <br />
                  <br />
                  The Paygos team is extraordinary, consistently going above and
                  beyond to service our unique needs with a personal touch.
                  Their ability to customize solutions specifically for our
                  business has made a world of difference, enabling us to
                  operate with greater speed and precision. We couldn’t ask for
                  a better partner in our journey toward growth and
                  success.&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-200">
                    <Users className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Global Pet Food Client
                    </p>
                    <p className="text-xs font-medium text-teal-700 uppercase">
                      Enterprise Sales Leader
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg">
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
