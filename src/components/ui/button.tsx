import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex w-full md:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 md:[&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "text-black bg-teal-300 hover:bg-teal-400 shadow-sm active:scale-[0.98] md:active:scale-100",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive/60",
        outline:
          "border-2 md:border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-teal-900 text-white hover:bg-teal-950 border border-teal-800",
        ghost: "hover:bg-teal-800/80 hover:border",
        link: "text-teal-400 underline-offset-4 hover:underline",
      },
      size: {
        // h-12 (48px) on mobile -> h-10 (40px) on desktop
        default: "h-12 px-6 py-3 md:h-10 md:px-4 md:py-2 md:text-sm",
        // h-10 (40px) on mobile -> h-9 (36px) on desktop
        sm: "h-10 px-4 text-sm md:h-8 md:px-3 md:text-xs",
        // h-14 (56px) on mobile -> h-12 (48px) on desktop
        lg: "h-14 px-10 text-lg md:h-12 md:px-8 md:text-base",
        icon: "size-12 md:size-10",
        "icon-sm": "size-10 md:size-8",
        "icon-lg": "size-14 md:size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
