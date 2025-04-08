"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    event: "",
    ticketType: "",
    quantity: 1,
    dietary: "none",
    dietaryOther: "",
    specialRequirements: "",
    newsletter: true,
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Registration submitted successfully!")
  }

  return (
    <>
      <Header />

      <section className="page-header">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Register for an Event</h1>
          <p className="text-xl opacity-90">Fill out the form below to register for your selected event</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-8">
                <form onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h2 className="text-2xl font-semibold mb-0">Personal Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>

                  <div className="form-header">
                    <h2 className="text-2xl font-semibold mb-0">Event Selection</h2>
                  </div>

                  <div className="form-group">
                    <label htmlFor="event">Select Event</label>
                    <select id="event" name="event" value={formData.event} onChange={handleChange} required>
                      <option value="">Choose an event</option>
                      <option value="tech-conference">Tech Conference 2023 (May 15)</option>
                      <option value="music-festival">Summer Music Festival (June 22)</option>
                      <option value="business-workshop">Entrepreneurship Workshop (July 10)</option>
                      <option value="food-festival">International Food Festival (July 18)</option>
                      <option value="art-exhibition">Modern Art Exhibition (August 5)</option>
                      <option value="marathon">City Marathon (August 20)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ticketType">Ticket Type</label>
                    <select
                      id="ticketType"
                      name="ticketType"
                      value={formData.ticketType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select ticket type</option>
                      <option value="standard">Standard ($299)</option>
                      <option value="vip">VIP ($499)</option>
                      <option value="group">Group - 5+ people ($249 each)</option>
                      <option value="student">Student ($149)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">Number of Tickets</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="10"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-header">
                    <h2 className="text-2xl font-semibold mb-0">Additional Information</h2>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dietary">Dietary Requirements</label>
                    <select id="dietary" name="dietary" value={formData.dietary} onChange={handleChange}>
                      <option value="none">None</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten-free</option>
                      <option value="other">Other (please specify)</option>
                    </select>
                  </div>

                  {formData.dietary === "other" && (
                    <div className="form-group">
                      <label htmlFor="dietaryOther">If other, please specify</label>
                      <input
                        type="text"
                        id="dietaryOther"
                        name="dietaryOther"
                        value={formData.dietaryOther}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="specialRequirements">Special Requirements or Accessibility Needs</label>
                    <textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      rows={3}
                      value={formData.specialRequirements}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="form-group flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <label htmlFor="newsletter" className="m-0">
                      Subscribe to our newsletter for future events
                    </label>
                  </div>

                  <div className="form-group flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      required
                      className="w-4 h-4"
                    />
                    <label htmlFor="terms" className="m-0">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div className="mt-8">
                    <button type="submit" className="btn-primary btn-block">
                      Complete Registration
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Registration Information</h3>
                <p className="mb-4">
                  Complete the form to secure your spot at the event. You'll receive a confirmation email with your
                  ticket details.
                </p>
                <h4 className="text-lg font-medium mb-2">What's Included</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Full access to the event</li>
                  <li>Event materials and resources</li>
                  <li>Refreshments and meals (as applicable)</li>
                  <li>Networking opportunities</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="mb-2">
                  If you have any questions about the registration process or the event, please contact us:
                </p>
                <p className="mb-1">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@eventflow.com" className="text-primary hover:underline">
                    support@eventflow.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Group Registrations</h3>
                <p className="mb-4">
                  For groups of 10 or more, please contact us directly for special rates and arrangements.
                </p>
                <a href="#" className="btn-outline btn-block">
                  Contact for Group Rates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
