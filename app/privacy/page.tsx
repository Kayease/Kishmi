"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, UserCheck, Globe, AlertTriangle, Settings } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Billing and shipping addresses for order processing",
        "Payment information (processed securely through third-party providers)",
        "Communication preferences and marketing consent",
        "Product reviews and feedback you submit",
        "Customer service interactions and correspondence",
      ],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "How We Use Your Information",
      icon: Settings,
      content: [
        "Process and fulfill your orders and transactions",
        "Communicate with you about your orders and account",
        "Send marketing communications (with your consent)",
        "Improve our products, services, and website experience",
        "Prevent fraud and ensure security of our platform",
        "Comply with legal obligations and resolve disputes",
      ],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Information Sharing",
      icon: UserCheck,
      content: [
        "We do not sell, rent, or trade your personal information to third parties",
        "Service providers who help us operate our business (shipping, payment processing)",
        "Legal authorities when required by law or to protect our rights",
        "Business partners for joint marketing efforts (with your explicit consent)",
        "In case of business transfer, merger, or acquisition",
      ],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "We use industry-standard encryption to protect your data",
        "Secure servers and regular security audits",
        "Limited access to personal information on a need-to-know basis",
        "Regular monitoring for unauthorized access or breaches",
        "Secure payment processing through PCI-compliant providers",
        "Data backup and recovery procedures to prevent loss",
      ],
      gradient: "from-red-400 to-orange-500",
    },
    {
      title: "Cookies and Tracking",
      icon: Eye,
      content: [
        "Essential cookies for website functionality and security",
        "Analytics cookies to understand how you use our website",
        "Marketing cookies for personalized advertising (with consent)",
        "Social media cookies when you interact with our social content",
        "You can control cookie preferences through your browser settings",
        "Some features may not work properly if cookies are disabled",
      ],
      gradient: "from-yellow-400 to-amber-500",
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: [
        "Access the personal information we have about you",
        "Request correction of inaccurate or incomplete information",
        "Request deletion of your personal information",
        "Object to processing of your personal information",
        "Request data portability in a structured format",
        "Withdraw consent for marketing communications at any time",
      ],
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      title: "International Transfers",
      icon: Globe,
      content: [
        "Your information may be transferred to servers outside your country",
        "We ensure adequate protection through appropriate safeguards",
        "Data processing agreements with international service providers",
        "Compliance with applicable data protection laws",
        "Regular review of international data transfer practices",
      ],
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "Data Retention",
      icon: AlertTriangle,
      content: [
        "We retain your information only as long as necessary",
        "Account information kept while your account is active",
        "Transaction records kept for legal and tax requirements",
        "Marketing data deleted when you unsubscribe",
        "Automatic deletion of inactive accounts after 3 years",
        "Some information may be retained for legitimate business interests",
      ],
      gradient: "from-pink-400 to-rose-500",
    },
  ]

  const principles = [
    {
      title: "Transparency",
      description: "We are clear about what information we collect and how we use it.",
      icon: "🔍",
    },
    {
      title: "Control",
      description: "You have control over your personal information and privacy settings.",
      icon: "⚙️",
    },
    {
      title: "Security",
      description: "We protect your information with industry-leading security measures.",
      icon: "🔒",
    },
    {
      title: "Respect",
      description: "We respect your privacy choices and honor your preferences.",
      icon: "🤝",
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
                🔒 Privacy
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Privacy Policy
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Your Privacy Matters to Us
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We are committed to protecting your personal information and being transparent about how we collect, use, and share your data.
              </p>
              <p className="text-lg text-gray-500">
                Last updated: January 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              ✨ Principles
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core principles guide how we handle your personal information.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
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
                      {principle.icon}
                    </motion.div>
                    <h3 className="font-playfair text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Details */}
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
              Privacy Details
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${section.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <section.icon size={24} />
                        </motion.div>
                        <h3 className="font-playfair text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                          {section.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {section.content.map((item, itemIndex) => (
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
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Questions About Your Privacy?</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Privacy Officer</h3>
                  <p className="text-gray-300">privacy@kishmi.com</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lock size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Data Protection</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Data Requests</h3>
                  <p className="text-gray-300">Available 24/7</p>
                </div>
              </div>

              <motion.div
                className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold mb-3">Your Rights Under GDPR & CCPA</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  If you are a resident of the European Union or California, you have additional rights regarding your personal information. 
                  Contact us to exercise your rights or learn more about how we comply with applicable privacy laws.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}