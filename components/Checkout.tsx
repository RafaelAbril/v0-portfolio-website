"use client"

import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { createCheckoutSession } from "@/app/actions/stripe"

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = stripeKey ? loadStripe(stripeKey) : null

export default function Checkout({ serviceId }: { serviceId: string }) {
  if (!stripePromise) {
    console.warn("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set")
    return (
      <div className="p-4 text-amber-600 bg-amber-50 rounded-md border border-amber-200 text-sm">
        Checkout is currently disabled (Configuration missing)
      </div>
    )
  }

  return (
    <div className="w-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          fetchClientSecret: async () => {
            const { clientSecret } = await createCheckoutSession(serviceId)
            return clientSecret!
          },
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
