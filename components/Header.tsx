const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Hello world, you're welcome here.
          </h1>
        </div>

        <div className="animate-fade-in-up animate-delay-100 opacity-0">
          <p className="text-xl sm:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            I am Raphaël - I have been designing & managing digital experiences for the past 10 years.
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-200 opacity-0">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Below you'll find more information about the latest projects I worked on, my skills, and some insights from my
            journey in product management.
          </p>
        </div>

        {/* Professional badges */}
        <div className="animate-fade-in-up animate-delay-300 opacity-0 mt-12 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300">
            Product Strategy
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300">
            Frontend Engineering
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-200 text-slate-800 border border-slate-300">
            Customer Experience
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
