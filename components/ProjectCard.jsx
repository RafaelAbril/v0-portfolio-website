"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const ProjectCard = ({ title, img, description, slug, accomplishments = [], tags = [] }) => {
  const [imgError, setImgError]     = useState(false)
  const [isLoading, setIsLoading]   = useState(true)
  const [isVisible, setIsVisible]   = useState(false)
  const cardRef = useRef(null)

  const imageSrc = imgError || !img
    ? `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(title + " company logo")}`
    : img

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.08 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => { if (cardRef.current) observer.unobserve(cardRef.current) }
  }, [])

  const inner = (
    <div
      ref={cardRef}
      className={`card-minimal group overflow-hidden ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {/* Logo area */}
      <div className="relative h-40 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-[#E8ECF1] animate-pulse" />
        )}
        <Image
          src={imageSrc}
          alt={`${title} logo`}
          fill
          className={`object-contain p-6 transition-all duration-500 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          unoptimized={imageSrc.startsWith("/placeholder")}
          onError={() => setImgError(true)}
          onLoad={() => setIsLoading(false)}
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="mb-1 group-hover:text-[#0369A1] transition-colors duration-200"
          style={{
            fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
            fontWeight: 700,
            fontSize: "1.125rem",
            letterSpacing: "-0.02em",
            color: "#0F172A",
          }}
        >
          {title}
        </h3>

        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: "#64748B", fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}
        >
          {description}
        </p>

        {accomplishments.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {accomplishments.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#334155]">
                <svg
                  width="14" height="14"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  className="flex-shrink-0 mt-0.5 text-[#0369A1]"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="tag-pill">{tag}</span>
            ))}
          </div>
        )}

        {slug && (
          <Link href={`/case-studies/${slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-[#0369A1] group-hover:gap-2 transition-all duration-200 mt-3"
            style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Case Study
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )

  return inner
}

export default ProjectCard
