import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import { CustomersLogosCarousel } from "../_components/sections/customers/CustomersLogosCarousel"

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container py-16 md:py-24">
        {/* Return Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Return to homepage"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Customer Stories
          </h1>
        </div>
        <CustomersLogosCarousel />

        <div></div>
      </div>
    </main>
  )
}
