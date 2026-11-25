import { NextResponse } from "next/server"

// Simple in-memory rate limit: 5 requests per 10 minutes per IP (best effort on serverless).
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_REQUESTS
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max)

export async function POST(request: Request) {
  const webhookUrl = process.env.CARGO_WEBHOOK_URL
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"

  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  // Honeypot: real visitors never fill the hidden "website" field. Pretend success for bots.
  if (clean(body.website, 200)) {
    return NextResponse.json({ success: true, message: "Message received" }, { status: 200 })
  }

  const name = clean(body.name, 100)
  const email = clean(body.email, 200)
  const company = clean(body.company, 150)
  const message = clean(body.message, 5000)

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 })
  }

  if (!webhookUrl) {
    // Never log visitor data or the webhook URL.
    console.error("Contact form: CARGO_WEBHOOK_URL is not set")
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 })
  }

  const payload = {
    records: [
      {
        id: `contact_${Date.now()}`,
        name,
        email,
        company,
        message,
        utm_source: clean(body.utm_source, 100),
        utm_medium: clean(body.utm_medium, 100),
        utm_campaign: clean(body.utm_campaign, 100),
        created_at: new Date().toISOString(),
      },
    ],
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      console.error("Contact form: webhook returned status", res.status)
      return NextResponse.json({ error: "Could not deliver message" }, { status: 502 })
    }
  } catch {
    console.error("Contact form: webhook request failed")
    return NextResponse.json({ error: "Could not deliver message" }, { status: 502 })
  }

  return NextResponse.json({ success: true, message: "Message received" }, { status: 200 })
}
