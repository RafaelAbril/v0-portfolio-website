"use client"

import { useState } from "react"
import Image from "next/image"
import PhotoLightbox from "../PhotoLightbox"

export default function PhotographySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const photos = [
    {
      id: 1,
      src: "/TreeOfLife.jpg",
      alt: "Urban photography",
      title: "Suburbs",
    },
    {
      id: 2,
      src: "/ParisGarnier.jpg",
      alt: "Parisian street photography",
      title: "Palais Garnier",
    },
    {
      id: 3,
      src: "/Montjuic.jpg",
      alt: "Barcelona Montjuic",
      title: "Montjuïc",
    },
    {
      id: 4,
      src: "/NYC.jpg",
      alt: "Sunset over NYC",
      title: "NYC",
    },
    {
      id: 5,
      src: "/ParisLouvre.jpg",
      alt: "Abstract creative photography",
      title: "Le Louvre",
    },
    {
      id: 6,
      src: "/ParisBridge.jpg",
      alt: "Travel documentary photography",
      title: "Paris",
    },
  ]

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length)
    }
  }

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Photography</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Capturing moments and stories through my lens:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <PhotoCard key={photo.id} photo={photo} delay={idx * 0.1} onClick={() => setSelectedPhotoIndex(idx)} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/rafael.abril/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            View More
          </a>
        </div>
      </div>

      {selectedPhotoIndex !== null && (
        <PhotoLightbox
          photo={photos[selectedPhotoIndex]}
          onClose={() => setSelectedPhotoIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={selectedPhotoIndex}
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
      className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up opacity-0 hover:scale-105 cursor-pointer w-full"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        {isLoading && <div className="absolute inset-0 bg-slate-200 animate-pulse" />}
        <Image
          src={photo.src || "/placeholder.svg"}
          alt={photo.alt}
          width={800}
          height={600}
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${isLoading ? "opacity-0" : "opacity-100"
            }`}
          onLoad={() => setIsLoading(false)}
          priority={delay < 0.3}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-medium text-lg">{photo.title}</h3>
        </div>
      </div>
    </button>
  )
}
