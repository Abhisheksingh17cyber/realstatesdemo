'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const partners = [
  {
    name: 'Emaar',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Emaar_Properties_logo.svg',
  },
  {
    name: 'DAMAC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Damac_Properties_logo.svg',
  },
  {
    name: 'Nakheel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nakheel_Logo.svg',
  },
  {
    name: 'Sobha',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sobha_Developers_logo.svg',
  },
  {
    name: 'Mashreq',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Mashreq_Bank_logo.svg',
  },
  {
    name: 'HSBC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/HSBC_logo_%282018%29.svg',
  },
]

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-16 bg-primary-950" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-lg font-display font-semibold text-primary-400 mb-8"
        >
          Trusted by Dubai's Leading Developers & Banks
        </motion.h3>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="flex items-center justify-center h-16"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                style={{ maxWidth: 120 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
