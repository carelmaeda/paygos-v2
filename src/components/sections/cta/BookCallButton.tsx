import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BookCallButton() {
  return (
    <Button size="lg" asChild>
      <Link href="/contact" aria-label="Book a Call">
        Book a Call
      </Link>
    </Button>
  )
}
