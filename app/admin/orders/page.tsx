"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useStore } from "@/lib/store"
import { ShoppingCart, Search, Filter, Eye, Package, Truck, CheckCircle, Clock } from "lucide-react"

export default function AdminOrders() {
  const { user } = useStore()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    if (!user || !user.isAdmin) {
      router.push("/auth/login")
    }
  }, [user, router])

  if (!user || !user.isAdmin) {
    return null
  }

  // Dummy orders data
  const orders = [
    {
      id: "ORD-001",
      customer: "Sarah Johnson",
      email: "sarah@example.com",
      total: 145.50,
      status: "Processing",
      date: "2024-01-15",
      items: 3
    },
    {
      id: "ORD-002",
      customer: "Emily Davis",
      email: "emily@example.com",
      total: 89.99,
      status: "Shipped",
      date: "2024-01-14",
      items: 2
    },
    {
      id: "ORD-003",
      customer: "Michael Brown",
      email: "michael@example.com",
      total: 234.75,
      status: "Delivered",
      date: "2024-01-13",
      items: 5
    },
    {
      id: "ORD-004",
      customer: "Jessica Wilson",
      email: "jessica@example.com",
      total: 67.25,
      status: "Pending",
      date: "2024-01-12",
      items: 1
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock size={16} className="text-yellow-600" />
      case "Processing":
        return <Package size={16} className="text-blue-600" />
      case "Shipped":
        return <Truck size={16} className="text-purple-600" />
      case "Delivered":
        return <CheckCircle size={16} className="text-green-600" />
      default:
        return <Clock size={16} className="text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Shipped":
        return "bg-purple-100 text-purple-800"
      case "Delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const orderStats = [
    { label: "Total Orders", value: orders.length, color: "bg-blue-500" },
    { label: "Pending", value: orders.filter(o => o.status === "Pending").length, color: "bg-yellow-500" },
    { label: "Processing", value: orders.filter(o => o.status === "Processing").length, color: "bg-blue-500" },
    { label: "Shipped", value: orders.filter(o => o.status === "Shipped").length, color: "bg-purple-500" },
    { label: "Delivered", value: orders.filter(o => o.status === "Delivered").length, color: "bg-green-500" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-8"
        >
          <ShoppingCart className="text-green-600" size={32} />
          <div>
            <h1 className="font-playfair text-4xl font-bold">Orders</h1>
            <p className="text-gray-600">Manage customer orders and fulfillment</p>
          </div>
        </motion.div>

        {/* Order Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
        >
          {orderStats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className={`w-3 h-3 ${stat.color} rounded-full mb-2`}></div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </motion.div>

        {/* Orders Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Order ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Customer</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Items</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Total</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">{order.id}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{order.customer}</p>
                        <p className="text-sm text-gray-500">{order.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-900">{order.date}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-900">{order.items} items</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">${order.total.toFixed(2)}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span>{order.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between mt-6"
        >
          <p className="text-gray-600">Showing {filteredOrders.length} of {orders.length} orders</p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Previous
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}