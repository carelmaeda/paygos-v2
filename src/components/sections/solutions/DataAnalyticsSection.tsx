import Image from "next/image"
import { Activity, FileText, BarChart3, ArrowUpRight } from "lucide-react"

const ANALYTICS_FEATURES = [
  {
    title: "Real-Time Dashboards",
    subtitle:
      "Monitor key metrics as they happen with live data streaming and instant updates.",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    slug: "dashboards",
    className: "md:col-span-2 md:row-span-2 min-h-[400px]",
  },
  {
    title: "Custom Reports",
    subtitle: "Build high-impact reports tailored to your needs.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    slug: "reports",
    className: "md:col-span-1 min-h-[300px]",
  },
  {
    title: "Sales Analytics",
    subtitle: "Track performance across all channels.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
    slug: "sales-analytics",
    className: "md:col-span-1 min-h-[300px]",
  },
]

export function DataAnalytics() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="section-container px-4 md:px-6">
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Data-Driven Insights
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-600">
            Transform raw data into actionable intelligence with our analytics
            suite.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
          {ANALYTICS_FEATURES.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.slug}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-slate-200 p-8 transition-all duration-500 hover:shadow-2xl ${item.className}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:via-slate-950/60" />
                </div>

                {/* Content - Positioned over the image */}
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors group-hover:border-teal-500 group-hover:bg-teal-500">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                    {item.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 max-w-[300px] text-sm text-slate-200">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
