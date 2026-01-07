import { Hero } from "./_components/partials/Hero"
import { SolutionsSection } from "./_components/partials/SolutionsSection"
import { DataAnalytics } from "./_components/partials/DataAnalytics"
import { FieldSales } from "./_components/partials/FieldSales"

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <FieldSales />
      <DataAnalytics />
    </>
  )
}
