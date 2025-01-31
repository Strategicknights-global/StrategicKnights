'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Star, Trophy, Shield } from 'lucide-react';

const sections = [
  {
    icon: Target,
    title: 'Vision',
    description: 'To be the global leader in digital innovation, setting new standards of excellence and transforming businesses through cutting-edge solutions.',
    points: [
      'Industry Leadership',
      'Global Impact',
      'Digital Innovation',
      'Client Success'
    ]
  },
  {
    icon: Heart,
    title: 'Mission',
    description: 'To empower businesses with innovative digital solutions that drive growth, enhance brand value, and create lasting impact.',
    points: [
      'Client Empowerment',
      'Innovative Solutions',
      'Sustainable Growth',
      'Value Creation'
    ]
  },
  {
    icon: Star,
    title: 'Values',
    description: 'Our core values guide every decision and interaction, ensuring excellence in all we do.',
    points: [
      'Integrity & Trust',
      'Innovation & Creativity',
      'Excellence & Quality',
      'Client-Centric Approach'
    ]
  },
  {
    icon: Trophy,
    title: 'Goals',
    description: 'Strategic objectives that drive our growth and impact in the digital landscape.',
    points: [
      'Market Leadership',
      'Client Success Stories',
      'Innovation Pipeline',
      'Global Expansion'
    ]
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Maintaining the highest standards of quality in every project and deliverable.',
    points: [
      'Rigorous Testing',
      'Best Practices',
      'Continuous Improvement',
      'Client Satisfaction'
    ]
  }
];

export function Timeline() {
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
            Our Foundation
          </h2>
          <p className="text-xl text-white/90">
            The pillars that drive our success and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text-colorful">
                    {section.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-6">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <span className="w-2 h-2 rounded-full bg-white/50"></span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}