import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion"
import { navigationMenuTriggerStyle } from "@/app/_components/ui/navigation-menu"
import { BookCallButton } from "@/app/_components/sections/cta/BookCallButton"
import { SOLUTIONS } from "./SolutionsMenu"

// ============================================
// COMPONENT
// ============================================

/**
 * MobileNav Component
 * Mobile navigation drawer with hamburger trigger
 * Visible only on mobile (md:hidden)
 */
export function MobileNav() {
  return (
    <Sheet>
      {/* Hamburger Trigger Button */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* Mobile Drawer Content */}
      <SheetContent side="right" className="w-full">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="mt-6 flex flex-col gap-4">
          {/* Solutions Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="solutions" className="border-0">
              <AccordionTrigger className="py-2 text-sm font-semibold hover:no-underline">
                Solutions
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 pt-1 pl-4">
                {SOLUTIONS.map((item) => {
                  const Icon = item.icon
                  return (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-sm"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </Link>
                    </SheetClose>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Mobile Navigation Links */}
          <SheetClose asChild>
            <Link href="/customers" className={navigationMenuTriggerStyle()}>
              Customers
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/roi" className={navigationMenuTriggerStyle()}>
              ROI Calculator
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about" className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </SheetClose>

          {/* Mobile CTA Button */}
          <SheetClose asChild>
            <BookCallButton />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
