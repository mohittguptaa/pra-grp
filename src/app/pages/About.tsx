import { motion } from 'motion/react';
import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';

export function About() {
  const timeline = [
    { year: 'Founded', event: ' Diwakar Singh', description: 'Started operations in Amroha, Uttrapradesh , then further extented in Kashipur, Uttrajkhand' },
    { year: 'Growth', event: 'Construction Services', description: 'Expanded to civil & electrical work for industrial projects' },
    { year: 'Expansion', event: 'Logistics Operations', description: 'Launched fleet provider services across India' },
    { year: 'Diversification', event: 'Animal Nutrition', description: 'Introduced DDGS products for livestock feed' },
    { year: 'Innovation', event: 'Allied Products', description: 'Added pharmaceutical-grade products to portfolio' },
    { year: 'Present', event: 'Multi-Industry Leader', description: 'Serving clients across India and overseas markets' },
  ];

  const values = [
    { icon: <Award className="w-8 h-8" />, title: 'Health & Safety', description: 'Everyone goes home safely - our top priority in all operations' },
    { icon: <Users className="w-8 h-8" />, title: 'Strong Leadership', description: 'Dedicated manpower with world-class infrastructure' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Sustainability', description: 'Environmental responsibility and public policy engagement' },
    { icon: <Heart className="w-8 h-8" />, title: 'Financial Stability', description: 'Quality, collaboration, and 24/7 support for our clients' },
  ];

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">About PRA Group</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We Believe in Performance - Leading multi-industry firm from Kashipur, Uttarakhand
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                PRA Group, based in Kashipur, Uttarakhand, is a leading multi-industry firm specializing in Civil & Electrical work, transport services, and supplier of animal feed and allied products across India and overseas markets.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in performance - our philosophy centers on the understanding that manpower is our greatest asset. With world-class infrastructure and dedicated professionals, we deliver excellence across all our business verticals.
              </p>
              <p className="text-lg text-muted-foreground">
                With the continued rise in urbanization and growing demand for future-proof public infrastructure, our strategy enables us to enrich communities and maximize sustainable outcomes across construction, logistics, animal nutrition, and allied product sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <Target className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-blue-100">
                  To enrich communities through future-proof infrastructure, quality products, and sustainable solutions across all our business verticals
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <Eye className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-orange-100">
                  To maximize sustainable outcomes and build trust through performance, innovation, and unwavering commitment to quality
                </p>
              </div>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">25 years of growth and excellence</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0A2540] to-[#f97316] hidden lg:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-white dark:bg-card border border-border">
                    <div className="text-3xl font-bold text-[#f97316] mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#f97316] border-4 border-white dark:border-card shadow-lg"></div>
                </div>
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
