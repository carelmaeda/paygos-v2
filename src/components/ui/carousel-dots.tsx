"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel"

function CarouselDots({ className, ...props }: React.ComponentProps<"div">) {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onDotClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  const onSelect = React.useCallback(() => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
  }, [api])

  React.useEffect(() => {
    if (!api) return

    setScrollSnaps(api.scrollSnapList())
    onSelect()

    api.on("select", onSelect)
    api.on("reInit", onSelect)
    api.on("reInit", () => setScrollSnaps(api.scrollSnapList()))

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  return (
    <div
      className={cn("flex justify-center gap-2", className)}
      data-slot="carousel-dots"
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === selectedIndex ? "true" : undefined}
          onClick={() => onDotClick(index)}
          className={cn(
            "h-2.5 rounded-full transition-all duration-300",
            index === selectedIndex
              ? "w-6 bg-teal-400"
              : "w-2.5 bg-white/30 hover:bg-white/50"
          )}
        />
      ))}
    </div>
  )
}

export { CarouselDots }
