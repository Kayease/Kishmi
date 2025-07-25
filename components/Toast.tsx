"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ShoppingBag, Heart, X, AlertCircle } from "lucide-react"
import { useStore } from "@/lib/store"

export default function Toast() {
  const { toasts, removeToast } = useStore()

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return CheckCircle
      case "cart":
        return ShoppingBag
      case "wishlist":
        return Heart
      case "error":
        return AlertCircle
      default:
        return CheckCircle
    }
  }

  const getColors = (type: string) => {
    switch (type) {
      case "success":
        return "from-green-500 to-emerald-500 text-white"
      case "cart":
        return "from-blue-500 to-cyan-500 text-white"
      case "wishlist":
        return "from-pink-500 to-rose-500 text-white"
      case "error":
        return "from-red-500 to-orange-500 text-white"
      default:
        return "from-gray-900 to-gray-800 text-white"
    }
  }

  return (
    <div className="fixed top-24 right-4 z-[100] space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = getIcon(toast.type)
          const colors = getColors(toast.type)

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative bg-gradient-to-r ${colors} p-4 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20 max-w-sm`}
            >
              <div className="flex items-start space-x-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 300 }}
                  className="flex-shrink-0"
                >
                  <Icon size={20} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-medium text-sm"
                  >
                    {toast.title}
                  </motion.p>
                  {toast.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs opacity-90 mt-1"
                    >
                      {toast.description}
                    </motion.p>
                  )}
                </div>
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => removeToast(toast.id)}
                  className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X size={14} />
                </motion.button>
              </div>

              {/* Progress bar */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: toast.duration / 1000, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-b-xl origin-left"
              />

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
