"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Star, Minus, Plus, ShoppingBag, Truck, Shield, RotateCcw } from "lucide-react"
import { useStore } from "@/lib/store"

// Mock product data with Unsplash images
const getProduct = (id: string) => {
  const products = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      price: 45,
      category: "lips",
      images: [
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop&crop=center",
      ],
      badge: "New",
      description:
        "Experience the perfect balance of comfort and color with our Velvet Matte Lipstick. This revolutionary formula delivers intense pigmentation while maintaining a comfortable, non-drying feel throughout the day. Crafted with premium ingredients and available in 12 stunning shades.",
      longDescription:
        "Our Velvet Matte Lipstick represents the pinnacle of luxury cosmetics, combining cutting-edge technology with timeless elegance. Each shade is carefully formulated to provide full coverage with just one application, while the unique velvet texture ensures your lips feel soft and comfortable all day long. The long-lasting formula is enriched with nourishing oils and vitamins to keep your lips healthy and hydrated.",
      ingredients: [
        "Dimethicone",
        "Cyclopentasiloxane",
        "Trimethylsiloxysilicate",
        "Polyethylene",
        "Isododecane",
        "Vitamin E",
        "Jojoba Oil",
      ],
      features: [
        "Long-lasting 8-hour wear without fading",
        "Comfortable matte finish that doesn't crack",
        "Highly pigmented formula with one-swipe coverage",
        "Cruelty-free and vegan certified",
        "Enriched with nourishing oils",
        "Available in 12 curated shades",
      ],
      rating: 4.8,
      reviews: 124,
      inStock: true,
      shades: ["Ruby Red", "Rose Pink", "Coral Sunset", "Berry Wine"],
    },
    {
      id: 2,
      name: "Radiance Foundation",
      price: 68,
      originalPrice: 85,
      category: "face",
      images: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop&crop=center",
      ],
      badge: "Sale",
      description:
        "Full coverage foundation with natural radiant finish that lasts all day. Perfect for all skin types.",
      longDescription:
        "Our Radiance Foundation provides buildable coverage that looks natural and feels weightless. Infused with light-reflecting particles and skin-loving ingredients, it creates a luminous finish that enhances your natural beauty.",
      ingredients: ["Hyaluronic Acid", "Vitamin C", "SPF 30", "Light-reflecting particles"],
      features: [
        "Full coverage with natural finish",
        "SPF 30 protection",
        "Suitable for all skin types",
        "12-hour wear",
        "Buildable coverage",
        "Non-comedogenic",
      ],
      rating: 4.9,
      reviews: 89,
      inStock: true,
      shades: ["Fair", "Light", "Medium", "Deep"],
    },
    {
      id: 3,
      name: "Luxury Eye Palette",
      price: 95,
      category: "eyes",
      images: [
        "https://images.unsplash.com/photo-1583241800698-9c2e0c3e9c2e?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=800&fit=crop&crop=center",
      ],
      badge: "New",
      description: "12 highly pigmented shades for endless eye looks. From subtle to dramatic.",
      longDescription:
        "This luxury eyeshadow palette features 12 carefully curated shades that complement each other perfectly. Each shade is highly pigmented and blendable, allowing you to create endless eye looks from natural to dramatic.",
      ingredients: ["Mica", "Talc", "Magnesium Stearate", "Vitamin E"],
      features: [
        "12 versatile shades",
        "Highly pigmented",
        "Long-lasting formula",
        "Easy to blend",
        "Cruelty-free",
        "Professional quality",
      ],
      rating: 4.7,
      reviews: 156,
      inStock: true,
    },
    {
      id: 4,
      name: "Glow Highlighter",
      price: 55,
      category: "face",
      images: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1583241800698-9c2e0c3e9c2e?w=600&h=800&fit=crop&crop=center",
      ],
      badge: null,
      description: "Subtle luminous glow for natural radiance. Perfect for everyday wear.",
      longDescription:
        "Our Glow Highlighter provides a natural, luminous finish that enhances your features without looking overdone. The finely-milled powder blends seamlessly into the skin for a healthy, radiant glow.",
      ingredients: ["Mica", "Silica", "Light-reflecting particles"],
      features: [
        "Natural luminous finish",
        "Buildable coverage",
        "Long-lasting",
        "Suitable for all skin tones",
        "Finely-milled powder",
        "Easy to blend",
      ],
      rating: 4.6,
      reviews: 78,
      inStock: true,
      shades: ["Champagne", "Rose Gold", "Pearl"],
    },
  ]

  return products.find((p) => p.id === Number.parseInt(id))
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedShade, setSelectedShade] = useState(0)

  const { addToCart, addToWishlist, isInWishlist } = useStore()
  const product = getProduct(params.productId)

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Radiance Foundation",
      price: 65,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      name: "Precision Eyeliner",
      price: 35,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=400&fit=crop&crop=center",
    },
    {
      id: 4,
      name: "Glow Highlighter",
      price: 55,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=400&fit=crop&crop=center",
    },
  ]

  const benefits = [
    { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
    { icon: RotateCcw, title: "30-Day Returns", description: "Easy returns & exchanges" },
    { icon: Shield, title: "Authentic Products", description: "100% genuine guarantee" },
  ]

  const handleAddToCart = () => {
    const selectedShadeValue = product.shades ? product.shades[selectedShade] : undefined
    addToCart(product, { quantity, shade: selectedShadeValue })
  }

  const handleWishlist = () => {
    addToWishlist(product)
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Enhanced Breadcrumb */}
      <div className="container-max section-padding py-6 border-b border-gray-100">
        <motion.div
          className="flex items-center space-x-3 text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/shop"
            className="hover:text-black transition-colors duration-200 flex items-center space-x-2 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Shop</span>
          </Link>
          <span>/</span>
          <span className="text-black font-medium">{product.name}</span>
        </motion.div>
      </div>

      {/* Enhanced Product Details */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={800}
                  className="w-full h-96 lg:h-[600px] object-cover"
                />
                {product.badge && (
                  <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-xs font-medium tracking-widest uppercase rounded-full">
                    {product.badge}
                  </div>
                )}

                {/* Image Navigation */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        selectedImage === index ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Thumbnail Images */}
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      selectedImage === index ? "border-black shadow-lg" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm text-gray-500 tracking-wide uppercase">{product.category}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleWishlist}
                      className={`p-2 rounded-full transition-all duration-200 ${
                        isInWishlist(product.id) ? "bg-red-50 text-red-500" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      <Heart size={18} className={isInWishlist(product.id) ? "fill-current" : ""} />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${i < Math.floor(product.rating) ? "fill-black text-black" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-2">
                  <p className="text-3xl font-light text-black">${product.price}</p>
                  {product.originalPrice && (
                    <p className="text-xl text-gray-400 line-through">${product.originalPrice}</p>
                  )}
                </div>
                <p className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>

              {/* Long Description */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-3">Product Details:</h3>
                <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
              </div>

              {/* Shade Selection */}
              {product.shades && (
                <div>
                  <h3 className="font-medium mb-4 text-lg">Choose Your Shade:</h3>
                  <div className="flex space-x-3">
                    {product.shades.map((shade, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedShade(index)}
                        className={`px-4 py-2 text-sm border rounded-full transition-all duration-200 ${
                          selectedShade === index
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {shade}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Features */}
              <div>
                <h3 className="font-medium mb-4 text-lg">Key Benefits:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Quantity and Add to Cart */}
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <span className="font-medium text-lg">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-200 rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-100 transition-colors duration-200 rounded-l-full"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-6 py-3 min-w-[80px] text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-100 transition-colors duration-200 rounded-r-full"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.button
                    onClick={handleAddToCart}
                    className="btn-primary w-full flex items-center justify-center space-x-3 text-lg py-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingBag size={20} />
                    <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
                  </motion.button>

                  <Link href="/checkout" className="btn-secondary w-full text-lg py-4 text-center block">
                    Buy Now
                  </Link>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <benefit.icon size={20} className="text-gray-600" />
                    <div>
                      <div className="font-medium">{benefit.title}</div>
                      <div className="text-gray-500">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Ingredients */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-4 text-lg">Premium Ingredients:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <motion.h2
            className="font-playfair text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Complete Your Look
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                className="group cursor-pointer card-hover bg-white rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/shop/${relatedProduct.id}`}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-xl mb-2 group-hover:text-gray-600 transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 font-light text-lg">${relatedProduct.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
