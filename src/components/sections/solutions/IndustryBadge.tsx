import { Badge } from "@/components/ui/badge"
import { PawPrint, Pill, Candy } from "lucide-react"

export function IndustryBadge() {
  return (
    /* Ideal FOR */
    <section className="section-container mx-auto max-w-7xl pb-8">
      <h3 className="text-center">Ideal For</h3>
      <div className="my-3 flex flex-wrap justify-center gap-2">
        <Badge variant="secondary" className="bg-emerald-200 px-6 py-3">
          <PawPrint size={64} />
          Veterinary
        </Badge>
        <Badge variant="secondary" className="bg-rose-200 px-6 py-3">
          <Pill size={64} />
          Pharmaceutical
        </Badge>
        <Badge variant="secondary" className="bg-sky-200 px-6 py-3">
          <Candy size={64} />
          Confectionary
        </Badge>
      </div>
    </section>
  )
}
