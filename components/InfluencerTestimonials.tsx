"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Heart,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Pause,
} from "lucide-react";

const videoReels = [
  {
    id: 1,
    influencer: "Sarah Beauty",
    handle: "@sarahbeauty",
    product: "Velvet Matte Lipstick",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?w=400&h=600&fit=crop&crop=face",
    likes: "12.5K",
    views: "45.2K",
  },
  {
    id: 2,
    influencer: "Maya Glam",
    handle: "@mayaglam",
    product: "Radiance Foundation",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    likes: "18.3K",
    views: "67.8K",
  },
  {
    id: 3,
    influencer: "Zoe Makeup",
    handle: "@zoemakeup",
    product: "Luxury Eye Palette",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
    likes: "25.7K",
    views: "89.1K",
  },
  {
    id: 4,
    influencer: "Aria Style",
    handle: "@ariastyle",
    product: "Glow Highlighter",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
    likes: "14.9K",
    views: "52.3K",
  },
  {
    id: 5,
    influencer: "Luna Beauty",
    handle: "@lunabeauty",
    product: "SPF 50 Sunscreen",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    likes: "21.4K",
    views: "73.6K",
  },
];

// Responsive card layout: 5 on desktop, 3 on mobile
const getCardPositions = (isMobile: boolean) =>
  isMobile
    ? [
        {
          x: 0,
          y: -60,
          scale: 0.85,
          z: 1,
          opacity: 0.7,
          blur: true,
          rotate: -6,
        }, // top
        { x: 0, y: 0, scale: 1.08, z: 3, opacity: 1, blur: false, rotate: 0 }, // center
        { x: 0, y: 60, scale: 0.85, z: 1, opacity: 0.7, blur: true, rotate: 6 }, // bottom
      ]
    : [
        {
          x: -320,
          y: 60,
          scale: 0.7,
          z: 1,
          opacity: 0.5,
          blur: true,
          rotate: -18,
        }, // leftmost
        {
          x: -160,
          y: 30,
          scale: 0.85,
          z: 2,
          opacity: 0.8,
          blur: true,
          rotate: -8,
        }, // left
        { x: 0, y: 0, scale: 1.12, z: 3, opacity: 1, blur: false, rotate: 0 }, // center
        {
          x: 160,
          y: 30,
          scale: 0.85,
          z: 2,
          opacity: 0.8,
          blur: true,
          rotate: 8,
        }, // right
        {
          x: 320,
          y: 60,
          scale: 0.7,
          z: 1,
          opacity: 0.5,
          blur: true,
          rotate: 18,
        }, // rightmost
      ];

function getVisibleVideos(center: number, isMobile: boolean) {
  const n = videoReels.length;
  const count = isMobile ? 3 : 5;
  const centerPosition = isMobile ? 1 : 2; // Center position in the carousel
  
  return Array.from({ length: count }).map((_, i) => {
    // Calculate the video index based on carousel position
    let videoIndex;
    if (isMobile) {
      // For mobile: center position is 1, so we need to offset by 1
      videoIndex = (center + (i - 1) + n) % n;
    } else {
      // For desktop: center position is 2, so we need to offset by 2
      videoIndex = (center + (i - 2) + n) % n;
    }
    
    return { 
      ...videoReels[videoIndex], 
      origIndex: videoIndex, 
      pos: i,
      isCenter: i === centerPosition
    };
  });
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function InfluencerTestimonials() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lastAction, setLastAction] = useState<"next" | "prev" | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isMobile = useIsMobile();
  const CARD_POSITIONS = getCardPositions(isMobile);

  // Auto play/pause logic for center video
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        // Find the video that should be playing (center video)
        const visibleVideos = getVisibleVideos(centerIndex, isMobile);
        const centerVideo = visibleVideos.find(v => v.isCenter);
        
        if (centerVideo && i === centerVideo.origIndex && isPlaying) {
          video.play();
        } else {
          video.pause();
        }
        video.muted = isMuted;
      }
    });
  }, [centerIndex, isPlaying, isMuted, isMobile]);

  // Auto-next on video end
  useEffect(() => {
    const visibleVideos = getVisibleVideos(centerIndex, isMobile);
    const centerVideo = visibleVideos.find(v => v.isCenter);
    const current = centerVideo ? videoRefs.current[centerVideo.origIndex] : null;
    
    if (!current) return;
    
    const handleEnded = () => {
      setLastAction("next");
      setCenterIndex((prev) => (prev + 1) % videoReels.length);
    };
    current.addEventListener("ended", handleEnded);
    return () => current.removeEventListener("ended", handleEnded);
  }, [centerIndex, isMobile]);

  const slideNext = () => {
    setLastAction("next");
    setCenterIndex((prev) => (prev + 1) % videoReels.length);
  };
  const slidePrev = () => {
    setLastAction("prev");
    setCenterIndex(
      (prev) => (prev - 1 + videoReels.length) % videoReels.length
    );
  };

  const toggleMute = () => setIsMuted((m) => !m);
  const togglePlayPause = () => setIsPlaying((p) => !p);

  // Responsive card width/height
  const getCardSize = (pos: number) => {
    if (isMobile) {
      if (pos === 1) return "w-72 h-[420px]";
      return "w-56 h-[320px]";
    }
    if (pos === 2) return "w-96 h-[600px]";
    if (pos === 1 || pos === 3) return "w-72 h-[480px]";
    return "w-56 h-[340px]";
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="block text-lg mb-2 text-pink-500 font-semibold">
            💫 Real Stories
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-800 via-pink-700 to-rose-800 bg-clip-text text-transparent">
            What Influencers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic reviews from beauty influencers who trust KISHMI
            for their daily routines.
          </p>
        </div>
        <div className="relative flex justify-center items-center min-h-[380px] md:min-h-[600px]">
          {/* Carousel Cards */}
          <div
            className="w-full flex items-center justify-center relative"
            style={{ height: "100%", minHeight: isMobile ? 420 : 600 }}
          >
            {getVisibleVideos(centerIndex, isMobile).map((reel, i) => {
              const pos = i;
              const layout = CARD_POSITIONS[pos];
              const isCenter = reel.isCenter;
              return (
                <motion.div
                  key={reel.id}
                  className={`absolute ${getCardSize(pos)} rounded-3xl shadow-2xl transition-all duration-300 ${isCenter ? "z-30" : "z-10"}`}
                  style={{
                    left: "50%",
                    top: "50%",
                    // Center the card exactly, and apply only the calculated transform for arc/fan
                    transform: `translate(-50%, -50%) translate(${layout.x}px, ${layout.y || 0}px) rotate(${layout.rotate}deg) scale(${layout.scale})`,
                    pointerEvents: isCenter ? "auto" : "none",
                    filter: layout.blur ? "blur(2px) brightness(0.85)" : "none",
                    opacity: layout.opacity,
                  }}
                  animate={{
                    zIndex: layout.z,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-3xl">
                    <video
                      ref={(el) => {
                        videoRefs.current[reel.origIndex] = el;
                      }}
                      className="w-full h-full object-cover rounded-2xl"
                      muted={isMuted}
                      loop
                      playsInline
                      poster={reel.thumbnail}
                      style={{ background: "#222" }}
                    >
                      <source src={reel.videoUrl} type="video/mp4" />
                    </video>
                    {/* Animated Glow for Center Card */}
                    {isCenter && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          boxShadow:
                            "0 0 0 6px rgba(236, 72, 153, 0.15), 0 0 32px 8px rgba(236, 72, 153, 0.18)",
                          border: "2px solid #ec4899",
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 0 6px rgba(236, 72, 153, 0.15), 0 0 32px 8px rgba(236, 72, 153, 0.18)",
                            "0 0 0 12px rgba(236, 72, 153, 0.10), 0 0 48px 16px rgba(236, 72, 153, 0.22)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    )}
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none rounded-2xl" />
                    {/* Controls (center only) */}
                    {isCenter && (
                      <div className="absolute top-4 right-4 flex gap-2 z-20">
                        <button
                          className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center hover:bg-pink-500/80 transition shadow-lg"
                          onClick={toggleMute}
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <VolumeX size={18} className="text-white" />
                          ) : (
                            <Volume2 size={18} className="text-white" />
                          )}
                        </button>
                        <button
                          className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center hover:bg-pink-500/80 transition shadow-lg"
                          onClick={togglePlayPause}
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? (
                            <Pause size={18} className="text-white" />
                          ) : (
                            <Play size={18} className="text-white" />
                          )}
                        </button>
                      </div>
                    )}
                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center border-2 border-white shadow-lg">
                          <span className="text-lg font-bold">
                            {reel.influencer.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-base font-semibold leading-tight drop-shadow-md">
                            {reel.influencer}
                          </div>
                          <div className="text-xs opacity-80">
                            {reel.handle}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm opacity-90 mb-2 font-medium drop-shadow-md">
                        {reel.product}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Heart
                            size={14}
                            className="fill-current text-red-400"
                          />
                          {reel.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Play size={14} />
                          {reel.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Navigation */}
          <button
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:bg-pink-100 active:scale-95 transition z-40 border-2 border-pink-200"
            onClick={slidePrev}
            aria-label="Previous"
            style={{ boxShadow: "0 4px 24px 0 rgba(236,72,153,0.10)" }}
          >
            <ChevronLeft size={32} className="text-pink-500" />
          </button>
          <button
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:bg-pink-100 active:scale-95 transition z-40 border-2 border-pink-200"
            onClick={slideNext}
            aria-label="Next"
            style={{ boxShadow: "0 4px 24px 0 rgba(236,72,153,0.10)" }}
          >
            <ChevronRight size={32} className="text-pink-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
