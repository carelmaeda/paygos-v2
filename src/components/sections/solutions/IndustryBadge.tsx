import { Badge } from "@/components/ui/badge"
import { PawPrint, Pill, Candy } from "lucide-react"

export function IndustryBadge() {
  return (
    /* Ideal FOR */
    <section className="mx-auto max-w-7xl p-8">
      <div className="section-container">
        <h2 className="mb-8 text-center">Ideal For</h2>
        <div className="my-4 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="badge badge-vet">
            <PawPrint size={64} />
            Veterinary
          </Badge>
          <Badge variant="secondary" className="badge badge-pharma">
            <Pill size={64} />
            Pharmaceutical
          </Badge>
          <Badge variant="secondary" className="badge badge-confectionary">
            <Candy size={64} />
            Confectionary
          </Badge>
        </div>
      </div>
    </section>
  )
}
