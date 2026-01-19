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
        className="relative flex bg-slate-900 py-24"
        data-navbar-theme="dark"
      >
        <PatternWaves />
        <div className="text-hero">
          <small className="text-teal-400">Contact</small>
          <h1>
            Book a {""}
            <span className="text-highlight">Call</span>
          </h1>
          <p>
            Let&apos;s discuss how Paygos can simplify and scale your sales
            operations.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Contact Form Section */}
      <section className="bg-white py-8" data-navbar-theme="light">
        <div className="section-container">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
