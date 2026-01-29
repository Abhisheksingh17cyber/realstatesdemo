'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Bed, Bath, Square, Heart, ArrowRight, Star } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Palm Jumeirah Villa',
    location: 'Palm Jumeirah, Dubai',
    price: 'AED 25,000,000',
    priceUSD: '$6.8M',
    beds: 6,
    baths: 7,
    sqft: '12,500',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    type: 'Villa',
    status: 'For Sale',
    featured: true,
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Downtown Penthouse',
    location: 'Downtown Dubai',
    price: 'AED 18,500,000',
    priceUSD: '$5M',
    beds: 4,
    baths: 5,
    sqft: '8,200',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    type: 'Penthouse',
    status: 'For Sale',
    featured: true,
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Marina Skyline Apartment',
    location: 'Dubai Marina',
    price: 'AED 8,500,000',
    priceUSD: '$2.3M',
    beds: 3,
    baths: 4,
    sqft: '4,500',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    type: 'Apartment',
    status: 'For Sale',
    featured: false,
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Business Bay Tower Suite',
    location: 'Business Bay, Dubai',
    price: 'AED 12,000,000',
    priceUSD: '$3.3M',
    beds: 4,
    baths: 4,
    sqft: '5,800',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    type: 'Apartment',
    status: 'For Sale',
    featured: false,
    rating: 4.9,
  },
]

export default function FeaturedProperties() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
      
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
              Featured Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              Premium Properties
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-400 mt-4 max-w-xl"
            >
              Discover our handpicked selection of Dubai's most exclusive properties, 
              curated for discerning buyers seeking exceptional living experiences.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/properties"
              className="btn-border px-8 py-4 text-white rounded-full inline-flex items-center gap-2 group"
            >
              View All Properties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <Link href={`/properties/${property.id}`}>
                <div className="card-premium relative bg-primary-900/50 rounded-2xl overflow-hidden border border-white/5">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {property.featured && (
                        <span className="px-3 py-1 bg-accent-gold text-primary-950 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {property.type}
                      </span>
                    </div>
                    
                    {/* Favorite Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-950 transition-all">
                      <Heart className="w-5 h-5" />
                    </button>

                    {/* Rating */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 text-accent-gold fill-accent-gold" />
                      <span className="text-white text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary-400 text-sm mb-2">
                      <MapPin className="w-4 h-4 text-accent-gold" />
                      {property.location}
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-accent-gold transition-colors">
                      {property.title}
                    </h3>
                    
                    {/* Features */}
                    <div className="flex items-center gap-6 text-primary-400 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="w-4 h-4" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Square className="w-4 h-4" />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>
                    
                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="text-2xl font-display font-bold text-white">{property.price}</p>
                        <p className="text-sm text-primary-500">{property.priceUSD}</p>
                      </div>
                      <button className="btn-premium px-6 py-2.5 text-sm font-medium text-primary-950 rounded-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-400 mb-6">
            Can't find what you're looking for? Our agents can help you find your dream property.
          </p>
          <Link
            href="/contact"
            className="btn-premium px-8 py-4 text-base font-medium text-primary-950 rounded-full inline-flex items-center gap-2"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
