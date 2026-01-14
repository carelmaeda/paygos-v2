import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PatternHexagon } from "@/components/ui/patterns"

const FEATURES = [
  {
    title: "Our Field Sales Automation can do this.",
    description: "This is a subtitle that is very long and nice.",
    image:
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop",
    href: "/solutions/fsa",
  },
  {
    title: "Streamline your sales process effortlessly.",
    description:
      "Empower your field team with real-time data and automation tools.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    href: "/solutions/fsa",
  },
]

export function FieldSales() {
  return (
    <section className="relative bg-teal-950 py-16 text-white md:py-24">
      <PatternHexagon />
      <div className="section-container relative z-10 px-4 md:px-6">
        <header className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-teal-400 uppercase">
            Field Sales Automation
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Field Sales Automation can save your company both time and
            money.
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
                  className={`relative aspect-video w-full overflow-hidden rounded-xl md:col-span-6 ${
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
                  className={`flex flex-col items-center text-center md:col-span-6 md:items-start md:text-left ${
                    isEven ? "md:pl-4" : "md:pr-4"
                  }`}
                >
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-teal-100/80 md:text-lg">
                    {feature.description}
                  </p>
                  <Button
                    variant="link"
                    asChild
                    className="mt-4 h-auto p-0 font-semibold text-white transition-colors hover:text-teal-400"
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
