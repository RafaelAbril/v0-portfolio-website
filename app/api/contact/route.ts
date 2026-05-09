import { NextResponse } from "next/server"

export async function POST(request: Request) {
  // Cargo Webhook URL must be evaluated at runtime, inside the handler
  const CARGO_WEBHOOK_URL = process.env.CARGO_WEBHOOK_URL

  try {
    const body = await request.json()
    const { name, email, company, message, utm_source, utm_medium, utm_campaign } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Payload to send to Cargo
    const payload = {
      name,
      email,
      company: company || "",
      message,
      utm_source: utm_source || "",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
      source: "portfolio_contact_form",
      submitted_at: new Date().toISOString(),
    }

    // If Cargo webhook is configured, forward the data
    if (CARGO_WEBHOOK_URL) {
      try {
        const cargoResponse = await fetch(CARGO_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (!cargoResponse.ok) {
          console.error("Failed to forward to Cargo:", await cargoResponse.text())
          // Depending on requirements, we might still want to return success to the user 
          // even if forwarding failed, but log it for debugging.
        }
      } catch (err) {
        console.error("Error communicating with Cargo webhook:", err)
      }
    } else {
      // For development/testing before Cargo is set up
      console.warn("CARGO_WEBHOOK_URL is not set. Payload would have been:", payload)
    }

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error in contact route:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
