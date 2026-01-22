import emailjs from "@emailjs/browser"

export interface RoiEmailData {
  user_email: string
  mode: string
  sales_reps: string
  distributors: string
  customers: string
  engagement_increase: string
  product_interest_increase: string
  customer_traffic_increase: string
  admin_hours_saved: string
  sales_rep_hours_saved: string
}

export async function sendRoiResults(data: RoiEmailData): Promise<void> {
  await emailjs.send(
    "service_8e0otbs",
    "template_09cu4ym",
    data as unknown as Record<string, unknown>,
    "LtEcgbsTKwZo1-fbA"
  )
}
