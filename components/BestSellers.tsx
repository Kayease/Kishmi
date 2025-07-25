"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

type Product = {
  id: string | number
  gradient: string
  name: string
  badge?: string
  onSale?: boolean
  description: string
  rating: number
  reviews: number
  price: number
  originalPrice?: number
  hasSelectSize?: boolean
  features?: string[]
}

interface BestSellersProps {
  products: Product[]
  handleAddToCart: (product: Product) => void
  handleQuickView: (product: Product) => void
}

export default function BestSellers({ products, handleAddToCart, handleQuickView }: BestSellersProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      {/* Floating Gradient Elements for extra creativity */}
      <motion.div
        className="absolute -top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-2xl z-0"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-100/40 to-pink-100/40 rounded-full blur-2xl z-0"
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
      <div className="container-max section-padding relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-6 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ⭐ Customer Favorites
          </motion.span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Best Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the products our customers can't stop raving about
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 8px 32px 0 rgba(255, 0, 128, 0.12)" }}
                className="relative group"
              >
                <HoverCard openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden border-0 shadow-xl bg-white group-hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-72 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-60`} />
                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-3 shadow-lg">
                            <span className="text-white font-bold text-lg tracking-widest">KISHMI</span>
                          </div>
                          <div className="text-xs text-gray-600 font-medium mb-1">
                            {typeof product.name === 'string' ? product.name.split(' ').slice(0, 2).join(' ') : ''}
                          </div>
                          {/* Creative Badge */}
                          {product.badge && (
                            <Badge variant={product.badge === 'Best Seller' ? 'default' : product.badge === 'Trending' ? 'secondary' : 'outline'} className="absolute top-4 left-4 text-xs px-3 py-1 shadow-md">
                              {product.badge}
                            </Badge>
                          )}
                          {product.onSale && (
                            <Badge variant="destructive" className="absolute top-4 right-4 text-xs px-3 py-1 shadow-md">SALE</Badge>
                          )}
                        </div>
                        {/* Floating dot for extra flair */}
                        <motion.div
                          className="absolute -bottom-3 right-6 w-6 h-6 bg-gradient-to-br from-pink-400 to-yellow-300 rounded-full opacity-70 blur-sm"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />
                      </div>
                      <CardContent className="pt-6 pb-2">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">
                          {product.name}
                        </CardTitle>
                        <div className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 min-h-[40px]">
                          {product.description}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${i < Math.floor(product.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : i < product.rating
                                    ? "fill-yellow-400/50 text-yellow-400"
                                    : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-500 text-xs">({product.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-3 mb-2">
                          {product.onSale ? (
                            <>
                              <span className="text-xs text-gray-500">On Sale from</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-gray-900">₹ {product.price}</span>
                                {product.originalPrice && (
                                  <span className="text-sm text-gray-500 line-through">₹ {product.originalPrice}</span>
                                )}
                              </div>
                            </>
                          ) : (
                            <span className="text-lg font-bold text-gray-900">₹ {product.price}</span>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col gap-2 pt-0">
                        {product.hasSelectSize ? (
                          <motion.button
                            className="w-full bg-black text-white py-3 px-6 font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 rounded-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleQuickView(product)}
                          >
                            Select Size
                          </motion.button>
                        ) : (
                          <motion.button
                            className="w-full bg-black text-white py-3 px-6 font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 rounded-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </motion.button>
                        )}
                      </CardFooter>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="z-50">
                    <div className="font-semibold mb-2">{product.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{product.description}</div>
                    {product.features && (
                      <ul className="text-xs text-gray-700 mb-2 list-disc pl-4">
                        {product.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex gap-2 mt-2">
                      <button
                        className="bg-black text-white px-3 py-1 rounded text-xs font-medium hover:bg-gray-800 transition"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="border border-black text-black px-3 py-1 rounded text-xs font-medium hover:bg-black hover:text-white transition"
                        onClick={() => handleQuickView(product)}
                      >
                        Quick View
                      </button>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
