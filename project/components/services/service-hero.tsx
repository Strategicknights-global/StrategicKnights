'use client';

import { motion } from 'framer-motion';

const serviceInfo = {
  'website-design': {
    title: 'Website Design & Development',
    description: 'Create stunning, responsive websites that drive results',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions for your business growth',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80'
  },
  'seo-optimization': {
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80'
  },
  'social-media': {
    title: 'Social Media Marketing',
    description: 'Build and engage your social media audience',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80'
  },
  'content-marketing': {
    title: 'Content Marketing',
    description: 'Create compelling content that connects with your audience',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  'email-marketing': {
    title: 'Email Marketing',
    description: 'Drive conversions with targeted email campaigns',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80'
  },
  'ppc-advertising': {
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted paid advertising',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80'
  },
  'brand-strategy': {
    title: 'Brand Strategy',
    description: 'Build a strong, memorable brand identity',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80'
  },
  'ecommerce': {
    title: 'E-commerce Solutions',
    description: 'Build and optimize your online store',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80'
  }
};

export function ServiceHero({ service }: { service?: string }) {
  const info = service ? serviceInfo[service as keyof typeof serviceInfo] : {
    title: 'Our Services',
    description: 'Comprehensive digital solutions tailored to elevate your business in the modern marketplace.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80'
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <img
          src={info.image}
          alt={info.title}
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
            {info.title}
          </h1>
          <p className="text-xl text-white/90">
            {info.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}