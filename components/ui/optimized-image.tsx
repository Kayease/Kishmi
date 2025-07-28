"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn, optimizeImageUrl, generateImageSizes } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
  fill?: boolean
  sizes?: string
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
  fallbackGradient?: string
  productName?: string
  showLoadingSpinner?: boolean
  hoverEffects?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  className,
  width = 600,
  height = 800,
  quality = 85,
  priority = false,
  fill = false,
  sizes,
  placeholder = "blur",
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  onLoad,
  onError,
  fallbackGradient,
  productName,
  showLoadingSpinner = true,
  hoverEffects = true
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  const optimizedSrc = optimizeImageUrl(src, { 
    width, 
    height, 
    quality, 
    format: 'webp' 
  })

  const imageSizes = sizes || generateImageSizes()

  if (hasError || !src) {
    return (
      <div className={cn(
        "relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200",
        fallbackGradient && `bg-gradient-to-br ${fallbackGradient}`,
        className
      )}>
        <div className="text-center p-4">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-2 mx-auto shadow-lg">
            <span className="text-white font-bold text-xs tracking-widest">KISHMI</span>
          </div>
          {productName && (
            <p className="text-sm text-gray-600 font-medium">
              {productName.split(' ').slice(0, 2).join(' ')}
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading Spinner */}
      {isLoading && showLoadingSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
          <motion.div
            className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* Optimized Image */}
      <Image
        src={optimizedSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={cn(
          "object-cover transition-all duration-700",
          hoverEffects && "group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105",
          className
        )}
        sizes={imageSizes}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Enhancement Overlay */}
      {hoverEffects && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      )}
    </div>
  )
}