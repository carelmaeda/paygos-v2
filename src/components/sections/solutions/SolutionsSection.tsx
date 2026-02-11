"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MotionSection } from "@/components/motion"

const SOLUTIONS = [
  {
    title: "Drive Growth. Maximize ROI.",
    description:
      "Accelerate revenue with streamlined ordering, frictionless returns, and integrated payments that remove barriers from every sale.",
    image: "https://images.unsplash.com/photo-1713947505562-299114c58523?w=800&q=75",
    href: "/sales-acceleration",
    linkText: "Explore ordering, returns and payments",
  },
  {
    title: "Build High-Performance Sales Organizations.",
    description:
      "Power performance with targeted rebates, structured training management, and marketing tools designed to boost execution in the field.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&q=75",
    href: "/sales-acceleration",
    linkText: "Discover rebates, training and marketing tools",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-16">
      <div className="section-container px-4 md:px-6">
        <MotionSection
          as="header"
          variant="slideUp"
          className="mb-16 flex flex-col items-center gap-2 text-center"
        >
          <small className="text-teal-600 uppercase">Sales Acceleration</small>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            Tools tailored to your sales process
          </h2>
        </MotionSection>

        <div className="space-y-16 md:space-y-8">
          {SOLUTIONS.map((solution, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={solution.title}
                className="grid items-center md:grid-cols-12 md:gap-8"
              >
                {/* Image */}
                <MotionSection
                  as="div"
                  variant={isEven ? "slideInLeft" : "fadeIn"}
                  className={`relative mb-4 aspect-video overflow-hidden rounded-lg md:col-span-6 ${
                    !isEven ? "md:order-last" : ""
                  }`}
                >
                  <Image
                    src={solution.image}
                    alt={`${solution.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </MotionSection>

                {/* Text Content */}
                <MotionSection
                  as="div"
                  variant="slideUp"
                  className={`flex flex-col items-center gap-2 text-center md:col-span-6 md:items-start md:text-left ${
                    isEven ? "md:pl-4" : "md:pr-4"
                  }`}
                >
                  <h3 className="text-teal-700">{solution.title}</h3>
                  <p>{solution.description}</p>
                  <Button variant="link" asChild>
                    <Link
                      href={solution.href}
                      className="inline-flex items-center gap-2"
                    >
                      {solution.linkText} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </MotionSection>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
