import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Rafael Abril - Product Manager & Digital Experience Designer",
  description:
    "Product Manager with 10+ years of experience in B2B services and payment providers. Specializing in product strategy, frontend engineering, and customer experience.",
  generator: "v0.app",
  keywords: [
    "Product Manager",
    "Product Strategy",
    "Frontend Engineering",
    "Customer Experience",
    "B2B",
    "Payment Providers",
    "Digital Experience",
  ],
  authors: [{ name: "Raphaël Abril" }],
  creator: "Raphaël Abril",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rafaelabril.com",
    title: "Raphaël Abril - Product Manager & Digital Experience Designer",
    description:
      "Product Manager with 10+ years of experience in B2B services and payment providers. Specializing in product strategy, frontend engineering, and customer experience.",
    siteName: "Rafael Abril Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rafael Abril - Product Manager's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphaël Abril - Product Manager & Digital Experience Designer",
    description: "Product Manager with 10+ years of experience in B2B services and payment providers.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
