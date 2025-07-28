import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image optimization utilities
export function optimizeImageUrl(url: string, options: {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpg' | 'png'
} = {}): string {
  if (!url) return url
  
  const { width = 600, height = 800, quality = 80, format = 'webp' } = options
  
  // For Unsplash images, add optimization parameters
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0]
    return `${baseUrl}?w=${width}&h=${height}&fit=crop&crop=center&auto=format&q=${quality}&fm=${format}`
  }
  
  // For other images, return as is (could be extended for other CDNs)
  return url
}

export function getImagePlaceholder(productName: string): string {
  // Generate a consistent placeholder based on product name
  const colors = [
    'from-blue-100 to-cyan-100',
    'from-purple-100 to-pink-100',
    'from-green-100 to-emerald-100',
    'from-orange-100 to-yellow-100',
    'from-red-100 to-rose-100',
    'from-indigo-100 to-purple-100'
  ]
  
  const hash = productName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return colors[hash % colors.length]
}

export function generateImageSizes(): string {
  return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
}
