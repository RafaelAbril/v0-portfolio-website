import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import caseStudies from "../../../data/case-studies.json"

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.subtitle} | Raphaël Saint-Aubert`,
    description: caseStudy.overview,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-lg font-bold text-primary hover:text-primary/80 transition-colors">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm">
              <Image
                src={caseStudy.logo || "/placeholder.svg"}
                alt={caseStudy.company}
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary">{caseStudy.title}</h1>
              <p className="text-xl text-slate-600 mt-2">{caseStudy.subtitle}</p>
            </div>
          </div>
          <p className="text-lg text-slate-500">{caseStudy.period}</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={caseStudy.hero || "/placeholder.svg"}
              alt={`${caseStudy.title} hero`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{caseStudy.overview}</p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">The Challenge</h2>
            <p className="text-slate-700 leading-relaxed">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">The Solution</h2>
            <p className="text-slate-700 leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>
      </section>

      {/* Role & Responsibilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">My Role</h2>
          <p className="text-xl text-slate-700 mb-6">{caseStudy.role}</p>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Responsibilities</h3>
          <ul className="space-y-3">
            {caseStudy.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{outcome.metric}</div>
                <div className="text-sm opacity-90">{outcome.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

     {/* Images Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Project Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-slate-600 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Interested in working together?</h2>
          <p className="text-lg text-slate-700 mb-8">Let's discuss how I can help drive your product forward.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg font-medium transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
