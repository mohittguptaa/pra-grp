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
import amazonlogo from "../assets/amazon-icon-logo-svgrepo-com.svg"
// 🛒 Amazon icon (simple‑icons style)
const AmazonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm6.725 15.451c-.528 1.769-1.785 3.243-3.565 4.152-2.387 1.219-5.187 1.454-7.808.687-1.916-.56-3.69-1.663-4.917-3.081-.25-.29-.016-.72.348-.6 1.76.563 3.627.805 5.553.606 1.908-.197 3.849-.802 5.543-1.774.845-.486 1.657-1.073 2.329-1.748.27-.27.694-.134.517.258zM14.56 12.425c.89-.077 1.78-.04 2.62.194 1.51.418 2.692 1.507 1.99 2.831-.76 1.43-2.687 2.266-4.503 2.266-1.918 0-3.437-.903-3.437-2.266 0-1.528 1.957-2.688 3.33-3.025zm-.044 1.768c-.753.162-2.053.64-2.053 1.257 0 .784 1.268 1.265 2.53 1.265 1.153 0 1.999-.398 1.999-.905 0-.93-1.571-1.448-2.476-1.617zM10.5 10.72h.79c.152 0 .283.131.283.283v.68h.722c.154 0 .28.128.28.28 0 .154-.126.28-.28.28h-.722v.478c0 .42.313.738.724.738.413 0 .725-.317.725-.738v-.478h.797c.153 0 .28-.126.28-.28 0-.152-.127-.28-.28-.28h-.797v-.68c0-.152-.128-.283-.28-.283h-.79c-.153 0-.28.131-.28.283v.68h-.722c-.153 0-.28.128-.28.28 0 .154.127.28.28.28h.722v-.68c0-.152.127-.283.28-.283z" />
  </svg>
);

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
      name: 'PRA Farm Fresh Macaroni',
      category: 'farm_fresh',
      description: 'Premium quality macaroni made from carefully selected durum wheat for consistent texture and taste.',
      details: 'Ideal for a variety of recipes, offering excellent cooking performance and rich flavor.',
      imageUrl: macroni,
      imageAlt: 'PRA Farm Fresh Macaroni pack',
      amazonLink: 'https://amzn.in/d/02LnXTCN'    
    },
    {
      name: 'PRA Farm Fresh penne Pasta',
      category: 'farm_fresh',
      description: 'High-quality pasta crafted to deliver authentic taste and superior cooking consistency.',
      details: 'Maintains shape and texture, making it suitable for both traditional and modern dishes.',
      imageUrl: pasta,
      imageAlt: 'PRA Farm Fresh penne Pasta pack',
      amazonLink: 'https://amzn.in/d/0dCAl5u9'     
    },
    {
      name: 'PRA Farm Fresh Vermicelli (Classic)',
      category: 'farm_fresh',
      description: 'Fine-quality vermicelli designed for a wide range of traditional sweet and savory preparations.',
      details: 'Cooks evenly and offers a light, delicate texture ideal for everyday meals.',
      imageUrl: vermicili,
      imageAlt: 'PRA Farm Fresh Vermicelli classic pack',
      // no Amazon link – icon will not appear
    },
    {
      name: 'PRA Farm Fresh Vermicelli (Premium)',
      category: 'farm_fresh',
      description: 'Premium roasted vermicelli that enhances flavor while reducing preparation time.',
      details: 'Convenient to cook and perfect for quick, high-quality meals.',
      imageUrl: vermicili2,
      imageAlt: 'PRA Farm Fresh Vermicelli premium pack',
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
                <div className="h-full p-8 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-2xl transition-all duration-300 flex flex-col">
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
                  <p className="text-sm text-muted-foreground italic mb-4">{product.details}</p>

                  {/* Amazon link button – only if amazonLink exists */}
                  {product.amazonLink && (
                    <a
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e68a00] text-white font-semibold hover:bg-[#ff9900] transition-colors self-start"
                    >
                      {/* <AmazonIcon /> */}
                      {/* <FontAwesomeIcon icon={faAmazon} /> */}
                      <img src={amazonlogo} alt="Amazon" className="w-5 h-5" />
                      Buy on Amazon
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}