"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FormStatus = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    setStatus("sending")

    try {
      await emailjs.sendForm(
        "service_8e0otbs",
        "template_2eour8r",
        formRef.current,
        "LtEcgbsTKwZo1-fbA"
      )
      setStatus("success")
      formRef.current.reset()
    } catch (error) {
      setStatus("error")
      console.error("EmailJS error:", JSON.stringify(error, null, 2))
      console.error("Full error object:", error)

      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else if (typeof error === "object" && error !== null) {
        const err = error as Record<string, unknown>
        if (err.text) {
          setErrorMessage(String(err.text))
        } else if (err.status) {
          setErrorMessage(`Status ${err.status}: ${err.text || "Request failed"}`)
        } else {
          setErrorMessage(JSON.stringify(error))
        }
      } else {
        setErrorMessage("Unknown error occurred")
      }
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="user_name">Name</Label>
        <Input
          id="user_name"
          name="user_name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="user_email">Email</Label>
        <Input
          id="user_email"
          name="user_email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          required
          rows={5}
          className={cn(
            "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            "resize-none"
          )}
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-600">
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong: {errorMessage || "Please try again later."}
        </p>
      )}
    </form>
  )
}
