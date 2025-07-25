"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const shopLinks = [
    { href: "/shop", label: "Shop All" },
    { href: "/shop/lips", label: "Lips" },
    { href: "/shop/face", label: "Face" },
    { href: "/shop/eyes", label: "Eyes" },
    { href: "/shop/skincare", label: "Skincare" },
  ]

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/journal", label: "Beauty Journal" },
    { href: "/careers", label: "Careers" },
  ]

  const supportLinks = [
    { href: "/shipping", label: "Shipping Info" },
    { href: "/refund-policy", label: "Returns & Refunds" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Support" },
  ]

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/cookies", label: "Cookie Policy" },
  ]

  const socialLinks = [
    { 
      href: "https://instagram.com/kishmicosmetics", 
      icon: Instagram, 
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    { 
      href: "https://twitter.com/kishmicosmetics", 
      icon: Twitter, 
      label: "Twitter",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    { 
      href: "https://facebook.com/kishmicosmetics", 
      icon: Facebook, 
      label: "Facebook",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    },
    { 
      href: "mailto:hello@kishmi.com", 
      icon: Mail, 
      label: "Email",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-700 hover:to-gray-900"
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container-max section-padding py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo with tagline */}
            <motion.div
              className="flex flex-col items-start space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/Kishmi-white.png"
                alt="Kishmi Cosmetics Logo"
                width={320}
                height={80}
                priority
                className="mb-2"
              />
              <span className="text-gray-300 font-medium text-lg tracking-wide">
                Restore &bull; Rejuvenate &bull; Radiate
              </span>
            </motion.div>
            <motion.p
              className="text-gray-300 leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover the art of beauty with our premium cosmetic collection. Elegant, minimalist, and luxurious
              products crafted for the modern individual.
            </motion.p>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, y: -5 }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  {/* Main Button */}
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-center justify-center w-14 h-14 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-2xl shadow-lg transition-all duration-300 group overflow-hidden`}
                  >
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <social.icon 
                        size={22} 
                        className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                      />
                    </motion.div>
                  </Link>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {social.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Shop Links */}
          <div className="space-y-6">
            <motion.h4
              className="font-playfair text-xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Shop
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {shopLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <motion.h4
              className="font-playfair text-xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Company
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {companyLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <motion.h4
              className="font-playfair text-xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Support
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {supportLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <motion.h4
              className="font-playfair text-xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Legal
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {legalLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>



        {/* Footer Bottom */}
        <motion.div
          className="mt-20 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Image
                src="/Kishmi-white.png"
                alt="Kishmi Cosmetics Logo"
                width={200}
                height={50}
                priority
                className="opacity-80"
              />
              <span className="text-gray-400 font-medium text-sm tracking-wide">
                Restore &bull; Rejuvenate &bull; Radiate
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <p>&copy; 2024 KISHMI. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms
                </Link>
                <Link href="/disclaimer" className="hover:text-white transition-colors duration-200">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
