import { motion } from 'motion/react';
import { Building2, CheckCircle, ArrowRight, Hammer, Zap, Trees, Wrench } from 'lucide-react';
import { Link } from 'react-router';
import construction from '../../assets/construction_service.jpg';

export function Construction() {
  const services = [
    { icon: <Building2 className="w-6 h-6" />, title: 'Camp Construction', desc: 'Complete camp infrastructure for industrial sites' },
    { icon: <Building2 className="w-6 h-6" />, title: 'Civil & Structural Work', desc: 'Industrial buildings and RCC structures' },
    { icon: <Trees className="w-6 h-6" />, title: 'Horticulture Work', desc: 'Landscaping and green space development' },
    { icon: <Zap className="w-6 h-6" />, title: 'Electrical Work', desc: 'Complete electrical installations and services' },
    { icon: <Wrench className="w-6 h-6" />, title: 'Bore Well Services', desc: 'Water supply and bore well solutions' },
    { icon: <Hammer className="w-6 h-6" />, title: 'Design Engineering', desc: 'Foundations and RCC structure design' },
    { icon: <Wrench className="w-6 h-6" />, title: 'Mechanical Services', desc: 'Pipeline and plant machinery erection' },
    { icon: <Building2 className="w-6 h-6" />, title: 'Industrial Buildings', desc: 'Complete industrial infrastructure solutions' },
  ];

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mb-6">
                <Building2 className="w-10 h-10" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Construction Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Specializing in civil & electrical work for industrial infrastructure with focus on quality, safety, and timely delivery
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              {/* <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-white/30" />
                </div>
              </div> */}
              <img src={construction} alt="Construction Service" className="rounded-2xl shadow-lg h-full w-full" />
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
              <h2 className="text-4xl font-bold mb-6">Building Future-Proof Infrastructure</h2>
              <p className="text-lg text-muted-foreground mb-6">
                PRA Group delivers comprehensive construction services for industrial and commercial projects across Uttarakhand and beyond. Our expertise spans from foundations to complete turnkey solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With continued rise in urbanization and growing demand for future-proof public infrastructure, our strategy enables us to enrich communities and maximize sustainable outcomes.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in performance - our dedicated manpower with world-class infrastructure ensures every project meets international quality standards while adhering to strict safety protocols.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Health & Safety First
                </h3>
                <p className="text-muted-foreground">Everyone goes home safely - our unwavering commitment to workplace safety and health standards.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Sustainability Focus
                </h3>
                <p className="text-muted-foreground">Environmental responsibility integrated into every aspect of our construction projects.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                  24/7 Support
                </h3>
                <p className="text-muted-foreground">Round-the-clock project support ensuring seamless execution and timely completion.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Our Construction Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-card border border-border hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your construction requirements and deliver excellence together
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
