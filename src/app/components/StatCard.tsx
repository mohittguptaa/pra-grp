import { motion } from 'motion/react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
}

export function StatCard({ icon, value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300 group"
    >
      <div className="text-[#fb923c] mb-3 group-hover:scale-110 transition-transform flex justify-center">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-blue-200">{label}</div>
    </motion.div>
  );
}
