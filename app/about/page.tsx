"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Award, Heart, Leaf, Users, Sparkles, Star, Globe, Shield, Eye, Zap, Target } from "lucide-react"

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const values = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description:
        "We believe that beauty begins with purity. That's why we select only the finest natural and plant-based ingredients—carefully sourced for their skin-loving benefits. Every drop is crafted to be effective, gentle, and safe for everyday use.",
      gradient: "from-green-400 to-emerald-500",
      delay: 0.1,
    },
    {
      icon: Heart,
      title: "Cruelty-Free & Vegan",
      description:
        "Our commitment to ethical beauty is unwavering. All Kishmi products are 100% cruelty-free, never tested on animals, and vegan-friendly—because we believe skincare should never come at the cost of kindness.",
      gradient: "from-pink-400 to-rose-500",
      delay: 0.2,
    },
    {
      icon: Award,
      title: "Premium Quality Assurance",
      description: "We blend luxury with lab-tested performance. Each formulation goes through rigorous quality checks to ensure it meets the highest standards in safety, stability, and results—offering nothing but the best for your skin.",
      gradient: "from-yellow-400 to-amber-500",
      delay: 0.3,
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We're more than just a skincare brand—we're a movement. We empower individuals to embrace minimalist beauty and self-care through meaningful conversations, education, and shared stories. Together, we're redefining what modern beauty stands for.",
      gradient: "from-blue-400 to-indigo-500",
      delay: 0.4,
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "KISHMI was founded with a vision to create clean, conscious elegance that highlights natural glow without compromise.",
      icon: Star,
    },
    {
      year: "2021",
      title: "First Collection",
      description: "Launched our signature collection of premium skincare and cosmetics, blending luxury with purity and ethical practices.",
      icon: Sparkles,
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 25+ countries, bringing our minimalist beauty philosophy and conscious beauty approach to a global audience.",
      icon: Globe,
    },
    {
      year: "2023",
      title: "Sustainability Focus",
      description: "Introduced eco-friendly packaging and achieved carbon-neutral shipping across all markets, reinforcing our commitment to responsibility.",
      icon: Shield,
    },
  ]

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"
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
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-2xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 8 }}
          />
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            style={{ y, opacity }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-block px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm tracking-widest uppercase rounded-full shadow-lg">
                ✨ About Us
              </span>
            </motion.div>

            <motion.h1
              className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Beauty is a
              </span>{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                celebration
              </span>{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                of
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                confidence
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                care, and
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                self-expression
              </span>
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                We believe true beauty begins with{" "}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent font-medium">
                  healthy skin
                </span>{" "}
                and shines through every swipe of makeup.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                That's why we've created a brand that blends{" "}
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-medium">
                  high-performance skincare
                </span>{" "}
                with{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium">
                  everyday glam
                </span>{" "}
                — empowering you to glow, naturally and effortlessly.
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center items-center space-x-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-montserrat text-4xl font-bold mb-6">The Art of Minimalist Beauty</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At KISHMI, we believe true beauty lies in simplicity. Born from a vision of clean, conscious elegance, we create premium skincare and cosmetics that highlight your natural glow—without compromise.
                </p>
                <p>
                  Our skincare line is crafted with clean, effective, and skin-loving ingredients, while our makeup range enhances your features without masking your essence. From nourishing serums to lightweight foundations, every Kishmi product is designed to bring out the best in you.
                </p>
                <p>
                  Rooted in purity, performance, and sustainability, Kishmi is proudly cruelty-free, ingredient-conscious, and committed to making you feel as good as you look.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-l-4 border-pink-500">
                  <p className="text-lg font-semibold text-gray-800 mb-2">Glow. Express. Empower.</p>
                  <p className="text-gray-600">That's the Kishmi way.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="KISHMI Brand Story"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
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
              ✨ What Drives Us
            </motion.span>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Kishmi, our philosophy is rooted in conscious beauty, backed by care, science, and responsibility.
            </p>
            <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed mt-4">
              These core values shape every product we create and every decision we make—ensuring that your skin gets the love it truly deserves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: value.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon with Gradient Background */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.gradient} text-white rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon size={28} />
                  </motion.div>

                  <h3 className="font-montserrat text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

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
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-max section-padding">
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
              ✨ Our Journey
            </motion.span>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key moments that shaped KISHMI into the brand it is today.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full" />

            <div className="space-y-24">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div
                      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-3 rounded-xl">
                          <item.icon size={24} />
                        </div>
                      </div>
                      <h3 className="font-montserrat text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                      <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">{item.year}</span>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    className="relative z-10 w-6 h-6 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full border-4 border-white shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                  />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Founder's Note */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-100/40 to-purple-100/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.8, 1],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

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
              ✨ Leadership
            </motion.span>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              A Note from Our Founder
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="KISHMI Founder - Sarah Chen"
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="relative">
                  <motion.div
                    className="absolute -top-4 -left-4 text-6xl text-gray-300 font-serif"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    "
                  </motion.div>
                  <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light italic pl-8">
                    At KISHMI, beauty begins with honesty — in our ingredients, our process, and our purpose. I didn't set out to hide flaws, but to highlight the quiet strength and elegance that already lives in each of us.
                  </blockquote>
                </div>

                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Every formula we craft is a reflection of self-respect and simplicity. Because beauty should never be about becoming someone else — it's about coming home to yourself.
                </motion.p>

                <motion.div
                  className="flex items-center space-x-6 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="font-montserrat text-2xl font-bold text-gray-900">Sarah Chen</p>
                    <p className="text-gray-600 text-lg">Founder & Creative Director, KISHMI</p>
                  </div>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart size={24} className="text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
          />
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-white/20 to-white/10 text-white text-sm tracking-widest uppercase mb-6 rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ✨ Our Impact
            </motion.span>
            <h2 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              By the Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Premium Products", icon: "🎨" },
              { number: "100K+", label: "Happy Customers", icon: "💝" },
              { number: "25+", label: "Countries Served", icon: "🌍" },
              { number: "5★", label: "Average Rating", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group text-center"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-white/20">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 text-lg font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
