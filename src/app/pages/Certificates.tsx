import { motion } from 'motion/react';
import { Award, CheckCircle, Shield, FileCheck, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import udyog from "../assets/UdyamCert.png"
import fassai from "../assets/FSSAI-LICENSE.png"
import cert3 from "../assets/Cert3.png"
import cert4 from "../assets/Cert4.png"
import cert5 from "../assets/Cert5.png"

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  // Sample certificate images – replace with your actual images
  const certificateImages = [
    {
      id: 1,
      thumbnail: udyog,
      full: udyog,
      title: "Udoyg Trading"
    },
    {
      id: 2,
      thumbnail: fassai,
      full: fassai,
      title: "Fassai"
    },
    {
      id: 3,
      thumbnail: cert3,
      full: cert3,
      title: ""
    },
    {
      id: 4,
      thumbnail: cert4,
      full: cert4,
      title: ""
    },
    {
      id: 5,
      thumbnail: cert5,
      full: cert5,
      title: ""
    },
  ];

  const certifications = [
    {
      category: 'Quality Management',
      icon: <Award className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      items: [
        'ISO 9001:2015 Quality Management System',
        'Product Quality Certifications',
        'Third-Party Quality Audits',
      ]
    },
    {
      category: 'Safety & Health',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600',
      items: [
        'Occupational Health & Safety Standards',
        'Workplace Safety Certifications',
        'Environmental Health Compliance',
      ]
    },
    {
      category: 'Industry Standards',
      icon: <FileCheck className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      items: [
        'Pharmaceutical Grade Product Certification',
        'Feed Quality Standards Compliance',
        'Construction Industry Certifications',
      ]
    }
  ];

  const commitments = [
    {
      title: 'Quality Assurance',
      description: 'Committed to delivering products and services that meet the highest quality standards across all business verticals.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Safety First',
      description: 'Everyone goes home safely - our unwavering commitment to health and safety in all operations.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Compliance',
      description: 'Adhering to all regulatory requirements and industry standards for sustainable business practices.',
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Certificates & Accreditations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our certifications and adherence to international standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* A4‑Size Gallery Section – 3 images per row */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FileCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certificate Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              View our official certificates  – Click any image to enlarge
            </p>
          </motion.div>

          {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificateImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-xl overflow-hidden bg-white dark:bg-card shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer mx-auto w-full max-w-sm"
                onClick={() => setSelectedImage({ src: image.full, title: image.title })}
              >
                {/* A4 portrait aspect ratio: width / height = 1 / 1.414 */}
                <div className="relative w-full" style={{ aspectRatio: '1 / 1.414' }}>
                  <img
                    src={image.thumbnail}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-black/80 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <h3 className="font-semibold text-center text-sm sm:text-base truncate">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground text-sm mt-8"
          >
            * Click on any certificate image to view full size (A4 orientation)
          </motion.p>
        </div>
      </section>

      {/* Modal – Open/Closable Full Image View */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative flex justify-center" style={{ maxHeight: '85vh' }}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-border">
              <h3 className="text-lg font-semibold text-center">{selectedImage.title}</h3>
              <p className="text-sm text-muted-foreground text-center mt-1">
                Official Certificate – PRA Group
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Rest of your existing sections (Our Certifications, Core Values, etc.) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              PRA Group maintains the highest standards of quality, safety, and compliance across all business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-white dark:bg-card border border-border overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`p-8 bg-gradient-to-br ${cert.color} text-white`}>
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-lg flex items-center justify-center mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{cert.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {cert.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-gradient-to-br from-muted to-background p-12 border border-border"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Core Values & Commitments</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our certifications reflect our dedication to these fundamental principles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center mx-auto mb-4 text-white">
                    {commitment.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-12 text-center">Additional Accreditations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Health & Safety Excellence</h3>
                    <p className="text-muted-foreground">
                      Comprehensive safety protocols ensuring every team member returns home safely. Regular safety audits and training programs maintain our high standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Environmental Sustainability</h3>
                    <p className="text-muted-foreground">
                      Committed to environmental responsibility across all operations. Sustainable practices integrated into construction, logistics, and manufacturing processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pharmaceutical Compliance</h3>
                    <p className="text-muted-foreground">
                      Pharmaceutical-grade products meeting stringent industry standards. Regular quality testing and documentation ensuring compliance with all regulations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Quality Support</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock quality assurance and customer support ensuring consistent service excellence across all business verticals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-[#fb923c]" />
            <h2 className="text-3xl font-bold mb-4">We Believe in Performance</h2>
            <p className="text-xl text-blue-100 mb-6">
              Our certifications and accreditations demonstrate our unwavering commitment to excellence, quality, and safety across all business operations.
            </p>
            <p className="text-blue-200">
              For detailed information about our certifications, please contact our team.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}