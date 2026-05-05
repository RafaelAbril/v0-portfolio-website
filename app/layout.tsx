import type React from "react"
import { Archivo, Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Raphaël Saint-Aubert Abril — Sr. Product Manager & Digital Experience Designer",
  description:
    "Sr. Product Manager with 10+ years of experience in B2B services and payment providers. Specializing in product strategy, frontend engineering, and customer experience.",
  keywords: [
    "Product Manager",
    "Product Strategy",
    "Frontend Engineering",
    "Customer Experience",
    "B2B",
    "BaaS",
    "Payment Providers",
    "Digital Experience",
    "Fintech",
    "Financial Services",
  ],
  authors: [{ name: "Raphaël Saint-Aubert Abril" }],
  creator: "Raphaël Saint-Aubert Abril",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rafaelabril.com",
    title: "Raphaël Saint-Aubert Abril — Sr. Product Manager & Digital Experience Designer",
    description:
      "Sr. Product Manager with 10+ years of experience in B2B services and payment providers.",
    siteName: "Rafael Abril Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rafael Abril — Sr. Product Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphaël Saint-Aubert Abril — Sr. Product Manager",
    description: "Sr. Product Manager with 10+ years in B2B services and payment providers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased"
        style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  )
}
