"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.img]
 * @param {string} props.description
 * @param {string} [props.slug]
 * @param {string[]} [props.accomplishments]
 * @param {string[]} [props.tags]
 */
const ProjectCard = ({ title, img, description, slug, accomplishments = [], tags = [] }) => {
  const [imgError, setImgError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  const placeholderUrl = `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(title + " company logo professional")}`
  const imageSrc = imgError || !img ? placeholderUrl : img

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    cardRef.current.style.setProperty("--mouse-x", `${x}%`)
    cardRef.current.style.setProperty("--mouse-y", `${y}%`)
  }

  const CardContent = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`flashlight-effect flashlight-border group bg-card rounded-xl shadow-sm border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${isVisible ? "animate-scroll-fade" : "invisible"
        }`}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        {isLoading && <div className="absolute inset-0 bg-slate-200 animate-pulse" />}
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} logo`}
          fill
          className={`object-contain p-6 group-hover:scale-110 transition-all duration-700 ${isLoading ? "opacity-0" : "opacity-100"
            }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={95}
          unoptimized={imageSrc.startsWith("/placeholder")}
          onError={() => setImgError(true)}
          onLoad={() => setIsLoading(false)}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="leading-relaxed text-muted-foreground mb-4">{description}</p>

        {accomplishments.length > 0 && (
          <ul className="space-y-2 mb-4">
            {accomplishments.map((accomplishment, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight">{accomplishment}</span>
              </li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {slug && (
          <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
            View Case Study
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )

  return slug ? (
    <Link href={`/case-studies/${slug}`} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  )
}

export default ProjectCard
