import { motion } from 'motion/react';
import { Building2, Truck, Leaf, Box } from 'lucide-react';
import { BusinessCard } from '../components/BusinessCard';

export function Businesses() {
  const businesses = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Construction',
      description: 'Specializing in civil & electrical work, camp construction, industrial buildings, and infrastructure development with focus on quality and safety.',
      path: '/businesses/construction',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Logistics & Fleet',
      description: 'Comprehensive fleet provider offering efficient trucks for transport and delivery solutions across India with reliable service.',
      path: '/businesses/logistics',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Animal Nutrition',
      description: 'Premium Rice DDGS and Maize DDGS products for livestock feed with balanced nutrition profiles and superior quality.',
      path: '/businesses/animal-nutrition',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: 'Allied Products',
      description: 'Pharmaceutical Grade Sugar and Ethyl Acetate for pharmaceutical and chemical industries across India and overseas.',
      path: '/businesses/allied-products',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our Business Verticals
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading firm specializing in construction, logistics, animal nutrition & allied products - serving clients across India and overseas
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {businesses.map((business, index) => (
              <BusinessCard key={index} {...business} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
