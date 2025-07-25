"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart, Star, Minus, Plus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { useStore } from "@/lib/store"

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, addToWishlist, isInWishlist } = useStore()
  const [quantity, setQuantity] = useState(1)
  const [selectedShade, setSelectedShade] = useState(0)

  const handleClose = () => {
    setQuickViewProduct(null)
    setQuantity(1)
    setSelectedShade(0)
  }

  const handleAddToCart = () => {
    if (quickViewProduct) {
      addToCart(quickViewProduct, { quantity })
      handleClose()
    }
  }

  const handleWishlist = () => {
    if (quickViewProduct) {
      if (isInWishlist(quickViewProduct.id)) {
        // Remove from wishlist logic would go here
      } else {
        addToWishlist(quickViewProduct)
      }
    }
  }

  if (!quickViewProduct) return null

  const shades = ["Ruby Red", "Rose Pink", "Coral Sunset", "Berry Wine"]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="relative aspect-square md:aspect-[4/5] bg-gray-50">
              <Image
                src={quickViewProduct.image || "/placeholder.svg"}
                alt={quickViewProduct.name}
                fill
                className="object-cover"
              />
              {quickViewProduct.badge && (
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full ${
                      quickViewProduct.badge === "Bestseller"
                        ? "bg-black text-white"
                        : quickViewProduct.badge === "Sale"
                          ? "bg-red-500 text-white"
                          : quickViewProduct.badge === "New"
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-white"
                    }`}
                  >
                    {quickViewProduct.badge}
                  </span>
                </div>
              )}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Product Details */}
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm text-gray-500 tracking-wide uppercase">{quickViewProduct.category}</span>
                    <h2 className="font-playfair text-2xl sm:text-3xl font-bold mt-1">{quickViewProduct.name}</h2>
                  </div>
                  <button
                    onClick={handleWishlist}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      isInWishlist(quickViewProduct.id) ? "bg-red-50 text-red-500" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <Heart size={20} className={isInWishlist(quickViewProduct.id) ? "fill-current" : ""} />
                  </button>
                </div>

                {quickViewProduct.rating && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${i < Math.floor(quickViewProduct.rating!) ? "fill-black text-black" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {quickViewProduct.rating} ({quickViewProduct.reviews} reviews)
                    </span>
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl sm:text-3xl font-light">${quickViewProduct.price}</span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">${quickViewProduct.originalPrice}</span>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{quickViewProduct.description}</p>

                {/* Shade Selection */}
                {quickViewProduct.category === "lips" && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Choose Your Shade:</h3>
                    <div className="flex flex-wrap gap-2">
                      {shades.map((shade, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedShade(index)}
                          className={`px-3 py-2 text-sm border rounded-full transition-all duration-200 ${
                            selectedShade === index
                              ? "border-black bg-black text-white"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          {shade}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Quantity:</h3>
                  <div className="flex items-center border-2 border-gray-200 rounded-lg w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-3 min-w-[60px] text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <motion.button
                  onClick={handleAddToCart}
                  className="btn-primary w-full flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag size={20} />
                  <span>Add to Cart - ${(quickViewProduct.price * quantity).toFixed(2)}</span>
                </motion.button>
                <button onClick={handleClose} className="btn-secondary w-full">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
