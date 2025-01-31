'use client';

import { motion } from 'framer-motion';

export function TeamHero() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Team Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/90">
            A diverse group of passionate experts dedicated to delivering exceptional digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}