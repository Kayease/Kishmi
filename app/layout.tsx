import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import Toast from "@/components/Toast"
import Head from "next/head"

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
      <Head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0" />
        <title>Revitalize Your Skin with Our All-Natural Beauty Care Products</title>
        <meta name="description" content="Achieve radiant, youthful skin with our all-natural cosmetics and skin care products. Restore and rejuvenate your skin for a fresh, radiant glow. Shop now for natural beauty care." />
        <meta name="keywords" content="luxury cosmetics, premium beauty, minimalist makeup, high-end skincare, natural beauty, all-natural cosmetics, rejuvenate skin, radiant glow" />
        <meta name="theme-color" content="#fff" />
        <meta name="color-scheme" content="light only" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* Open Graph (Facebook, etc.) */}
        <meta property="og:site_name" content="KISHMI - Luxury Cosmetics" />
        <meta property="og:url" content="https://kishmi.com/" />
        <meta property="og:title" content="Revitalize Your Skin with Our All-Natural Beauty Care Products" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Achieve radiant, youthful skin with our all-natural cosmetics and skin care products. Restore and rejuvenate your skin for a fresh, radiant glow. Shop now for natural beauty care." />
        <meta property="og:image" content="https://kishmi.com/OG-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revitalize Your Skin with Our All-Natural Beauty Care Products" />
        <meta name="twitter:description" content="Achieve radiant, youthful skin with our all-natural cosmetics and skin care products. Restore and rejuvenate your skin for a fresh, radiant glow. Shop now for natural beauty care." />
        <meta name="twitter:image" content="https://kishmi.com/OG-image.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://kishmi.com/" />
      </Head>
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
