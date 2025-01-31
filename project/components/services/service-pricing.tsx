'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: '29,999',
    description: 'Perfect for small businesses starting their digital journey',
    features: [
      'Basic Website Design',
      'Social Media Setup',
      'Basic SEO Package',
      'Monthly Performance Report',
      'Email Support'
    ]
  },
  {
    name: 'Professional',
    price: '59,999',
    description: 'Ideal for growing businesses seeking comprehensive solutions',
    features: [
      'Advanced Website Design',
      'Social Media Management',
      'Complete SEO Package',
      'Weekly Performance Reports',
      'Content Marketing',
      'Priority Support',
      'Marketing Automation'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Custom Website Development',
      'Full-Service Digital Marketing',
      'Advanced SEO & Analytics',
      'Daily Performance Tracking',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Custom Integrations'
    ]
  }
];

export function ServicePricing() {
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
            Transparent Pricing
          </h2>
          <p className="text-xl text-white">
            Choose the plan that best fits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold gradient-text-colorful mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price === 'Custom' ? plan.price : `₹${plan.price}`}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-white/60 ml-2">/month</span>
                  )}
                </div>
                <p className="text-white/80 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-400" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}