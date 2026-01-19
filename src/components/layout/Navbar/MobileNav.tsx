import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { BookCallButton } from "@/components/sections/cta/BookCallButton"
import { SOLUTIONS } from "./SolutionsMenu"
import type { NavbarTheme } from "./useNavbarTheme"
import { cn } from "@/lib/utils"

// ============================================
// PROPS
// ============================================

interface MobileNavProps {
  theme: NavbarTheme
}

// ============================================
// COMPONENT
// ============================================

/**
 * MobileNav Component
 * Mobile navigation drawer with hamburger trigger
 * Visible only on mobile (md:hidden)
 */
export function MobileNav({ theme }: MobileNavProps) {
  const iconColor = theme === "dark" ? "text-white" : "text-black"
  const textColor = theme === "dark" ? "text-white" : "text-black"

  return (
    <Sheet>
      {/* Hamburger Trigger Button */}
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className={`${iconColor} bg-transparent md:hidden`}
          aria-label="Open navigation menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      {/* Mobile Drawer Content */}
      <SheetContent
        side="right"
        hideCloseButton
        className={`w-full bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md ${textColor}`}
      >
        <SheetTitle className="sr-only">Navigation Menu </SheetTitle>

        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-5">
          <SheetClose asChild>
            <Link href="/">
              <Image
                src="/paygos/logo-full-white.webp"
                alt="Brand Logo"
                width={130}
                height={50}
                priority
                className="hover:opacity-70"
              />
            </Link>
          </SheetClose>
          <SheetClose className="focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none">
            <X className="size-8" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 p-4">
          {/* Solutions Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="solutions" className="px-5">
              <AccordionTrigger>Solutions</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 rounded-lg bg-white p-6 text-black">
                {SOLUTIONS.map((item) => {
                  const Icon = item.icon
                  return (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 py-3"
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
            <Link
              href="/customers"
              className={cn(
                navigationMenuTriggerStyle(),
                "w-full justify-start py-8"
              )}
            >
              Customers
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/roi"
              className={cn(
                navigationMenuTriggerStyle(),
                "w-full justify-start py-8"
              )}
            >
              ROI Calculator
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/about"
              className={cn(
                navigationMenuTriggerStyle(),
                "w-full justify-start py-8"
              )}
            >
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
