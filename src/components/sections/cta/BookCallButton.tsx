import Link from "next/link"
import { forwardRef } from "react"
import { Button } from "@/components/ui/button"

type BookCallButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "href"
>

export const BookCallButton = forwardRef<HTMLAnchorElement, BookCallButtonProps>(
  (props, ref) => {
    return (
      <Button size="lg" asChild>
        <Link ref={ref} href="/contact" aria-label="Book a Call" {...props}>
          Book a Call
        </Link>
      </Button>
    )
  }
)

BookCallButton.displayName = "BookCallButton"
