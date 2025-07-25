"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, Lock, RotateCcw, Truck, ArrowLeft } from "lucide-react"
import { useStore } from "@/lib/store"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useStore()

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-max section-padding">
          <div className="flex items-center space-x-4">
            <Link
              href="/shop"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Continue Shopping</span>
            </Link>
            <div className="text-gray-300">|</div>
            <h1 className="font-playfair text-3xl font-bold">Shopping Cart</h1>
            <span className="text-gray-500">({cartItems.length} items)</span>
          </div>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started</p>
          <Link href="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </motion.div>
      ) : (
        <div className="py-8">
          <div className="container-max section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.selectedShade}-${item.selectedSize}`}
                    className="bg-white p-6 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-6">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        {item.selectedShade && (
                          <p className="text-sm text-gray-500 mb-1">Shade: {item.selectedShade}</p>
                        )}
                        {item.selectedSize && <p className="text-sm text-gray-500 mb-4">Size: {item.selectedSize}</p>}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 transition-colors duration-200"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 py-2 min-w-[60px] text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 transition-colors duration-200"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <span className="text-sm text-gray-500">${item.price} each</span>
                          </div>
                          <span className="text-xl font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-sm sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h2 className="font-playfair text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-black text-white py-4 rounded-lg font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 mb-4">
                    Proceed to Checkout
                  </button>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Lock size={16} />
                      <span>Secure 256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RotateCcw size={16} />
                      <span>30-day free returns</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Truck size={16} />
                      <span>Free shipping on orders over $50</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
