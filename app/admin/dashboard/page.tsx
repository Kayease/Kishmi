"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useStore } from "@/lib/store"
import { Shield, Package, ShoppingCart, Users, TrendingUp, DollarSign, Eye, Settings } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const { user } = useStore()
  const router = useRouter()

  useEffect(() => {
    if (!user || !user.isAdmin) {
      router.push("/auth/login")
    }
  }, [user, router])

  if (!user || !user.isAdmin) {
    return null
  }

  const stats = [
    {
      title: "Total Products",
      value: "156",
      change: "+12%",
      icon: Package,
      color: "bg-blue-500",
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+8%",
      icon: ShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "Total Users",
      value: "5,678",
      change: "+15%",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+23%",
      icon: DollarSign,
      color: "bg-yellow-500",
    },
  ]

  const quickActions = [
    {
      title: "Manage Products",
      description: "Add, edit, or remove products",
      href: "/admin/products",
      icon: Package,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "View Orders",
      description: "Manage customer orders",
      href: "/admin/orders",
      icon: ShoppingCart,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Site Settings",
      description: "Configure site settings",
      href: "/admin/settings",
      icon: Settings,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Analytics",
      description: "View site analytics",
      href: "/admin/analytics",
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="text-red-600" size={32} />
            <h1 className="font-playfair text-4xl font-bold">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600">Welcome back, {user.name}. Here's what's happening with your store.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="font-playfair text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={action.title}
                href={action.href}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className={`p-3 rounded-lg ${action.color} mb-4 w-fit`}>
                  <action.icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <h2 className="font-playfair text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "New order received", time: "2 minutes ago", type: "order" },
              { action: "Product inventory updated", time: "15 minutes ago", type: "product" },
              { action: "New user registered", time: "1 hour ago", type: "user" },
              { action: "Payment processed", time: "2 hours ago", type: "payment" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-b-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.action}</p>
                  <p className="text-gray-500 text-sm">{activity.time}</p>
                </div>
                <Eye size={16} className="text-gray-400" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}