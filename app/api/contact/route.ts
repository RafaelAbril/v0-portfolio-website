import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const data = await request.json()

        // Validate data (basic validation)
        if (!data.name || !data.email || !data.message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

        if (n8nWebhookUrl) {
            // Forward to n8n
            const n8nResponse = await fetch(n8nWebhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    source: "portfolio-contact-form",
                    timestamp: new Date().toISOString(),
                }),
            })

            if (!n8nResponse.ok) {
                console.error("Failed to forward to n8n", await n8nResponse.text())
                // We still return success to the user so they don't see an error
                // but we log it for the admin.
            }
        } else {
            console.log("Contact form submission (no N8N_WEBHOOK_URL set):", data)
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error processing contact form:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
