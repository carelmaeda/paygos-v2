import type { Metadata } from "next"
import Image from "next/image"
import { Target, Users, Heart, Shield, Lock } from "lucide-react"
import { CTA } from "@/components/sections/cta/CTA"
import { PatternCircuit, PatternWaves } from "@/components/ui/patterns"
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
        className="relative flex bg-teal-950 py-16"
        data-navbar-theme="dark"
      >
        <PatternWaves />
        <div className="text-hero">
          <small className="text-teal-400">About us</small>
          <h1>
            Building the Future of
            <br />
            <span className="text-highlight">Sales Automation</span>
          </h1>
          <p>
            Empowering businesses to sell more and spend less through innovative
            technology and intelligent automation.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Our Story - Light Background */}
      <section className="bg-white py-16" data-navbar-theme="light">
        <div className="section-container">
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

      {/* President Testimonial */}
      <section className="bg-gray-200 py-16" data-navbar-theme="light">
        <div className="section-container">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <Image
                src="/paygos/hesham.jpg"
                alt="Hesham Shafie - President of Paygos"
                width={160}
                height={160}
                className="h-32 w-32 flex-shrink-0 rounded-full object-cover md:h-40 md:w-40"
              />
              <div className="text-center md:text-left">
                <blockquote className="mb-4 text-justify italic">
                  &ldquo;At Paygos, we believe that technology should empower
                  people, not replace them. Our mission is to give sales teams
                  the tools they need to build meaningful relationships and
                  achieve extraordinary results.&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-teal-600">Hesham Shafie</p>
                  <p className="text-cyan-900">President, Paygos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Bento Grid */}
      <section className="bg-white py-16" data-navbar-theme="light">
        <div className="section-container">
          <h2 className="mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Goodness - Large card spanning full height */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-lg p-8 text-white lg:row-span-4">
              <Image
                src="https://images.unsplash.com/photo-1579208575657-c595a05383b7"
                alt="People holding hands together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-white/20">
                <Heart className="h-9 w-9 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="mb-2 text-3xl! font-bold md:text-5xl!">
                  Goodness
                </h3>
                <p className="text-lg text-white/90">
                  At our core, we believe in doing what&apos;s right. We lead
                  with empathy, act with integrity, and strive to make a
                  positive impact in everything we do.
                </p>
              </div>
            </div>

            {/* Customer Focus */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Target className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Customer Focus</h3>
                <p className="text-sm text-gray-600">
                  Your success is our success.
                </p>
              </div>
            </div>

            {/* Simplicity */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Users className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Simplicity</h3>
                <p className="text-sm text-gray-600">
                  Powerful technology made accessible.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Lock className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Security</h3>
                <p className="text-sm text-gray-600">
                  Your data protection is our priority.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="flex items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <Shield className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold">Integrity</h3>
                <p className="text-sm text-gray-600">
                  Transparency and honesty in everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - White Background */}
      <section
        className="relative bg-emerald-900 py-16"
        data-navbar-theme="light"
      >
        <PatternCircuit />
        <div className="section-container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 text-white md:grid-cols-2 md:items-center">
              {/* Text Content */}
              <div>
                <h2 className="mb-4">Our Team</h2>
                <div className="space-y-4">
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
                  <p className="font-semibold text-gray-400">
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
