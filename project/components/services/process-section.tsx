'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your needs and goals to create a strategy.'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Detailed project planning and resource allocation.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Implementation of strategies with continuous monitoring.'
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Regular analysis and optimization for best results.'
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-colorful mb-4">
            Our Process
          </h2>
          <p className="text-xl text-white/90">
            A systematic approach to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <span className="text-5xl font-bold gradient-text-colorful mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}