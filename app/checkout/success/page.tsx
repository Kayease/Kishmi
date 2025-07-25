"use client"

import { motion } from "framer-motion"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const orderNumber = "KISHMI-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle size={40} className="text-green-600" />
          </motion.div>

          <h1 className="font-playfair text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package size={20} />
                </div>
                <h3 className="font-medium mb-2">Order Number</h3>
                <p className="text-sm text-gray-600">{orderNumber}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail size={20} />
                </div>
                <h3 className="font-medium mb-2">Confirmation Email</h3>
                <p className="text-sm text-gray-600">Sent to your email</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package size={20} />
                </div>
                <h3 className="font-medium mb-2">Estimated Delivery</h3>
                <p className="text-sm text-gray-600">5-7 business days</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/shop" className="btn-primary inline-flex items-center space-x-2">
              <span>Continue Shopping</span>
              <ArrowRight size={16} />
            </Link>
            <div>
              <Link href="/account/orders" className="text-black hover:underline">
                Track your order
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
