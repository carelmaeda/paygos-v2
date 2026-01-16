"use client"

import { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { CustomerStoryCard } from "./CustomerStoryCard"
import { customerStories } from "./data/customer-stories"
import { ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const SWIPER_CONFIG = {
  modules: [Pagination, Navigation],
  spaceBetween: 24,
  slidesPerView: 1.2,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}

export function CustomerStoriesCarousel() {
  const slides = useMemo(
    () =>
      customerStories.map((story) => (
        <SwiperSlide key={story.id} className="pb-14">
          <CustomerStoryCard story={story} />
        </SwiperSlide>
      )),
    []
  )

  return (
    <div className="mt-8 overflow-hidden">
      <div className="section-container relative md:px-12">
        <button className="nav-prev absolute top-1/2 left-0 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-all hover:bg-black/40 disabled:opacity-0 md:flex">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="nav-next absolute top-1/2 right-0 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-all hover:bg-black/40 disabled:opacity-0 md:flex">
          <ChevronRight className="h-6 w-6" />
        </button>

        <Swiper
          {...SWIPER_CONFIG}
          navigation={{ prevEl: ".nav-prev", nextEl: ".nav-next" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="!overflow-visible"
        >
          {slides}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 12px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}
