"use client"

import { motion } from "framer-motion"
import { Play, Star, Users, Heart } from "lucide-react"

export default function InfluencerTestimonials() {
  // You can move influencer data and stats to props if needed
  const stats = [
    { number: "500+", label: "Influencer Partners", icon: Users },
    { number: "2.5M+", label: "Video Views", icon: Play },
    { number: "4.9", label: "Average Rating", icon: Star },
    { number: "95%", label: "Recommend KISHMI", icon: Heart }
  ]
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
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
            💫 Real Stories
          </motion.span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-800 via-pink-700 to-rose-800 bg-clip-text text-transparent">
            What Influencers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover authentic reviews from beauty influencers who trust KISHMI for their daily routines
          </p>
        </motion.div>
        {/* ... (rest of the section, including video carousel and stats, can be copied from the original) ... */}
        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={24} className="text-rose-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 