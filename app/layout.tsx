import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import Toast from "@/components/Toast"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "KISHMI - Luxury Cosmetics",
  description:
    "Discover the art of beauty with KISHMI's premium cosmetic collection. Elegant, minimalist, and luxurious.",
  keywords: "luxury cosmetics, premium beauty, minimalist makeup, high-end skincare",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-black font-inter antialiased">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toast />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
