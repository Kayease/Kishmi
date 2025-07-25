"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, TrendingUp } from "lucide-react"
import { useStore } from "@/lib/store"
import Link from "next/link"

export default function SearchModal() {
  const { isSearchOpen, setSearchOpen } = useStore()
  const [searchQuery, setSearchQuery] = useState("")

  const trendingSearches = ["Matte Lipstick", "Foundation", "Skincare", "Eye Makeup", "Highlighter", "Serum"]

  const recentSearches = ["Velvet Matte Lipstick", "Radiance Foundation", "Glow Highlighter"]

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isSearchOpen])

  const handleClose = () => {
    setSearchOpen(false)
    setSearchQuery("")
  }

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl mx-4 sm:mx-8 lg:mx-auto lg:max-w-2xl mt-8 sm:mt-16 lg:mt-24 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="flex items-center p-4 sm:p-6 border-b border-gray-100">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors duration-300"
                  autoFocus
                />
              </div>
              <button
                onClick={handleClose}
                className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Content */}
            <div className="p-4 sm:p-6 max-h-96 overflow-y-auto">
              {searchQuery ? (
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Search Results</h3>
                  <p className="text-gray-500">Searching for "{searchQuery}"...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Trending Searches */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp size={18} className="text-gray-600" />
                      <h3 className="font-medium text-gray-900">Trending Searches</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      {trendingSearches.map((search, index) => (
                        <motion.button
                          key={search}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors duration-200 text-left"
                          onClick={() => setSearchQuery(search)}
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Recent Searches</h3>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <motion.button
                            key={search}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            onClick={() => setSearchQuery(search)}
                          >
                            <Search size={16} className="text-gray-400" />
                            <span className="text-gray-700">{search}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Links */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <Link
                        href="/shop?category=lips"
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={handleClose}
                      >
                        <span className="text-2xl">💋</span>
                        <div>
                          <div className="font-medium text-gray-900">Lips</div>
                          <div className="text-sm text-gray-500">Lipsticks & Glosses</div>
                        </div>
                      </Link>
                      <Link
                        href="/shop?category=face"
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={handleClose}
                      >
                        <span className="text-2xl">✨</span>
                        <div>
                          <div className="font-medium text-gray-900">Face</div>
                          <div className="text-sm text-gray-500">Foundation & Concealer</div>
                        </div>
                      </Link>
                      <Link
                        href="/shop?category=eyes"
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={handleClose}
                      >
                        <span className="text-2xl">👁️</span>
                        <div>
                          <div className="font-medium text-gray-900">Eyes</div>
                          <div className="text-sm text-gray-500">Eyeshadow & Liner</div>
                        </div>
                      </Link>
                      <Link
                        href="/shop?category=skincare"
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={handleClose}
                      >
                        <span className="text-2xl">🌿</span>
                        <div>
                          <div className="font-medium text-gray-900">Skincare</div>
                          <div className="text-sm text-gray-500">Serums & Treatments</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
