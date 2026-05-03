import { motion } from 'motion/react';
import { Briefcase, MapPin, ChevronRight, Users, TrendingUp, Award, Heart, Send } from 'lucide-react';
import { Link } from 'react-router';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  jobType: string;
  description: string;
  iconClass: string;
  bgColor: string;
}

export function Careers() {
  const jobOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Sales Executive",
      department: "Sales",
      location: "Mumbai / Remote",
      jobType: "Full-time",
      description: "Drive revenue growth and build strong client relationships. Hunt for new opportunities and manage B2B portfolio with strategic approach.",
      iconClass: "fa-chart-line",
      bgColor: "#E9F0F9",
    },
    {
      id: 2,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Pune / Hybrid",
      jobType: "Full-time",
      description: "Lead digital campaigns, brand storytelling and growth initiatives. SEO, content strategy and data-driven creativity.",
      iconClass: "fa-bullhorn",
      bgColor: "#EFF6FF",
    },
    {
      id: 3,
      title: "Operations Coordinator",
      department: "Operations",
      location: "Delhi NCR / On-site",
      jobType: "Full-time",
      description: "Streamline workflows, manage vendor partnerships and ensure operational excellence across supply chain and logistics.",
      iconClass: "fa-cogs",
      bgColor: "#EFFAF5",
    },
    {
      id: 4,
      title: "Accountant",
      department: "Accounting",
      location: "Bangalore (or remote)",
      jobType: "Full-time",
      description: "Handle financial reporting, tax compliance, budgeting & forecasting. Ensure accuracy and GAAP standards.",
      iconClass: "fa-calculator",
      bgColor: "#F3F4FE",
    },
    {
      id: 5,
      title: "Spontaneous Application",
      department: "Talent Pool",
      location: "All locations / Remote",
      jobType: "Full time",
      description: "Don't see a perfect match? We're always looking for passionate minds. Send us your profile and we'll contact you when a relevant role arises.",
      iconClass: "fa-envelope-open-text",
      bgColor: "#F1F6FD",
    },
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: 'Great Team Culture', desc: 'Collaborative environment with talented professionals' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Career Growth', desc: 'Opportunities for advancement and skill development' },
    { icon: <Award className="w-6 h-6" />, title: 'Competitive Benefits', desc: 'Attractive compensation and comprehensive benefits' },
    { icon: <Heart className="w-6 h-6" />, title: 'Work-Life Balance', desc: 'Flexible work arrangements and supportive policies' },
  ];

  const handleApply = (job: JobOpening) => {
    const subject = `Application for ${job.title} (${job.department})`;
    const body = 
      `Hello,\n\nI am interested in the ${job.title} position at PRA Group.\n\n` +
      `Job Details:\n` +
      `- Department: ${job.department}\n` +
      `- Location: ${job.location}\n` +
      `- Type: ${job.jobType}\n\n` +
      `Please find my attached resume and cover letter.\n\n` +
      `Thank you for your consideration.\n\n` +
      `Best regards,\n[Your Name]\n[Your Phone Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ho.praservices@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a4d7a] dark:from-[#0A1929] dark:to-[#1a3a5c] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Build your career with PRA Group - where performance meets passion. We believe in empowering our people to achieve excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#fb923c]" />
                <span>{jobOpenings.length} Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#fb923c]" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#fb923c]" />
                <span>Growing Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Join PRA Group?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in performance and invest in our people's growth and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities across our business verticals
            </p>
          </motion.div>

          {/* Flex container: center-aligned, equal card width */}
          <div className="flex flex-wrap justify-center gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group w-full sm:w-[340px] lg:w-[360px]"
              >
                <div
                  className="h-full p-8 rounded-2xl bg-white dark:bg-card border-2 border-border hover:border-[#f97316] transition-all duration-300 cursor-pointer hover:shadow-2xl flex flex-col"
                  onClick={() => handleApply(job)}
                  style={{
                    backgroundColor: job.bgColor,
                    backgroundImage: `linear-gradient(135deg, ${job.bgColor} 0%, ${job.bgColor}dd 100%)`
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#3b82f6] dark:from-[#3b82f6] dark:to-[#fb923c] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-card text-xs font-semibold border border-border">
                      {job.jobType}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#0A2540] dark:group-hover:text-[#3b82f6] transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {job.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#f97316] font-semibold group-hover:gap-4 transition-all mt-auto">
                    Apply Now
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join a team that values performance, innovation, and growth. Your next career move starts here.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
              <Send className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}