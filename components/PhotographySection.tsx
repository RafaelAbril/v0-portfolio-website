"use client"

import { useState } from "react"
import Image from "next/image"
import PhotoLightbox from "./PhotoLightbox"

const photos = [
  { id: 1, src: "/TreeOfLife.jpg",   alt: "Urban photography",            title: "Suburbs"       },
  { id: 2, src: "/ParisGarnier.jpg", alt: "Parisian street photography",  title: "Palais Garnier" },
  { id: 3, src: "/Montjuic.jpg",     alt: "Barcelona Montjuïc",           title: "Montjuïc"      },
  { id: 4, src: "/NYC.jpg",          alt: "Sunset over New York City",     title: "NYC"           },
  { id: 5, src: "/ParisLouvre.jpg",  alt: "Le Louvre, Paris",             title: "Le Louvre"     },
  { id: 6, src: "/ParisBridge.jpg",  alt: "A bridge in Paris",            title: "Paris"         },
]

export default function PhotographySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleNext = () =>
    setSelectedIndex((i) => (i !== null ? (i + 1) % photos.length : null))
  const handlePrev = () =>
    setSelectedIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null))

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">04 — Beyond Work</p>
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
            Photography
          </h2>
          <p className="mt-3 text-[#64748B] max-w-xl"
            style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
            Capturing moments and stories through my lens.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, idx) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              delay={idx * 0.08}
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.instagram.com/rafael.abril/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            View on Instagram
          </a>
        </div>
      </div>

      {selectedIndex !== null && (
        <PhotoLightbox
          photo={photos[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={selectedIndex}
          totalPhotos={photos.length}
        />
      )}
    </section>
  )
}

function PhotoCard({ photo, delay, onClick }: { photo: any; delay: number; onClick: () => void }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-[#E8ECF1] animate-fade-in-up cursor-pointer w-full"
      style={{ animationDelay: `${delay}s` }}
      aria-label={`Open photo: ${photo.title}`}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        {isLoading && <div className="absolute inset-0 bg-[#E8ECF1] animate-pulse" />}
        <Image
          src={photo.src}
          alt={photo.alt}
          width={800}
          height={600}
          className={`w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          priority={delay < 0.2}
        />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-end p-4">
        <p
          className="text-white text-sm font-semibold"
          style={{ fontFamily: "var(--font-heading, 'Archivo', sans-serif)", letterSpacing: "-0.02em" }}
        >
          {photo.title}
        </p>
      </div>
    </button>
  )
}
