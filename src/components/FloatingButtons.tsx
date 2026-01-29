'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/971501234567?text=Hello,%20I'm%20interested%20in%20your%20properties"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary-900/95 backdrop-blur-xl text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
            Chat on WhatsApp
          </span>
        </div>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+971501234567"
        className="call-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-accent-gold rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-14 h-14 bg-accent-gold rounded-full flex items-center justify-center shadow-lg">
            <Phone className="w-6 h-6 text-primary-950" />
          </div>
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-primary-900/95 backdrop-blur-xl text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
            Call Now
          </span>
        </div>
      </motion.a>
    </>
  )
}
