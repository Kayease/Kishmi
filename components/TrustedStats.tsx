"use client"

import { motion } from "framer-motion"

export default function TrustedStats({ stats }) {
  return (
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
  )
} 