'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Shield, Users, Building, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Award,
    title: '15+ Years',
    subtitle: 'of Excellence',
    description: 'Trusted experience in Dubai luxury real estate market'
  },
  {
    icon: Shield,
    title: 'RERA',
    subtitle: 'Certified',
    description: 'Fully licensed and compliant with all regulations'
  },
  {
    icon: Users,
    title: '5,000+',
    subtitle: 'Happy Clients',
    description: 'Families who found their dream homes with us'
  },
  {
    icon: Building,
    title: 'AED 5B+',
    subtitle: 'in Sales',
    description: 'Total value of properties sold successfully'
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-accent-gold text-sm font-medium tracking-widest uppercase mb-4 block"
            >
              About INTERNITY LANDS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Dubai's Most{' '}
              <span className="text-gradient">Trusted</span>
              <br />
              Real Estate Partner
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-300 text-lg leading-relaxed mb-6"
            >
              Since 2010, INTERNITY LANDS has been the cornerstone of premium real estate 
              in Dubai. We combine local expertise with global standards to deliver 
              exceptional property experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary-400 leading-relaxed mb-8"
            >
              Our team of seasoned professionals understands that real estate is more 
              than transactions—it's about finding the perfect space where memories 
              are made and futures are built. From stunning waterfront villas to 
              contemporary city penthouses, we specialize in properties that define 
              luxury living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="btn-premium px-8 py-4 text-base font-medium text-primary-950 rounded-full inline-flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/agents"
                className="btn-border px-8 py-4 text-base font-medium text-white rounded-full"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image & Features */}
          <div className="relative">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden gradient-border">
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                  alt="INTERNITY LANDS Office"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 p-6 bg-primary-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-premium">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                        alt="Team member"
                        className="w-12 h-12 rounded-full border-2 border-primary-900"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-semibold">25+ Expert Agents</p>
                    <p className="text-primary-400 text-sm">Ready to assist you</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-premium p-6 bg-primary-900/30 border border-white/5 rounded-2xl text-center group hover:border-accent-gold/30"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent-gold/10 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">{feature.title}</h3>
              <p className="text-accent-gold text-sm font-medium mb-2">{feature.subtitle}</p>
              <p className="text-primary-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
