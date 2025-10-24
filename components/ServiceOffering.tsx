"use client"

import { useState } from "react"
import { SERVICES } from "@/lib/services"
import Checkout from "./Checkout"

export default function ServiceOffering() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  if (selectedService) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedService(null)}
            className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Service Offerings</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Leverage my expertise to transform your product organization and optimize your financial flows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 hover:border-primary/30 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.name}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">
                    {Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(
                      service.priceInCents / 100,
                    )}
                  </span>
                  {service.duration && <span className="text-slate-500">/ {service.duration}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedService(service.id)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
