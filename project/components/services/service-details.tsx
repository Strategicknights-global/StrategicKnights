'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  ShoppingCart, 
  Code, 
  Search, 
  Megaphone, 
  Share2, 
  Palette, 
  Target, 
  Mail 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Custom, responsive websites that engage and convert',
    features: [
      'Custom UI/UX Design',
      'Responsive Development',
      'Performance Optimization',
      'SEO-friendly Architecture',
      'Content Management Systems',
      'E-commerce Integration'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing campaigns',
    features: [
      'Marketing Strategy',
      'Campaign Management',
      'Performance Analytics',
      'Conversion Optimization',
      'Marketing Automation',
      'ROI Tracking'
    ],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies for higher rankings',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Content Strategy',
      'Link Building',
      'Performance Tracking'
    ],
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80'
  }
];

export function ServiceDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col lg:flex-row gap-12 items-center mb-20 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-olive-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-xl text-gray-600 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-olive-500 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}