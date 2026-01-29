"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import clsx from "clsx"

const propertyTypes = ["Apartment", "Villa", "Townhouse", "Penthouse", "Plot"]
const locations = ["Downtown", "Palm Jumeirah", "Dubai Marina", "Business Bay", "JVC", "Arabian Ranches"]
const priceRanges = [
  { label: "Any", value: "" },
  { label: "< 1M", value: "0-1000000" },
  { label: "1M - 3M", value: "1000000-3000000" },
  { label: "3M - 5M", value: "3000000-5000000" },
  { label: "> 5M", value: "5000000-" },
]

const mockProperties = [
  {
    id: 1,
    title: "Ultra Luxury Penthouse | Burj Khalifa View",
    type: "Penthouse",
    location: "Downtown",
    price: 12000000,
    image: "/properties/penthouse1.jpg",
    featured: true,
    beds: 4,
    baths: 5,
    area: 5200,
  },
  {
    id: 2,
    title: "Beachfront Villa | Palm Jumeirah",
    type: "Villa",
    location: "Palm Jumeirah",
    price: 25000000,
    image: "/properties/villa1.jpg",
    featured: true,
    beds: 6,
    baths: 7,
    area: 9000,
  },
  {
    id: 3,
    title: "Modern Apartment | Dubai Marina",
    type: "Apartment",
    location: "Dubai Marina",
    price: 2200000,
    image: "/properties/apartment1.jpg",
    featured: false,
    beds: 2,
    baths: 2,
    area: 1200,
  },
  {
    id: 4,
    title: "Family Townhouse | JVC",
    type: "Townhouse",
    location: "JVC",
    price: 1800000,
    image: "/properties/townhouse1.jpg",
    featured: false,
    beds: 3,
    baths: 4,
    area: 2100,
  },
  {
    id: 5,
    title: "Golf Course Plot | Arabian Ranches",
    type: "Plot",
    location: "Arabian Ranches",
    price: 3500000,
    image: "/properties/plot1.jpg",
    featured: false,
    beds: 0,
    baths: 0,
    area: 8000,
  },
]

function priceFormat(num: number) {
  return `AED ${num.toLocaleString()}`
}

export default function PropertyListing() {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")

  const filtered = mockProperties.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
    const matchesType = !type || p.type === type
    const matchesLocation = !location || p.location === location
    let matchesPrice = true
    if (price) {
      const [min, max] = price.split("-")
      matchesPrice =
        (!min || p.price >= parseInt(min)) && (!max || p.price <= parseInt(max))
    }
    return matchesSearch && matchesType && matchesLocation && matchesPrice
  })

  return (
    <section className="relative py-20 bg-primary-950" id="properties">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center"
        >
          Explore Our Properties
        </motion.h2>
        {/* Filters & Search */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-primary-400" />
            <input
              type="text"
              placeholder="Search by title or location"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg bg-primary-900 text-white border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[220px]"
            />
          </div>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            className="px-4 py-2 rounded-lg bg-primary-900 text-white border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Type</option>
            {propertyTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="px-4 py-2 rounded-lg bg-primary-900 text-white border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Location</option>
            {locations.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          <select
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="px-4 py-2 rounded-lg bg-primary-900 text-white border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {priceRanges.map(r => (
              <option key={r.label} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-primary-400 py-12 text-lg">
              No properties found. Try adjusting your filters.
            </div>
          )}
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={clsx(
                "relative bg-primary-900 rounded-2xl shadow-lg overflow-hidden border border-primary-800 group hover:scale-[1.025] transition-transform duration-300",
                p.featured && "ring-2 ring-gold-400"
              )}
            >
              {p.featured && (
                <span className="absolute top-4 left-4 bg-gold-500 text-primary-950 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-gold">
                  Featured
                </span>
              )}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-primary-400 text-sm mb-2">
                  <span>{p.type}</span>
                  <span>• {p.location}</span>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gold-400 font-bold text-lg">{priceFormat(p.price)}</span>
                  <span className="text-primary-400 text-xs">{p.area} sqft</span>
                </div>
                <div className="flex gap-4 text-primary-400 text-sm mb-4">
                  {p.beds > 0 && <span>{p.beds} Beds</span>}
                  {p.baths > 0 && <span>{p.baths} Baths</span>}
                </div>
                <button className="mt-2 w-full py-2 rounded-lg bg-gold-500 text-primary-950 font-bold hover:bg-gold-400 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
