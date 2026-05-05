"use client"

import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { createCheckoutSession } from "@/app/actions/stripe"

let stripePromise: Promise<any> | null = null;

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
} else {
  console.warn("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}

export default function Checkout({ serviceId }: { serviceId: string }) {
  if (!stripePromise) {
    return (
      <div className="w-full p-4 border border-red-200 bg-red-50 text-red-600 rounded-md">
        Payment system is currently unavailable (Stripe configuration missing).
      </div>
    );
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
