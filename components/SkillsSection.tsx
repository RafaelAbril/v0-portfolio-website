"use client"

import type React from "react"

import { useRef, useState } from "react"

const skills = [
  {
    category: "Product Management",
    items: ["Product Ownership & Strategy", "Lean/Agile Methodologies", "Market & Data Research"],
    icon: "📊",
  },
  {
    category: "Product Engineering",
    items: ["Design", "Frontend Development", "Customer Experience"],
    icon: "💻",
  },
]

const companyLogos = [
  "Vercel",
  "Stripe",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Figma",
  "Linear",
  "Notion",
  "Slack",
]

const SkillsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    card.style.setProperty("--mouse-x", `${x}%`)
    card.style.setProperty("--mouse-y", `${y}%`)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Core Skills</h2>
          <p className="text-lg max-w-2xl mx-auto">
            A decade of experience across product strategy and technical implementation
          </p>
        </div>

        <div className="mb-16 overflow-hidden">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by leading companies</p>
          <div className="marquee-mask">
            <div className="flex gap-8 animate-marquee">
              {[...companyLogos, ...companyLogos].map((company, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-6 py-3 bg-white rounded-lg border border-border text-slate-600 font-medium whitespace-nowrap"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map(({ category, items, icon }, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el
              }}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              className="flashlight-effect flashlight-border bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{icon}</span>
                <h3 className="text-2xl font-semibold text-card-foreground">{category}</h3>
              </div>

              <ul className="space-y-4">
                {items.map((skill, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
