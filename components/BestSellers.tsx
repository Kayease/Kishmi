"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/ui/optimized-image";
import { getImagePlaceholder } from "@/lib/utils";
import Link from "next/link";

type Product = {
  id: string | number;
  gradient: string;
  name: string;
  badge?: string;
  onSale?: boolean;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  features?: string[];
  image?: string;
};

interface BestSellersProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
  handleQuickView: (product: Product) => void;
}

export default function BestSellers({
  products,
  handleAddToCart,
  handleQuickView,
}: BestSellersProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      {/* Floating Gradient Elements for extra creativity */}
      <motion.div
        className="absolute -top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-2xl z-0"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-100/40 to-pink-100/40 rounded-full blur-2xl z-0"
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 0.95, 1] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <div className="container-max section-padding relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-6 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white text-sm tracking-widest uppercase mb-6 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ⭐ Customer Favorites
          </motion.span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Best Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the products our customers can't stop raving about
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Use flex-col and h-full to ensure equal height cards */}
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  boxShadow: "0 12px 36px 0 rgba(236, 72, 153, 0.14)",
                }}
                className="relative group h-full flex flex-col"
              >
                <Link href={`/shop/${product.id}`} passHref legacyBehavior>
                  <a tabIndex={0} className="block h-full focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-2xl" style={{ textDecoration: 'none' }}>
                    <Card className="overflow-hidden border-0 shadow-xl bg-white group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col min-h-[480px] max-h-[580px] cursor-pointer">
                  {/* Enhanced Product Image Section */}
                  <div className="relative h-72 min-h-[288px] max-h-[288px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Gradient Overlay for Fallback */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        product.gradient || getImagePlaceholder(product.name)
                      } opacity-20 z-10`}
                    />

                    {/* Optimized Product Image */}
                    <OptimizedImage
                      src={product.image || ""}
                      alt={`${product.name} - Premium cosmetic product by Kishmi`}
                      fill
                      priority={index < 2}
                      fallbackGradient={product.gradient}
                      productName={product.name}
                      quality={85}
                      hoverEffects={true}
                      showLoadingSpinner={true}
                    />

                    {/* Enhanced Badges */}
                    {product.badge && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-3 left-3 z-30"
                      >
                        <Badge
                          variant={
                            product.badge === "Best Seller"
                              ? "default"
                              : product.badge === "Trending"
                              ? "secondary"
                              : "outline"
                          }
                          className="text-xs px-3 py-1 shadow-lg backdrop-blur-sm bg-white/90 border-0 font-semibold"
                        >
                          {product.badge}
                        </Badge>
                      </motion.div>
                    )}

                    {product.onSale && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-3 right-3 z-30"
                      >
                        <Badge
                          variant="destructive"
                          className="text-xs px-3 py-1 shadow-lg backdrop-blur-sm bg-red-500/95 font-semibold animate-pulse"
                        >
                          SALE
                        </Badge>
                      </motion.div>
                    )}

                    {/* Enhanced Floating Elements */}
                    <motion.div
                      className="absolute -bottom-2 right-4 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-80 blur-sm z-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8],
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-1 right-8 w-2 h-2 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-60 blur-sm z-20"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0.9, 0.6],
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </div>
                  <CardContent className="pt-6 pb-2 flex-1 flex flex-col">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">
                      {product.name}
                    </CardTitle>
                    <div className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 min-h-[40px]">
                      {product.description}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i < product.rating
                                ? "fill-yellow-400/50 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-xs">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      {product.onSale ? (
                        <>
                          <span className="text-xs text-gray-500">
                            On Sale from
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-gray-900">
                              ₹ {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ₹ {product.originalPrice}
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">
                          ₹ {product.price}
                        </span>
                      )}
                    </div>
                    <div className="flex-1" />
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 pt-0 mt-auto">
                        <motion.button
                          className="w-full bg-black text-white py-3 px-6 font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                        >
                          Add to Cart
                        </motion.button>
                  </CardFooter>
                </Card>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
