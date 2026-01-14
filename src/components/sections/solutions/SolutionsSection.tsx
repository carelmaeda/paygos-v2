import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const SOLUTIONS = [
  {
    title: "Sales Acceleration",
    description: "Streamline operations and drive revenue growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    href: "/sales-acceleration",
  },
  {
    title: "Field Sales Automation",
    description: "Save your company both time and money.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    href: "/sales-acceleration",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container px-4 md:px-6">
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Power Your Growth with Sales Acceleration
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl">
            Choose from these modules, all customized to fit your business.
          </p>
        </header>

        <div className="space-y-16 md:space-y-8">
          {SOLUTIONS.map((solution, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={solution.title}
                className="grid items-center md:grid-cols-12 md:gap-8"
              >
                {/* Image */}
                <div
                  className={`relative aspect-video w-full overflow-hidden rounded-xl md:col-span-6 ${
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
                </div>

                {/* Text Content */}
                <div
                  className={`flex flex-col items-center text-center md:col-span-6 md:items-start md:text-left ${
                    isEven ? "md:pl-4" : "md:pr-4"
                  }`}
                >
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 md:text-lg">
                    {solution.description}
                  </p>
                  <Button
                    variant="link"
                    asChild
                    className="text-primary mt-4 h-auto p-0 font-semibold"
                  >
                    <Link
                      href={solution.href}
                      className="inline-flex items-center gap-2"
                    >
                      View All <ArrowRight className="h-4 w-4" />
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
