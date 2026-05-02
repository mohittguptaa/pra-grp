import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Building2,
  Truck,
  CheckCircle,
  Calendar,
  Route,
  HardHat
} from 'lucide-react';

import truck from "../assets/trucks.png"
import civilproject from "../assets/civil-project.png"
import Horticulture from "../assets/Horticulture.png"
import electrical from "../assets/electrical-work.png"
import design_project from "../assets/design-engineeringrk.png"
import design from "../assets/design-engineering.png"
import Mechanical from "../assets/Mechanical-pipline.png"


export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const services = [
    {
      title: 'Logistics & Transportation',
      category: 'Logistics',
      description:
        'Reliable logistics services ensuring safe, timely, and cost-effective transportation across India.',
      imageUrl: truck ,
      year: 'Ongoing',
      location: 'Pan India',
      features: [
        'Strong fleet network',
        'On-time delivery commitment',
        'Experienced logistics team',
        'Safe and secure handling',
        'Cost-effective solutions',
        'Pan-India operations',
      ],
      fleet: {
        heading: 'Our Fleet & Infrastructure',
        content:
          'We operate a diverse fleet to handle everything from small consignments to bulk transportation.',
        points: [
          'Trucks (light, medium, heavy)',
          'GPS-enabled vehicles',
          'Experienced drivers',
          'Nationwide coverage',
        ],
      },
    },
    {
      title: 'Civil & Structural Work for Industrial Buildings',
      category: 'Construction',
      description:
        'We handle complete civil and structural development for industrial projects, ensuring strong foundations and long-term durability.',
      imageUrl: civilproject,
      year: 'Since 2008',
      location: 'Pan India',
    },
    {
      title: 'Horticulture Work',
      category: 'Construction',
      description:
        'We create sustainable and visually appealing green environments for industrial and commercial spaces.',
      imageUrl:Horticulture,
      year: 'Ongoing',
      location: 'Multiple Locations',
    },
    {
      title: 'Electrical & Borewell Services',
      category: 'Construction',
      description:
        'Reliable electrical installations and borewell solutions ensuring uninterrupted power and water supply.',
      imageUrl: electrical,
      year: 'Ongoing',
      location: 'Pan India',
    },
    {
      title: 'Painting Work',
      category: 'Construction',
      description:
        'Durable and high-quality painting services that maintain a clean and professional finish.',
      imageUrl:
        'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
      year: 'Ongoing',
      location: 'Pan India',
    },
    {
      title: 'Design Engineering (Foundations & RCC)',
      category: 'Construction',
      description:
        'Detailed design engineering ensuring structural safety and efficiency in RCC and foundation projects.',
      imageUrl: design,
      year: 'Since 2008',
      location: 'Nationwide',
    },
    {
      title: 'Mechanical (Pipeline & Plant Machinery Erection)',
      category: 'Construction',
      description:
        'Precision-driven pipeline installation and plant machinery erection with strong safety standards.',
      imageUrl:Mechanical,
      year: 'Since 2008',
      location: 'Pan India',
    },
  ];

  const filteredServices =
    activeFilter === 'All'
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 text-center bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] text-white">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Delivering reliable construction and logistics solutions with a focus on quality and efficiency.
        </p>
      </section>

      {/* Filters */}
      <div className="flex justify-center gap-3 my-10">
        {['All', 'Logistics', 'Construction'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === filter
                ? 'bg-[#0A2540] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group rounded-2xl border overflow-hidden bg-white hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                  {service.category}
                </span>

                <h3 className="text-xl font-bold mt-3 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>

                {/* Logistics Features */}
                {service.features && (
                  <ul className="text-sm space-y-1 mb-3">
                    {service.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))}
                  </ul>
                )}

                {/* Fleet */}
                {service.fleet && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">
                      {service.fleet.heading}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">
                      {service.fleet.content}
                    </p>
                    <ul className="text-xs">
                      {service.fleet.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer */}
                <div className="flex justify-between text-xs mt-4 text-gray-500">
                  <span>{service.year}</span>
                  <span>{service.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}