'use client'

import React from "react"

import { useState } from 'react'
import { Button } from './ui/button'
import { Check } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const { submitContactAction } = await import('@/app/admin/lead-actions')

    try {
      const result = await submitContactAction(formData)
      if (result.success) {
        setSubmitted(true)
        setIsLoading(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-96 bg-green-50 border-2 border-green-200 rounded-xl p-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Check className="w-16 h-16 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-green-700">
            Thank you for reaching out. We'll get back to you soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
          />
        </div>
      </div>

      {/* Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Subject *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
        >
          <option value="">Select a subject</option>
          <option value="consultation">Consultation</option>
          <option value="support">Support</option>
          <option value="partnership">Partnership</option>
          <option value="career">Career Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project or inquiry..."
          rows={6}
          className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We'll respond to your inquiry within 24 business hours.
      </p>
    </form>
  )
}
