"use client"

import { motion } from "framer-motion"
import { Scale, Shield, FileText, AlertCircle } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using the KISHMI website, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "We reserve the right to update these terms at any time without prior notice.",
      ],
    },
    {
      title: "Use License",
      icon: Scale,
      content: [
        "Permission is granted to temporarily download one copy of the materials on KISHMI's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials",
      ],
    },
    {
      title: "Product Information",
      icon: Shield,
      content: [
        "We strive to provide accurate product information, including descriptions, prices, and availability.",
        "However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.",
        "All products are subject to availability and we reserve the right to discontinue any product at any time.",
        "Prices are subject to change without notice.",
      ],
    },
    {
      title: "Orders and Payment",
      icon: AlertCircle,
      content: [
        "All orders are subject to acceptance and availability.",
        "We reserve the right to refuse or cancel any order for any reason at any time.",
        "Payment must be received before products are shipped.",
        "We accept major credit cards and other payment methods as displayed during checkout.",
        "You are responsible for providing accurate billing and shipping information.",
      ],
    },
    {
      title: "Shipping and Delivery",
      icon: FileText,
      content: [
        "Shipping costs and delivery times vary based on location and shipping method selected.",
        "Risk of loss and title for products pass to you upon delivery to the carrier.",
        "We are not responsible for delays caused by shipping carriers or customs.",
        "International customers are responsible for any customs duties, taxes, or fees.",
      ],
    },
    {
      title: "Returns and Refunds",
      icon: Scale,
      content: [
        "We offer a 30-day return policy for unopened products in original packaging.",
        "Products must be returned in their original condition to be eligible for refund.",
        "Return shipping costs are the responsibility of the customer unless the return is due to our error.",
        "Refunds will be processed within 5-10 business days after we receive the returned items.",
        "Some products may be excluded from returns for hygiene reasons.",
      ],
    },
    {
      title: "User Accounts",
      icon: Shield,
      content: [
        "You are responsible for maintaining the confidentiality of your account information.",
        "You agree to accept responsibility for all activities that occur under your account.",
        "You must notify us immediately of any unauthorized use of your account.",
        "We reserve the right to terminate accounts that violate these terms.",
      ],
    },
    {
      title: "Privacy",
      icon: AlertCircle,
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for information about how we collect, use, and protect your information.",
        "By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.",
        "We implement appropriate security measures to protect your personal information.",
      ],
    },
    {
      title: "Prohibited Uses",
      icon: FileText,
      content: [
        "You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts.",
        "You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.",
        "You may not transmit any worms, viruses, or any code of a destructive nature.",
        "You may not infringe upon or violate our intellectual property rights or the intellectual property rights of others.",
      ],
    },
    {
      title: "Limitation of Liability",
      icon: Scale,
      content: [
        "KISHMI shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
        "Our total liability to you for any damages shall not exceed the amount you paid for products purchased from us.",
        "Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for damages.",
        "In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.",
      ],
    },
    {
      title: "Governing Law",
      icon: Shield,
      content: [
        "These terms and conditions are governed by and construed in accordance with the laws of New York, United States.",
        "Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of New York.",
        "If any provision of these terms is found to be invalid, the remaining provisions shall remain in full force and effect.",
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
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
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
                ⚖️ Legal
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Terms & Conditions
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our service.
              </p>
              <p className="text-lg text-gray-500">
                Last updated: January 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <section.icon size={28} />
                        </motion.div>
                        <h2 className="font-playfair text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                          {section.title}
                        </h2>
                      </div>

                      <div className="space-y-4">
                        {section.content.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="flex items-start space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-2xl"
            >
              <h2 className="font-playfair text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> legal@kishmi.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Beauty Avenue, New York, NY 10001</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center pt-8 border-t border-gray-200 mt-16"
            >
              <p className="text-gray-500 text-sm">
                These terms and conditions are effective as of January 1, 2024, and will remain in effect except with
                respect to any changes in its provisions in the future, which will be in effect immediately after
                being posted on this page.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}