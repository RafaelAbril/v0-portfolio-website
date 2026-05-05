"use client"

import { useState } from "react"
import { SERVICES } from "@/lib/services"
import Checkout from "./Checkout"

const CheckIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0 mt-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function ServiceOffering() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleGetStarted = (serviceId: string) => {
    if (serviceId === "tailor-made") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      setSelectedService(serviceId)
    }
  }

  if (selectedService) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedService(null)}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </button>
          <Checkout serviceId={selectedService} />
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <p className="section-label mb-3">03 — Services</p>
          <h2
            style={{
              fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.04em",
              color: "#0F172A",
              lineHeight: 1.1,
            }}
          >
            Service Offerings
          </h2>
          <p className="mt-3 text-[#64748B] max-w-xl"
            style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
            Leverage my expertise to transform your product organisation and optimise your financial flows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const isFeatured = idx === 0
            return (
              <div
                key={service.id}
                className={`relative rounded-xl border flex flex-col animate-fade-in-up overflow-hidden transition-all duration-200 hover:-translate-y-1 ${
                  isFeatured
                    ? "bg-[#0F172A] border-[#0F172A] text-white"
                    : "bg-white border-[#E2E8F0] text-[#0F172A] hover:border-[#334155] hover:shadow-lg"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {isFeatured && (
                  <div className="px-6 pt-5 pb-0">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded bg-[#0369A1] text-white"
                      style={{ fontFamily: "var(--font-body)" }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-grow">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      letterSpacing: "-0.03em",
                      color: isFeatured ? "#FFFFFF" : "#0F172A",
                    }}
                  >
                    {service.name}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      color: isFeatured ? "#94A3B8" : "#64748B",
                      fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1.5">
                    {typeof service.priceInCents === "number" ? (
                      <>
                        <span
                          style={{
                            fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
                            fontWeight: 800,
                            fontSize: "2rem",
                            letterSpacing: "-0.04em",
                            color: isFeatured ? "#FFFFFF" : "#0F172A",
                          }}
                        >
                          {Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(service.priceInCents / 100)}
                        </span>
                        {service.duration && (
                          <span className="text-sm" style={{ color: isFeatured ? "#64748B" : "#94A3B8" }}>
                            / {service.duration}
                          </span>
                        )}
                      </>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
                          fontWeight: 800,
                          fontSize: "1.5rem",
                          letterSpacing: "-0.03em",
                          color: isFeatured ? "#FFFFFF" : "#0F172A",
                        }}
                      >
                        {service.priceInCents}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm"
                        style={{ color: isFeatured ? "#CBD5E1" : "#334155", fontFamily: "var(--font-body)" }}>
                        <span style={{ color: isFeatured ? "#38BDF8" : "#0369A1" }}>
                          <CheckIcon />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleGetStarted(service.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                      isFeatured
                        ? "bg-[#0369A1] hover:bg-[#0284C7] text-white"
                        : "bg-[#0F172A] hover:bg-[#1E293B] text-white"
                    }`}
                    style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
                  >
                    {service.id === "tailor-made" ? "Contact Me" : "Get Started"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
