'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function DealSignature() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSigned, setIsSigned] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSign = () => {
    if (isSigned || isAnimating) return
    
    setIsAnimating(true)
    
    // Trigger confetti
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c9a962', '#ffffff', '#a8a9ad'],
      })
      setIsSigned(true)
      setIsAnimating(false)
    }, 2000)
  }

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-gold text-sm font-medium tracking-widest uppercase mb-4 block"
          >
            Seal The Deal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
          >
            Ready to Make It Official?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-400 text-lg"
          >
            Your dream property is just a signature away. Let's close the deal 
            and welcome you to your new home.
          </motion.p>
        </div>

        {/* Paper & Signature Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
        >
          {/* Document Paper */}
          <div className="relative flex-1 w-full max-w-2xl">
            <div className="paper-texture rounded-lg p-8 lg:p-12 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              {/* Paper Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-amber-700 rounded flex items-center justify-center">
                    <span className="text-white font-display font-bold text-lg">I</span>
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-display font-bold text-lg">INTERNITY LANDS</h3>
                    <p className="text-gray-500 text-xs">Official Property Agreement</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs">Document No.</p>
                  <p className="text-gray-800 font-mono text-sm">#IL-2026-001</p>
                </div>
              </div>

              {/* Document Content */}
              <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
                <p className="font-display text-xl text-gray-800">
                  Property Sales Agreement
                </p>
                
                <p>
                  This agreement is made and entered into effect upon the date of signature below,
                  between <span className="font-semibold">INTERNITY LANDS Real Estate LLC</span> ("Agency")
                  and the undersigned Client ("Buyer").
                </p>

                <div className="space-y-2 pl-4 border-l-2 border-accent-gold/30">
                  <p>✓ Property inspection completed and approved</p>
                  <p>✓ All legal documentation verified</p>
                  <p>✓ Financial terms agreed upon</p>
                  <p>✓ Transfer of ownership initiated</p>
                </div>

                <p>
                  Both parties agree to the terms and conditions outlined in the full contract
                  document provided separately. This signature confirms the intent to proceed
                  with the property transaction.
                </p>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-xs mb-4">Authorized Signature</p>
                  
                  {/* Signature Line */}
                  <div className="relative h-20 border-b-2 border-gray-300">
                    <AnimatePresence>
                      {(isAnimating || isSigned) && (
                        <motion.svg
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 400 80"
                        >
                          <motion.path
                            d="M 30 50 C 50 30, 70 60, 90 40 C 110 20, 130 50, 150 35 C 170 20, 190 45, 210 30 C 230 15, 250 40, 270 25 Q 290 10, 310 35 C 330 60, 350 20, 370 40"
                            fill="none"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                          />
                        </motion.svg>
                      )}
                    </AnimatePresence>
                    
                    {isSigned && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -right-4 -top-4"
                      >
                        <div className="w-20 h-20 rounded-full border-4 border-green-600 flex items-center justify-center bg-white transform rotate-[-15deg]">
                          <span className="text-green-600 font-display font-bold text-xs text-center leading-tight">
                            DEAL<br/>DONE
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-gray-500 text-xs">Date</p>
                      <p className="text-gray-800 text-sm font-mono">
                        {new Date().toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs">Location</p>
                      <p className="text-gray-800 text-sm">Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <span className="text-8xl font-display font-bold text-gray-800">IL</span>
              </div>
            </div>

            {/* Paper Shadow */}
            <div className="absolute -bottom-2 left-4 right-4 h-4 bg-black/20 blur-lg rounded-full" />
          </div>

          {/* Sign Button Section */}
          <div className="flex flex-col items-center gap-6">
            <motion.button
              onClick={handleSign}
              disabled={isSigned || isAnimating}
              className={`relative group ${isSigned ? 'cursor-default' : 'cursor-pointer'}`}
              whileHover={!isSigned && !isAnimating ? { scale: 1.05 } : {}}
              whileTap={!isSigned && !isAnimating ? { scale: 0.95 } : {}}
            >
              <div className={`absolute -inset-4 rounded-full blur-xl transition-opacity duration-500 ${
                isSigned ? 'bg-green-500/30 opacity-100' : 'bg-accent-gold/30 opacity-0 group-hover:opacity-100'
              }`} />
              
              <div className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center transition-all duration-500 ${
                isSigned 
                  ? 'bg-green-500' 
                  : isAnimating 
                    ? 'bg-accent-gold animate-pulse' 
                    : 'bg-gradient-to-br from-accent-gold to-amber-700 hover:from-accent-gold hover:to-accent-gold'
              }`}>
                {isSigned ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-16 h-16 text-white" />
                  </motion.div>
                ) : isAnimating ? (
                  <Sparkles className="w-12 h-12 text-white animate-spin" />
                ) : (
                  <span className="text-white font-display font-bold text-lg text-center leading-tight">
                    SIGN<br/>HERE
                  </span>
                )}
              </div>
            </motion.button>

            <AnimatePresence>
              {isSigned ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="text-2xl font-display font-bold text-white mb-2">
                    🎉 Congratulations!
                  </p>
                  <p className="text-primary-400">
                    The deal is done. Welcome home!
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-primary-400 text-center max-w-xs"
                >
                  {isAnimating 
                    ? 'Signing in progress...' 
                    : 'Click the button to sign and seal your deal with INTERNITY LANDS'}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-500"
        >
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            100% Secure Transaction
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            RERA Registered
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            Legal Documentation Included
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            Escrow Payment Protection
          </span>
        </motion.div>
      </div>
    </section>
  )
}
