"use client"

import { useState, useEffect } from "react"

const NAV_ITEMS = [
  { id: "projects",     label: "Experience" },
  { id: "skills",       label: "Skills" },
  { id: "services",     label: "Services" },
  { id: "photography",  label: "Photography" },
  { id: "contact",      label: "Contact" },
]

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const current = NAV_ITEMS.find(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 80 && rect.bottom >= 80
      })
      if (current) setActiveSection(current.id)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <nav
      role="navigation"
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm"
          : "bg-[#F8FAFC]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading text-base font-800 tracking-tight text-[#0F172A] hover:text-[#0369A1] transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-heading, 'Archivo', sans-serif)", fontWeight: 800 }}
            aria-label="Scroll to top"
          >
            Rafael Abril
          </button>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#0F172A]"
                      : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                  style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0369A1] rounded-full"
                      style={{ animation: "fadeInUp 0.2s ease both" }}
                    />
                  )}
                </button>
              )
            })}

            <a
              href="mailto:raphael.saintaubert@gmail.com"
              className="btn-accent ml-4 !py-1.5 !px-4 !text-xs"
              style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
