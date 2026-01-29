'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Building, TrendingUp, ArrowRight } from 'lucide-react'

const locations = [
  {
    id: 1,
    name: 'Palm Jumeirah',
    description: 'Iconic island with luxury villas and exclusive beachfront properties',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    properties: 156,
    avgPrice: '25M AED',
    growth: '+12%',
  },
  {
    id: 2,
    name: 'Dubai Marina',
    description: 'Waterfront living with stunning skyline views and vibrant lifestyle',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    properties: 342,
    avgPrice: '8M AED',
    growth: '+18%',
  },
  {
    id: 3,
    name: 'Downtown Dubai',
    description: 'The heart of the city featuring Burj Khalifa and Dubai Mall',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80',
    properties: 278,
    avgPrice: '15M AED',
    growth: '+22%',
  },
  {
    id: 4,
    name: 'Business Bay',
    description: 'Prime business district with modern towers and canal views',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&q=80',
    properties: 198,
    avgPrice: '6M AED',
    growth: '+15%',
  },
  {
    id: 5,
    name: 'JBR',
    description: 'Beachfront community with The Walk and stunning sea views',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80',
    properties: 124,
    avgPrice: '10M AED',
    growth: '+8%',
  },
  {
    id: 6,
    name: 'DIFC',
    description: 'Financial hub with premium offices and luxury residences',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
    properties: 89,
    avgPrice: '12M AED',
    growth: '+25%',
  },
]

export default function LocationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent-gold text-sm font-medium tracking-widest uppercase mb-4 block"
            >
              Premium Locations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              Explore Dubai's Best Areas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-400 mt-4 max-w-xl"
            >
              Discover premium properties in Dubai's most sought-after neighborhoods, 
              each offering a unique lifestyle and investment potential.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/locations"
              className="btn-border px-8 py-4 text-white rounded-full inline-flex items-center gap-2 group"
            >
              All Locations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <Link href={`/locations/${location.name.toLowerCase().replace(' ', '-')}`}>
                <div className="card-premium group relative h-[400px] rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={location.image}
                    alt={location.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Growth Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-green-400 text-xs font-medium">{location.growth}</span>
                    </div>

                    {/* Location Info */}
                    <div className="flex items-center gap-2 text-accent-gold text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      Dubai, UAE
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-accent-gold transition-colors">
                      {location.name}
                    </h3>
                    
                    <p className="text-primary-300 text-sm mb-4 line-clamp-2">
                      {location.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary-400" />
                        <span className="text-white font-medium">{location.properties}</span>
                        <span className="text-primary-400 text-sm">listings</span>
                      </div>
                      <div>
                        <span className="text-white font-medium">{location.avgPrice}</span>
                        <span className="text-primary-400 text-sm"> avg.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SEO Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 bg-primary-900/30 border border-white/5 rounded-xl text-center"
        >
          <p className="text-primary-400">
            Looking for properties in other areas? We cover all of Dubai including{' '}
            <Link href="/locations/emirates-hills" className="text-accent-gold hover:underline">Emirates Hills</Link>,{' '}
            <Link href="/locations/dubai-hills" className="text-accent-gold hover:underline">Dubai Hills Estate</Link>,{' '}
            <Link href="/locations/arabian-ranches" className="text-accent-gold hover:underline">Arabian Ranches</Link>, and more.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
