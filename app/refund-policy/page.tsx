"use client"

import { motion } from "framer-motion"
import { RotateCcw, Clock, Shield, CreditCard, Package, AlertTriangle, Mail, CheckCircle } from "lucide-react"

export default function RefundPolicyPage() {
  const sections = [
    {
      title: "Return Window",
      icon: Clock,
      content: [
        "Returns accepted within 7 days of delivery only if the product is damaged, expired, or incorrect.",
        "Items must be returned in their original, unopened condition with all original packaging.",
        "Products that have been opened, used, or damaged cannot be returned for hygiene and safety reasons.",
        "The return window begins from the date of delivery, not the date of purchase.",
      ],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Return Process",
      icon: RotateCcw,
      content: [
        "To initiate a return, email us at care@kishmi.in with your order ID and product image.",
        "Once approved, a reverse pickup will be scheduled.",
        "Package items securely in original packaging.",
        "Include the order ID and original receipt.",
        "We partner with trusted Indian courier services for reverse pickup.",
      ],
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      title: "Refund Processing",
      icon: CreditCard,
      content: [
        "Refunds are processed within 7–10 working days post return pickup and quality check.",
        "Refunds will be made to the original payment method.",
        "COD orders will be refunded via bank transfer.",
        "Original shipping costs are non-refundable unless the return is due to our error.",
        "Return shipping costs are covered by KISHMI for approved returns.",
      ],
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Eligible Items",
      icon: Package,
      content: [
        "Damaged products received in original condition",
        "Expired products (if received past expiry date)",
        "Incorrect products shipped by our error",
        "Unopened cosmetic products in original packaging",
        "Unused skincare items with intact seals",
      ],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Non-Returnable Items",
      icon: AlertTriangle,
      content: [
        "Opened or used cosmetic products (for hygiene reasons)",
        "Products without original packaging or labels",
        "Items damaged by misuse or normal wear",
        "Products purchased with special promotions or discounts (unless defective)",
        "Personal care items for health and safety reasons",
      ],
      gradient: "from-red-400 to-pink-500",
    },
    {
      title: "Damaged or Defective Items",
      icon: Shield,
      content: [
        "We will provide full refunds or exchanges for damaged or defective products",
        "Contact us within 7 days of receiving a damaged item",
        "Provide photos of the damaged product and packaging",
        "We will cover return shipping costs for damaged or defective items",
        "Replacement items will be sent at no additional cost",
      ],
      gradient: "from-teal-400 to-cyan-500",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Contact Us",
      description: "Email us at care@kishmi.in with your order ID and product image.",
    },
    {
      step: "02",
      title: "Get Approval",
      description: "Receive approval and return instructions from our customer service team.",
    },
    {
      step: "03",
      title: "Schedule Pickup",
      description: "A reverse pickup will be scheduled with our trusted courier partners.",
    },
    {
      step: "04",
      title: "Quality Check",
      description: "We'll inspect your return and verify the product condition.",
    },
    {
      step: "05",
      title: "Refund Process",
      description: "Refunds are processed within 7–10 working days to your original payment method.",
    },
  ]

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
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
                ↩️ Returns
              </span>
            </motion.div>

            <motion.h1
              className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Returns & Refund Policy
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Your Satisfaction is Our Priority
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We want you to be completely satisfied with your KISHMI purchase. If you're not happy with your order, we're here to help.
              </p>
              <p className="text-lg text-gray-500">
                Last updated: January 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Return Process Steps */}
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
              ✨ Process
            </motion.span>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              How to Return
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to return your KISHMI products.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 -translate-y-1/2" />
                    )}
                  </motion.div>
                  <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Details */}
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
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Policy Details
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Icon with Gradient Background */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.gradient} text-white rounded-2xl mb-6 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <section.icon size={24} />
                      </motion.div>

                      <h3 className="font-montserrat text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {section.title}
                      </h3>

                      <div className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{item}</span>
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

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
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
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">Need Help with a Return?</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our customer service team is here to assist you with any questions about returns or refunds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Email Support</h3>
                  <p className="text-gray-300">care@kishmi.in</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Response Time</h3>
                  <p className="text-gray-300">Within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Easy Process</h3>
                  <p className="text-gray-300">Simple return process</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
