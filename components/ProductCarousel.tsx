"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

// Type definitions
interface Product {
  image: string
  name: string
  badge?: string
  price: number
  originalPrice?: number
  color?: string
  category: string
  description: string
  rating: number
  reviews: number
  features: string[]
}

interface ProductCarouselProps {
  featuredProducts: Product[]
  handleAddToCart: (product: Product) => void
  handleQuickView: (product: Product) => void
}

export default function ProductCarousel({ featuredProducts, handleAddToCart, handleQuickView }: ProductCarouselProps) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const isEven = currentProductIndex % 2 === 0
  const currentProduct = featuredProducts[currentProductIndex]

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentProductIndex, featuredProducts.length])

  return (
    <section className="bg-white relative overflow-hidden z-10 min-h-screen flex items-center justify-center">
      <div className="container-max section-padding w-full">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-12 pt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm tracking-widest uppercase mb-6 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ✨ Product Showcase
          </motion.span>
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Discover Excellence
          </h2>
        </motion.div>
        <div className="relative">
          <motion.div
            key={currentProductIndex}
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isEven ? -100 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
          >
            {/* Product Image */}
            <motion.div
              className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[6/5] overflow-hidden rounded-3xl shadow-2xl border-2 border-gray-100">
                <Image
                  src={currentProduct.image || "/placeholder.svg"}
                  alt={currentProduct.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge */}
                {currentProduct.badge && (
                  <div className="absolute top-6 left-6 z-20">
                    <span
                      className={`px-4 py-2 text-sm font-bold tracking-widest uppercase rounded-full shadow-md backdrop-blur-sm ${currentProduct.badge === "Bestseller"
                        ? "bg-gradient-to-r from-pink-500 to-yellow-400 text-white"
                        : currentProduct.badge === "Sale"
                          ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                          : currentProduct.badge === "New"
                            ? "bg-gradient-to-r from-green-400 to-blue-400 text-white"
                            : "bg-gray-500/90 text-white"
                        }`}
                    >
                      {currentProduct.badge}
                    </span>
                  </div>
                )}
                {/* Price Tag */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">${currentProduct.price}</span>
                    {currentProduct.originalPrice && (
                      <span className="text-base text-gray-400 line-through">${currentProduct.originalPrice}</span>
                    )}
                  </div>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating Gradient Element */}
              <motion.div
                className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${currentProduct.color || "from-pink-400 to-yellow-300"} rounded-full opacity-60 blur-xl pointer-events-none`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
            {/* Product Details */}
            <motion.div
              className={`${isEven ? "lg:order-2" : "lg:order-1"} space-y-8 bg-white/80 rounded-2xl p-8 shadow-xl border border-gray-100`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full uppercase tracking-wide mb-4">
                  {currentProduct.category}
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                  {currentProduct.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentProduct.description}</p>
              </div>
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={22}
                      className={`${idx < Math.floor(currentProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  {currentProduct.rating} ({currentProduct.reviews} reviews)
                </span>
              </div>
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {currentProduct.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => handleAddToCart(currentProduct)}
                  className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-2 font-semibold tracking-wider text-base uppercase transition-all duration-300 hover:bg-gray-800 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  onClick={() => handleQuickView(currentProduct)}
                  className="flex-1 border-2 border-gray-900 text-gray-900 px-6 py-2 font-semibold tracking-wider text-base uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Quick View
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 