import Image from "next/image"
import { BookCallButton } from "../cta/BookCallButton"
import { CustomersLogosCarousel } from "../customers/CustomersLogosCarousel"

export function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-b-xl"
      style={{
        background:
          "linear-gradient(270deg, rgba(255,255,255,0.22) 0%, rgba(0,0,0,0.18) 100%), #134E4A",
      }}
    >
      {/* PATTERN OVERLAY */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115'><rect width='100%' height='100%' fill='hsla(240,6.7%,17.6%,1)'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z' stroke='%235eead4' stroke-width='1' fill='none'/></pattern></defs><rect width='800%' height='800%' fill='url(%23a)'/></svg>")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        {/* HERO BODY */}
        <div className="relative flex items-center pt-8 md:pt-16">
          {/* CONTENT */}
          <div className="relative mx-auto max-w-screen-xl px-4 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <article className="text-center text-white lg:text-left">
                <div className="mb-6 flex justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">2,000+</span>
                    <span className="text-muted-foreground">
                      5-star reviews
                    </span>
                  </div>
                </div>

                <h1>
                  Sell More. <br />
                  Spend Less.
                </h1>

                <p className="mt-6 max-w-[420px]">
                  This is a subtitle that is very long and nice.
                  <br /> Explain the main value proposition clearly and
                  confidently in one or two lines.
                </p>

                <div className="mt-8 flex justify-center lg:justify-start">
                  <BookCallButton />
                </div>
              </article>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="pointer-events-none absolute top-8 right-0 hidden lg:block">
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
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className="relative mt-10 px-4 lg:hidden">
          <Image
            src="/paygos-hero.svg"
            alt="Paygos product UI"
            width={1200}
            height={800}
            className="mx-auto w-80"
            priority
          />
        </div>

        {/* LOGOS */}
        <div className="my-8 md:mt-24">
          <CustomersLogosCarousel />
        </div>
      </div>
    </section>
  )
}
