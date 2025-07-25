"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Heart, User, Menu, X, Search, LogOut, Settings, Package, ChevronDown } from "lucide-react"
import { useStore } from "@/lib/store"
import SearchModal from "./SearchModal"
import CartDrawer from "./CartDrawer"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const shopDropdownRef = useRef<HTMLDivElement>(null)

  const { cartItems, setCartOpen, setSearchOpen, user, isUserMenuOpen, setUserMenuOpen, logout, wishlistItems } =
    useStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target as Node)) {
        setIsShopDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setUserMenuOpen])

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const shopCategories = [
    {
      name: "All Products",
      href: "/shop",
      description: "Browse our complete collection",
      icon: "🎨",
    },
    {
      name: "Lips",
      href: "/shop?category=lips",
      description: "Lipsticks, glosses & lip care",
      icon: "💋",
    },
    {
      name: "Face",
      href: "/shop?category=face",
      description: "Foundation, concealer & powder",
      icon: "✨",
    },
    {
      name: "Eyes",
      href: "/shop?category=eyes",
      description: "Eyeshadow, liner & mascara",
      icon: "👁️",
    },
    {
      name: "Skincare",
      href: "/shop?category=skincare",
      description: "Serums, moisturizers & treatments",
      icon: "🌿",
    },
  ]

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const wishlistCount = wishlistItems.length

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-white/10 backdrop-blur-md"
          }`}
      >
        <nav className="container-max section-padding py-3 lg:py-4">
          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className={`p-2 rounded-full transition-colors duration-200 z-[110] ${isScrolled ? "hover:bg-gray-100 text-black" : "hover:bg-white/20 text-white"
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Centered Logo with tagline */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 z-[110] flex flex-col items-center">
              <Image
                src="/kishmi-logo.png"
                alt="Kishmi Cosmetics Logo"
                width={180}
                height={45}
                priority
                className=""
              />
              <span
                className={`text-xs font-medium tracking-wide ${typeof window !== "undefined" && window.location.pathname === "/"
                      ? isScrolled
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                    }`}
              >
                Restore &bull; Rejuvenate &bull; Radiate
              </span>
            </Link>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-1 z-[110]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? "hover:bg-gray-100 text-black" : "hover:bg-white/20 text-white"
                  }`}
              >
                <Search size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartOpen(true)}
                className={`p-2 rounded-full transition-all duration-300 relative ${isScrolled ? "hover:bg-gray-100 text-black" : "hover:bg-white/20 text-white"
                  }`}
              >
                <ShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartItemsCount}
                  </span>
                )}
              </motion.button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center">
            {/* Left Navigation */}
            <div className="flex items-center justify-start space-x-8">
              {/* Shop Dropdown */}
              <div className="relative" ref={shopDropdownRef}>
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                  className={`flex items-center space-x-1 text-sm font-medium tracking-widest uppercase transition-all duration-300 relative group ${typeof window !== "undefined" && window.location.pathname === "/"
                      ? isScrolled
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                    }`}
                >
                  <span>Shop</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isShopDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${typeof window !== "undefined" && window.location.pathname === "/"
                        ? isScrolled
                          ? "bg-black"
                          : "bg-white"
                        : "bg-black"
                      }`}
                  ></span>
                </motion.button>

                <AnimatePresence>
                  {isShopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[110]"
                    >
                      <div className="px-4 pb-3 border-b border-gray-100">
                        <h3 className="font-playfair text-lg font-bold text-gray-900">Shop by Category</h3>
                        <p className="text-sm text-gray-500 mt-1">Discover our premium collections</p>
                      </div>
                      <div className="py-2">
                        {shopCategories.map((category, index) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            onClick={() => setIsShopDropdownOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                          >
                            <span className="text-2xl">{category.icon}</span>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 group-hover:text-black transition-colors duration-200">
                                {category.name}
                              </div>
                              <div className="text-sm text-gray-500">{category.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 pt-3 border-t border-gray-100">
                        <Link
                          href="/shop"
                          onClick={() => setIsShopDropdownOpen(false)}
                          className="block w-full text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                        >
                          View All Products
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 relative group ${typeof window !== "undefined" && window.location.pathname === "/"
                        ? isScrolled
                          ? "text-black hover:text-gray-600"
                          : "text-white hover:text-gray-300"
                        : "text-black hover:text-gray-600"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${typeof window !== "undefined" && window.location.pathname === "/"
                          ? isScrolled
                            ? "bg-black"
                            : "bg-white"
                          : "bg-black"
                        }`}
                    ></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Centered Logo with tagline */}
            <div className="flex flex-col items-center justify-center">
              <Link href="/" className="flex flex-col items-center">
                <Image
                  src={typeof window !== "undefined" && window.location.pathname === "/"
                      ? isScrolled ? "/kishmi-logo.png" : "/Kishmi-white.png" :"/kishmi-logo.png" }
                  alt="Kishmi Cosmetics Logo"
                  width={220}
                  height={60}
                  priority
                />
                <span
                  className={`text-base font-medium tracking-wide ${typeof window !== "undefined" && window.location.pathname === "/"
                      ? isScrolled
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-600"
                    }`}
                >
                  Restore &bull; Rejuvenate &bull; Radiate
                </span>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className={`p-3 rounded-full transition-all duration-300${typeof window !== "undefined" && window.location.pathname === "/"
                    ? isScrolled
                      ? "hover:bg-gray-100 text-black"
                      : "hover:bg-white/20 text-white"
                    : "hover:bg-gray-100 text-black"
                  }`}
              >
                <Search size={20} />
              </motion.button>

              <div className="relative" ref={userMenuRef}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setUserMenuOpen(!isUserMenuOpen)}
                  className={`p-3 rounded-full transition-all duration-300 ${typeof window !== "undefined" && window.location.pathname === "/"
                      ? isScrolled
                        ? "hover:bg-gray-100 text-black"
                        : "hover:bg-white/20 text-white"
                      : "hover:bg-gray-100 text-black"
                    }`}
                >
                  <User size={20} />
                </motion.button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-[110]"
                    >
                      {user ? (
                        <>
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                          <Link
                            href="/account"
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <Settings size={18} />
                            <span>Account Settings</span>
                          </Link>
                          <Link
                            href="/account/orders"
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <Package size={18} />
                            <span>My Orders</span>
                          </Link>
                          <button
                            onClick={() => {
                              logout()
                              setUserMenuOpen(false)
                            }}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 w-full text-left text-red-600"
                          >
                            <LogOut size={18} />
                            <span>Sign Out</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            href="/auth/login"
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Sign In
                          </Link>
                          <Link
                            href="/auth/register"
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Create Account
                          </Link>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/wishlist">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-all duration-300 relative ${typeof window !== "undefined" && window.location.pathname === "/"
                      ? isScrolled
                        ? "hover:bg-gray-100 text-black"
                        : "hover:bg-white/20 text-white"
                      : "hover:bg-gray-100 text-black"
                    }`}
                >
                  <Heart size={20} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                      {wishlistCount}
                    </span>
                  )}
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartOpen(true)}
                className={`p-3 rounded-full transition-all duration-300 relative $${typeof window !== "undefined" && window.location.pathname === "/"
                    ? isScrolled
                      ? "hover:bg-gray-100 text-black"
                      : "hover:bg-white/20 text-white"
                    : "hover:bg-gray-100 text-black"
                  }`}
              >
                <ShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                    {cartItemsCount}
                  </span>
                )}
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile Menu with Better Visibility */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-6 pt-6 border-t border-white/20 bg-black/90 backdrop-blur-md rounded-lg p-6 mx-4 z-[105]"
              >
                <div className="flex flex-col space-y-6 text-white">
                  {/* Mobile Shop Categories */}
                  <div>
                    <h3 className="font-medium text-lg mb-3 text-white">Shop</h3>
                    <div className="pl-4 space-y-3">
                      {shopCategories.map((category, index) => (
                        <motion.div
                          key={category.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={category.href}
                            className="flex items-center space-x-3 text-base font-medium tracking-wide text-white hover:text-gray-300 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index + shopCategories.length) * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-lg font-medium tracking-wide text-white hover:text-gray-300 transition-colors duration-300 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile User Menu */}
                  <div className="pt-4 border-t border-white/20">
                    {user ? (
                      <>
                        <div className="mb-4">
                          <p className="font-medium text-white">{user.name}</p>
                          <p className="text-sm text-gray-300">{user.email}</p>
                        </div>
                        <div className="space-y-3">
                          <Link
                            href="/account"
                            className="flex items-center space-x-3 text-lg font-medium text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <Settings size={20} />
                            <span>Account</span>
                          </Link>
                          <Link
                            href="/wishlist"
                            className="flex items-center space-x-3 text-lg font-medium text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <Heart size={20} />
                            <span>Wishlist ({wishlistCount})</span>
                          </Link>
                          <button
                            onClick={() => {
                              logout()
                              setIsMobileMenuOpen(false)
                            }}
                            className="flex items-center space-x-3 text-lg font-medium text-red-400"
                          >
                            <LogOut size={20} />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-3">
                        <Link
                          href="/auth/login"
                          className="block text-lg font-medium text-white"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/auth/register"
                          className="block text-lg font-medium text-white"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Create Account
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <SearchModal />
      <CartDrawer />
    </>
  )
}
