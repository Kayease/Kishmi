"use client"

import { useState, useRef, useEffect } from "react"
import { useScroll } from "framer-motion"

import {
  Star,
  Award,
  Users,
  Sparkles,
  Zap,
  Shield,
  Heart,
} from "lucide-react"
import { useStore } from "@/lib/store"
import QuickViewModal from "@/components/QuickViewModal"
import ScrollToTop from "@/components/ScrollToTop"
import HeroSection from "@/components/HeroSection"
import ProductCarousel from "@/components/ProductCarousel"
import FeaturedCategories from "@/components/FeaturedCategories"
import BestSellers from "@/components/BestSellers"
import InfluencerTestimonials from "@/components/InfluencerTestimonials"
import TrustedStats from "@/components/TrustedStats"
import WhyChooseKishmi from "@/components/WhyChooseKishmi"
import BeautyJournal from "@/components/BeautyJournal"
import BrandStoryTeaser from "@/components/BrandStoryTeaser"

export default function HomePage() {
  const { addToCart, setQuickViewProduct } = useStore()
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const featuredProducts = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      price: 45,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=600&fit=crop&crop=center",
      badge: "Bestseller",
      description:
        "Experience the perfect balance of comfort and color with our signature velvet matte formula. This long-lasting lipstick delivers rich, vibrant color that stays put for hours without drying out your lips.",
      category: "lips",
      rating: 4.8,
      reviews: 124,
      color: "from-red-500 to-pink-500",
      features: ["12-hour wear", "Vitamin E enriched", "Cruelty-free", "Available in 24 shades"],
    },
    {
      id: 2,
      name: "Radiance Foundation",
      price: 68,
      originalPrice: 85,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=600&fit=crop&crop=center",
      badge: "Sale",
      description:
        "Achieve flawless, natural-looking coverage with our lightweight foundation. Infused with skin-loving ingredients, it provides buildable coverage while nourishing your skin throughout the day.",
      category: "face",
      rating: 4.9,
      reviews: 89,
      color: "from-amber-500 to-orange-500",
      features: ["SPF 30 protection", "Hyaluronic acid", "24-hour hydration", "30 inclusive shades"],
    },
    {
      id: 3,
      name: "Luxury Eye Palette",
      price: 95,
      image: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/SPF50New.jpg?crop=center&height=630&v=1721379190&width=420",
      badge: "New",
      description:
        "Unleash your creativity with our most versatile eyeshadow palette. Featuring 12 highly pigmented shades in both matte and shimmer finishes, perfect for creating endless eye looks from subtle to dramatic.",
      category: "eyes",
      rating: 4.7,
      reviews: 156,
      color: "from-purple-500 to-indigo-500",
      features: ["12 versatile shades", "Blendable formula", "Long-lasting", "Professional quality"],
    },
    {
      id: 4,
      name: "Glow Highlighter",
      price: 55,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=600&fit=crop&crop=center",
      badge: null,
      description:
        "Add the perfect touch of luminosity to your complexion with our silky-smooth highlighter. This buildable formula gives you a natural, lit-from-within glow that complements all skin tones.",
      category: "face",
      rating: 4.6,
      reviews: 78,
      color: "from-yellow-500 to-amber-500",
      features: ["Buildable coverage", "Silky texture", "Universal shades", "Paraben-free"],
    },
  ]

  const featuredCategories = [
    {
      id: "lips",
      name: "Lips",
      description: "Bold colors and comfortable formulas",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop&crop=center",
      productCount: 12,
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: "face",
      name: "Face",
      description: "Flawless coverage and natural glow",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop&crop=center",
      productCount: 18,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: "eyes",
      name: "Eyes",
      description: "Dramatic looks and precise application",
      image: "https://cdn.shopify.com/s/files/1/0582/2885/files/Eyeliner_Lauren_Alice.jpg?8625929861566956326",
      productCount: 15,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: "skincare",
      name: "Skincare",
      description: "Nourishing treatments for healthy skin",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop&crop=center",
      productCount: 20,
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const stats = [
    { icon: Award, number: "100%", label: "Natural Ingredients", color: "text-green-600" },
    { icon: Users, number: "50K+", label: "Happy Customers", color: "text-blue-600" },
    { icon: Sparkles, number: "25+", label: "Premium Products", color: "text-purple-600" },
    { icon: Star, number: "4.9", label: "Average Rating", color: "text-yellow-600" },
  ]

  const features = [
    {
      icon: Shield,
      title: "Cruelty-Free",
      description: "Never tested on animals, always ethical",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Luxury ingredients for exceptional results",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Heart,
      title: "Skin-Loving",
      description: "Formulated with care for all skin types",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Zap,
      title: "Long-Lasting",
      description: "All-day wear that stays perfect",
      gradient: "from-blue-400 to-cyan-500",
    },
  ]

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  const handleQuickView = (product: any) => {
    setQuickViewProduct(product)
  }


  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProductIndex, featuredProducts.length]);


  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <ProductCarousel
          featuredProducts={featuredProducts}
          handleAddToCart={handleAddToCart}
          handleQuickView={handleQuickView}
        />
        <FeaturedCategories featuredCategories={featuredCategories} />
        <BestSellers
          products={[
            {
              id: 1,
              name: "Salicylic Acid + LHA 2% Cleanser",
              description: "Acne, Breakouts & Oiliness",
              price: 299,
              originalPrice: 399,
              rating: 4.5,
              reviews: 1247,
              image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=800&fit=crop&crop=center&auto=format&q=80",
              badge: "Best Seller",
              onSale: true,
              gradient: "from-blue-100 to-cyan-100",
              features: ["Deep cleansing", "Pore refining", "Oil control", "Gentle exfoliation"]
            },
            {
              id: 2,
              name: "SPF 50 Sunscreen",
              description: "Sun protection, UV exposure / damage",
              price: 399,
              originalPrice: 499,
              rating: 4.0,
              reviews: 892,
              image: "https://images.unsplash.com/photo-1698912198250-fb0c5ecccc6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              badge: "Protection",
              onSale: true,
              gradient: "from-orange-100 to-yellow-100",
              features: ["Broad spectrum", "Water resistant", "Non-greasy", "Lightweight formula"]
            },
            {
              id: 3,
              name: "Salicylic Acid 2% Face Serum",
              description: "Acne, Oily Skin, Blackheads & Irritation",
              price: 549,
              originalPrice: 699,
              rating: 4.0,
              reviews: 634,
              image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=800&fit=crop&crop=center&auto=format&q=80",

              badge: "Trending",
              onSale: true,
              gradient: "from-green-100 to-emerald-100",
              features: ["Acne treatment", "Pore minimizing", "Anti-inflammatory", "Fast absorption"]
            },
            {
              id: 4,
              name: "Vitamin C 10% Face Serum",
              description: "Dullness, Spots & Loss of Elasticity",
              price: 699,
              rating: 4.0,
              reviews: 456,
              image: "https://images.unsplash.com/photo-1696025522422-aa9a74e4f3d5?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              badge: "Popular",
              onSale: false,
              gradient: "from-purple-100 to-pink-100",
              features: ["Brightening", "Anti-aging", "Antioxidant rich", "Collagen boost"]
            }
          ]}
          handleAddToCart={handleAddToCart}
          handleQuickView={handleQuickView}
        />
        <InfluencerTestimonials />
        <TrustedStats stats={stats} />
        <WhyChooseKishmi features={features} />
        <BeautyJournal articles={[
          {
            id: 1,
            title: "The Art of Minimalist Beauty",
            excerpt: "Discover how to achieve effortless elegance with a simplified beauty routine that enhances your natural radiance.",
            category: "skincare",
            readTime: "8 min read",
            author: "Sophia Chen",
            date: "Jan 15, 2024",
            gradient: "from-rose-200 to-pink-200"
          },
          {
            id: 2,
            title: "Bold Lips for Every Occasion",
            excerpt: "From subtle everyday looks to dramatic evening statements, master the art of bold lip color.",
            category: "makeup",
            readTime: "5 min read",
            author: "Isabella Martinez",
            date: "Jan 10, 2024",
            gradient: "from-purple-200 to-rose-200"
          },
          {
            id: 3,
            title: "2024 Beauty Trends",
            excerpt: "Explore the emerging beauty trends that will define 2024, from innovative formulas to sustainable practices.",
            category: "trends",
            readTime: "7 min read",
            author: "Aria Thompson",
            date: "Jan 8, 2024",
            gradient: "from-blue-200 to-purple-200"
          }
        ]} />
        <BrandStoryTeaser />
      </div>
      <QuickViewModal />
      <ScrollToTop />
    </>
  )
}


