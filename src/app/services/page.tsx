import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { HiCheck, HiAcademicCap, HiLink, HiUserGroup, HiViewGrid, HiSearch } from 'react-icons/hi'

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1E648A] min-h-[220px] flex flex-col justify-center items-center py-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white">
              First Biotech Company offers comprehensive R&D support and forensic technical due diligence services, leveraging our state-of-the-art facilities and deep scientific expertise to accelerate innovation and ensure robust technical validation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Forensic Technical Due Diligence */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-gray-900">
                Forensic Technical Due Diligence
              </h2>
              <p className="text-lg text-gray-600">
                First Biotech Company provides specialized forensic technical analysis to support legal teams in patent infringement litigation. We meticulously examine scientific data, replicate experiments where necessary using our advanced laboratory capabilities, and analyze technical evidence against patent claims.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-gray-900">Key Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>Patent Claim Technical Construction Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>Experimental Data Verification & Replication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>Analysis of Allegedly Infringing Products/Processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>Prior Art Technical Assessment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 p-6 space-y-4">
                <h3 className="text-xl font-display font-semibold text-gray-900">Who We Help</h3>
                <ul className="space-y-3">
                  <li>Intellectual Property Law Firms</li>
                  <li>Corporate Legal Departments</li>
                  <li>Companies involved in Patent Litigation</li>
                  <li>Litigation Support Consultants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* R&D Support Services */}
        <section className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-gray-900">
                R&D Support Services
              </h2>
              <p className="text-lg text-gray-600">
                Accelerate your discovery and development pipeline with our comprehensive R&D support services. Whether you require proof-of-concept studies, complex biological assays, advanced formulation development, or specialized analytical services, our integrated platforms and expert team are equipped to advance your project efficiently.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-gray-900">Key Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>Bioactive Compound Analysis & Synthesis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>In Vitro Efficacy & Toxicity Testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>Formulation Development & Characterization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E648A] mr-2">•</span>
                    <span>Analytical Method Development & Validation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 p-6 space-y-4">
                <h3 className="text-xl font-display font-semibold text-gray-900">Who We Help</h3>
                <ul className="space-y-3">
                  <li>Start-ups & Early-Stage Companies</li>
                  <li>Academic Research Groups</li>
                  <li>Established Companies Outsourcing R&D</li>
                  <li>Investors seeking technical validation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contact us to discuss how our expertise can support your needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#1E648A] px-6 py-3 text-base font-medium text-white hover:bg-[#1a5573] transition-colors duration-200"
              >
                Request a Consultation
                <FiArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 