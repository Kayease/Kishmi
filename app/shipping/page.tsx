"use client"

import { motion } from "framer-motion"
import { Truck, Globe, Clock, Shield, Package, MapPin } from "lucide-react"

export default function ShippingPage() {
  const shippingOptions = [
    {
      title: "Standard Shipping",
      icon: Truck,
      time: "3-5 Business Days",
      cost: "Free on orders $50+",
      description: "Our most popular shipping option with reliable delivery times.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Express Shipping",
      icon: Clock,
      time: "1-2 Business Days",
      cost: "$9.99",
      description: "Fast delivery for when you need your products quickly.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Overnight Shipping",
      icon: Package,
      time: "Next Business Day",
      cost: "$19.99",
      description: "Get your order the next business day (order by 2 PM EST).",
      gradient: "from-red-400 to-orange-500",
    },
    {
      title: "International Shipping",
      icon: Globe,
      time: "7-14 Business Days",
      cost: "Varies by location",
      description: "We ship to over 25 countries worldwide.",
      gradient: "from-green-400 to-emerald-500",
    },
  ]

  const internationalCountries = [
    { region: "North America", countries: ["Canada", "Mexico"], flag: "🇨🇦" },
    { region: "Europe", countries: ["United Kingdom", "France", "Germany", "Italy", "Spain", "Netherlands"], flag: "🇪🇺" },
    { region: "Asia Pacific", countries: ["Australia", "Japan", "South Korea", "Singapore", "Hong Kong"], flag: "🌏" },
    { region: "Other", countries: ["Brazil", "South Africa", "UAE", "Israel"], flag: "🌍" },
  ]

  const shippingInfo = [
    {
      title: "Processing Time",
      icon: Clock,
      content: [
        "Orders are processed within 1-2 business days",
        "Orders placed after 2 PM EST will be processed the next business day",
        "Weekend and holiday orders are processed on the next business day",
        "Custom or personalized items may require additional processing time",
      ],
    },
    {
      title: "Packaging",
      icon: Package,
      content: [
        "All products are carefully packaged to prevent damage during shipping",
        "We use eco-friendly packaging materials whenever possible",
        "Fragile items receive extra protective packaging",
        "Orders are discreetly packaged with no external branding",
      ],
    },
    {
      title: "Tracking",
      icon: MapPin,
      content: [
        "All orders include tracking information",
        "You'll receive a tracking number via email once your order ships",
        "Track your order status in real-time through our website",
        "SMS tracking updates available upon request",
      ],
    },
    {
      title: "Delivery",
      icon: Shield,
      content: [
        "Signature confirmation required for orders over $100",
        "We're not responsible for packages stolen after delivery",
        "Delivery to PO boxes available for standard shipping only",
        "Business addresses may have faster delivery times",
      ],
    },
  ]

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
          />
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-block px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm tracking-widest uppercase rounded-full shadow-lg">
                🚚 Delivery
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Shipping Info
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Fast, Reliable Delivery Worldwide
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We offer multiple shipping options to get your KISHMI products to you quickly and safely.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
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
              className="inline-block px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ✨ Options
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Shipping Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the shipping method that works best for you.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {shippingOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 text-center">
                      {/* Icon with Gradient Background */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${option.gradient} text-white rounded-2xl mb-6 shadow-lg mx-auto`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <option.icon size={32} />
                      </motion.div>

                      <h3 className="font-playfair text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {option.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <p className="text-lg font-semibold text-gray-800">{option.time}</p>
                        <p className="text-sm font-medium text-gray-600">{option.cost}</p>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {option.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🌍 Global
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              International Shipping
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We proudly ship KISHMI products to customers around the world.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {internationalCountries.map((region, index) => (
                <motion.div
                  key={region.region}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{region.flag}</div>
                      <h3 className="font-playfair text-xl font-bold mb-4 text-gray-900">{region.region}</h3>
                      <div className="space-y-2">
                        {region.countries.map((country, countryIndex) => (
                          <p key={countryIndex} className="text-gray-600 text-sm">
                            {country}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-2xl font-bold mb-4 text-center">International Shipping Notes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="font-semibold mb-2">Customs & Duties</h4>
                  <p className="text-sm">International customers are responsible for any customs duties, taxes, or fees imposed by their country.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Times</h4>
                  <p className="text-sm">International delivery times may vary due to customs processing and local postal services.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Restrictions</h4>
                  <p className="text-sm">Some products may be restricted in certain countries. We'll notify you if any items cannot be shipped.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Currency</h4>
                  <p className="text-sm">All prices are displayed in USD. Your bank may charge currency conversion fees.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ✨ Details
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Important Information
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {shippingInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon size={24} />
                      </motion.div>
                      <h3 className="font-playfair text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {info.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {info.content.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}