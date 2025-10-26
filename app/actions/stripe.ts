"use server"

import { stripe } from "@/lib/stripe"
import { SERVICES } from "@/lib/services"
import { headers } from "next/headers"

export async function createCheckoutSession(serviceId: string) {
  const service = SERVICES.find((s) => s.id === serviceId)

  if (!service) {
    throw new Error("Service not found")
  }

  const headersList = await headers()
  const host = headersList.get("host") || "localhost:3000"
  const protocol = host.includes("localhost") ? "http" : "https"
  const baseUrl = `${protocol}://${host}`

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: service.name,
            description: service.description,
          },
          unit_amount: service.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${baseUrl}/payment/return?session_id={CHECKOUT_SESSION_ID}`,
  })

  return { clientSecret: session.client_secret }
}

export async function getCheckoutSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  return {
    status: session.status,
    customerEmail: session.customer_details?.email,
  }
}
