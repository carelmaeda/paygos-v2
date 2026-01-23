"use client"

import Image from "next/image"
import { PatternHexagon } from "@/components/ui/patterns"
import { BookCallButton } from "../cta/BookCallButton"
import { CustomersLogosCarousel } from "../customers/CustomersLogosCarousel"
import { MotionSection } from "@/components/motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cyan-950 py-8">
      {/* PATTERN OVERLAY */}
      <PatternHexagon />
      <div className="relative z-10 mx-auto max-w-screen-2xl">
        {/* HERO BODY */}
        <div className="relative flex items-center pt-16">
          {/* CONTENT */}
          <div className="relative mx-auto max-w-screen-xl px-4 md:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <article className="text-center text-white lg:text-left">
                <div className="mb-6 flex hidden justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">2,000+</span>
                    <span className="text-muted-foreground">
                      5-star reviews
                    </span>
                  </div>
                </div>

                <MotionSection
                  as="div"
                  variant="slideUp"
                  viewport={{ once: true }}
                >
                  <h1>
                    Sell More. <br />
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Spend Less.
                    </span>
                  </h1>
                </MotionSection>

                <MotionSection
                  as="p"
                  variant="slideUp"
                  delay={0.1}
                  viewport={{ once: true }}
                  className="mt-6 max-w-[450px]"
                >
                  Paygos is a customizable sales acceleration platform designed
                  to drive incremental revenue, automate manual processes and
                  surface actionable sales data & analytics.
                </MotionSection>

                <MotionSection
                  as="div"
                  variant="slideUp"
                  delay={0.2}
                  viewport={{ once: true }}
                  className="mt-8 flex justify-center lg:justify-start"
                >
                  <BookCallButton />
                </MotionSection>
              </article>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <MotionSection
            as="div"
            variant="fadeIn"
            delay={0.3}
            viewport={{ once: true }}
            className="pointer-events-none absolute top-8 right-0 hidden lg:block"
          >
            <div className="w-[500px] xl:w-[570px]">
              <Image
                src="/paygos-hero.svg"
                alt="Paygos product UI"
                width={1600}
                height={1000}
                priority
                className="h-auto w-full max-w-none"
              />
            </div>
          </MotionSection>
        </div>

        {/* MOBILE IMAGE */}
        <MotionSection
          as="div"
          variant="fadeIn"
          delay={0.2}
          viewport={{ once: true }}
          className="relative mt-10 px-4 lg:hidden"
        >
          <Image
            src="/paygos-hero.svg"
            alt="Paygos product UI"
            width={1200}
            height={800}
            className="mx-auto w-80"
            priority
          />
        </MotionSection>

        {/* LOGOS */}
        <MotionSection
          as="div"
          variant="fadeIn"
          delay={0.4}
          viewport={{ once: true }}
          className="my-8"
        >
          <CustomersLogosCarousel />
        </MotionSection>
      </div>
    </section>
  )
}
