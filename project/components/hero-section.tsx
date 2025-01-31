'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text-colorful">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-white/90">
              Strategic Knights delivers premium digital marketing solutions that drive growth and elevate your brand to new heights.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 px-8 py-6 text-lg rounded-full">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-full">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl backdrop-blur-3xl"></div>
              <div className="absolute inset-4 bg-black/40 rounded-xl backdrop-blur-md border border-white/10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="flex flex-col gap-4 h-full">
                    <motion.div 
                      className="relative flex-1 min-h-0 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                        alt="Digital Marketing"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="relative flex-[1.5] min-h-0 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                        alt="Web Development"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-col gap-4 h-full pt-12">
                    <motion.div 
                      className="relative flex-[1.5] min-h-0 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                        alt="Content Creation"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="relative flex-1 min-h-0 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                        alt="Business Strategy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}