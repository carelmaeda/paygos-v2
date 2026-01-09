import Link from "next/link"
import Image from "next/image"
import { TrendingUp } from "lucide-react"

export default function RebatesPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container">
        {/* Hero Section - Custom gradient background */}
        <div className="mb-12 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
            <TrendingUp className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Rebates</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Maximize ROI. Drive Growth. Automate Success.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mx-auto mb-12 h-96 max-w-4xl overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="/solutions/rebates.svg"
            alt="Rebates Management"
            fill
            className="object-cover"
          />
        </div>

        {/* Overview Section */}
        <div className="mx-auto mb-16 max-w-3xl rounded-lg bg-white p-6">
          <h2 className="mb-6 text-3xl font-bold">Overview</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              Transform your rebates management with our cutting-edge automation
              platform. Designed for businesses of all sizes, our solution
              streamlines rebate tracking from start to finish, reducing errors
              and accelerating processing times.
            </p>
            <p>
              Whether you're managing hundreds or thousands of rebate programs
              daily, our intelligent system adapts to your workflow, integrating
              seamlessly with your existing tools and providing real-time
              visibility across your entire operation.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16 rounded-lg bg-white p-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Automated Rebate Processing
              </h3>
              <p className="text-gray-600">
                Eliminate manual data entry and reduce processing time by up to
                80% with intelligent automation.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Monitor every rebate from submission to payout with live updates
                and notifications.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Smart Program Management
              </h3>
              <p className="text-gray-600">
                Automatic program updates and eligibility alerts keep you always
                prepared.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Multi-Channel Support
              </h3>
              <p className="text-gray-600">
                Manage rebates from web, mobile, phone, and in-person channels in
                one unified platform.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Advanced Analytics</h3>
              <p className="text-gray-600">
                Gain insights into rebate trends, customer behavior, and
                performance metrics.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Connect with your existing ERP, CRM, and accounting systems
                effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16 rounded-lg bg-indigo-50 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How It Works</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-700 font-semibold text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Connect Your Systems
                  </h3>
                  <p className="text-gray-600">
                    Quick setup with your existing tools and platforms. Our team
                    guides you through every step.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-700 font-semibold text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Configure Your Workflow
                  </h3>
                  <p className="text-gray-600">
                    Customize the system to match your unique business processes
                    and requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-700 font-semibold text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Start Processing Rebates
                  </h3>
                  <p className="text-gray-600">
                    Begin managing and paying rebates immediately with full
                    automation and tracking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-700 font-semibold text-white">
                  4
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Optimize & Scale
                  </h3>
                  <p className="text-gray-600">
                    Use analytics to identify improvements and scale your
                    operations as you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto mb-16 max-w-3xl rounded-lg bg-white p-6">
          <h2 className="mb-6 text-3xl font-bold">Benefits</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex gap-3">
              <span className="text-indigo-700">✓</span>
              <span>Reduce rebate processing time by up to 80%</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-700">✓</span>
              <span>Eliminate manual errors and improve accuracy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-700">✓</span>
              <span>Increase customer satisfaction with faster processing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-700">✓</span>
              <span>Scale your business without adding headcount</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-700">✓</span>
              <span>
                Gain real-time visibility into your entire rebate pipeline
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-indigo-950 p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Transform Your Rebates Management?
          </h2>
          <p className="mb-6 text-lg text-gray-200">
            Join thousands of businesses that have streamlined their operations
            with our solution.
          </p>
          <Link
            href="#"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-indigo-950 transition-colors hover:bg-gray-100"
          >
            Schedule a Demo
          </Link>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-700 hover:text-indigo-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
