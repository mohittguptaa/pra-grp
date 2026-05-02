import { motion } from 'motion/react';
import { Leaf, CheckCircle, ArrowRight, Award, BarChart, Wheat } from 'lucide-react';
import { Link } from 'react-router';

export function AnimalNutrition() {
  const products = [
    {
      name: 'Rice DDGS',
      fullName: 'Rice Distillers Dried Grains with Solubles',
      description: 'Co-product of rice-based ethanol production',
      features: [
        'Rich in protein content',
        'High fiber content for digestive health',
        'Essential nutrients for livestock',
        'Excellent palatability',
        'Suitable for cattle, poultry, and swine',
        'Sustainable feed alternative'
      ]
    },
    {
      name: 'Maize DDGS',
      fullName: 'Maize Distillers Dried Grains with Solubles',
      description: 'Co-product of maize-based ethanol production',
      features: [
        'Balanced amino acid profile',
        'High protein and energy content',
        'Rich in phosphorus and vitamins',
        'Optimal for dairy cattle',
        'Excellent for poultry feed',
        'Cost-effective protein source'
      ]
    }
  ];

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mb-6">
                <Leaf className="w-10 h-10" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Animal Nutrition</h1>
              <p className="text-xl text-teal-100 mb-8">
                Premium DDGS products from rice and maize for superior livestock nutrition and optimal animal performance
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-cyan-700/20 flex items-center justify-center">
                  <Leaf className="w-32 h-32 text-white/30" />
                </div>
              </div>
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
            <h2 className="text-4xl font-bold mb-6">Premium Feed Ingredients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our DDGS products are co-products of ethanol production, providing high-quality, sustainable protein and nutrient sources for animal feed
            </p>
          </motion.div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className="sticky top-24">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-800/30 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                      <Wheat className="w-32 h-32 text-teal-600" />
                    </div>
                  </div>
                </div>
                <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                  <div className="mb-4">
                    <span className="px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold">
                      Premium Quality
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{product.fullName}</p>
                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <h4 className="font-bold mb-4 text-lg">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
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
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our DDGS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Superior Quality</h3>
                <p className="text-muted-foreground">High-quality DDGS products meeting international standards for animal nutrition</p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainable Source</h3>
                <p className="text-muted-foreground">Eco-friendly feed ingredients derived from ethanol production process</p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Performance</h3>
                <p className="text-muted-foreground">Enhanced animal productivity and health with balanced nutrient profiles</p>
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
            <h2 className="text-4xl font-bold mb-6">Get Premium Feed Ingredients</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for bulk orders and customized feed solutions for your livestock
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
