"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account, making a purchase, or contacting us",
        "Payment information processed securely through our payment partners",
        "Usage data and analytics to improve our website and services",
        "Cookies and similar technologies for website functionality and personalization",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your orders and transactions",
        "Communicate with you about your account and our products",
        "Provide customer support and respond to your inquiries",
        "Send marketing communications (with your consent)",
        "Improve our products, services, and website experience",
        "Comply with legal obligations and protect our rights",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist in our operations",
        "Information may be disclosed if required by law or to protect our rights",
        "Anonymous, aggregated data may be shared for business purposes",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your information",
        "All payment transactions are encrypted and processed securely",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates are performed to maintain protection",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request corrections to inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Request a copy of your data in a portable format",
      ],
    },
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">Last updated: January 2024</p>
            <p className="text-gray-600 mt-4">
              At KISHMI, we are committed to protecting your privacy and ensuring the security of your personal
              information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="font-playfair text-2xl font-bold mb-6 text-black">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3 text-gray-600">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-lg"
                >
                  <h2 className="font-playfair text-2xl font-bold mb-4 text-black">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Email:</strong> privacy@kishmi.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Beauty Avenue, New York, NY 10001
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center pt-8 border-t border-gray-200"
                >
                  <p className="text-gray-500 text-sm">
                    This privacy policy is effective as of January 1, 2024, and will remain in effect except with
                    respect to any changes in its provisions in the future, which will be in effect immediately after
                    being posted on this page.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
