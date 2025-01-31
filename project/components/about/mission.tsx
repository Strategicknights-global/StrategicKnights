'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Vision Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-colorful mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-white/90">
              To be the global leader in digital innovation, transforming businesses through cutting-edge marketing solutions and setting new standards of excellence in the digital realm.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-colorful mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white/90">
              To empower businesses with innovative digital solutions that drive growth, enhance brand value, and create lasting impact in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>

        {/* Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-colorful mb-6">
            Our Partnerships
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <p className="text-xl text-white/90 mb-4">
                Proud to partner with industry leaders to deliver exceptional value to our clients.
              </p>
              <a 
                href="https://ksglobals.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg text-white hover:text-primary transition-colors"
              >
                <span className="gradient-text-colorful">KS Globals</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}