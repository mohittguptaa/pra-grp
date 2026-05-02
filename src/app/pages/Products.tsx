import { motion } from 'motion/react';
import { useState } from 'react';
import { Leaf, Box, Droplets, ShoppingBasket } from 'lucide-react';
import pasta from "../assets/Pasta-product.png"
import macroni from "../assets/Macroni-product.png"
import vermicili from "../assets/Vermicili-product.png"
import vermicili2 from "../assets/Vermicili2-product.png"
import riceddgs from "../assets/rice-ddgs-product.png"
import maizeddgs from "../assets/maize-ddgs-product.webp"
import pharmasugar from "../assets/pharma-grade-sugar-product.jpg"
import ethyl from "../assets/ethyl-product.png"

export function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: <ShoppingBasket className="w-5 h-5" /> },
    { id: 'farm_fresh', name: 'PRA Farm Fresh', icon: <Droplets className="w-5 h-5" /> },
    { id: 'nutrition', name: 'Animal Nutrition', icon: <Leaf className="w-5 h-5" /> },
    { id: 'allied', name: 'Allied Products', icon: <Box className="w-5 h-5" /> },
  ];

const products = [
    // 🔹 Farm Fresh
  {
    name: 'Farm Fresh Macaroni',
    category: 'farm_fresh',
    description: 'Premium quality macaroni made from carefully selected durum wheat for consistent texture and taste.',
    details: 'Ideal for a variety of recipes, offering excellent cooking performance and rich flavor.',
    imageUrl: macroni,
    imageAlt: 'Farm Fresh Macaroni pasta pack',
  },
  {
    name: 'Farm Fresh Pasta',
    category: 'farm_fresh',
    description: 'High-quality pasta crafted to deliver authentic taste and superior cooking consistency.',
    details: 'Maintains shape and texture, making it suitable for both traditional and modern dishes.',
    imageUrl: pasta,
    imageAlt: 'Farm Fresh Pasta pack',
  },
  {
    name: 'Farm Fresh Vermicelli (Classic)',
    category: 'farm_fresh',
    description: 'Fine-quality vermicelli designed for a wide range of traditional sweet and savory preparations.',
    details: 'Cooks evenly and offers a light, delicate texture ideal for everyday meals.',
    imageUrl: vermicili,
    imageAlt: 'Farm Fresh Vermicelli classic pack',
  },
  {
    name: 'Farm Fresh Vermicelli (Premium)',
    category: 'farm_fresh',
    description: 'Premium roasted vermicelli that enhances flavor while reducing preparation time.',
    details: 'Convenient to cook and perfect for quick, high-quality meals.',
    imageUrl: vermicili2,
    imageAlt: 'Farm Fresh Vermicelli premium pack',
  },
  // 🔹 Animal Nutrition
  {
    name: 'Rice DDGS',
    category: 'nutrition',
    description: 'A high-quality co-product derived from rice-based ethanol production, rich in protein, fiber, and essential nutrients.',
    details: 'Supports better digestibility, improves feed efficiency, and promotes healthy growth in livestock.',
    imageUrl: riceddgs,
    imageAlt: 'Rice DDGS animal feed product',
  },
  {
    name: 'Maize DDGS',
    category: 'nutrition',
    description: 'A nutrient-rich co-product from maize ethanol processing, widely used as a cost-effective feed alternative.',
    details: 'Provides a balanced source of protein, energy, and essential amino acids for livestock nutrition.',
    imageUrl: maizeddgs,
    imageAlt: 'Maize DDGS animal feed product',
  },

  // 🔹 Allied Products
  {
    name: 'Pharmaceutical Grade Sugar',
    category: 'allied',
    description: 'Ultra-refined, high-purity sugar designed for pharmaceutical and nutraceutical applications.',
    details: 'Available in multiple mesh sizes with hygienic, food-grade packaging suitable for industrial use.',
    imageUrl: pharmasugar,
    imageAlt: 'Pharmaceutical grade sugar product',
  },
  {
    name: 'Ethyl Acetate (C₄H₈O₂)',
    category: 'allied',
    description: 'A high-purity organic solvent commonly used in coatings, pharmaceuticals, and food processing.',
    details: 'Known for its fast evaporation, low toxicity, and excellent solvency characteristics.',
    imageUrl: ethyl,
    imageAlt: 'Ethyl Acetate chemical solvent',
  },


];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Premium animal nutrition, allied industrial solutions, and farm-fresh products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white shadow-lg scale-105'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-2xl transition-all duration-300">
                  {/* Product Image */}
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={product.imageUrl} 
                      alt={product.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-semibold">
                      {product.category === 'nutrition' && 'Animal Nutrition'}
                      {product.category === 'allied' && 'Allied Products'}
                      {product.category === 'farm_fresh' && 'PRA Farm Fresh'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-3">{product.description}</p>
                  <p className="text-sm text-muted-foreground italic">{product.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}