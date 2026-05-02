import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', business: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We'd love to hear from you. Let's discuss how we can help your business grow
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Registered Office</h3>
                    <p className="text-muted-foreground">
                      Bank Colony, Kashipur-244713<br />
                      Udham Singh Nagar<br />
                      Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Corporate Office</h3>
                    <p className="text-muted-foreground">
                      A 13, Silver Estate<br />
                      Kundeswari Road, Kuan Khera<br />
                      Kashipur-244713, Uttarakhand
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#3b82f6] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      +91-9004138197<br />
                      +91-9027757949<br />
                      +91-90128 75675<br />
                      +91-89585 69554
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Addresses</h3>
                    <p className="text-muted-foreground">
                      praenterprise2023@gmail.com<br />
                      Prainfrastructure@gmail.com<br />
                      Pratransportup@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] text-white">
                <h3 className="font-bold mb-2">24/7 Support Available</h3>
                <p className="text-blue-100">
                  We provide round-the-clock support for all our business verticals. Contact us anytime for construction, logistics, animal nutrition, or allied products inquiries.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border shadow-xl">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-all"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label htmlFor="business" className="block mb-2">
                        Business Vertical
                      </label>
                      <select
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-all"
                      >
                        <option value="">Select a vertical</option>
                        <option value="construction">Construction</option>
                        <option value="logistics">Logistics & Fleet</option>
                        <option value="animal-nutrition">Animal Nutrition</option>
                        <option value="allied-products">Allied Products</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#f97316] transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-96 bg-white dark:bg-card border border-border">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#0A2540] dark:text-[#3b82f6] mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">Our Location</p>
                <p className="text-muted-foreground">
                  Kashipur, Udham Singh Nagar<br />
                  Uttarakhand, India - 244713
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
