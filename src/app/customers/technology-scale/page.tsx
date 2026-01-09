import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/_components/ui/button"

export default function TechnologyScalePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container py-16 md:py-24">
        {/* Return Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link
              href="/customers"
              className="inline-flex items-center gap-2"
              aria-label="Return to customer stories"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Stories
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-xl">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              alt="TechFlow Systems"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4 inline-block rounded-lg bg-white p-4">
                <Image
                  src="/customers/logos/techflow.svg"
                  alt="TechFlow Systems"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                Scaled operations by 200% without adding staff
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Technology
                </span>
                <span className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  Scale
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              TechFlow Systems grew their business dramatically while maintaining
              efficiency with Paygos.
            </p>

            {/* Add your custom content here */}
            <p>
              Add more detailed story content, testimonials, metrics, and other
              information here. You can use any HTML/Tailwind markup you want.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
