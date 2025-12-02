import { getCheckoutSession } from "@/app/actions/stripe"
import Link from "next/link"

export default async function PaymentReturn({ searchParams }: { searchParams: { session_id: string } }) {
  const sessionId = searchParams.session_id

  if (!sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Invalid Session</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const session = await getCheckoutSession(sessionId)

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {session.status === "complete" ? (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful!</h1>
            <p className="text-slate-600 mb-6">
              Thank you for your purchase. A confirmation email has been sent to {session.customerEmail}.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Return to Home
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Payment Processing</h1>
            <p className="text-slate-600 mb-6">Your payment is being processed. Please check back later.</p>
            <Link href="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
