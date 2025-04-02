'use client'

import { FiCheck } from 'react-icons/fi'

interface CapabilityCardProps {
  title: string
  description: string
  keyFeatures: string[]
  equipment: string[]
}

export default function CapabilityCard({ title, description, keyFeatures, equipment }: CapabilityCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      {/* Initial Content */}
      <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="space-y-2">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start">
              <FiCheck className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span className="ml-2 text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Content */}
      <div className="absolute inset-0 p-6 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
        <h4 className="text-xl font-display font-semibold text-gray-900 mb-4">
          Key Equipment
        </h4>
        <ul className="space-y-3">
          {equipment.map((item, index) => (
            <li key={index} className="flex items-start">
              <FiCheck className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span className="ml-2 text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 