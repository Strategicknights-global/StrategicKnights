'use client';

import { motion } from 'framer-motion';

export function CareersHero() {
  return (
    <section className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white-600">
            Be part of a dynamic team shaping the future of digital marketing. We're looking for passionate individuals who want to make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}