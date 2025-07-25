"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.8, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center sticky top-0">
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          src="https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1920&h=1080&fit=crop&crop=center"
          alt="KISHMI Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </motion.div>
      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/20 rounded-full"
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>
      <motion.div
        className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, scale: textScale }}
      >
        <motion.div
          className="mb-6 sm:mb-8 pt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-block px-6 sm:px-8 py-3 border-2 border-white/40 rounded-full text-sm sm:text-base tracking-widest uppercase backdrop-blur-sm bg-white/10">
            ✨ Premium Cosmetics
          </span>
        </motion.div>
        <motion.h1
          className="font-playfair text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-6 sm:mb-8 lg:mb-12 tracking-wider leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span className="block">KISHMI</span>
        </motion.h1>
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-balance max-w-4xl mx-auto leading-relaxed mb-4">
            The Art of Minimalist Beauty
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover luxury cosmetics crafted for the modern individual who values elegance and authenticity
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            href="/shop"
            className="group relative overflow-hidden bg-white text-black px-8 sm:px-10 py-4 sm:py-5 font-medium tracking-wider text-sm sm:text-base uppercase transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>Explore Collection</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
} 