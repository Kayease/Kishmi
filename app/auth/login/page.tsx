"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Mail, Lock, Shield } from "lucide-react"
import { useStore } from "@/lib/store"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const { login, loginAsAdmin, addToast } = useStore()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login delay
    setTimeout(() => {
      const success = login(formData.email, formData.password)
      
      if (success) {
        addToast({
          type: "success",
          title: "Login Successful!",
          description: "Welcome back to KISHMI",
          duration: 3000,
        })
        router.push("/")
      } else {
        addToast({
          type: "error",
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          duration: 4000,
        })
      }
      
      setIsLoading(false)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-50 flex-col justify-center p-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <h1 className="font-playfair text-5xl font-bold mb-8">
            Welcome to
            <br />
            KISHMI
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Discover the art of luxury beauty with our curated collection of premium cosmetics designed for the modern
            woman.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Exclusive luxury cosmetic collections</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Personalized beauty recommendations</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Premium customer service experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Secure and fast checkout process</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h2 className="font-playfair text-4xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your KISHMI account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-black hover:underline">
                Forgot password?
              </Link>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-3 rounded-lg font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </motion.button>

            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link href="/auth/register" className="text-black font-medium hover:underline">
                Create account
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <Shield size={16} />
              <span>Your information is protected with SSL encryption</span>
            </div>

            {/* Quick Admin Login for Testing */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500 mb-3">Quick Test Login</p>
              <button
                type="button"
                onClick={() => {
                  loginAsAdmin()
                  addToast({
                    type: "success",
                    title: "Admin Login Successful!",
                    description: "Welcome back, Admin",
                    duration: 3000,
                  })
                  router.push("/")
                }}
                className="w-full bg-red-600 text-white py-2 rounded-lg font-medium tracking-wide hover:bg-red-700 transition-colors duration-200 text-sm"
              >
                Login as Admin (Test)
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
