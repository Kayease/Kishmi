"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedCategories({ featuredCategories }) {
  return (
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
                    </div>
                  </div>
                </div>
              </Link>
              {/* Floating Gradient Dot */}
              <motion.div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${category.gradient} rounded-full opacity-60`}
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.7 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 