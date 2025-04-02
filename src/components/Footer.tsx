'use client'

import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">First Biotech Company</h3>
            <p className="text-gray-600 text-sm">
              Първа Биотех Ко ООД<br />
              UIC: 208104889<br />
              37A Fridtjof Nansen str.<br />
              1142 Sofia, Bulgaria
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#1E648A] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#1E648A] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#1E648A] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-gray-600 hover:text-[#1E648A] transition-colors duration-200">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#1E648A] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-[#1E648A] transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-[#1E648A] transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            © {currentYear} First Biotech Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 