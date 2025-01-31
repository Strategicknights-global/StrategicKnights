'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
    slug: 'website-design',
    description: 'Custom, responsive websites that engage and convert',
    features: [
      'Custom UI/UX Design',
      'Responsive Development',
      'Performance Optimization',
      'SEO-friendly Architecture'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    slug: 'ecommerce',
    description: 'Build and optimize your online store',
    features: [
      'Custom E-commerce Solutions',
      'Payment Gateway Integration',
      'Inventory Management',
      'Mobile Commerce'
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    description: 'Improve your search rankings and drive organic traffic',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Link Building'
    ],
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Comprehensive digital marketing solutions',
    features: [
      'Marketing Strategy',
      'Campaign Management',
      'Analytics & Reporting',
      'ROI Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    slug: 'social-media',
    description: 'Build and engage your social media audience',
    features: [
      'Platform Strategy',
      'Content Creation',
      'Community Management',
      'Paid Advertising'
    ],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Palette,
    title: 'Brand Strategy',
    slug: 'brand-strategy',
    description: 'Build a strong, memorable brand identity',
    features: [
      'Brand Development',
      'Visual Identity',
      'Brand Guidelines',
      'Brand Messaging'
    ],
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    slug: 'ppc-advertising',
    description: 'Maximize ROI with targeted paid advertising',
    features: [
      'Campaign Strategy',
      'Ad Creation',
      'Bid Management',
      'Performance Analysis'
    ],
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    slug: 'email-marketing',
    description: 'Drive conversions with targeted email campaigns',
    features: [
      'Campaign Strategy',
      'Email Design',
      'Automation',
      'Analytics'
    ],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Code,
    title: 'Content Marketing',
    slug: 'content-marketing',
    description: 'Create compelling content that connects',
    features: [
      'Content Strategy',
      'Content Creation',
      'Distribution',
      'Performance Analysis'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  }
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-colorful mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white">
            Comprehensive digital solutions for your business growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-black/40 rounded-xl backdrop-blur-lg hover:bg-black/60 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text-colorful">{service.title}</h3>
                </div>
                <p className="text-white/90 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-white/80">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}