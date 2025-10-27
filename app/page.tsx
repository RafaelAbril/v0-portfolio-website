import Header from "../components/Header"
import Navigation from "../components/Navigation"
import BackToTop from "../components/BackToTop"
import ProjectCard from "../components/ProjectCard"
import SkillsSection from "../components/SkillsSection"
import ServiceOffering from "../components/ServiceOffering"
import PhotographySection from "../components/PhotographySection"
import projects from "../data/projects.json"
import { Instagram, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <Header />

      <main>
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Professional Journey</h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                Building digital experiences that drive business growth,
              </p>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed italic">
                for B2B services & payment services providers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <ProjectCard {...project} />
                </div>
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
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Interested in discussing product strategy, fintech, or any potential collaborations?
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <a
                  href="mailto:raphael.saintaubert@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="https://linkedin.com/in/raphael.saintaubert"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/20 hover:bg-primary-foreground/10 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  LinkedIn Profile
                </a>
                <a
                  href="/resume.pdf"
                  download="Raphael_SaintAubert_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary-foreground/20 hover:bg-primary-foreground/10 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="flex gap-6 justify-center">
                <a
                  href="https://www.instagram.com/rafael.abril/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-primary-foreground/20 hover:bg-primary-foreground/10 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linktr.ee/rsaabril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-primary-foreground/20 hover:bg-primary-foreground/10 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Linktree"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.511 5.853l4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/RafaelAbril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-primary-foreground/20 hover:bg-primary-foreground/10 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600">© 2025 Raphaël Saint-Aubert Abril. All rights reserved.</p>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}
