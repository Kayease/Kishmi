"use client"

import { motion } from "framer-motion"
import { Truck, Globe, Clock, Shield, Package, MapPin, CheckCircle } from "lucide-react"

export default function ShippingPage() {
  const shippingInfo = [
    {
      title: "Processing Time",
      icon: Clock,
      content: [
        "Orders are processed within 1–2 business days",
        "Orders placed after 2 PM IST will be processed the next business day",
        "Weekend and holiday orders are processed on the next business day",
        "Custom or personalized items may require additional processing time",
      ],
    },
    {
      title: "Delivery Timeline",
      icon: Truck,
      content: [
        "Standard delivery timeline: 3–7 business days depending on location",
        "We currently ship to all major cities and towns across India",
        "Free shipping is available on eligible prepaid orders",
        "For Cash on Delivery (COD) orders, additional handling may apply",
      ],
    },
    {
      title: "Courier Partners",
      icon: Package,
      content: [
        "We partner with trusted Indian courier services",
        "Delhivery, Blue Dart, and India Post",
        "All orders include tracking information",
        "You'll receive a tracking number via email/SMS once your order ships",
      ],
    },
    {
      title: "Delivery Details",
      icon: Shield,
      content: [
        "All products are carefully packaged to prevent damage during shipping",
        "We use eco-friendly packaging materials whenever possible",
        "Orders are discreetly packaged with no external branding",
        "Business addresses may have faster delivery times",
      ],
    },
  ]

  const faqs = [
    {
      question: "Do you offer international shipping?",
      answer: "No. Currently, we only ship within India."
    },
    {
      question: "How do I track my order?",
      answer: "Once dispatched, you'll receive a tracking link via email/SMS."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled within 4 hours of placing them. Modification is not allowed post-payment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, net banking, and Cash on Delivery (COD)."
    }
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
              className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Shipping Information
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Fast, Reliable Delivery Across India
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We currently ship to all major cities and towns across India with trusted courier partners.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Information */}
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
              ✨ India Only
            </motion.span>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Shipping Details
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our shipping process in India.
            </p>
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
                      <h3 className="font-montserrat text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
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

      {/* FAQs Section */}
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
              ❓ FAQs
            </motion.span>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
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