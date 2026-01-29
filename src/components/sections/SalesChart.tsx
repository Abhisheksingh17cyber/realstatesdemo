'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Home, DollarSign } from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const salesData = [
  { month: 'Jan', sales: 45, clients: 12, revenue: 180 },
  { month: 'Feb', sales: 52, clients: 15, revenue: 220 },
  { month: 'Mar', sales: 48, clients: 18, revenue: 195 },
  { month: 'Apr', sales: 61, clients: 22, revenue: 280 },
  { month: 'May', sales: 55, clients: 20, revenue: 245 },
  { month: 'Jun', sales: 67, clients: 28, revenue: 320 },
  { month: 'Jul', sales: 72, clients: 32, revenue: 380 },
  { month: 'Aug', sales: 78, clients: 35, revenue: 420 },
  { month: 'Sep', sales: 85, clients: 40, revenue: 480 },
  { month: 'Oct', sales: 92, clients: 45, revenue: 520 },
  { month: 'Nov', sales: 88, clients: 42, revenue: 490 },
  { month: 'Dec', sales: 95, clients: 48, revenue: 550 },
]

const propertyTypes = [
  { name: 'Apartments', value: 45, color: '#c9a962' },
  { name: 'Villas', value: 25, color: '#a8a9ad' },
  { name: 'Penthouses', value: 15, color: '#737373' },
  { name: 'Commercial', value: 15, color: '#404040' },
]

const customerSatisfaction = [
  { category: 'Excellent', value: 65 },
  { category: 'Very Good', value: 25 },
  { category: 'Good', value: 8 },
  { category: 'Average', value: 2 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primary-900/95 backdrop-blur-xl border border-white/10 rounded-lg p-4 shadow-premium">
        <p className="text-white font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.name === 'revenue' ? 'M AED' : entry.name === 'clients' ? ' clients' : ' properties'}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function SalesChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'sales' | 'clients' | 'revenue'>('sales')

  const tabs = [
    { id: 'sales', label: 'Properties Sold', icon: Home },
    { id: 'clients', label: 'Happy Clients', icon: Users },
    { id: 'revenue', label: 'Revenue (M AED)', icon: DollarSign },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-premium" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent-gold text-sm font-medium tracking-widest uppercase mb-4 block"
          >
            Performance Metrics
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
          >
            Our Growth Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-400 text-lg"
          >
            Transparent metrics that showcase our commitment to excellence 
            and client satisfaction throughout 2025.
          </motion.p>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 bg-primary-900/30 border border-white/5 rounded-2xl p-6 lg:p-8"
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-accent-gold text-primary-950'
                      : 'bg-white/5 text-primary-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Chart */}
            <div className="h-[300px] lg:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c9a962" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#c9a962" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#737373" 
                    tick={{ fill: '#737373', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <YAxis 
                    stroke="#737373" 
                    tick={{ fill: '#737373', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey={activeTab}
                    stroke="#c9a962"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Growth Indicator */}
            <div className="mt-6 flex items-center gap-2 text-green-400">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">+47% growth</span>
              <span className="text-primary-500">compared to last year</span>
            </div>
          </motion.div>

          {/* Side Charts */}
          <div className="space-y-8">
            {/* Property Types Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-primary-900/30 border border-white/5 rounded-2xl p-6"
            >
              <h3 className="text-lg font-display font-semibold text-white mb-4">
                Properties by Type
              </h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={propertyTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {propertyTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {propertyTypes.map((type) => (
                  <div key={type.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: type.color }}
                    />
                    <span className="text-xs text-primary-400">{type.name} ({type.value}%)</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Customer Satisfaction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-primary-900/30 border border-white/5 rounded-2xl p-6"
            >
              <h3 className="text-lg font-display font-semibold text-white mb-4">
                Customer Satisfaction
              </h3>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={customerSatisfaction} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis 
                      type="category" 
                      dataKey="category" 
                      tick={{ fill: '#737373', fontSize: 11 }}
                      width={70}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      fill="#c9a962" 
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center">
                <span className="text-3xl font-display font-bold text-accent-gold">98%</span>
                <p className="text-primary-400 text-sm mt-1">Overall Satisfaction Rate</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Properties Listed', value: '2,500+', change: '+18%' },
            { label: 'Average Deal Time', value: '21 days', change: '-25%' },
            { label: 'Client Retention', value: '92%', change: '+8%' },
            { label: 'Avg. Property Value', value: '12M AED', change: '+15%' },
          ].map((metric, index) => (
            <div 
              key={metric.label}
              className="p-6 bg-primary-900/30 border border-white/5 rounded-xl text-center"
            >
              <p className="text-2xl lg:text-3xl font-display font-bold text-white">{metric.value}</p>
              <p className="text-primary-400 text-sm mt-1">{metric.label}</p>
              <span className={`text-xs font-medium ${
                metric.change.startsWith('+') ? 'text-green-400' : 'text-accent-gold'
              }`}>
                {metric.change} vs last year
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
