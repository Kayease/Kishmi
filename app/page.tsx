"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  Play,
  Award,
  Users,
  Sparkles,
  Zap,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useStore } from "@/lib/store"
import QuickViewModal from "@/components/QuickViewModal"
import ScrollToTop from "@/components/ScrollToTop"

export default function HomePage() {
  const { addToCart, setQuickViewProduct } = useStore()
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  // Hero scroll animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.8, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])

  const featuredProducts = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      price: 45,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=600&fit=crop&crop=center",
      badge: "Bestseller",
      description:
        "Experience the perfect balance of comfort and color with our signature velvet matte formula. This long-lasting lipstick delivers rich, vibrant color that stays put for hours without drying out your lips.",
      category: "lips",
      rating: 4.8,
      reviews: 124,
      color: "from-red-500 to-pink-500",
      features: ["12-hour wear", "Vitamin E enriched", "Cruelty-free", "Available in 24 shades"],
    },
    {
      id: 2,
      name: "Radiance Foundation",
      price: 68,
      originalPrice: 85,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=600&fit=crop&crop=center",
      badge: "Sale",
      description:
        "Achieve flawless, natural-looking coverage with our lightweight foundation. Infused with skin-loving ingredients, it provides buildable coverage while nourishing your skin throughout the day.",
      category: "face",
      rating: 4.9,
      reviews: 89,
      color: "from-amber-500 to-orange-500",
      features: ["SPF 30 protection", "Hyaluronic acid", "24-hour hydration", "30 inclusive shades"],
    },
    {
      id: 3,
      name: "Luxury Eye Palette",
      price: 95,
      image: "https://images.unsplash.com/photo-1583241800698-9c2e0c3e9c2e?w=500&h=600&fit=crop&crop=center",
      badge: "New",
      description:
        "Unleash your creativity with our most versatile eyeshadow palette. Featuring 12 highly pigmented shades in both matte and shimmer finishes, perfect for creating endless eye looks from subtle to dramatic.",
      category: "eyes",
      rating: 4.7,
      reviews: 156,
      color: "from-purple-500 to-indigo-500",
      features: ["12 versatile shades", "Blendable formula", "Long-lasting", "Professional quality"],
    },
    {
      id: 4,
      name: "Glow Highlighter",
      price: 55,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=600&fit=crop&crop=center",
      badge: null,
      description:
        "Add the perfect touch of luminosity to your complexion with our silky-smooth highlighter. This buildable formula gives you a natural, lit-from-within glow that complements all skin tones.",
      category: "face",
      rating: 4.6,
      reviews: 78,
      color: "from-yellow-500 to-amber-500",
      features: ["Buildable coverage", "Silky texture", "Universal shades", "Paraben-free"],
    },
  ]

  const featuredCategories = [
    {
      id: "lips",
      name: "Lips",
      description: "Bold colors and comfortable formulas",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop&crop=center",
      productCount: 12,
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: "face",
      name: "Face",
      description: "Flawless coverage and natural glow",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop&crop=center",
      productCount: 18,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: "eyes",
      name: "Eyes",
      description: "Dramatic looks and precise application",
      image: "https://images.unsplash.com/photo-1583241800698-9c2e0c3e9c2e?w=400&h=500&fit=crop&crop=center",
      productCount: 15,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: "skincare",
      name: "Skincare",
      description: "Nourishing treatments for healthy skin",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop&crop=center",
      productCount: 20,
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const stats = [
    { icon: Award, number: "100%", label: "Natural Ingredients", color: "text-green-600" },
    { icon: Users, number: "50K+", label: "Happy Customers", color: "text-blue-600" },
    { icon: Sparkles, number: "25+", label: "Premium Products", color: "text-purple-600" },
    { icon: Star, number: "4.9", label: "Average Rating", color: "text-yellow-600" },
  ]

  const features = [
    {
      icon: Shield,
      title: "Cruelty-Free",
      description: "Never tested on animals, always ethical",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Luxury ingredients for exceptional results",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Heart,
      title: "Skin-Loving",
      description: "Formulated with care for all skin types",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Zap,
      title: "Long-Lasting",
      description: "All-day wear that stays perfect",
      gradient: "from-blue-400 to-cyan-500",
    },
  ]

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  const handleQuickView = (product: any) => {
    setQuickViewProduct(product)
  }


  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProductIndex, featuredProducts.length]);

  const currentProduct = featuredProducts[currentProductIndex]
  const isEven = currentProductIndex % 2 === 0

  return (
    <div className="overflow-hidden">
      {/* Enhanced Sticky Hero Section with Scroll Animations */}
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
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/20 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
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

      {/* Featured Product Carousel */}
      <section className="bg-white relative overflow-hidden z-10 min-h-screen flex items-center justify-center">
        <div className="container-max section-padding w-full">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ✨ Product Showcase
            </motion.span>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Discover Excellence
            </h2>
          </motion.div>

          {/* Product Carousel */}
          <div className="relative">
            <motion.div
              key={currentProductIndex}
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isEven ? -100 : 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:grid-flow-col-dense"
                }`}
            >
              {/* Product Image */}
              <motion.div
                className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[6/5] overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={currentProduct.image || "/placeholder.svg"}
                    alt={currentProduct.name}
                    fill
                    className="object-cover"
                  />

                  {/* Badge */}
                  {currentProduct.badge && (
                    <div className="absolute top-6 left-6 z-20">
                      <span
                        className={`px-4 py-2 text-sm font-bold tracking-widest uppercase rounded-full backdrop-blur-sm ${currentProduct.badge === "Bestseller"
                          ? "bg-black/80 text-white"
                          : currentProduct.badge === "Sale"
                            ? "bg-red-500/90 text-white"
                            : currentProduct.badge === "New"
                              ? "bg-green-500/90 text-white"
                              : "bg-gray-500/90 text-white"
                          }`}
                      >
                        {currentProduct.badge}
                      </span>
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">${currentProduct.price}</span>
                      {currentProduct.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${currentProduct.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating Gradient Element */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${currentProduct.color} rounded-full opacity-60`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Product Details */}
              <motion.div
                className={`${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full uppercase tracking-wide mb-4">
                    {currentProduct.category}
                  </span>
                  <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                    {currentProduct.name}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentProduct.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${i < Math.floor(currentProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {currentProduct.rating} ({currentProduct.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {currentProduct.features.map((feature, index) => (
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
                    className="flex-1 bg-black text-white px-8 py-4 font-medium tracking-wider text-sm uppercase transition-all duration-300 hover:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    onClick={() => handleQuickView(currentProduct)}
                    className="flex-1 border-2 border-black text-black px-8 py-4 font-medium tracking-wider text-sm uppercase transition-all duration-300 hover:bg-black hover:text-white rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Quick View
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Buttons */}
            {/* <div className="flex justify-center items-center space-x-4 mt-12">
              <motion.button
                onClick={prevProduct}
                className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-black transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button> */}

              {/* Dots Indicator */}
              {/* <div className="flex space-x-2">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProductIndex ? "bg-black scale-125" : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextProduct}
                className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-black transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-black text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🎨 Shop by Category
            </motion.span>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Featured Categories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/shop?category=${category.id}`}>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    {/* Gradient Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[2px]`}
                    >
                      <div className="w-full h-full bg-white rounded-2xl" />
                    </div>

                    <div className="relative z-10">
                      {/* Category Image */}
                      <div className="relative aspect-[6/5] overflow-hidden rounded-t-2xl">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Product Count Badge */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                          <span className="text-sm font-bold text-gray-900">{category.productCount}+</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <motion.div
                            className="bg-white/95 backdrop-blur-sm text-black px-6 py-3 font-medium tracking-wide hover:bg-white transition-all duration-300 rounded-full shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Shop {category.name}
                          </motion.div>
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="p-6 text-center">
                        <h3 className="font-playfair text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{category.description}</p>
                        {/* <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 uppercase tracking-wide">
                          <span>{category.productCount} Products</span>
                          <span>•</span>
                          <span>Premium Quality</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Floating Gradient Dot */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${category.gradient} rounded-full opacity-60`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.7 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Beauty Enthusiasts - Moved after Featured Categories */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Trusted by Beauty Enthusiasts
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands who have discovered the perfect balance of luxury and simplicity
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl mb-4 sm:mb-6 group-hover:shadow-xl transition-transform duration-300 ${stat.color}`}
                >
                  <stat.icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base tracking-wide font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why Choose KISHMI</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience the difference that quality, ethics, and innovation make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Journal Section */}
      <section className="py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-2xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full blur-2xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          />
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ✨ Beauty Journal
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-800 via-pink-700 to-rose-800 bg-clip-text text-transparent">
              Stories of Beauty & Inspiration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover expert insights, beauty secrets, and the latest trends from our passionate team of beauty professionals.
            </p>
          </motion.div>

          {/* Featured Articles Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  id: 1,
                  title: "The Art of Minimalist Beauty",
                  excerpt: "Discover how to achieve effortless elegance with a simplified beauty routine that enhances your natural radiance.",
                  category: "skincare",
                  readTime: "8 min read",
                  author: "Sophia Chen",
                  date: "Jan 15, 2024",
                  gradient: "from-rose-200 to-pink-200"
                },
                {
                  id: 2,
                  title: "Bold Lips for Every Occasion",
                  excerpt: "From subtle everyday looks to dramatic evening statements, master the art of bold lip color.",
                  category: "makeup",
                  readTime: "5 min read",
                  author: "Isabella Martinez",
                  date: "Jan 10, 2024",
                  gradient: "from-purple-200 to-rose-200"
                },
                {
                  id: 3,
                  title: "2024 Beauty Trends",
                  excerpt: "Explore the emerging beauty trends that will define 2024, from innovative formulas to sustainable practices.",
                  category: "trends",
                  readTime: "7 min read",
                  author: "Aria Thompson",
                  date: "Jan 8, 2024",
                  gradient: "from-blue-200 to-purple-200"
                }
              ].map((article, index) => (
                <motion.div
                  key={article.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={`/journal/${article.id}`}>
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-pink-600/10 z-10" />
                        <motion.div
                          className={`w-full h-full bg-gradient-to-br ${article.gradient}`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-rose-600 capitalize">
                            {article.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-20">
                          <motion.div
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Heart size={16} className="text-rose-500" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="space-y-4">
                          <h3 className="font-playfair text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-300 leading-tight">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed line-clamp-2">
                            {article.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{article.author}</span>
                              <span>•</span>
                              <span>{article.date}</span>
                            </div>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/journal">
                <motion.button
                  className="group inline-flex items-center space-x-3 px-12 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore All Articles</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              <p className="text-gray-500 mt-4">
                Join 10,000+ beauty enthusiasts who trust our insights
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Brand Story Teaser with Scroll Animation */}
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

      <QuickViewModal />
      <ScrollToTop />
    </div>
  )
}
