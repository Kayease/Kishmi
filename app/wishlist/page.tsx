"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"
import { useStore } from "@/lib/store"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart } = useStore()

  const handleAddToCart = (product: any) => {
    addToCart(product)
    removeFromWishlist(product.id)
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">My Wishlist</h1>
            <p className="text-gray-600 text-lg">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved for later
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="py-16">
        <div className="container-max section-padding">
          {wishlistItems.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heart size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start adding products you love to your wishlist. They'll appear here for easy access later.
              </p>
              <Link href="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors duration-200"
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-medium tracking-widest uppercase">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-light">${product.price}</span>
                      {product.rating && (
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${i < Math.floor(product.rating!) ? "text-black" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 space-y-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <ShoppingBag size={16} />
                        <span>Add to Cart</span>
                      </button>
                      <Link
                        href={`/shop/${product.id}`}
                        className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:border-black hover:text-black transition-colors duration-200 text-center block"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
