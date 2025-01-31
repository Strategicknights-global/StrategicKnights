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
    title: 'Website Designing', 
    description: 'Custom, responsive websites that engage and convert',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80'
  },
  { 
    icon: ShoppingCart, 
    title: 'E-commerce Development', 
    description: 'Scalable online stores with seamless checkout',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80'
  },
  { 
    icon: Code, 
    title: 'Software Development', 
    description: 'Custom software solutions for your business needs',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  },
  { 
    icon: Search, 
    title: 'SEO', 
    description: 'Data-driven SEO strategies for higher rankings',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80'
  },
  { 
    icon: Megaphone, 
    title: 'Digital Marketing', 
    description: 'Comprehensive digital marketing campaigns',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80'
  },
  { 
    icon: Share2, 
    title: 'Social Media Marketing', 
    description: 'Engaging social media presence and management',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80'
  },
  { 
    icon: Palette, 
    title: 'Branding', 
    description: 'Strategic branding and identity development',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80'
  },
  { 
    icon: Target, 
    title: 'Google AdWords', 
    description: 'Targeted PPC campaigns for maximum ROI',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
  },
  { 
    icon: Mail, 
    title: 'Email & SMS Campaigns', 
    description: 'Effective email and SMS marketing strategies',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-white">Comprehensive digital solutions for your business growth</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl glass-card hover:bg-white/20"
            >
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
              </div>
              <div className="relative p-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-lg text-white/80 font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}