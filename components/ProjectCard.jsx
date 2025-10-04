"use client"

import Image from "next/image"
import { useState } from "react"

const ProjectCard = ({ title, img, description }) => {
  const [imgError, setImgError] = useState(false)
  const placeholderUrl = `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(title + " company logo")}`

  const imageSrc = imgError || !img ? placeholderUrl : img

  return (
    <div className="group bg-card rounded-xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${title} logo`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={imageSrc.startsWith("/placeholder")}
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
