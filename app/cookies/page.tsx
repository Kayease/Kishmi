"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Cookie, Shield, Settings, Eye, BarChart3, Users, Globe, Zap } from "lucide-react"

export default function CookiesPage() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true,
  })

  const cookieTypes = [
    {
      id: "essential",
      title: "Essential Cookies",
      icon: Shield,
      description: "These cookies are necessary for the website to function and cannot be switched off.",
      examples: [
        "Shopping cart functionality",
        "User authentication",
        "Security features",
        "Basic website operations",
      ],
      gradient: "from-green-400 to-emerald-500",
      required: true,
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      icon: BarChart3,
      description: "Help us understand how visitors interact with our website by collecting anonymous information.",
      examples: [
        "Page views and traffic sources",
        "User behavior patterns",
        "Website performance metrics",
        "Error tracking and debugging",
      ],
      gradient: "from-blue-400 to-cyan-500",
      required: false,
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      icon: Eye,
      description: "Used to track visitors across websites to display relevant and engaging advertisements.",
      examples: [
        "Personalized advertisements",
        "Social media integration",
        "Retargeting campaigns",
        "Cross-platform tracking",
      ],
      gradient: "from-purple-400 to-pink-500",
      required: false,
    },
    {
      id: "preferences",
      title: "Preference Cookies",
      icon: Settings,
      description: "Remember your preferences and settings to provide a personalized experience.",
      examples: [
        "Language preferences",
        "Theme settings",
        "Saved filters and searches",
        "Customized layouts",
      ],
      gradient: "from-orange-400 to-red-500",
      required: false,
    },
  ]

  const cookieDetails = [
    {
      name: "_kishmi_session",
      purpose: "Maintains user session and shopping cart",
      duration: "Session",
      type: "Essential",
    },
    {
      name: "_kishmi_auth",
      purpose: "User authentication and security",
      duration: "30 days",
      type: "Essential",
    },
    {
      name: "_ga",
      purpose: "Google Analytics - distinguishes users",
      duration: "2 years",
      type: "Analytics",
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguishes users",
      duration: "24 hours",
      type: "Analytics",
    },
    {
      name: "_fbp",
      purpose: "Facebook Pixel - tracks conversions",
      duration: "90 days",
      type: "Marketing",
    },
    {
      name: "_kishmi_prefs",
      purpose: "Stores user preferences and settings",
      duration: "1 year",
      type: "Preferences",
    },
  ]

  const handleCookieToggle = (type: string) => {
    if (type === "essential") return // Essential cookies cannot be disabled
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const saveSettings = () => {
    // In a real implementation, this would save the settings
    console.log("Cookie settings saved:", cookieSettings)
    alert("Cookie preferences saved successfully!")
  }

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating Cookie Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 360, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-brown-400 to-amber-500 rounded-full opacity-20"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -360, 0],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-15"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              rotate: [0, 180, 0],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 10 }}
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
              <span className="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm tracking-widest uppercase rounded-full shadow-lg">
                🍪 Cookies
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Cookie Policy
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Sweet Transparency About Our Cookies
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Learn how we use cookies to enhance your browsing experience and protect your privacy.
              </p>
              <p className="text-lg text-gray-500">
                Last updated: January 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Settings Panel */}
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
              className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ⚙️ Customize
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 bg-clip-text text-transparent">
              Cookie Preferences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take control of your cookie preferences. You can enable or disable different types of cookies below.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cookie.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`w-16 h-16 bg-gradient-to-br ${cookie.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <cookie.icon size={24} />
                          </motion.div>
                          <div>
                            <h3 className="font-playfair text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                              {cookie.title}
                            </h3>
                            {cookie.required && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 inline-block">
                                Required
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button
                            onClick={() => handleCookieToggle(cookie.id)}
                            disabled={cookie.required}
                            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                              cookieSettings[cookie.id as keyof typeof cookieSettings]
                                ? `bg-gradient-to-r ${cookie.gradient}`
                                : "bg-gray-300"
                            } ${cookie.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                          >
                            <motion.span
                              className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300"
                              animate={{
                                x: cookieSettings[cookie.id as keyof typeof cookieSettings] ? 32 : 4
                              }}
                            />
                          </button>
                        </motion.div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                        {cookie.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Examples:</h4>
                        {cookie.examples.map((example, exampleIndex) => (
                          <div
                            key={exampleIndex}
                            className="flex items-center space-x-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
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

            {/* Save Settings Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={saveSettings}
                className="px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Save Cookie Preferences
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Details Table */}
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
              className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              📋 Details
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 bg-clip-text text-transparent">
              Cookie Details
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed information about the specific cookies we use on our website.
            </p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
                    <tr>
                      <th className="px-8 py-6 text-left font-playfair text-lg font-bold text-gray-900">Cookie Name</th>
                      <th className="px-8 py-6 text-left font-playfair text-lg font-bold text-gray-900">Purpose</th>
                      <th className="px-8 py-6 text-left font-playfair text-lg font-bold text-gray-900">Duration</th>
                      <th className="px-8 py-6 text-left font-playfair text-lg font-bold text-gray-900">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieDetails.map((cookie, index) => (
                      <motion.tr
                        key={cookie.name}
                        className="border-t border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-8 py-6">
                          <code className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-mono text-gray-800">
                            {cookie.name}
                          </code>
                        </td>
                        <td className="px-8 py-6 text-gray-600">{cookie.purpose}</td>
                        <td className="px-8 py-6 text-gray-600">{cookie.duration}</td>
                        <td className="px-8 py-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            cookie.type === "Essential" ? "bg-green-100 text-green-800" :
                            cookie.type === "Analytics" ? "bg-blue-100 text-blue-800" :
                            cookie.type === "Marketing" ? "bg-purple-100 text-purple-800" :
                            "bg-orange-100 text-orange-800"
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-32 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Cookie size={32} />
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">What Are Cookies?</h2>
              <p className="text-xl text-amber-100 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better, more personalized experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">How We Use Cookies</h3>
                <ul className="text-amber-100 space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Remember your preferences and settings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Keep you logged in to your account</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Analyze website traffic and performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Provide personalized content and ads</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">Managing Cookies</h3>
                <ul className="text-amber-100 space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Use our cookie preference center above</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Adjust settings in your browser</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Clear cookies from your device</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 flex-shrink-0" />
                    <span>Contact us for assistance</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-3">Questions About Cookies?</h3>
              <p className="text-amber-100 mb-4">
                If you have any questions about our use of cookies, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <span className="text-amber-200"><strong>Email:</strong> privacy@kishmi.com</span>
                <span className="text-amber-200"><strong>Phone:</strong> +1 (555) 123-4567</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}