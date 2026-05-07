"use client"

import { useState } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    
    // Capture basic UTM params if they exist in the URL
    let utmSource = ""
    let utmMedium = ""
    let utmCampaign = ""
    
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      utmSource = urlParams.get("utm_source") || ""
      utmMedium = urlParams.get("utm_medium") || ""
      utmCampaign = urlParams.get("utm_campaign") || ""
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 
          className="text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-heading, 'Archivo', sans-serif)" }}
        >
          Message Received
        </h3>
        <p 
          className="text-white/70 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
        >
          Thank you for reaching out. I'll review your message and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6 text-left relative z-10">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-white/80" style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/30 transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white/80" style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/30 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-medium text-white/80" style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
          Company <span className="text-white/40 font-normal">(Optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/30 transition-all"
          placeholder="Acme Corp"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white/80" style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/30 transition-all resize-none"
          placeholder="How can we work together?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-white text-[#0F172A] font-bold rounded-lg hover:bg-white/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-heading, 'Archivo', sans-serif)" }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
