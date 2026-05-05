"use client"

// SVG icons inline — no emoji, no external icon lib dependency
const IconBarChart = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)
const IconCode = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const skills = [
  {
    category: "Product Management",
    items: ["Product Ownership & Strategy", "Lean/Agile Methodologies", "Market & Data Research", "Go-to-Market"],
    Icon: IconBarChart,
  },
  {
    category: "Product Engineering",
    items: ["UX / Interface Design", "Frontend Development", "Customer Experience & Analytics", "Prototyping"],
    Icon: IconCode,
  },
]

const companyLogos = [
  "izmocars ltd.", "Teamleader.eu", "Wabel", "Roche", "General Assembly",
  "Nexway", "Treezor", "Publicis Sapient", "Xpollens", "1POINT6", "TotalEnergies",
]

const SkillsSection = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <p className="section-label mb-3">02 — Expertise</p>
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
          Core Skills
        </h2>
        <p className="mt-3 text-[#64748B] max-w-xl"
          style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
          A decade of experience across product strategy and technical implementation.
        </p>
      </div>

      {/* Logo marquee */}
      <div className="mb-16 overflow-hidden">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-5"
          style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
          Trusted by leading B2B & fintech companies
        </p>
        <div className="marquee-mask">
          <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
            {[...companyLogos, ...companyLogos].map((company, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-5 py-2.5 bg-[#F8FAFC] rounded border border-[#E2E8F0] text-[#334155] text-sm font-medium whitespace-nowrap"
                style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map(({ category, items, Icon }, idx) => (
          <div
            key={idx}
            className="card-minimal p-8 animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded flex items-center justify-center bg-[#E8ECF1] text-[#0369A1]">
                <Icon />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  letterSpacing: "-0.02em",
                  color: "#0F172A",
                }}
              >
                {category}
              </h3>
            </div>
            <ol className="space-y-3">
              {items.map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "#E8ECF1", color: "#0369A1", fontFamily: "var(--font-heading)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[#334155] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
                    {skill}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default SkillsSection
