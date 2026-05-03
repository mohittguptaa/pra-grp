// App.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Truck, ShoppingBag, Leaf, Box, TrendingUp, Users, Award, Apple, Droplets, Hammer, Package, Factory, Ship } from 'lucide-react';
import { BusinessCard } from '../components/BusinessCard';
import { StatCard } from '../components/StatCard';
import Bgimg from '../assets/BgImage.jpeg';
import LogisticsBg from '../assets/logistics_services.webp';

// Import card background images
// Add your actual image paths here
import FarmFreshBg from '../assets/logistics.png';
// import LogisticsBg from '../assets/cards/logistics-bg.jpg';
import ConstructionBg from '../assets/construction_service.jpg';
import AlliedProductsBg from '../assets/AlliedProductsservecies.jpeg';
import AnimalNutritionBg from '../assets/AnimalNutritionBg.jpg';
import pnc from '../assets/pnc_infratech_ltd_logo.jpg';
import godrej from '../assets/godrej.png';
import lntecc from '../assets/lntcc_logo.png';
import nhai from '../assets/nhai.jpg';
import dhampur from '../assets/dhampur.png';

// Client logos data - Update this object to change client logos and names
// For real logos, replace the 'logo' URL with your actual image URLs
const clientsData = [
  {
    id: 1,
    name: 'Pnc Infrastructure Ltd',
    logo: pnc,
    alt: 'Pnc Infrastructure Ltd logo'
  },
  {
    id: 2,
    name: 'Godrej real estate group',
    logo: godrej,
    alt: 'Godrej real estate group logo'
  },
  {
    id: 3,
    name: 'L&T Construction',
    logo: lntecc,
    alt: 'L&T Construction logo'
  },
  {
    id: 4,
    name: 'NHAI',
    logo: nhai,
    alt: 'NHAI logo'
  },
  {
    id: 5,
    name: 'Dhampur Bio Organics Ltd',
    logo: dhampur,
    alt: 'Dhampur Bio Organics Ltd logo'
  }
];

// Array of images for the hero slideshow - Add or replace images here
// Each image will be displayed for 3 seconds with smooth crossfade
const HERO_SLIDESHOW_IMAGES = [
  Bgimg,           // Primary background image
  LogisticsBg,     // Logistics background
  ConstructionBg,  // Construction background
  AlliedProductsBg, // Allied products background
  AnimalNutritionBg // Animal nutrition background
];

// Hero slideshow background component with auto-cycling images
function HeroSlideshowBackground() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-cycle images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDESHOW_IMAGES.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Images container with crossfade effect */}
      <div className="absolute inset-0">
        {HERO_SLIDESHOW_IMAGES.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 5 : 0
            }}
          >
            <img
              src={image}
              alt={`Slideshow background ${index + 1}`}
              className="absolute  w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.7)' }}
            />
          </div>
        ))}
      </div>
      
      {/* Base dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-[#0f3460]/85 to-[#1a4d7a]/80 z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 z-20"></div>
    </div>
  );
}

export function Home() {
  // Feature items with background images
  const featuredBusinesses = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: 'PRA Farm Fresh',
      description: 'Premium quality consumer goods - fresh, natural, and healthy products straight from farm to your table.',
      path: '/businesses/farm-fresh',
      color: 'from-green-500 to-emerald-500',
      tag: 'New Launch',
      tagColor: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
      bgImage: Bgimg,
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Transport & Logistics',
      description: 'Pan-India fleet solutions with real-time tracking, dedicated Freight rates and time-bound delivery commitments.',
      path: '/businesses/logistics',
      color: 'from-blue-500 to-cyan-500',
      tag: '24/7 Service',
      tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
      bgImage: LogisticsBg,
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Construction',
      description: 'Civil & electrical works, industrial buildings, and infrastructure development with unmatched quality.',
      path: '/businesses/construction',
      color: 'from-orange-500 to-red-500',
      tag: 'Expert Team',
      tagColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
      bgImage: ConstructionBg,
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Allied Products',
      description: 'Pharmaceutical Grade Sugar, Ethyl Acetate & industrial solvents for diverse chemical needs.',
      path: '/businesses/allied-products',
      color: 'from-purple-500 to-pink-500',
      tag: 'ISO Certified',
      tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
      bgImage: AlliedProductsBg,
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Animal Nutrition',
      description: 'Nutrient-rich Rice DDGS and Maize DDGS for superior livestock health and productivity.',
      path: '/businesses/animal-nutrition',
      color: 'from-teal-500 to-emerald-500',
      tag: 'Premium Quality',
      tagColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
      bgImage: AnimalNutritionBg,
    },
  ];

  const stats = [
    { icon: <Building2 className="w-6 h-6" />, value: '5+', label: 'Business Verticals' },
    { icon: <Users className="w-6 h-6" />, value: '24/7', label: 'Support Available' },
    { icon: <Award className="w-6 h-6" />, value: '100%', label: 'Quality Assurance' },
    { icon: <TrendingUp className="w-6 h-6" />, value: 'National', label: 'Coverage' },
  ];

  return (
    <div>
      {/* Hero Section with Auto-changing Background Images */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <HeroSlideshowBackground />
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 mt-6">
              We Believe in
              <br />
              <span className="bg-gradient-to-r from-[#fb923c] to-[#f97316] bg-clip-text text-transparent">
                Performance
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Leading firm in construction, logistics, animal nutrition & allied products - enriching communities with sustainable infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/businesses"
                className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Businesses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
      </section>

      {/* What We Do Best Section - with background images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f97316]/10 to-[#fb923c]/10 text-[#f97316] font-semibold text-sm mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0A2540] to-[#3b82f6] dark:from-[#3b82f6] dark:to-[#fb923c] bg-clip-text text-transparent">
              What We Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse verticals delivering excellence across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBusinesses.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={business.path} className="group block h-full">
                  <div className="relative p-6 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={business.bgImage} 
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/1o to-black/30"></div>
                      {/* Gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    </div>

                    {/* Card content - all with z-index to appear above background */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Tag badge */}
                      {business.tag && (
                        <div className="absolute top-0 right-0 z-20">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${business.tagColor} backdrop-blur-sm`}>
                            {business.tag}
                          </span>
                        </div>
                      )}
                      
                      {/* Icon with gradient */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${business.color} flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                        {business.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#f97316] transition-colors text-white">
                        {business.title}
                      </h3>
                      
                      <p className="text-gray-200 mb-4 leading-relaxed flex-grow">
                        {business.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[#f97316] font-semibold group-hover:gap-3 transition-all mt-auto">
                        Explore {business.title.split(' ')[0]}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* View all CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/businesses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#f97316] text-[#f97316] font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 bg-white/10 backdrop-blur-sm"
            >
              View All Business Verticals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose PRA Group Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose PRA Group?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Health & Safety"
              description="Everyone goes home safely - our commitment to maintaining the highest safety standards in all operations."
              index={0}
            />
            <FeatureCard
              title="Sustainability"
              description="Environmental responsibility drives our approach to infrastructure and product development."
              index={1}
            />
            <FeatureCard
              title="Strong Leadership"
              description="Dedicated manpower with world-class infrastructure delivering excellence across all verticals."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Our Clients Section - Added with round logos and dynamic data */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f97316]/10 to-[#fb923c]/10 text-[#f97316] font-semibold text-sm mb-4">
              Trusted Partners
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0A2540] to-[#3b82f6] dark:from-[#3b82f6] dark:to-[#fb923c] bg-clip-text text-transparent">
              Our Valued Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proudly serving industry leaders across the nation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12">
            {clientsData.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-4">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="w-full h-full rounded-full object-cover bg-white dark:bg-gray-800"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f97316]/0 to-[#f97316]/0 group-hover:from-[#f97316]/10 group-hover:to-[#fb923c]/10 transition-all duration-300"></div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-center text-gray-800 dark:text-gray-200 group-hover:text-[#f97316] transition-colors">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#f97316] font-semibold hover:gap-3 transition-all"
            >
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how PRA Group can help your business grow
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Award className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}