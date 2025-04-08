"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`)
    setEmail("")
  }

  return (
    <section className="bg-primary text-white py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="mb-8 opacity-90">
            Subscribe to our newsletter to get the latest events delivered to your inbox
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded text-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white text-primary px-6 py-3 font-medium rounded hover:bg-background-light"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
