import { Badge } from "@/components/ui/badge"
import { PawPrint, Pill, Candy } from "lucide-react"
import { MotionSection } from "@/components/motion"

export function IndustryBadge() {
  return (
    /* Ideal FOR */
    <section className="section-container mx-auto max-w-7xl pb-8">
      <MotionSection as="h3" variant="slideUp" className="text-center">
        Ideal For
      </MotionSection>
      <div className="my-3 flex flex-wrap justify-center gap-2">
        <MotionSection as="div" variant="scaleIn" delay={0.1}>
          <Badge variant="secondary" className="bg-emerald-200 px-6 py-3">
            <PawPrint size={64} />
            Veterinary
          </Badge>
        </MotionSection>
        <MotionSection as="div" variant="scaleIn" delay={0.15}>
          <Badge variant="secondary" className="bg-rose-200 px-6 py-3">
            <Pill size={64} />
            Pharmaceutical
          </Badge>
        </MotionSection>
        <MotionSection as="div" variant="scaleIn" delay={0.2}>
          <Badge variant="secondary" className="bg-sky-200 px-6 py-3">
            <Candy size={64} />
            Consumer Packaged Goods
          </Badge>
        </MotionSection>
      </div>
    </section>
  )
}
