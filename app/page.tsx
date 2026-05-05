import Header from "../components/Header"
import Navigation from "../components/Navigation"
import BackToTop from "../components/BackToTop"
import ProjectCard from "../components/ProjectCard"
import SkillsSection from "../components/SkillsSection"
import PhotographySection from "../components/PhotographySection"
import ServiceOffering from "../components/ServiceOffering"
import projects from "../data/projects.json"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />
      <Header />

      <main>
        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="section-label mb-3">01 — Experience</p>
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
                Professional Journey
              </h2>
              <p className="mt-3 text-[#64748B] max-w-xl"
                style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
                Building digital experiences that drive business growth for B2B services & payment providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        <div id="skills" className="scroll-mt-20">
          <SkillsSection />
        </div>

        <div id="services" className="scroll-mt-20">
          <ServiceOffering />
        </div>

        <div id="photography" className="scroll-mt-20">
          <PhotographySection />
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-heading, 'Archivo', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Let's Connect
            </h2>
            <p className="text-xl mb-10 opacity-80 leading-relaxed max-w-2xl mx-auto"
               style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
              Interested in discussing product strategy, fintech, or any potential collaborations?
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <a
                  href="mailto:raphael.saintaubert@gmail.com"
                  className="btn-accent"
                >
                  Get in Touch
                </a>
                <a
                  href="https://linkedin.com/in/raphaelsaintaubert"
                  className="btn-ghost !text-white !border-white/20 hover:!bg-white/10"
                >
                  LinkedIn Profile
                </a>
                <a
                  href="/resume.pdf"
                  download="Raphael_SaintAubert_Resume.pdf"
                  className="btn-ghost !text-white !border-white/20 hover:!bg-white/10"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
              <div className="flex gap-6 justify-center mt-2">
                <a
                  href="https://www.instagram.com/rafael.abril/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>
                <a
                  href="https://linktr.ee/rsaabril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  aria-label="Linktree"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.511 5.853l4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/RafaelAbril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#020617] py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-white/50" style={{ fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)" }}>
            © {new Date().getFullYear()} Raphaël Saint-Aubert Abril. All rights reserved.
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}
