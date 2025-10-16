"use client"

import { useEffect } from "react"
import Image from "next/image"

interface Photo {
  id: number
  src: string
  alt: string
  title: string
}

interface PhotoLightboxProps {
  photo: Photo
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  currentIndex: number
  totalPhotos: number
}

export default function PhotoLightbox({
  photo,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalPhotos,
}: PhotoLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [onClose, onNext, onPrev])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={onPrev}
        className="absolute left-4 z-50 p-3 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Previous photo"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-50 p-3 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Next photo"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
        <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            width={1200}
            height={900}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-2xl font-semibold mb-2">{photo.title}</h3>
            <p className="text-white/80 text-sm">
              {currentIndex + 1} / {totalPhotos}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
