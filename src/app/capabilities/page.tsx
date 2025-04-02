import { FiCheck } from 'react-icons/fi'
import CapabilityCard from '@/components/CapabilityCard'
import { HiCheck, HiAcademicCap, HiLink, HiUserGroup, HiViewGrid, HiSearch } from 'react-icons/hi'

const capabilities = [
  {
    title: 'Bioanalytical & Characterization',
    description: 'Advanced chromatography, mass spectrometry, and structural characterization capabilities for comprehensive analysis of biological samples and compounds.',
    keyFeatures: [
      'High-performance liquid chromatography (HPLC)',
      'Gas chromatography-mass spectrometry (GC-MS)',
      'Nuclear magnetic resonance (NMR) spectroscopy',
      'Fourier-transform infrared (FTIR) spectroscopy',
      'X-ray diffraction (XRD) analysis'
    ],
    equipment: [
      'GC-MS Systems',
      'LC-Triple Quadrupole MS Systems',
      'LC-DAD/MS Systems',
      'Flash Chromatography',
      'HPTLC Plate System'
    ]
  },
  {
    title: 'In Vitro Biological Evaluation',
    description: 'Comprehensive cell-based assays and molecular biology tools for evaluating biological activity and toxicity.',
    keyFeatures: [
      'Cell culture and viability assays',
      'Enzyme activity measurements',
      'Protein expression analysis',
      'Toxicity screening',
      'Drug response profiling'
    ],
    equipment: [
      'Cell Imaging Multi-Mode Reader (e.g., Cytation)',
      'Flow Cytometer',
      'qPCR Systems',
      'Biological Safety Cabinets (Class 2)',
      'Multi-gas Incubators (CO2/O2/N2)'
    ]
  },
  {
    title: 'Pharmaceutical Sciences & Formulation',
    description: 'State-of-the-art facilities for drug delivery system development and formulation optimization.',
    keyFeatures: [
      'Drug delivery system development',
      'Formulation optimization',
      'Stability testing',
      'Release profile analysis',
      'Particle size characterization'
    ],
    equipment: [
      'Single-Punch Tablet Press',
      'Dissolution Testing Systems',
      'Isothermal Titration Calorimeter (ITC)',
      'PAMPA System (Membrane Permeability)',
      'Fluid Bed Processor (Granulation/Coating)'
    ]
  },
  {
    title: 'Computational Science & Bioinformatics',
    description: 'High-performance computing and AI-driven analytics for data analysis and simulation.',
    keyFeatures: [
      'Molecular modeling and simulation',
      'High-throughput data analysis',
      'Machine learning applications',
      'Protein structure prediction',
      'Drug design optimization'
    ],
    equipment: [
      'High-Performance Computing Cluster (Multi-CPU)',
      'TB-Scale Storage Infrastructure',
      'High-End Visualization Workstations',
      'Molecular Dynamics Simulation Software (e.g., Gromacs)',
      'Quantum Chemistry Software (e.g., Quantum Espresso)'
    ]
  }
]

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#1E648A] min-h-[220px] flex flex-col justify-center items-center py-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl mb-4">
              Our Capabilities
            </h1>
            <p className="text-xl text-white">
              First Biotech Company offers a comprehensive suite of scientific capabilities, from advanced bioanalytical techniques to sophisticated computational analysis. Our state-of-the-art facilities and expert team enable us to deliver precise, reliable results across a wide spectrum of services.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="relative bg-gray-50 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {capabilities.map((capability) => (
              <CapabilityCard
                key={capability.title}
                title={capability.title}
                description={capability.description}
                keyFeatures={capability.keyFeatures}
                equipment={capability.equipment}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Technologies */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Specialized Technologies
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our facilities are equipped with state-of-the-art instrumentation and software platforms to support your research needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-display font-semibold text-gray-900">Data Visualization</h3>
              <p className="mt-2 text-gray-600">
                Advanced visualization tools for complex data analysis and presentation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-display font-semibold text-gray-900">Automated Systems</h3>
              <p className="mt-2 text-gray-600">
                High-throughput screening and analysis platforms for efficient research workflows.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-display font-semibold text-gray-900">Quality Control</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive quality control and validation systems for reliable results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 