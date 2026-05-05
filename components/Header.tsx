"use client"

import { useEffect, useState } from "react"

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <header
      className="relative bg-[#F8FAFC] pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E2E8F0]"
      aria-label="Hero section"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0F172A 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Horizontal rule accent top */}
      <div className="absolute top-14 left-0 right-0 h-px bg-[#E2E8F0]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <p
          className={`section-label mb-8 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0ms" }}
        >
          Sr. Product Manager & Digital Experience Designer
        </p>

        {/* Giant display heading */}
        <h1
          className={`text-display mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{
            fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
            fontSize: "clamp(3.2rem, 9vw, 8.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "#0F172A",
            transitionDelay: "80ms",
          }}
        >
          Rafael
          <br />
          <span style={{ color: "#0369A1" }}>Abril.</span>
        </h1>

        {/* Divider */}
        <div
          className={`w-16 h-1 bg-[#0369A1] mb-8 transition-all duration-500 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{ transformOrigin: "left", transitionDelay: "220ms" }}
        />

        {/* Descriptor */}
        <p
          className={`text-xl sm:text-2xl max-w-2xl leading-relaxed text-[#334155] mb-10 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{
            fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)",
            fontWeight: 400,
            transitionDelay: "280ms",
          }}
        >
          10 years building digital products for{" "}
          <strong style={{ fontWeight: 600, color: "#0F172A" }}>B2B services</strong> &{" "}
          <strong style={{ fontWeight: 600, color: "#0F172A" }}>payment providers</strong>.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "360ms" }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="btn-primary"
          >
            View Work
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="mailto:raphael.saintaubert@gmail.com"
            className="btn-ghost"
          >
            Get in Touch
          </a>
        </div>

        {/* Stat pills */}
        <div
          className={`flex flex-wrap gap-6 mt-14 pt-8 border-t border-[#E2E8F0] transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
          style={{ transitionDelay: "480ms" }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "11", label: "Companies" },
            { value: "B2B", label: "& Fintech Focus" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  letterSpacing: "-0.03em",
                  color: "#0F172A",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#64748B",
                  marginTop: "0.25rem",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
