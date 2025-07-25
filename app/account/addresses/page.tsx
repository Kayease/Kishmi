"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Edit3, Trash2, MapPin } from "lucide-react"
import { useStore } from "@/lib/store"
import Link from "next/link"

export default function AddressesPage() {
  const { user, addresses, addAddress, updateAddress, removeAddress, setDefaultAddress } = useStore()
  const [isAddingAddress, setIsAddingAddress] = useState(false)
  const [editingAddress, setEditingAddress] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    type: "shipping" as "shipping" | "billing",
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: "",
    isDefault: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingAddress) {
      updateAddress(editingAddress, formData)
      setEditingAddress(null)
    } else {
      addAddress(formData)
      setIsAddingAddress(false)
    }
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      type: "shipping",
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
      phone: "",
      isDefault: false,
    })
  }

  const handleEdit = (address: any) => {
    setFormData(address)
    setEditingAddress(address.id)
    setIsAddingAddress(true)
  }

  const handleCancel = () => {
    setIsAddingAddress(false)
    setEditingAddress(null)
    resetForm()
  }

  if (!user) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to manage addresses</h1>
          <Link href="/auth/login" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container-max section-padding py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-playfair text-3xl font-bold">My Addresses</h1>
              <p className="text-gray-600 mt-2">Manage your shipping and billing addresses</p>
            </div>
            <button onClick={() => setIsAddingAddress(true)} className="btn-primary flex items-center space-x-2">
              <Plus size={16} />
              <span>Add Address</span>
            </button>
          </div>

          {/* Add/Edit Address Form */}
          {isAddingAddress && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <h2 className="font-bold text-xl mb-6">{editingAddress ? "Edit Address" : "Add New Address"}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="shipping"
                        checked={formData.type === "shipping"}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value as "shipping" | "billing" })}
                        className="mr-2"
                      />
                      Shipping Address
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="billing"
                        checked={formData.type === "billing"}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value as "shipping" | "billing" })}
                        className="mr-2"
                      />
                      Billing Address
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address1}
                      onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apartment, suite, etc.</label>
                    <input
                      type="text"
                      value={formData.address2}
                      onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isDefault}
                      onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                      className="mr-2"
                    />
                    Set as default {formData.type} address
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary">
                    {editingAddress ? "Update Address" : "Add Address"}
                  </button>
                  <button type="button" onClick={handleCancel} className="btn-secondary">
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Address List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses.map((address, index) => (
              <motion.div
                key={address.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} className="text-gray-600" />
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        address.type === "shipping" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {address.type === "shipping" ? "Shipping" : "Billing"}
                    </span>
                    {address.isDefault && (
                      <span className="px-2 py-1 text-xs font-medium bg-black text-white rounded-full">Default</span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(address)}
                      className="p-2 text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => removeAddress(address.id)}
                      className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="font-medium">
                    {address.firstName} {address.lastName}
                  </p>
                  {address.company && <p className="text-gray-600">{address.company}</p>}
                  <p className="text-gray-600">{address.address1}</p>
                  {address.address2 && <p className="text-gray-600">{address.address2}</p>}
                  <p className="text-gray-600">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                  <p className="text-gray-600">{address.country}</p>
                  {address.phone && <p className="text-gray-600">{address.phone}</p>}
                </div>

                {!address.isDefault && (
                  <button
                    onClick={() => setDefaultAddress(address.id, address.type)}
                    className="mt-4 text-sm text-black hover:underline"
                  >
                    Set as default
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {addresses.length === 0 && !isAddingAddress && (
            <div className="text-center py-12">
              <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">No addresses saved</h3>
              <p className="text-gray-600 mb-6">Add your first address to make checkout faster</p>
              <button onClick={() => setIsAddingAddress(true)} className="btn-primary">
                Add Address
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
