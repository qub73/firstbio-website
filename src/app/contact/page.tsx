'use client'

import { useState } from 'react'
import { HiLocationMarker, HiPhone, HiMail, HiGlobeAlt } from 'react-icons/hi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1E648A] min-h-[220px] flex flex-col justify-center items-center py-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white">
              Get in touch with our team to learn more about our services and how we can help advance your research.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E648A] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E648A] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E648A] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E648A] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E648A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1a5578] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <HiLocationMarker className="w-6 h-6 text-[#1E648A] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      37A Fridtjof Nansen str.,<br />
                      1142 Sofia, Bulgaria
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HiMail className="w-6 h-6 text-[#1E648A] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a
                      href="mailto:info@firstbiotech.com"
                      className="text-[#1E648A] hover:text-[#1a5578] transition-colors duration-200"
                    >
                      info@firstbiotech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HiPhone className="w-6 h-6 text-[#1E648A] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      US/EU: +1-XXX-XXX-XXXX / +44-XX-XXXX-XXXX<br />
                      BG: +359-XXX-XXX-XXX
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HiGlobeAlt className="w-6 h-6 text-[#1E648A] mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Website</h3>
                    <a
                      href="https://firstbiotech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E648A] hover:text-[#1a5578] transition-colors duration-200"
                    >
                      www.firstbiotech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.865979475636!2d23.3213!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sFridtjof%20Nansen%20St%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1709654321!5m2!1sen!2sbg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 