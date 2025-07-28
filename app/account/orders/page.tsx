"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useStore } from "@/lib/store"
import { Package, Truck, CheckCircle, Clock, Eye, ArrowLeft, Search, Filter, Star } from "lucide-react"

export default function MyOrdersPage() {
  const { user } = useStore()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  if (!user) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package size={64} className="mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Please sign in to view your orders</h1>
          <Link href="/auth/login" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  // Dummy orders data for the user
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-20",
      status: "Delivered",
      total: 145.50,
      items: [
        {
          id: 1,
          name: "Luxury Matte Lipstick - Ruby Red",
          price: 45.00,
          quantity: 2,
          image: "/placeholder.jpg"
        },
        {
          id: 2,
          name: "Radiant Foundation - Medium",
          price: 55.50,
          quantity: 1,
          image: "/placeholder.jpg"
        }
      ],
      shipping: {
        address: "123 Beauty Lane, Glamour City, GC 12345",
        method: "Standard Shipping",
        tracking: "TRK123456789"
      }
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-18",
      status: "Shipped",
      total: 89.99,
      items: [
        {
          id: 3,
          name: "Smoky Eye Palette - Midnight",
          price: 89.99,
          quantity: 1,
          image: "/placeholder.jpg"
        }
      ],
      shipping: {
        address: "123 Beauty Lane, Glamour City, GC 12345",
        method: "Express Shipping",
        tracking: "TRK987654321"
      }
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-15",
      status: "Processing",
      total: 234.75,
      items: [
        {
          id: 4,
          name: "Hydrating Serum - Anti-Aging",
          price: 125.00,
          quantity: 1,
          image: "/placeholder.jpg"
        },
        {
          id: 5,
          name: "Luxury Mascara - Volume Boost",
          price: 65.00,
          quantity: 1,
          image: "/placeholder.jpg"
        },
        {
          id: 6,
          name: "Lip Gloss Set - 3 Pack",
          price: 44.75,
          quantity: 1,
          image: "/placeholder.jpg"
        }
      ],
      shipping: {
        address: "123 Beauty Lane, Glamour City, GC 12345",
        method: "Standard Shipping",
        tracking: null
      }
    },
    {
      id: "ORD-2024-004",
      date: "2024-01-10",
      status: "Pending",
      total: 67.25,
      items: [
        {
          id: 7,
          name: "Blush Compact - Rose Gold",
          price: 67.25,
          quantity: 1,
          image: "/placeholder.jpg"
        }
      ],
      shipping: {
        address: "123 Beauty Lane, Glamour City, GC 12345",
        method: "Standard Shipping",
        tracking: null
      }
    }
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
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Shipped":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-max section-padding py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Link 
                href="/account" 
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="font-playfair text-4xl font-bold">My Orders</h1>
                <p className="text-gray-600 mt-2">Track and manage your order history</p>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders or products..."
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
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </motion.div>

          {/* Orders List */}
          <div className="space-y-6">
            {filteredOrders.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center py-12"
              >
                <Package size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter !== "all" 
                    ? "Try adjusting your search or filter criteria" 
                    : "You haven't placed any orders yet"}
                </p>
                <Link 
                  href="/shop" 
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Start Shopping
                </Link>
              </motion.div>
            ) : (
              filteredOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <div>
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <p className="text-gray-600 text-sm">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(order.status)}
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">${order.total.toFixed(2)}</p>
                        <p className="text-gray-600 text-sm">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {order.items.map((item, itemIndex) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Package size={24} className="text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                            <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                            {order.status === "Delivered" && (
                              <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center space-x-1 mt-1">
                                <Star size={14} />
                                <span>Review</span>
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Info */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Shipping Address</h5>
                          <p className="text-gray-600 text-sm">{order.shipping.address}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Shipping Method</h5>
                          <p className="text-gray-600 text-sm">{order.shipping.method}</p>
                          {order.shipping.tracking && (
                            <p className="text-blue-600 text-sm mt-1">
                              Tracking: {order.shipping.tracking}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Order Actions */}
                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div className="flex flex-wrap gap-3">
                        {order.status === "Delivered" && (
                          <button className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-sm">
                            Reorder Items
                          </button>
                        )}
                        {(order.status === "Pending" || order.status === "Processing") && (
                          <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors duration-200 text-sm">
                            Cancel Order
                          </button>
                        )}
                        {order.shipping.tracking && (
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 text-sm">
                            Track Package
                          </button>
                        )}
                      </div>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200">
                        <Eye size={16} />
                        <span className="text-sm">View Details</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Order Summary Stats */}
          {filteredOrders.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
                  <p className="text-gray-600 text-sm">Total Orders</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm">Total Spent</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {orders.filter(o => o.status === "Delivered").length}
                  </p>
                  <p className="text-gray-600 text-sm">Delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    {orders.filter(o => o.status === "Processing" || o.status === "Shipped").length}
                  </p>
                  <p className="text-gray-600 text-sm">In Progress</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}