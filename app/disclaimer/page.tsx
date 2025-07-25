"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Shield, FileText, Info, ExternalLink, Users, Heart, Zap } from "lucide-react"

export default function DisclaimerPage() {
  const disclaimers = [
    {
      title: "Product Information",
      icon: Info,
      content: [
        "Product descriptions, images, and specifications are provided for informational purposes only",
        "Colors may appear differently on various devices and screens",
        "Individual results may vary based on skin type, application, and environmental factors",
        "We strive for accuracy but cannot guarantee all information is error-free",
        "Product formulations may change without notice to improve quality",
        "Always check product labels for the most current ingredient information",
      ],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Health and Safety",
      icon: Heart,
      content: [
        "Perform a patch test before using any new cosmetic product",
        "Discontinue use if irritation, redness, or allergic reaction occurs",
        "Consult a dermatologist if you have sensitive skin or known allergies",
        "Keep products away from eyes unless specifically designed for eye area",
        "Store products in a cool, dry place away from direct sunlight",
        "Do not use products past their expiration date",
      ],
      gradient: "from-red-400 to-pink-500",
    },
    {
      title: "Usage and Results",
      icon: Zap,
      content: [
        "Results may vary from person to person based on individual factors",
        "Follow application instructions for best results",
        "Some products may require consistent use to see desired effects",
        "Professional application may yield different results than home use",
        "Environmental factors may affect product performance",
        "We do not guarantee specific outcomes or timeframes for results",
      ],
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      title: "Medical Conditions",
      icon: Shield,
      content: [
        "Consult your healthcare provider before use if you are pregnant or nursing",
        "Seek medical advice if you have any skin conditions or allergies",
        "Some ingredients may interact with medications or treatments",
        "Do not use on broken, irritated, or infected skin",
        "If you experience severe reactions, seek immediate medical attention",
        "This information is not intended as medical advice",
      ],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Website Content",
      icon: FileText,
      content: [
        "Information on this website is for general informational purposes only",
        "We make no representations about the accuracy or completeness of content",
        "Content may be updated or changed without notice",
        "User-generated content (reviews, comments) reflects individual opinions",
        "We are not responsible for the accuracy of user-submitted content",
        "Some content may be provided by third parties",
      ],
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Third-Party Links",
      icon: ExternalLink,
      content: [
        "Our website may contain links to third-party websites",
        "We are not responsible for the content or practices of linked sites",
        "Third-party sites have their own terms of use and privacy policies",
        "We do not endorse or guarantee third-party products or services",
        "Use of third-party sites is at your own risk",
        "We recommend reviewing third-party policies before use",
      ],
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      title: "Professional Advice",
      icon: Users,
      content: [
        "Information provided is not a substitute for professional advice",
        "Consult qualified professionals for specific concerns or conditions",
        "Beauty consultations are for informational purposes only",
        "We do not provide medical, dermatological, or therapeutic advice",
        "Individual consultations do not create professional relationships",
        "Always verify information with qualified professionals",
      ],
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        "Use of our products and website is at your own risk",
        "We are not liable for any direct, indirect, or consequential damages",
        "Our liability is limited to the maximum extent permitted by law",
        "We do not warrant uninterrupted or error-free website operation",
        "Some jurisdictions may not allow certain liability limitations",
        "These limitations apply to the fullest extent permitted by law",
      ],
      gradient: "from-pink-400 to-rose-500",
    },
  ]

  const importantNotes = [
    {
      title: "Patch Testing",
      description: "Always perform a patch test 24-48 hours before using any new product on a larger area.",
      icon: "🧪",
    },
    {
      title: "Ingredient Awareness",
      description: "Check ingredient lists carefully if you have known allergies or sensitivities.",
      icon: "📋",
    },
    {
      title: "Professional Consultation",
      description: "Consult with dermatologists or healthcare providers for specific skin concerns.",
      icon: "👩‍⚕️",
    },
    {
      title: "Product Storage",
      description: "Store products properly to maintain their effectiveness and safety.",
      icon: "🏠",
    },
  ]

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"
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
                ⚠️ Important
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Disclaimer
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Important Information for Safe Use
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Please read this disclaimer carefully before using KISHMI products or services. Your safety and satisfaction are our top priorities.
              </p>
              <p className="text-lg text-gray-500">
                Last updated: January 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Important Safety Notes */}
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
              ✨ Safety First
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Safety Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Essential safety information for using our products responsibly.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {importantNotes.map((note, index) => (
                <motion.div
                  key={note.title}
                  className="group text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    <motion.div
                      className="text-5xl mb-6"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      {note.icon}
                    </motion.div>
                    <h3 className="font-playfair text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {note.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Details */}
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
              ✨ Details
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Detailed Disclaimers
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {disclaimers.map((disclaimer, index) => (
                <motion.div
                  key={disclaimer.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${disclaimer.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${disclaimer.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <disclaimer.icon size={24} />
                        </motion.div>
                        <h3 className="font-playfair text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                          {disclaimer.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {disclaimer.content.map((item, itemIndex) => (
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

      {/* Emergency Contact Section */}
      <section className="py-32 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle size={32} />
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">In Case of Emergency</h2>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                If you experience a severe allergic reaction or adverse effect from any of our products, seek immediate medical attention.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold mb-3">Immediate Actions</h3>
                  <ul className="text-red-100 text-sm space-y-2 text-left">
                    <li>• Stop using the product immediately</li>
                    <li>• Rinse affected area with cool water</li>
                    <li>• Do not rub or scratch the area</li>
                    <li>• Seek medical attention if symptoms persist</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold mb-3">Contact Information</h3>
                  <div className="text-red-100 text-sm space-y-2 text-left">
                    <p><strong>Emergency:</strong> Call 911 (US) or local emergency services</p>
                    <p><strong>Poison Control:</strong> 1-800-222-1222 (US)</p>
                    <p><strong>KISHMI Support:</strong> support@kishmi.com</p>
                    <p><strong>24/7 Hotline:</strong> +1 (555) 123-4567</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-red-100 text-sm">
                  <strong>Remember:</strong> This disclaimer does not replace professional medical advice. 
                  Always consult with healthcare professionals for specific medical concerns or conditions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}