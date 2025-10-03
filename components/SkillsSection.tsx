const skills = [
  {
    category: "Product Strategy",
    items: ["Product Ownership/Management", "Lean & Agile Methodologies", "Market & Data Research"],
    icon: "📊",
  },
  {
    category: "Frontend Engineering",
    items: ["Design", "Customer Experience", "Frontend Development"],
    icon: "💻",
  },
]

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Core Expertise</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A decade of experience across product strategy and technical implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map(({ category, items, icon }, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{icon}</span>
                <h3 className="text-2xl font-semibold text-card-foreground">{category}</h3>
              </div>

              <ul className="space-y-4">
                {items.map((skill, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
