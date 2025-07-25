"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Heart, Star } from "lucide-react"

export default function BeautyJournal({ articles }) {
  return (
    <section className="py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-2xl"
          animate={{ x: [0, 50, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full blur-2xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 0.9, 1] }}
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
            {articles.map((article, index) => (
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
  )
} 