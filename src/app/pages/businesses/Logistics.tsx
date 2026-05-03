import { motion } from 'motion/react';
import { Truck, CheckCircle, ArrowRight, MapPin, Clock, Shield, Navigation } from 'lucide-react';
import { Link } from 'react-router';
import logistics from '../../assets/logistics_services.webp';

export function Logistics() {
  const features = [
    { icon: <Truck className="w-6 h-6" />, title: 'Modern Fleet', desc: 'Well-maintained trucks for all transport needs' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Pan-India Coverage', desc: 'Nationwide delivery and transportation network' },
    { icon: <Clock className="w-6 h-6" />, title: 'Timely Delivery', desc: 'On-time delivery guaranteed with route optimization' },
    { icon: <Shield className="w-6 h-6" />, title: 'Safe Transport', desc: 'Secure handling and transportation protocols' },
    { icon: <Navigation className="w-6 h-6" />, title: 'Route Planning', desc: 'Efficient logistics planning and execution' },
    { icon: <Truck className="w-6 h-6" />, title: 'Flexible Solutions', desc: 'Customized fleet services for diverse requirements' },
  ];

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mb-6">
                <Truck className="w-10 h-10" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Logistics & Fleet Provider</h1>
              <p className="text-xl text-green-100 mb-8">
                Comprehensive fleet provider offering efficient trucks for transport and delivery solutions across India
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              {/* <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-700/20 flex items-center justify-center">
                  <Truck className="w-32 h-32 text-white/30" />
                </div>
              </div> */}
              <img src={logistics} alt="Logistics Service" className="rounded-2xl shadow-lg h-full w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Reliable Transport Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                PRA Group's logistics division operates as a comprehensive fleet provider, offering efficient truck services for diverse transportation needs across India. Our modern fleet ensures your goods reach their destination safely and on time.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With a strong focus on performance and reliability, we provide customized transport solutions for industries ranging from construction materials to agricultural products. Our experienced drivers and well-maintained vehicles guarantee smooth operations.
              </p>
              <p className="text-lg text-muted-foreground">
                Operating from our base in Kashipur, Uttarakhand, we serve clients across northern India and beyond, maintaining the highest standards of service delivery and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Truck className="w-6 h-6 text-green-600" />
                  Diverse Fleet Options
                </h3>
                <p className="text-muted-foreground">Wide range of trucks to suit various cargo types and volume requirements.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  24/7 Availability
                </h3>
                <p className="text-muted-foreground">Round-the-clock fleet services ensuring continuous support for your business operations.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-600" />
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground">Regular vehicle maintenance and safety checks ensuring reliable service delivery.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Our Fleet Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-card border border-border hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Optimize Your Logistics</h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Partner with us for reliable fleet services tailored to your transportation needs
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact: ho.praservices@gmail.com | +91-90128 75675
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
