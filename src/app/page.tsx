import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { HiBeaker } from 'react-icons/hi'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiScale } from 'react-icons/hi2'

const capabilities = [
  {
    title: 'Advanced Bioanalytical Chemistry',
    description: 'State-of-the-art analytical platforms for comprehensive molecular characterization.',
    icon: FiCheck,
  },
  {
    title: 'In Vitro & Molecular Biology',
    description: 'Cutting-edge biological assays and molecular analysis techniques.',
    icon: FiCheck,
  },
  {
    title: 'Computational Analysis',
    description: 'Advanced modeling and data analysis for complex biological systems.',
    icon: FiCheck,
  },
  {
    title: 'Materials Characterization',
    description: 'Comprehensive analysis of materials and device properties.',
    icon: FiCheck,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1920&auto=format&fit=crop"
            alt="Laboratory background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/80"></div>
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl">
              Advancing Scientific Innovation Through Technical Excellence
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Specialized in forensic technical due diligence and R&D services, delivering comprehensive scientific solutions for law firms and biotech companies.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                Our Services
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Scientific Solutions */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Integrated Scientific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your biotech and pharmaceutical needs, from research to commercialization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integrated R&D Card */}
            <div className="group relative h-[300px] overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/9cd00e7e-5f98-4fa6-b5ca-229faab3333b.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <HiBeaker className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                  Integrated R&D
                </h3>
                <p className="mt-4 max-h-0 overflow-hidden text-base text-white opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-[200px] group-hover:opacity-100">
                  Comprehensive research and development services from discovery to commercialization
                </p>
              </div>
            </div>

            {/* Forensic Due Diligence Card */}
            <div className="group relative h-[300px] overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/d248f883-b981-4fab-b74f-ec0e966a0f7e.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <HiMagnifyingGlass className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                  Forensic Due Diligence
                </h3>
                <p className="mt-4 max-h-0 overflow-hidden text-base text-white opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-[200px] group-hover:opacity-100">
                  Thorough investigation and analysis of intellectual property and technology assets
                </p>
              </div>
            </div>

            {/* Patent Support Card */}
            <div className="group relative h-[300px] overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/69f6f098-f436-4c85-b824-04c9186f747c.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <HiScale className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                  Patent Support
                </h3>
                <p className="mt-4 max-h-0 overflow-hidden text-base text-white opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-[200px] group-hover:opacity-100">
                  Expert assistance with patent strategy, filing, and portfolio management
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
            >
              Get Started
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Highlights */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl">
              Leveraging Cutting-Edge Platforms
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div key={capability.title} className="relative rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:border-primary-200 hover:shadow-md hover:scale-[1.02]">
                <div className="absolute top-6 left-6">
                  <capability.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-display font-semibold text-gray-900">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-base font-medium text-white hover:bg-primary-700"
            >
              Discover Our Full Capabilities
              <FiArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 