import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import { CustomerStoriesCarousel } from "./CustomerStoriesCarousel"

export function Customers() {
  return (
    <section className="customers bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Header */}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            What would you do with more time?
          </h2>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Over 2.5M+ hours saved for 5,000+ customers.
          </p>
        </div>
      </div>

      {/* Carousel - Full Width */}
      <CustomerStoriesCarousel />

      <div className="container">
        {/* Button */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="btn btn-secondary">
            <Link
              href="/customers"
              className="inline-flex items-center gap-2"
              aria-label="View all customer success stories"
            >
              View all customer stories
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
