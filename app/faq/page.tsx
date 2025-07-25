"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, Search, Sparkles, Heart, Shield, Truck, CreditCard, Users, Globe } from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const categories = [
    { id: "all", label: "All Questions", icon: Globe, count: 24 },
    { id: "products", label: "Products", icon: Sparkles, count: 8 },
    { id: "orders", label: "Orders & Shipping", icon: Truck, count: 6 },
    { id: "account", label: "Account", icon: Users, count: 4 },
    { id: "returns", label: "Returns", icon: Shield, count: 3 },
    { id: "payment", label: "Payment", icon: CreditCard, count: 3 },
  ]

  const faqs = [
    {
      id: 1,
      category: "products",
      question: "What makes KISHMI products different from other cosmetic brands?",
      answer: "KISHMI products are formulated with premium natural ingredients and designed with a minimalist philosophy. We focus on quality over quantity, creating versatile products that enhance your natural beauty. Each product undergoes rigorous testing and is crafted with sustainable practices in mind.",
      popular: true,
    },
    {
      id: 2,
      category: "products",
      question: "Are your products cruelty-free and vegan?",
      answer: "Yes, all KISHMI products are 100% cruelty-free and vegan. We never test on animals and work only with suppliers who share our ethical values. We're certified by Leaping Bunny and PETA, ensuring our commitment to animal welfare.",
      popular: true,
    },
    {
      id: 3,
      category: "orders",
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and overnight shipping are also available. International shipping times vary by location, typically 7-14 business days. All orders include tracking information.",
      popular: true,
    },
    {
      id: 4,
      category: "returns",
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unopened products in original packaging. If you're not completely satisfied, contact our customer service team. Return shipping is free for defective items, and we'll provide a prepaid return label.",
      popular: true,
    },
    {
      id: 5,
      category: "products",
      question: "How do I choose the right shade for my skin tone?",
      answer: "We offer a virtual shade matching tool on our website, or you can visit one of our partner stores for professional color matching. Our customer service team can also help you choose the perfect shade based on your preferences and skin tone description.",
    },
    {
      id: 6,
      category: "orders",
      question: "Can I track my order?",
      answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website or using our mobile app. SMS tracking updates are available upon request.",
    },
    {
      id: 7,
      category: "products",
      question: "What ingredients do you use in your products?",
      answer: "We use premium natural ingredients including botanical extracts, vitamins, and minerals. All ingredients are ethically sourced and sustainably harvested. You can find complete ingredient lists on each product page and packaging.",
    },
    {
      id: 8,
      category: "orders",
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 25 countries worldwide. International shipping costs and delivery times vary by destination. All duties and taxes are the responsibility of the customer. Some products may be restricted in certain countries.",
    },
    {
      id: 9,
      category: "account",
      question: "How do I create an account?",
      answer: "Click 'Sign Up' at the top of our website and fill in your details. Creating an account allows you to track orders, save favorites, access exclusive offers, and enjoy faster checkout. Account creation is free and takes less than a minute.",
    },
    {
      id: 10,
      category: "payment",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through encrypted connections to protect your information.",
    },
    {
      id: 11,
      category: "products",
      question: "How should I store my KISHMI products?",
      answer: "Store products in a cool, dry place away from direct sunlight. Keep products tightly closed when not in use. Some products may require refrigeration - check individual product instructions. Proper storage extends product life and maintains effectiveness.",
    },
    {
      id: 12,
      category: "orders",
      question: "Can I modify or cancel my order after placing it?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After this time, orders enter our fulfillment process and cannot be changed. Contact customer service immediately if you need to make changes.",
    },
    {
      id: 13,
      category: "products",
      question: "Do you offer samples or trial sizes?",
      answer: "Yes! We offer sample sizes for most products and deluxe samples with qualifying purchases. Our Discovery Sets are perfect for trying multiple products. Sample sizes are also available for purchase on our website.",
    },
    {
      id: 14,
      category: "account",
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link within a few minutes. If you don't see the email, check your spam folder or contact customer service for assistance.",
    },
    {
      id: 15,
      category: "returns",
      question: "Can I return opened products?",
      answer: "For hygiene and safety reasons, we cannot accept returns of opened cosmetic products unless they are defective. However, if you experience any issues with a product, please contact us - we stand behind our quality and will work to resolve any concerns.",
    },
    {
      id: 16,
      category: "payment",
      question: "Is my payment information secure?",
      answer: "Absolutely. We use industry-standard SSL encryption and are PCI DSS compliant. We never store your complete credit card information on our servers. All transactions are processed through secure, encrypted connections.",
    },
    {
      id: 17,
      category: "products",
      question: "Are your products suitable for sensitive skin?",
      answer: "Many of our products are formulated for sensitive skin, but we recommend patch testing before use. Products suitable for sensitive skin are clearly marked. If you have specific concerns, consult with a dermatologist or contact our customer service team.",
    },
    {
      id: 18,
      category: "orders",
      question: "What if my order arrives damaged?",
      answer: "We're sorry if your order arrives damaged! Contact us within 48 hours with photos of the damaged items and packaging. We'll send replacements immediately at no cost and provide a prepaid return label for the damaged items.",
    },
    {
      id: 19,
      category: "account",
      question: "Can I change my shipping address after creating an account?",
      answer: "Yes, you can update your shipping address in your account settings at any time. You can also add multiple addresses and choose different shipping addresses for different orders during checkout.",
    },
    {
      id: 20,
      category: "products",
      question: "How long do KISHMI products last?",
      answer: "Product shelf life varies by item. Unopened products typically last 2-3 years from manufacture date. Once opened, most products should be used within 6-12 months. Check the PAO (Period After Opening) symbol on packaging for specific guidance.",
    },
    {
      id: 21,
      category: "orders",
      question: "Do you offer gift wrapping?",
      answer: "Yes! We offer beautiful gift wrapping options during checkout. Choose from elegant boxes, gift bags, or custom wrapping. Gift messages can be included, and we can ship directly to the recipient with your personal note.",
    },
    {
      id: 22,
      category: "payment",
      question: "Can I use multiple payment methods for one order?",
      answer: "Currently, we accept one payment method per order. However, you can use gift cards in combination with other payment methods. If you need to split payment across multiple cards, please contact customer service for assistance.",
    },
    {
      id: 23,
      category: "returns",
      question: "How long does it take to process a refund?",
      answer: "Refunds are processed within 5-10 business days after we receive your returned items. The refund will appear on your original payment method. Processing times may vary depending on your bank or credit card company.",
    },
    {
      id: 24,
      category: "account",
      question: "How do I unsubscribe from marketing emails?",
      answer: "You can unsubscribe by clicking the 'Unsubscribe' link at the bottom of any marketing email, or by updating your preferences in your account settings. You'll continue to receive order confirmations and important account updates.",
    },
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularFAQs = faqs.filter(faq => faq.popular)

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
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
                ❓ Help Center
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Find Answers to Your Beauty Questions
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about KISHMI products, orders, and services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Questions */}
      {searchTerm === "" && (
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
          <div className="container-max section-padding relative z-10">
            <motion.div
              className="text-center mb-16"
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
                ⭐ Popular
              </motion.span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Most Asked Questions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {popularFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <Heart className="w-5 h-5 text-red-400 fill-current" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-4 text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Browse by Category
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <category.icon size={18} />
                <span className="font-medium">{category.label}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      {faq.popular && (
                        <div className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                      )}
                      <h3 className="font-playfair text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === faq.id ? "auto" : 0,
                      opacity: openFAQ === faq.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-900">
                No results found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search terms or browse different categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("all")
                }}
                className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support */}
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
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Heart size={32} />
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Our customer service team is here to help you with any questions not covered in our FAQ.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Live Chat</h3>
                  <p className="text-gray-300 mb-6">Chat with our beauty experts in real-time</p>
                  <button className="w-full bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300">
                    Start Chat
                  </button>
                </motion.div>

                <motion.div
                  className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Email Support</h3>
                  <p className="text-gray-300 mb-6">Get detailed help via email within 24 hours</p>
                  <button className="w-full bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300">
                    Send Email
                  </button>
                </motion.div>

                <motion.div
                  className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Phone Support</h3>
                  <p className="text-gray-300 mb-6">Speak directly with our team</p>
                  <button className="w-full bg-white text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300">
                    Call Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}