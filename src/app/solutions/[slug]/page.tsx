import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  RotateCcw,
  CreditCard,
  Megaphone,
  UserCog,
} from "lucide-react"

const SOLUTIONS = [
  {
    title: "Optimized Ordering",
    subtitle: "Scale up your ordering process.",
    icon: ShoppingCart,
    image: "/solutions/ordering.svg",
    slug: "ordering",
  },
  {
    title: "Rebates",
    subtitle: "Maximize ROI. Drive Growth. Automate Success.",
    icon: TrendingUp,
    image: "/solutions/rebates.svg",
    slug: "rebates",
  },
  {
    title: "Training Management",
    subtitle: "Transforms training into a loyalty-building journey.",
    icon: GraduationCap,
    image: "/solutions/training.svg",
    slug: "training",
  },
  {
    title: "Returns Management",
    subtitle: "Minimize Returns, Maximize Control.",
    icon: RotateCcw,
    image: "/solutions/returns.svg",
    slug: "returns",
  },
  {
    title: "Payments",
    subtitle: "Smarter, Faster, More Secure.",
    icon: CreditCard,
    image: "/solutions/payments.svg",
    slug: "payments",
  },
  {
    title: "Marketing",
    subtitle: "Keep your customers up-to-date.",
    icon: Megaphone,
    image: "/solutions/marketing.svg",
    slug: "marketing",
  },
  {
    title: "Field Sales Automation",
    subtitle: "Save your company both time and money.",
    icon: UserCog,
    image: "/solutions/fsa.svg",
    slug: "fsa",
  },
]

interface SolutionPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({
    slug: solution.slug,
  }))
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params
  const solution = SOLUTIONS.find((s) => s.slug === slug)

  if (!solution) {
    notFound()
  }

  const Icon = solution.icon

  return (
    <main className="py-16 md:py-24">
      <div className="container">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {solution.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {solution.subtitle}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mx-auto mb-12 h-96 max-w-4xl overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Placeholder Content */}
        <div className="prose mx-auto max-w-3xl">
          <p className="text-gray-600">
            Detailed content for {solution.title} will be added here.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-teal-700 hover:text-teal-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
