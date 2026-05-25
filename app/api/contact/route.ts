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

    // Payload to send to Cargo - Try different format with fields property
    const cargoPayload = {
      records: [
        {
          fields: {
            name,
            email,
            company: company || "",
            message
          }
        }
      ]
    }

    // If Cargo webhook is configured, forward the data
    if (CARGO_WEBHOOK_URL) {
      try {
        console.log("Sending to Cargo:", CARGO_WEBHOOK_URL, cargoPayload)
        
        const cargoResponse = await fetch(CARGO_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cargoPayload),
        })

        console.log("Cargo response status:", cargoResponse.status)
        const responseText = await cargoResponse.text()
        console.log("Cargo response body:", responseText)

        if (!cargoResponse.ok) {
          console.error("Failed to forward to Cargo. Status:", cargoResponse.status, "Body:", responseText)
          // Depending on requirements, we might still want to return success to the user 
          // even if forwarding failed, but log it for debugging.
        } else {
          console.log("Successfully forwarded to Cargo")
        }
      } catch (err) {
        console.error("Error communicating with Cargo webhook:", err)
      }
    } else {
      // For development/testing before Cargo is set up
      console.warn("CARGO_WEBHOOK_URL is not set. Payload would have been:", cargoPayload)
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
