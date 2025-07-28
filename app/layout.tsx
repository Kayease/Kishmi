import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import Toast from "@/components/Toast"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "KISHMI - Luxury Cosmetics",
  description:
    "Discover the art of beauty with KISHMI's premium cosmetic collection. Elegant, minimalist, and luxurious.",
  keywords: "luxury cosmetics, premium beauty, minimalist makeup, high-end skincare",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="bg-white text-black font-montserrat antialiased">
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
