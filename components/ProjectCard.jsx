"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProjectCard = ({ title, img, description, slug }) => {
  const [imgError, setImgError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const placeholderUrl = `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(title + " company logo professional")}`

  const imageSrc = imgError || !img ? placeholderUrl : img

  const CardContent = (
    <div className="group bg-card rounded-xl shadow-sm border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-muted">
        {isLoading && <div className="absolute inset-0 bg-slate-200 animate-pulse" />}
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} logo`}
          fill
          className={`object-contain p-6 group-hover:scale-105 transition-all duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={95}
          unoptimized={imageSrc.startsWith("/placeholder")}
          onError={() => setImgError(true)}
          onLoad={() => setIsLoading(false)}
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
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
