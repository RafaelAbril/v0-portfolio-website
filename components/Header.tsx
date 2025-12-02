"use client"

import { useEffect, useState } from "react"

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const animateText = (text: string, baseDelay: number) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="text-clip-animate inline-block"
        style={{ animationDelay: `${baseDelay + index * 0.03}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  return (
    <header className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] grid grid-cols-5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-clip-column" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="w-full h-full bg-gradient-to-b from-primary to-accent" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(148, 163, 184) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(148, 163, 184) 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`animate-scroll-fade ${isVisible ? "" : "invisible"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            <span className="block whitespace-nowrap">{animateText("Hello world,", 0)}</span>
            <span className="block whitespace-nowrap">{animateText("you're welcome here.", 0.4)}</span>
          </h1>
        </div>

        <div className={`animate-scroll-fade ${isVisible ? "" : "invisible"}`} style={{ animationDelay: "0.2s" }}>
          <p className="text-xl sm:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            I'm Rafael - I have been designing & managing digital experiences for the past 10 years.
          </p>
        </div>

        <div className={`animate-scroll-fade ${isVisible ? "" : "invisible"}`} style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Below you'll find more information about the latest projects I worked on, my skills, and some insights from
            my journey in product management.
          </p>
        </div>

        <div
          className={`animate-scroll-fade mt-12 flex flex-wrap justify-center gap-3 ${isVisible ? "" : "invisible"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <span className="border-beam inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300 hover:scale-105 transition-all duration-200 cursor-default">
            Product Strategy
          </span>
          <span className="border-beam inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300 hover:scale-105 transition-all duration-200 cursor-default">
            Frontend Engineering
          </span>
          <span className="border-beam inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300 hover:scale-105 transition-all duration-200 cursor-default">
            Customer Experience
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
