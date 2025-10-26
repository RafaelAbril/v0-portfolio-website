"use server"

import { stripe } from "@/lib/stripe"
import { SERVICES } from "@/lib/services"

export async function createCheckoutSession(serviceId: string) {
  const service = SERVICES.find((s) => s.id === serviceId)

  if (!service) {
    throw new Error("Service not found")
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price_data: {
          currency: "eur", // Changed from "usd" to "eur" to match pricing display
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
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment/return?session_id={CHECKOUT_SESSION_ID}`,
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
