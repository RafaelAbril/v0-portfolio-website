const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight text-balance">
            Hello world, you're welcome here.
          </h1>
        </div>

        <div className="animate-fade-in-up animate-delay-100 opacity-0">
          <p className="text-xl sm:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            I'm Rafael - I have been designing & managing digital experiences for the past 10 years.
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-200 opacity-0">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Below you'll find more information about the latest projects I worked on, my skills, and some insights from
            my journey in product management.
          </p>
        </div>

        {/* Professional badges */}
        <div className="animate-fade-in-up animate-delay-300 opacity-0 mt-12 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300 hover:scale-105 transition-all duration-200">
            Product Strategy
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300 hover:scale-105 transition-all duration-200">
            Frontend Engineering
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300 hover:bg-slate-300 hover:scale-105 transition-all duration-200">
            Customer Experience
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
