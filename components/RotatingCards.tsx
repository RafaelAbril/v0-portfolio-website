"use client"

import { useState } from "react"

const cards = [
  {
    title: "Product Strategy",
    description: "Defining vision, roadmap, and go-to-market strategies for B2B and fintech products",
    icon: "",
  },
  {
    title: "Technical Leadership",
    description: "Leading engineering teams and driving technical decisions for scalable solutions",
    icon: "",
  },
  {
    title: "User-Centric Design",
    description: "Creating intuitive experiences through research, testing, and iterative improvements",
    icon: "",
  },
]

export default function RotatingCards() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <div className="relative max-w-2xl mx-auto my-16 px-4">
      <div className="relative h-64 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 border-2 border-primary/20 transition-all duration-700 ${
              index === currentIndex
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-full scale-95 pointer-events-none"
            }`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold text-primary mb-3">{card.title}</h3>
            <p className="text-slate-700 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevCard}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-110"
          aria-label="Previous card"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextCard}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-110"
          aria-label="Next card"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
