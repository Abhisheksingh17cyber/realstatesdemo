'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Mohammed Al Maktoum',
    title: 'Business Owner',
    location: 'Abu Dhabi, UAE',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    text: 'INTERNITY LANDS exceeded all my expectations. John helped us find the perfect villa in Palm Jumeirah within our budget. The entire process was seamless and professional. Highly recommended!',
    property: 'Palm Jumeirah Villa',
    date: 'December 2025',
    video: false,
  },
  {
    id: 2,
    name: 'Emily Thompson',
    title: 'CEO, Thompson Enterprises',
    location: 'London, UK',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: 'As an international buyer, I was concerned about the process, but Sarah made everything incredibly easy. She understood exactly what I was looking for and found me an amazing investment property.',
    property: 'Downtown Penthouse',
    date: 'November 2025',
    video: true,
  },
  {
    id: 3,
    name: 'Alexander Chen',
    title: 'Tech Entrepreneur',
    location: 'Singapore',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    text: 'The team at INTERNITY LANDS provided exceptional service from start to finish. Ahmed\'s deep knowledge of the Dubai market helped me secure a premium waterfront property at a great price.',
    property: 'Dubai Marina Apartment',
    date: 'October 2025',
    video: false,
  },
  {
    id: 4,
    name: 'Fatima Al Zaabi',
    title: 'Investment Banker',
    location: 'Dubai, UAE',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    rating: 5,
    text: 'I\'ve worked with many real estate agencies, but INTERNITY LANDS stands out for their professionalism and market expertise. They helped me build a diverse property portfolio.',
    property: 'Multiple Properties',
    date: 'September 2025',
    video: true,
  },
  {
    id: 5,
    name: 'Robert Williams',
    title: 'Retired Executive',
    location: 'New York, USA',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 5,
    text: 'Moving to Dubai was a big decision. Emma made the transition smooth by not just finding us a home, but helping us understand the neighborhood and lifestyle. Truly above and beyond!',
    property: 'Emirates Hills Villa',
    date: 'August 2025',
    video: false,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-gold/5 via-transparent to-transparent" />
      </div>
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
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-400 text-lg"
          >
            Don't just take our word for it. Here's what our valued clients have to say 
            about their experience with INTERNITY LANDS.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative bg-primary-900/30 border border-white/5 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Side */}
              <div className="relative aspect-square lg:aspect-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={testimonials[currentIndex].id}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-950 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent lg:hidden" />
                
                {/* Video Play Button */}
                {testimonials[currentIndex].video && (
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group">
                    <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </button>
                )}
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-accent-gold/30 mb-6" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                      ))}
                    </div>

                    <p className="text-xl lg:text-2xl text-white font-display leading-relaxed mb-8">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <div>
                        <h4 className="text-lg font-display font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary-400 text-sm">
                          {testimonials[currentIndex].title}
                        </p>
                        <p className="text-primary-500 text-sm">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <span className="text-accent-gold text-sm">
                        🏠 {testimonials[currentIndex].property}
                      </span>
                      <span className="text-primary-500 text-sm">
                        {testimonials[currentIndex].date}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent-gold hover:text-accent-gold transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'w-8 bg-accent-gold' 
                            : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent-gold hover:text-accent-gold transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
              ))}
            </div>
            <span className="text-white font-medium">4.9/5</span>
            <span className="text-primary-400">on Google</span>
          </div>
          <div className="text-primary-400">
            <span className="text-white font-semibold">500+</span> verified reviews
          </div>
          <a 
            href="https://google.com/reviews" 
            target="_blank" 
            className="text-accent-gold hover:underline"
          >
            Read all reviews →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
