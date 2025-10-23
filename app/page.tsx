import Header from "../components/Header"
import Navigation from "../components/Navigation"
import BackToTop from "../components/BackToTop"
import ProjectCard from "../components/ProjectCard"
import SkillsSection from "../components/SkillsSection"
import PhotographySection from "../components/PhotographySection"
import projects from "../data/projects.json"

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
              <p className="text-lg max-w-3xl mx-auto leading-relaxed">Building digital experiences that drive business growth,</p>
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
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.205.013-3.668.072-4.948.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linktr.ee/rsaabril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-primary-foreground/20 hover:bg-primary-foreground/10 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="Linktree"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.524-.08.973-.46 1.052-.978 0-.162-.08-.324-.08-.486-.08-.517-.528-.897-1.052-.897-.524.08-.973.46-1.052.978zm8.094 0c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.524-.08.973-.46 1.052-.978 0-.162-.08-.324-.08-.486-.08-.517-.528-.897-1.052-.897-.524.08-.973.46-1.052.978zM12 13.5c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.524-.08.973-.46 1.052-.978 0-.162-.08-.324-.08-.486-.08-.517-.528-.897-1.052-.897-.524.08-.973.46-1.052.978z" />
                    <path d="M12.017 24C5.396 24 .017 18.621.017 12S5.396 0 12.017 0s11.983 5.379 11.983 12-5.362 12-11.983 12zM8.465 8.465L12 12l3.535-3.535L12 4.93 8.465 8.465zm7.07 7.07L12 19.07l-3.535-3.535L12 12l3.535 3.535z" />
                  </svg>
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
