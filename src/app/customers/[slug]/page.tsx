import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import { customerStories } from "@/app/_components/sections/customers/data/customer-stories"

interface CustomerStoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function CustomerStoryPage({
  params,
}: CustomerStoryPageProps) {
  const { slug } = await params
  const story = customerStories.find((s) => s.slug === slug)

  if (!story) {
    notFound()
  }

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
              src={story.backgroundImage}
              alt={story.companyName}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4 inline-block rounded-lg bg-white p-4">
                <Image
                  src={story.companyLogo}
                  alt={story.companyName}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                {story.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-gray-600">{story.excerpt}</p>
          {/* Add more content sections here as needed */}
        </div>
      </div>
    </main>
  )
}

// Generate static params for static generation
export function generateStaticParams() {
  return customerStories.map((story) => ({
    slug: story.slug,
  }))
}
