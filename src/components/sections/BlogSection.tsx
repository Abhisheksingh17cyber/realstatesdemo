'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Best Areas to Invest in Dubai 2026',
    excerpt: 'Discover the top neighborhoods offering the highest ROI and capital appreciation potential in Dubai\'s dynamic real estate market.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    category: 'Investment',
    author: 'John Smith',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'Jan 25, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Rent vs Buy in Dubai: A Complete Guide',
    excerpt: 'Should you rent or buy? We break down the financial implications and lifestyle factors to help you make the right decision.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    category: 'Guide',
    author: 'Sarah Johnson',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'Jan 20, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Home Loan Process in UAE Explained',
    excerpt: 'Everything you need to know about getting a mortgage in Dubai, from eligibility criteria to documentation requirements.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    category: 'Finance',
    author: 'Ahmed Al Rashid',
    authorImage: 'https://randomuser.me/api/portraits/men/52.jpg',
    date: 'Jan 15, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Dubai Golden Visa Through Property',
    excerpt: 'How to qualify for the UAE Golden Visa through real estate investment and the benefits it provides.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
    category: 'Legal',
    author: 'Emma Wilson',
    authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: 'Jan 10, 2026',
    readTime: '6 min read',
    featured: false,
  },
]

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="relative py-24 lg:py-32 bg-primary-950" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
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
              Insights & Guides
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              Latest from Our Blog
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-400 mt-4 max-w-xl"
            >
              Expert insights, market analysis, and helpful guides to navigate 
              Dubai's real estate landscape with confidence.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="btn-border px-8 py-4 text-white rounded-full inline-flex items-center gap-2 group"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:row-span-2"
            >
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="card-premium group h-full bg-primary-900/30 border border-white/5 rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent-gold text-primary-950 text-xs font-semibold rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-gold transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-primary-400 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{featuredPost.author}</p>
                          <div className="flex items-center gap-3 text-primary-500 text-xs">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {featuredPost.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {featuredPost.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-accent-gold text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Regular Posts */}
          <div className="space-y-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="card-premium group flex gap-6 bg-primary-900/30 border border-white/5 rounded-xl overflow-hidden p-4">
                    {/* Image */}
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <span className="text-accent-gold text-xs font-medium">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-display font-semibold text-white mt-1 group-hover:text-accent-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-3 text-primary-500 text-xs">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 lg:p-12 bg-gradient-to-r from-accent-gold/10 via-primary-900/50 to-accent-gold/10 border border-accent-gold/20 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Get Market Insights Delivered
          </h3>
          <p className="text-primary-400 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive property listings, market reports, 
            and investment tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-primary-500 focus:outline-none focus:border-accent-gold"
            />
            <button className="btn-premium px-8 py-3 text-primary-950 font-medium rounded-full">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
