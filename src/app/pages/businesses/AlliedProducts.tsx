import { motion } from 'motion/react';
import { Box, CheckCircle, ArrowRight, Beaker, Pill, Package, Globe } from 'lucide-react';
import { Link } from 'react-router';
import AlliedProductsservecies from '../../assets/AlliedProductsservecies.jpeg';

export function AlliedProducts() {
  const products = [
    {
      name: 'Pharmaceutical Grade Sugar',
      icon: <Pill className="w-8 h-8" />,
      description: 'Premium quality sugar for pharmaceutical and nutraceutical industries',
      features: [
        'Supplied to leading drug manufacturers',
        'Available across India and overseas markets',
        'Multiple mesh sizes: 20, 30, 40 Mesh',
        '50 kg HDPE bags with food-grade poly liner',
        'Customizable as per customer requirements',
        'Meets international pharmaceutical standards'
      ],
      applications: [
        'Pharmaceutical manufacturing',
        'Nutraceutical production',
        'Medical tablet coating',
        'Drug formulations'
      ]
    },
    {
      name: 'Ethyl Acetate',
      icon: <Beaker className="w-8 h-8" />,
      chemical: 'C₄H₈O₂',
      description: 'High-purity ethyl acetate for industrial and pharmaceutical applications',
      features: [
        'Supplied to leading consumers nationally',
        'International export capabilities',
        'High purity industrial grade',
        'Consistent quality assurance',
        'Reliable supply chain',
        'Competitive pricing'
      ],
      applications: [
        'Glue and adhesive manufacturing',
        'Nail polish remover production',
        'Tea and coffee decaffeination',
        'Pharmaceutical extraction',
        'Industrial solvent applications',
        'Chemical manufacturing'
      ]
    }
  ];

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mb-6">
                <Box className="w-10 h-10" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Allied Products</h1>
              <p className="text-xl text-purple-100 mb-8">
                Premium pharmaceutical and chemical products for industries across India and international markets
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              {/* <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-700/20 flex items-center justify-center">
                  <Box className="w-32 h-32 text-white/30" />
                </div>
              </div> */}
              <img src={AlliedProductsservecies} alt="Allied Products" className="rounded-2xl " />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Premium Quality Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supplying pharmaceutical-grade materials and industrial chemicals to leading manufacturers across India and overseas
            </p>
          </motion.div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl bg-white dark:bg-card border border-border overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 text-white">
                      {product.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                    {product.chemical && (
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-mono mb-4">{product.chemical}</p>
                    )}
                    <p className="text-muted-foreground mb-8">{product.description}</p>

                    <h4 className="font-bold mb-4 text-lg">Product Features:</h4>
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                    <h4 className="font-bold mb-6 text-lg flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      Applications:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {product.applications.map((app, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/60 dark:bg-card/60 backdrop-blur-sm border border-purple-200 dark:border-purple-800">
                          <span className="text-sm font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <Pill className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pharmaceutical Grade</h3>
                <p className="text-muted-foreground">Products meeting stringent pharmaceutical industry standards</p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                <p className="text-muted-foreground">Serving customers across India and international markets</p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground">Flexible packaging and customization as per requirements</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for bulk orders and custom requirements for pharmaceutical and chemical products
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
