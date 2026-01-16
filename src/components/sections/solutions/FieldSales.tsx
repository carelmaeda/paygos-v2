import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PatternGrid } from "@/components/ui/patterns"

const FEATURES = [
  {
    title: "Empower Reps. Execute Flawlessly.",
    description:
      "Smart territory planning, automated scheduling, and real-time data capture that turn every store visit into a revenue opportunity.",
    image: "https://images.unsplash.com/photo-1627820751059-43001b92c076",
    href: "/solutions/fsa",
  },
  {
    title: "Optimize Routes. Maximize Impact.",
    description:
      "PS-enabled territories, AI-powered insights, and mobile execution tools that boost productivity and deliver complete visibility across your field team.",
    image: "https://images.unsplash.com/photo-1666281466387-0639381c5680",
    href: "/solutions/fsa",
  },
]

export function FieldSales() {
  return (
    <section className="relative bg-teal-950 py-16 text-white">
      <PatternGrid />
      <div className="section-container relative z-10 px-6">
        <header className="mb-16 flex flex-col items-center gap-2 text-center">
          <small className="text-teal-400 uppercase">
            Field Sales Automation
          </small>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            Automate field sales to save time and money
          </h2>
        </header>

        <div className="space-y-16 md:space-y-8">
          {FEATURES.map((feature, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={feature.title}
                className="grid items-center md:grid-cols-12 md:gap-8"
              >
                {/* Image */}
                <div
                  className={`relative mb-4 aspect-video overflow-hidden rounded-lg md:col-span-6 ${
                    !isEven ? "md:order-last" : ""
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={`${feature.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text Content */}
                <div
                  className={`flex flex-col items-center gap-2 text-center md:col-span-6 md:items-start md:text-left ${
                    isEven ? "md:pl-4" : "md:pr-4"
                  }`}
                >
                  <h3 className="text-teal-300">{feature.title}</h3>
                  <p className="text-teal-100">{feature.description}</p>
                  <Button
                    variant="link"
                    asChild
                    className="text-white transition-colors hover:text-teal-400"
                  >
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-2"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
