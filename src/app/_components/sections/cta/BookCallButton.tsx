import Link from "next/link"
import { Button } from "@/app/_components/ui/button" // adjust path if needed

interface BookCallButtonProps {
  className?: string
}

export function BookCallButton({ className }: BookCallButtonProps) {
  return (
    <Button asChild className="btn btn-primary">
      <Link href="mailto:johndoe@fakeemail.com">Book a Call</Link>
    </Button>
  )
}
