"use client"

import type React from "react"

import { useEffect } from "react"

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple smooth scrolling implementation that works reliably
    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]')

      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
          const targetId = link.getAttribute("href")?.substring(1)
          const targetElement = document.getElementById(targetId || "")

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        })
      })
    }

    // Add custom smooth scrolling CSS
    const style = document.createElement("style")
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      * {
        scroll-behavior: smooth;
      }
      
      body {
        overflow-x: hidden;
      }
    `
    document.head.appendChild(style)

    smoothScroll()

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <>{children}</>
}
