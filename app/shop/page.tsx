"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Grid, List, Filter, Search } from "lucide-react"
import { useStore } from "@/lib/store"
import QuickViewModal from "@/components/QuickViewModal"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addToCart, setQuickViewProduct } = useStore()

  const categories = [
    { id: "all", name: "All Products", count: 24 },
    { id: "lips", name: "Lips", count: 8 },
    { id: "face", name: "Face", count: 10 },
    { id: "eyes", name: "Eyes", count: 6 },
    { id: "skincare", name: "Skincare", count: 12 },
  ]

  const products = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      price: 45,
      category: "lips",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop&crop=center",
      badge: "New",
      description: "Long-lasting matte finish with comfortable wear all day",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Radiance Foundation",
      price: 65,
      category: "face",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop&crop=center",
      badge: null,
      description: "Full coverage foundation with natural luminous finish",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Precision Eyeliner",
      price: 35,
      category: "eyes",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop&crop=center",
      badge: "Bestseller",
      description: "Waterproof formula for precise, long-lasting application",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Glow Highlighter",
      price: 55,
      category: "face",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop&crop=center",
      badge: null,
      description: "Subtle luminous glow for natural radiance",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 5,
      name: "Hydrating Serum",
      price: 85,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop&crop=center",
      badge: "New",
      description: "Intensive hydration with vitamin C and hyaluronic acid",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 6,
      name: "Eyeshadow Palette",
      price: 75,
      category: "eyes",
      image: "https://images.unsplash.com/photo-1583241800698-9c2e0c3e9c2e?w=400&h=500&fit=crop&crop=center",
      badge: null,
      description: "12 neutral tones for everyday elegance and versatility",
      rating: 4.8,
      reviews: 92,
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  const handleQuickView = (product: any) => {
    setQuickViewProduct(product)
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Enhanced Header - Mobile Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max section-padding">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 sm:px-6 py-2 bg-black text-white text-xs tracking-widest uppercase mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Premium Collection
            </motion.span>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Shop Collection
            </h1>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed px-4">
              Discover our complete range of premium cosmetics, carefully curated for the modern individual who values
              quality, elegance, and timeless beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Filters and Controls - Mobile Responsive */}
      <section className="py-4 sm:py-6 lg:py-8 bg-white border-b border-gray-100 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container-max section-padding">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
            {/* Category Filter - Mobile Responsive */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-black text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="hidden sm:inline">
                    {category.name} ({category.count})
                  </span>
                  <span className="sm:hidden">{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Search and View Controls - Mobile Responsive */}
            <div className="flex items-center justify-between lg:justify-end space-x-3 sm:space-x-4">
              <div className="relative flex-1 lg:flex-none">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full lg:w-48 pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-black transition-colors duration-300"
                />
              </div>

              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    viewMode === "grid" ? "bg-white shadow-sm text-black" : "text-gray-400"
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    viewMode === "list" ? "bg-white shadow-sm text-black" : "text-gray-400"
                  }`}
                >
                  <List size={16} />
                </button>
              </div>

              <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-full hover:border-black transition-colors duration-300">
                <Filter size={14} />
                <span className="text-xs sm:text-sm hidden sm:inline">Filter</span>
              </button>

              <div className="text-xs sm:text-sm text-gray-600 font-medium hidden lg:block">
                {filteredProducts.length} products
              </div>
            </div>
          </div>

          {/* Mobile Product Count */}
          <div className="text-center mt-4 lg:hidden">
            <span className="text-sm text-gray-600">{filteredProducts.length} products found</span>
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid - Mobile Responsive */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container-max section-padding">
          <motion.div
            className={`grid gap-4 sm:gap-6 lg:gap-8 xl:gap-10 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group cursor-pointer card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
              >
                <Link href={`/shop/${product.id}`}>
                  <div
                    className={`${
                      viewMode === "list" ? "flex space-x-4 sm:space-x-6 lg:space-x-8" : ""
                    } bg-white rounded-lg overflow-hidden shadow-lg`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list" ? "w-32 sm:w-48 lg:w-64 flex-shrink-0" : "mb-4 sm:mb-6"
                      }`}
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={500}
                        className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                          viewMode === "list"
                            ? "w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64"
                            : "w-full h-48 sm:h-64 lg:h-80"
                        }`}
                      />
                      {product.badge && (
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black text-white px-2 sm:px-4 py-1 sm:py-2 text-xs font-medium tracking-widest uppercase">
                          {product.badge}
                        </div>
                      )}
                      <div className="image-overlay" />

                      {/* Enhanced Add to Cart on Hover - Mobile Responsive */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex flex-col space-y-2">
                          <motion.button
                            onClick={(e) => {
                              e.preventDefault()
                              handleAddToCart(product)
                            }}
                            className="bg-white text-black px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg rounded"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Add to Cart
                          </motion.button>
                          <motion.button
                            onClick={(e) => {
                              e.preventDefault()
                              handleQuickView(product)
                            }}
                            className="bg-black text-white px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-lg rounded"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Quick View
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${viewMode === "list" ? "flex-1 py-2 sm:py-4 lg:py-6 pr-4 sm:pr-6" : "p-4 sm:p-6"}`}
                    >
                      <h3 className="font-medium text-base sm:text-lg lg:text-xl mb-2 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-black font-light text-base sm:text-lg">${product.price}</p>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${i < Math.floor(product.rating) ? "text-black" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <QuickViewModal />
    </div>
  )
}
