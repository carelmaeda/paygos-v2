import type { Metadata } from "next"
import Image from "next/image"
import { Target, Users, Lightbulb, Heart } from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternWaves } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"

export const metadata: Metadata = {
  title: "About Us | Paygos",
  description: "Learn about our mission to transform sales automation.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative flex min-h-[75vh] bg-teal-950"
        data-navbar-theme="dark"
      >
        <PatternWaves />
        <div className="text-hero">
          <small className="text-teal-400">About us</small>
          <h1>
            Building the Future of
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Sales Automation
            </span>
          </h1>
          <p>
            Empowering businesses to sell more and spend less through innovative
            technology and intelligent automation.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Our Story - Light Background */}
      <section className="bg-white py-16 md:py-24" data-navbar-theme="light">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Founded with a vision to revolutionize the way businesses manage
                their sales operations, Paygos emerged from a simple
                observation: sales teams were spending too much time on
                administrative tasks and not enough time selling.
              </p>
              <p>
                Our founders, experienced sales professionals themselves,
                understood the pain points firsthand. They witnessed talented
                sales representatives bogged down by manual data entry,
                inefficient order processing, and disconnected systems that
                created more problems than they solved.
              </p>
              <p>
                Today, Paygos serves thousands of businesses worldwide, helping
                them save millions of hours and increase their sales efficiency.
                Our mission remains unchanged: to empower every sales
                professional with the tools they need to focus on what they do
                best—building relationships and closing deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Gray Background */}
      <section className="bg-gray-50 py-16 md:py-24" data-navbar-theme="light">
        <div className="section-container">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Innovation */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <Lightbulb className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly push boundaries in sales technology, staying ahead
                of the curve to deliver cutting-edge solutions that drive real
                results.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <Target className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Your success is our success. We build every feature with our
                customers in mind, ensuring their needs drive our product
                decisions.
              </p>
            </div>

            {/* Simplicity */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <Users className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                Simplicity
              </h3>
              <p className="text-gray-600">
                Complex problems deserve simple solutions. We believe in making
                powerful technology accessible and easy to use for everyone.
              </p>
            </div>

            {/* Integrity */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <Heart className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with transparency and honesty in everything we do,
                building trust with our customers, partners, and team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - White Background */}
      <section className="bg-white py-16 md:py-24" data-navbar-theme="light">
        <div className="section-container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Text Content */}
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                  Our Team
                </h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Behind Paygos is a diverse team of passionate innovators,
                    engineers, designers, and sales experts who share a common
                    goal: making sales automation accessible and effective for
                    businesses of all sizes.
                  </p>
                  <p>
                    We foster a culture of collaboration, continuous learning,
                    and customer obsession. Every team member brings unique
                    perspectives and expertise, contributing to our mission of
                    transforming the sales landscape.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Together, we build the future of sales—one innovation at a
                    time.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-navbar-theme="light">
        <CTA />
      </section>
    </main>
  )
}
