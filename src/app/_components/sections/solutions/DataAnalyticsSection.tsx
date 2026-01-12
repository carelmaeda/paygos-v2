import Image from "next/image"
import { Activity, FileText, BarChart3 } from "lucide-react"

const ANALYTICS_FEATURES = [
  {
    title: "Real-Time Dashboards",
    subtitle: "Monitor key metrics as they happen.",
    icon: Activity,
    image: "/analytics/dashboards.svg",
    slug: "dashboards",
  },
  {
    title: "Custom Reports",
    subtitle: "Build reports tailored to your needs.",
    icon: FileText,
    image: "/analytics/reports.svg",
    slug: "reports",
  },
  {
    title: "Sales Analytics",
    subtitle: "Track performance across all channels.",
    icon: BarChart3,
    image: "/analytics/sales.svg",
    slug: "sales-analytics",
  },
]

export function DataAnalytics() {
  return (
    <section className="data-analytics bg-gray-50">
      <div className="container">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2>Data-Driven Insights at Your Fingertips</h2>
          <p>
            Transform raw data into actionable intelligence with our
            comprehensive analytics suite.
          </p>
        </header>

        {/* Grid: 1 col mobile, 2-3 cols desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {ANALYTICS_FEATURES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.slug}
                className="rounded-lg px-6 pt-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Mobile: Show icon only */}
                <div className="mb-4 md:hidden">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                {/* Desktop: Show image only */}
                <div className="relative hidden h-48 overflow-hidden rounded-lg md:block">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
