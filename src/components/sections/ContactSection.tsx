"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, User } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    // Here you would integrate with an API or email service
  }

  return (
    <section className="relative py-20 bg-primary-950" id="contact">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center"
        >
          Contact Us
        </motion.h2>
        <div className="bg-primary-900/80 rounded-2xl shadow-lg p-8 border border-primary-800">
          {submitted ? (
            <div className="text-center text-gold-400 text-lg font-semibold py-12">
              Thank you for reaching out!<br />We will get back to you soon.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-primary-300 font-medium flex items-center gap-2">
                  <User className="w-4 h-4" /> Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg bg-primary-950 text-white border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-primary-300 font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg bg-primary-950 text-white border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-primary-300 font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-lg bg-primary-950 text-white border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gold-500 text-primary-950 font-bold hover:bg-gold-400 transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
