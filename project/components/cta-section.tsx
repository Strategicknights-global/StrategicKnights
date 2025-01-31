'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-olive-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of successful businesses that trust Strategic Knights for their digital growth.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-black text-olive-600 hover:bg-gray-100"
          >
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}