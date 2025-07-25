"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, Search, Filter, Heart, Eye, Share2, Sparkles } from "lucide-react"

export default function JournalPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Stories", count: 24 },
    { id: "skincare", label: "Skincare", count: 8 },
    { id: "makeup", label: "Makeup", count: 6 },
    { id: "trends", label: "Trends", count: 5 },
    { id: "tutorials", label: "Tutorials", count: 3 },
    { id: "lifestyle", label: "Lifestyle", count: 2 },
  ]

  const featuredPost = {
    id: 1,
    title: "The Art of Minimalist Beauty: Less is More",
    excerpt: "Discover how to achieve effortless elegance with a simplified beauty routine that enhances your natural radiance.",
    content: "In a world filled with countless beauty products and complex routines, there's something profoundly liberating about embracing minimalist beauty...",
    author: "Sophia Chen",
    authorRole: "Beauty Director",
    authorImage: "/authors/sophia.jpg",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "skincare",
    image: "/blog/minimalist-beauty.jpg",
    tags: ["minimalism", "skincare", "natural beauty"],
    views: 2847,
    likes: 156,
  }

  const blogPosts = [
    {
      id: 2,
      title: "Winter Skincare Essentials: Protecting Your Glow",
      excerpt: "Essential tips and products to maintain healthy, radiant skin during the harsh winter months.",
      author: "Emma Rodriguez",
      authorRole: "Skincare Specialist",
      authorImage: "/authors/emma.jpg",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "skincare",
      image: "/blog/winter-skincare.jpg",
      tags: ["winter", "skincare", "hydration"],
      views: 1923,
      likes: 89,
    },
    {
      id: 3,
      title: "Bold Lips for Every Occasion: A Complete Guide",
      excerpt: "From subtle everyday looks to dramatic evening statements, master the art of bold lip color.",
      author: "Isabella Martinez",
      authorRole: "Makeup Artist",
      authorImage: "/authors/isabella.jpg",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "makeup",
      image: "/blog/bold-lips.jpg",
      tags: ["lips", "makeup", "color"],
      views: 3156,
      likes: 234,
    },
    {
      id: 4,
      title: "2024 Beauty Trends: What's Next in Cosmetics",
      excerpt: "Explore the emerging beauty trends that will define 2024, from innovative formulas to sustainable practices.",
      author: "Aria Thompson",
      authorRole: "Trend Forecaster",
      authorImage: "/authors/aria.jpg",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "trends",
      image: "/blog/beauty-trends-2024.jpg",
      tags: ["trends", "2024", "innovation"],
      views: 2678,
      likes: 178,
    },
    {
      id: 5,
      title: "The Perfect Evening Look: Step-by-Step Tutorial",
      excerpt: "Create a stunning evening makeup look with our detailed tutorial featuring KISHMI's signature products.",
      author: "Luna Park",
      authorRole: "Beauty Educator",
      authorImage: "/authors/luna.jpg",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "tutorials",
      image: "/blog/evening-look.jpg",
      tags: ["tutorial", "evening", "makeup"],
      views: 4521,
      likes: 312,
    },
    {
      id: 6,
      title: "Sustainable Beauty: Our Commitment to the Planet",
      excerpt: "Learn about KISHMI's sustainable practices and how you can make eco-conscious beauty choices.",
      author: "Maya Patel",
      authorRole: "Sustainability Director",
      authorImage: "/authors/maya.jpg",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "lifestyle",
      image: "/blog/sustainable-beauty.jpg",
      tags: ["sustainability", "eco-friendly", "conscious"],
      views: 1834,
      likes: 145,
    },
    {
      id: 7,
      title: "Color Theory in Makeup: Finding Your Perfect Palette",
      excerpt: "Understand color theory and discover which shades complement your unique skin tone and features.",
      author: "Zoe Williams",
      authorRole: "Color Specialist",
      authorImage: "/authors/zoe.jpg",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "makeup",
      image: "/blog/color-theory.jpg",
      tags: ["color", "theory", "palette"],
      views: 2945,
      likes: 201,
    },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-rose-200/30 rounded-full blur-3xl"
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
              <span className="inline-block px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-sm tracking-widest uppercase rounded-full shadow-lg">
                ✨ Beauty Journal
              </span>
            </motion.div>

            <motion.h1
              className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-rose-800 via-pink-700 to-rose-800 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              The KISHMI Journal
            </motion.h1>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Stories of Beauty, Elegance & Inspiration
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover expert insights, beauty secrets, and the latest trends from our team of passionate beauty professionals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search articles, tips, and beauty insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium">{category.label}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
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
              className="inline-block px-6 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ⭐ Featured
            </motion.span>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-800 via-pink-700 to-rose-800 bg-clip-text text-transparent">
              Editor's Pick
            </h2>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href={`/journal/${featuredPost.id}`}>
              <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 lg:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-pink-600/20 z-10" />
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-rose-600 capitalize">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-300 leading-tight">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                          <p className="text-sm text-gray-500">{featuredPost.authorRole}</p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye size={16} />
                          <span>{featuredPost.views.toLocaleString()} views</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <motion.div
                        className="flex items-center space-x-2 text-rose-600 font-semibold group-hover:text-rose-700 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read Full Article</span>
                        <ArrowRight size={20} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-max section-padding relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-800 via-pink-700 to-rose-800 bg-clip-text text-transparent">
              Latest Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of beauty insights, expert tips, and inspiring stories.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={`/journal/${post.id}`}>
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-pink-600/10 z-10" />
                        <motion.div
                          className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-rose-600 capitalize">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-20">
                          <motion.button
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart size={16} className="text-rose-500" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="space-y-4">
                          <h3 className="font-playfair text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-300 leading-tight">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Author */}
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{post.author}</p>
                              <p className="text-xs text-gray-500">{post.authorRole}</p>
                            </div>
                          </div>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar size={12} />
                                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock size={12} />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <Eye size={12} />
                                <span>{post.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart size={12} />
                                <span>{post.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
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
                  No articles found
                </h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your search terms or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("all")
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full hover:from-rose-700 hover:to-pink-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-32 bg-gradient-to-br from-rose-900 via-pink-800 to-rose-900 text-white relative overflow-hidden">
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
                <Sparkles size={32} />
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Stay Inspired</h2>
              <p className="text-xl text-rose-100 leading-relaxed mb-12">
                Subscribe to our journal and never miss the latest beauty insights, expert tips, and exclusive content.
              </p>
              
              <motion.form
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white transition-all duration-300 placeholder-white/70 text-white backdrop-blur-sm"
                  />
                  <motion.button
                    type="submit"
                    className="px-8 py-4 bg-white text-rose-900 font-medium tracking-wide rounded-xl hover:bg-rose-50 transition-all duration-300 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-rose-200 text-sm mt-4">
                  Join 10,000+ beauty enthusiasts who trust our insights.
                </p>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}