import Link from "next/link"
import { Button } from "@/app/_components/ui/button" // adjust path if needed

export function BookCallButton() {
  return (
    <Button size="lg" asChild>
      <Link href="mailto:johndoe@fakeemail.com">Book a Call</Link>
    </Button>
  )
}
