"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Star } from "lucide-react"

export default function BrandStoryTeaser() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gray-100 text-black text-xs tracking-widest uppercase mb-6 sm:mb-8 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Philosophy
            </motion.span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Crafted with Precision
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              <p>
                At KISHMI, we believe that true beauty lies in the harmony of simplicity and sophistication. Our
                products are meticulously crafted using the finest ingredients, designed to enhance your natural
                elegance with minimal effort.
              </p>
              <p>
                Every formula tells a story of dedication, innovation, and respect for the art of beauty. We don't
                just create cosmetics; we curate experiences that celebrate your unique essence.
              </p>
            </div>
            <div className="flex items-center space-x-8 sm:space-x-12 mb-8 sm:mb-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 tracking-wide">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-500 tracking-wide">Products</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-black text-black" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 tracking-wide">Rated</div>
              </div>
            </div>
            <Link href="/about" className="btn-primary inline-flex items-center space-x-3">
              <span>Discover Our Story</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&h=800&fit=crop&crop=center"
                alt="KISHMI Craftsmanship"
                width={600}
                height={800}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full shadow-xl flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Sparkles size={24} className="sm:w-8 sm:h-8 text-black" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 