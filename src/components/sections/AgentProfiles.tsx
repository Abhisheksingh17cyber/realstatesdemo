'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const agents = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Senior Property Consultant',
    specialization: 'Luxury Villas & Penthouses',
    experience: '12 years',
    propertiesSold: '150+',
    rating: 4.9,
    reviews: 127,
    phone: '+971 50 123 4567',
    email: 'john@internitylands.com',
    whatsapp: '971501234567',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    areas: ['Palm Jumeirah', 'Emirates Hills', 'Dubai Hills'],
    bio: 'Specializing in ultra-luxury properties for over a decade, John has helped clients find their dream homes across Dubai\'s most prestigious communities.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Investment Property Specialist',
    specialization: 'Off-Plan & Investment',
    experience: '10 years',
    propertiesSold: '200+',
    rating: 4.8,
    reviews: 98,
    phone: '+971 50 234 5678',
    email: 'sarah@internitylands.com',
    whatsapp: '971502345678',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    areas: ['Downtown Dubai', 'Business Bay', 'DIFC'],
    bio: 'Sarah brings a wealth of knowledge in property investment, helping investors maximize their returns in Dubai\'s dynamic real estate market.',
  },
  {
    id: 3,
    name: 'Ahmed Al Rashid',
    title: 'Residential Sales Director',
    specialization: 'Waterfront Properties',
    experience: '15 years',
    propertiesSold: '300+',
    rating: 5.0,
    reviews: 156,
    phone: '+971 50 345 6789',
    email: 'ahmed@internitylands.com',
    whatsapp: '971503456789',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    areas: ['Dubai Marina', 'JBR', 'Bluewaters'],
    bio: 'A Dubai native with deep local expertise, Ahmed has been instrumental in connecting international buyers with premium waterfront properties.',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    title: 'Luxury Property Expert',
    specialization: 'High-End Apartments',
    experience: '8 years',
    propertiesSold: '120+',
    rating: 4.9,
    reviews: 89,
    phone: '+971 50 456 7890',
    email: 'emma@internitylands.com',
    whatsapp: '971504567890',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    areas: ['City Walk', 'La Mer', 'Jumeirah'],
    bio: 'Emma\'s attention to detail and personalized approach has made her a favorite among clients seeking premium apartment living.',
  },
]

export default function AgentProfiles() {
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
              Meet Our Experts
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              Your Trusted Agents
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-400 mt-4 max-w-xl"
            >
              Our team of experienced professionals is dedicated to finding 
              the perfect property that matches your lifestyle and investment goals.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/agents"
              className="btn-border px-8 py-4 text-white rounded-full inline-flex items-center gap-2 group"
            >
              View All Agents
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <Link href={`/agents/${agent.id}`}>
                <div className="card-premium bg-primary-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-accent-gold/30">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/20 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-primary-950/80 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 text-accent-gold fill-accent-gold" />
                      <span className="text-white text-sm font-medium">{agent.rating}</span>
                    </div>

                    {/* Quick Contact */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={`tel:${agent.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-accent-gold hover:text-primary-950 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href={`https://wa.me/${agent.whatsapp}`}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-500/80 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-green-500 transition-all"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-accent-gold transition-colors">
                      {agent.name}
                    </h3>
                    <p className="text-accent-gold text-sm mt-1">{agent.title}</p>
                    
                    <div className="mt-4 space-y-2 text-sm text-primary-400">
                      <p>📍 {agent.areas.slice(0, 2).join(', ')}</p>
                      <p>🏠 {agent.propertiesSold} properties sold</p>
                      <p>⭐ {agent.reviews} reviews</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-xs text-primary-500 line-clamp-2">{agent.bio}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
