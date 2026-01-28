import emailjs from "@emailjs/browser"

export interface RoiEmailData {
  user_email: string
  mode: string
  sales_reps: string
  distributors: string
  customers: string
  engagement_increase: string
  admin_hours_saved: string
  sales_rep_hours_saved: string
}

export async function sendRoiResults(data: RoiEmailData): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ROI!,
    data as unknown as Record<string, unknown>,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
}
