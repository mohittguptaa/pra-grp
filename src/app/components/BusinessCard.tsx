import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BusinessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  color: string;
  index: number;
}

export function BusinessCard({ icon, title, description, path, color, index }: BusinessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={path} className="group block">
        <div className="relative p-8 rounded-2xl bg-white dark:bg-card border border-border hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"
               style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

          <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
            {icon}
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-[#0A2540] dark:group-hover:text-[#3b82f6] transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-2 text-[#f97316] font-semibold group-hover:gap-4 transition-all">
            Learn More
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
