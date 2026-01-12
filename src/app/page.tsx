import { Hero } from "./_components/sections/hero/Hero"
import { SolutionsSection } from "./_components/sections/solutions/SolutionsSection"
import { DataAnalytics } from "./_components/sections/solutions/DataAnalytics"
import { FieldSales } from "./_components/sections/solutions/FieldSales"
import { CTA } from "./_components/sections/cta/CTA"
import { CustomerStoriesCarousel } from "./_components/sections/customers/CustomerStoriesCarousel"

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <FieldSales />
      <DataAnalytics />
      <CustomerStoriesCarousel />
      <CTA />
    </>
  )
}
