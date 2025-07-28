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
  title: "Revitalize Your Skin with Our All-Natural Beauty Care Products",
  description: "Achieve radiant, youthful skin with our all-natural cosmetics and skin care products. Restore and rejuvenate your skin for a fresh, radiant glow. Shop now for natural beauty care.",
  keywords: "luxury cosmetics, premium beauty, minimalist makeup, high-end skincare, natural beauty, all-natural cosmetics, rejuvenate skin, radiant glow",
  authors: [{ name: "KISHMI" }],
  creator: "KISHMI",
  publisher: "KISHMI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kishmi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Revitalize Your Skin with Our All-Natural Beauty Care Products",
    description: "Achieve radiant, youthful skin with our all-natural cosmetics and skin care products. Restore and rejuvenate your skin for a fresh, radiant glow. Shop now for natural beauty care.",
    url: 'https://kishmi.com',
    siteName: 'KISHMI - Luxury Cosmetics',
    images: [
      {
        url: '/OG-image.jpg',
        width: 1200,
        height: 628,
        alt: 'KISHMI - Luxury Cosmetics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Revitalize Your Skin with Our All-Natural Beauty Care Products",
    description: "Achieve radiant, youthful skin with our all-natural cosmetics and skin care products. Restore and rejuvenate your skin for a fresh, radiant glow. Shop now for natural beauty care.",
    images: ['/OG-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light only',
  },
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
