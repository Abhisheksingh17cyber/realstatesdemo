'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  Youtube,
  ArrowUpRight
} from 'lucide-react'

const footerLinks = {
  properties: [
    { name: 'All Properties', href: '/properties' },
    { name: 'Apartments', href: '/properties?type=apartment' },
    { name: 'Villas', href: '/properties?type=villa' },
    { name: 'Penthouses', href: '/properties?type=penthouse' },
    { name: 'Commercial', href: '/properties?type=commercial' },
    { name: 'Off-Plan', href: '/properties?status=off-plan' },
  ],
  locations: [
    { name: 'Dubai Marina', href: '/locations/dubai-marina' },
    { name: 'Palm Jumeirah', href: '/locations/palm-jumeirah' },
    { name: 'Downtown Dubai', href: '/locations/downtown-dubai' },
    { name: 'Business Bay', href: '/locations/business-bay' },
    { name: 'JBR', href: '/locations/jbr' },
    { name: 'DIFC', href: '/locations/difc' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/agents' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 border-t border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/70 rounded-sm flex items-center justify-center">
                  <span className="text-primary-950 font-display font-bold text-xl">I</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-display font-semibold tracking-wide text-white">
                  INTERNITY
                </span>
                <span className="text-2xl font-display font-light tracking-widest text-accent-gold ml-2">
                  LANDS
                </span>
              </div>
            </Link>
            
            <p className="mt-6 text-primary-400 leading-relaxed max-w-sm">
              Dubai's premier luxury real estate agency. We specialize in premium properties, 
              investment opportunities, and exceptional client service since 2010.
            </p>

            <div className="mt-8 space-y-4">
              <a 
                href="https://maps.google.com" 
                target="_blank"
                className="flex items-start gap-3 text-primary-400 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-0.5 text-accent-gold" />
                <span>
                  Level 42, Emirates Towers,<br />
                  Sheikh Zayed Road, Dubai, UAE
                </span>
              </a>
              <a 
                href="tel:+971501234567"
                className="flex items-center gap-3 text-primary-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-gold" />
                <span>+971 50 123 4567</span>
              </a>
              <a 
                href="mailto:info@internitylands.com"
                className="flex items-center gap-3 text-primary-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-accent-gold" />
                <span>info@internitylands.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary-400 hover:text-white hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Properties
            </h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Locations
            </h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Newsletter
            </h4>
            <p className="text-primary-400 text-sm mb-4">
              Subscribe for exclusive listings and market insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-primary-500 focus:outline-none focus:border-accent-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full btn-premium px-4 py-3 text-sm font-medium text-primary-950 rounded-lg flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-primary-500">
              <span>RERA License: #12345</span>
              <span className="hidden md:inline">•</span>
              <span>DED License: #67890</span>
              <span className="hidden md:inline">•</span>
              <span>ORN: #11223</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-primary-500">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <p className="mt-6 text-center text-xs text-primary-600">
            © {new Date().getFullYear()} INTERNITY LANDS. All rights reserved. Designed with precision in Dubai.
          </p>
        </div>
      </div>
    </footer>
  )
}
