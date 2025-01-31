'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Clients Served' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Team Members' },
  { value: '5+', label: 'Countries Reached' },
];

export function Stats() {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="gradient-text-colorful text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}