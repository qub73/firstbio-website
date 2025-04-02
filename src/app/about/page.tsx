import { HiCheck, HiAcademicCap, HiLink, HiUserGroup, HiViewGrid, HiSearch } from 'react-icons/hi'

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1E648A] min-h-[220px] flex flex-col justify-center items-center py-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl mb-4">
              About First Biotech Company
            </h1>
            <p className="text-xl text-white">
              Launched 2024 by leading Bulgarian scientists, First Biotech is a bridge for advanced R&D. We leverage expertise and access to state-of-the-art resources available in the region. Our commitment includes rigorous validation and forensic support for the complex research problems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Approach Section */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Our Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <HiAcademicCap className="w-6 h-6 text-[#483D8B]" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                Unyielding Rigor
              </h3>
              <p className="text-gray-600">
                We apply meticulous scientific methods and stringent quality controls, ensuring the reliability and defensibility required for both groundbreaking R&D and critical forensic analysis.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <HiLink className="w-6 h-6 text-[#483D8B]" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                Bridging Innovation & Technology
              </h3>
              <p className="text-gray-600">
                We actively connect emerging scientific insights with state-of-the-art technology platforms, providing our clients access to advanced capabilities and driving forward-thinking solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <HiUserGroup className="w-6 h-6 text-[#483D8B]" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                Collaborative Partnership
              </h3>
              <p className="text-gray-600">
                We work closely with our clients as a dedicated partner, tailoring our approach to meet specific objectives and deliver clear, actionable results, whether advancing a research program or informing a critical decision.
              </p>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Our Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <HiViewGrid className="w-6 h-6 text-[#483D8B]" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                Integrated R&D Capabilities
              </h3>
              <p className="text-gray-600">
                Our expertise spans the research and development continuum, from molecule discovery and <em>in vitro</em> studies to advanced formulation, leveraging diverse capabilities in bioanalysis, computational science, and prototyping.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <HiSearch className="w-6 h-6 text-[#483D8B]" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                Deep Analytical & Forensic Insight
              </h3>
              <p className="text-gray-600">
                We possess specialized expertise in complex technical analysis, data validation, and experimental verification, providing the crucial scientific insights needed for robust R&D validation and forensic patent assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Our Foundation Section */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600">
              Built by scientists and backed by strategic investment from <a href="https://serdicacapital.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#483D8B] hover:text-[#4a0e90] transition-colors duration-200">Serdica Capital</a>, First Biotech operates at the nexus of scientific discovery and practical application, grounded in integrity and a commitment to excellence.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 