import type { Metadata } from "next"
import { PatternWaves } from "@/components/ui/patterns"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { ContactForm } from "@/components/sections/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | Paygos",
  description: "Get in touch with our team. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative flex min-h-[75vh] bg-teal-950"
        data-navbar-theme="dark"
      >
        <PatternWaves />
        <div className="text-hero">
          <small className="text-teal-400">Contact</small>
          <h1>
            Book a {""}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Call
            </span>
          </h1>
          <p>
            Let&apos;s discuss how Paygos can simplify and scale your sales
            operations.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Contact Form Section */}
      <section className="bg-white py-16 md:py-24" data-navbar-theme="light">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Send Us a Message
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
