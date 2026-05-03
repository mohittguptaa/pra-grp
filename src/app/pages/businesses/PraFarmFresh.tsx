import { motion } from 'motion/react';
import { 
  Sprout, CheckCircle, ArrowRight, Wheat, ChefHat, 
  CookingPot, UtensilsCrossed, Leaf, Sparkles, 
  Factory, Truck, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router';
import farmfresh from '../../assets/BgImage.jpeg';

export function FarmFresh() {
  const products = [
    { 
      icon: <CookingPot className="w-6 h-6" />, 
      title: 'Macaroni (Elbow)', 
      desc: 'Classic elbow macaroni made from 100% durum wheat. Perfect for salads, baked dishes, and creamy pasta recipes.',
      badge: 'Premium Quality',
      features: ['Non-GMO', 'Rich texture']
    },
    { 
      icon: <UtensilsCrossed className="w-6 h-6" />, 
      title: 'Pasta (Penne)', 
      desc: 'Authentic Italian-style penne pasta with ridges that hold sauces perfectly. Al dente every time.',
      badge: 'Italian Quality',
      features: ['Smooth finish', 'Quick cooking']
    },
    { 
      icon: <Wheat className="w-6 h-6" />, 
      title: 'Classic Vermicelli', 
      desc: 'Traditional fine roasted vermicelli. Ideal for sweet kheer, savory upma, and fusion dishes.',
      badge: 'Farm Fresh',
      features: ['Roasted', 'Versatile use']
    },
    { 
      icon: <Leaf className="w-6 h-6" />, 
      title: 'Whole Wheat Vermicelli', 
      desc: 'High-fiber, nutrient-rich vermicelli made from whole wheat flour. Same great taste, healthier choice.',
      badge: 'High Fiber',
      features: ['Digestive health', 'No maida']
    },
  ];

  const qualityHighlights = [
    { icon: <Sprout className="w-6 h-6" />, title: 'Farm Fresh Ingredients', desc: 'Sourced from local farms, ensuring purity and natural taste in every batch.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Italian Quality Standards', desc: 'Traditional recipes and modern hygiene meet authentic Italian pasta-making techniques.' },
    { icon: <Factory className="w-6 h-6" />, title: 'Hygienic Processing', desc: 'State-of-the-art facility with strict quality checks from grain to packaging.' },
  ];

  return (
    <div>
      {/* Hero Section - Fresh Farm Theme */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mb-6">
                <Sprout className="w-10 h-10" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">PRA Fresh Farm</h1>
              <p className="text-xl text-green-100 mb-4">
                Premium Macaroni, Pasta & Artisanal Vermicelli
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">🌾 100% Durum Wheat</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">🇮🇹 Italian Quality</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">✨ Farm Fresh Promise</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              {/* <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-700/20 flex items-center justify-center gap-4 flex-wrap p-6">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm text-center">
                    <CookingPot className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Macaroni</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm text-center">
                    <UtensilsCrossed className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Pasta</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm text-center">
                    <Wheat className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Vermicelli</p>
                  </div>
                </div>
              </div> */}
              <img src={farmfresh} alt="PRA Farm Fresh" className="rounded-2xl shadow-lg h-full w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Bringing Farm Fresh Goodness to Your Table</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At PRA Fresh Farm, we combine traditional pasta-making artistry with modern hygiene standards. Our products are crafted from premium durum wheat, sourced directly from trusted local farms.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From our classic elbow macaroni to nutrient-rich whole wheat vermicelli, every bite delivers authentic Italian taste with the goodness of farm-fresh ingredients. No preservatives, no artificial colors — just pure pasta perfection.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a home cook, a chef, or a food business, our range offers consistent quality, perfect texture, and versatile options for countless delicious creations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {qualityHighlights.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Our Premium Product Range</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Crafted with passion and the finest ingredients — each product delivers authentic taste, perfect texture, and farm-fresh quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-card border border-border hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{product.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{product.desc}</p>
                  <div className="flex gap-2 mt-2">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section: Italian Quality & Farm Fresh Promise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-xl mb-2">Premium Quality</h4>
              <p className="text-muted-foreground">Selected durum wheat, advanced milling, and strict quality checks for superior texture and taste.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-xl mb-2">Farm to Factory Freshness</h4>
              <p className="text-muted-foreground">Direct sourcing from farms ensures minimal handling and maximum freshness in every pack.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-xl mb-2">Chef-Approved Recipes</h4>
              <p className="text-muted-foreground">Developed with culinary experts to deliver authentic Italian taste that home cooks love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Taste the Freshness?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Bring home the authentic taste of PRA Fresh Farm. Available for retail, bulk, and private label orders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Full Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}