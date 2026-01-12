import Link from "next/link"
import Image from "next/image"
import { SOLUTIONS } from "@/app/solutions/data/solutions"

export function SolutionsSection() {
  return (
    <section className="solutions bg-gray-50">
      <div className="container">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Power Your Growth with Sales Acceleration
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Choose from these modules, all customized to fit your business.
          </p>
        </header>

        {/* Grid: 1 col mobile, 2-3 cols desktop */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
          {SOLUTIONS.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                aria-label={`View ${item.title} solution details`}
              >
                <article className="h-full rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md">
                  {/* Mobile: Show icon only */}
                  <div className="my-8 md:hidden">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <small>{item.subtitle}</small>
                  {/* Desktop: Show image only */}
                  <div className="relative my-4 hidden h-48 overflow-hidden rounded-lg bg-gray-100 md:block">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
