'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Properties', 
    href: '/properties',
    submenu: [
      { name: 'All Properties', href: '/properties' },
      { name: 'Apartments', href: '/properties?type=apartment' },
      { name: 'Villas', href: '/properties?type=villa' },
      { name: 'Penthouses', href: '/properties?type=penthouse' },
      { name: 'Commercial', href: '/properties?type=commercial' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Agents', href: '/agents' },
  { name: 'Locations', href: '/locations' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-primary-950/95 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-accent-gold/70 rounded-sm flex items-center justify-center">
                  <span className="text-primary-950 font-display font-bold text-lg">I</span>
                </div>
                <div className="absolute -inset-1 bg-accent-gold/20 rounded-sm blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-display font-semibold tracking-wide text-white">
                  INTERNITY
                </span>
                <span className="text-xl font-display font-light tracking-widest text-accent-gold ml-2">
                  LANDS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-primary-300 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  
                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-primary-900/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden min-w-[200px] shadow-premium">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-4 py-3 text-sm text-primary-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+971501234567"
                className="hidden md:flex items-center gap-2 text-sm text-primary-300 hover:text-accent-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+971 50 123 4567</span>
              </a>
              
              <Link
                href="/contact"
                className="hidden sm:block btn-premium px-6 py-2.5 text-sm font-medium text-primary-950 rounded-full"
              >
                Schedule Viewing
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-accent-gold transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-primary-950 border-l border-white/10 overflow-y-auto">
              <div className="pt-24 pb-8 px-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-primary-200 hover:text-white border-b border-white/5 transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 space-y-2 mt-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-primary-400 hover:text-accent-gold transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                <div className="pt-6 space-y-4">
                  <a 
                    href="tel:+971501234567"
                    className="flex items-center gap-3 text-primary-300 hover:text-accent-gold transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+971 50 123 4567</span>
                  </a>
                  
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full btn-premium px-6 py-3 text-center text-sm font-medium text-primary-950 rounded-full"
                  >
                    Schedule Viewing
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
