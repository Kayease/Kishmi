"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowLeft, Heart, Share2, Eye, Bookmark, Twitter, Facebook, Instagram, Mail, ChevronRight } from "lucide-react"

// Mock data - in a real app, this would come from a CMS or API
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "The Art of Minimalist Beauty: Less is More",
      excerpt: "Discover how to achieve effortless elegance with a simplified beauty routine that enhances your natural radiance.",
      content: `
        <p>In a world filled with countless beauty products and complex routines, there's something profoundly liberating about embracing minimalist beauty. The philosophy of "less is more" isn't just a trend—it's a timeless approach that celebrates your natural features while simplifying your daily routine.</p>

        <h2>The Philosophy Behind Minimalist Beauty</h2>
        <p>Minimalist beauty is about enhancing rather than masking. It's the art of selecting a few high-quality products that work harmoniously together to create a look that feels effortless yet polished. This approach not only saves time but also allows your natural beauty to shine through.</p>

        <blockquote>"True beauty lies in simplicity. When we strip away the unnecessary, we reveal the essence of who we are." - Sophia Chen, Beauty Director</blockquote>

        <h2>Building Your Minimalist Beauty Kit</h2>
        <p>The key to successful minimalist beauty lies in choosing versatile, high-quality products that serve multiple purposes. Here are the essentials:</p>

        <h3>1. A Perfect Base</h3>
        <p>Start with a lightweight foundation or tinted moisturizer that evens out your skin tone without feeling heavy. Look for formulas with SPF protection to streamline your morning routine.</p>

        <h3>2. Multi-Purpose Color</h3>
        <p>Choose a cream blush that can double as lip color. This creates a cohesive, natural flush that ties your entire look together. Opt for shades that complement your natural coloring.</p>

        <h3>3. Enhanced Features</h3>
        <p>A good mascara and a neutral eyeshadow palette can define your eyes without overwhelming them. Focus on enhancing your natural eye shape rather than dramatically altering it.</p>

        <h2>The Daily Minimalist Routine</h2>
        <p>A minimalist beauty routine should take no more than 10-15 minutes. Here's a step-by-step guide:</p>

        <ol>
          <li><strong>Cleanse and Moisturize:</strong> Start with clean, hydrated skin as your canvas.</li>
          <li><strong>Apply Base:</strong> Use a lightweight foundation or tinted moisturizer where needed.</li>
          <li><strong>Add Color:</strong> Apply cream blush to the apples of your cheeks and blend upward.</li>
          <li><strong>Define Eyes:</strong> Use a neutral eyeshadow and one coat of mascara.</li>
          <li><strong>Finish with Lips:</strong> Apply the same cream blush to your lips for a cohesive look.</li>
        </ol>

        <h2>The Benefits of Going Minimal</h2>
        <p>Embracing minimalist beauty offers numerous advantages beyond just saving time:</p>

        <ul>
          <li><strong>Cost-Effective:</strong> Investing in fewer, higher-quality products saves money in the long run.</li>
          <li><strong>Skin-Friendly:</strong> Using fewer products reduces the risk of irritation and breakouts.</li>
          <li><strong>Confidence-Building:</strong> Learning to enhance your natural features builds self-confidence.</li>
          <li><strong>Sustainable:</strong> Consuming less contributes to a more sustainable beauty routine.</li>
        </ul>

        <h2>Embracing Your Natural Beauty</h2>
        <p>The ultimate goal of minimalist beauty is to feel comfortable and confident in your own skin. It's about celebrating your unique features rather than trying to conform to unrealistic beauty standards. When you embrace minimalism, you're not just simplifying your routine—you're making a statement about authenticity and self-acceptance.</p>

        <p>Remember, minimalist beauty isn't about looking "undone" or neglecting self-care. It's about being intentional with your choices and focusing on what truly enhances your natural radiance. Start small, experiment with different approaches, and find what works best for your lifestyle and preferences.</p>

        <p>As you embark on your minimalist beauty journey, remember that the most beautiful thing you can wear is confidence. When you feel good in your own skin, that inner glow becomes your most powerful beauty tool.</p>
      `,
      author: "Sophia Chen",
      authorRole: "Beauty Director",
      authorBio: "Sophia is KISHMI's Beauty Director with over 15 years of experience in the cosmetics industry. She specializes in minimalist beauty approaches and sustainable skincare practices.",
      authorImage: "/authors/sophia.jpg",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "skincare",
      image: "/blog/minimalist-beauty.jpg",
      tags: ["minimalism", "skincare", "natural beauty", "routine", "confidence"],
      views: 2847,
      likes: 156,
      shares: 89,
    },
    // Add more posts as needed
  }
  
  return posts[id as keyof typeof posts] || null
}

const getRelatedPosts = () => [
  {
    id: 2,
    title: "Winter Skincare Essentials: Protecting Your Glow",
    excerpt: "Essential tips and products to maintain healthy, radiant skin during the harsh winter months.",
    image: "/blog/winter-skincare.jpg",
    category: "skincare",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Bold Lips for Every Occasion: A Complete Guide",
    excerpt: "From subtle everyday looks to dramatic evening statements, master the art of bold lip color.",
    image: "/blog/bold-lips.jpg",
    category: "makeup",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "2024 Beauty Trends: What's Next in Cosmetics",
    excerpt: "Explore the emerging beauty trends that will define 2024, from innovative formulas to sustainable practices.",
    image: "/blog/beauty-trends-2024.jpg",
    category: "trends",
    readTime: "7 min read",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const post = getBlogPost(params.id)
  const relatedPosts = getRelatedPosts()

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/journal" className="px-8 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full hover:from-rose-700 hover:to-pink-700 transition-all duration-300">
            Back to Journal
          </Link>
        </div>
      </div>
    )
  }

  const shareLinks = [
    { name: "Twitter", icon: Twitter, url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}` },
    { name: "Facebook", icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Email", icon: Mail, url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}` },
  ]

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-2xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full blur-2xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          />
        </div>

        <div className="container-max section-padding relative z-10">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/journal"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-rose-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Journal</span>
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Category */}
              <div>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-sm tracking-wide uppercase rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {post.excerpt}
              </p>

              {/* Author and Meta Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-lg">{post.author}</p>
                    <p className="text-gray-500">{post.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={18} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye size={18} />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <motion.div
          className="relative h-96 md:h-[500px] overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white relative">
        <div className="container-max section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <motion.div
                className="lg:col-span-1 order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="sticky top-32 space-y-8">
                  {/* Social Actions */}
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="font-semibold text-gray-900 mb-4">Share & Save</h3>
                    <div className="space-y-3">
                      <motion.button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                          isLiked ? "bg-rose-100 text-rose-600" : "bg-white hover:bg-rose-50 text-gray-600"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Heart size={20} className={isLiked ? "fill-current" : ""} />
                        <span className="font-medium">{isLiked ? "Liked" : "Like"}</span>
                        <span className="ml-auto text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
                      </motion.button>

                      <motion.button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                          isBookmarked ? "bg-blue-100 text-blue-600" : "bg-white hover:bg-blue-50 text-gray-600"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Bookmark size={20} className={isBookmarked ? "fill-current" : ""} />
                        <span className="font-medium">{isBookmarked ? "Saved" : "Save"}</span>
                      </motion.button>

                      <div className="relative">
                        <motion.button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white hover:bg-gray-50 text-gray-600 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Share2 size={20} />
                          <span className="font-medium">Share</span>
                          <span className="ml-auto text-sm">{post.shares}</span>
                        </motion.button>

                        {showShareMenu && (
                          <motion.div
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-20"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="grid grid-cols-2 gap-2">
                              {shareLinks.map((link) => (
                                <a
                                  key={link.name}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                  <link.icon size={16} />
                                  <span className="text-sm">{link.name}</span>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white text-gray-600 text-sm rounded-full hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div
                className="lg:col-span-3 order-1 lg:order-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-rose-500 prose-blockquote:bg-rose-50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-rose-800 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container-max section-padding">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                  <p className="text-rose-600 font-medium mb-4">{post.authorRole}</p>
                  <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-800 via-pink-700 to-rose-800 bg-clip-text text-transparent">
              Related Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Continue your beauty journey with these handpicked articles.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/journal/${relatedPost.id}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-pink-600/10 z-10" />
                        <motion.div
                          className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-rose-600 capitalize">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-playfair text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-300 mb-3 leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                          <ChevronRight className="w-5 h-5 text-rose-500 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}