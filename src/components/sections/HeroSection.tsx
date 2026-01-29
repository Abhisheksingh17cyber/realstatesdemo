'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, ArrowDown, MapPin, Search } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[800px] overflow-hidden"
    >
      {/* Video Background */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0"
      >
        <div className="video-container w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Video Project.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-primary-950/30 to-primary-950" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            <span className="text-sm text-primary-300 font-medium">Dubai's Premier Luxury Real Estate</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="text-white">Buy & Sell</span>
            <br />
            <span className="text-gradient">Premium Properties</span>
            <br />
            <span className="text-white">in Dubai</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-primary-300 max-w-2xl mx-auto mb-8"
          >
            <MapPin className="inline w-5 h-5 text-accent-gold mr-2" />
            Palm Jumeirah • Dubai Marina • Downtown • Business Bay
            <br />
            <span className="text-sm mt-2 inline-block">Trusted by 5,000+ happy clients since 2010</span>
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold/20 via-transparent to-accent-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full overflow-hidden">
                <Search className="w-5 h-5 text-primary-400 ml-6" />
                <input
                  type="text"
                  placeholder="Search by location, property type, or price..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-4 text-white placeholder-primary-500 focus:outline-none"
                />
                <button className="btn-premium m-2 px-6 py-3 text-sm font-medium text-primary-950 rounded-full">
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="btn-premium px-8 py-4 text-base font-medium text-primary-950 rounded-full w-full sm:w-auto"
            >
              Schedule a Viewing
            </Link>
            <Link
              href="/contact"
              className="btn-border px-8 py-4 text-base font-medium text-white rounded-full w-full sm:w-auto hover:text-accent-gold"
            >
              Get Free Consultation
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-gold">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Agent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-medium">John Smith</p>
                <p className="text-xs">Senior Agent</p>
              </div>
            </div>
            <span className="hidden sm:block w-px h-8 bg-white/10" />
            <span>RERA Certified</span>
            <span className="hidden sm:block w-px h-8 bg-white/10" />
            <span>15+ Years Experience</span>
            <span className="hidden sm:block w-px h-8 bg-white/10" />
            <span>AED 5B+ Sales</span>
          </motion.div>
        </div>

        {/* Video Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-8 flex items-center gap-2"
        >
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-primary-400"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
