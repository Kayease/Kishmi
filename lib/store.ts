"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  badge?: string | null
  rating?: number
  reviews?: number
}

export interface CartItem extends Product {
  quantity: number
  selectedShade?: string
  selectedSize?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  isAdmin?: boolean
}

export interface Address {
  id: string
  type: "shipping" | "billing"
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  isDefault: boolean
}

export interface Toast {
  id: string
  type: "success" | "error" | "cart" | "wishlist"
  title: string
  description?: string
  duration: number
}

interface Store {
  // Cart
  cartItems: CartItem[]
  isCartOpen: boolean
  addToCart: (product: Product, options?: { shade?: string; size?: string; quantity?: number }) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  setCartOpen: (open: boolean) => void

  // Wishlist
  wishlistItems: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: number) => void
  isInWishlist: (productId: number) => boolean

  // Search
  isSearchOpen: boolean
  setSearchOpen: (open: boolean) => void

  // User
  user: User | null
  isUserMenuOpen: boolean
  setUser: (user: User | null) => void
  setUserMenuOpen: (open: boolean) => void
  login: (email: string, password: string) => boolean
  loginAsAdmin: () => void
  logout: () => void

  // Quick View
  quickViewProduct: Product | null
  setQuickViewProduct: (product: Product | null) => void

  // Addresses
  addresses: Address[]
  addAddress: (address: Omit<Address, "id">) => void
  updateAddress: (id: string, address: Partial<Address>) => void
  removeAddress: (id: string) => void
  setDefaultAddress: (id: string, type: "shipping" | "billing") => void

  // Toasts
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Cart
      cartItems: [],
      isCartOpen: false,
      addToCart: (product, options) => {
        const quantity = options?.quantity || 1
        const existingItem = get().cartItems.find(
          (item) =>
            item.id === product.id && item.selectedShade === options?.shade && item.selectedSize === options?.size,
        )

        if (existingItem) {
          set((state) => ({
            cartItems: state.cartItems.map((item) =>
              item.id === product.id && item.selectedShade === options?.shade && item.selectedSize === options?.size
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          }))
        } else {
          set((state) => ({
            cartItems: [
              ...state.cartItems,
              {
                ...product,
                quantity,
                selectedShade: options?.shade,
                selectedSize: options?.size,
              },
            ],
          }))
        }

        // Add toast notification
        get().addToast({
          type: "cart",
          title: "Added to Cart!",
          description: `${product.name} has been added to your cart`,
          duration: 3000,
        })

        set({ isCartOpen: true })
      },
      removeFromCart: (productId) => {
        const product = get().cartItems.find((item) => item.id === productId)
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        }))

        if (product) {
          get().addToast({
            type: "error",
            title: "Removed from Cart",
            description: `${product.name} has been removed from your cart`,
            duration: 3000,
          })
        }
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        set((state) => ({
          cartItems: state.cartItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        }))
      },
      clearCart: () => set({ cartItems: [] }),
      setCartOpen: (open) => set({ isCartOpen: open }),

      // Wishlist
      wishlistItems: [],
      addToWishlist: (product) => {
        if (!get().isInWishlist(product.id)) {
          set((state) => ({
            wishlistItems: [...state.wishlistItems, product],
          }))

          get().addToast({
            type: "wishlist",
            title: "Added to Wishlist!",
            description: `${product.name} has been saved to your wishlist`,
            duration: 3000,
          })
        }
      },
      removeFromWishlist: (productId) => {
        const product = get().wishlistItems.find((item) => item.id === productId)
        set((state) => ({
          wishlistItems: state.wishlistItems.filter((item) => item.id !== productId),
        }))

        if (product) {
          get().addToast({
            type: "error",
            title: "Removed from Wishlist",
            description: `${product.name} has been removed from your wishlist`,
            duration: 3000,
          })
        }
      },
      isInWishlist: (productId) => {
        return get().wishlistItems.some((item) => item.id === productId)
      },

      // Search
      isSearchOpen: false,
      setSearchOpen: (open) => set({ isSearchOpen: open }),

      // User
      user: null,
      isUserMenuOpen: false,
      setUser: (user) => set({ user }),
      setUserMenuOpen: (open) => set({ isUserMenuOpen: open }),
      login: (email, password) => {
        // Admin credentials
        if (email === "rustam@kayease.in" && password === "admin@123") {
          const adminUser: User = {
            id: "admin-1",
            name: "Rustam Admin",
            email: "rustam@kayease.in",
            isAdmin: true,
          }
          set({ user: adminUser })
          return true
        }
        
        // Regular user login (dummy implementation)
        if (email && password) {
          const regularUser: User = {
            id: Date.now().toString(),
            name: email.split("@")[0],
            email: email,
            isAdmin: false,
          }
          set({ user: regularUser })
          return true
        }
        
        return false
      },
      loginAsAdmin: () => {
        const adminUser: User = {
          id: "admin-1",
          name: "Rustam Admin",
          email: "rustam@kayease.in",
          isAdmin: true,
        }
        set({ user: adminUser })
      },
      logout: () => set({ user: null, isUserMenuOpen: false }),

      // Quick View
      quickViewProduct: null,
      setQuickViewProduct: (product) => set({ quickViewProduct: product }),

      // Addresses
      addresses: [],
      addAddress: (address) => {
        const newAddress = { ...address, id: Date.now().toString() }
        set((state) => ({ addresses: [...state.addresses, newAddress] }))
      },
      updateAddress: (id, updates) => {
        set((state) => ({
          addresses: state.addresses.map((addr) => (addr.id === id ? { ...addr, ...updates } : addr)),
        }))
      },
      removeAddress: (id) => {
        set((state) => ({
          addresses: state.addresses.filter((addr) => addr.id !== id),
        }))
      },
      setDefaultAddress: (id, type) => {
        set((state) => ({
          addresses: state.addresses.map((addr) => ({
            ...addr,
            isDefault: addr.id === id && addr.type === type,
          })),
        }))
      },

      // Toasts
      toasts: [],
      addToast: (toast) => {
        const id = Date.now().toString()
        const newToast = { ...toast, id }
        set((state) => ({ toasts: [...state.toasts, newToast] }))

        // Auto remove toast after duration
        setTimeout(() => {
          get().removeToast(id)
        }, toast.duration)
      },
      removeToast: (id) => {
        set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }))
      },
    }),
    {
      name: "kishmi-store",
      partialize: (state) => ({
        cartItems: state.cartItems,
        wishlistItems: state.wishlistItems,
        user: state.user,
        addresses: state.addresses,
        toasts: state.toasts,
      }),
    },
  ),
)
