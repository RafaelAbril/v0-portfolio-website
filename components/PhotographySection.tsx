export default function PhotographySection() {
  // Sample photography data - you can replace with your actual photos
  const photos = [
    {
      id: 1,
      src: "/urban-architecture-photography.jpg",
      alt: "Urban architecture photography",
      title: "Urban Landscapes",
    },
    {
      id: 2,
      src: "/black-and-white-street.png",
      alt: "Street photography in black and white",
      title: "Street Stories",
    },
    {
      id: 3,
      src: "/serene-forest-stream.png",
      alt: "Nature landscape photography",
      title: "Natural Beauty",
    },
    {
      id: 4,
      src: "/artistic-portrait.png",
      alt: "Artistic portrait photography",
      title: "Human Connection",
    },
    {
      id: 5,
      src: "/abstract-photography-creative.jpg",
      alt: "Abstract creative photography",
      title: "Creative Vision",
    },
    {
      id: 6,
      src: "/travel-photography-documentary.jpg",
      alt: "Travel documentary photography",
      title: "World Stories",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Photography</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Capturing moments and stories through the lens - exploring the intersection of technology and human
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium text-lg">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/rafael.abril/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-200"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
