'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Building2, Key, LineChart, FileText, Headphones, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Home,
    title: 'Buy Property',
    description: 'Find your dream home from our exclusive collection of premium properties across Dubai.',
    link: '/properties?status=sale'
  },
  {
    icon: Building2,
    title: 'Sell Property',
    description: 'Get the best value for your property with our expert marketing and negotiation skills.',
    link: '/sell'
  },
  {
    icon: Key,
    title: 'Rent Property',
    description: 'Explore high-end rentals from furnished apartments to luxury villas.',
    link: '/properties?status=rent'
  },
  {
    icon: LineChart,
    title: 'Investment Advisory',
    description: 'Make informed investment decisions with our market analysis and ROI projections.',
    link: '/investment'
  },
  {
    icon: FileText,
    title: 'Property Management',
    description: 'Hassle-free management services for landlords and property investors.',
    link: '/management'
  },
  {
    icon: Headphones,
    title: 'Concierge Services',
    description: 'Premium assistance for visa, legal documentation, and relocation services.',
    link: '/concierge'
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-gold text-sm font-medium tracking-widest uppercase mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
          >
            Premium Real Estate Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-400 text-lg"
          >
            From finding your perfect property to managing your investment portfolio,
            we provide end-to-end real estate solutions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.link} className="block group">
                <div className="card-premium h-full p-8 bg-primary-900/30 border border-white/5 rounded-2xl hover:border-accent-gold/30">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 flex items-center justify-center group-hover:from-accent-gold/30 group-hover:to-accent-gold/10 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-accent-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-gold">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-400 mb-6">
            Need a customized solution? Let's discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="btn-premium px-8 py-4 text-base font-medium text-primary-950 rounded-full inline-flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
