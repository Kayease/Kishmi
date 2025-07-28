"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Mail, Lock, User, Shield } from "lucide-react"
import { useStore } from "@/lib/store"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  const { setUser } = useStore()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match")
      return
    }

    setIsLoading(true)

    // Simulate registration
    setTimeout(() => {
      setUser({
        id: "1",
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
      })
      setIsLoading(false)
      router.push("/")
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
      <div className="hidden lg:flex lg:w-1/2 bg-gray-50 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <h1 className="font-playfair text-5xl font-bold mb-8">
            Join the
            <br />
            KISHMI Family
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Create your account and unlock exclusive access to our premium beauty collection, personalized
            recommendations, and member-only benefits.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Early access to new product launches</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Exclusive member discounts and offers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Personalized beauty consultations</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-gray-600">Priority customer support</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h2 className="font-playfair text-4xl font-bold mb-2">Create Account</h2>
            <p className="text-gray-600">Join KISHMI and start your beauty journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                />
              </div>
            </div>

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
                  placeholder="Create password"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  readOnly
                  required
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black mt-1"
                  onClick={() => setShowTermsModal(true)}
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <Link href="/terms" className="text-black hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-black hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-3 rounded-lg font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </motion.button>

            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link href="/auth/login" className="text-black font-medium hover:underline">
                Sign in
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <Shield size={16} />
              <span>Your information is protected with SSL encryption</span>
            </div>
          </form>

          {showTermsModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <h3 className="text-xl font-bold mb-4">Terms & Conditions Summary</h3>
              <div className="text-gray-700 mb-6 max-h-60 overflow-y-auto">
                <p>
                By creating an account, you agree to our Terms of Service and Privacy Policy. 
                Your data will be securely stored and used to enhance your experience. 
                Please review the full documents for details.
                </p>
              </div>
              <button
                className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition mb-2"
                onClick={() => {
                setShowTermsModal(false)
                setFormData((prev) => ({ ...prev, agreeToTerms: true }))
                }}
              >
                Accept & Continue
              </button>
              <button
                className="w-full bg-gray-200 text-black py-2 rounded-lg font-medium hover:bg-gray-300 transition"
                onClick={() => {
                window.open("/terms", "_blank")
                }}
                type="button"
              >
                View Full Terms & Conditions
              </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
