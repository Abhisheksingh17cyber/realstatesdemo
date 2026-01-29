'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Clients', prefix: '' },
  { value: 15, suffix: '+', label: 'Years Experience', prefix: '' },
  { value: 5, suffix: 'B+', label: 'AED in Sales', prefix: '' },
  { value: 2500, suffix: '+', label: 'Properties Sold', prefix: '' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', prefix: '' },
  { value: 25, suffix: '+', label: 'Expert Agents', prefix: '' },
]

function AnimatedCounter({ value, suffix, prefix, isInView }: { 
  value: number
  suffix: string
  prefix: string
  isInView: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span className="stat-number">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-primary-900/50" />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
          alt="Dubai Skyline"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-transparent to-primary-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-gold text-sm font-medium tracking-widest uppercase mb-4 block"
          >
            Our Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
          >
            Numbers That Speak
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                prefix={stat.prefix}
                isInView={isInView} 
              />
              <div className="mt-2 w-12 h-px mx-auto bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
              <p className="mt-3 text-primary-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
